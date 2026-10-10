import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, solution, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://formsubmit.co/ajax/ranji.mani@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        company,
        email,
        solution,
        message,
        _subject: `New Contact Form Submission: ${solution || "General Inquiry"}`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("FormSubmit error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}