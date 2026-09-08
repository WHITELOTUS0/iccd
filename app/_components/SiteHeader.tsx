"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav } from "../_content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-sky-soft/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={48}
            className="h-12 w-11 object-contain"
            priority
          />
          <div className="leading-tight">
            <div className="font-serif text-base font-bold text-brand-navy sm:text-lg">
              ICCD
            </div>
            <div className="hidden text-[10px] uppercase tracking-wider text-brand-muted sm:block">
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-navy/85 transition-colors hover:text-brand-magenta"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/get-involved#donate"
            className="rounded-full bg-brand-magenta px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-magenta/90"
          >
            Donate
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-sky-soft/60 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm font-medium text-brand-navy/85 hover:bg-brand-sky-soft/40"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-involved#donate"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-magenta px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
