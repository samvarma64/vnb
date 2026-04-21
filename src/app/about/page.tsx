"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Globe, Lightbulb, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "10+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "300+" },
    { label: "Team Members", value: "50+" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description:
        "To deliver innovative and sustainable solutions that empower businesses and communities to thrive in the digital age.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Vision",
      description:
        "To be a global leader in providing comprehensive technology and renewable energy solutions that drive positive change.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We embrace cutting-edge technology and creative thinking to solve complex challenges and create value for our clients.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We conduct business with transparency, honesty, and ethical practices, building trust with every interaction.",
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
                About VNB Group
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Pioneering{" "}
                <span className="text-gradient-primary">Excellence</span> in
                Technology & Energy
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                VNB Group is a CMMI Level 3 certified organization dedicated to
                transforming businesses through innovative technology solutions
                and sustainable energy initiatives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Journey of{" "}
                  <span className="text-gradient-primary">Innovation</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded with a vision to bridge the gap between technology
                    and sustainability, VNB Group has grown into a trusted
                    partner for businesses across India and beyond.
                  </p>
                  <p>
                    Our journey began with a simple mission: to deliver
                    exceptional technology solutions that drive real business
                    value. Today, we&apos;ve expanded our expertise to encompass
                    renewable energy, interactive technology, and comprehensive
                    digital transformation services.
                  </p>
                  <p>
                    With our CMMI Level 3 certification, we demonstrate our
                    commitment to quality, process excellence, and continuous
                    improvement in everything we do.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-3xl p-1">
                  <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                    <Award className="w-32 h-32 text-vnb-blue" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core <span className="text-gradient-primary">Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our actions and define our culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-vnb-blue mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership <span className="text-gradient-primary">Team</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the visionaries guiding VNB Group towards excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Visionary Leader",
                  role: "CEO & Founder",
                  description:
                    "Leading with innovation and strategic vision to transform businesses.",
                },
                {
                  name: "Tech Expert",
                  role: "CTO",
                  description:
                    "Driving technological excellence and digital transformation initiatives.",
                },
                {
                  name: "Operations Head",
                  role: "COO",
                  description:
                    "Ensuring operational excellence and seamless project delivery.",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="aspect-square bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-full mx-auto mb-6 p-1 max-w-[200px]">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-vnb-blue" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-vnb-blue font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
