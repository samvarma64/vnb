"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Zap, MousePointer, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    category: "Solar Products",
    icon: Sun,
    color: "from-yellow-400 to-orange-500",
    items: [
      {
        name: "VNB Solar Panel Pro",
        description:
          "High-efficiency monocrystalline solar panels with 22% conversion rate",
        features: ["400W Output", "25 Year Warranty", "Weather Resistant"],
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
        link: "/products/solar-panels",
      },
      {
        name: "VNB Power Storage",
        description: "Advanced lithium-ion battery systems for energy storage",
        features: [
          "10kWh Capacity",
          "Smart Grid Integration",
          "Mobile App Control",
        ],
        image:
          "https://images.unsplash.com/photo-1606787620819-6b98b2d4e8c5?w=600&h=400&fit=crop",
        link: "/products/solar-panels",
      },
    ],
  },
  {
    category: "Tech Solutions",
    icon: Zap,
    color: "from-blue-400 to-purple-500",
    items: [
      {
        name: "VNB AI Platform",
        description: "Enterprise-grade AI and machine learning platform",
        features: ["Pre-trained Models", "AutoML", "API Integration"],
        image:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
        link: "/products/tech-solutions",
      },
      {
        name: "VNB Cloud Suite",
        description: "Comprehensive cloud infrastructure management solution",
        features: ["Multi-cloud Support", "Auto-scaling", "24/7 Monitoring"],
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        link: "/products/tech-solutions",
      },
    ],
  },
  {
    category: "Smart Devices",
    icon: MousePointer,
    color: "from-green-400 to-teal-500",
    items: [
      {
        name: "VNB Interactive Display",
        description: "Touch-enabled interactive displays for businesses",
        features: ["4K Resolution", "Multi-touch", "Cloud Management"],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        link: "/products/smart-devices",
      },
      {
        name: "VNB IoT Hub",
        description: "Central hub for managing all your smart devices",
        features: ["100+ Device Support", "Voice Control", "Energy Monitoring"],
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        link: "/products/smart-devices",
      },
    ],
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600">
              Innovative solutions designed to transform your business and daily
              life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {products.map((category) => (
            <div key={category.category} className="mb-20">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {category.category}
                </h2>
              </motion.div>

              {/* Products in Category */}
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((product, productIndex) => (
                  <motion.article
                    key={product.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: productIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={product.link}>
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">4.8</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 mb-6">
                            {product.description}
                          </p>

                          {/* Features */}
                          <ul className="space-y-2 mb-6">
                            {product.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-gray-700"
                              >
                                <div
                                  className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          {/* CTA */}
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-900">
                              Starting at{" "}
                              <span className="text-blue-600">$999</span>
                            </span>
                            <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                              <span>View Details</span>
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our experts are here to help you find the perfect solution for
              your needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:shadow-xl transition-all duration-300"
            >
              Talk to an Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
