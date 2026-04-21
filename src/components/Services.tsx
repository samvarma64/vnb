"use client";

import { Sun, ShieldCheck, Monitor, Cloud, Code, Settings } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="relative py-32 bg-white overflow-hidden">
      {/* Clean minimal background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-vnb-green/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Future-Ready{" "}
            <span className="text-gradient-primary">Solutions</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From sustainable energy to world-class IT solutions, VNB Group
            provides the expertise to power your digital and ecological
            transition.
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {/* VNB Solar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="solar"
            className="space-y-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-4">
                <div className="h-0.5 w-16 bg-gray-300/20" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                  VNB Solar
                </h3>
                <div className="h-0.5 w-16 bg-gray-300/20" />
              </div>
              <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
                Harnessing the power of the sun for a sustainable tomorrow
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Solar Rooftop"
                  description="End-to-end solar installations for residential, commercial, and industrial rooftops."
                  icon={Sun}
                  color="green"
                  features={[
                    "Residential Rooftops",
                    "Commercial & Industrial",
                    "EPC Solutions",
                  ]}
                  href="/services/solar"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Solar Maintenance"
                  description="Comprehensive AMC and OMC services to ensure maximum yield from your solar plants."
                  icon={Settings}
                  color="green"
                  features={[
                    "Preventive Maintenance",
                    "24/7 Monitoring",
                    "Efficiency Optimization",
                  ]}
                  href="/services/solar"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Energy Consulting"
                  description="Expert advice on energy transition, feasibility studies, and regulatory compliance."
                  icon={ShieldCheck}
                  color="green"
                  features={[
                    "Feasibility Studies",
                    "Policy Guidance",
                    "Sustainability Planning",
                  ]}
                  href="/services/solar"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* VNB Tech */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="tech"
            className="space-y-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-4">
                <div className="h-0.5 w-16 bg-gray-300/20" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                  VNB Tech Services
                </h3>
                <div className="h-0.5 w-16 bg-gray-300/20" />
              </div>
              <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
                CMMI Level 3 certified technology solutions for modern
                businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="IT Consulting"
                  description="CMMI Level 3 certified technology strategy and business alignment solutions."
                  icon={Code}
                  color="blue"
                  features={[
                    "Technology Strategy",
                    "Business Alignment",
                    "Process Optimization",
                  ]}
                  href="/services/tech"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Managed Services"
                  description="24/7 IT management and support for infrastructure, networks, and applications."
                  icon={Settings}
                  color="blue"
                  features={[
                    "Cloud Management",
                    "Infrastructure Support",
                    "Cybersecurity",
                  ]}
                  href="/services/tech"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Cloud Solutions"
                  description="Seamless cloud migration, modernization, and ongoing maintenance."
                  icon={Cloud}
                  color="blue"
                  features={[
                    "Cloud Migration",
                    "Modernization",
                    "Serverless Architecture",
                  ]}
                  href="/services/tech"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* VNB Interactive */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="interactive"
            className="space-y-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-4">
                <div className="h-0.5 w-16 bg-gray-300/20" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                  VNB Interactive
                </h3>
                <div className="h-0.5 w-16 bg-gray-300/20" />
              </div>
              <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
                Cutting-edge interactive technology for education and business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Interactive Flat Panels"
                  description="4K UHD Interactive Panels (65'', 75'', 86'') powered by Android 11 with WiFi 6."
                  icon={Monitor}
                  color="purple"
                  features={[
                    "Education Tech",
                    "Business Web-Conferencing",
                    "Zero Bonding Display",
                  ]}
                  href="/services/interactive"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="IT Recruitment"
                  description="Full spectrum of IT recruiting and professional staffing services since 2010."
                  icon={ShieldCheck}
                  color="purple"
                  features={[
                    "IT Staffing",
                    "Executive Search",
                    "Talent Management",
                  ]}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
