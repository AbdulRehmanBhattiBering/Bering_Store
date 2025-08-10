import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedProducts />
      <IndustriesPreview />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
