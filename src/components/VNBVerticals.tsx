"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, Sun, Tablet } from "lucide-react";

const verticals = [
  {
    icon: Monitor,
    title: "VNB Technologies",
    description: "AI-Driven IT Consulting Services",
    tagline: "Leading the AI Revolution",
    services: [
      "AI Strategy & Consulting",
      "Machine Learning Solutions",
      "Intelligent Automation",
      "Data Analytics & Insights",
      "Cloud AI Infrastructure",
      "Digital Transformation",
    ],
    link: "/services/tech",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sun,
    title: "VNB Solar",
    description: "AI-Optimized Solar Energy Solutions",
    tagline: "Smart Energy Management",
    services: [
      "AI-Powered Solar Monitoring",
      "Predictive Maintenance",
      "Smart Grid Integration",
      "Energy Analytics",
      "Automated Optimization",
      "IoT Solar Solutions",
    ],
    link: "/services/solar-energy",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Tablet,
    title: "VNB Interactive",
    description: "AI-Enhanced Interactive Technology",
    tagline: "Intelligent Learning Systems",
    services: [
      "AI-Powered Interactive Panels",
      "Smart Learning Analytics",
      "Adaptive Education Platforms",
      "Intelligent Meeting Systems",
      "Voice-Controlled Displays",
      "Computer Vision Solutions",
    ],
    link: "/services/interactive",
    color: "from-purple-500 to-pink-500",
  },
];

export default function VNBVerticals() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Business Verticals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three specialized divisions working together to deliver
            comprehensive solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background with AI Pattern */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${vertical.color} opacity-90`}
                />
                {/* AI Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 right-2 w-16 h-16 border border-white/30 rounded-full" />
                  <div className="absolute bottom-2 left-2 w-12 h-12 border border-white/30 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <vertical.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/90 text-sm font-medium">
                    {vertical.tagline}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {vertical.title}
                </h3>
                <p className="text-gray-600 mb-6">{vertical.description}</p>

                <ul className="space-y-2 mb-6">
                  {vertical.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${vertical.color} rounded-full`}
                      />
                      {service}
                    </li>
                  ))}
                </ul>

                <Link
                  href={vertical.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
