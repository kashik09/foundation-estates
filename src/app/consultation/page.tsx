import Image from "next/image";
import { SectionHeading } from "@/components/site/SectionHeading";
import { InquiryForm, type InquiryField } from "@/components/site/InquiryForm";
import { consultationServices, consultationInterests } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | Foundation Estates",
};

const consultationFields: InquiryField[] = [
  { type: "text", name: "name", label: "Name" },
  { type: "text", name: "phone", label: "Phone Number" },
  { type: "text", name: "email", label: "Email" },
  {
    type: "select",
    name: "interest",
    label: "What can we help you with?",
    options: consultationInterests,
  },
  {
    type: "textarea",
    name: "message",
    label: "Tell us briefly what you are looking for",
  },
];

export default function ConsultationPage() {
  return (
    <section className="bg-forest px-6 py-16 text-cream md:px-12 md:py-24">
      <div className="grid gap-10 md:grid-cols-5 md:gap-14">
        <div className="md:col-span-3">
          <SectionHeading
            eyebrow="Book a Consultation"
            title="A Good Property Decision Starts With the Right Conversation."
            description="Buying, selling or assessing property can involve significant financial decisions. Speak with Foundation Estates about what you are looking for, the questions you have and the next steps available to you."
            light
          />
        </div>
        <div className="relative aspect-4/3 w-full overflow-hidden md:col-span-2">
          <Image
            src="/images/consultation-banner.jpg"
            alt="A Foundation Estates advisor presenting a property to clients"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover grayscale"
          />
        </div>
      </div>

      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm text-cream/60 uppercase">We can assist with</p>
          {consultationServices.map((service) => (
            <div key={service.name}>
              <p className="font-serif text-lg">{service.name}</p>
              <p className="mt-1 text-sm text-cream/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div>
          <InquiryForm
            fields={consultationFields}
            submitLabel="Book My Consultation"
            note="No pressure. Just a conversation about your property needs."
            light
          />
        </div>
      </div>
    </section>
  );
}
