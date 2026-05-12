"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Zap,
  CheckCircle,
  Shield,
  Cable,
  Gauge,
} from "lucide-react";

export default function PowerProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-vnb-blue/5 via-white to-vnb-purple/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-blue/10 to-transparent rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-blue transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
                  <Zap className="w-4 h-4" />
                  Power Products
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Power & Electrical{" "}
                  <span className="text-gradient-primary">Products</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Premium electrical cables, switchgear, LT & HT panels, and
                  transformers from leading manufacturers. Complete power
                  distribution products for industrial, commercial, and
                  infrastructure projects.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
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
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&q=80"
                  alt="Power Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">
                    Power & Electrical Products
                  </p>
                  <p className="text-sm text-white/80">
                    Industrial-grade quality and reliability
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Electrical Cables & Wires */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
                  Cables & Wires
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Electrical Cables & Wires
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  High-quality electrical cables and wires for power
                  transmission and distribution. Compliant with IS standards and
                  available in all configurations for LT and HT applications.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "LT Power Cables",
                      desc: "Armoured and unarmoured cables up to 1.1KV — XLPE/PVC insulated, copper and aluminium conductors.",
                    },
                    {
                      title: "HT Power Cables",
                      desc: "Medium voltage cables up to 33KV — XLPE insulated, single and three core with metallic screening.",
                    },
                    {
                      title: "Control & Instrumentation Cables",
                      desc: "Multi-core control cables for industrial automation, SCADA systems, and instrumentation applications.",
                    },
                    {
                      title: "Flexible & House Wires",
                      desc: "FR/FRLS rated building wires, flexible cables, and panel wiring solutions from top brands.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-vnb-orange/5 rounded-2xl p-4 border border-vnb-orange/10"
                    >
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Get Cable Pricing</span>
                  <Cable className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=600&fit=crop&q=80"
                  alt="Electrical Cables & Wires"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Electrical Cables & Wires</p>
                  <p className="text-sm text-white/80">
                    LT, HT & Control Cables
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Switch Gear */}
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
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&q=80"
                  alt="Switch Gear"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Switchgear</p>
                  <p className="text-sm text-white/80">
                    Protection & switching devices
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
                  Switchgear
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Switchgear Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Comprehensive range of switchgear products for power
                  distribution, protection, and control. From MCBs to vacuum
                  circuit breakers, we supply reliable switchgear from leading
                  manufacturers.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Air Circuit Breakers (ACB)",
                    "Moulded Case Circuit Breakers (MCCB)",
                    "Miniature Circuit Breakers (MCB)",
                    "Vacuum Circuit Breakers (VCB)",
                    "SF6 Circuit Breakers",
                    "Contactors & Overload Relays",
                    "Change Over Switches",
                    "Isolators & Load Break Switches",
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
                  <span>Get Switchgear Quote</span>
                  <Shield className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LT & HT Panels */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
                  LT & HT Panels
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  LT & HT Panels
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Custom-designed and manufactured LT and HT panel boards for
                  power distribution, motor control, and automation. Built to
                  IS/IEC standards with type-tested assemblies.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "LT Panels",
                      items: [
                        "PCC (Power Control Centre)",
                        "MCC (Motor Control Centre)",
                        "APFC Panels",
                        "Distribution Boards",
                        "Bus Ducts",
                      ],
                    },
                    {
                      title: "HT Panels",
                      items: [
                        "11KV/33KV VCB Panels",
                        "Ring Main Units (RMU)",
                        "HT Metering Panels",
                        "Relay & Protection Panels",
                      ],
                    },
                  ].map((group, i) => (
                    <div
                      key={i}
                      className="bg-vnb-green/5 rounded-2xl p-5 border border-vnb-green/10"
                    >
                      <h4 className="font-bold text-gray-900 mb-3">
                        {group.title}
                      </h4>
                      <ul className="space-y-2">
                        {group.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <CheckCircle className="w-4 h-4 text-vnb-green flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Get Panel Quote</span>
                  <Gauge className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&h=600&fit=crop&q=80"
                  alt="LT & HT Panels"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">LT & HT Panels</p>
                  <p className="text-sm text-white/80">
                    Custom-built panel solutions
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transformers */}
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
                  src="https://images.unsplash.com/photo-1548613053-22087dd8edb8?w=800&h=600&fit=crop&q=80"
                  alt="Transformers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Transformers</p>
                  <p className="text-sm text-white/80">
                    Power & distribution transformers
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                  Transformers
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Power & Distribution Transformers
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  High-quality oil-cooled and dry-type transformers for power
                  generation, transmission, and distribution applications.
                  Available in standard and custom ratings with BIS
                  certification.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Distribution Transformers (25KVA to 2500KVA)",
                    "Power Transformers (up to 100MVA)",
                    "Dry Type Transformers (Cast Resin)",
                    "Compact Substations (CSS/PSS)",
                    "Isolation & Auto Transformers",
                    "Furnace Duty Transformers",
                    "BIS/IS 1180 & IS 2026 Certified",
                    "Energy-efficient (Star-rated)",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-vnb-purple flex-shrink-0" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Get Transformer Quote</span>
                  <Zap className="w-4 h-4" />
                </Link>
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
              className="bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-3xl p-12 text-center text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Power Products?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get competitive pricing on cables, switchgear, panels, and
                transformers from India&apos;s leading manufacturers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-vnb-blue rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
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
