"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Monitor, Sun, Tablet } from "lucide-react";

const verticals = [
  {
    icon: Monitor,
    title: "VNB Technologies",
    subtitle: "IT Consulting & Solutions",
    description: "Comprehensive IT consulting services, cloud solutions, software development, and digital transformation strategies for modern businesses.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&auto=format&q=80",
    link: "https://vnbtech.com",
    color: "from-blue-600 to-cyan-600",
    features: ["Cloud Solutions", "Software Development", "IT Consulting", "Digital Transformation"]
  },
  {
    icon: Sun,
    title: "VNB Solar",
    subtitle: "Sustainable Energy Solutions",
    description: "Leading provider of solar energy solutions, from residential installations to large-scale commercial projects with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop&auto=format&q=80",
    link: "https://vnbsolar.com",
    color: "from-orange-600 to-yellow-600",
    features: ["Solar Installation", "Energy Storage", "Monitoring Systems", "Maintenance"]
  },
  {
    icon: Tablet,
    title: "VNB Interactive",
    subtitle: "Interactive Technology",
    description: "Innovative interactive display solutions, smart boards, and digital collaboration tools for education and corporate environments.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format&q=80",
    link: "https://vnb.in",
    color: "from-purple-600 to-pink-600",
    features: ["Interactive Displays", "Smart Boards", "Digital Signage", "Collaboration Tools"]
  },
];

export default function VNBVerticalsShowcase() {
  return (
    <section id="verticals" className="py-24 bg-white">
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
            Our Business Verticals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three specialized divisions delivering excellence across technology, energy, and interactive solutions
          </p>
        </motion.div>

        {/* Verticals Grid */}
        <div className="space-y-32">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl blur-xl" 
                    style={{
                      background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      backgroundImage: `linear-gradient(to right, ${vertical.color.split(' ')[1]}, ${vertical.color.split(' ')[3]})`
                    }}
                  />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={vertical.image}
                      alt={vertical.title}
                      width={1200}
                      height={800}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${vertical.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                        <vertical.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block mb-4">
                    <span className={`text-sm font-semibold uppercase tracking-wider bg-gradient-to-r ${vertical.color} bg-clip-text text-transparent`}>
                      {vertical.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {vertical.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {vertical.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {vertical.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${vertical.color} rounded-full`} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={vertical.link}
                    target="_blank"
                    className={`group inline-flex items-center gap-3 bg-gradient-to-r ${vertical.color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    <span>Visit {vertical.title.split(' ')[1]}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
