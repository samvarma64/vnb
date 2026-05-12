"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const verticals = [
  {
    title: "VNB Power",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop",
    link: "/services/power",
  },
  {
    title: "VNB Solar",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop",
    link: "/services/solar",
  },
  {
    title: "VNB Interactive",
    image:
      "https://images.unsplash.com/photo-1599508644512-2dfc872d29b1?w=1920&h=1080&fit=crop",
    link: "/services/it-smart-services",
  },
];

export default function TataOverview() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb74f2890370?w=1920&h=1080&fit=crop"
          alt="VNB India"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-8"
        >
          VNB India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-light mb-16"
        >
          Technology • Solar • Interactive
        </motion.p>

        {/* Business Verticals */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <Link href={vertical.link}>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={vertical.image}
                    alt={vertical.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">
                      {vertical.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
