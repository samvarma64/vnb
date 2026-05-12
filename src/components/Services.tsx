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
            From sustainable energy to world-class IT solutions, VNB India
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
                  Solar
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

          {/* VNB Power */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="power"
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
                  Power
                </h3>
                <div className="h-0.5 w-16 bg-gray-300/20" />
              </div>
              <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
                Advanced power generation and distribution solutions for
                reliable energy infrastructure
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
                  title="Power Generation"
                  description="Comprehensive power generation solutions using renewable and conventional sources."
                  icon={Sun}
                  color="blue"
                  features={[
                    "Renewable Energy",
                    "Conventional Power",
                    "Hybrid Systems",
                  ]}
                  href="/services/power"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Grid Management"
                  description="Smart grid solutions for efficient power distribution and management."
                  icon={Settings}
                  color="blue"
                  features={[
                    "Smart Grid Technology",
                    "Load Management",
                    "Grid Optimization",
                  ]}
                  href="/services/power"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Energy Storage"
                  description="Advanced energy storage systems for grid stability and backup power."
                  icon={ShieldCheck}
                  color="blue"
                  features={[
                    "Battery Storage",
                    "Pumped Storage",
                    "Grid Integration",
                  ]}
                  href="/services/power"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* VNB Infra-EPC & Construction */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="infra-epc-construction"
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
                  Infra-EPC & Construction
                </h3>
                <div className="h-0.5 w-16 bg-gray-300/20" />
              </div>
              <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
                End-to-end infrastructure development, EPC services, and
                construction projects
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
                  title="EPC Services"
                  description="Engineering, Procurement, and Construction services for large-scale projects."
                  icon={Sun}
                  color="purple"
                  features={[
                    "Project Management",
                    "Engineering Design",
                    "Construction Services",
                  ]}
                  href="/services/infra-epc-construction"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Infrastructure Development"
                  description="Comprehensive infrastructure development for industrial and commercial projects."
                  icon={Settings}
                  color="purple"
                  features={[
                    "Site Development",
                    "Utilities Setup",
                    "Civil Construction",
                  ]}
                  href="/services/infra-epc-construction"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Project Consulting"
                  description="Expert consulting services for infrastructure and construction projects."
                  icon={ShieldCheck}
                  color="purple"
                  features={[
                    "Feasibility Studies",
                    "Project Planning",
                    "Quality Assurance",
                  ]}
                  href="/services/infra-epc-construction"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* VNB IT & Smart Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="it-smart-services"
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
                  IT & Smart Services
                </h3>
                <div className="h-0.5 w-16 bg-gray-300/20" />
              </div>
              <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
                CMMI Level 3 certified technology solutions and smart systems
                for modern businesses
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
                  href="/services/it-smart-services"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Smart Automation"
                  description="Intelligent automation solutions for enhanced operational efficiency."
                  icon={Settings}
                  color="blue"
                  features={[
                    "Process Automation",
                    "Smart Controls",
                    "IoT Integration",
                  ]}
                  href="/services/it-smart-services"
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
                  href="/services/it-smart-services"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* VNB Trading & Distribution */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="trading-distribution"
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
                  Trading & Distribution
                </h3>
                <div className="h-0.5 w-16 bg-gray-300/20" />
              </div>
              <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
                Comprehensive trading and distribution solutions for energy and
                technology products
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
                  title="Supply Chain Management"
                  description="End-to-end supply chain solutions for efficient product distribution."
                  icon={Monitor}
                  color="purple"
                  features={[
                    "Logistics Management",
                    "Inventory Control",
                    "Distribution Network",
                  ]}
                  href="/services/trading-distribution"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceCard
                  title="Global Trading"
                  description="International trading solutions for energy and technology products."
                  icon={ShieldCheck}
                  color="purple"
                  features={[
                    "Import/Export",
                    "Market Access",
                    "Regulatory Compliance",
                  ]}
                  href="/services/trading-distribution"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
