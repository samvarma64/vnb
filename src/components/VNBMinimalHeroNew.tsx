"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VNBMinimalHeroNew() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&auto=format&q=80"
          alt="VNB India"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Minimal Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
            VNB India
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
            Technology. Solar. Interactive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
