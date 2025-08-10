import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedLayout from "@/components/layout/AnimatedLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARB Store - High Quality Bearings Supplier",
  description:
    "Abdul Rehman Bhatti Bearing Store - Specializing in high-quality bearings designed to keep machines running smoothly, efficiently, and reliably.",
  keywords: [
    "bearings",
    "ball bearings",
    "roller bearings",
    "thrust bearings",
    "plain bearings",
    "industrial bearings",
    "Lahore",
    "Pakistan",
  ],
  authors: [{ name: "Atif Bhatti" }],
  openGraph: {
    title: "ARB Store - High Quality Bearings Supplier",
    description:
      "Specializing in high-quality bearings designed to keep machines running smoothly, efficiently, and reliably.",
    type: "website",
    locale: "en_US",
    siteName: "ARB Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARB Store - High Quality Bearings Supplier",
    description:
      "Specializing in high-quality bearings designed to keep machines running smoothly, efficiently, and reliably.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#000000",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          flex 
          flex-col 
          selection:bg-primary/20 
          selection:text-primary
          overflow-x-hidden
          text-base
          md:text-[15px]
          lg:text-[16px]
          motion-safe:scroll-smooth
        `}
      >
        <AnimatedLayout>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AnimatedLayout>
      </body>
    </html>
  );
}
