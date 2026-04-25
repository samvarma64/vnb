"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sun, Cpu, Users, Zap, Shield, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Energy Solutions",
      description:
        "Comprehensive solar power solutions for residential, commercial, and industrial clients. Reduce your carbon footprint and energy costs.",
      features: [
        "Solar Panel Installation",
        "Energy Storage Systems",
        "Net Metering",
        "Maintenance Services",
      ],
      link: "/solar-energy",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Technology Services",
      description:
        "Cutting-edge technology solutions including digital transformation, AI integration, and cloud services to modernize your business.",
      features: [
        "Digital Transformation",
        "Cloud Solutions",
        "AI & ML Integration",
        "IT Consulting",
      ],
      link: "/services/tech",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Education Technology",
      description:
        "Interactive learning solutions and smart classroom implementations to enhance educational experiences and outcomes.",
      features: [
        "Interactive Panels",
        "E-Learning Platforms",
        "Digital Content",
        "Teacher Training",
      ],
      link: "/services/interactive",
      color: "from-green-400 to-teal-500",
    },
  ];

  const additionalServices = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Infrastructure Solutions",
      description:
        "End-to-end infrastructure setup and modernization for optimal performance and scalability.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description:
        "Advanced security solutions to protect your digital assets and ensure compliance.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "IoT Solutions",
      description:
        "Internet of Things implementations for smart homes, offices, and industrial automation.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-vnb-blue/5 via-white to-vnb-green/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-vnb-purple/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-vnb-blue/10 to-transparent rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10"
              >
                Our Services
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Comprehensive{" "}
                <span className="text-gradient-primary">Solutions</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From renewable energy to cutting-edge technology, we offer a
                wide range of services to meet all your business needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-1">
                      <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                        <div
                          className={`p-8 rounded-2xl bg-gradient-to-br ${service.color} text-white`}
                        >
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-vnb-blue rounded-full" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-vnb-blue text-white font-semibold rounded-xl hover:bg-vnb-blue/90 transition-colors "
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional{" "}
                <span className="text-gradient-primary">Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore more services designed to accelerate your business
                growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-vnb-blue/10 rounded-2xl flex items-center justify-center text-vnb-blue mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-vnb-blue font-semibold hover:underline ">
                    Coming Soon →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-vnb-blue to-vnb-purple">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how our services can help you achieve your
                goals and drive growth.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-vnb-blue font-semibold rounded-xl hover:bg-gray-50 transition-colors "
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
