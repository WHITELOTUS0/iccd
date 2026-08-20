import Image from "next/image";
import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeading,
} from "../_components/Section";
import {
  faithStatements,
  leadership,
  principles,
  siteConfig,
} from "../_content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ICCD — our background, vision, mission, guiding principles, leadership and Church of Uganda partnership.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ICCD"
        title="A faith-based humanitarian and developmental and NGOs "
        intro=" register in Uganda to reach-out the most volunalable groups of children , Women and Refugees in Africa in the areas of Health,Education, Water & sanitation, Livehoods in the Household ,Founded in partnership with the Anglican Church of Uganda, ICCD walks alongside refugees, women and children in the places that need it most. (The LORD watches over the foreigner and sustains the fatherless and the widow ---Psalm 146:9)"
      />

      {/* BACKGROUND */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-sky-soft shadow-sm">
            <Image
              src="/images/IMG-20260413-WA0012.jpg"
              alt="ICCD serving communities across Uganda"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Background"
              title="Rooted in faith. Driven by need."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-muted">
              <p>
                ICCD is an indigenous, faith-based humanitarian and development
                NGO officially registered with the NGO Board of Uganda under{" "}
                {siteConfig.regNumber}. We focus on those who often go unnoticed
                — marginalised mothers, adolescents, children and families
                living inside refugee settlements, IDP camps, post-conflict
                regions and rural communities across Uganda.
              </p>
              <p>
                <h4 className="text-black font-bold">THIS IS OUR MISSION</h4>Empowering mothers, adolescents, and children in underserved communities with access to healthcare, education, and economic opportunity — for a better quality of life.("Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.----Isaiah 1:17")
              </p>
              <p>
                <h4 className="text-black font-bold">THIS IS OUR VISION</h4>
                A prospering and sustainable life for every woman, man and child ("I have come that they may have life, and have it to the full.---John 10:10")
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* VISION / MISSION */}
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card
              eyebrow="Vision"
              title="A world where every woman, man and child lives a healthy, fulfilling life of sustained reliance."
            />
            <Card
              eyebrow="Mission"
              title="To empower children, young mothers, refugees and other vulnerable groups in underserved communities to access rights-based healthcare, education and economic opportunities — for better health outcomes and improved quality of life."
            />
            <Card
              eyebrow="Goal"
              title="Promoting post-conflict recovery through income-generating skills training and safe spaces for women, youth, and children.  I will restore to you the years the locusts have eaten--Joel 2:25 "
            />
          </div>
        </div>
      </section>

      {/* STATEMENT OF FAITH */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <SectionHeading
              eyebrow="Statement of Faith"
              title="Faith expressed through practical care."
              intro="Our identity and service flow from faith in Jesus Christ. We minister with the Word of God and practical action, reaching children, women, refugees, the rural poor and persons with disabilities."
            />
            <blockquote className="mt-8 rounded-2xl bg-brand-navy p-7 text-white shadow-sm">
              <p className="font-serif text-lg leading-relaxed">
                &ldquo;Religion that God our Father accepts as pure and
                faultless is this: to look after orphans and widows in their
                distress and to keep oneself from being polluted by the
                world.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-brand-lime">
                James 1:27
              </footer>
            </blockquote>
            <div className="mt-6 border-l-4 border-brand-magenta pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-magenta">
                Our motto
              </p>
              <p className="mt-2 font-serif text-xl font-bold leading-snug text-brand-navy">
                Reaching the vulnerable with the love of Christ and practical
                care.
              </p>
            </div>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2">
            {faithStatements.map((belief, index) => (
              <li
                key={belief.title}
                className="rounded-2xl border border-brand-sky-soft/70 bg-brand-cream p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-navy font-serif text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-navy">
                      {belief.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                      {belief.body}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-brand-magenta">
                      {belief.scripture}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* PRINCIPLES */}
      <Section className="bg-brand-cream">
        <SectionHeading
          eyebrow="Guiding Principles"
          title="The convictions that shape every programme."
          intro="From child protection to non-discrimination, these principles anchor how we design and deliver our work."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-brand-sky-soft/70 bg-white p-6"
            >
              <div className="h-1 w-10 rounded-full bg-brand-magenta" />
              <h3 className="mt-5 font-serif text-lg font-bold text-brand-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* MESSAGES */}
      <section className="bg-brand-sky-soft/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Messages from our leaders"
            title="Voices behind the mission."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <MessageCard
              image="/images/IMG_20260216_135530_271.jpg"
              name="The Rt. Rev. Samuel G.B. Egesa"
              role="Bishop of Bukedi Diocese — Patron, ICCD"
              quote="Despite the legal instruments in place, more must be done to protect the rights of all individuals. Support for organisations like ICCD is pivotal in empowering women, children, orphans and refugees. Let us embark on this journey of transformation together."
            />
            <MessageCard
              image="/images/IMG_20260225_094629_071.jpg"
              name="Mr. Stephen A. Obonyo"
              role="Executive Director"
              quote="ICCD seeks to align with like-minded allies, particularly within host communities, to drive our objectives forward. Our determination is unwavering — together, we can bring about meaningful change."
            />
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind ICCD."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((person) => (
            <div
              key={person.name}
              className="rounded-2xl border border-brand-sky-soft/70 bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy font-serif text-lg font-bold text-white">
                {initials(person.name)}
              </div>
              <h3 className="mt-4 font-serif text-base font-bold text-brand-navy">
                {person.name}
              </h3>
              <p className="mt-1 text-sm text-brand-muted">{person.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ORG STRUCTURE */}
      <section className="bg-brand-navy py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-lime">
            How we&apos;re organised
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold sm:text-4xl">
            Structured for accountability and reach.
          </h2>
          <p className="mt-6 max-w-3xl text-white/85">
            From the Patron through the Board of Directors, Executive Director
            and Programme Director, ICCD is built around clear lines of
            responsibility — with dedicated leads for Admin &amp; Finance,
            Human Resources, Training, Relief &amp; Development, and
            Environmental Conservation.
          </p>
          <ol className="mt-10 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Patron",
              "Board of Directors",
              "Executive Director",
              "Programme Director",
              "Admin & Finance",
              "Human Resources",
              "Training & Development",
              "Relief & Development",
              "Environment Conservation",
            ].map((role, i) => (
              <li
                key={role}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3"
              >
                <span className="font-serif text-lg font-bold text-brand-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{role}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

function Card({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-sky-soft/60">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-magenta">
        {eyebrow}
      </p>
      <p className="mt-4 font-serif text-xl font-bold leading-snug text-brand-navy">
        {title}
      </p>
    </div>
  );
}

function MessageCard({
  image,
  name,
  role,
  quote,
}: {
  image: string;
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-sky-soft/60">
      <div className="relative aspect-[16/9]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-8">
        <blockquote className="font-serif text-lg leading-relaxed text-brand-navy">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <footer className="mt-6 text-sm">
          <div className="font-semibold text-brand-navy">{name}</div>
          <div className="text-brand-muted">{role}</div>
        </footer>
      </div>
    </article>
  );
}

function initials(name: string) {
  return name
    .replace(/^(The\s+)?(Rt\.\s+)?(Rev\.\s+|Mr\.\s+|Ms\.\s+|Dr\.\s+)?/i, "")
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
