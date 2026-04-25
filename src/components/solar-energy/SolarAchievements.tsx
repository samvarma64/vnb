"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Renewable Capacity", value: "500+ MWp" },
  { label: "Future Vision", value: "1 GWp+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Awards Won", value: "Global Recognition" }
];

export default function SolarAchievements() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 text-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <Image 
          src="/images/solar/tech.png"
          alt="Technology Background"
          fill
          className="object-cover mask-gradient-left"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-vnb-green font-semibold uppercase tracking-widest mb-4 block"
            >
              Leading Green Energy
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Significant <br />
              <span className="text-vnb-green">Milestones</span> in Solar
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-12 leading-relaxed"
            >
              VNB has emerged as a leader in India’s solar energy sector, 
              achieving significant milestones that underscore its commitment 
              to sustainable solutions. We handle everything from project 
              inception to operational excellence.
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-vnb-green mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
          >
            <Image 
              src="/images/solar/green-energy.png"
              alt="Green Energy Solution"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-bold mb-2">Sustainable Future</h3>
              <p className="text-gray-200">Reducing carbon emissions and supporting climate change mitigation.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
