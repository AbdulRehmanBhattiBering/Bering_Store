"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24">
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
          style={{
            backgroundImage: "url(/images/cta-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Enhance Your Machine Performance?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/90 mb-8"
          >
            Contact us today to discover how our bearings can power your
            success. Our expert team is ready to assist you with the perfect
            bearing solutions for your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+92XXXXXXXXXX"
              className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
