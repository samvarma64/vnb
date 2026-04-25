"use client";

import { motion } from "framer-motion";
import { 
  Sun, 
  Home, 
  Waves, 
  Battery, 
  Zap, 
  Settings, 
  ShieldCheck 
} from "lucide-react";

const solutions = [
  {
    title: "Utility-Scale Solar",
    description: "Harness sunlight over large areas to produce clean energy for businesses and national grids.",
    icon: Sun,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Rooftop Solar",
    description: "Utilize rooftop spaces to reduce reliance on traditional power and cut electricity costs.",
    icon: Home,
    color: "from-orange-500 to-yellow-400"
  },
  {
    title: "Floating Solar",
    description: "Install panels on water bodies to save land, improve efficiency, and reduce evaporation.",
    icon: Waves,
    color: "from-cyan-500 to-blue-400"
  },
  {
    title: "BESS & Storage",
    description: "Battery Energy Storage Systems to store excess energy for use during night or peak demand.",
    icon: Battery,
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Hybrid Solutions",
    description: "Combining solar with wind or other sources for enhanced reliability and 24/7 power supply.",
    icon: Zap,
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Custom C&I Solar",
    description: "Tailored solar solutions for Commercial & Industrial businesses to meet specific energy needs.",
    icon: Settings,
    color: "from-vnb-green to-vnb-blue"
  },
  {
    title: "CBAM Solutions",
    description: "Adopting sustainable practices for green steel and aluminium to remain globally competitive.",
    icon: ShieldCheck,
    color: "from-slate-700 to-slate-900"
  }
];

export default function SolarSolutions() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Solar Energy <span className="text-vnb-green">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A versatile and sustainable pathway to meet the growing global demand for clean power.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-vnb-green/30 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-green/10"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-vnb-green transition-colors">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              
              {/* Subtle hover background decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <item.icon size={80} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
