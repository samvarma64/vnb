"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Monitor, Sun, Tablet } from "lucide-react";

const projects = [
  {
    icon: Sun,
    category: "VNB Solar",
    title: "100MW Solar Installation",
    description: "Large-scale solar power project delivering clean energy",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    link: "/services/solar",
    stats: "100MW Capacity",
  },
  {
    icon: Monitor,
    category: "VNB Power",
    title: "Digital Transformation",
    description: "Complete IT infrastructure for manufacturing company",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "/services/power",
    stats: "500+ Employees",
  },
  {
    icon: Tablet,
    category: "VNB Interactive",
    title: "Smart Classrooms",
    description: "Interactive panels deployed across schools",
    image:
      "https://images.unsplash.com/photo-1599508644512-2dfc872d29b1?w=600&h=400&fit=crop",
    link: "/services/it-smart-services",
    stats: "100+ Schools",
  },
];

export default function VNBFeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories across all verticals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1">
                    <project.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
