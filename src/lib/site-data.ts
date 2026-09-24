export const brand = {
  name: "Foundation Estates",
  tagline: "Where Your Legacy Begins.",
  shortLine: "Land. Homes. Property Consultancy.",
  footerLine: "Land • Homes • Property Consultancy • Valuation Support",
  phone: "+256 XXX XXX XXX",
  email: "hello@foundationestates.com",
  officeAddress: "[Physical Address]",
  hours: [
    { days: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
  ],
  social: ["Instagram", "Facebook", "LinkedIn", "WhatsApp"],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About & Contact", href: "/about" },
];

export const team = [
  {
    name: "Timothy Kalundu",
    title: "Co-Founder | Foundation Estates",
    bio: "[Add 2–3 lines here describing Timothy's experience, strengths or role once finalised.]",
  },
  {
    name: "Betty Kweyu Aienike",
    title: "Co-Founder | Foundation Estates",
    bio: "[Add 2–3 lines here describing Betty's experience, strengths or role once finalised.]",
  },
];

export type ListingStatus = "Available" | "New Listing" | "Sold" | "Under Offer";

export const listings: Array<{
  name: string;
  type: "House" | "Land";
  price: string;
  details: string;
  status: ListingStatus;
}> = [
  {
    name: "123 Beldenwood Avenue",
    type: "House",
    price: "UGX 450,000,000",
    details: "3 Bedrooms • 2 Bathrooms • 20 Decimals",
    status: "Available",
  },
  {
    name: "45 Whelstone Hill",
    type: "Land",
    price: "UGX 120,000,000",
    details: "50 × 100 ft • Titled Land • Residential",
    status: "New Listing",
  },
  {
    name: "6 Roseltown Drive",
    type: "House",
    price: "UGX 620,000,000",
    details: "4 Bedrooms • 3 Bathrooms • 30 Decimals",
    status: "Under Offer",
  },
];

export const propertyCategories = [
  {
    name: "Land for Sale",
    description:
      "Residential, commercial and investment land in selected locations.",
  },
  {
    name: "Homes for Sale",
    description:
      "Quality residential properties for individuals, families and investors.",
  },
  {
    name: "Investment Properties",
    description:
      "Property opportunities selected with long-term potential in mind.",
  },
];

export const services = [
  {
    name: "Property Acquisition Advisory",
    description:
      "Guidance when searching for and purchasing land, homes or investment property.",
  },
  {
    name: "Property Valuation & Market Appraisal",
    description:
      "Understand the market position and estimated value of your property.",
  },
  {
    name: "Property Due Diligence",
    description:
      "Support with property verification and essential checks before committing to a transaction.",
  },
  {
    name: "Investment & Development Advisory",
    description:
      "Assess property opportunities, locations and development potential before investing.",
  },
  {
    name: "Property Sales & Market Advisory",
    description:
      "Guidance on pricing, positioning and preparing property for the market.",
  },
  {
    name: "Land & Property Management Advisory",
    description:
      "Practical guidance on managing, renting, developing and improving the long-term value of property.",
  },
];

export const consultationServices = [
  {
    name: "Property Search & Acquisition",
    description:
      "Helping you identify suitable land, homes and investment properties.",
  },
  {
    name: "Property Consultancy",
    description:
      "Practical guidance when evaluating property opportunities and making real-estate decisions.",
  },
  {
    name: "Property Valuation Support",
    description:
      "Helping clients understand property value and obtain appropriate professional valuation services where required.",
  },
  {
    name: "Investment Property Guidance",
    description:
      "Helping you assess property opportunities in relation to your objectives and long-term plans.",
  },
];

export const whyUs = [
  {
    number: "01",
    title: "We Listen First",
    description:
      "We begin by understanding what you need, your budget, your priorities and your long-term plans before recommending a property.",
  },
  {
    number: "02",
    title: "We Value Trust",
    description:
      "Property involves significant financial and personal decisions. We believe in clear communication, transparency and responsible guidance throughout the process.",
  },
  {
    number: "03",
    title: "We Look Beyond the Sale",
    description:
      "Our relationship with clients is not simply about completing a transaction. We want the property you choose to make sense for where you are going.",
  },
  {
    number: "04",
    title: "We Provide More Than Listings",
    description:
      "From finding property to consultancy and valuation support, Foundation Estates helps clients navigate important property decisions from a broader perspective.",
  },
];

export const testimonials = [
  {
    quote: "[Insert genuine client testimonial here.]",
    author: "Client Name",
    role: "Property Buyer",
  },
  {
    quote: "[Insert genuine client testimonial here.]",
    author: "Client Name",
    role: "Land Buyer",
  },
  {
    quote: "[Insert genuine client testimonial here.]",
    author: "Client Name",
    role: "Property Consultancy Client",
  },
];

export const consultationInterests = [
  "Buying Land",
  "Buying a House",
  "Selling Property",
  "Property Valuation",
  "Property Consultancy",
  "Investment Property",
  "Other",
];
