"use client";

import Navbar from "@/components/Navbar";
import VNBMinimalHeroNew from "@/components/VNBMinimalHeroNew";
import VNBStoryCards from "@/components/VNBStoryCards";
import VNBBrandShowcase from "@/components/VNBBrandShowcase";
import VNBMinimalStats from "@/components/VNBMinimalStats";
import VNBMinimalCTA from "@/components/VNBMinimalCTA";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <VNBMinimalHeroNew />
          <VNBStoryCards />
          <VNBBrandShowcase />
          <VNBMinimalStats />
          <VNBMinimalCTA />
          <Footer />
        </motion.div>
      </AnimatePresence>

      {/* Global loading overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed inset-0 z-50 bg-white pointer-events-none"
      >
        <div className="flex items-center justify-center h-full">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
          />
        </div>
      </motion.div>
    </main>
  );
}
