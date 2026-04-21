"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Solar Farm Installation",
      category: "Solar Energy",
      description:
        "500MW solar installation across multiple sites in Andhra Pradesh",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&q=80",
      stats: { capacity: "500MW", area: "2000 acres", impact: "Clean Energy" },
      color: "green",
    },
    {
      id: 2,
      title: "Enterprise Cloud Migration",
      category: "IT Services",
      description:
        "Complete cloud infrastructure setup for Fortune 500 company",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80",
      stats: { scale: "Enterprise", duration: "6 months", team: "15+ experts" },
      color: "blue",
    },
    {
      id: 3,
      title: "Smart Campus Solution",
      category: "Interactive Tech",
      description:
        "Interactive panels and digital infrastructure for 50+ classrooms",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80",
      stats: { panels: "50+", reach: "5000+ students", tech: "Latest" },
      color: "purple",
    },
    {
      id: 4,
      title: "Rooftop Solar Network",
      category: "Solar Energy",
      description:
        "Residential solar installations across Hyderabad metro area",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop&q=80",
      stats: { homes: "200+", capacity: "50MW", savings: "40%" },
      color: "green",
    },
    {
      id: 5,
      title: "Digital Transformation",
      category: "IT Services",
      description:
        "End-to-end IT consulting and managed services implementation",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&q=80",
      stats: { clients: "50+", uptime: "99.9%", support: "24/7" },
      color: "blue",
    },
    {
      id: 6,
      title: "Education Tech Suite",
      category: "Interactive Tech",
      description:
        "Complete interactive learning ecosystem for educational institutions",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80",
      stats: { schools: "25+", students: "10K+", satisfaction: "95%" },
      color: "purple",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="portfolio"
      className="relative py-32 bg-gray-50 overflow-hidden"
    >
      {/* Clean minimal background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-vnb-purple/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-vnb-blue/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10"
          >
            Our Work
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Portfolio of{" "}
            <span className="text-gradient-primary">Excellence</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how we&apos;ve helped businesses and communities achieve
            their goals with innovative solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 text-white/40 text-5xl font-bold">
                  {String(project.id).padStart(2, "0")}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    project.color === "green"
                      ? "bg-vnb-green/10 text-vnb-green"
                      : project.color === "blue"
                        ? "bg-vnb-blue/10 text-vnb-blue"
                        : "bg-vnb-purple/10 text-vnb-purple"
                  }`}
                >
                  {project.category}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-vnb-blue transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex flex-col bg-gray-50 rounded-lg px-3 py-2"
                    >
                      <span className="text-xs text-gray-500 capitalize">
                        {key}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Details Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-vnb-blue transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  project.color === "green"
                    ? "from-vnb-green to-vnb-blue"
                    : project.color === "blue"
                      ? "from-vnb-blue to-vnb-purple"
                      : "from-vnb-purple to-vnb-pink"
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
