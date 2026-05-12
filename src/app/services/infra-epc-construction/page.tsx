"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Building,
  Factory,
  HardHat,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Truck,
  FileText,
  Gauge,
} from "lucide-react";

export default function InfraEPCConstructionPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-green/5 via-white to-vnb-blue/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-green/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-green transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
                <HardHat className="w-4 h-4" />
                Infra EPC Construction
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Infrastructure{" "}
                <span className="text-gradient-primary">EPC Solutions</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                VNB Infra delivers comprehensive EPC solutions for industrial,
                commercial, and infrastructure projects. From concept to
                commissioning, we handle engineering, procurement, and
                construction with precision and excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-white text-vnb-green border-2 border-vnb-green/20 rounded-xl font-semibold hover:bg-vnb-green/5 transition-all"
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80"
                alt="Infrastructure Construction"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">
                  Complete Infrastructure Solutions
                </p>
                <p className="text-sm text-white/80">
                  Engineering, Procurement & Construction Excellence
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EPC Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
              EPC Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              End-to-End EPC Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive engineering, procurement, and construction services
              for industrial, commercial, and infrastructure projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Engineering",
                desc: "Detailed engineering design, feasibility studies, and technical specifications for project execution.",
                features: [
                  "Conceptual design",
                  "Detailed engineering",
                  "Structural analysis",
                  "MEP systems design",
                ],
              },
              {
                icon: Truck,
                title: "Procurement",
                desc: "Strategic sourcing and procurement of materials, equipment, and services with quality assurance.",
                features: [
                  "Material procurement",
                  "Equipment sourcing",
                  "Supplier management",
                  "Quality control",
                ],
              },
              {
                icon: Building,
                title: "Construction",
                desc: "Complete construction management with focus on safety, quality, and timely project delivery.",
                features: [
                  "Project management",
                  "Civil construction",
                  "Installation & commissioning",
                  "Safety compliance",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-green/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-green to-vnb-blue rounded-2xl flex items-center justify-center mb-6">
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
                      <CheckCircle className="w-5 h-5 text-vnb-green flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional EPC Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
              Specialized Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Infrastructure Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive infrastructure development services from turnkey
              projects to specialized civil works and structural solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TurnKey EPC Projects */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-green/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-green/10 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-vnb-green/10 to-vnb-blue/10 z-10" />
                  <Image
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=400&fit=crop&q=80"
                    alt="TurnKey EPC Projects"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    TurnKey EPC Projects
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Complete turnkey EPC solutions from concept to commissioning
                    with single-point responsibility for project delivery.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold hover:from-vnb-green/90 hover:to-vnb-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-green/20"
                  >
                    <span>Get Quote</span>
                    <HardHat className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Switchyard Civil Works */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-blue/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-blue/10 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-vnb-blue/10 to-vnb-purple/10 z-10" />
                  <Image
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit=crop&q=80"
                    alt="Switchyard Civil Works"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Switchyard Civil Works
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Specialized civil works for switchyards including
                    foundations, control buildings, and outdoor equipment
                    structures.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-semibold hover:from-vnb-blue/90 hover:to-vnb-purple/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-blue/20"
                  >
                    <span>Get Quote</span>
                    <Building className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Structural Fabrication & Erection */}
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
                    src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=400&fit=crop&q=80"
                    alt="Structural Fabrication & Erection"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Structural Fabrication & Erection
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Precision structural fabrication and erection services for
                    industrial buildings, plants, and infrastructure projects.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold hover:from-vnb-orange/90 hover:to-vnb-yellow/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-orange/20"
                  >
                    <span>Get Quote</span>
                    <Factory className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Road Construction */}
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
                    src="https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=800&h=400&fit=crop&q=80"
                    alt="Road Construction"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Road Construction
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Complete road construction services from highways to
                    internal roads with quality materials and modern techniques.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-xl font-semibold hover:from-vnb-purple/90 hover:to-vnb-pink/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-purple/20"
                  >
                    <span>Get Quote</span>
                    <Truck className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Site Development & Earth Works */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-green/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-green/10 h-full flex flex-col lg:col-span-2">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-vnb-green/10 to-vnb-blue/10 z-10" />
                  <Image
                    src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=400&fit=crop&q=80"
                    alt="Site Development & Earth Works"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Site Development & Earth Works
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    Comprehensive site development including excavation,
                    grading, land development, and earthwork preparation for
                    construction.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold hover:from-vnb-green/90 hover:to-vnb-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-green/20"
                  >
                    <span>Get Quote</span>
                    <Gauge className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industrial Construction */}
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80"
                alt="Industrial Construction"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Industrial Construction</p>
                <p className="text-sm text-white/80">
                  Manufacturing & facility infrastructure
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
                Industrial
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Industrial Construction
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Specialized industrial construction for manufacturing plants,
                warehouses, and production facilities. We deliver robust
                infrastructure solutions designed for operational efficiency and
                scalability.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Manufacturing plant construction",
                  "Warehouse & logistics facilities",
                  "Process industry infrastructure",
                  "Heavy equipment foundations",
                  "Industrial piping systems",
                  "Utility infrastructure setup",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-vnb-blue flex-shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Get Industrial Quote</span>
                <Factory className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commercial Construction */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                Commercial
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Commercial Construction
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Modern commercial construction solutions for office buildings,
                retail spaces, and mixed-use developments. We create spaces that
                combine functionality with aesthetic appeal.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Office building construction",
                  "Retail & commercial complexes",
                  "Mixed-use developments",
                  "Hospitality infrastructure",
                  "Educational institutions",
                  "Healthcare facilities",
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
                <span>Discuss Commercial Project</span>
                <Building className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80"
                alt="Commercial Building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Commercial Construction</p>
                <p className="text-sm text-white/80">
                  Modern commercial infrastructure
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
              Infrastructure
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Infrastructure Projects
            </h2>
            <p className="text-lg text-gray-600">
              Large-scale infrastructure development including roads, bridges,
              utilities, and public facilities with focus on quality and
              durability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Road Construction",
                desc: "Highway and road construction with quality materials and modern techniques.",
              },
              {
                icon: Building,
                title: "Bridge Projects",
                desc: "Bridge construction and rehabilitation with structural engineering expertise.",
              },
              {
                icon: Zap,
                title: "Utility Infrastructure",
                desc: "Water, sewage, and electrical utility infrastructure development.",
              },
              {
                icon: Users,
                title: "Public Facilities",
                desc: "Construction of public buildings and community infrastructure projects.",
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

      {/* Project Management */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
              Management
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project Management Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Professional project management ensuring timely delivery within
              budget while maintaining highest quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gauge,
                title: "Quality Assurance",
                desc: "Rigorous quality control processes and compliance with international standards.",
                features: [
                  "ISO compliance",
                  "Material testing",
                  "Process control",
                  "Documentation",
                ],
              },
              {
                icon: Shield,
                title: "Safety Management",
                desc: "Comprehensive safety programs ensuring zero harm and regulatory compliance.",
                features: [
                  "Safety training",
                  "Risk assessment",
                  "Safety audits",
                  "Emergency preparedness",
                ],
              },
              {
                icon: TrendingUp,
                title: "Cost & Time Management",
                desc: "Efficient resource utilization and schedule optimization for project success.",
                features: [
                  "Budget control",
                  "Schedule optimization",
                  "Resource planning",
                  "Progress monitoring",
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
            src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=1600&h=400&fit=crop&q=80"
            alt="Construction Background"
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
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Industrial Plants" },
              { value: "200+", label: "Commercial Buildings" },
              { value: "30+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-vnb-green mb-2">
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
            className="bg-gradient-to-br from-vnb-green to-vnb-blue rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build Your Infrastructure Vision
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with VNB Infra for comprehensive EPC solutions that
              deliver quality, efficiency, and value for your infrastructure
              projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-vnb-green rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Project
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
