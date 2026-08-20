import type { Metadata } from "next";
import Image from "next/image";
import {
  PageHero,
  Section,
  SectionHeading,
} from "../_components/Section";
import { beneficiaryNationalities, regions } from "../_content/site";

export const metadata: Metadata = {
  title: "Where We Work",
  description:
    "ICCD serves Bukedi, West Nile and Northern Uganda — reaching refugees from across the East African region.",
};

export default function WhereWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="From Bukedi to the borderlands."
        intro="ICCD is anchored in Tororo and reaches across Uganda — serving host communities and refugees displaced from across the East African region."
      />

      <Section>
        <SectionHeading
          eyebrow="Regions of operation"
          title="Four regions. One mission."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {regions.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl border border-brand-sky-soft/70 bg-white p-8"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-sky-soft text-brand-navy">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M12 22s-8-7.58-8-13a8 8 0 1 1 16 0c0 5.42-8 13-8 13z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-navy">
                  {r.name}
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                {r.detail}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-brand-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/67_uganda_marked.PNG"
                alt="Communities ICCD serves"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-magenta">
                Who we serve
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-brand-navy sm:text-4xl">
                A regional response.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-muted">
                ICCD supports host communities in Uganda alongside refugees who
                have fled conflict and crisis across the region.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {beneficiaryNationalities.map((n) => (
                  <li
                    key={n}
                    className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-brand-navy ring-1 ring-brand-sky-soft"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-brand-lime"
                      aria-hidden
                    />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
