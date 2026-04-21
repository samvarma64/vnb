"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Factory, GraduationCap, Hospital, ShoppingBag, Zap } from "lucide-react";

const projects = [
  {
    icon: Building2,
    title: "Enterprise IT Solutions",
    category: "VNB Technologies",
    description: "Comprehensive digital transformation for Fortune 500 companies",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: Factory,
    title: "Industrial Solar Projects",
    category: "VNB Solar",
    description: "Large-scale solar installations powering manufacturing facilities",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop&auto=format&q=80",
    color: "from-orange-600 to-yellow-600"
  },
  {
    icon: GraduationCap,
    title: "Smart Education Systems",
    category: "VNB Interactive",
    description: "Interactive learning solutions for modern educational institutions",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&auto=format&q=80",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: Hospital,
    title: "Healthcare IT Infrastructure",
    category: "VNB Technologies",
    description: "Secure and scalable IT systems for healthcare providers",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&auto=format&q=80",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: ShoppingBag,
    title: "Commercial Solar Solutions",
    category: "VNB Solar",
    description: "Energy-efficient solar systems for retail and commercial spaces",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&auto=format&q=80",
    color: "from-orange-600 to-yellow-600"
  },
  {
    icon: Zap,
    title: "Corporate Collaboration Tools",
    category: "VNB Interactive",
    description: "Advanced interactive displays for modern workplaces",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&auto=format&q=80",
    color: "from-purple-600 to-pink-600"
  }
];

export default function VNBWorkShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Work Across Verticals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering exceptional results across technology, solar energy, and interactive solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`inline-block px-4 py-2 bg-gradient-to-r ${project.color} text-white text-sm font-semibold rounded-full`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Interested in learning more about our work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
