import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer needs Node.js APIs (net/tls), so this route must not run on the Edge runtime.
export const runtime = "nodejs";

// TODO: switch back to "info@macrosolution.mu" once the form is confirmed working.
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "fasikabera1@gmail.com";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  solution: string;
  message: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function sendWithSmtp(data: ContactPayload, subject: string) {
  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Company", data.company || "-"],
    ["Email", data.email],
    ["Solution", data.solution || "General Inquiry"],
    ["Message", data.message],
  ];

  await transporter.sendMail({
    // Most SMTP providers reject mail whose From does not match the authenticated account,
    // so the visitor's address goes in Reply-To instead.
    from: `"Macro Solution Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: `"${data.name.replace(/"/g, "")}" <${data.email}>`,
    subject,
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
    html: `<table cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="border:1px solid #ddd;font-weight:bold;vertical-align:top">${label}</td><td style="border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
  )
  .join("\n")}
</table>`,
  });
}

async function sendWithFormSubmit(data: ContactPayload, subject: string, request: NextRequest) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("company", data.company);
  formData.append("email", data.email);
  formData.append("solution", data.solution);
  formData.append("message", data.message);
  formData.append("_subject", subject);
  formData.append("_replyto", data.email);
  formData.append("_template", "table");
  formData.append("_captcha", "false");

  const origin = request.headers.get("origin") || request.nextUrl.origin;
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO_EMAIL}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Origin: origin,
      Referer: `${origin}/contact`,
    },
    body: formData,
  });

  // FormSubmit sometimes sends JSON with a text/html content type, so parse the body directly.
  const text = await response.text();
  let result: { success?: string | boolean; message?: string };
  try {
    result = JSON.parse(text);
  } catch {
    console.error("FormSubmit non-JSON response:", text);
    throw new Error("FormSubmit returned an invalid response");
  }

  // FormSubmit answers 200 with success "false" (e.g. while the address is not yet activated).
  if (!response.ok || String(result.success) !== "true") {
    console.error(`FormSubmit error (HTTP ${response.status}):`, text);
    throw new Error(result.message || "FormSubmit rejected the submission");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data: ContactPayload = {
      name: String(body.name || "").trim(),
      company: String(body.company || "").trim(),
      email: String(body.email || "").trim(),
      solution: String(body.solution || "").trim(),
      message: String(body.message || "").trim(),
    };

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    const subject = `New Contact Form Submission: ${data.solution || "General Inquiry"}`;
    const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (smtpConfigured) {
      await sendWithSmtp(data, subject);
    } else {
      await sendWithFormSubmit(data, subject, request);
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error, error instanceof Error ? error.cause : "");
    return NextResponse.json(
      { error: "Sorry, our form could not send your message automatically. Your details are kept below." },
      { status: 500 }
    );
  }
}
