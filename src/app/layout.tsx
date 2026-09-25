import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://real-estate-iota-snowy.vercel.app"),
  title: "Foundation Estates | Where Your Legacy Begins",
  description:
    "Foundation Estates helps individuals, families and investors find and acquire land and homes, with trusted property consultancy and valuation support.",
  openGraph: {
    title: "Foundation Estates | Where Your Legacy Begins",
    description:
      "Foundation Estates helps individuals, families and investors find and acquire land and homes, with trusted property consultancy and valuation support.",
    images: ["/images/og-foundation-estates.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
