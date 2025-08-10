"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const businessHours = [
  { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { days: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

export default function MapSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.5675390825188!2d74.3191!3d31.5825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM0JzU3LjAiTiA3NMKwMTknMDguOCJF!5e0!3m2!1sen!2s!4v1628000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ARB Store Location"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Visit Our Store</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Main Bazar gurugan Nagar Al Habib Bank Gowalmandi Lahore
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-4">
                {businessHours.map(({ days, hours }) => (
                  <div key={days} className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{days}</p>
                      <p className="text-muted-foreground">{hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone Support</p>
                  <p className="text-muted-foreground">+92-XXX-XXXXXXX</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-primary/5 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Getting Here</h4>
              <p className="text-muted-foreground">
                We're conveniently located in the heart of Lahore's business
                district. Look for the Al Habib Bank building in Gowalmandi, and
                you'll find us right in the main bazaar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
