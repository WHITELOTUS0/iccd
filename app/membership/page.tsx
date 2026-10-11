import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "../_components/Section";
import {
  membership,
  membershipBenefits,
  membershipTiers,
  siteConfig,
} from "../_content/site";
import MembershipForm from "./_components/MembershipForm";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join the ICCD movement. Membership categories for youth, community members, diaspora, churches, humanitarian organizations and international partners — all in USD.",
};

export default function MembershipPage() {
  const waLink = `https://wa.me/${membership.whatsapp.replace(/\D/g, "")}`;

  return (
    <>
      {/* HERO */}
      <section className="border-b border-brand-sky-soft/60 bg-gradient-to-br from-brand-navy via-brand-navy-soft to-brand-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-lime">
            Membership — Join the movement
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 max-w-3xl font-serif text-xl text-white/90 sm:text-2xl">
            {siteConfig.fullName}
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-sky">
            {membership.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#register"
              className="rounded-full bg-brand-magenta px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-magenta/90"
            >
              Become a member today
            </a>
            <a
              href="#categories"
              className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See categories
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE ARE + VISION */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="A faith-based nonprofit transforming lives." />
            <p className="mt-6 text-lg leading-relaxed text-brand-muted">
              {membership.whoWeAre}
            </p>
          </div>
          <div className="rounded-2xl border border-brand-sky-soft/70 bg-brand-cream p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-magenta">
              Our vision
            </p>
            <p className="mt-4 font-serif text-2xl font-bold leading-snug text-brand-navy sm:text-3xl">
              {membership.vision}
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-muted">
              — {membership.visionScripture}
            </p>
          </div>
        </div>
      </Section>

      {/* CATEGORIES */}
      <section id="categories" className="bg-brand-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Membership categories"
            title="Join the movement."
            intro="Choose the category that fits you or your organization. All fees are in USD."
            align="center"
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {membershipTiers.map((tier, i) => (
              <li
                key={tier.id}
                className={`flex flex-col rounded-2xl border p-6 transition ${
                  tier.featured
                    ? "border-brand-magenta bg-brand-navy text-white"
                    : "border-brand-sky-soft/70 bg-white hover:border-brand-sky"
                }`}
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    tier.featured ? "text-brand-lime" : "text-brand-magenta"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`mt-3 font-serif text-lg font-bold leading-snug ${
                    tier.featured ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="mt-auto pt-6">
                  <span
                    className={`font-serif text-3xl font-bold ${
                      tier.featured ? "text-brand-lime" : "text-brand-navy"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`ml-2 text-sm ${
                      tier.featured ? "text-white/80" : "text-brand-muted"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                <a
                  href="#register"
                  className={`mt-4 inline-flex text-sm font-semibold ${
                    tier.featured ? "text-brand-lime" : "text-brand-magenta"
                  }`}
                >
                  Register <span aria-hidden>&nbsp;→</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BENEFITS + IMPACT */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Benefits" title="What members receive." />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {membershipBenefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-brand-sky-soft/70 bg-white p-4"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-lime text-xs font-bold text-brand-navy"
                  >
                    ✓
                  </span>
                  <span className="text-base text-brand-navy">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-brand-magenta to-brand-navy p-8 text-white lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-lime">
              Impact of your {membership.impactAmount}
            </p>
            <p className="mt-4 font-serif text-2xl font-bold leading-snug sm:text-3xl">
              {membership.impactLine}
            </p>
            <a
              href="#register"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-lime"
            >
              Become a member today
            </a>
          </div>
        </div>
      </Section>

      {/* REGISTER */}
      <section id="register" className="bg-brand-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2">
              <SectionHeading
                eyebrow="Register now"
                title="Become a member today."
                intro="Fill in the form and our team will confirm your category, share payment details and send your e-certificate."
              />
              <div className="space-y-5 text-base text-brand-navy">
                <ContactLine label="WhatsApp">
                  <a href={waLink} target="_blank" rel="noreferrer" className="hover:text-brand-magenta">
                    {membership.whatsapp}
                  </a>
                </ContactLine>
                <ContactLine label="Email">
                  <a href={`mailto:${membership.email}`} className="hover:text-brand-magenta">
                    {membership.email}
                  </a>
                </ContactLine>
                <ContactLine label="Website">
                  <a href={membership.website} className="hover:text-brand-magenta">
                    {membership.websiteLabel}
                  </a>
                </ContactLine>
              </div>
              <blockquote className="border-l-4 border-brand-magenta pl-4 font-serif text-lg italic text-brand-navy">
                &ldquo;{membership.closingScripture.text}&rdquo;
                <footer className="mt-1 text-sm not-italic text-brand-muted">
                  — {membership.closingScripture.ref}
                </footer>
              </blockquote>
            </div>

            <div className="rounded-2xl border border-brand-sky-soft/70 bg-white p-8 shadow-sm lg:col-span-3">
              <h2 className="font-serif text-2xl font-bold text-brand-navy">
                Membership registration
              </h2>
              <p className="mt-2 text-sm text-brand-muted">
                All fees are in USD. Organizations receive a Partnership MOU.
              </p>
              <MembershipForm />
            </div>
          </div>
        </div>
      </section>

      {/* CROSS LINK */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="More ways to help"
            title="Give, partner or sponsor a child."
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/get-involved#donate"
              className="rounded-full bg-brand-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-deep"
            >
              Donate
            </Link>
            <Link
              href="/get-involved#sponsor-a-child"
              className="rounded-full border border-brand-navy/30 px-7 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-sky-soft/40"
            >
              Sponsor a child
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactLine({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-magenta">
        {label}
      </p>
      <div className="mt-1">{children}</div>
    </div>
  );
}
