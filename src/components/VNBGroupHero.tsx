"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const verticals = [
  {
    title: "VNB Technologies",
    link: "/services/tech",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&auto=format",
  },
  {
    title: "VNB Solar",
    link: "/services/solar-energy",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop&auto=format",
  },
  {
    title: "VNB Interactive",
    link: "/services/interactive",
    image:
      "https://images.unsplash.com/photo-1599508644512-2dfc872d29b1?w=1920&h=1080&fit=crop&auto=format",
  },
];

export default function vnbindiaHero() {
  return (
    <section className="relative min-h-screen">
      {/* Full Screen Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
        {verticals.map((vertical, index) => (
          <motion.div
            key={vertical.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative group overflow-hidden "
          >
            <Link href={vertical.link} className="block h-full">
              {/* Background Image */}
              <div className="relative h-full">
                <Image
                  src={vertical.image}
                  alt={vertical.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
              </div>

              {/* Content - Minimal Text Only */}
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:mb-6 transition-all duration-300"
                >
                  {vertical.title}
                </motion.h2>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                  className="flex items-center gap-3 text-white/80 group-hover:text-white transition-all duration-300"
                >
                  <span className="text-sm uppercase tracking-wider">
                    Explore
                  </span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Optional: VNB India Logo Overlay */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-8 left-8 z-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white">VNB India</h1>
      </motion.div>
    </section>
  );
}
