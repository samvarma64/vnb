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
  Shield,
  CheckCircle,
  Wrench,
  Eye,
  Zap,
  Leaf,
  Settings,
} from "lucide-react";

export default function SolarPumpStreetLightingPage() {
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
                <SunMedium className="w-4 h-4" />
                Solar Pump & Street Lighting
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Solar-Powered{" "}
                <span className="text-gradient-primary">Water & Light</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Solar water pumping systems and street lighting solutions have
                changed the way communities access water and light. VNB Solar
                provides efficient, cost-effective, and environmentally friendly
                alternatives to traditional systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Get Consultation
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-white text-vnb-orange border-2 border-vnb-orange/20 rounded-xl font-semibold hover:bg-vnb-orange/5 transition-all"
                >
                  View Installations
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=800&h=600&fit=crop&q=80"
                alt="Solar Water Pumping System"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">
                  Sustainable Water & Lighting Solutions
                </p>
                <p className="text-sm text-white/80">
                  Powering rural and urban infrastructure with clean energy
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solar Water Pumping System */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
              Water Pumping
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solar Water Pumping System
            </h2>
            <p className="text-lg text-gray-600">
              Solar water pumping systems harness the power of the sun to
              generate electricity for water pumps - replacing conventional
              systems with environmentally friendly, cost-effective solutions
              for agriculture, households, and more.
            </p>
          </motion.div>

          {/* How it Works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop&q=80"
                alt="Solar Water Pump Installation"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                How It Works
              </h3>
              <div className="space-y-5">
                {[
                  {
                    title: "Solar Panels",
                    desc: "Photovoltaic (PV) solar panels capture sunlight and convert it to electricity which powers the system.",
                  },
                  {
                    title: "Pump Controller",
                    desc: "The brain of the system - ensures power is adequately sent to the panels and protects the pump from damage.",
                  },
                  {
                    title: "Water Pump",
                    desc: "Harnesses solar energy to draw water from wells, rivers, or ponds and delivers it where needed.",
                  },
                  {
                    title: "Pipes & Storage",
                    desc: "Storage tanks hold water for later use (especially during limited sunlight), and pipes channel the water to required sites.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Types of Solar Pumps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: Droplets,
                title: "Submersible Pumps",
                desc: "Suited for wells or boreholes. Submerged in water, ideal for deep water sources.",
              },
              {
                icon: SunMedium,
                title: "Surface Pumps",
                desc: "Kept above water sources, suitable for shallow wells, rivers, or storage tanks.",
              },
              {
                icon: Zap,
                title: "DC Pumps",
                desc: "Work directly on electricity from solar panels, making them highly efficient.",
              },
              {
                icon: Settings,
                title: "AC Pumps",
                desc: "Work with existing AC systems using inverters to convert DC to AC power.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-orange/20 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-2xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Uses & Advantages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-vnb-orange/5 to-vnb-yellow/5 rounded-3xl p-10 border border-vnb-orange/10"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Uses of Solar Water Pumps
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Agricultural Irrigation",
                    desc: "Perfect for irrigating fields in regions without reliable electric supply, increasing food production.",
                  },
                  {
                    title: "Watering Livestock",
                    desc: "Supplying water to livestock on widespread pastures far from settlements.",
                  },
                  {
                    title: "Domestic Use",
                    desc: "Providing water in rural areas for domestic purposes, improving the standard of living.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-vnb-orange flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900">
                        {item.title}:
                      </span>{" "}
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Advantages
              </h3>
              <ul className="space-y-4">
                {[
                  "Cost-Effective - Minimal operational expenses post installation since solar energy is free",
                  "Environmentally Friendly - Lowers greenhouse gas emissions and dependence on fossil fuels",
                  "Low Maintenance - Fewer moving parts means lower maintenance costs",
                  "Reliable - Perfect for remote areas with no grid power supply",
                  "Government Support - Programs like PM Kusum Yojana subsidize installation costs for farmers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-vnb-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solar Lighting System */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-yellow bg-vnb-yellow/5 rounded-full border border-vnb-yellow/10">
              Street Lighting
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solar Lighting System
            </h2>
            <p className="text-lg text-gray-600">
              Solar lights use sunlight to create electricity that powers LED
              lights. Unlike traditional lighting, solar lighting systems are
              highly effective, sustainable, and independently powered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                System Components
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Lightbulb,
                    title: "LED Lights",
                    desc: "High-efficiency LED panels that provide bright illumination with minimal energy consumption.",
                  },
                  {
                    icon: Battery,
                    title: "Battery Storage",
                    desc: "Stores energy for use at night or during cloudy days, ensuring uninterrupted lighting.",
                  },
                  {
                    icon: SunMedium,
                    title: "Solar Panels",
                    desc: "Capture sunlight and convert it into electrical energy to power the system.",
                  },
                  {
                    icon: Settings,
                    title: "Controller",
                    desc: "Controls overcharging and prevents excessive battery draining for system longevity.",
                  },
                  {
                    icon: Eye,
                    title: "Motion Sensors (Optional)",
                    desc: "Save additional energy by activating lights only when motion is detected.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-white rounded-2xl p-4 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-vnb-yellow to-vnb-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=700&fit=crop&q=80"
                alt="Solar Street Lighting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Street Lighting",
                desc: "Illuminating streets, especially in areas without reliable electricity.",
              },
              {
                title: "Parking Lots",
                desc: "Enhanced safety for drivers and pedestrians in parking areas.",
              },
              {
                title: "Parks & Pathways",
                desc: "Brightens parks and walkways, making them safer and inviting at night.",
              },
              {
                title: "Industrial Zones",
                desc: "Improving visibility in factories and construction sites while reducing energy costs.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 hover:border-vnb-yellow/20 hover:shadow-xl transition-all text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-vnb-yellow to-vnb-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-vnb-orange/5 to-vnb-yellow/5 rounded-3xl p-10 border border-vnb-orange/10"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Solar Lighting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Energy Cost Reduction",
                  desc: "Clean energy with zero expense on electricity bills.",
                },
                {
                  icon: Leaf,
                  title: "Eco-Friendly",
                  desc: "Replaces fossil fuels with clean solar energy, reducing carbon footprint.",
                },
                {
                  icon: Wrench,
                  title: "Low Maintenance",
                  desc: "LED lights and solar panels have extended lifespan, reducing upkeep costs.",
                },
                {
                  icon: Battery,
                  title: "Independently Powered",
                  desc: "Ensures uninterrupted lighting in remote and off-grid places.",
                },
                {
                  icon: Shield,
                  title: "Improved Safety",
                  desc: "Constant, reliable light for public areas, streets, and pathways.",
                },
                {
                  icon: SunMedium,
                  title: "Extended Lifespan",
                  desc: "LED lighting lasts significantly longer than conventional bulbs.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <item.icon className="w-6 h-6 text-vnb-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operation & Maintenance */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
              O&M Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Operation & Maintenance
            </h2>
            <p className="text-lg text-gray-600">
              We provide continued support to ensure your solar water pumping
              and lighting systems are working at peak efficiency with
              comprehensive maintenance and monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  {
                    icon: Eye,
                    title: "Assessment & Monitoring",
                    desc: "Customized evaluation of water needs and site conditions with real-time system monitoring for optimal performance.",
                  },
                  {
                    icon: Wrench,
                    title: "Professional Maintenance",
                    desc: "Regular servicing, panel cleaning, pump inspection, and component replacement to keep systems running efficiently.",
                  },
                  {
                    icon: Settings,
                    title: "System Optimization",
                    desc: "Performance analysis, troubleshooting, and upgrades to maximize energy output and extend system lifespan.",
                  },
                  {
                    icon: Shield,
                    title: "Financing & Subsidy Assistance",
                    desc: "Helping clients navigate government schemes like PM Kusum Yojana to make solar systems affordable.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 hover:border-vnb-green/20 hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-vnb-green to-vnb-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=700&fit=crop&q=80"
                alt="Solar System Maintenance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-2xl font-bold mb-1">Reliable O&M Support</p>
                <p className="text-white/80">
                  Ensuring your systems deliver maximum performance year-round
                </p>
              </div>
            </motion.div>
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
              Switch to solar-powered water pumping and street lighting for
              sustainable, cost-effective solutions that never run out of power.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-vnb-orange rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Solar Journey
              </Link>
              <a
                href="tel:+918333018333"
                className="inline-block px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Call +91 8333 01 8333
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
