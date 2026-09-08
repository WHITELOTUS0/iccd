import Link from "next/link";
import { nav, siteConfig } from "../_content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="font-serif text-2xl font-bold">{siteConfig.name}</div>
            <p className="mt-1 text-sm uppercase tracking-wider text-brand-sky">
              {siteConfig.fullName}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
              A faith-based humanitarian and development NGO partnering with the
              Anglican Church of Uganda to uplift vulnerable children, women and
              refugees across Uganda.
            </p>
            <p className="mt-6 text-xs text-white/60">{siteConfig.regNumber}</p>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-lime">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-lime">
              Reach Us
            </h3>
            <address className="mt-4 space-y-1 text-sm not-italic text-white/85">
              <div>{siteConfig.address.line1}</div>
              <div>{siteConfig.address.line2}</div>
              <div>{siteConfig.address.line3}</div>
              <div>{siteConfig.address.line4}</div>
              <div>{siteConfig.address.line5}</div>
              

              <div className="space-y-1 pt-3">
                {siteConfig.emails.map((email) => (
                  <div key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="underline-offset-2 hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="pt-3">
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-brand-sky hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.63.77-1.63 1.56v1.9h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
