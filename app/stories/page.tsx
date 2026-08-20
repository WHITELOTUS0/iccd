import type { Metadata } from "next";
import Image from "next/image";




import {
  PageHero,
  Section,
  SectionHeading,
} from "../_components/Section";
import { fieldVideos, galleryImages } from "../_content/site";

export const metadata: Metadata = {
  title: "Stories & Impact",
  description:
    "Outreach reports, achievements and photo stories from ICCD's work across Uganda.",
};

const featuredStories = [
  {
    title: "716 people reached in integrated SRHR outreach",
    location: "Tororo District",
    body: "Working with Reproductive Health Uganda and the Bukedi Diocese, ICCD held five community outreaches reaching 716 people aged 10–70 with health education on SRHR, HIV/AIDS testing, family planning, cervical and breast cancer screening, and referrals for treatment.",
    tag: "Health",
  },
  {
    title: "478 youth trained in vocational and financial literacy skills",
    location: "Mulanda, Church of Uganda",
    body: "Through Combined Socio-Economic approaches, ICCD reached 478 young people with vocational training — starting with bricklaying — alongside financial literacy education to support saving and planning for the future.",
    tag: "Livelihoods",
  },
  {
    title: "Mental health support for refugee women",
    location: "Yumbe District",
    body: "Building on our experience treating mental health concerns among adult refugees in Yumbe, ICCD's Group Interpersonal Psychotherapy model provides cost-effective psycho-social care for women who have survived torture and sexual violence.",
    tag: "Psycho-social",
  },
];

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories &amp; Impact"
        title="Real lives. Real change. Real numbers."
        intro="Behind every figure is a person. These are some of the communities ICCD has been privileged to walk alongside."
      />

      <Section>
        

<div className="my-8 mb flex justify-center"><SectionHeading
          eyebrow=""
          title="Outreach highlights."
        /></div>



        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredStories.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-brand-sky-soft/70 bg-white p-7"
            >
              <span className="self-start rounded-full bg-brand-sky-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-navy">
                {s.tag}
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold leading-snug text-brand-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-brand-magenta">
                {s.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-lime">
              Watch our work
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Stories from the field.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              See ICCD teams and communities working together across Uganda.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {fieldVideos.map((video) => (
              <figure
                key={video.src}
                className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/15"
              >
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={video.poster}
                  className="aspect-video w-full bg-black object-cover"
                  aria-label={`${video.title}, ${video.date}`}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support embedded videos.
                </video>
                <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="font-serif font-bold">{video.title}</span>
                  <span className="text-sm text-white/60">{video.date}</span>
                </figcaption>
              </figure>
            ))} <p>
              There is no classroom block at Camgot — only huts, scattered
              across the compound like a small village. &ldquo;They have,
              like, one&hellip;&rdquo; our guide begins, pointing from hut to
              hut, because that really is all there is. One mud structure,
              distinguished only by its slightly larger frame, is guessed to
              be the staff room.
           
              Inside one classroom hut, sunlight slips through cracks in the
              mud walls, scattering light across a packed dirt floor. On the
              far wall hangs a worn chalkboard, still faintly marked with the
              last lesson — numbers and letters waiting for children to
              return and finish the thought.
          
              There are no desks. No chairs. Just stones, pulled from the
              ground outside and arranged in rough rows. &ldquo;These stones
              are the chairs that the children use when they are in
              class,&rdquo; the voice explains — plainly, because for the
              children of Camgot, this is simply how school is.
           
              A single tree trunk stands at the center of the room, holding
              up the thatched roof — nature doing the work steel beams do
              elsewhere. &ldquo;The whole entire look of the class,&rdquo;
              the video says, pulling back for one last wide shot. And it
              says everything.
            </p>
          </div>
        </div>
      </section>

      

      <section className="bg-brand-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="In pictures"
            title="Glimpses from the field."
            intro="Photos from ICCD outreaches, training sessions and community engagements across Uganda."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((src, i) => (
              <figure
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl bg-brand-sky-soft"
              >
                <Image
                  src={src}
                  alt={`ICCD field activity ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
