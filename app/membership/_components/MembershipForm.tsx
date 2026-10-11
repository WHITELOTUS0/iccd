"use client";

import { useState } from "react";
import { membership, membershipTiers } from "../../_content/site";

export default function MembershipForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const get = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)
        .value;
    const data = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      country: get("country"),
      organisation: get("organisation"),
      tier: get("tier"),
      message: get("message"),
    };

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone / WhatsApp (optional)" name="phone" type="tel" />
        <Field label="Country" name="country" required />
      </div>
      <Field label="Organisation / Church (optional)" name="organisation" />

      <div>
        <label htmlFor="tier" className="block text-sm font-medium text-brand-navy">
          Membership category<span className="text-brand-magenta"> *</span>
        </label>
        <select
          id="tier"
          name="tier"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Choose a category
          </option>
          {membershipTiers.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name} — {t.price} {t.period}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-navy"
        >
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full justify-center rounded-full bg-brand-magenta px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-magenta/90 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Register now"}
      </button>

      {status === "sent" && (
        <p className="text-sm font-medium text-green-600">
          Registration received — thank you! Our team will contact you with
          payment details and your e-certificate.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600">
          {errorMsg || "Failed to send. Please try again."}
        </p>
      )}

      <p className="text-xs text-brand-muted">
        Prefer WhatsApp?{" "}
        <a
          href={`https://wa.me/${membership.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-brand-navy underline-offset-2 hover:underline"
        >
          Message us on {membership.whatsapp}
        </a>
      </p>
    </form>
  );
}

const inputClass =
  "mt-2 block w-full rounded-lg border border-brand-sky-soft bg-white px-3 py-2.5 text-sm text-brand-navy outline-none ring-brand-sky-soft transition focus:border-brand-navy focus:ring-2";

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
        className={inputClass}
      />
    </div>
  );
}
