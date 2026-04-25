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
  Users,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Large Display",
    description: "65/75/86 inch screen size with stunning visuals",
  },
  {
    icon: Wifi,
    title: "Wireless Connectivity",
    description: "Dual-band WiFi and Bluetooth 5.0 for seamless connection",
  },
  {
    icon: Volume2,
    title: "Integrated Audio",
    description: "Built-in stereo speakers with high-definition audio output",
  },
  {
    icon: Settings,
    title: "Easy Control",
    description: "Intuitive touch controls and remote management capabilities",
  },
];

const specifications = [
  {
    category: "Display",
    items: [
      "Screen Size: 65/75/86 Inches",
      "Touch Capability: Multi-touch",
      "Resolution: 4K Ultra HD",
      "Aspect Ratio: 16:9",
    ],
  },
  {
    category: "Performance",
    items: [
      "GPU: Integrated Graphics",
      "CPU: Quad-core Processor",
      "RAM: 8GB DDR4",
      "Storage: 256GB SSD",
    ],
  },
  {
    category: "Connectivity",
    items: [
      "WiFi: Dual-band 802.11ac",
      "Bluetooth: Version 5.0",
      "USB Ports: Multiple USB 3.0",
      "HDMI Output: Yes",
    ],
  },
  {
    category: "Physical",
    items: [
      "Design: Sturdy Build",
      "Screen: Scratch resistant",
      "Mounting: Wall-Mountable",
      "Stand: Optional for Easy Relocation",
    ],
  },
];

const benefits = [
  {
    title: "Enhanced Engagement",
    description:
      "Interactive learning tools that boost student participation and understanding",
    icon: Users,
  },
  {
    title: "Personalized Learning",
    description:
      "Adaptive content delivery that meets individual student needs",
    icon: Settings,
  },
  {
    title: "Collaborative Learning",
    description: "Group activities and shared screens that foster teamwork",
    icon: Grid3X3,
  },
  {
    title: "Safe & Secure",
    description:
      "Robust security features to protect sensitive educational content",
    icon: Monitor,
  },
];

const corporateBenefits = [
  {
    title: "Efficient Meetings",
    description: "Streamlined presentations and real-time collaboration tools",
    icon: Users,
  },
  {
    title: "Remote Collaboration",
    description: "Connect with team members across locations seamlessly",
    icon: Wifi,
  },
  {
    title: "Professional Presentation",
    description:
      "High-quality visuals and interactive content for impactful meetings",
    icon: Monitor,
  },
];

export default function VNBIFPD() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                  <Monitor className="w-10 h-10 text-blue-600" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  VNB IFPD
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {" "}
                    Interactive Flat Panel
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your presentations and learning experiences with our
                  cutting-edge Interactive Flat Panel Display. Perfect for
                  educational institutions and corporate environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
                  >
                    Get Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="VNB IFPD Interactive Display"
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
              Advanced technology for superior interactive experiences
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
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-blue-600" />
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
              Detailed specifications for the VNB IFPD
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
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Benefits */}
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
              Benefits for Educational Institutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 p-8 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
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

      {/* Corporate Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Benefits for Corporate Offices
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {corporateBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Presentations?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get in touch with us to learn more about the VNB IFPD and how it
              can benefit your organization
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:shadow-xl transition-all duration-300"
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
