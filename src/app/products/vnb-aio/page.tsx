"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Monitor,
  Wifi,
  Volume2,
  Settings,
  Users,
  CheckCircle,
  Menu,
  ChevronDown,
  Cpu,
  Layers,
  ShieldCheck,
  Layout,
  HardDrive,
  MousePointer2,
  Sparkles,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "4K IPS Nano Display",
    description:
      "Ultra-thin bezels and 4K resolution for a breathtaking visual experience.",
    details: [
      "99% sRGB color gamut",
      "400 nits brightness",
      "TÜV Rheinland certified",
      "178° IPS wide view",
    ],
  },
  {
    icon: Cpu,
    title: "Extreme Performance",
    description:
      "Equipped with the latest Intel Core processors for effortless multitasking.",
    details: [
      "Intel Core i7/i9 options",
      "Up to 64GB DDR5 RAM",
      "PCIe Gen4 SSD storage",
      "Dedicated GPU options",
    ],
  },
  {
    icon: Sparkles,
    title: "Aluminum Unibody",
    description:
      "Crafted from premium aerospace-grade aluminum for strength and style.",
    details: [
      "Minimalist footprint",
      "Adjustable ergonomic stand",
      "Heat dissipation tech",
      "Hidden cable management",
    ],
  },
  {
    icon: Wifi,
    title: "Next-Gen Connectivity",
    description:
      "Lightning-fast wireless and wired connections for modern workflows.",
    details: [
      "WiFi 6E support",
      "Bluetooth 5.3",
      "Thunderbolt 4 ports",
      "Gigabit Ethernet",
    ],
  },
  {
    icon: Volume2,
    title: "Immersive Audio",
    description:
      "Integrated high-fidelity speakers with spatial audio support.",
    details: [
      "Harman Kardon tuned",
      "Dolby Atmos support",
      "Noise-canceling mics",
      "Rich bass response",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Pro Security",
    description:
      "Enhanced biometric and software security to protect your data.",
    details: [
      "Windows Hello camera",
      "TPM 2.0 security chip",
      "Kensington lock slot",
      "Privacy webcam shutter",
    ],
  },
];

const specifications = [
  {
    category: "Display",
    items: [
      'Screen: 24" / 27" / 32"',
      "Resolution: 3840 x 2160",
      "Panel: Anti-Glare IPS",
      "Refresh Rate: 75Hz",
    ],
  },
  {
    category: "Core Specs",
    items: [
      "Processor: Core i7-13700H",
      "Memory: 16GB / 32GB DDR5",
      "Storage: 512GB / 1TB NVMe",
      "Graphics: Intel Iris Xe",
    ],
  },
  {
    category: "I/O Ports",
    items: [
      "USB-C: 2x Thunderbolt 4",
      "USB-A: 4x USB 3.2 Gen 2",
      "HDMI: 1x In, 1x Out",
      "Audio: 3.5mm Combo",
    ],
  },
  {
    category: "Integrated",
    items: [
      "Webcam: 5MP Popup",
      "WiFi: Intel WiFi 6E",
      "Bluetooth: Version 5.3",
      "Speakers: 2x 10W Stereo",
    ],
  },
];

export default function VNBAIO() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Premium Immersive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banners/it-smart-systems/all-in-one-desktop.jpg"
            alt="Minimalist Professional Workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Always Powerful.
              <span className="block text-purple-400">Always Sleek.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              VNB All-in-One PCs redefine the desktop experience. Uncompromising
              performance meets minimalist design, giving you the ultimate tool
              for productivity and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-colors shadow-lg"
              >
                Get Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Elegance Meets Performance
              </h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MousePointer2 className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Seamless Interaction
                    </h3>
                    <p className="text-gray-600">
                      Zero-lag responsiveness with high-refresh rate displays
                      and NVMe storage.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layout className="w-7 h-7 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Workspace Optimization
                    </h3>
                    <p className="text-gray-600">
                      Declutter your desk with a single-cable setup and
                      integrated PC components.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HardDrive className="w-7 h-7 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Enterprise Reliability
                    </h3>
                    <p className="text-gray-600">
                      Built for continuous operation with advanced cooling and
                      high-grade capacitors.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-purple-600/10 rounded-3xl blur-2xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=600&fit=crop&auto=format&q=80"
                alt="Modern Desk Setup"
                width={800}
                height={600}
                className="relative rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>

          {/* Design Section */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Aerospace-Grade Craftsmanship
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The VNB AIO is not just a computer; it's a piece of art. Every
                  curve and angle is precision-milled from aluminum, offering a
                  rigid, premium feel that lasts a lifetime.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    6061 Aluminum
                  </div>
                  <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    CNC Milled
                  </div>
                  <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    Anodized Finish
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="High Tech Design"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Modern Style */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pioneering Technology
            </h2>
            <p className="text-xl text-gray-600">
              Meticulously engineered for the modern professional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3 mb-6">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm font-medium">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section - Professional */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-4">
              Unmatched Specifications
            </h2>
            <p className="text-xl text-gray-400">
              The hardware that powers your ambition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-6 border-b border-white/10 pb-4">
                  {spec.category}
                </h3>
                <ul className="space-y-4">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Technical Resources
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Download the full technical brochure for detailed performance
              metrics, port layouts, and configuration options.
            </p>
            <Link
              href="/VNB-AIO.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Full Brochure
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Gradient Style */}
      <section className="py-24 bg-gradient-to-br from-purple-700 to-pink-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">
              Upgrade to the Future of Desktop
            </h2>
            <p className="text-xl mb-12 text-purple-100 leading-relaxed">
              Experience the VNB All-in-One. Contact our solutions team for
              enterprise pricing and custom configurations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-purple-700 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
