"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Globe, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Pioneering cutting-edge solutions across all our verticals",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality in every project",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "Building lasting relationships with our clients and communities",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "Creating solutions that benefit both business and environment",
  },
];

export default function VNBGroupAbout() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        {/* Main About Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About VNB Group
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                VNB Group is a diversified technology and energy conglomerate
                with three specialized business verticals, each excelling in
                their respective domains.
              </p>
              <p>
                With over 15 years of combined experience, we&apos;ve
                established ourselves as trusted partners for businesses seeking
                innovative solutions in IT consulting, sustainable energy, and
                interactive technology.
              </p>
              <p>
                Our integrated approach allows us to deliver comprehensive
                solutions that address the evolving needs of modern
                organizations, from digital transformation to sustainable energy
                adoption and collaborative technology implementation.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  1000+
                </div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&auto=format&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop&auto=format&q=80"
                    alt="Modern office"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&auto=format&q=80"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&auto=format&q=80"
                    alt="Technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do across all our business
            verticals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
