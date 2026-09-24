import { SectionHeading } from "@/components/site/SectionHeading";
import { ListingCard } from "@/components/site/ListingCard";
import { listings, propertyCategories } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | Foundation Estates",
};

export default function PropertiesPage() {
  return (
    <>
      <section className="px-6 pt-14 pb-16 md:px-12 md:pt-20">
        <SectionHeading
          eyebrow="Recent Listings"
          title="Find a Property Worth Building On."
          description="Explore selected land, homes and investment opportunities available through Foundation Estates."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {propertyCategories.map((category) => (
            <div key={category.name} className="border-t border-charcoal/20 pt-4">
              <p className="font-serif text-lg">{category.name}</p>
              <p className="mt-2 text-sm text-charcoal/60">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-charcoal/10 px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.name} listing={listing} />
          ))}
        </div>
      </section>
    </>
  );
}
