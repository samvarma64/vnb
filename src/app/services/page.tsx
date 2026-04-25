"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sun, Cpu, Users, Zap, Shield, Globe, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      icon: <Sun className="w-10 h-10" />,
      title: "Energy Solutions",
      description:
        "Comprehensive solar power solutions for residential, commercial, and industrial clients. Reduce your carbon footprint and energy costs.",
      features: [
        "Solar Panel Installation",
        "Energy Storage Systems",
        "Net Metering",
        "Maintenance Services",
      ],
      link: "/services/solar-energy",
      gradient: "from-amber-400/20 to-orange-500/20",
      accent: "bg-orange-500",
      span: "lg:col-span-2 lg:row-span-2",
      img: "https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Technology Services",
      description:
        "Cutting-edge technology solutions including digital transformation and AI integration.",
      features: [
        "Digital Transformation",
        "Cloud Solutions",
        "AI & ML Integration",
      ],
      link: "/services/tech",
      gradient: "from-blue-400/20 to-indigo-500/20",
      accent: "bg-blue-600",
      span: "lg:col-span-2 lg:row-span-1",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Education Technology",
      description:
        "Interactive learning solutions and smart classroom implementations.",
      features: [
        "Interactive Panels",
        "E-Learning Platforms",
      ],
      link: "/services/interactive",
      gradient: "from-emerald-400/20 to-teal-500/20",
      accent: "bg-emerald-500",
      span: "lg:col-span-1 lg:row-span-1",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "IoT & Smart Systems",
      description:
        "Internet of Things implementations for smart environments.",
      features: [
        "Smart Automation",
        "Sensor Integration",
      ],
      link: "/services/interactive",
      gradient: "from-purple-400/20 to-fuchsia-500/20",
      accent: "bg-purple-600",
      span: "lg:col-span-1 lg:row-span-1",
      img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  const additionalServices = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Infrastructure",
      description: "End-to-end infrastructure setup and modernization.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect digital assets.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Strategy",
      description: "Consulting for long-term growth and innovation.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 noise-overlay">
        {/* Modern Hero Section */}
        <section className="relative py-32 overflow-hidden bg-[#020617]">
           {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-vnb-blue/20 rounded-full blur-[120px] animate-mesh" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-vnb-green/10 rounded-full blur-[120px] animate-mesh animation-delay-5000" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-vnb-blue bg-vnb-blue/5 border border-vnb-blue/20 rounded-full backdrop-blur-xl"
              >
                Comprehensive Expertise
              </motion.div>

              <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                Solutions that <br />
                <span className="text-gradient-primary">Define the Future</span>
              </h1>

              <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                From renewable energy systems to next-generation education technology, 
                we provide the building blocks for a smarter, more efficient world.
              </p>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Bento Services Grid */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col ${service.span}`}
                >
                  {/* Background Image with Hover Effect */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-0 group-hover:opacity-10 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>

                  <div className="relative z-10 p-12 flex flex-col h-full">
                    <div className={`w-16 h-16 rounded-2xl ${service.accent} flex items-center justify-center text-white mb-10 shadow-lg`}>
                      {service.icon}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight group-hover:text-vnb-blue transition-colors">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-md">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {service.features.map((feature, i) => (
                        <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-600 border border-gray-100 shadow-sm group-hover:border-vnb-blue/20 transition-colors">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-3 text-vnb-blue font-bold group/link"
                      >
                        Explore Service
                        <div className="w-10 h-10 rounded-full bg-vnb-blue/10 flex items-center justify-center group-hover/link:bg-vnb-blue group-hover/link:text-white transition-all">
                           <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sophisticated Additional Services */}
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-vnb-purple/10 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                  Extended <span className="text-vnb-green">Capabilities</span>
                </h2>
                <p className="text-slate-400 text-xl max-w-xl">
                  Leverage our specialized expertise to drive innovation across your entire organization.
                </p>
              </div>
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-bold">
                View Full Catalog
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-vnb-green/20 rounded-2xl flex items-center justify-center text-vnb-green mb-8 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-vnb-green group-hover:gap-4 transition-all">
                    Inquire Now <ExternalLink className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* High-Impact CTA */}
        <section className="py-40 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-vnb-blue to-vnb-purple p-1 lg:p-2 rounded-[4rem]"
            >
              <div className="bg-[#020617] rounded-[3.8rem] py-24 px-12 overflow-hidden relative">
                 {/* Background Accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-vnb-blue/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-vnb-purple/20 rounded-full blur-[80px]" />

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                  Ready to transform <br /> 
                  <span className="italic font-light">your</span> business?
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of organizations that have modernized their operations 
                  with our industry-leading solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link
                    href="/contact"
                    className="px-10 py-5 bg-vnb-blue text-white font-bold rounded-full hover:bg-vnb-blue/90 transition-all shadow-xl shadow-vnb-blue/20"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-10 py-5 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
}
