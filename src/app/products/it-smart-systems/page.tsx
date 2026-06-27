"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Monitor,
  CheckCircle,
  Cpu,
  Eye,
  Volume2,
  Smartphone,
  Wifi,
} from "lucide-react";

export default function ITSmartSystemsProductsPage() {
  return (
    <>
      <Navbar />
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
              <span>Back to Products</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                  <Monitor className="w-4 h-4" />
                  IT Smart Systems
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Smart Display{" "}
                  <span className="text-gradient-primary">Solutions</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Next-generation Interactive Flat Panel Displays (IFPD) and
                  All-In-One Desktop systems for education, corporate, and
                  government sectors. Powered by AI with cutting-edge display
                  technology.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Get Product Demo
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
                  src="/banners/it-smart-systems/smart-display-solutions.jpg"
                  alt="IT Smart Systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">IT Smart Systems</p>
                  <p className="text-sm text-white/80">
                    Interactive displays & all-in-one desktops
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Flat Panels (IFPD) */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                IFPD
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Interactive Flat Panel Displays
              </h2>
              <p className="text-lg text-gray-600">
                AI-powered 4K Interactive Flat Panels with multi-touch
                capability, dual OS, and built-in educational content for smart
                classrooms and conference rooms.
              </p>
            </motion.div>

            {/* IFPD Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Eye,
                  title: "4K UHD Display",
                  desc: "Ultra High Definition 3840x2160 resolution with Blue Light Filter for eye protection and crystal-clear visuals.",
                },
                {
                  icon: Smartphone,
                  title: "20-Point IR Touch",
                  desc: "Precise multi-touch with IR sensors, zero bonding for optimal clarity, and 4mm toughened glass for durability.",
                },
                {
                  icon: Cpu,
                  title: "Octa-Core Power",
                  desc: "8GB RAM, 128GB ROM with Dual OS (Windows 11 & Android). Under 5ms response time for seamless interaction.",
                },
                {
                  icon: Volume2,
                  title: "Built-in AV System",
                  desc: "20W front-facing speakers, built-in 4K camera, and 8-array microphone for immersive audio-visual experience.",
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
                  <div className="w-16 h-16 bg-gradient-to-br from-vnb-purple to-vnb-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* IFPD Detail Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/banners/it-smart-systems/ifpd-google-edla.jpg"
                  alt="Interactive Flat Panel in Classroom"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Smart Classroom IFP</p>
                  <p className="text-sm text-white/80">Google EDLA certified</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Google EDLA Certified with K-12 Content
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our IFPD comes preloaded with comprehensive K-12 digital
                  resources and is Google EDLA certified for seamless access to
                  verified educational apps.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "50+", label: "HD Animated Videos" },
                    { value: "2L+", label: "Learning Resources" },
                    { value: "100K+", label: "Question Bank" },
                    { value: "10+", label: "Interactive Tools" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-vnb-purple/5 rounded-2xl p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-vnb-purple">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Available in 65", 75", 86", and 98" sizes',
                    "Studynlearn AI for personalized learning",
                    "Add-on courses: IIT JEE, CUET, CLAT, Foundation",
                    "Zero-touch enrollment & automatic updates",
                    "Whiteboard, annotation & screen recording",
                    "Wireless screen mirroring & casting",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-vnb-purple flex-shrink-0" />
                      <span className="font-medium text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-purple to-vnb-blue text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Request IFPD Demo</span>
                  <Monitor className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* IFPD Technical Specs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                IFPD Technical Specifications
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: "Resolution", value: "4K UHD", sub: "3840 x 2160" },
                { label: "RAM / ROM", value: "8GB / 128GB", sub: "Octa-core" },
                {
                  label: "Connectivity",
                  value: "BT 5.0 + WiFi 6",
                  sub: "Dual band",
                },
                { label: "Touch", value: "IR 20-Point", sub: "Zero bonding" },
                { label: "OS", value: "Dual OS", sub: "Win 11 + Android" },
                { label: "Response", value: "<5ms", sub: "Ultra-fast" },
              ].map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-4 text-center border border-vnb-purple/10 hover:border-vnb-purple/30 transition-all"
                >
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {spec.label}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {spec.value}
                  </p>
                  <p className="text-xs text-gray-500">{spec.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AIO (All In One Desktop) */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
                  AIO Desktop
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  All-In-One Desktop
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Sleek, space-saving All-In-One desktop computers combining a
                  high-resolution display with powerful computing in a single
                  elegant unit. Perfect for offices, schools, labs, and
                  reception desks.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "Display",
                      desc: '21.5" to 27" Full HD/4K IPS anti-glare display with wide viewing angles and vibrant color accuracy.',
                    },
                    {
                      title: "Performance",
                      desc: "Intel Core i3/i5/i7 processors with up to 16GB RAM and 512GB SSD for smooth multitasking and fast boot times.",
                    },
                    {
                      title: "Connectivity",
                      desc: "Built-in WiFi 6, Bluetooth 5.0, multiple USB 3.0 ports, HDMI, and webcam with microphone for video conferencing.",
                    },
                    {
                      title: "Design",
                      desc: "Ultra-slim bezel design, adjustable stand, cable management system, and minimal desk footprint.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-vnb-blue/5 rounded-2xl p-4 border border-vnb-blue/10"
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Get AIO Pricing</span>
                  <Cpu className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/banners/it-smart-systems/all-in-one-desktop.jpg"
                  alt="All-In-One Desktop"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">VNB All-In-One Desktop</p>
                  <p className="text-sm text-white/80">
                    Sleek, powerful, space-saving
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AIO Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                AIO Desktop Use Cases
              </h3>
              <p className="text-lg text-gray-600">
                Versatile all-in-one computing for every environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Monitor,
                  title: "Corporate Offices",
                  desc: "Clean, professional workstations for modern offices with video conferencing capability.",
                },
                {
                  icon: Wifi,
                  title: "Education Labs",
                  desc: "Durable, space-efficient systems for computer labs and smart classrooms.",
                },
                {
                  icon: Cpu,
                  title: "Government Offices",
                  desc: "Reliable computing for government digitization and e-governance projects.",
                },
                {
                  icon: Smartphone,
                  title: "Reception & Kiosks",
                  desc: "Touch-enabled all-in-ones for digital signage, self-service kiosks, and reception desks.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-blue/20 hover:shadow-xl transition-all text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
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
                Upgrade Your Technology
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a demo of our Interactive Flat Panels and All-In-One
                Desktops. Bulk pricing available for institutions and
                enterprises.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-vnb-purple to-pink text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Schedule a Product Demo
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
      <Footer />
    </>
  );
}
