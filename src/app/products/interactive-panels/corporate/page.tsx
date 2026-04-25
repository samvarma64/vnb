"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Users, Video, Presentation, CheckCircle, Clock } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Video Conferencing",
    description: "Integrated video conferencing capabilities for seamless remote meetings"
  },
  {
    icon: Presentation,
    title: "Presentation Tools",
    description: "Advanced presentation features with annotation and collaboration tools"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration features for distributed teams"
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Streamlined workflows that save time and increase productivity"
  }
];

const benefits = [
  {
    title: "Efficient Meetings",
    description: "Streamlined presentations and real-time collaboration tools for more productive meetings",
    icon: Clock
  },
  {
    title: "Remote Collaboration",
    description: "Connect with team members across locations seamlessly with integrated video conferencing",
    icon: Video
  },
  {
    title: "Professional Presentation",
    description: "High-quality visuals and interactive content for impactful business presentations",
    icon: Presentation
  },
  {
    title: "Enhanced Productivity",
    description: "Tools and features designed to streamline workflows and boost team efficiency",
    icon: Users
  }
];

const specifications = [
  {
    category: "Display",
    items: [
      "Screen Size: 65/75/86 Inches",
      "Touch Capability: Multi-touch (up to 20 points)",
      "Resolution: 4K Ultra HD",
      "Anti-glare coating for office use"
    ]
  },
  {
    category: "Connectivity",
    items: [
      "HDMI and DisplayPort inputs",
      "USB-C connectivity",
      "Wireless screen sharing",
      "Network integration"
    ]
  },
  {
    category: "Software",
    items: [
      "Business presentation software",
      "Video conferencing integration",
      "Collaboration tools",
      "Security features"
    ]
  },
  {
    category: "Support",
    items: [
      "24/7 technical support",
      "On-site installation",
      "Training programs",
      "Extended warranty options"
    ]
  }
];

export default function InteractivePanelsCorporate() {
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
                  <Building2 className="w-10 h-10 text-purple-600" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Corporate
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {" "}Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Elevate your business meetings and presentations with interactive panels designed for corporate environments. Enhance collaboration, improve communication, and boost productivity across your organization.
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
                  src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="Corporate Interactive Panel"
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
              Business Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced tools designed specifically for corporate environments
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
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits for Business
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20">
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
              Detailed specifications for corporate interactive panels
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
              Transform Your Business Today
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Get in touch with us to learn how our interactive panels can enhance your business operations
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
