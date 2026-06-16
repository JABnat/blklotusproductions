import { NextResponse } from "next/server";

export const runtime = "edge";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, projectType, message, honeypot } = body ?? {};

  // Honeypot: bots fill this hidden field; real users never see it
  if (honeypot) {
    return NextResponse.json({ ok: true }); // silent success
  }

  // Server-side validation
  const errors = {};
  if (!name?.trim()) errors.name = "Name is required.";
  if (!email?.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Invalid email address.";
  if (!message?.trim()) errors.message = "Message is required.";
  else if (message.trim().length < 10) errors.message = "Message is too short.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
  }

  const apiKey   = process.env.RESEND_API_KEY;
  const toEmail  = process.env.CONTACT_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("[contact] Missing RESEND_API_KEY or CONTACT_EMAIL env vars");
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 }
    );
  }

  const subject = `New inquiry${projectType ? ` — ${projectType}` : ""} from ${name.trim()}`;

  const html = `
    <h2 style="font-family:sans-serif;margin-bottom:1.5rem">New Contact Form Submission</h2>
    <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px 0;color:#888;width:130px">Name</td><td style="padding:8px 0"><strong>${escHtml(name)}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${escHtml(email)}">${escHtml(email)}</a></td></tr>
      ${projectType ? `<tr><td style="padding:8px 0;color:#888">Project Type</td><td style="padding:8px 0">${escHtml(projectType)}</td></tr>` : ""}
    </table>
    <hr style="margin:1.5rem 0;border:none;border-top:1px solid #e5e5e5"/>
    <p style="font-family:sans-serif;color:#333;line-height:1.7;white-space:pre-wrap">${escHtml(message.trim())}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "BLK Lotus Contact <contact@blklotus-productions.com>",
      to: [toEmail],
      reply_to: email.trim(),
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
