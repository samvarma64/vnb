"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Sun,
  Zap,
  TrendingDown,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function SolarServicesPage() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduce Energy Costs",
      desc: "Save up to 90% on electricity bills",
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      desc: "Long-term protection and peace of mind",
    },
    {
      icon: Zap,
      title: "High Efficiency",
      desc: "Latest solar panel technology",
    },
    {
      icon: Sun,
      title: "Clean Energy",
      desc: "100% renewable and sustainable",
    },
  ];

  const services = [
    "Residential Rooftop Solar Installation",
    "Commercial Solar Solutions",
    "Solar Farm Development",
    "Solar Panel Maintenance & Repair",
    "Energy Storage Systems",
    "Grid-Tied & Off-Grid Solutions",
    "Solar Consultation & Assessment",
    "Government Subsidy Assistance",
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-green/5 via-white to-vnb-blue/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-green/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-green transition-colors mb-8 "
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
              <Sun className="w-4 h-4" />
              Solar Energy Solutions
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Harness the Power of the{" "}
              <span className="text-gradient-primary">Sun</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              VNB Solar provides comprehensive solar energy solutions for homes,
              businesses, and large-scale installations. Join the renewable
              energy revolution and start saving today.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all "
              >
                Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop&q=80"
              alt="Solar Energy Solutions"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                500MW+ Installed Capacity
              </h2>
              <p className="text-white/90">
                Powering thousands of homes and businesses across India
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Solar Energy?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the benefits of clean, renewable energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-vnb-green/20 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-vnb-green to-vnb-blue rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Our Solar Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-vnb-green/20 hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-vnb-green flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Trusted Clients
            </h2>
            <p className="text-lg text-gray-600">
              Proudly serving leading organizations across India
            </p>
          </motion.div>

          {/* Client Logos Carousel */}
          <div className="relative">
            <div className="flex gap-12 overflow-hidden">
              <motion.div
                className="flex gap-12"
                animate={{ x: [0, -100 * 12] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center px-6 hover:shadow-md transition-shadow"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        {
                          [
                            "TechCorp",
                            "GreenEnergy",
                            "SolarTech",
                            "PowerGrid",
                            "EcoPower",
                            "SunEnergy",
                          ][i % 6]
                        }
                      </div>
                      <div className="text-xs text-gray-500">
                        Client {i + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          </div>

          {/* Client Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-vnb-green mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vnb-blue mb-2">
                1000MW+
              </div>
              <div className="text-gray-600">Solar Installed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vnb-purple mb-2">25+</div>
              <div className="text-gray-600">States Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vnb-orange mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-vnb-green to-vnb-blue rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation for your solar installation project
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-vnb-green rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all "
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
