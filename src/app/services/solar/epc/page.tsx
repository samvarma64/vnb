"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  Wrench,
  CheckCircle,
  Home,
  Building2,
  Factory,
  Sun,
  Gauge,
  Eye,
} from "lucide-react";

export default function SolarEPCPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-green/5 via-white to-vnb-blue/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-green/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/services/solar"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-green transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Solar Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
                <Zap className="w-4 h-4" />
                Solar EPC Services
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                End-to-End Solar{" "}
                <span className="text-gradient-primary">EPC Solutions</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                From technical surveys to the final activation of a solar plant,
                every single detail of your solar project is managed by us.
                Engineering, procurement, and construction - all under one roof
                for a hassle-free experience and lasting results.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-white text-vnb-green border-2 border-vnb-green/20 rounded-xl font-semibold hover:bg-vnb-green/5 transition-all"
                >
                  View Projects
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
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop&q=80"
                alt="Solar EPC Project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">
                  Complete Solar Project Execution
                </p>
                <p className="text-sm text-white/80">
                  From design to commissioning - all under one roof
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. EPC - Residential, Commercial & Industrial */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
              EPC & Development
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              EPC for Residential, Commercial & Industrial
            </h2>
            <p className="text-lg text-gray-600">
              VNB Solar provides top-rated solar solutions for homes, offices,
              and industries. Our team of professionals delivers top-notch
              service from start to execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Residential",
                desc: "Power your home with clean solar energy. Our residential solar installations are designed for maximum savings and minimal maintenance, helping families reduce electricity bills by up to 90%.",
                features: [
                  "Rooftop solar panel installation",
                  "Customized system design for your home",
                  "Net metering setup & approvals",
                  "Government subsidy assistance",
                  "5-25 year warranty coverage",
                ],
              },
              {
                icon: Building2,
                title: "Commercial",
                desc: "Reduce operational costs and go green with commercial solar solutions. From offices to institutions, we deliver reliable solar systems that provide long-term savings and green building certifications.",
                features: [
                  "Office & institutional installations",
                  "Society & housing complex solutions",
                  "Energy audit & system sizing",
                  "Accelerated depreciation benefits",
                  "Scalable & modular design",
                ],
              },
              {
                icon: Factory,
                title: "Industrial",
                desc: "Large-scale solar power for manufacturing and industrial facilities. Our industrial EPC solutions handle high-capacity requirements with advanced engineering for maximum energy output.",
                features: [
                  "High-capacity solar plants",
                  "Ground mount & rooftop systems",
                  "Grid-tied & hybrid solutions",
                  "Power purchase agreements (PPA)",
                  "Complete project management",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-green/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-green to-vnb-blue rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-vnb-green flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Rooftop & Ground Mounted Systems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
              Rooftop Solar
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rooftop & Ground Mounted Systems
            </h2>
            <p className="text-lg text-gray-600">
              Rooftop solar systems from VNB Solar are engineered for
              performance, reliability, and value - trusted by families and
              businesses across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-vnb-green to-vnb-blue rounded-2xl flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rooftop Solar Systems
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your rooftop into a power station. Our technologically
                advanced rooftop solar systems are designed for optimal energy
                generation while maintaining the aesthetics of your property.
              </p>
              <ul className="space-y-3">
                {[
                  "On-grid, off-grid & hybrid systems",
                  "Residential & commercial rooftop solutions",
                  "Affordable pricing with financing options",
                  "Hassle-free installation with expert support",
                  "Up to 50%+ electricity bill savings",
                  "Green building certifications",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-vnb-green flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&h=600&fit=crop&q=80"
                alt="Rooftop Solar Installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Rooftop Solar Systems</p>
                <p className="text-sm text-white/80">
                  Optimized for performance and aesthetics
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&q=80"
                alt="Ground Mounted Solar Farm"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Ground Mounted Systems</p>
                <p className="text-sm text-white/80">
                  Large-scale utility-grade solar installations
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-2xl flex items-center justify-center mb-6">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ground Mounted Systems
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Large-scale ground mounted solar installations for utility-grade
                power generation. Ideal for open land areas, these systems
                deliver maximum capacity and long-term energy yield.
              </p>
              <ul className="space-y-3">
                {[
                  "Utility-scale solar power plants",
                  "Fixed tilt & seasonal tilt structures",
                  "Single-axis & dual-axis tracking systems",
                  "Optimized land utilization design",
                  "High-capacity inverters & transformers",
                  "Scalable design for future expansion",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-vnb-blue flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Net Metering */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                Net Metering
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Net Metering Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With net metering, the excess solar energy your system generates
                is exported back to the grid, and you earn credits on your
                electricity bill. VNB Solar handles the complete net metering
                process - from application to approval - so you can maximize
                your solar investment.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Complete net metering application & approval process",
                  "Bi-directional meter installation",
                  "Grid connectivity & compliance documentation",
                  "Export surplus energy back to the grid",
                  "Earn credits and reduce electricity bills to near zero",
                  "State-wise DISCOM liaison & support",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-vnb-purple flex-shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Apply for Net Metering</span>
                <Zap className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative h-[250px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=400&fit=crop&q=80"
                  alt="Net Metering Solar System"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-bold">Net Metering</p>
                  <p className="text-sm text-white/80">
                    Export surplus energy & earn credits
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-vnb-purple/5 to-vnb-pink/5 rounded-3xl p-10 border border-vnb-purple/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  How Net Metering Works
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Solar Generation",
                      desc: "Your solar panels generate electricity during the day to power your home or business.",
                    },
                    {
                      step: "02",
                      title: "Excess Export",
                      desc: "Any surplus energy not consumed is automatically exported to the electricity grid.",
                    },
                    {
                      step: "03",
                      title: "Credit Earned",
                      desc: "A bi-directional meter records the energy exported, and you earn credits from your DISCOM.",
                    },
                    {
                      step: "04",
                      title: "Bill Adjustment",
                      desc: "Credits are adjusted against your electricity bill, reducing it to near zero or even generating income.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-vnb-purple to-vnb-pink rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">
                          {item.step}
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Operation & Maintenance */}
      <section className="py-20 bg-gray-50">
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
              Whether it&apos;s a small installation or full system service, we
              guarantee smooth and comprehensive maintenance for all types of
              solar energy systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "Residential Solar Installation",
                desc: "Regular maintenance and cleaning for residential rooftop systems to ensure peak performance year-round.",
              },
              {
                icon: Building2,
                title: "Commercial Solar Solutions",
                desc: "Comprehensive O&M packages for commercial installations including preventive and corrective maintenance.",
              },
              {
                icon: Wrench,
                title: "Solar Panel Maintenance",
                desc: "Panel cleaning, thermal imaging, string-level diagnostics, and inverter servicing for optimal output.",
              },
              {
                icon: Eye,
                title: "Monitoring & Optimization",
                desc: "Real-time performance monitoring, data analytics, and system optimization to maximize energy generation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-green/20 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-green to-vnb-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=1600&h=400&fit=crop&q=80"
            alt="Solar Energy Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "100+", label: "Man Power" },
              { value: "15+", label: "Years Experience" },
              { value: "10000+", label: "Happy Customers" },
              { value: "500+", label: "Locations Served" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-vnb-green mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
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
              Get expert EPC services for your solar power project. Contact us
              today for a free consultation and site assessment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-vnb-green rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Discuss Your Project
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
