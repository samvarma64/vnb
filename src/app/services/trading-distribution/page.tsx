"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  Truck,
  Package,
  Building,
  Factory,
  CheckCircle,
  Shield,
  Globe,
  BarChart3,
  Users,
  Zap,
  Warehouse,
} from "lucide-react";

export default function TradingDistributionPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-orange/5 via-white to-vnb-yellow/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-orange/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-orange transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
                <TrendingUp className="w-4 h-4" />
                Trading & Distribution
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Strategic Trading{" "}
                <span className="text-gradient-primary">& Distribution</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                VNB Trading provides comprehensive distribution and supply chain
                solutions for electrical equipment, solar components, and
                industrial materials. We ensure reliable sourcing and efficient
                delivery across multiple sectors.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Get Trading Solutions
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-white text-vnb-orange border-2 border-vnb-orange/20 rounded-xl font-semibold hover:bg-vnb-orange/5 transition-all"
                >
                  View Products
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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&q=80"
                alt="Trading Distribution"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">
                  Global Supply Chain Solutions
                </p>
                <p className="text-sm text-white/80">
                  Efficient distribution and logistics management
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
              Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Trading Solutions
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end trading and distribution services for electrical,
              solar, and industrial products with reliable supply chain
              management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Electrical Equipment",
                desc: "Complete range of electrical equipment and components for industrial and commercial applications.",
                features: [
                  "Transformers & switchgear",
                  "Cables & conductors",
                  "Control panels",
                  "Lighting equipment",
                ],
              },
              {
                icon: Zap,
                title: "Solar Components",
                desc: "High-quality solar panels, inverters, and mounting systems for solar power projects.",
                features: [
                  "Solar panels",
                  "Inverters & charge controllers",
                  "Mounting structures",
                  "Batteries & storage",
                ],
              },
              {
                icon: Factory,
                title: "Industrial Materials",
                desc: "Industrial raw materials and equipment for manufacturing and construction projects.",
                features: [
                  "Steel & structural materials",
                  "Machinery & equipment",
                  "Tools & accessories",
                  "Safety equipment",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-orange/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-vnb-orange flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Product Boxes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
              Featured Products
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solar & IT Hardware Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Premium quality solar components and IT hardware for complete
              project solutions with reliable supply chain support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Solar Modules */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-blue/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-blue/10 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-vnb-blue/10 to-vnb-purple/10 z-10" />
                  <Image
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=400&fit=crop&q=80"
                    alt="Solar Modules"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Solar Modules
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    High-efficiency solar panels with latest technology for
                    maximum energy generation and durability.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-semibold hover:from-vnb-blue/90 hover:to-vnb-purple/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-blue/20"
                  >
                    <span>Get Quote</span>
                    <Zap className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Solar Inverters */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-green/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-green/10 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-vnb-green/10 to-vnb-blue/10 z-10" />
                  <Image
                    src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&h=400&fit=crop&q=80"
                    alt="Solar Inverters"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Solar Inverters
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Advanced solar inverters for optimal power conversion and
                    system efficiency with smart monitoring features.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold hover:from-vnb-green/90 hover:to-vnb-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-green/20"
                  >
                    <span>Get Quote</span>
                    <Zap className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Electric Cables & Wires */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-orange/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-orange/10 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-vnb-orange/10 to-vnb-yellow/10 z-10" />
                  <Image
                    src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=400&fit=crop&q=80"
                    alt="Electric Cables & Wires"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Electric Cables & Wires
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    High-quality electrical cables and wires for safe and
                    efficient power transmission in solar installations.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold hover:from-vnb-orange/90 hover:to-vnb-yellow/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-orange/20"
                  >
                    <span>Get Quote</span>
                    <Package className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* IT Hardware */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-purple/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-purple/10 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-vnb-purple/10 to-vnb-pink/10 z-10" />
                  <Image
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=400&fit=crop&q=80"
                    alt="IT Hardware"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    IT Hardware
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Comprehensive IT hardware solutions including servers,
                    networking equipment, and monitoring systems.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-xl font-semibold hover:from-vnb-purple/90 hover:to-vnb-pink/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-purple/20"
                  >
                    <span>Get Quote</span>
                    <Globe className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supply Chain Management */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&q=80"
                alt="Supply Chain Management"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Supply Chain Excellence</p>
                <p className="text-sm text-white/80">
                  Efficient logistics management
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-yellow bg-vnb-yellow/5 rounded-full border border-vnb-yellow/10">
                Supply Chain
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Supply Chain Management
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive supply chain management ensures timely
                delivery of products with optimal inventory management and
                logistics coordination. We handle everything from sourcing to
                last-mile delivery.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Global sourcing network",
                  "Inventory management",
                  "Logistics coordination",
                  "Quality assurance",
                  "Just-in-time delivery",
                  "Customs clearance",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-vnb-yellow flex-shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-yellow to-vnb-orange text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Optimize Supply Chain</span>
                <Truck className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                Distribution
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Distribution Network
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Extensive distribution network covering urban and rural areas
                with warehousing facilities and efficient delivery systems. We
                ensure products reach customers on time, every time.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Pan-India distribution network",
                  "Strategic warehouse locations",
                  "Fleet management",
                  "Last-mile delivery",
                  "Cold chain logistics",
                  "Real-time tracking",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-vnb-purple flex-shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Expand Distribution</span>
                <Warehouse className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&q=80"
                alt="Distribution Warehouse"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Distribution Network</p>
                <p className="text-sm text-white/80">
                  Strategic warehouse locations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
              Markets
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Market Sectors
            </h2>
            <p className="text-lg text-gray-600">
              Serving diverse market sectors with specialized products and
              tailored distribution solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: "Construction",
                desc: "Electrical and construction materials for building and infrastructure projects.",
              },
              {
                icon: Factory,
                title: "Manufacturing",
                desc: "Industrial equipment and raw materials for manufacturing industries.",
              },
              {
                icon: Zap,
                title: "Energy",
                desc: "Solar components and electrical equipment for power generation projects.",
              },
              {
                icon: Globe,
                title: "Retail",
                desc: "Consumer products and retail distribution networks nationwide.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-orange/20 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Standards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
              Quality
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality & Standards
            </h2>
            <p className="text-lg text-gray-600">
              Commitment to quality with international standards and
              certifications for all products and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                desc: "Rigorous quality control processes and testing to ensure product reliability.",
                features: [
                  "ISO certification",
                  "Product testing",
                  "Quality audits",
                  "Compliance checks",
                ],
              },
              {
                icon: BarChart3,
                title: "Market Intelligence",
                desc: "Advanced market analysis and insights for strategic sourcing and pricing.",
                features: [
                  "Market research",
                  "Price optimization",
                  "Trend analysis",
                  "Competitive intelligence",
                ],
              },
              {
                icon: Users,
                title: "Customer Service",
                desc: "Dedicated customer support and after-sales service for complete satisfaction.",
                features: [
                  "24/7 support",
                  "Technical assistance",
                  "Warranty management",
                  "Training programs",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-green/20 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-vnb-green to-vnb-blue rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-vnb-green flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&h=400&fit=crop&q=80"
            alt="Trading Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "500+", label: "Products" },
              { value: "50+", label: "Suppliers" },
              { value: "100+", label: "Distribution Centers" },
              { value: "20+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-vnb-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
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
              Optimize Your Supply Chain
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with VNB Trading for reliable sourcing, efficient
              distribution, and comprehensive supply chain solutions tailored to
              your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-vnb-orange rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Trading Partnership
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
  );
}
