"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function VNBMinimalCTA() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop&auto=format&q=80"
          alt="Contact VNB Group"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl px-6"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-12">
            Let&apos;s Build Together
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#contact"
              className="px-12 py-5 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="px-12 py-5 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
