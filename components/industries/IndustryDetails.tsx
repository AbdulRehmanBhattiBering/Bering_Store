"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, Car, Plane, Tractor, HardHat, Zap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const industries = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    description:
      "Supporting manufacturing operations with high-performance bearings designed for industrial machinery and equipment. Our solutions ensure smooth operation and minimal downtime.",
    features: [
      "Heavy machinery bearings",
      "Production line components",
      "Custom bearing solutions",
      "Preventive maintenance support",
    ],
    imageUrl: "/images/manufacturing.jpg",
  },
  {
    id: "automotive",
    title: "Automotive",
    icon: Car,
    description:
      "Providing precision bearings for the automotive industry, from passenger vehicles to heavy commercial transport. Our products meet strict quality and performance standards.",
    features: [
      "Wheel hub bearings",
      "Transmission components",
      "Engine bearings",
      "Suspension systems",
    ],
    imageUrl: "/images/automotive.jpg",
  },
  {
    id: "aerospace",
    title: "Aerospace",
    icon: Plane,
    description:
      "Delivering specialized bearings that meet the exacting standards of the aerospace industry. Our products are designed for reliability in critical applications.",
    features: [
      "Aircraft engine bearings",
      "Landing gear components",
      "High-precision solutions",
      "Certified materials",
    ],
    imageUrl: "/images/aerospace.jpg",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    icon: Tractor,
    description:
      "Supporting the agricultural sector with durable bearings designed to withstand harsh conditions and heavy loads in farming equipment.",
    features: [
      "Harvester bearings",
      "Tractor components",
      "Irrigation systems",
      "Heavy-duty solutions",
    ],
    imageUrl: "/images/agriculture.jpg",
  },
  {
    id: "mining",
    title: "Mining",
    icon: HardHat,
    description:
      "Providing robust bearing solutions for the mining industry, designed to perform in extreme conditions and handle heavy loads.",
    features: [
      "Excavation equipment",
      "Conveyor systems",
      "Crushing machinery",
      "Heavy-duty bearings",
    ],
    imageUrl: "/images/mining.jpg",
  },
  {
    id: "energy",
    title: "Energy",
    icon: Zap,
    description:
      "Supporting power generation and distribution with reliable bearing solutions that ensure continuous operation and efficiency.",
    features: [
      "Turbine bearings",
      "Generator components",
      "Renewable energy solutions",
      "High-performance products",
    ],
    imageUrl: "/images/energy.jpg",
  },
];

export default function IndustryDetails() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Industry Solutions"
          subtitle="Specialized bearing solutions for diverse industrial applications"
          className="mb-16"
        />

        <div className="space-y-32">
          {industries.map((industry, index) => {
            const isEven = index % 2 === 0;
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[400px] rounded-2xl overflow-hidden ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={industry.imageUrl}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold">{industry.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    {industry.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industry.features.map((feature) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 bg-card p-4 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
