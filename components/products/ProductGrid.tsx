"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../ui/ProductCard";
import { products } from "@/lib/products";

// const products = [
//   {
//     id: "1",
//     name: "Deep Groove Ball Bearings",
//     type: "Ball Bearings",
//     description:
//       "Versatile bearings suitable for high-speed applications with radial and axial loads.",
//     imageUrl: "/images/deep-groove-ball.jpg",
//     href: "/products/deep-groove-ball-bearings",
//   },
//   {
//     id: "2",
//     name: "Angular Contact Ball Bearings",
//     type: "Ball Bearings",
//     description:
//       "Designed for combined loads and high-precision applications like machine tool spindles.",
//     imageUrl: "/images/angular-contact.jpg",
//     href: "/products/angular-contact-bearings",
//   },
//   {
//     id: "3",
//     name: "Cylindrical Roller Bearings",
//     type: "Roller Bearings",
//     description:
//       "High load capacity bearings ideal for heavy industrial machinery.",
//     imageUrl: "/images/cylindrical-roller.jpg",
//     href: "/products/cylindrical-roller-bearings",
//   },
//   {
//     id: "4",
//     name: "Tapered Roller Bearings",
//     type: "Roller Bearings",
//     description:
//       "Perfect for applications with combined radial and axial loads.",
//     imageUrl: "/images/tapered-roller.jpg",
//     href: "/products/tapered-roller-bearings",
//   },
//   {
//     id: "5",
//     name: "Thrust Ball Bearings",
//     type: "Thrust Bearings",
//     description:
//       "Specifically designed to handle axial loads in one direction.",
//     imageUrl: "/images/thrust-ball.jpg",
//     href: "/products/thrust-ball-bearings",
//   },
//   {
//     id: "6",
//     name: "Plain Bushings",
//     type: "Plain Bearings",
//     description:
//       "Simple, reliable bearings for low-speed applications with good wear resistance.",
//     imageUrl: "/images/plain-bushings.jpg",
//     href: "/products/plain-bushings",
//   },
// ];

const categories = [
  "All Products",
  "Precision",
  "Industrial",
  "Specialized",
  "Roller Bearings",
  "Plain Bushings",
  "Angular Bearing",
  "Journal",
];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" || product.type === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-xl px-6 py-3 rounded-lg bg-muted border border-border
                     text-foreground placeholder-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-primary/50
                     transition-all"
          />
        </div>

        {/* Products Grid */}
        <motion.div
          //   layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                // layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              No products found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
