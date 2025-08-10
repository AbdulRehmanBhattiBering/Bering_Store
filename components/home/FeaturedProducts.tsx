"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ProductCard from "../ui/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";

export default function FeaturedProducts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Products"
          subtitle="Discover our range of high-quality bearings designed for various industrial applications"
          className="mb-12"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-300"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
