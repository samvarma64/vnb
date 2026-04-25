"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years" },
  { value: "1000+", label: "Projects" },
  { value: "500+", label: "Clients" },
  { value: "3", label: "Verticals" },
];

export default function VNBMinimalStats() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
