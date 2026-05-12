"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Cpu,
  Monitor,
  Camera,
  CheckCircle,
  Zap,
  Shield,
} from "lucide-react";

export default function ITSmartServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-purple/5 via-white to-vnb-pink/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-purple/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-purple transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
              <Cpu className="w-4 h-4" />
              IT Smart Services
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Smart IT <span className="text-gradient-primary">Solutions</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              VNB IT Smart Services delivers intelligent technology solutions
              for education and security. From AI-powered Smart Classroom
              solutions to advanced CCTV Surveillance systems, we help
              institutions and businesses transform with cutting-edge
              technology.
            </p>

            {/* Two Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Smart Classroom Solutions */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white border border-vnb-purple/20 transition-all duration-500 hover:shadow-2xl hover:shadow-vnb-purple/10 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-vnb-purple/10 to-vnb-blue/10 z-10" />
                    <Image
                      src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=400&fit=crop&q=80"
                      alt="Smart Classroom Solutions"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Smart Classroom Solutions
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      AI-powered Interactive Flat Panels with K-12 digital
                      content, smart boards, and complete classroom
                      transformation solutions for modern education.
                    </p>
                    <Link
                      href="/services/it-smart-services/smart-classroom"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-purple to-vnb-blue text-white rounded-xl font-semibold hover:from-vnb-purple/90 hover:to-vnb-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-purple/20"
                    >
                      <span>Explore Services</span>
                      <Monitor className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* CCTV Surveillance */}
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
                      src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=400&fit=crop&q=80"
                      alt="CCTV Surveillance"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      CCTV Surveillance
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      Complete CCTV surveillance systems with AMC, networking
                      infrastructure, remote monitoring, and advanced security
                      solutions for businesses and institutions.
                    </p>
                    <Link
                      href="/services/it-smart-services/cctv-surveillance"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold hover:from-vnb-orange/90 hover:to-vnb-yellow/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-vnb-orange/20"
                    >
                      <span>Explore Services</span>
                      <Camera className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
              Why VNB
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our IT Solutions
            </h2>
            <p className="text-lg text-gray-600">
              We deliver end-to-end smart technology solutions with expert
              installation, reliable support, and ongoing maintenance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Expert Installation",
                desc: "Professional setup and configuration by certified technicians.",
              },
              {
                icon: Shield,
                title: "AMC Support",
                desc: "Comprehensive annual maintenance contracts for all solutions.",
              },
              {
                icon: Cpu,
                title: "Latest Technology",
                desc: "Cutting-edge hardware and software from leading brands.",
              },
              {
                icon: CheckCircle,
                title: "24/7 Support",
                desc: "Round-the-clock technical support and troubleshooting.",
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
              Ready to Go Smart?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with VNB IT Smart Services for intelligent classroom and
              surveillance solutions that transform your institution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-vnb-purple to-pink text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Get a Free Consultation
              </Link>
              <a
                href="tel:+918333018333"
                className="inline-block px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-green text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
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
