"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Cloud,
  Code,
  Shield,
  Zap,
  CheckCircle,
  Award,
} from "lucide-react";

export default function TechServicesPage() {
  const benefits = [
    {
      icon: Shield,
      title: "CMMI Level 3",
      desc: "Certified quality processes",
    },
    {
      icon: Zap,
      title: "99.9% Uptime",
      desc: "Reliable and consistent service",
    },
    {
      icon: Cloud,
      title: "Cloud Expertise",
      desc: "AWS, Azure, Google Cloud certified",
    },
    {
      icon: Award,
      title: "15+ Years",
      desc: "Industry experience and expertise",
    },
  ];

  const services = [
    "Cloud Migration & Management",
    "IT Consulting & Strategy",
    "Managed IT Services",
    "Software Development",
    "Cybersecurity Solutions",
    "Data Analytics & BI",
    "DevOps & Automation",
    "24/7 Technical Support",
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="relative py-20 bg-gradient-to-br from-vnb-blue/5 via-white to-vnb-purple/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-blue/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-blue transition-colors mb-8 "
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
              <Code className="w-4 h-4" />
              Technology Services
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Transform Your Business with{" "}
              <span className="text-gradient-primary">Technology</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              VNB Tech delivers enterprise-grade IT solutions with CMMI Level 3
              certified processes. From cloud migration to managed services,
              we've got you covered.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all "
              >
                Get Started
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-lg font-semibold hover:border-vnb-blue transition-all "
              >
                Read Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=80"
              alt="Technology Services"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                CMMI Level 3 Certified
              </h2>
              <p className="text-white/90">
                Delivering world-class IT services with proven processes
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose VNB Tech?
            </h2>
            <p className="text-lg text-gray-600">
              Enterprise-grade solutions with proven expertise
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
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-vnb-blue/20 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-xl flex items-center justify-center mb-4">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Our Technology Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-vnb-blue/20 hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-vnb-blue flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help modernize your technology
              infrastructure
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-vnb-blue rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all "
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
