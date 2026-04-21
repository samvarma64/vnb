"use client";

import { motion } from "framer-motion";
import { TrendingUp, Brain, Zap, Cpu } from "lucide-react";

const stats = [
  {
    icon: Brain,
    value: "500+",
    label: "AI Models Deployed",
    description: "Across all verticals",
  },
  {
    icon: Cpu,
    value: "1000+",
    label: "Smart Systems",
    description: "Powered by VNB AI",
  },
  {
    icon: Zap,
    value: "95%",
    label: "Automation Rate",
    description: "Process optimization",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "ROI Improvement",
    description: "Average client success",
  },
];

export default function VNBStats() {
  return (
    <section
      id="stats"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI-Powered Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering intelligent solutions through artificial intelligence,
            machine learning, and predictive analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-2">10M+</h4>
              <p className="text-gray-600">Data Points Processed Daily</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-cyan-600 mb-2">99.9%</h4>
              <p className="text-gray-600">AI Model Accuracy</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-purple-600 mb-2">24/7</h4>
              <p className="text-gray-600">AI Monitoring & Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
