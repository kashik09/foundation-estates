import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ListingCard, statusStyles } from "@/components/site/ListingCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { listings } from "@/lib/site-data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = listings.find((item) => item.slug === slug);

  if (!listing) {
    return { title: "Property Not Found | Foundation Estates" };
  }

  return {
    title: `${listing.name} | Foundation Estates`,
    description: listing.description,
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = listings.find((item) => item.slug === slug);

  if (!listing) {
    notFound();
  }

  const otherListings = listings.filter((item) => item.slug !== slug);

  return (
    <>
      <section className="px-6 pt-14 pb-16 md:px-12 md:pt-20">
        <Link
          href="/properties"
          className="text-sm text-charcoal/60 underline underline-offset-4 hover:text-charcoal"
        >
          ← Back to Properties
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-5 md:gap-14">
          <div className="relative aspect-4/3 w-full overflow-hidden md:col-span-3 md:aspect-auto md:h-full">
            <Image
              src={listing.image}
              alt={listing.name}
              fill
              priority
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
            <span
              className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs tracking-widest uppercase ${statusStyles[listing.status]}`}
            >
              {listing.status}
            </span>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-widest text-charcoal/50 uppercase">
              {listing.type}
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
              {listing.name}
            </h1>
            <p className="mt-4 text-xl font-medium">{listing.price}</p>
            <p className="mt-1 text-sm text-charcoal/60">{listing.details}</p>

            <p className="mt-6 text-charcoal/70">{listing.description}</p>

            <ul className="mt-6 grid grid-cols-2 gap-y-2 text-sm text-charcoal/70">
              {listing.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/consultation"
                className="rounded-full bg-forest px-6 py-3 text-sm text-cream hover:opacity-90"
              >
                Enquire About This Property
              </Link>
              <Link
                href="/about#contact"
                className="rounded-full border border-charcoal px-6 py-3 text-sm hover:bg-charcoal hover:text-cream"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {otherListings.length > 0 && (
        <section className="border-t border-charcoal/10 px-6 py-16 md:px-12 md:py-24">
          <SectionHeading
            eyebrow="More Listings"
            title="Other Properties You Might Like"
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherListings.map((item) => (
              <ListingCard key={item.slug} listing={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
