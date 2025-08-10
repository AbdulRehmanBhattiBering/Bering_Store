"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const highlights = [
  "Premium-grade materials including high-carbon steel and advanced ceramics",
  "Rigorous testing for strength, precision, and wear resistance",
  "Expert technical guidance and custom solutions",
  "Comprehensive quality control processes",
  "Nationwide delivery network",
  "Dedicated after-sales support",
];

export default function CompanyOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SectionHeading
              title="Quality You Can Trust"
              subtitle="Our commitment to excellence sets us apart"
              align="left"
              className="mb-8"
            />

            <p className="text-muted-foreground">
              At ARB Store, we don't just sell bearings—we build partnerships.
              Our knowledgeable team offers technical guidance, custom
              solutions, and after-sales support to ensure our customers get
              exactly what they need. We take pride in delivering on time, every
              time, and in maintaining long-term relationships with our clients.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-48 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/quality-1.jpg"
                  alt="Quality testing process"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/quality-2.jpg"
                  alt="Bearing manufacturing"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/quality-3.jpg"
                  alt="Quality control"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative h-48 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/quality-4.jpg"
                  alt="Technical inspection"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
