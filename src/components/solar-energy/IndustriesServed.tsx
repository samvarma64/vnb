"use client";

import { motion } from "framer-motion";
import { Factory, Building2, Tractor, Landmark } from "lucide-react";

const industries = [
  {
    title: "Commercial Sector",
    description: "Lower energy costs for retail spaces, office complexes, and shopping malls.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Industrial Sector",
    description: "Support eco-friendly operations for manufacturing plants and factories.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Agricultural Sector",
    description: "Solar-powered irrigation and energy solutions for sustainable farming.",
    icon: Tractor,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "Government Projects",
    description: "Solar parks and community initiatives aligned with national goals.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1517089591964-999785ad723c?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function IndustriesServed() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Industries <span className="text-vnb-green">We Serve</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Empowering various sectors to embrace renewable energy and foster economic growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${industry.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="w-12 h-12 rounded-xl bg-vnb-green flex items-center justify-center mb-6 shadow-lg shadow-vnb-green/40">
                  <industry.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-3">{industry.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-vnb-green to-vnb-blue text-white text-xl font-bold rounded-full shadow-2xl shadow-vnb-green/30"
          >
            Contact us to elevate your vision
          </motion.button>
        </div>
      </div>
    </section>
  );
}
