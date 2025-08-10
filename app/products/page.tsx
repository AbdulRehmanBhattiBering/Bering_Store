import type { Metadata } from "next";
import ProductsHero from "@/components/products/ProductsHero";
import ProductGrid from "@/components/products/ProductGrid";
import CTASection from "@/components/home/CTASection";
import ProductsWrapper from "@/components/layout/ProductsWrapper";

export const metadata: Metadata = {
  title: "Products - ARB Store | High-Quality Industrial Bearings",
  description:
    "Explore our comprehensive range of industrial bearings including ball bearings, roller bearings, thrust bearings, and plain bearings. Quality and reliability guaranteed.",
  keywords: [
    "industrial bearings",
    "ball bearings",
    "roller bearings",
    "thrust bearings",
    "plain bearings",
    "bearing supplier",
    "Lahore bearings",
    "Pakistan bearings",
  ],
  openGraph: {
    title: "Products - ARB Store | High-Quality Industrial Bearings",
    description:
      "Explore our comprehensive range of industrial bearings. Quality and reliability guaranteed.",
    type: "website",
    locale: "en_US",
    siteName: "ARB Store",
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductGrid />
      <CTASection />
    </>
  );
}
