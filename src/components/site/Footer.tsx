import Link from "next/link";
import type { ComponentType } from "react";
import { brand } from "@/lib/site-data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/site/icons";

const footerLinks = [
  { label: "Properties", href: "/properties" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Book a Consultation", href: "/consultation" },
  { label: "Contact", href: "/about#contact" },
];

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  WhatsApp: WhatsAppIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-forest text-cream">
      <div className="grid gap-12 px-6 py-16 text-center md:grid-cols-3 md:px-12 md:text-left">
        <div>
          <p className="font-serif text-xl">{brand.name}</p>
          <p className="mt-2 text-sm text-cream/70">{brand.tagline}</p>
          <p className="mt-4 text-xs tracking-widest text-cream/50 uppercase">
            {brand.footerLine}
          </p>
        </div>

        <nav className="flex flex-col items-center gap-2 text-sm text-cream/80 md:items-center">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-5 md:justify-end">
          {brand.social.map((platform) => {
            const Icon = socialIcons[platform];
            return (
              <a
                key={platform}
                href="#"
                aria-label={platform}
                className="text-cream/70 transition-colors hover:text-gold"
              >
                {Icon ? <Icon className="h-5 w-5" /> : platform}
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-6 text-center text-xs text-cream/50 md:px-12">
        © {new Date().getFullYear()} {brand.name} Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
