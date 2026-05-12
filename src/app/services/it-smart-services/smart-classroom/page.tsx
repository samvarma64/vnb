"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Monitor,
  CheckCircle,
  Cpu,
  BookOpen,
  Smartphone,
  Eye,
  Volume2,
} from "lucide-react";

export default function SmartClassroomPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-purple/5 via-white to-vnb-blue/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-purple/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/services/it-smart-services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-purple transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to IT Smart Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
                <Monitor className="w-4 h-4" />
                Smart Classroom Solutions
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                AI-Powered{" "}
                <span className="text-gradient-primary">Smart Classrooms</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Experience the future of learning with our AI-powered
                Interactive Flat Panels (IFP). Equipped with 4K displays, K-12
                digital content, and Google EDLA certification, our smart
                classroom solutions transform education with interactive and
                engaging learning experiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-vnb-purple to-vnb-blue text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Get a Demo
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-vnb-purple border-2 border-vnb-purple/20 rounded-xl font-semibold hover:bg-vnb-purple/5 transition-all"
                >
                  Download Brochure
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
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop&q=80"
                alt="Smart Classroom"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">
                  Interactive Flat Panel Display
                </p>
                <p className="text-sm text-white/80">
                  AI-powered learning for modern classrooms
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audio Visual Technology */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
              IFP Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive Flat Panel Features
            </h2>
            <p className="text-lg text-gray-600">
              Best-in-class audio visual technology for engaging, interactive,
              and immersive classroom experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: "4K UHD Display",
                desc: "Ultra High Definition 4K display with Blue Light Filter technology for sharp, crystal-clear visuals and superior eye protection.",
              },
              {
                icon: Volume2,
                title: "20W Front Speakers",
                desc: "Front-facing 20W speakers delivering an immersive sound experience with built-in 4K camera and 8-array microphone.",
              },
              {
                icon: Smartphone,
                title: "Multi-Touch IR Sensors",
                desc: "Precise touch responsiveness using IR sensors supporting multiple simultaneous touch points for collaborative learning.",
              },
              {
                icon: Cpu,
                title: "Octa-Core Processor",
                desc: "Revolutionary performance with 8GB RAM, 128GB ROM, Dual OS support (Windows 11 & Android), and under 5ms response time.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-purple/20 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-purple to-vnb-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google EDLA Certified */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80"
                alt="Google EDLA Certified Smart Classroom"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Google EDLA Certified</p>
                <p className="text-sm text-white/80">
                  Effortless connectivity for advanced learning
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
                Google EDLA Certified
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Effortless Connectivity for Advanced Learning
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our IFP is Google EDLA certified, offering seamless performance,
                secure device management, and a trusted ecosystem tailored for
                education. Empower your educational journey with Studynlearn.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Access verified educational apps through Google Play for Education",
                  "Simplify device setup with zero-touch enrollment and automatic updates",
                  "Enhanced security with regular patches and data protection",
                  "Dual OS Support - Windows 11 & Android",
                  "4mm thick toughened glass for durability",
                  "Zero bonding for optimal display clarity",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-vnb-blue flex-shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Request a Demo</span>
                <Monitor className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* K-12 Digital Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
                Digital Content
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                K-12 Digital Content for Curriculum-Aligned Learning
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Interactive Flat Panel comes preloaded with comprehensive
                K-12 digital resources, covering all major subjects and grade
                levels. Designed to align with school curricula, it ensures
                every lesson is relevant and impactful.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: "50+", label: "HD Animated Videos" },
                  { value: "2L+", label: "Learning Resources" },
                  { value: "100K+", label: "Question Bank" },
                  { value: "10+", label: "Interactive Tools" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-vnb-green/5 rounded-2xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-vnb-green">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-green to-vnb-blue text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Explore Content</span>
                <BookOpen className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80"
                alt="K-12 Digital Content"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">K-12 Digital Learning</p>
                <p className="text-sm text-white/80">
                  Curriculum-aligned resources for all grades
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add-On Courses & AI */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
              AI-Powered
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Studynlearn AI & Add-On Courses
            </h2>
            <p className="text-lg text-gray-600">
              AI-driven personalized learning with real-time insights and
              specialized competitive exam preparation courses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* AI Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-purple/20 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Studynlearn AI Features
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Resourceful",
                    desc: "Wide range of curriculum-mapped resources for easy access to teaching materials.",
                  },
                  {
                    title: "Convenient",
                    desc: "Teachers can search, create lesson plans, and access MCQs on the go.",
                  },
                  {
                    title: "Curriculum-Aligned",
                    desc: "AI-driven knowledge base aligned with educational standards for accurate information.",
                  },
                  {
                    title: "Comprehensive",
                    desc: "All-in-one support covering lesson creation, assessments, and more.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-vnb-purple flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Add-On Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-orange/20 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Specialized Add-On Courses
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Optional specialized courses providing a complete learning
                solution with engaging, interactive, and curriculum-aligned
                experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "IIT JEE",
                    desc: "Engineering entrance preparation",
                  },
                  { title: "CUET", desc: "University entrance preparation" },
                  { title: "CLAT", desc: "Law entrance preparation" },
                  { title: "Foundation", desc: "Basic foundational courses" },
                ].map((course, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-vnb-orange/5 to-vnb-yellow/5 rounded-2xl p-4 border border-vnb-orange/10"
                  >
                    <p className="font-bold text-gray-900">{course.title}</p>
                    <p className="text-gray-600 text-xs">{course.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
              Specifications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Cutting-edge technical features that enhance classroom engagement
              and learning experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Resolution", value: "4K UHD", sub: "3840 x 2160" },
              {
                label: "RAM / ROM",
                value: "8GB / 128GB",
                sub: "High performance",
              },
              {
                label: "Connectivity",
                value: "BT 5.0 + WiFi 6",
                sub: "Dual band",
              },
              { label: "Touch", value: "IR 20-Point", sub: "Zero bonding" },
              { label: "Android", value: "Android 13", sub: "Dual OS support" },
              { label: "Response", value: "<5ms", sub: "Ultra-fast" },
            ].map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-vnb-purple/5 to-vnb-blue/5 rounded-2xl p-5 text-center border border-vnb-purple/10 hover:border-vnb-purple/30 transition-all"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  {spec.label}
                </p>
                <p className="text-lg font-bold text-gray-900">{spec.value}</p>
                <p className="text-xs text-gray-500">{spec.sub}</p>
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
            className="bg-gradient-to-br from-vnb-purple to-vnb-blue rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Classrooms Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Upgrade to AI-powered Interactive Flat Panels and deliver
              engaging, interactive learning experiences for your students.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-vnb-purple rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Schedule a Demo
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
