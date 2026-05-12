"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Sun,
  Zap,
  TrendingDown,
  Shield,
  CheckCircle,
  DollarSign,
  SunMedium,
  Battery,
} from "lucide-react";

export default function SolarServicesPage() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduce Energy Costs",
      desc: "Save up to 90% on electricity bills",
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      desc: "Long-term protection and peace of mind",
    },
    {
      icon: Zap,
      title: "High Efficiency",
      desc: "Latest solar panel technology",
    },
    {
      icon: Sun,
      title: "Clean Energy",
      desc: "100% renewable and sustainable",
    },
  ];

  const services = [
    "Residential Rooftop Solar Installation",
    "Commercial Solar Solutions",
    "Solar Farm Development",
    "Solar Panel Maintenance & Repair",
    "Energy Storage Systems",
    "Grid-Tied & Off-Grid Solutions",
    "Solar Consultation & Assessment",
    "Government Subsidy Assistance",
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-green/5 via-white to-vnb-blue/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-green/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-green transition-colors mb-8 "
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
              <Sun className="w-4 h-4" />
              Solar Energy Solutions
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Harness the Power of the{" "}
              <span className="text-gradient-primary">Sun</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              VNB Solar provides comprehensive solar energy solutions for homes,
              businesses, and large-scale installations. Join the renewable
              energy revolution and start saving today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-green/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-green/10 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-vnb-green/10 to-vnb-blue/10 z-10" />
                    <Image
                      src="/images/solar/hero.png"
                      alt="Solar EPC"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Solar EPC
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      End-to-end solar project execution from design to
                      commissioning
                    </p>
                    <Link
                      href="/services/solar/epc"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold hover:from-vnb-green/90 hover:to-vnb-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-green/20"
                    >
                      <span>Explore Services</span>
                      <Zap className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-orange/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-orange/10 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-vnb-orange/10 to-vnb-yellow/10 z-10" />
                    <Image
                      src="/images/solar/green-energy.png"
                      alt="Solar Pump & Street Lighting"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Solar Pump & Street Lighting
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      Efficient water pumping and smart street lighting
                      solutions
                    </p>
                    <Link
                      href="/services/solar/pump-street-lighting"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold hover:from-vnb-orange/90 hover:to-vnb-yellow/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-orange/20"
                    >
                      <span>Explore Services</span>
                      <SunMedium className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-purple/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-purple/10 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-vnb-purple/10 to-vnb-pink/10 z-10" />
                    <Image
                      src="/images/solar/tech.png"
                      alt="Resco/PPA Projects"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Resco/PPA Projects
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      Renewable energy service company and power purchase
                      agreements
                    </p>
                    <Link
                      href="/services/solar/resco-ppa"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-xl font-semibold hover:from-vnb-purple/90 hover:to-vnb-pink/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-purple/20"
                    >
                      <span>Explore Services</span>
                      <DollarSign className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop&q=80"
              alt="Solar Energy Solutions"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                500MW+ Installed Capacity
              </h2>
              <p className="text-white/90">
                Powering thousands of homes and businesses across India
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-width NCI Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {/* Solar EPC Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Content */}
                  <div className="lg:w-1/2 p-10 lg:p-14 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          Solar EPC
                        </h3>
                        <p className="text-gray-600 font-medium">
                          Engineering, Procurement & Construction
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                      Complete end-to-end solar project execution from initial
                      design and engineering through procurement, construction,
                      and final commissioning. Our expert team ensures quality,
                      efficiency, and timely delivery for projects of any scale.
                    </p>

                    <div className="space-y-4 mb-10">
                      <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                        <span className="text-gray-800 font-medium">
                          Custom Design & Engineering
                        </span>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                        <span className="text-gray-800 font-medium">
                          Quality Procurement
                        </span>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                        <span className="text-gray-800 font-medium">
                          Expert Installation
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="lg:w-1/2 p-10 lg:p-14 flex items-center">
                    <div className="w-full">
                      <h4 className="text-2xl font-bold text-gray-900 mb-8">
                        Project Capabilities
                      </h4>

                      <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center border border-emerald-100">
                          <div className="text-4xl font-bold text-emerald-600 mb-2">
                            500MW+
                          </div>
                          <div className="text-gray-700 font-medium">
                            Total Installed
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 text-center border border-teal-100">
                          <div className="text-4xl font-bold text-teal-600 mb-2">
                            100+
                          </div>
                          <div className="text-gray-700 font-medium">
                            Projects Completed
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center border border-cyan-100">
                          <div className="text-4xl font-bold text-cyan-600 mb-2">
                            25+
                          </div>
                          <div className="text-gray-700 font-medium">
                            States Served
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100">
                          <div className="text-4xl font-bold text-blue-600 mb-2">
                            15+
                          </div>
                          <div className="text-gray-700 font-medium">
                            Years Experience
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Link
                          href="/services/solar/epc"
                          className="flex-1 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-center hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Explore EPC Services
                        </Link>
                        <Link
                          href="/contact"
                          className="flex-1 px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-200 rounded-2xl font-bold text-center hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solar Pump & Street Lighting Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="flex flex-col lg:flex-row-reverse">
                  {/* Right Content */}
                  <div className="lg:w-1/2 p-10 lg:p-14 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <SunMedium className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          Solar Pump & Street Lighting
                        </h3>
                        <p className="text-gray-600 font-medium">
                          Water & Light Solutions
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                      Innovative solar-powered water pumping and street lighting
                      solutions that provide reliable, cost-effective
                      alternatives to traditional systems. Perfect for rural
                      areas, agricultural needs, and sustainable infrastructure
                      development.
                    </p>

                    <div className="space-y-4 mb-10">
                      <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-orange-600" />
                        <span className="text-gray-800 font-medium">
                          Agricultural Water Pumps
                        </span>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-orange-600" />
                        <span className="text-gray-800 font-medium">
                          Smart Street Lighting
                        </span>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-orange-600" />
                        <span className="text-gray-800 font-medium">
                          Zero Electricity Bills
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Left Content */}
                  <div className="lg:w-1/2 p-10 lg:p-14 flex items-center">
                    <div className="w-full">
                      <h4 className="text-2xl font-bold text-gray-900 mb-8">
                        Solution Highlights
                      </h4>

                      <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center border border-orange-100">
                          <div className="text-4xl font-bold text-orange-600 mb-2">
                            1000+
                          </div>
                          <div className="text-gray-700 font-medium">
                            Installations
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 text-center border border-amber-100">
                          <div className="text-4xl font-bold text-amber-600 mb-2">
                            90%
                          </div>
                          <div className="text-gray-700 font-medium">
                            Cost Savings
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-50 to-lime-50 rounded-2xl p-6 text-center border border-yellow-100">
                          <div className="text-4xl font-bold text-yellow-600 mb-2">
                            24/7
                          </div>
                          <div className="text-gray-700 font-medium">
                            Operation
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl p-6 text-center border border-lime-100">
                          <div className="text-4xl font-bold text-lime-600 mb-2">
                            5 Years
                          </div>
                          <div className="text-gray-700 font-medium">
                            Warranty
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Link
                          href="/services/solar/pump-street-lighting"
                          className="flex-1 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl font-bold text-center hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Explore Solutions
                        </Link>
                        <Link
                          href="/portfolio"
                          className="flex-1 px-8 py-4 bg-white text-orange-600 border-2 border-orange-200 rounded-2xl font-bold text-center hover:bg-orange-50 hover:border-orange-300 transition-all duration-300"
                        >
                          View Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resco/PPA Projects Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Content */}
                  <div className="lg:w-1/2 p-10 lg:p-14 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <DollarSign className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          Resco/PPA Projects
                        </h3>
                        <p className="text-gray-600 font-medium">
                          Zero Investment Solar
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                      Go solar with zero upfront investment through our
                      Renewable Energy Service Company (RESCO) models and Power
                      Purchase Agreements (PPA). We handle everything while you
                      enjoy clean, affordable power with guaranteed savings.
                    </p>

                    <div className="space-y-4 mb-10">
                      <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                        <span className="text-gray-800 font-medium">
                          Zero Upfront Cost
                        </span>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                        <span className="text-gray-800 font-medium">
                          Guaranteed Savings
                        </span>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                        <span className="text-gray-800 font-medium">
                          Full Maintenance
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="lg:w-1/2 p-10 lg:p-14 flex items-center">
                    <div className="w-full">
                      <h4 className="text-2xl font-bold text-gray-900 mb-8">
                        Model Benefits
                      </h4>

                      <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100">
                          <div className="text-4xl font-bold text-purple-600 mb-2">
                            ₹0
                          </div>
                          <div className="text-gray-700 font-medium">
                            Investment
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center border border-pink-100">
                          <div className="text-4xl font-bold text-pink-600 mb-2">
                            30%
                          </div>
                          <div className="text-gray-700 font-medium">
                            Average Savings
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-6 text-center border border-rose-100">
                          <div className="text-4xl font-bold text-rose-600 mb-2">
                            25 Years
                          </div>
                          <div className="text-gray-700 font-medium">
                            PPA Duration
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 text-center border border-red-100">
                          <div className="text-4xl font-bold text-red-600 mb-2">
                            100%
                          </div>
                          <div className="text-gray-700 font-medium">
                            Risk Coverage
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Link
                          href="/services/solar/resco-ppa"
                          className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Explore Models
                        </Link>
                        <Link
                          href="/contact"
                          className="flex-1 px-8 py-4 bg-white text-purple-600 border-2 border-purple-200 rounded-2xl font-bold text-center hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
                        >
                          Schedule Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Solar Energy?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the benefits of clean, renewable energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-vnb-green/20 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-vnb-green to-vnb-blue rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Our Solar Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-vnb-green/20 hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-vnb-green flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Trusted Clients
            </h2>
            <p className="text-lg text-gray-600">
              Proudly serving leading organizations across India
            </p>
          </motion.div>

          {/* Client Logos Carousel */}
          <div className="relative">
            <div className="flex gap-12 overflow-hidden">
              <motion.div
                className="flex gap-12"
                animate={{ x: [0, -100 * 12] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center px-6 hover:shadow-md transition-shadow"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        {
                          [
                            "TechCorp",
                            "GreenEnergy",
                            "SolarTech",
                            "PowerGrid",
                            "EcoPower",
                            "SunEnergy",
                          ][i % 6]
                        }
                      </div>
                      <div className="text-xs text-gray-500">
                        Client {i + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          </div>

          {/* Client Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-vnb-green mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vnb-blue mb-2">
                1000MW+
              </div>
              <div className="text-gray-600">Solar Installed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vnb-purple mb-2">25+</div>
              <div className="text-gray-600">States Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vnb-orange mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
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
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation for your solar installation project
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-vnb-green rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all "
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
