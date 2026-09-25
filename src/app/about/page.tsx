import Image from "next/image";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { InquiryForm, type InquiryField } from "@/components/site/InquiryForm";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/site/icons";
import { brand, team } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Contact | Foundation Estates",
};

const contactFields: InquiryField[] = [
  { type: "text", name: "name", label: "Full Name" },
  { type: "text", name: "phone", label: "Phone / WhatsApp" },
  { type: "text", name: "email", label: "Email Address" },
  { type: "textarea", name: "message", label: "How can we help?" },
];

const contactDetails = [
  { icon: PhoneIcon, label: "Call / WhatsApp", lines: [brand.phone] },
  { icon: MailIcon, label: "Email", lines: [brand.email] },
  { icon: MapPinIcon, label: "Office", lines: [brand.officeAddress] },
  {
    icon: ClockIcon,
    label: "Business Hours",
    lines: brand.hours.map((entry) => `${entry.days}: ${entry.time}`),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pt-14 pb-16 md:px-12 md:pt-20">
        <div className="grid gap-10 md:grid-cols-5 md:gap-14">
          <div className="md:col-span-3">
            <SectionHeading
              eyebrow="Meet Our Team"
              title="People You Can Trust With Important Property Decisions."
            />
            <div className="mt-6 max-w-2xl space-y-4 text-charcoal/70">
              <p>
                Foundation Estates was built on a simple belief: property
                ownership should be approached with the right information, the
                right opportunities and people you can trust.
              </p>
              <p>
                Our team works closely with clients looking to buy land, homes
                or investment properties, as well as those seeking guidance on
                property value and other real-estate decisions. We combine
                personal attention with a long-term approach — because we
                understand that property is often more than a purchase. It
                can be a home, an investment, a source of security and a
                legacy for the next generation.
              </p>
            </div>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden md:col-span-2">
            <Image
              src="/images/about-team-at-work.jpg"
              alt="Foundation Estates advisors in conversation with clients"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {team.map((member) => (
            <div key={member.name}>
              <PlaceholderImage
                label="Team photo"
                className="aspect-4/3 w-full grayscale"
              />
              <p className="mt-4 font-serif text-xl">{member.name}</p>
              <p className="text-xs tracking-widest text-charcoal/50 uppercase">
                {member.title}
              </p>
              <p className="mt-2 text-sm text-charcoal/60 italic">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-charcoal/20 pt-6">
          <p className="text-xs tracking-widest text-charcoal/50 uppercase">
            Our Commitment
          </p>
          <p className="mt-2 font-serif text-xl">
            Clear guidance. Genuine opportunities. Responsible property
            transactions.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="bg-forest px-6 py-20 text-cream md:px-12 md:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <SectionHeading
              eyebrow="Contact Foundation Estates"
              title="Your Next Property Conversation Starts Here."
              description="Whether you are searching for land, looking for a home, considering an investment or need guidance on an existing property, our team is ready to speak with you."
              light
            />

            <div className="mt-10 space-y-6 border-t border-cream/10 pt-10">
              {contactDetails.map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex gap-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs tracking-widest text-cream/50 uppercase">
                      {label}
                    </p>
                    {lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-cream/90">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-8 md:p-10">
              <InquiryForm
                fields={contactFields}
                submitLabel="Send Enquiry"
                light
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
