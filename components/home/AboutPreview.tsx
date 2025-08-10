"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about-preview.jpg"
              alt="Quality bearings manufacturing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Stats */}
            <div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              >
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              >
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <SectionHeading
              title="Quality You Can Trust"
              align="left"
              className="mb-8"
            />

            <p className="text-muted-foreground">
              At Abdul Rahman Bhatti Bearing Store, we believe that quality is
              the key to customer satisfaction. Our bearings are made from
              premium-grade materials such as high-carbon steel, stainless
              steel, and advanced ceramics.
            </p>

            <p className="text-muted-foreground">
              Every product undergoes rigorous testing for strength, precision,
              and wear resistance. This ensures that our bearings operate
              smoothly, reduce friction effectively, and withstand the toughest
              operating conditions.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="space-y-2">
                <div className="font-semibold text-foreground">
                  Premium Materials
                </div>
                <div className="text-sm text-muted-foreground">
                  High-grade steel & ceramics
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-foreground">
                  Rigorous Testing
                </div>
                <div className="text-sm text-muted-foreground">
                  Quality assured products
                </div>
              </div>
            </motion.div>

            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mt-6"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
