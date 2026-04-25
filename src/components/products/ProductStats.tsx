"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Successful Installations", value: "15,000+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Products in Portfolio", value: "50+" },
  { label: "Years of Excellence", value: "15+" }
];

export default function ProductStats() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vnb-blue via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-vnb-blue font-medium uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
