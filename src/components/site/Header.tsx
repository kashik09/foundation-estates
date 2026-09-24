"use client";

import Link from "next/link";
import { useState } from "react";
import { brand, nav } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/95 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-5 md:px-12">
        <Link
          href="/"
          className="font-serif text-lg tracking-wide whitespace-nowrap"
          onClick={() => setOpen(false)}
        >
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm tracking-wide uppercase lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/consultation"
            className="hidden rounded-full bg-forest px-5 py-2 text-sm whitespace-nowrap text-cream hover:opacity-90 lg:inline-block"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-px w-5 bg-charcoal" />
            <span className="h-px w-5 bg-charcoal" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-charcoal/10 px-6 pb-6 text-sm tracking-wide uppercase lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/consultation"
            className="mt-2 w-fit rounded-full bg-forest px-5 py-2 text-cream normal-case"
            onClick={() => setOpen(false)}
          >
            Book a Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
