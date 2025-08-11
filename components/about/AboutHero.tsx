"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end justify-end flex-col">
      {/* Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="ARB Store facility"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About ARB Store
          </h1>
          <div className="h-1 w-20 bg-primary mb-6" />
          <p className="text-lg text-white/90">
            At Abdul Rahman Bhatti Bearing Store, we specialize in providing
            high-quality bearings designed to keep machines running smoothly,
            efficiently, and reliably. With years of expertise in the industry,
            we understand that bearings are the backbone of countless mechanical
            systems.
          </p>
        </motion.div>
      </div>

      {/* Animated Stats */}
      <div className="w-full bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "5000+", label: "Happy Clients" },
              { value: "5000+", label: "Products" },
              { value: "50+", label: "Expert Staff" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
