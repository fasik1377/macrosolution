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

    const formData = new FormData();
    formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY || "");
    formData.append("name", name);
    formData.append("company", company || "");
    formData.append("email", email);
    formData.append("solution", solution || "");
    formData.append("message", message);
    formData.append("subject", `New Contact Form Submission: ${solution || "General Inquiry"}`);
    formData.append("replyto", email);
    formData.append("from_name", "Macro Solution Contact Form");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error("Web3Forms error:", result);
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