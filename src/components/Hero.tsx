"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white"
    >
      {/* Clean minimal background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-vnb-blue/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-vnb-green/8 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="lg:w-3/5 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10"
            >
              Innovation • Sustainability • Excellence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight"
            >
              The Power of{" "}
              <span className="text-gradient-primary">Tomorrow</span>{" "}
              <span className="text-gray-900">Today.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:ml-0 leading-relaxed"
            >
              VNB Group integrates world-class
              <span className="font-semibold text-vnb-blue">
                {" "}
                IT Consulting{" "}
              </span>
              with premium
              <span className="font-semibold text-vnb-green">
                {" "}
                Solar Energy{" "}
              </span>
              solutions and interactive technology.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto lg:ml-0 leading-relaxed font-medium"
            >
              Serving 500+ clients across India since 2010
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#solar"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-vnb-green to-vnb-green/90 text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  VNB Solar
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-vnb-green/90 to-vnb-blue/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#tech"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-white text-vnb-blue rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-vnb-blue"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  VNB Tech Services
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-vnb-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          </div>

          {/* Trendy Floating Asset */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-2/5 relative"
          >
            <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=800&fit=crop&q=80"
                    alt="VNB Solar Solutions - Renewable Energy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vnb-blue/20 to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 left-4 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block lg:max-w-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-vnb-green to-vnb-blue rounded-full flex items-center justify-center text-white shadow-sm">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.243a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM16.464 14.95a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        50MW+
                      </div>
                      <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide">
                        Solar Installed
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 font-medium">
                      Since 2010
                    </div>
                    <div className="text-xs text-vnb-green font-semibold">
                      100% Green
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
}
