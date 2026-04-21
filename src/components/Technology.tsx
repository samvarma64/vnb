"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    title: "Monocrystalline Panels",
    description: "22% efficiency rate",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
  },
  {
    title: "Smart Inverters",
    description: "Real-time energy optimization",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
  },
  {
    title: "AI Monitoring",
    description: "Predictive maintenance system",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
  },
];

export default function Technology() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Technology
          </h2>
        </motion.div>

        <div className="space-y-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-xl text-gray-600">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
