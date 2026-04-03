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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vnb-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vnb-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="text-vnb-blue font-black uppercase tracking-widest text-sm mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter"
          >
            Future-Ready <span className="text-vnb-green">Solutions</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600">
            From sustainable energy to world-class IT solutions, VNB Group provides the expertise to power your digital and ecological transition.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* VNB Solar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="solar" 
            className="lg:col-span-3 mb-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-0.5 flex-grow bg-vnb-green/20"></span>
              <h3 className="text-2xl font-bold text-vnb-green uppercase tracking-widest">VNB Solar</h3>
              <span className="h-0.5 flex-grow bg-vnb-green/20"></span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ServiceCard
              title="Solar Rooftop"
              description="End-to-end solar installations for residential, commercial, and industrial rooftops."
              icon={Sun}
              color="green"
              features={["Residential Rooftops", "Commercial & Industrial", "EPC Solutions"]}
            />
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ServiceCard
              title="Solar Maintenance"
              description="Comprehensive AMC and OMC services to ensure maximum yield from your solar plants. "
              icon={Settings}
              color="green"
              features={["Preventive Maintenance", "24/7 Monitoring", "Efficiency Optimization"]}
            />
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ServiceCard
              title="Energy Consulting"
              description="Expert advice on energy transition, feasibility studies, and regulatory compliance."
              icon={ShieldCheck}
              color="green"
              features={["Feasibility Studies", "Policy Guidance", "Sustainability Planning"]}
            />
          </motion.div>

          {/* VNB Tech */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="tech" 
            className="lg:col-span-3 mt-16 mb-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-0.5 flex-grow bg-vnb-blue/20"></span>
              <h3 className="text-2xl font-bold text-vnb-blue uppercase tracking-widest">VNB Tech Services</h3>
              <span className="h-0.5 flex-grow bg-vnb-blue/20"></span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ServiceCard
              title="IT Consulting"
              description="CMMI Level 3 certified technology strategy and business alignment solutions."
              icon={Code}
              color="blue"
              features={["Technology Strategy", "Business Alignment", "Process Optimization"]}
            />
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ServiceCard
              title="Managed Services"
              description="24/7 IT management and support for infrastructure, networks, and applications."
              icon={Settings}
              color="blue"
              features={["Cloud Management", "Infrastructure Support", "Cybersecurity"]}
            />
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ServiceCard
              title="Cloud Solutions"
              description="Seamless cloud migration, modernization, and ongoing maintenance."
              icon={Cloud}
              color="blue"
              features={["Cloud Migration", "Modernization", "Serverless Architecture"]}
            />
          </motion.div>

          {/* VNB Interactive */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="interactive" 
            className="lg:col-span-3 mt-16 mb-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-0.5 flex-grow bg-vnb-blue/20"></span>
              <h3 className="text-2xl font-bold text-vnb-blue uppercase tracking-widest">VNB Interactive</h3>
              <span className="h-0.5 flex-grow bg-vnb-blue/20"></span>
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
             <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
               <ServiceCard
                title="Interactive Flat Panels"
                description="4K UHD Interactive Panels (65'', 75'', 86'') powered by Android 11 with WiFi 6."
                icon={Monitor}
                color="blue"
                features={["Education Tech", "Business Web-Conferencing", "Zero Bonding Display"]}
              />
            </motion.div>
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <ServiceCard
                title="IT Recruitment"
                description="Full spectrum of IT recruiting and professional staffing services since 2010."
                icon={ShieldCheck}
                color="blue"
                features={["IT Staffing", "Executive Search", "Talent Management"]}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
