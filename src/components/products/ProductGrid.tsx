"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Mic2,
  BookOpen,
  Layout,
  Tv,
  Layers,
  Smartphone,
  Maximize,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const productCategories = [
  {
    title: "Solar",
    description:
      "Advanced solar energy systems and solutions for sustainable power generation.",
    items: [
      {
        name: "Solar Panels",
        link: "/products/solar-panels",
        icon: Monitor,
      },
      {
        name: "Solar Inverters",
        link: "/products/solar-inverters",
        icon: Layers,
      },
      {
        name: "Energy Storage",
        link: "/products/energy-storage",
        icon: Layout,
      },
      {
        name: "Mounting Systems",
        link: "/products/mounting-systems",
        icon: Smartphone,
      },
    ],
    color: "from-amber-600/20 to-orange-500/20",
    accent: "bg-orange-500",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Power",
    description:
      "Comprehensive power generation, distribution, and management solutions.",
    items: [
      {
        name: "Power Generators",
        link: "/products/power-generators",
        icon: Mic2,
      },
      {
        name: "Distribution Systems",
        link: "/products/distribution-systems",
        icon: Layout,
      },
    ],
    color: "from-blue-600/20 to-indigo-500/20",
    accent: "bg-blue-600",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "IT & Smart Systems",
    description:
      "Intelligent technology solutions and smart automation systems.",
    items: [
      {
        name: "Smart Controllers",
        link: "/products/smart-controllers",
        icon: BookOpen,
      },
      { name: "IoT Devices", link: "/products/iot-devices", icon: Monitor },
      {
        name: "Automation Systems",
        link: "/products/automation-systems",
        icon: Monitor,
      },
      { name: "Smart Sensors", link: "/products/smart-sensors", icon: Tv },
    ],
    color: "from-emerald-600/20 to-teal-500/20",
    accent: "bg-emerald-500",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Infrastructure",
    description:
      "Supporting infrastructure and components for complete system integration.",
    items: [
      {
        name: "Control Systems",
        link: "/products/control-systems",
        icon: Layers,
      },
      {
        name: "Monitoring Solutions",
        link: "/products/monitoring-solutions",
        icon: Maximize,
      },
    ],
    color: "from-purple-600/20 to-pink-500/20",
    accent: "bg-purple-500",
    span: "lg:col-span-1 lg:row-span-1",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden noise-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vnb-blue/10 text-vnb-blue text-xs font-bold uppercase tracking-widest mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-vnb-blue animate-pulse" />
              Product Verticals
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Solutions tailored for the <br />
              <span className="text-vnb-blue">Modern Enterprise</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg md:text-xl max-w-md leading-relaxed"
          >
            A comprehensive ecosystem of technology designed to enhance
            productivity, learning, and communication.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6">
          {productCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col ${category.span}`}
            >
              {/* Background Accent Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl ${category.accent} flex items-center justify-center mb-10 shadow-lg text-white`}
                >
                  <Monitor size={28} />
                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-vnb-blue transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-500 mb-10 text-lg leading-relaxed max-w-sm">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="group/item flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-vnb-blue/20 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white shadow-sm text-slate-400 group-hover/item:text-vnb-blue transition-colors">
                          <item.icon size={18} />
                        </div>
                        <span className="font-semibold text-slate-700 text-sm">
                          {item.name}
                        </span>
                      </div>
                      <ArrowRight
                        className="text-slate-300 group-hover/item:text-vnb-blue group-hover/item:translate-x-1 transition-all"
                        size={16}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                {React.createElement(category.items[0].icon, { size: 120 })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
