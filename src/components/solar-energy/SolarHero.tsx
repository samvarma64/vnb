"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SolarHero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/solar/hero.png"
          alt="Solar Farm at Sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-vnb-green uppercase bg-vnb-green/10 border border-vnb-green/20 rounded-full backdrop-blur-md">
              Leading the Solar Revolution
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering India with <br />
              <span className="text-gradient-primary animate-gradient">Sustainable Solar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              India is rapidly emerging as a global leader in the solar energy sector. 
              VNB Group is leveraging abundant sunlight and vast landscapes to harness clean, 
              renewable energy for a greener tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-vnb-green text-black font-bold rounded-full hover:bg-vnb-green/90 transition-all hover:scale-105 shadow-lg shadow-vnb-green/20">
                Explore Solutions
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all">
                Our Impact
              </button>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
