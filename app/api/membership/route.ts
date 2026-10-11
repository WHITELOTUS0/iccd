import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { membershipTiers } from "../../_content/site";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, country, organisation, tier, message } =
      body as {
        name?: string;
        email?: string;
        phone?: string;
        country?: string;
        organisation?: string;
        tier?: string;
        message?: string;
      };

    if (!name || !email || !country || !tier) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }
    const selected = membershipTiers.find((t) => t.id === tier);
    if (!selected) {
      return NextResponse.json(
        { error: "Please choose a membership category." },
        { status: 400 }
      );
    }
    const tierLabel = `${selected.name} — ${selected.price} ${selected.period}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"ICCD Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Membership Registration] ${selected.name} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone / WhatsApp: ${phone}` : null,
        `Country: ${country}`,
        organisation ? `Organisation / Church: ${organisation}` : null,
        `Membership: ${tierLabel}`,
        message ? "" : null,
        message ? message : null,
      ]
        .filter((l) => l !== null)
        .join("\n"),
      html: `
        <h2>New membership registration</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Country:</strong> ${escapeHtml(country)}</p>
        ${organisation ? `<p><strong>Organisation / Church:</strong> ${escapeHtml(organisation)}</p>` : ""}
        <p><strong>Membership:</strong> ${escapeHtml(tierLabel)}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Membership form error:", err);
    return NextResponse.json(
      { error: "Failed to send registration. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
