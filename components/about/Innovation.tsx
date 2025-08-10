"use client";

import { motion } from "framer-motion";
import { Lightbulb, Recycle, Microscope, Factory } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: Lightbulb,
    title: "Research & Development",
    description:
      "Continuous investment in improving bearing technology to meet evolving market demands.",
  },
  {
    icon: Recycle,
    title: "Sustainable Practices",
    description:
      "Manufacturing processes that prioritize efficiency and environmental responsibility.",
  },
  {
    icon: Microscope,
    title: "Advanced Testing",
    description:
      "State-of-the-art testing facilities ensuring product reliability and performance.",
  },
  {
    icon: Factory,
    title: "Smart Manufacturing",
    description:
      "Modern production techniques for consistent quality and precision.",
  },
];

export default function Innovation() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Innovation and Sustainability"
          subtitle="Driving progress through technology and responsible practices"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />

              <div className="relative p-6 text-center space-y-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center"
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">{feature.description}</p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="h-0.5 bg-primary/10 rounded-full transform origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-muted-foreground">
            We continuously invest in research and development to improve
            bearing technology and meet evolving market demands. Our
            manufacturing processes prioritize efficiency and sustainability,
            reducing environmental impact without compromising product quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
