import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  Section,
  SectionHeading,
} from "../_components/Section";
import { siteConfig } from "../_content/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Support ICCD through donation, partnership, volunteering or child sponsorship — every contribution helps reach vulnerable communities across Uganda.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Stand with us. Multiply the impact."
        intro="Whether you give once, partner long-term, or volunteer your skills — your support reaches families who need it most."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <PathCard
            id="donate"
            title="Donate"
            description="'Give, and it will be given to you' (Luke 6:38). Whether you're a church, organization, or individual in the USA, Canada, or anywhere in the world, your one-time or recurring gift — through bank transfer or mobile money — supports our programmes directly and changes lives in post-conflict Africa."
            cta="See donation details"
            href="#donate-details"
          />
          <PathCard
            id="partner "
            title="Partner with ICCD"
            description="Countless orphans and vulnerable children in post-conflict Africa are denied an education simply because their families cannot afford school fees. 'Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done' (Proverbs 19:17). Join governments, churches, multilateral agencies and NGOs already walking alongside ICCD as long-term partners in development — and help keep a child in school."
            cta="Talk to our team"
            href="/contact"
          />
          <PathCard
            id="volunteer"
            title="Volunteer"
            description="'Each of you should use whatever gift you have received to serve others' (1 Peter 4:10). We call upon students and professionals from universities in the UK, USA, Germany, Netherlands, Spain, France, India, China, Norway, and Kuwait — plus churches worldwide — to offer skills in health, education, M&E, or communications, and to pray with vulnerable youth and young mothers in refugee camps and communities across Uganda."
            cta="Get involved"
            href="/contact"
          />
          <PathCard
  id="sponsor-a-child"
  title="Sponsor a child"
  description={`In communities across Uganda, orphans, vulnerable children, and refugee children face an uncertain future — many bright and capable, yet unable to attend school simply because no one stands behind them. "Defend the weak and the fatherless; uphold the cause of the poor and the oppressed" (Psalm 82:3). ICCD is calling upon touched hearts around the world to sponsor a child — from primary school all the way to university — providing not just school fees, but skills training, mentorship, and consistent care along the way.

Your sponsorship becomes more than tuition; it becomes a relationship that walks a child from vulnerability to purpose. "Whatever you did for one of the least of these... you did for me" (Matthew 25:40). One child, one sponsor, one transformed future — will you answer the call?`}
  cta="Sponsor a child"
  href="/contact"
/>
        </div>
      </Section>

      {/* DONATE DETAILS */}
      <section id="donate-details" className="bg-brand-navy py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-lime">
            Ways to give
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold sm:text-4xl">
            Donation details
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            ICCD accepts donations through bank transfer, mobile money, and
            in-kind partnerships. Reach out to our Executive Director to confirm
            current account details and receive an official receipt.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <GiveCard
              title="Bank transfer"
              lines={[
                "International Christian Concern for Development (ICCD)",
                "Bank Name: CAIRO BANK UGANDA",
                "BANK CODE: 18",
                "BANK SORT CODE:18-01-47",
                "BANK SWIFT CODE: CAIEUGKA",
                "BANK ADDRESS: PLOT 16 MACKINNON ROAD, NAKASERO, ARIE TOWERS KAMPALA UGANDA",
                "INTERMEDIARY BANK: BANK DE CAIRE",
                "INTERMEDIARY SWIFT CODE: BCAIEGCX011",
                "ACCOUNT NUMBER : 1000755083",
                "ACCOUNT NAME: ALECHO STEPHEN OBONYO",
                "Branch: Kampala, Uganda",
              ]}
            />
            <GiveCard
              title="Mobile money (Uganda)"
              lines={[
                "MTN / Airtel Money — confirm number with our office",
                `Call: ${siteConfig.phones[0]}`,
              ]}
            />
            <GiveCard
              title="In-kind partnership"
              lines={[
                "Food and nutrition supplies",
                "Clothing and shoes",
                "Shelter materials (tents, mattresses, blankets)",
                "Medical and treatment support",
                "School fees and educational supplies",
                "Materials for vocational training",
                "Hygiene kits",
                "Computers, desktops and laptops",
                "Bibles and Christian literature",
              ]}
              footer={"Email: " + siteConfig.donationEmail}
            />
          </div>

          <div className="mt-12 rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8">
            <p className="font-serif text-lg leading-relaxed text-white">
              Before sending a donation, please contact{" "}
              <a
                href={`mailto:${siteConfig.donationEmail}`}
                className="underline decoration-brand-lime decoration-2 underline-offset-4"
              >
                {siteConfig.donationEmail}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${siteConfig.phones[0].replace(/\s+/g, "")}`}
                className="underline decoration-brand-lime decoration-2 underline-offset-4"
              >
                {siteConfig.phones[0]}
              </a>{" "}
              so we can share current bank details, mobile money numbers and
              issue your official receipt.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            eyebrow="Partnership"
            title="Let&apos;s build something lasting."
            intro={`"Two are better than one, because they have a good return for their labour: If either of them falls down, one can help the other up." — Ecclesiastes 4:9-10. ICCD is open to long-term partnerships with governments, churches, multilateral agencies — including UN bodies such as UNHCR, UNICEF, and WHO — foundations, philanthropic trusts and like-minded NGOs.`}
            align="center"
          />
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-brand-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-deep"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PathCard({
  id,
  title,
  description,
  cta,
  href,
}: {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  return (
    <article
      id={id}
      className="group rounded-2xl border border-brand-sky-soft/70 bg-white p-8 transition hover:border-brand-sky"
    >
      <div className="h-1 w-12 rounded-full bg-brand-magenta" />
      <h3 className="mt-5 font-serif text-2xl font-bold text-brand-navy">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-brand-muted">
        {description}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-magenta transition group-hover:gap-2"
      >
        {cta} <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

function GiveCard({
  title,
  lines,
  footer,
}: {
  title: string;
  lines: string[];
  footer?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
      <h3 className="font-serif text-lg font-bold text-brand-lime">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-sm text-white/85">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      {footer && <p className="mt-4 text-sm text-white/85">{footer}</p>}
    </div>
  );
}
