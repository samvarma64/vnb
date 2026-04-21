"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function About() {
  const stats = [
    { value: "10+", label: "Years Experience", icon: Award },
    { value: "CMMI", label: "Level 3 Certified", icon: TrendingUp },
    { value: "50MW+", label: "Solar Installed", icon: Users },
    { value: "100%", label: "Client Satisfaction", icon: CheckCircle },
  ];

  const values = [
    {
      title: "Customer-Centric Approach",
      desc: "Tailored solutions that align with your specific business goals and energy requirements.",
      color: "green",
    },
    {
      title: "CMMI Level 3 Quality",
      desc: "Our IT processes follow international standards for quality and reliability.",
      color: "blue",
    },
    {
      title: "Sustainability First",
      desc: "Committed to reducing carbon footprint through innovative green energy solutions.",
      color: "green",
    },
    {
      title: "Innovation Driven",
      desc: "Continuously pushing boundaries with cutting-edge technology and creative solutions.",
      color: "blue",
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      {/* Clean minimal background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-vnb-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-vnb-green/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10"
          >
            About VNB Group
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          >
            One Group.{" "}
            <span className="text-gradient-primary">Unlimited Solutions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            At VNB Group, we believe in the synergy between technology and
            sustainability. Our mission is to provide businesses with the tools
            they need to thrive in a digital-first world while ensuring a
            cleaner, greener planet for future generations.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-20 mb-20">
          {/* Left side - Stats card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100">
                <div className="p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-gray-900">
                    A Decade of Driving{" "}
                    <span className="text-gradient-primary">Innovation</span>
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    Founded in 2010 as Host4Big Technologies, we have evolved
                    into the VNB Group—a multi-disciplinary powerhouse across
                    Information Technology, Sustainable Energy, and Interactive
                    Education.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-100 hover:border-vnb-blue/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-vnb-blue to-vnb-green flex items-center justify-center flex-shrink-0 shadow-sm">
                            <stat.icon size={20} className="text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">
                              {stat.value}
                            </div>
                            <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            {/* Team/Office Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl mb-8">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt="VNB Group Team"
                width={800}
                height={600}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white text-2xl font-bold mb-2">
                  Powered by Excellence
                </h4>
                <p className="text-white/90 text-sm">
                  A dedicated team committed to your success
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:border-vnb-blue/20 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${
                        value.color === "green"
                          ? "from-vnb-green to-vnb-blue"
                          : "from-vnb-blue to-vnb-purple"
                      } flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300`}
                    >
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-vnb-blue transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect line */}
                  <div
                    className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r ${
                      value.color === "green"
                        ? "from-vnb-green to-vnb-blue"
                        : "from-vnb-blue to-vnb-purple"
                    } w-0 group-hover:w-full transition-all duration-500 rounded-full`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-2xl bg-gradient-to-br from-vnb-blue/5 to-vnb-green/5 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ready to transform your business?
            </h3>
            <p className="text-base text-gray-600 max-w-2xl">
              Join hundreds of satisfied clients who have already made the
              switch to sustainable and innovative solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-green text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
