"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  type: string;
  description: string;
  imageUrl: string;
  href: string;
}

export default function ProductCard({
  //   id,
  name,
  type,
  description,
  imageUrl,
  href,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <Link href={href} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <span className="text-sm text-muted-foreground px-3 py-1 bg-primary/5 rounded-full">
              {type}
            </span>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 h-0.5 bg-primary/10 rounded-full transform origin-left"
          />

          <div className="mt-4 flex items-center text-sm text-primary">
            <span className="font-medium">Learn More</span>
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
