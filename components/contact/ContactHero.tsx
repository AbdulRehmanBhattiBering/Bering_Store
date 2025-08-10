"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+92-XXX-XXXXXXX",
    href: "tel:+92XXXXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@arbstore.com",
    href: "mailto:contact@arbstore.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Main Bazar gurugan Nagar Al Habib Bank Gowalmandi Lahore",
    href: "https://maps.google.com/?q=Main+Bazar+gurugan+Nagar+Al+Habib+Bank+Gowalmandi+Lahore",
  },
];

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/contact-hero.jpg"
            alt="ARB Store contact"
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
              Get in Touch
            </h1>
            <div className="h-1 w-20 bg-primary mb-6" />
            <p className="text-lg text-white/90 mb-12">
              Have questions about our products or need expert advice? We're
              here to help. Contact us today and let our team assist you in
              finding the perfect bearing solutions.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                target={info.icon === MapPin ? "_blank" : undefined}
                rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary-foreground">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {info.title}
                  </h3>
                </div>
                <p className="text-white/80">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
