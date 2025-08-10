"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  imageUrl?: string;
  className?: string;
}

export default function IndustryCard({
  title,
  description,
  icon: Icon,
  imageUrl,
  className = "",
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className={`group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all ${className}`}
    >
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        </div>
      )}

      <div
        className={`p-6 ${
          imageUrl ? "absolute bottom-0 left-0 right-0 text-white" : ""
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          {Icon && (
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`p-2 rounded-lg ${
                imageUrl
                  ? "bg-white/20 text-white"
                  : "bg-primary/10 text-primary"
              }`}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          )}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        <p
          className={`text-sm ${
            imageUrl ? "text-white/90" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-4 h-0.5 rounded-full transform origin-left ${
            imageUrl ? "bg-white/20" : "bg-primary/10"
          }`}
        />
      </div>
    </motion.div>
  );
}
