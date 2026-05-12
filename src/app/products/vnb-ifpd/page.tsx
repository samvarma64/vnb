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
  TouchpadIcon,
  ShieldCheck,
  Layout,
  Presentation,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "4K Ultra HD Display",
    description:
      "Stunning 65/75/86 inch screen sizes with crystal-clear 4K resolution.",
    details: [
      "High-brightness panels",
      "Anti-glare technology",
      "178° viewing angle",
      "Scratch-resistant glass",
    ],
  },
  {
    icon: TouchpadIcon,
    title: "20-Point Multi-Touch",
    description:
      "Ultra-responsive touch technology for seamless interaction and writing.",
    details: [
      "Low latency writing",
      "Palm rejection",
      "Dual-pen support",
      "Gesture recognition",
    ],
  },
  {
    icon: Cpu,
    title: "Powerful Performance",
    description:
      "Integrated high-performance CPU and GPU for smooth multitasking.",
    details: [
      "Quad-core Processor",
      "8GB DDR4 RAM",
      "256GB SSD Storage",
      "Android/Windows OS options",
    ],
  },
  {
    icon: Wifi,
    title: "Smart Connectivity",
    description:
      "Seamless wireless screen sharing and multi-device integration.",
    details: [
      "Dual-band WiFi 6",
      "Bluetooth 5.0",
      "Wireless casting",
      "Multiple HDMI & USB ports",
    ],
  },
  {
    icon: Volume2,
    title: "Cinematic Audio",
    description:
      "Integrated high-fidelity stereo speakers for immersive sound.",
    details: [
      "Built-in 2x20W speakers",
      "Noise reduction",
      "External audio support",
      "Clear voice pickup",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Robust protection for your sensitive data and educational content.",
    details: [
      "User authentication",
      "Secure boot",
      "App encryption",
      "Remote management",
    ],
  },
];

const specifications = [
  {
    category: "Display",
    items: [
      'Screen Size: 65", 75", 86"',
      "Resolution: 3840 x 2160 (4K)",
      "Brightness: 450 cd/m²",
      "Contrast Ratio: 5000:1",
    ],
  },
  {
    category: "System",
    items: [
      "OS: Android 13.0 / Windows 11 Pro",
      "CPU: Cortex A73*4",
      "RAM: 8GB / 16GB",
      "Storage: 64GB / 256GB SSD",
    ],
  },
  {
    category: "Touch",
    items: [
      "Technology: Infrared Touch",
      "Touch Points: 20 Points",
      "Response Time: < 5ms",
      "Accuracy: ±1mm",
    ],
  },
  {
    category: "Connectivity",
    items: [
      "HDMI In/Out: 3x / 1x",
      "USB 3.0: 4x Ports",
      "Type-C: Full Function",
      "Network: RJ45 / WiFi 6",
    ],
  },
];

export default function VNBIFPD() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Immersive Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop&auto=format&q=80"
            alt="Interactive Display in Modern Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
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
              Always Sharp.
              <span className="block text-blue-400">Always Interactive.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              VNB Interactive Flat Panel Displays are engineered to
              revolutionize collaboration. Whether in a classroom or a
              boardroom, our cutting-edge touch technology and 4K visuals
              empower you to inspire and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors shadow-lg"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
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
                Next-Generation Collaboration
              </h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Presentation className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Education Focused
                    </h3>
                    <p className="text-gray-600">
                      Gamify learning and boost student engagement with
                      interactive tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layout className="w-7 h-7 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Corporate Ready
                    </h3>
                    <p className="text-gray-600">
                      Seamless video conferencing and collaborative
                      whiteboarding for teams.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Hybrid Workspace
                    </h3>
                    <p className="text-gray-600">
                      Bridge the gap between remote and in-person participants
                      effortlessly.
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
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&auto=format&q=80"
                alt="Digital Collaboration"
                width={800}
                height={600}
                className="relative rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>

          {/* Manufacturing/Quality Section */}
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
                  Built for Durability
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our IFPDs are built to withstand the rigors of daily use in
                  busy classrooms and meeting rooms. With a robust metal frame
                  and 7H hardness toughened glass, it's as tough as it is smart.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    7H Hardness
                  </div>
                  <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    Metal Housing
                  </div>
                  <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    50,000h Life
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
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="High Tech Manufacturing"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Solution Style */}
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
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Every detail optimized for a superior interactive experience
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
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3 mb-6">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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

      {/* Technical Specs Section - High Impact */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Prowess</h2>
            <p className="text-xl text-gray-400">
              Precision engineering for mission-critical performance
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
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-6 border-b border-white/10 pb-4">
                  {spec.category}
                </h3>
                <ul className="space-y-4">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Style */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">
              Transform Your Space with VNB IFPD
            </h2>
            <p className="text-xl mb-12 text-blue-100 leading-relaxed">
              Experience the future of interactive technology today. Contact our
              experts for a tailored solution that fits your organization&apos;s
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
