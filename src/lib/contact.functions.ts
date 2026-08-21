import { createServerFn } from "@tanstack/react-start";

import { contactSchema } from "./contact-schema";

const RECIPIENT = "info@royaventure.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const from = process.env["CONTACT_FROM_EMAIL"] ?? "Roya Ventures <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("Contact form: RESEND_API_KEY is not configured");
      return { ok: false as const, error: "Email service is not configured yet." };
    }

    const rows: [string, string][] = [
      ["Name", data.name],
      ["Organisation", data.organisation ?? "—"],
      ["Email", data.email],
      ["Phone", data.phone ?? "—"],
      ["Subject", data.subject ?? "—"],
    ];

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#18314E;">
        <h2 style="color:#18314E;margin:0 0 16px;">New Contact Form Submission</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-size:14px;">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><td style="color:#B3955A;font-weight:bold;">${label}</td><td>${escapeHtml(value)}</td></tr>`,
            )
            .join("")}
        </table>
        <h3 style="color:#B3955A;margin:24px 0 8px;">Message</h3>
        <p style="white-space:pre-wrap;font-size:14px;line-height:1.6;">${escapeHtml(data.message)}</p>
      </div>
    `;

    const text = [
      ...rows.map(([label, value]) => `${label}: ${value}`),
      "",
      "Message:",
      data.message,
    ].join("\n");

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from,
          to: [RECIPIENT],
          reply_to: data.email,
          subject: "New Contact Form Submission – Roya Ventures",
          html,
          text,
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        console.error(`Contact form email failed [${response.status}]: ${body}`);
        return { ok: false as const, error: "We couldn't send your message. Please try again." };
      }

      return { ok: true as const };
    } catch (error) {
      console.error("Contact form email error", error);
      return { ok: false as const, error: "We couldn't send your message. Please try again." };
    }
  });
