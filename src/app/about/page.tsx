import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { InquiryForm, type InquiryField } from "@/components/site/InquiryForm";
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

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pt-14 pb-16 md:px-12 md:pt-20">
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
            Our team works closely with clients looking to buy land, homes or
            investment properties, as well as those seeking guidance on
            property value and other real-estate decisions. We combine
            personal attention with a long-term approach — because we
            understand that property is often more than a purchase. It can be
            a home, an investment, a source of security and a legacy for the
            next generation.
          </p>
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
        className="grid gap-10 bg-forest px-6 py-16 text-cream md:grid-cols-5 md:px-12 md:py-24"
      >
        <div className="md:col-span-2">
          <SectionHeading
            eyebrow="Contact Foundation Estates"
            title="Your Next Property Conversation Starts Here."
            description="Whether you are searching for land, looking for a home, considering an investment or need guidance on an existing property, our team is ready to speak with you."
            light
          />

          <div className="mt-10 space-y-6 text-sm">
            <div>
              <p className="text-cream/60 uppercase">Call / WhatsApp</p>
              <p className="mt-1">{brand.phone}</p>
            </div>
            <div>
              <p className="text-cream/60 uppercase">Email</p>
              <p className="mt-1">{brand.email}</p>
            </div>
            <div>
              <p className="text-cream/60 uppercase">Office</p>
              <p className="mt-1">{brand.officeAddress}</p>
            </div>
            <div>
              <p className="text-cream/60 uppercase">Business Hours</p>
              {brand.hours.map((entry) => (
                <p key={entry.days} className="mt-1">
                  {entry.days}: {entry.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <InquiryForm
            fields={contactFields}
            submitLabel="Send Enquiry"
            light
          />
        </div>
      </section>
    </>
  );
}
