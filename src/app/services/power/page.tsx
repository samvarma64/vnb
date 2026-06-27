"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  Battery,
  Building2,
  Factory,
  TrendingUp,
  Shield,
  CheckCircle,
  Gauge,
  Sun,
  Cpu,
  Wrench,
  Eye,
} from "lucide-react";

export default function PowerPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-blue/5 via-white to-vnb-purple/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-blue/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-blue transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
                <Zap className="w-4 h-4" />
                Power Solutions
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Integrated Power{" "}
                <span className="text-gradient-primary">Solutions</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                VNB Power delivers comprehensive power solutions including
                substation construction, transmission line installation, and
                distribution infrastructure. We ensure reliable power delivery
                with cutting-edge technology and proven expertise.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Get Power Solutions
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-white text-vnb-blue border-2 border-vnb-blue/20 rounded-xl font-semibold hover:bg-vnb-blue/5 transition-all"
                >
                  View Projects
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
                src="/banners/power-services/integrated-power-solutions.jpg"
                alt="Power Substation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">
                  Complete Power Infrastructure
                </p>
                <p className="text-sm text-white/80">
                  From transmission to distribution — end-to-end solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Power Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
              Power Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Power Infrastructure
            </h2>
            <p className="text-lg text-gray-600">
              We provide complete power infrastructure solutions from
              transmission to distribution, ensuring reliable and efficient
              power delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Battery,
                title: "Transmission Lines",
                desc: "High-voltage transmission line construction and maintenance for efficient power transfer across regions.",
                features: [
                  "EHV/UHV transmission lines",
                  "Tower erection and stringing",
                  "Line patrol and maintenance",
                  "Fault detection and repair",
                ],
              },
              {
                icon: Building2,
                title: "Substations",
                desc: "Complete substation construction including equipment installation, testing, and commissioning.",
                features: [
                  "GIS & AIS substations",
                  "Control relay panels",
                  "Power transformers",
                  "Protection systems",
                ],
              },
              {
                icon: Factory,
                title: "Distribution Networks",
                desc: "Urban and rural distribution network setup with reliable last-mile connectivity solutions.",
                features: [
                  "HT/LT distribution lines",
                  "Transformer installations",
                  "Feeder pillar boxes",
                  "Street lighting connections",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-blue/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-2xl flex items-center justify-center mb-6">
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
                      <CheckCircle className="w-5 h-5 text-vnb-blue flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Power Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
              Specialized Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Electrical Infrastructure Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive electrical services from low tension to high tension
              systems with specialized expertise in industrial electrification.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* LT&HT Electrical Works */}
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
                    src="/banners/power-services/lt-and-ht-electrical-works.jpg"
                    alt="LT&HT Electrical Works"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    LT&HT Electrical Works
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Complete low tension and high tension electrical works
                    including installation, testing, and commissioning.
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

            {/* Industrial Electrification */}
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
                    src="/banners/power-services/industrial-electrification.jpg"
                    alt="Industrial Electrification"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Industrial Electrification
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Complete industrial electrification solutions for factories,
                    plants, and manufacturing facilities with power
                    distribution.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold hover:from-vnb-green/90 hover:to-vnb-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-green/20"
                  >
                    <span>Get Quote</span>
                    <Factory className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Cable Laying */}
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
                    src="/banners/power-services/cable-laying.jpg"
                    alt="Cable Laying"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Cable Laying
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Professional cable laying services for underground and
                    overhead installations with proper trenching and protection.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold hover:from-vnb-orange/90 hover:to-vnb-yellow/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-orange/20"
                  >
                    <span>Get Quote</span>
                    <Battery className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Earthing & Lightning Protection */}
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
                    src="/banners/power-services/earthing-and-lightning-protection.jpg"
                    alt="Earthing & Lightning Protection"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Earthing & Lightning Protection
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Comprehensive earthing and lightning protection systems for
                    safety and equipment protection against electrical surges.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-xl font-semibold hover:from-vnb-purple/90 hover:to-vnb-pink/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-purple/20"
                  >
                    <span>Get Quote</span>
                    <Shield className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Substation Construction */}
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
                src="/banners/power-services/substation-construction.jpg"
                alt="Substation Construction"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Substation Construction</p>
                <p className="text-sm text-white/80">
                  Complete infrastructure setup
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                Substations
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Substation Construction
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in complete substation construction including
                civil works, equipment installation, control systems, and
                commissioning. Our substations ensure reliable power
                distribution with advanced protection and monitoring systems.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "33KV to 400KV substation construction",
                  "Gas Insulated Switchgear (GIS) installation",
                  "Air Insulated Switchgear (AIS) setup",
                  "Control room and relay panel installation",
                  "Power transformer installation and testing",
                  "SCADA system integration",
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
                <span>Get Substation Quote</span>
                <Zap className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transmission Lines */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
                Transmission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transmission Lines
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                High-voltage transmission line construction for efficient power
                transfer across long distances. We handle everything from tower
                foundation to conductor stringing and line commissioning.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "EHV transmission lines up to 765KV",
                  "Tower foundation and erection",
                  "Conductor stringing and sagging",
                  "Line hardware and accessories",
                  "Hot line maintenance techniques",
                  "Line patrol and fault detection",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-vnb-green flex-shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Discuss Transmission Project</span>
                <Gauge className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="/banners/power-services/transmission-lines.jpg"
                alt="Power Transmission Lines"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Transmission Lines</p>
                <p className="text-sm text-white/80">
                  High-voltage power transmission
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distribution Networks */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
              Distribution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Distribution Networks
            </h2>
            <p className="text-lg text-gray-600">
              Last-mile connectivity solutions for reliable power distribution
              to urban and rural areas with advanced monitoring and control.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Urban Distribution",
                desc: "Comprehensive urban distribution network setup with underground and overhead systems.",
              },
              {
                icon: Factory,
                title: "Rural Electrification",
                desc: "Rural distribution networks bringing reliable power to remote villages and communities.",
              },
              {
                icon: Battery,
                title: "Transformer Stations",
                desc: "Distribution transformer installation and maintenance for voltage regulation.",
              },
              {
                icon: Sun,
                title: "Smart Grid Solutions",
                desc: "Advanced distribution automation with smart meters and remote monitoring.",
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

      {/* Equipment & Technology */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
              Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Equipment & Technology
            </h2>
            <p className="text-lg text-gray-600">
              State-of-the-art equipment and cutting-edge technology for
              reliable and efficient power infrastructure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "Smart Grid Systems",
                desc: "Advanced SCADA and smart grid technology for real-time monitoring and control.",
                features: [
                  "SCADA integration",
                  "Remote monitoring",
                  "Automated controls",
                  "Data analytics",
                ],
              },
              {
                icon: Shield,
                title: "Protection Systems",
                desc: "Comprehensive protection systems ensuring safety and reliability of power infrastructure.",
                features: [
                  "Relay protection",
                  "Earth fault detection",
                  "Overload protection",
                  "Surge protection",
                ],
              },
              {
                icon: Wrench,
                title: "Testing & Commissioning",
                desc: "Rigorous testing and commissioning to ensure optimal performance and safety standards.",
                features: [
                  "High voltage testing",
                  "Relay testing",
                  "Transformer testing",
                  "System commissioning",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-blue/20 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-2xl flex items-center justify-center mb-6">
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
                      <CheckCircle className="w-4 h-4 text-vnb-blue flex-shrink-0" />
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
            src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=1600&h=400&fit=crop&q=80"
            alt="Power Infrastructure Background"
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
              { value: "500+", label: "KM Transmission Lines" },
              { value: "50+", label: "Substations Built" },
              { value: "1000+", label: "Distribution Points" },
              { value: "25+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-vnb-blue mb-2">
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
            className="bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Power Your Infrastructure
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get reliable power infrastructure solutions from transmission to
              distribution. Contact us for comprehensive power project
              execution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-vnb-blue rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Discuss Your Project
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
