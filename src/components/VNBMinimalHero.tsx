"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function VNBMinimalHero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Fallback */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
            alt="VNB Group Background"
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Images */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 w-32 h-32 opacity-20"
        >
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb74f2890370?w=150&h=150&fit=crop"
            alt="Technology"
            width={128}
            height={128}
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-40 right-10 w-32 h-32 opacity-20"
        >
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=150&h=150&fit=crop"
            alt="Solar"
            width={128}
            height={128}
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute bottom-40 left-20 w-32 h-32 opacity-20"
        >
          <Image
            src="https://images.unsplash.com/photo-1599508644512-2dfc872d29b1?w=150&h=150&fit=crop"
            alt="Interactive"
            width={128}
            height={128}
            className="rounded-lg"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-bold mb-6"
        >
          VNB Group
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-light mb-16 text-gray-300"
        >
          Technology • Solar • Interactive
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block"
        >
          <Link
            href="#verticals"
            className="inline-block px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Explore Our Companies
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
