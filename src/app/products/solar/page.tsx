"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Sun,
  CheckCircle,
  Zap,
  Battery,
  Shield,
  Settings,
} from "lucide-react";

export default function SolarProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-vnb-orange/5 via-white to-vnb-yellow/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-orange/10 to-transparent rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-orange transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
                  <Sun className="w-4 h-4" />
                  Solar Products
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Premium Solar{" "}
                  <span className="text-gradient-primary">Products</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  High-quality solar modules, inverters, mounting structures,
                  and Balance of System components from leading manufacturers.
                  Complete solar product solutions for residential, commercial,
                  and utility-scale projects.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Get Product Quote
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&q=80"
                  alt="Solar Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Premium Solar Products</p>
                  <p className="text-sm text-white/80">
                    Industry-leading quality and performance
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solar Modules */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
                  Solar Modules
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  High-Efficiency Solar Modules
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We supply premium solar modules with the latest cell
                  technologies delivering maximum energy generation and
                  long-term reliability. Choose from Mono PERC, TopCON, and HJT
                  technologies for your projects.
                </p>

                <div className="space-y-6 mb-8">
                  {[
                    {
                      title: "Mono PERC",
                      desc: "Passivated Emitter Rear Cell technology with 20-22% efficiency. Cost-effective and proven technology for residential and commercial installations.",
                    },
                    {
                      title: "TopCON (Tunnel Oxide Passivated Contact)",
                      desc: "Next-generation cell technology with 22-24% efficiency. Superior temperature coefficient and better low-light performance for higher energy yield.",
                    },
                    {
                      title: "HJT (Heterojunction Technology)",
                      desc: "Premium cell technology with 23-26% efficiency. Bifacial capability, lowest degradation rates, and exceptional performance in high temperatures.",
                    },
                  ].map((module, i) => (
                    <div
                      key={i}
                      className="bg-vnb-orange/5 rounded-2xl p-5 border border-vnb-orange/10"
                    >
                      <h4 className="font-bold text-gray-900 mb-1">
                        {module.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {module.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Get Module Pricing</span>
                  <Sun className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop&q=80"
                  alt="Solar Modules"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Solar Modules</p>
                  <p className="text-sm text-white/80">
                    Mono PERC, TopCON & HJT
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solar Inverters */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
                Solar Inverters
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Solar Inverters for Every Application
              </h2>
              <p className="text-lg text-gray-600">
                Advanced solar inverters for optimal power conversion with smart
                monitoring features. Available in all configurations to suit
                your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Grid-Tied Inverters",
                  desc: "High-efficiency string and central inverters for on-grid solar systems. MPPT tracking and grid synchronization for maximum export.",
                  features: [
                    "98%+ Efficiency",
                    "MPPT Tracking",
                    "Grid Sync",
                    "Remote Monitoring",
                  ],
                  color: "vnb-green",
                },
                {
                  icon: Battery,
                  title: "Hybrid Inverters",
                  desc: "Combined solar + battery inverters for grid-connected systems with backup. Smart energy management and time-of-use optimization.",
                  features: [
                    "Battery Compatible",
                    "Backup Power",
                    "Smart EMS",
                    "Peak Shaving",
                  ],
                  color: "vnb-blue",
                },
                {
                  icon: Shield,
                  title: "Off-Grid Inverters",
                  desc: "Standalone inverters for remote locations without grid access. Pure sine wave output with battery charging capabilities.",
                  features: [
                    "Pure Sine Wave",
                    "Battery Charger",
                    "Generator Support",
                    "Standalone",
                  ],
                  color: "vnb-purple",
                },
                {
                  icon: Settings,
                  title: "Micro Inverters",
                  desc: "Module-level power optimization for maximum energy harvest. Per-panel MPPT and monitoring for shade-prone installations.",
                  features: [
                    "Panel-Level MPPT",
                    "No Single Failure",
                    "Easy Expansion",
                    "25-Year Warranty",
                  ],
                  color: "vnb-orange",
                },
              ].map((inverter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-green/20 hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br from-${inverter.color} to-vnb-blue rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <inverter.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {inverter.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {inverter.desc}
                  </p>
                  <ul className="space-y-2">
                    {inverter.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-vnb-green flex-shrink-0" />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Get Inverter Pricing</span>
                <Zap className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Mounting Structures */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop&q=80"
                  alt="Mounting Structures"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Mounting Structures</p>
                  <p className="text-sm text-white/80">
                    Engineered for durability
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
                  Mounting Structures
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Solar Mounting Structures
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Engineered mounting solutions for rooftop, ground-mounted, and
                  carport solar installations. Designed for structural
                  integrity, corrosion resistance, and easy installation.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "RCC Rooftop Mounting Systems",
                    "Sheet Roof (Tin/Metal) Mounting",
                    "Ground Mounted Fixed-Tilt Structures",
                    "Seasonal Tilt Structures",
                    "Single-Axis & Dual-Axis Trackers",
                    "Elevated & Carport Structures",
                    "Hot-dip Galvanized & Anodized Aluminum",
                    "Wind load tested (up to 150 km/h)",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-vnb-blue flex-shrink-0" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Get Structure Quote</span>
                  <Shield className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BOS Components */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                  BOS Components
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Balance of System Components
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Complete range of BOS components essential for solar
                  installations. From DC cables and connectors to protection
                  devices and monitoring systems — everything you need for a
                  reliable solar system.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "DC Cables (Solar-rated)",
                    "MC4 Connectors",
                    "DC Combiner Boxes",
                    "AC/DC Distribution Boards",
                    "Surge Protection Devices",
                    "Earthing Kits",
                    "Cable Trays & Conduits",
                    "Energy Meters (Net/Gross)",
                    "Monitoring Systems",
                    "Lightning Arrestors",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-vnb-purple flex-shrink-0" />
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Get BOS Quote</span>
                  <Settings className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&h=600&fit=crop&q=80"
                  alt="BOS Components"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">BOS Components</p>
                  <p className="text-sm text-white/80">
                    Complete system accessories
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-3xl p-12 text-center text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Solar Products?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get competitive pricing on premium solar modules, inverters,
                mounting structures, and BOS components from leading
                manufacturers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-vnb-orange rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Request Product Catalog
                </Link>
                <a
                  href="tel:+918333018333"
                  className="inline-block px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  Call +91 8333 01 8333
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
