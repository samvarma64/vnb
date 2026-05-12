"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  DollarSign,
  FileText,
  TrendingUp,
  Shield,
  Users,
  Building,
  Zap,
  CheckCircle,
  Clock,
  Award,
} from "lucide-react";

export default function SolarRescoPPAProjectsPage() {
  const rescoServices = [
    {
      icon: Building,
      title: "O&M Services",
      description: "Comprehensive operations and maintenance for optimal solar plant performance",
      features: ["Preventive Maintenance", "Corrective Maintenance", "Performance Monitoring", "Remote Management"]
    },
    {
      icon: TrendingUp,
      title: "Asset Management",
      description: "Professional management of solar assets to maximize returns and efficiency",
      features: ["Performance Optimization", "Revenue Management", "Technical Audits", "Life Cycle Management"]
    },
    {
      icon: Shield,
      title: "Technical Support",
      description: "24/7 technical assistance and expert support for solar installations",
      features: ["Help Desk Support", "On-site Assistance", "Emergency Response", "Training Programs"]
    }
  ];

  const ppaModels = [
    {
      icon: FileText,
      title: "Direct PPA",
      description: "Power purchase agreements directly with consumers for long-term energy supply",
      features: ["Fixed Tariff", "Long-term Contracts", "Customized Solutions", "Risk Management"]
    },
    {
      icon: Users,
      title: "Third-party PPA",
      description: "Tripartite agreements involving generators, consumers, and utilities",
      features: ["Utility Involvement", "Grid Integration", "Regulatory Compliance", "Shared Benefits"]
    },
    {
      icon: Building,
      title: "Virtual PPA",
      description: "Financial agreements for renewable energy certificates and environmental attributes",
      features: ["Renewable Certificates", "Carbon Credits", "Financial Settlement", "Market Access"]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Lower electricity costs compared to grid tariffs with predictable pricing"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Transfer operational and technical risks to experienced RESCO partners"
    },
    {
      icon: TrendingUp,
      title: "Performance Guarantee",
      description: "Assured power generation and performance levels with penalty clauses"
    },
    {
      icon: Award,
      title: "Expert Management",
      description: "Professional management by experienced solar energy specialists"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Feasibility Assessment",
      description: "Detailed analysis of energy requirements and site conditions"
    },
    {
      step: "2", 
      title: "Proposal Design",
      description: "Customized RESCO/PPA solution with commercial terms"
    },
    {
      step: "3",
      title: "Agreement Signing",
      description: "Finalization and execution of power purchase agreements"
    },
    {
      step: "4",
      title: "Implementation",
      description: "Solar plant installation and commissioning"
    },
    {
      step: "5",
      title: "Operations",
      description: "Ongoing management and maintenance services"
    },
    {
      step: "6",
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization of plant performance"
    }
  ];

  const projects = [
    {
      name: "25MW Rooftop PPA - Bangalore",
      type: "PPA Project",
      capacity: "25MW",
      duration: "25 years",
      description: "Long-term power purchase agreement for commercial complex",
      savings: "40% cost reduction"
    },
    {
      name: "10MW RESCO - Hyderabad",
      type: "RESCO Project", 
      capacity: "10MW",
      duration: "O&M Contract",
      description: "Complete operations and maintenance for industrial solar plant",
      savings: "35% O&M cost optimization"
    },
    {
      name: "50MW Virtual PPA - Mumbai",
      type: "Virtual PPA",
      capacity: "50MW",
      duration: "10 years",
      description: "Virtual PPA for renewable energy certification",
      savings: "Carbon neutrality achieved"
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vnb-purple/5 via-white to-vnb-pink/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-purple/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/services/solar"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-purple transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Solar Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
              <DollarSign className="w-4 h-4" />
              RESCO/PPA Projects
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Renewable Energy{" "}
              <span className="text-gradient-primary">Service Models</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              VNB Solar offers innovative Renewable Energy Service Company (RESCO) models and 
              Power Purchase Agreements (PPA) that enable businesses to adopt solar energy 
              without upfront investment. We handle everything from installation to maintenance 
              while you enjoy clean, affordable power.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Explore PPA Options
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white text-vnb-purple border-2 border-vnb-purple rounded-lg font-semibold hover:bg-vnb-purple hover:text-white transition-all"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESCO Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              RESCO Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive renewable energy service company solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rescoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-vnb-purple/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-purple to-vnb-pink rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-vnb-purple flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PPA Models */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Power Purchase Agreement Models
            </h2>
            <p className="text-lg text-gray-600">
              Flexible PPA structures to meet diverse energy requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ppaModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-vnb-pink/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-pink to-vnb-purple rounded-2xl flex items-center justify-center mb-6">
                  <model.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{model.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-vnb-pink flex-shrink-0" />
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
              Why Choose RESCO/PPA?
            </h2>
            <p className="text-lg text-gray-600">
              Advantages of renewable energy service models
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
                <div className="w-16 h-16 bg-gradient-to-br from-vnb-purple to-vnb-pink rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple and transparent RESCO/PPA implementation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-vnb-purple/20 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-vnb-purple to-vnb-pink rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Successful RESCO/PPA Projects
            </h2>
            <p className="text-lg text-gray-600">
              Proven track record in renewable energy service models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-vnb-purple/20 to-vnb-pink/20 flex items-center justify-center">
                  <DollarSign className="w-16 h-16 text-vnb-purple" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-vnb-purple bg-vnb-purple/10 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                    <span className="text-sm font-bold text-vnb-pink">{project.capacity}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-green-600">{project.savings}</span>
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
            className="bg-gradient-to-br from-vnb-purple to-vnb-pink rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Go Solar with Zero Investment
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let VNB Solar handle the investment while you enjoy clean, affordable energy 
              through our RESCO and PPA models.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-vnb-purple rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
