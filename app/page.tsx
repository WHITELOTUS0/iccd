import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "./_components/Section";
import {
  fieldMoments,
  impact,
  partners,
  programs,
  siteConfig,
} from "./_content/site";

export default function Home() {
  const featuredPrograms = programs.slice(0, 6);

  return (
    <>
      {/* TOP BANNER IMAGE */}
      {/* TOP BANNER IMAGE */}
<section className="relative isolate min-h-[420px] overflow-hidden bg-brand-navy sm:min-h-[560px]">
  <Image
    src="/images/iccd-cover.png"
    alt="ICCD — International Christian Concern for Development"
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />
</section>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/IMG_20260225_094617_267.jpg"
            alt="ICCD — International Christian Concern for Development"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/55" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-lime sm:text-base">
            {siteConfig.fullName} ({siteConfig.name})
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hope, dignity and opportunity for Africa&apos;s most vulnerable.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {siteConfig.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/get-involved#donate"
              className="rounded-full bg-brand-magenta px-7 py-3 text-base font-semibold text-white shadow-md transition hover:bg-brand-magenta/90"
            >
              Support our work
            </Link>
            <Link
              href="/programs"
              className="rounded-full border border-white/40 bg-white/5 px-7 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Explore programs
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <Section className="bg-brand-cream">
        <div className="grid items-start gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading
              eyebrow="Our Mission"
              title="To empower the unseen, the displaced and the underserved."
            />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-brand-muted lg:col-span-2">
            <p>
             Who We Are
ICCD is a Faith-Based Humanitarian and Development NGO (Reg. No. IND R4028403NB) working to uplift vulnerable women, adolescents and children in Uganda's refugee settlements, IDP camps, and rural/semi-urban communities — through health, education, social welfare, livelihoods and life-skills support. ICCD partners with development stakeholders to combat HIV & AIDS and to advance gender equity, peace, education and WASH. Because women and adolescent girls (ages 10–26) are both the most affected by displacement and the primary caregivers holding families together, ICCD's targeted support to them directly strengthens the recovery of entire households and communities.
            </p>
            <p>
             The Girl Child in Refugee and Rural Schools
Girls in these communities face compounding barriers to education, including:

Early marriage & teenage pregnancy — a leading cause of dropout
Menstrual hygiene barriers — poor sanitation causes absenteeism
Unsafe journeys to school — risk of harassment and violence
Gender-based violence — heightened in camps and unstable households
Household burdens — chores and caregiving take priority over school
Cost of schooling — girls are withdrawn first when funds run short
Disrupted, low-quality learning — overcrowding, few trained/female teachers
Psycho-social trauma — unaddressed trauma affects attendance and focus
Weak protection systems — few functioning reporting mechanisms in schools
            </p>
          </div>
        </div>
      </Section>

      {/* IMPACT NUMBERS */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-brand-lime">
            Our impact so far
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {impact.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-white/75">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Eight intervention areas, one holistic approach."
          
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((p) => (
            <article
              key={p.slug}
              className="group rounded-2xl border border-brand-sky-soft/70 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-sky hover:shadow-lg"
            >
              <div className="h-1 w-10 rounded-full bg-brand-lime" />
              <h3 className="mt-5 font-serif text-xl font-bold text-brand-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {p.summary}
              </p>
              <Link
                href={`/programs#${p.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-magenta transition group-hover:gap-2"
              >
                Learn more <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-full border border-brand-navy px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
          >
            See all programs <span aria-hidden>→</span>
          </Link>
        </div>
      </Section>

      {/* LEADERSHIP QUOTE */}
      <section className="bg-brand-sky-soft/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8 lg:py-24">
          
          
          
          
          
          <span>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src="/images/IMG_20260216_135539_706.jpeg"
              alt="ICCD community work"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            
          </div>
          <footer className="mt-6 text-sm text-brand-muted">
              <div className="font-semibold text-brand-navy">
                The Rt. Rev. Samuel G.B. Egesa
              </div>
              <div>Bishop of Bukedi Diocese Church of Uganda Email: iccd42351@gmail.com +256 775 057078 +256 702 9840— Patron, ICCD</div>
            </footer>



             <div style={{ marginTop: "50px" }}>


             <span>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src="/images/Dr Masaba.jpeg"
              alt="ICCD community work"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            
          </div>
          <footer className="mt-6 text-sm text-brand-muted">
              <div className="font-semibold text-brand-navy">
                Dr Masaba Joseph Benon MB Chb, M.Med General Surgery, FCS Urology COSECSA, Urologist MNRH, Renal Trnsplant Surgeon MNRH, Been in practice since 2001
              </div>
              <div>Chairman Board of Directors ICCD Email: iccd42351@gmail.com +256 725 36089</div>
            </footer>


            <div style={{ marginTop: "50px" }}>


             <span>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src="/images/Council Peter.jpg"
              alt="ICCD community work"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            
          </div>
          <footer className="mt-6 text-sm text-brand-muted">
              <div className="font-semibold text-brand-navy">
                Council Andrew Peter Masaba
              </div>
              <div>General Secretary of the Board of ICCD , Proffessional Lawyer from Makerere University , Lecturer and a Commissinal Autony General Minister of Justice and Consistitunal Affair Email: iccd42351@gmail.com +256 772 362442</div>
            </footer>

            </span>
        </div>


            </span>
        </div>

            </span>









                <span>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src="/images/IMG-2.jpeg"
              alt="ICCD community work"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            
          </div>
          <footer className="mt-6 text-sm text-brand-muted">
              <div className="font-semibold text-brand-navy">
                The Reverend Canon Simon Sibomana 
              </div>
              <div>ICCD DIRECTOR  Reverend Church of Uganda Kampala Diocese Email: iccd42351@gmail.com +256 782 148698</div>
            </footer>

            <div style={{ marginTop: "50px" }}>

             <span>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src="/images/e44.jpeg"
              alt="ICCD community work"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            
          </div>
          <footer className="mt-6 text-sm text-brand-muted">
              <div className="font-semibold text-brand-navy">
                Mr.Stephen.A.Obongo
              </div>
              <div>ICCD Founder and Excutive Director Email: iccd42351@gmail.com +256 782 584105 +256 754 044067</div>
          </footer>


          <div style={{ marginTop: "50px" }}>

             <span>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src="/images/Dr Stephen.jpg"
              alt="ICCD community work"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            
          </div>
          <footer className="mt-6 text-sm text-brand-muted">
              <div className="font-semibold text-brand-navy">
                Dr.John Stephen Olwenyi Obbo , Physician Fellow OF Royal colleges of London , Edinburgh and  a Fellow of the East College of Physicians , Central and SOUTHERN Africa. A Director of Mbale and Lira Regional Regerral Hospitals, A Vice Chairman of ICCD Board of Directors , Director Health Programmes
              </div>
              <div>Director Health Programmes Email: iccd42351@gmail.com +256 772437407</div>
          </footer>

            </span>
            </div>

            </span>
            </div>
           </span>



<div className="flex flex-col justify-center lg:col-span-3">

  <div className="my-8 mb flex justify-center">
  <a href="/get-involved" className="inline-block">
    <img
      src="/images/LOGO.PNG"
      alt="ICCD field work"
      className="mx-auto h-auto max-w-full rounded-2xl"
    />
  </a>
  
</div>
<h1>  INTERNATIONAL
 CHRISTIAN 
CONCERN FOR 
DEVELOPMENT - (ICCD)</h1>
<p>With humility and purpose, we introduce the International Christian Concern for De
velopment (ICCD), a Faith-Based Humanitarian and Development Non-Government 
Organization, officially registered under Reg.No. IND R4028403NB. Our mission is 
resolute: to uplift vulnerable and underserved young individuals, women, and chil
dren.
ICCD’s relentless focus lies on those who often go unnoticed — marginalized moth
ers, adolescents, children, and their families existing within the confines of refugee 
settlements, IDP camps, post-conflict regions, and rural communities across Ugan
da. Our dedication is unwavering, as we strive to cater to their health, educational, 
social welfare, and livelihood needs, amplifying their life skills development</p>
           

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-magenta">
              A Message from Our Patron
            </p>

            <div className="mt-4 space-y-5 text-base leading-relaxed text-brand-muted">
              <p>
                Bishop Egesa opens with gratitude to all stakeholders who have
                supported ICCD&apos;s work, and calls on religious
                institutions, governments, donors and fellow organizations to
                join hands in confronting gender-based injustice and
                improving the lives of vulnerable women and children.

                We call upon fellow Ugandans , Africa, American(USA),Canada, Netherland,Austrian,German, Spain,Iceland, NorWay ,France. May GOD touch you and come and support in Africa
              </p>
              <p className="italic text-brand-navy/85">
                &ldquo;I thank my God every time I remember you... because of
                your partnership in the gospel.&rdquo;
                <span className="ml-2 not-italic font-semibold text-brand-magenta">
                  — Philippians 1:3, 5
                </span>
              </p>

              <p>
                He acknowledges that despite existing legal protections, more
                must be done to safeguard the rights of all individuals — and
                that aligning with national and international frameworks can
                help eliminate harmful practices across Africa. He affirms
                that support for organizations like ICCD is pivotal in
                empowering women, children, orphans and refugees.
              </p>
              <p className="italic text-brand-navy/85">
                &ldquo;Learn to do right; seek justice. Defend the oppressed.
                Take up the cause of the fatherless; plead the case of the
                widow.&rdquo;
                <span className="ml-2 not-italic font-semibold text-brand-magenta">
                  — Isaiah 1:17
                </span>
              </p>

              <p>
                Turning to a specific concern, the Bishop highlights the
                heightened vulnerability of youth and young mothers to HIV and
                teenage pregnancy, urging that focused resources — protection,
                education and healthcare — can transform individual lives and
                uplift the whole community.
              </p>
              <p className="italic text-brand-navy/85">
                &ldquo;He heals the brokenhearted and binds up their
                wounds.&rdquo;
                <span className="ml-2 not-italic font-semibold text-brand-magenta">
                  — Psalm 147:3
                </span>
              </p>
            </div>

            <blockquote className="mt-6 font-serif text-2xl font-bold leading-snug text-brand-navy sm:text-3xl">
              Let&apos;s embark on this journey of transformation together. May
              God bless our efforts.
            </blockquote>
            <p className="mt-4 italic text-sm text-brand-navy/85">
              &ldquo;Trust in the Lord with all your heart and lean not on
              your own understanding; in all your ways submit to him, and he
              will make your paths straight.&rdquo;
              <span className="ml-2 not-italic font-semibold text-brand-magenta">
                — Proverbs 3:5–6
              </span>
            </p>

            
          </div>
        </div>
      </section>

      {/* MOMENTS IN THE FIELD */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-magenta">
                Moments in the field
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-brand-navy sm:text-4xl">
                Real people. Real impact.
              </h2>
            </div>
            <Link
              href="/stories"
              className="text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
            >
              See more stories →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {fieldMoments.map((m) => (
              <figure
                key={m.src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-sky-soft"
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <Section>
        <SectionHeading
          eyebrow="In partnership with"
          title="We don&apos;t do this alone."
          intro="ICCD collaborates with government, multilateral agencies, faith bodies and global health partners to multiply impact."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <div
              key={p}
              className="flex min-h-[88px] items-center justify-center rounded-xl border border-brand-sky-soft bg-white px-4 py-5 text-center text-sm font-medium text-brand-navy/85"
            >
              {p}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-magenta to-brand-navy text-white">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Stand with us.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Whether through giving, partnership or prayer, your support equips
            ICCD to keep reaching the families that the world most easily
            forgets.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/get-involved#donate"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-navy shadow-md transition hover:bg-brand-lime"
            >
              Donate
            </Link>
            <Link
              href="/get-involved#partner"
              className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
