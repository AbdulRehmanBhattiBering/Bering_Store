"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { pageTransition } from "@/lib/animations";

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const segments = useSelectedLayoutSegments();
  const key = "/" + segments.join("/");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={pageTransition}
        className="min-h-screen flex flex-col"
      >
        {children}

        {/* Animated Page Loader */}
        <motion.div
          className="fixed top-0 left-0 w-full h-1 bg-primary/20"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0, transformOrigin: "right" }}
          transition={{ duration: 0.6 }}
        />

        {/* Page Exit Animation */}
        <motion.div
          className="fixed inset-0 bg-background pointer-events-none"
          initial={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
