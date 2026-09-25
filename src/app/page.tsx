import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ListingCard } from "@/components/site/ListingCard";
import { brand, listings, testimonials, whyUs } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="grid gap-10 px-6 pt-14 pb-16 md:grid-cols-5 md:px-12 md:pt-20">
        <div className="relative aspect-4/3 w-full overflow-hidden md:col-span-3 md:aspect-auto md:h-full">
          <Image
            src="/images/hero-property-dusk.jpg"
            alt="A Foundation Estates property at dusk, overlooking the lake"
            fill
            priority
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover grayscale"
          />
        </div>
        <div className="flex flex-col justify-center md:col-span-2">
          <p className="text-xs tracking-widest text-charcoal/50 uppercase">
            {brand.name}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            {brand.tagline}
          </h1>
          <p className="mt-5 text-lg text-charcoal/70">
            Find the right property. Make informed decisions. Build lasting
            value.
          </p>
          <p className="mt-4 max-w-md text-charcoal/70">
            Foundation Estates helps individuals, families and investors find
            and acquire land and homes while providing trusted property
            consultancy and valuation support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/properties"
              className="rounded-full bg-forest px-6 py-3 text-sm text-cream hover:opacity-90"
            >
              Explore Properties
            </Link>
            <Link
              href="/consultation"
              className="rounded-full border border-charcoal px-6 py-3 text-sm hover:bg-charcoal hover:text-cream"
            >
              Book a Consultation
            </Link>
          </div>
          <p className="mt-6 text-xs tracking-widest text-charcoal/50 uppercase">
            {brand.shortLine.split(". ").join(" • ")}
          </p>
        </div>
      </section>

      <section className="border-t border-charcoal/10 px-6 py-16 md:px-12 md:py-24">
        <SectionHeading
          eyebrow="More Than Property"
          title="A Foundation for What Comes Next."
          description="Whether you are buying your first piece of land, searching for a home, investing in property or seeking professional guidance, we help you approach every decision with greater clarity and confidence."
        />
        <Link
          href="/about"
          className="mt-6 inline-block text-sm underline underline-offset-4"
        >
          Discover Foundation Estates →
        </Link>
      </section>

      <section className="bg-taupe px-6 py-16 md:px-12 md:py-24">
        <SectionHeading
          eyebrow="Recent Listings"
          title="Find a Property Worth Building On."
          description="Explore selected land, homes and investment opportunities available through Foundation Estates."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.name} listing={listing} />
          ))}
        </div>
        <Link
          href="/properties"
          className="mt-10 inline-block rounded-full bg-forest px-6 py-3 text-sm text-cream hover:opacity-90"
        >
          View All Properties
        </Link>
      </section>

      <section className="bg-forest px-6 py-16 text-cream md:px-12 md:py-24">
        <SectionHeading
          eyebrow="Why Foundation Estates?"
          title="Property Decisions Deserve More Than a Sales Pitch."
          light
        />
        <div className="mt-12 ml-auto grid max-w-2xl gap-10 sm:grid-cols-2">
          {whyUs.map((item) => (
            <div key={item.number}>
              <p className="font-serif text-3xl text-cream/50">{item.number}</p>
              <p className="mt-2 font-serif text-xl">{item.title}</p>
              <p className="mt-2 text-sm text-cream/70">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-cream/10 pt-10">
          <p className="font-serif text-3xl md:text-4xl">
            We Don&apos;t Just Help You Find Property.
            <br />
            We Help You Build a Foundation.
          </p>
          <Link
            href="/consultation"
            className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm text-charcoal hover:opacity-90"
          >
            Talk to Our Team →
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <SectionHeading
          eyebrow="What Our Clients Say"
          title="Trust Is Built One Client at a Time."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.role}>
              <p className="text-charcoal/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 font-mono text-sm text-charcoal/60">
                - {testimonial.author}
              </p>
              <p className="text-xs tracking-widest text-charcoal/50 uppercase">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
