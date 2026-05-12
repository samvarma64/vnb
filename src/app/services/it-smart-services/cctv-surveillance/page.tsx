"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  CheckCircle,
  Shield,
  Wifi,
  Monitor,
  Wrench,
  Globe,
  Server,
  Eye,
  Lock,
  Clock,
} from "lucide-react";

export default function CCTVSurveillancePage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-orange/5 via-white to-vnb-yellow/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-orange/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/services/it-smart-services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-orange transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to IT Smart Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
                <Camera className="w-4 h-4" />
                CCTV Surveillance
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Advanced CCTV{" "}
                <span className="text-gradient-primary">Surveillance</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Comprehensive CCTV surveillance solutions with professional
                installation, networking infrastructure, Annual Maintenance
                Contracts (AMC), and 24/7 remote monitoring. We secure your
                premises with the latest camera technology and intelligent
                analytics.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Get Security Quote
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-vnb-orange border-2 border-vnb-orange/20 rounded-xl font-semibold hover:bg-vnb-orange/5 transition-all"
                >
                  Schedule Site Survey
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
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop&q=80"
                alt="CCTV Surveillance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">
                  24/7 Surveillance Systems
                </p>
                <p className="text-sm text-white/80">
                  Complete security infrastructure solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CCTV Services Overview */}
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
              Complete Surveillance Solutions
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end CCTV solutions from design and installation to
              maintenance and remote monitoring services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "CCTV Installation",
                desc: "Professional installation of IP cameras, dome cameras, PTZ cameras, and bullet cameras with complete wiring and setup.",
                features: [
                  "IP & analog cameras",
                  "Dome & bullet cameras",
                  "PTZ cameras",
                  "Night vision systems",
                ],
              },
              {
                icon: Wrench,
                title: "AMC & Maintenance",
                desc: "Comprehensive Annual Maintenance Contracts ensuring your surveillance systems run at peak performance year-round.",
                features: [
                  "Preventive maintenance",
                  "Camera health checks",
                  "DVR/NVR servicing",
                  "Emergency repairs",
                ],
              },
              {
                icon: Wifi,
                title: "Networking Infrastructure",
                desc: "Complete networking solutions including structured cabling, switches, routers, and network management for seamless connectivity.",
                features: [
                  "Structured cabling",
                  "Network switches & routers",
                  "PoE infrastructure",
                  "Bandwidth management",
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

      {/* Remote Monitoring */}
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
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop&q=80"
                alt="Remote Monitoring"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Remote Monitoring</p>
                <p className="text-sm text-white/80">Monitor your premises from anywhere</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
                Remote Access
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                24/7 Remote Monitoring
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Access your surveillance feeds from anywhere in the world with
                our remote monitoring solutions. View live footage, playback
                recordings, and receive instant alerts on your mobile device.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Live feed access on mobile & desktop",
                  "Cloud-based recording & storage",
                  "Motion detection alerts",
                  "Multi-site centralized monitoring",
                  "AI-powered analytics & alerts",
                  "Encrypted video transmission",
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
                <span>Setup Remote Monitoring</span>
                <Monitor className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IT Infrastructure */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
                Infrastructure
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                IT & Network Infrastructure
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Complete IT infrastructure setup including server rooms,
                structured cabling, network configuration, and data center
                solutions. We design and deploy robust infrastructure for
                reliable surveillance operations.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Server room setup & management",
                  "Structured LAN/WAN cabling",
                  "Firewall & security configuration",
                  "UPS & power backup systems",
                  "Rack & patch panel installation",
                  "Network performance optimization",
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
                <span>Get Infrastructure Quote</span>
                <Server className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=800&h=600&fit=crop&q=80"
                alt="IT Infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">IT Infrastructure</p>
                <p className="text-sm text-white/80">Server rooms & network management</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
              Industries
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Trusted surveillance and security solutions for diverse industries
              and institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Corporate Offices",
                desc: "Complete office security with access control and visitor management.",
              },
              {
                icon: Eye,
                title: "Educational Institutions",
                desc: "Campus-wide surveillance for student and staff safety.",
              },
              {
                icon: Globe,
                title: "Retail & Commercial",
                desc: "Loss prevention and customer analytics for retail spaces.",
              },
              {
                icon: Lock,
                title: "Industrial & Manufacturing",
                desc: "Factory floor monitoring and perimeter security systems.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-purple/20 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-purple to-vnb-pink rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* AMC Plans */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
              AMC Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Annual Maintenance Contracts
            </h2>
            <p className="text-lg text-gray-600">
              Flexible AMC plans to keep your surveillance systems running
              smoothly with regular servicing and priority support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic AMC",
                features: [
                  "Quarterly preventive maintenance",
                  "Camera cleaning & alignment",
                  "DVR/NVR health check",
                  "Cable inspection",
                  "Phone support",
                ],
                color: "vnb-blue",
              },
              {
                title: "Standard AMC",
                features: [
                  "Monthly preventive maintenance",
                  "Camera cleaning & alignment",
                  "DVR/NVR servicing & updates",
                  "Network diagnostics",
                  "Priority on-site support",
                  "Spare parts at discounted rates",
                ],
                color: "vnb-orange",
              },
              {
                title: "Comprehensive AMC",
                features: [
                  "Monthly preventive maintenance",
                  "All spare parts included",
                  "24/7 emergency support",
                  "Camera replacement warranty",
                  "Remote monitoring included",
                  "Network infrastructure support",
                  "Dedicated account manager",
                ],
                color: "vnb-purple",
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 border ${
                  index === 1
                    ? "border-vnb-orange/30 shadow-xl scale-105"
                    : "border-gray-100"
                } hover:shadow-xl transition-all`}
              >
                {index === 1 && (
                  <div className="text-xs font-bold text-vnb-orange uppercase tracking-wider mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {plan.title}
                </h3>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className={`w-5 h-5 text-${plan.color} flex-shrink-0`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center w-full gap-2 px-6 py-3 ${
                    index === 1
                      ? "bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  } rounded-xl font-semibold transition-all duration-300`}
                >
                  <span>Get AMC Quote</span>
                  <Clock className="w-4 h-4" />
                </Link>
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
            className="bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Secure Your Premises Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free site survey and customized surveillance solution
              designed for your specific security requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-vnb-orange rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Request Free Site Survey
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
