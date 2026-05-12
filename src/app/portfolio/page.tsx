"use client";

import { motion } from "framer-motion";
import { ExternalLink, Filter, Calendar, Eye } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", count: 6 },
    { name: "Solar Energy", count: 2 },
    { name: "Technology", count: 1 },
    { name: "Education", count: 2 },
    { name: "Infrastructure", count: 1 },
  ];

  const projects = [
    {
      id: 1,
      title: "Solar Power Plant Installation",
      category: "Solar Energy",
      description:
        "Complete setup of 5MW solar power plant for industrial client, reducing carbon footprint by 70%.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&q=80",
      date: "2024",
      client: "Major Industrial Group",
      tags: ["Solar Panels", "Energy Storage", "Grid Integration"],
      impact: "70% carbon reduction",
    },
    {
      id: 2,
      title: "Digital Transformation Platform",
      category: "Technology",
      description:
        "Enterprise-wide digital transformation implementing cloud solutions and automation.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
      date: "2024",
      client: "Financial Services Company",
      tags: ["Cloud Migration", "AI Integration", "Process Automation"],
      impact: "3x ROI in 18 months",
    },
    {
      id: 3,
      title: "Smart Classroom Implementation",
      category: "Education",
      description:
        "Deployment of interactive panels and digital learning solutions across 50 schools.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80",
      date: "2023",
      client: "State Education Department",
      tags: ["Interactive Panels", "Digital Content", "Teacher Training"],
      impact: "50,000+ students reached",
    },
    {
      id: 4,
      title: "Infrastructure Modernization",
      category: "Infrastructure",
      description:
        "Complete IT infrastructure overhaul for a leading manufacturing facility.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
      date: "2023",
      client: "Manufacturing Giant",
      tags: ["Network Upgrade", "Security Systems", "Data Centers"],
      impact: "99.9% uptime achieved",
    },
    {
      id: 5,
      title: "Rooftop Solar Solutions",
      category: "Solar Energy",
      description:
        "Residential and commercial rooftop solar installations across multiple cities.",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop&q=80",
      date: "2023",
      client: "Various Clients",
      tags: ["Rooftop Solar", "Net Metering", "Maintenance"],
      impact: "200+ homes powered",
    },
    {
      id: 6,
      title: "E-Learning Platform Development",
      category: "Education",
      description:
        "Custom e-learning platform with interactive content and assessment tools.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
      date: "2023",
      client: "Educational Institution",
      tags: ["LMS Development", "Content Creation", "Mobile App"],
      impact: "95% student satisfaction",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
                Our Portfolio
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Success{" "}
                <span className="bg-gradient-to-r from-vnb-green via-vnb-blue to-vnb-green bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
                  Stories
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our portfolio of successful projects that have
                transformed businesses and contributed to sustainable
                development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all  ${
                    selectedCategory === category.name
                      ? "bg-vnb-green text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  {category.name}
                  <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-vnb-blue/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-vnb-blue text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-vnb-blue hover:bg-white transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <span>•</span>
                      <span>{project.client}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-vnb-blue transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Impact Metric */}
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-vnb-green/10 text-vnb-green rounded-lg">
                        <span className="text-sm font-semibold">
                          {project.impact}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* <div className="mt-auto">
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="inline-flex items-center gap-2 text-vnb-blue font-medium group-hover:gap-3 transition-all hover:text-vnb-blue/80"
                      >
                        <span>View Case Study</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div> */}
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-vnb-green to-vnb-blue">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s create something amazing together. Get in touch with
                our team to discuss your requirements.
              </p>
              <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors  shadow-lg">
                Start Your Project
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
