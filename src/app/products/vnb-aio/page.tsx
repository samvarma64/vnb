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
  Grid3X3,
  Settings,
  CheckCircle,
  Star,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "All-in-One Design",
    description: "Integrated PC and display in a single sleek unit",
  },
  {
    icon: Wifi,
    title: "Wireless Connectivity",
    description: "Dual-band WiFi and Bluetooth 5.0 for seamless connection",
  },
  {
    icon: Volume2,
    title: "Premium Audio",
    description: "Built-in stereo speakers with high-definition audio output",
  },
  {
    icon: Settings,
    title: "Smart Controls",
    description: "Intuitive interface with advanced management capabilities",
  },
];

const specifications = [
  {
    category: "Display",
    items: [
      "Screen Size: 24/27/32 Inches",
      "Resolution: 4K Ultra HD",
      "Panel Type: IPS",
      "Touch Capability: Optional",
    ],
  },
  {
    category: "Performance",
    items: [
      "CPU: Intel Core i7/i9",
      "RAM: 16GB/32GB DDR4",
      "Storage: 512GB/1TB SSD",
      "GPU: Dedicated Graphics",
    ],
  },
  {
    category: "Connectivity",
    items: [
      "WiFi: Dual-band 802.11ax",
      "Bluetooth: Version 5.2",
      "USB Ports: USB-C, USB 3.2",
      "Ethernet: Gigabit LAN",
    ],
  },
  {
    category: "Design",
    items: [
      "Form Factor: All-in-One",
      "Material: Premium Aluminum",
      "Stand: Adjustable Height",
      "VESA Mount: Compatible",
    ],
  },
];

const benefits = [
  {
    title: "Space Saving",
    description: "Eliminates cable clutter and saves valuable desk space",
    icon: Grid3X3,
  },
  {
    title: "High Performance",
    description: "Powerful components for demanding business applications",
    icon: Settings,
  },
  {
    title: "Easy Setup",
    description: "Plug and play installation with minimal configuration",
    icon: Monitor,
  },
  {
    title: "Professional Look",
    description: "Sleek design that enhances any modern workspace",
    icon: Star,
  },
];

export default function VNBAIO() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-8">
                  <Monitor className="w-10 h-10 text-purple-600" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  VNB AIO
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {" "}
                    All-in-One PC
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Experience the perfect blend of performance and elegance with
                  our All-in-One PC. Designed for modern professionals who
                  demand power without compromise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 hover:shadow-xl transition-all duration-300"
                  >
                    Get Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-all duration-300"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1598928424272-9e66cbcf5241?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="VNB AIO All-in-One PC"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology for superior computing experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Detailed specifications for the VNB AIO
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
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {spec.category}
                </h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Why Choose VNB AIO?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-purple-50 p-8 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Download Brochure
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Get detailed information about VNB AIO specifications and features
            </p>
            <Link
              href="/VNB-AIO.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Upgrade Your Workspace?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Get in touch with us to learn more about the VNB AIO and how it
              can transform your workspace
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-lg font-medium hover:shadow-xl transition-all duration-300"
            >
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
