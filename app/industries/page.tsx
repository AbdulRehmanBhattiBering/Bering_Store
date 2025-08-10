import type { Metadata } from "next";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryDetails from "@/components/industries/IndustryDetails";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Industries - ARB Store | Industrial Bearing Solutions",
  description:
    "Discover how ARB Store serves diverse industries with specialized bearing solutions. From manufacturing to aerospace, we provide reliable products for every sector.",
  keywords: [
    "industrial bearings",
    "manufacturing bearings",
    "automotive bearings",
    "aerospace bearings",
    "agricultural bearings",
    "mining bearings",
    "energy sector bearings",
    "Pakistan bearing supplier",
  ],
  openGraph: {
    title: "Industries - ARB Store | Industrial Bearing Solutions",
    description:
      "Specialized bearing solutions for manufacturing, automotive, aerospace, agriculture, mining, and energy sectors.",
    type: "website",
    locale: "en_US",
    siteName: "ARB Store",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustryDetails />
      <CTASection />
    </>
  );
}
