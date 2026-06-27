"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    title: "Sustainable Energy Solutions",
    subtitle: "VNB Solar",
    image:
      "/banners/home/sustainable-energy-solutions.jpg",
    link: "/services/solar",
  },
  {
    title: "Powering Digital Transformation",
    subtitle: "VNB Power",
    image:
      "/banners/home/powering-digital-transformation.jpg",
    link: "/services/power",
  },

  {
    title: "Interactive Learning Systems",
    subtitle: "VNB Interactive",
    image:
      "/banners/home/interactive-learning-system.jpg",
    link: "/services/it-smart-services",
  },
];

export default function VNBStoryCards() {
  return (
    <section className="py-0">
      {stories.map((story) => (
        <motion.div
          key={story.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] sm:aspect-video lg:aspect-[3168/1344] w-full group"
        >
          <Link href={story.link} className="block h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="100vw"
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
            </div>

            {/* Minimal Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center max-w-4xl px-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-white/70 text-sm md:text-base uppercase tracking-widest mb-3 sm:mb-4 font-light"
                >
                  {story.subtitle}
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 leading-tight"
                >
                  {story.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 text-white group-hover:gap-5 transition-all duration-300"
                >
                  <span className="text-base sm:text-lg font-light">Explore</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
