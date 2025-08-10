"use client";

import { motion } from "framer-motion";
import {
  Box,
  CheckCircle,
  Clock,
  HeartHandshake,
  Settings,
  Truck,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: Box,
    title: "Wide Product Range",
    description:
      "Comprehensive selection of bearing types and sizes for all applications",
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    description: "Rigorous testing and quality control for every product",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    description:
      "Technical guidance and custom solutions from our experienced team",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Reliable and punctual delivery to meet your schedule",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored bearing solutions for unique applications",
  },
  {
    icon: Truck,
    title: "Nationwide Service",
    description: "Serving clients across Pakistan with reliable logistics",
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Experience the difference of working with a trusted bearing supplier"
          className="mb-12"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When you choose ARB Store, you&apos;re choosing reliability,
            precision, and excellence. We&apos;re here to keep your machines
            moving and your business growing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
