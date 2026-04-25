"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Zap, MousePointer, ArrowRight } from "lucide-react";

const verticals = [
  {
    icon: Sun,
    title: "Solar Installation",
    description:
      "Professional solar panel installation for residential, commercial, and industrial properties.",
    features: [
      "Site Assessment & Design",
      "High-Efficiency Panels",
      "Grid Connection",
    ],
    link: "/services/solar-energy",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Zap,
    title: "Energy Storage",
    description:
      "Advanced battery storage solutions to maximize your solar energy usage and independence.",
    features: [
      "Lithium-ion Batteries",
      "Smart Energy Management",
      "Backup Power Systems",
    ],
    link: "/services/solar-energy",
    color: "from-blue-400 to-purple-500",
  },
  {
    icon: MousePointer,
    title: "Solar Maintenance",
    description:
      "Comprehensive maintenance and monitoring services to ensure optimal system performance.",
    features: ["Regular Inspections", "Performance Monitoring", "24/7 Support"],
    link: "/services/solar-energy",
    color: "from-green-400 to-teal-500",
  },
];

export default function BusinessVerticals() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Business Verticals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence across three core domains
          </p>
        </motion.div>

        {/* Verticals Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Icon Header */}
                <div className={`h-2 bg-gradient-to-r ${vertical.color}`} />

                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-r ${vertical.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <vertical.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {vertical.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {vertical.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {vertical.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${vertical.color} rounded-full`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={vertical.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our solutions can help you achieve your
              goals
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
