"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const features = [
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Get started quickly with our streamlined processes",
    },
    {
      icon: Shield,
      title: "Reliable Support",
      description: "24/7 expert support for all your needs",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "CMMI Level 3 certified with 500+ successful projects",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-vnb-blue via-vnb-purple to-vnb-green overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who trust VNB India for their
              solar, technology, and interactive solutions.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-vnb-purple to-pink text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-white/70 text-sm mb-4">
              Trusted by leading organizations across India
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                >
                  <span className="text-white/50 font-semibold text-xs">
                    CLIENT {i}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
