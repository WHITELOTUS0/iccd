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

const objectives = [
  {
    title: "Building self-reliance, not dependency",
    body: "Our programmes span safe water, sanitation and hygiene, secure and accessible shelter, sustainable livelihoods and dependable health care. Throughout, ICCD prioritises self-reliance — helping vulnerable families need less aid over time while still reaching essential services. We design integrated, inclusive interventions that bring displaced populations and their host communities together, rather than treating them as separate groups.",
  },
  {
    title: "Lifesaving response, long-term support",
    body: "When humanitarian crises strike, ICCD delivers urgent assistance — food and nutrition, school feeding, clean water and emergency supplies — to those who need it most. That response doesn't end when the emergency does: we stay engaged with refugees and displaced people in both camp and urban settings, working closely with UNHCR, the International Organization for Migration (IOM) and other responders to sustain support over the long term.",
  },
  {
    title: "Partnership-driven, community-led",
    body: "ICCD stands with refugees, displaced people and vulnerable communities affected by conflict and crisis around the world. Local and international staff work alongside national and local government, nonprofits, UN agencies and displaced communities themselves — identifying gaps in aid and shaping programmes around the specific, urgent needs on the ground, rather than a one-size-fits-all model.",
  },
  {
    title: "Sponsorship as transformation",
    body: "ICCD's sponsorship programme goes far beyond covering school fees — it's about transformation from the inside out. Every year, our team invests in the hearts and minds of every child through structured mentorship visits and workshops across our partner network, from Primary One all the way through university for our most vulnerable children and refugees. Through mentorship, children encounter the truth of the gospel, grow in character, and are equipped with the tools to navigate decisions and life's challenges as Christ-centred young people.",
  },
];

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

      {/* SPECIFIED OBJECTIVES */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-magenta">
            ICCD Specified Objectives
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-navy sm:text-4xl">
            What guides every programme we run.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {objectives.map((obj, idx) => (
            <div
              key={obj.title}
              className="rounded-2xl border border-brand-sky-soft/70 bg-white p-7 shadow-sm"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl font-bold text-brand-lime">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-brand-sky-soft" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-brand-navy">
                {obj.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-muted">
                {obj.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
