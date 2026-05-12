"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  DollarSign,
  FileText,
  TrendingUp,
  Shield,
  Building,
  Zap,
  CheckCircle,
  Wrench,
  Eye,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

export default function SolarRescoPPAProjectsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-purple/5 via-white to-vnb-pink/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-purple/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/services/solar"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-purple transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Solar Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                <DollarSign className="w-4 h-4" />
                RESCO/PPA Projects
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Zero Investment{" "}
                <span className="text-gradient-secondary">Solar Models</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                VNB Solar offers solar projects under BOOT and PPA models where
                we take care of installation, operation, and maintenance - with
                no upfront costs for clients. Enjoy clean, affordable power
                while we handle everything.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Explore PPA Options
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-white text-vnb-purple border-2 border-vnb-purple/20 rounded-xl font-semibold hover:bg-vnb-purple/5 transition-all"
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
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&q=80"
                alt="Solar Power Plant"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">
                  Go Solar with Zero Upfront Cost
                </p>
                <p className="text-sm text-white/80">
                  BOOT & PPA models for hassle-free solar adoption
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOOT Model */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                BOOT Model
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Build-Own-Operate-Transfer
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                VNB Solar offers solar projects under the BOOT Model, where we
                take care of installation, operation, and maintenance for a
                period of 15 years with no upfront costs. We handle everything,
                from financing to maintaining the solar system, and after 15
                years, we transfer full ownership of the plant to the client.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Zero upfront investment required",
                  "Full maintenance and monitoring for 15 years",
                  "Guaranteed performance throughout the contract",
                  "Complete ownership transfer after 15 years",
                  "Investment of ~₹3.5 Crore per MW, covering installation and maintenance",
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
                <span>Get BOOT Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop&q=80"
                alt="BOOT Model Solar Project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-semibold">
                    15 Year Contract
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-semibold">
                    Zero Investment
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PPA Model */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop&q=80"
                alt="PPA Model Solar Installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-semibold">
                    Fixed Rates
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-semibold">
                    No Upfront Cost
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-pink bg-vnb-pink/5 rounded-full border border-vnb-pink/10">
                PPA Model
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Power Purchase Agreement
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                For clients looking for flexible energy contracts, we offer the
                PPA Model, where clients agree to purchase solar power at fixed
                rates over a specified term. Access clean, renewable energy
                without making a significant upfront investment.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Fixed energy rates for the contract term",
                  "No upfront costs required",
                  "Ideal for rooftop or ground-mounted solar installations",
                  "Renewable energy at competitive rates",
                  "Flexible contract duration based on your needs",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-vnb-pink flex-shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-pink to-vnb-purple text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Get PPA Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maintenance & AMC */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
              AMC Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Maintenance & AMC
            </h2>
            <p className="text-lg text-gray-600">
              Our Annual Maintenance Contract (AMC) ensures that your solar
              plant continues to perform at its best with regular maintenance,
              system optimizations, and technical support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wrench,
                title: "Routine Maintenance",
                desc: "Regular system health checks, cleaning, and preventive maintenance to ensure consistent output.",
              },
              {
                icon: TrendingUp,
                title: "Performance Optimization",
                desc: "Troubleshooting, diagnostics, and system tweaks to maximize energy generation efficiency.",
              },
              {
                icon: RefreshCw,
                title: "Spare Parts & Servicing",
                desc: "Timely replacement of worn components and professional servicing of all system parts.",
              },
              {
                icon: Shield,
                title: "Technical Support",
                desc: "Comprehensive technical assistance, remote monitoring, and on-site emergency response.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-blue/20 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose RESCO/PPA?
            </h2>
            <p className="text-lg text-gray-600">
              Advantages of going solar with zero upfront investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Zero Upfront Cost",
                desc: "Start saving from day one without any capital expenditure on solar infrastructure.",
                color: "from-vnb-purple to-vnb-pink",
              },
              {
                icon: Shield,
                title: "Risk-Free Model",
                desc: "All operational and technical risks are handled by VNB Solar throughout the contract period.",
                color: "from-vnb-pink to-vnb-purple",
              },
              {
                icon: TrendingUp,
                title: "Guaranteed Performance",
                desc: "Assured energy generation with performance guarantees and penalty clauses for peace of mind.",
                color: "from-vnb-blue to-vnb-purple",
              },
              {
                icon: FileText,
                title: "Fixed Energy Rates",
                desc: "Predictable electricity costs with fixed tariffs, protecting you from grid rate fluctuations.",
                color: "from-vnb-purple to-vnb-blue",
              },
              {
                icon: Wrench,
                title: "Complete O&M Included",
                desc: "Full maintenance, monitoring, and servicing included - you focus on your business, we handle the rest.",
                color: "from-vnb-green to-vnb-blue",
              },
              {
                icon: Building,
                title: "Asset Ownership",
                desc: "Under BOOT model, complete ownership of the solar plant transfers to you after the contract period.",
                color: "from-vnb-blue to-vnb-green",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <item.icon className="w-7 h-7 text-white" />
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

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple and transparent process to get started with RESCO/PPA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Site Assessment",
                desc: "Detailed analysis of your energy requirements, roof/land area, and solar potential.",
              },
              {
                step: "02",
                title: "Proposal & Agreement",
                desc: "Customized BOOT/PPA proposal with transparent commercial terms and contract signing.",
              },
              {
                step: "03",
                title: "Installation",
                desc: "Complete EPC execution - design, procurement, construction, and commissioning.",
              },
              {
                step: "04",
                title: "Operate & Transfer",
                desc: "Ongoing O&M with performance monitoring. Ownership transfers to you after contract period.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-6xl font-bold text-vnb-purple/10 mb-4">
                  {item.step}
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

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-vnb-purple to-vnb-pink rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Go Solar with Zero Investment
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let VNB Solar handle the investment while you enjoy clean,
              affordable energy through our BOOT and PPA models.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-vnb-purple rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Schedule Consultation
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
