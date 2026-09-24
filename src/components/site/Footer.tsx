import Link from "next/link";
import { brand } from "@/lib/site-data";

const footerLinks = [
  { label: "Properties", href: "/properties" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Book a Consultation", href: "/consultation" },
  { label: "Contact", href: "/about#contact" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="grid gap-10 px-6 py-16 md:grid-cols-3 md:px-12">
        <div>
          <p className="font-serif text-xl">{brand.name}</p>
          <p className="mt-2 text-sm text-cream/70">{brand.tagline}</p>
          <p className="mt-4 text-xs tracking-widest text-cream/50 uppercase">
            {brand.footerLine}
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm text-cream/80 md:items-center">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-cream">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-cream/80 md:items-end">
          {brand.social.map((platform) => (
            <span key={platform}>{platform}</span>
          ))}
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-6 text-center text-xs text-cream/50 md:px-12">
        © {new Date().getFullYear()} {brand.name} Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
