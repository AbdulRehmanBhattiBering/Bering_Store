import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import Innovation from "@/components/about/Innovation";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us - ARB Store | Leading Bearing Supplier",
  description:
    "Learn about ARB Store's commitment to quality, innovation, and customer satisfaction in the bearing industry. Discover our journey, values, and expertise.",
  keywords: [
    "about ARB Store",
    "bearing supplier",
    "quality bearings",
    "bearing manufacturer",
    "industrial bearings",
    "Lahore bearings",
  ],
  openGraph: {
    title: "About ARB Store - Leading Bearing Supplier",
    description:
      "Learn about our commitment to quality, innovation, and customer satisfaction in the bearing industry.",
    type: "website",
    locale: "en_US",
    siteName: "ARB Store",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <Innovation />
      <CTASection />
    </>
  );
}
