"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "CEO, TechCorp India",
      company: "Fortune 500 Company",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
      rating: 5,
      text: "VNB India transformed our IT infrastructure completely. Their expertise in cloud migration and managed services is unmatched. We achieved 99.9% uptime and reduced costs by 40%.",
      category: "IT Services",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Director of Operations",
      company: "Green Energy Solutions",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      rating: 5,
      text: "The solar installation project was executed flawlessly. VNB Solar delivered on time, within budget, and exceeded our expectations. Our energy costs dropped by 60% in the first year.",
      category: "Solar Energy",
    },
    {
      id: 3,
      name: "Dr. Anand Reddy",
      role: "Principal",
      company: "Modern International School",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
      rating: 5,
      text: "VNB Interactive revolutionized our classrooms with state-of-the-art interactive panels. Student engagement increased dramatically, and teachers love the intuitive technology.",
      category: "Interactive Tech",
    },
    {
      id: 4,
      name: "Vikram Patel",
      role: "Facility Manager",
      company: "Residential Complex",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
      rating: 5,
      text: "Installing rooftop solar across our 200+ homes was seamless thanks to VNB. Professional service, quality equipment, and excellent after-sales support. Highly recommended!",
      category: "Solar Energy",
    },
    {
      id: 5,
      name: "Meera Iyer",
      role: "CTO",
      company: "FinTech Startup",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
      rating: 5,
      text: "Their CMMI Level 3 certified processes gave us confidence. VNB handled our entire digital transformation with professionalism and technical excellence. True partners in growth.",
      category: "IT Services",
    },
    {
      id: 6,
      name: "Suresh Babu",
      role: "Director",
      company: "Educational Institute",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&q=80",
      rating: 5,
      text: "The interactive learning ecosystem from VNB has been a game-changer. Our students are more engaged, and the technology integrates perfectly with our curriculum.",
      category: "Interactive Tech",
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
      id="testimonials"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Clean minimal background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-green/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-vnb-blue/5 to-transparent rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10"
          >
            Client Success Stories
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Trusted by{" "}
            <span className="text-gradient-primary">Industry Leaders</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Don&apos;t just take our word for it. Hear what our clients have to
            say about their experience working with VNB India.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-vnb-blue/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-vnb-blue" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-vnb-green text-vnb-green"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm ring-2 ring-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="inline-block px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full">
                  {testimonial.category}
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-vnb-blue to-vnb-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "1000+", label: "Projects Completed" },
            { number: "99.9%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
