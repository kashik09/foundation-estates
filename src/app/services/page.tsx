import Link from "next/link";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Foundation Estates",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pt-14 pb-16 md:px-12 md:pt-20">
        <SectionHeading
          eyebrow="Property Consultancy"
          title="Make Informed Property Decisions With the Right Guidance."
          description="From finding the right property to understanding its value and potential, Foundation Estates helps you make property decisions with greater clarity and confidence."
        />
      </section>

      <section className="border-t border-charcoal/10 px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-10 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.name} className="border-t border-charcoal/20 pt-4">
              <p className="font-serif text-xl">{service.name}</p>
              <p className="mt-2 text-charcoal/70">{service.description}</p>
            </div>
          ))}
        </div>

        <Link
          href="/consultation"
          className="mt-14 inline-block rounded-full bg-forest px-6 py-3 text-sm text-cream hover:opacity-90"
        >
          Book a Consultation
        </Link>
      </section>
    </>
  );
}
