"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ProductCard from "../ui/ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Ball Bearings",
    type: "Precision",
    description:
      "High-precision ball bearings designed for smooth rotation and reduced friction in various applications.",
    imageUrl: "/images/ball-bearings.jpg",
    href: "/products#ball-bearings",
  },
  {
    id: "2",
    name: "Roller Bearings",
    type: "Industrial",
    description:
      "Heavy-duty roller bearings engineered for high load capacity and excellent durability.",
    imageUrl: "/images/roller-bearings.jpg",
    href: "/products#roller-bearings",
  },
  {
    id: "3",
    name: "Thrust Bearings",
    type: "Specialized",
    description:
      "Specialized thrust bearings designed to handle axial loads in critical applications.",
    imageUrl: "/images/thrust-bearings.jpg",
    href: "/products#thrust-bearings",
  },
];

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
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-300"
          >
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
