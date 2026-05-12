"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sun,
  Zap,
  Battery,
  Waves,
  Factory,
  Building2,
  Leaf,
  CheckCircle,
  Menu,
  ChevronDown,
} from "lucide-react";

const solarSolutions = [
  {
    icon: Sun,
    title: "Utility-Scale Solar Solutions",
    description:
      "Harness sunlight over large areas to produce clean energy for renewable goals",
    details: [
      "Large-scale solar installations",
      "Support renewable energy goals",
      "Generate clean power for businesses",
      "Reduce carbon footprint significantly",
    ],
    href: "/services/energy-solutions/utility-scale",
  },
  {
    icon: Building2,
    title: "Rooftop Solar Solutions",
    description:
      "Use rooftop spaces to install solar panels and reduce electricity costs",
    details: [
      "Utilize unused rooftop spaces",
      "Cut electricity costs dramatically",
      "Promote energy sustainability",
      "Scalable solutions for any business",
    ],
    href: "/services/energy-solutions/rooftop",
  },
  {
    icon: Waves,
    title: "Floating Solar Solutions",
    description:
      "Install solar panels on water bodies for innovative space-saving solutions",
    details: [
      "Install on lakes and reservoirs",
      "Save land costs effectively",
      "Improve panel efficiency through cooling",
      "Reduce water evaporation",
    ],
    href: "/services/energy-solutions/floating",
  },
  {
    icon: Battery,
    title: "Solar and Storage Solutions (BESS)",
    description:
      "Combine solar energy with battery storage for 24/7 power reliability",
    details: [
      "Store excess daytime energy",
      "Use stored power at night",
      "Peak demand management",
      "Enhanced energy reliability",
    ],
    href: "/services/energy-solutions/storage",
  },
  {
    icon: Zap,
    title: "Hybrid Solar Solutions",
    description:
      "Combine solar with other renewable sources for enhanced reliability",
    details: [
      "Integrate with wind energy",
      "24/7 power supply guarantee",
      "Enhanced system reliability",
      "Multiple energy sources",
    ],
    href: "/services/energy-solutions/hybrid",
  },
  {
    icon: Factory,
    title: "Custom Solar Solutions for C&I Businesses",
    description:
      "Tailored solar solutions for Commercial & Industrial businesses",
    details: [
      "Customized for specific needs",
      "Improve operational efficiency",
      "Reduce energy costs significantly",
      "Smooth infrastructure integration",
    ],
    href: "/services/energy-solutions/commercial-industrial",
  },
  {
    icon: Leaf,
    title: "CBAM Solutions for Green Steel/Aluminium",
    description:
      "Solar solutions to meet Carbon Border Adjustment Mechanism requirements",
    details: [
      "Reduce carbon intensity",
      "Comply with CBAM regulations",
      "Avoid international penalties",
      "Align with environmental standards",
    ],
    href: "/services/energy-solutions/cbam",
  },
];

export default function EnergySolutions() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Avaada Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop&auto=format&q=80"
            alt="Solar Energy Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Link href="/" className="text-white font-bold text-2xl">
                  VNB India
                </Link>
                <div className="hidden lg:flex items-center gap-6">
                  <Link
                    href="#about"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    About
                  </Link>
                  <div className="relative group">
                    <button className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
                      Business
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Renewable Energy
                        </h4>
                        <div className="space-y-2">
                          <Link
                            href="/services/energy-solutions"
                            className="block px-3 py-2 text-gray-700 hover:bg-yellow-50 rounded"
                          >
                            Solar
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-gray-700 hover:bg-yellow-50 rounded"
                          >
                            Wind
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-gray-700 hover:bg-yellow-50 rounded"
                          >
                            MSKVY
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="#sustainability"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    Sustainability
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <button className="lg:hidden text-white">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Always Clean.
              <span className="block text-yellow-400">Always On.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              VNB India is a Clean Energy Conglomerate that strategically
              integrates Solar, Wind, Hydro & and Battery Energy Storage System
              (BESS), providing clean, affordable, round-the-clock power to
              accelerate India&apos;s energy transition truly embodying our
              promise of being Always Clean & Always On.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                About VNB
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Section - Avaada Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Renewable Energy
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Sun className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Solar
                    </h3>
                    <p className="text-gray-600">
                      Leading solar energy solutions with 7.1 GWp portfolio
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Wind
                    </h3>
                    <p className="text-gray-600">
                      Harnessing wind power for sustainable energy
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      MSKVY
                    </h3>
                    <p className="text-gray-600">
                      Kusum Scheme for agricultural solar pumps
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&auto=format&q=80"
                alt="Solar Panel Manufacturing"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Solar Manufacturing Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Solar PV Manufacturing
                </h3>
                <p className="text-xl text-gray-600 mb-6">
                  Conceptualize, Design, and Deliver World-Class Solar
                  Technology
                </p>
                <p className="text-gray-600">
                  State-of-the-art manufacturing facilities producing
                  high-efficiency solar panels with cutting-edge technology and
                  quality assurance.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="Solar Manufacturing"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Solutions Grid */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solar Energy Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solar solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solarSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors">
                  <solution.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3 mb-6">
                  {solution.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-600 to-orange-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Contact us to elevate your vision
            </h2>
            <p className="text-xl mb-8 text-yellow-100">
              Transform your energy future with VNB&apos;s comprehensive solar
              solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-yellow-600 rounded-lg font-medium hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
