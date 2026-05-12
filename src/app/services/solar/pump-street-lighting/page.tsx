"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  SunMedium,
  Droplets,
  Lightbulb,
  Battery,
  TreePine,
  Shield,
  CheckCircle,
  TrendingDown,
  Users,
} from "lucide-react";

export default function SolarPumpStreetLightingPage() {
  const pumpServices = [
    {
      icon: Droplets,
      title: "Agricultural Solar Pumps",
      description: "Efficient water pumping solutions for irrigation and farming needs",
      features: ["Submersible Pumps", "Surface Pumps", "Drip Irrigation", "Smart Controllers"]
    },
    {
      icon: Users,
      title: "Community Water Supply",
      description: "Reliable solar-powered water systems for villages and communities",
      features: ["Drinking Water", "Storage Tanks", "Distribution Systems", "Water Treatment"]
    },
    {
      icon: Battery,
      title: "Industrial Water Solutions",
      description: "High-capacity solar pumping for industrial and commercial applications",
      features: ["Process Water", "Cooling Systems", "Waste Management", "Recycling Systems"]
    }
  ];

  const lightingServices = [
    {
      icon: Lightbulb,
      title: "Smart Street Lighting",
      description: "Intelligent solar street lights with automated controls and monitoring",
      features: ["LED Lights", "Motion Sensors", "Remote Monitoring", "Auto Dimming"]
    },
    {
      icon: TreePine,
      title: "Area Lighting",
      description: "Comprehensive lighting solutions for parks, campuses, and public spaces",
      features: ["Park Lighting", "Pathway Lights", "Flood Lights", "Decorative Lighting"]
    },
    {
      icon: Shield,
      title: "Security Lighting",
      description: "Solar-powered security lighting for enhanced safety and surveillance",
      features: ["Perimeter Lighting", "CCTV Integration", "Motion Detection", "Emergency Backup"]
    }
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: "Zero Electricity Bills",
      description: "No recurring electricity costs for water pumping and lighting"
    },
    {
      icon: Battery,
      title: "Reliable Operation",
      description: "Consistent performance even during power outages"
    },
    {
      icon: TreePine,
      title: "Environmentally Friendly",
      description: "Clean energy solution with zero carbon emissions"
    },
    {
      icon: Shield,
      title: "Low Maintenance",
      description: "Durable systems with minimal maintenance requirements"
    }
  ];

  const applications = [
    {
      name: "Agricultural Irrigation",
      description: "Solar pumps for efficient farm irrigation systems",
      icon: Droplets
    },
    {
      name: "Rural Electrification",
      description: "Street lighting for villages and rural areas",
      icon: Lightbulb
    },
    {
      name: "Water Supply Schemes",
      description: "Community water pumping and distribution",
      icon: Users
    },
    {
      name: "Industrial Applications",
      description: "Water pumping and lighting for industries",
      icon: Battery
    },
    {
      name: "Urban Infrastructure",
      description: "Smart city lighting solutions",
      icon: TreePine
    },
    {
      name: "Emergency Systems",
      description: "Backup water and lighting solutions",
      icon: Shield
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-orange/5 via-white to-vnb-yellow/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-orange/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/services/solar"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-orange transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Solar Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
              <SunMedium className="w-4 h-4" />
              Solar Pump & Street Lighting
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Solar-Powered{" "}
              <span className="text-gradient-primary">Water & Light</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              VNB Solar offers innovative solar water pumping and street lighting solutions that provide 
              reliable, cost-effective, and environmentally friendly alternatives to traditional systems. 
              Perfect for rural areas, agricultural needs, and sustainable infrastructure development.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Consultation
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white text-vnb-orange border-2 border-vnb-orange rounded-lg font-semibold hover:bg-vnb-orange hover:text-white transition-all"
              >
                View Installations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solar Pump Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solar Water Pumping Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Efficient and reliable solar-powered water pumping systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pumpServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-vnb-orange/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-vnb-orange flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Street Lighting Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solar Street Lighting Systems
            </h2>
            <p className="text-lg text-gray-600">
              Smart and sustainable lighting solutions for public and private spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lightingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-vnb-yellow/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-yellow to-vnb-orange rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-vnb-yellow flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Why choose solar pumps and street lighting
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Applications
            </h2>
            <p className="text-lg text-gray-600">
              Versatile solutions for various sectors and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-vnb-orange/20 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-vnb-orange/10 to-vnb-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <app.icon className="w-6 h-6 text-vnb-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{app.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{app.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Water & Lighting Systems
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Switch to solar-powered water pumping and street lighting for sustainable, 
              cost-effective solutions that never run out of power.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-vnb-orange rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Solar Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
