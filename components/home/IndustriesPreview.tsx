"use client";

import { motion } from "framer-motion";
import { Factory, Car, Plane, Tractor, HardHat, Zap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import IndustryCard from "../ui/IndustryCard";

const industries = [
  {
    title: "Manufacturing",
    description:
      "High-performance bearings for industrial machinery and equipment.",
    icon: Factory,
    imageUrl: "/images/manufacturing.jpg",
  },
  {
    title: "Automotive",
    description: "Precision bearings for vehicles and automotive applications.",
    icon: Car,
    imageUrl: "/images/automotive.jpg",
  },
  {
    title: "Aerospace",
    description: "Specialized bearings meeting strict aerospace standards.",
    icon: Plane,
    imageUrl: "/images/aerospace.jpg",
  },
  {
    title: "Agriculture",
    description: "Durable bearings for agricultural machinery and equipment.",
    icon: Tractor,
    imageUrl: "/images/agriculture.jpg",
  },
  {
    title: "Mining",
    description: "Heavy-duty bearings for demanding mining operations.",
    icon: HardHat,
    imageUrl: "/images/mining.jpg",
  },
  {
    title: "Energy",
    description: "Reliable bearings for power generation and distribution.",
    icon: Zap,
    imageUrl: "/images/energy.jpg",
  },
];

export default function IndustriesPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Our bearings are trusted by clients across diverse industrial sectors"
          className="mb-12"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/industries"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors duration-300"
          >
            Explore All Industries
          </a>
        </motion.div>
      </div>
    </section>
  );
}
