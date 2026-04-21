"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const verticals = [
  {
    title: "VNB Technologies",
    description: "IT Consulting Services",
    link: "https://vnbtech.com",
    gradient: "from-blue-600 to-blue-800",
    hoverGradient: "from-blue-500 to-blue-700",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "VNB Solar",
    description: "Solar Energy Solutions",
    link: "https://vnbsolar.com",
    gradient: "from-yellow-500 to-orange-600",
    hoverGradient: "from-yellow-400 to-orange-500",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
  },
  {
    title: "VNB Interactive",
    description: "Interactive Technology",
    link: "https://vnb.in",
    gradient: "from-purple-600 to-purple-800",
    hoverGradient: "from-purple-500 to-purple-700",
    image:
      "https://images.unsplash.com/photo-1599508644512-2dfc872d29b1?w=600&h=400&fit=crop",
  },
];

export default function VNBVisualGrid() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>(
    {},
  );

  const handleImageError = (title: string) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <section id="verticals" className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        {/* Simple Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Companies
          </h2>
        </motion.div>

        {/* Visual Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                href={vertical.link}
                target="_blank"
                className="block h-full"
              >
                <div
                  className={`relative h-96 rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {!imageErrors[vertical.title] ? (
                      <Image
                        src={vertical.image}
                        alt={vertical.title}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(vertical.title)}
                      />
                    ) : null}
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${vertical.gradient} opacity-90`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {vertical.title}
                      </h3>
                      <p className="text-xl text-white/80">
                        {vertical.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">
                        Visit Website
                      </span>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${vertical.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Images Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
              alt="Technology Innovation"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=200&fit=crop"
              alt="Solar Panels"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop"
              alt="Interactive Display"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>

        {/* Simple Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-600 mb-4">Leadership with Trust</p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <span>15+ Years of Excellence</span>
            <span>•</span>
            <span>1000+ Happy Clients</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
