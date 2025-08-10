import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact Us - ARB Store | Get in Touch",
  description:
    "Contact ARB Store for all your bearing needs. We provide expert guidance and solutions for industrial bearings. Located in Gowalmandi, Lahore.",
  keywords: [
    "contact ARB Store",
    "bearing supplier contact",
    "industrial bearings Lahore",
    "bearing store Gowalmandi",
    "bearing supplier Pakistan",
    "contact bearing supplier",
  ],
  openGraph: {
    title: "Contact Us - ARB Store | Get in Touch",
    description:
      "Contact us for expert guidance and solutions for all your bearing needs.",
    type: "website",
    locale: "en_US",
    siteName: "ARB Store",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <MapSection />
    </>
  );
}
