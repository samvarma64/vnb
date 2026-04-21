"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import VNBLogo from "./VNBLogo";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop"
          alt="Solar panels"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <VNBLogo className="h-16 w-auto" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                VNB Solar
                <span className="block text-yellow-400">Powering Tomorrow</span>
              </motion.h1>

              {/* Overview */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
              >
                VNB Solar is a leading provider of sustainable energy solutions,
                dedicated to transforming how communities access and utilize
                solar power. We design, install, and maintain cutting-edge solar
                energy systems that reduce environmental impact while delivering
                reliable, cost-effective power for homes and businesses.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-300 transition-all duration-300 hover:shadow-xl"
                >
                  Get Started with Solar
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    To make clean, renewable energy accessible to everyone,
                    creating a sustainable future for generations to come.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
