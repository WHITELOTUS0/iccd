"use client";

import { useState } from "react";
import { PageHero, Section } from "../../_components/Section";
import { siteConfig } from "../../_content/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organisation: (form.elements.namedItem("organisation") as HTMLInputElement)
        .value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        intro="Get in touch about partnership, donation, programmes or media — we&apos;d love to hear from you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* DETAILS */}
          <div className="space-y-8 lg:col-span-2">
            <ContactBlock
              eyebrow="Head office"
              lines={[
                siteConfig.address.line1,
                siteConfig.address.line2,
                siteConfig.address.line3,
                siteConfig.address.line4,
                siteConfig.address.line5,
              ]}
            />
            <ContactBlock
              eyebrow="Phone"
              lines={siteConfig.phones}
              renderLine={(p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s+/g, "")}`}
                  className="block hover:text-brand-magenta"
                >
                  {p}
                </a>
              )}
            />
            <ContactBlock
              eyebrow="Email"
              lines={siteConfig.emails}
              renderLine={(e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="block hover:text-brand-magenta"
                >
                  {e}
                </a>
              )}
            />
            <ContactBlock
              eyebrow="Social"
              lines={["Facebook"]}
              renderLine={(label) => (
                <a
                  key={label}
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-brand-magenta"
                >
                  Follow ICCD on Facebook
                </a>
              )}
            />
            <ContactBlock
              eyebrow="Registration"
              lines={["NGO Board of Uganda", siteConfig.regNumber]}
            />
          </div>

          {/* FORM */}
          <div className="rounded-2xl border border-brand-sky-soft/70 bg-white p-8 shadow-sm lg:col-span-3">
            <h2 className="font-serif text-2xl font-bold text-brand-navy">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-brand-muted">
              Fill in the form and a member of our team will get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Organisation (optional)" name="organisation" />
              <Field label="Subject" name="subject" required />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-navy"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 block w-full rounded-lg border border-brand-sky-soft bg-white px-3 py-2.5 text-sm text-brand-navy outline-none ring-brand-sky-soft transition focus:border-brand-navy focus:ring-2"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full justify-center rounded-full bg-brand-magenta px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-magenta/90 disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              {status === "sent" && (
                <p className="text-sm font-medium text-green-600">
                  Message sent — thank you! We&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  {errorMsg || "Failed to send. Please try again."}
                </p>
              )}

              <p className="text-xs text-brand-muted">
                Prefer email directly?{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-brand-navy underline-offset-2 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactBlock({
  eyebrow,
  lines,
  renderLine,
}: {
  eyebrow: string;
  lines: string[];
  renderLine?: (line: string) => React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-magenta">
        {eyebrow}
      </p>
      <div className="mt-3 space-y-0.5 text-base text-brand-navy">
        {lines.map((l) => (renderLine ? renderLine(l) : <div key={l}>{l}</div>))}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-navy">
        {label}
        {required ? <span className="text-brand-magenta"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-lg border border-brand-sky-soft bg-white px-3 py-2.5 text-sm text-brand-navy outline-none ring-brand-sky-soft transition focus:border-brand-navy focus:ring-2"
      />
    </div>
  );
}
