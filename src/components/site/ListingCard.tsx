import Image from "next/image";
import Link from "next/link";
import type { listings } from "@/lib/site-data";

const statusStyles: Record<string, string> = {
  Available: "bg-forest text-cream",
  "New Listing": "bg-charcoal text-cream",
  "Under Offer": "bg-taupe text-charcoal",
  Sold: "bg-charcoal/40 text-cream",
};

export function ListingCard({ listing }: { listing: (typeof listings)[number] }) {
  return (
    <div>
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={listing.image}
          alt={listing.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span
          className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs tracking-widest uppercase ${statusStyles[listing.status]}`}
        >
          {listing.status}
        </span>
      </div>
      <p className="mt-4 text-xs tracking-widest text-charcoal/50 uppercase">
        {listing.type}
      </p>
      <p className="mt-1 font-serif text-lg">{listing.name}</p>
      <p className="mt-1 text-sm font-medium">{listing.price}</p>
      <p className="mt-1 text-sm text-charcoal/60">{listing.details}</p>
      <Link
        href="/consultation"
        className="mt-3 inline-block text-sm underline underline-offset-4"
      >
        View Property →
      </Link>
    </div>
  );
}
