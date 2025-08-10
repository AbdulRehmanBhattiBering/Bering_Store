"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col justify-end items-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Industrial bearings collection"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Product Range
            </h1>
            <div className="h-1 w-20 bg-primary mb-6" />
            <p className="text-lg text-white/90 mb-8">
              Discover our comprehensive range of high-quality bearings designed
              for various industrial applications. From precision ball bearings
              to heavy-duty roller bearings, we have the right solution for your
              needs.
            </p>
          </motion.div>

          {/* Search Bar */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative max-w-xl"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm 
                         text-white placeholder-white/60 border border-white/20
                         focus:outline-none focus:ring-2 focus:ring-primary/50
                         transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-white/60" />
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Category Pills */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full bg-black/30 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {[
              "All Products",
              "Ball Bearings",
              "Roller Bearings",
              "Thrust Bearings",
              "Plain Bearings",
            ].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 
                         transition-colors text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
