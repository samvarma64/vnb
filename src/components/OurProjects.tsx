"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Commercial Solar Farm",
    location: "California, USA",
    image:
      "https://images.unsplash.com/photo-1473341303618-f23b976281c5?w=1200&h=800&fit=crop",
  },
  {
    title: "Residential Solar Installation",
    location: "Texas, USA",
    image:
      "https://images.unsplash.com/photo-1589227365533-2b32cc76a7b5?w=1200&h=800&fit=crop",
  },
  {
    title: "Industrial Solar Solutions",
    location: "Nevada, USA",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop",
  },
  {
    title: "Community Solar Project",
    location: "Arizona, USA",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&h=800&fit=crop",
  },
];

export default function OurProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group "
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <div className="relative h-96">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200">{project.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
