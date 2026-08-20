import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Section } from "../_components/Section";
import { programs } from "../_content/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "ICCD's eight thematic intervention areas — from livelihoods and education to health, WASH, child protection and refugee response.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Eight intervention areas. One holistic approach."
        intro="From classrooms to clinics, water sources to vocational workshops — every programme is designed with the community that lives it, and adapted to local challenges and opportunities."
      />

      <Section>
        <div className="space-y-20">
          {programs.map((p, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={p.slug}
                id={p.slug}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-sky-soft shadow-sm">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={reverse ? "lg:order-1" : ""}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-3xl font-bold text-brand-lime">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-brand-sky-soft" />
                  </div>
                  <h2 className="mt-4 font-serif text-2xl font-bold text-brand-navy sm:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-brand-muted">
                    {p.summary}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-brand-navy">
            Want to support a specific programme?
          </h2>
          <p className="mt-4 text-brand-muted">
            Designate your gift to a programme that matters most to you — or
            partner with us to scale one in a new district.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/get-involved#donate"
              className="rounded-full bg-brand-magenta px-7 py-3 text-sm font-semibold text-white shadow transition hover:bg-brand-magenta/90"
            >
              Make a donation
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-brand-navy px-7 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
