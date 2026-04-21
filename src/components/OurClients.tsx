"use client";

import { motion } from "framer-motion";
import { Zap, Building2, MapPin, Award, CheckCircle } from "lucide-react";

// Professional monochrome text logos
const clientLogos = [
  { name: "TechCorp Industries", display: "TECHCORP" },
  { name: "Global Energy Solutions", display: "GLOBAL ENERGY" },
  { name: "Innovation Systems", display: "INNOVATION" },
  { name: "Premier Bank Limited", display: "PREMIER BANK" },
  { name: "Data Dynamics", display: "DATA DYNAMICS" },
  { name: "EcoPower Ventures", display: "ECOPOWER" },
  { name: "Smart Grid Technologies", display: "SMART GRID" },
  { name: "Future Tech Labs", display: "FUTURE TECH" },
];

export default function OurClients() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Trusted by <span className="font-semibold">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Partnering with India&apos;s most innovative organizations to
            deliver sustainable energy and technology solutions
          </p>
        </motion.div>

        {/* Client Logos Marquee */}
        <div className="relative mb-32">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-20"
              animate={{ x: [0, -100 * 16] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {[...Array(16)].map((_, i) => {
                const client = clientLogos[i % clientLogos.length];
                return (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center w-64 opacity-40 hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-2xl font-light text-gray-900 tracking-wider">
                      {client.display}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Subtle fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              {
                value: "1000+",
                label: "MW Solar Installed",
                icon: Zap,
                description: "Clean energy capacity deployed across India",
              },
              {
                value: "500+",
                label: "Enterprise Clients",
                icon: Building2,
                description: "Leading businesses trust our solutions",
              },
              {
                value: "25+",
                label: "States Presence",
                icon: MapPin,
                description: "Pan-India footprint with local expertise",
              },
              {
                value: "15+",
                label: "Years Excellence",
                icon: Award,
                description: "Proven track record of success",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-full h-full text-gray-300" />
                </div>
                <div className="text-5xl font-light text-gray-900 mb-3">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-700 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 pt-12 border-t border-gray-200"
        >
          <div className="flex flex-wrap items-center justify-center gap-12">
            {[
              { label: "ISO 9001:2015 Certified", icon: CheckCircle },
              { label: "CMMI Level 3", icon: CheckCircle },
              { label: "Government Approved Vendor", icon: CheckCircle },
              { label: "Rated AAA by CRISIL", icon: CheckCircle },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-600"
              >
                <badge.icon className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
