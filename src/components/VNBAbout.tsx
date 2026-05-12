"use client";

import { motion } from "framer-motion";
import { Globe, Users, Target, Zap, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, label: "AI Solutions Deployed", value: "500+" },
  { icon: Globe, label: "Smart Systems Integrated", value: "1000+" },
  { icon: Target, label: "AI Expertise Years", value: "15+" },
  { icon: Zap, label: "Automation Rate", value: "95%" },
];

const values = [
  {
    icon: Shield,
    title: "AI-First Innovation",
    description:
      "Leveraging cutting-edge artificial intelligence to deliver transformative solutions across all verticals.",
  },
  {
    icon: TrendingUp,
    title: "Intelligent Growth",
    description:
      "Driving business success through data-driven insights, machine learning, and predictive analytics.",
  },
  {
    icon: Users,
    title: "Human-Centric AI",
    description:
      "Designing AI solutions that augment human capabilities while maintaining ethical standards and user privacy.",
  },
];

export default function VNBAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powering the Future with Artificial Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              VNB India is at the forefront of the AI revolution, integrating
              artificial intelligence, machine learning, and intelligent
              automation across technology consulting, renewable energy, and
              interactive solutions to create smarter, more efficient business
              ecosystems.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Synergy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The AI-Powered VNB Ecosystem
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">AI</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">VNB Power</h4>
                <p className="text-gray-600">
                  Delivers AI-driven consulting and intelligent automation
                  solutions for digital transformation
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">+</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Smart Integration
                </h4>
                <p className="text-gray-600">
                  AI-powered systems communicate and optimize across platforms
                  for maximum efficiency
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">+</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Intelligent Future
                </h4>
                <p className="text-gray-600">
                  Creating autonomous systems that learn, adapt, and evolve with
                  your business needs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500">
                    <value.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Embrace the AI Revolution?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how our AI-powered solutions can transform your
              organization, drive innovation, and create sustainable competitive
              advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@vnb.in"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Get Started
              </a>
              <a
                href="tel:+918333018333"
                className="inline-block px-8 py-4 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Call Us: +91 8333 01 8333
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
