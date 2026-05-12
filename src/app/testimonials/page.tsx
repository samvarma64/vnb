"use client";

import { motion } from "framer-motion";
import { Star, Quote, Building2, MapPin } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Solar Energy",
    "Technology",
    "Education",
    "Infrastructure",
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO",
      company: "TechCorp Industries",
      location: "Bangalore",
      category: "Technology",
      rating: 5,
      testimonial:
        "VNB India transformed our entire IT infrastructure. Their team's expertise in digital transformation helped us achieve 40% efficiency improvement. Truly professional and reliable partners.",
      project: "Digital Transformation Platform",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Director",
      company: "Green Energy Solutions",
      location: "Mumbai",
      category: "Solar Energy",
      rating: 5,
      testimonial:
        "The solar power plant installation was executed flawlessly. VNB team's attention to detail and technical excellence exceeded our expectations. We're now saving 70% on energy costs.",
      project: "5MW Solar Power Plant",
    },
    {
      id: 3,
      name: "Dr. Anand Patel",
      position: "Principal",
      company: "Delhi Public School",
      location: "New Delhi",
      category: "Education",
      rating: 5,
      testimonial:
        "Interactive panels and digital learning solutions have revolutionized our teaching methods. Student engagement has increased dramatically. Thank you, VNB India!",
      project: "Smart Classroom Implementation",
    },
    {
      id: 4,
      name: "Michael Chen",
      position: "Operations Head",
      company: "Global Manufacturing Co.",
      location: "Pune",
      category: "Infrastructure",
      rating: 5,
      testimonial:
        "Complete infrastructure modernization was handled with utmost professionalism. The team ensured zero downtime during the transition. Exceptional service!",
      project: "IT Infrastructure Overhaul",
    },
    {
      id: 5,
      name: "Sarah Williams",
      position: "CTO",
      company: "FinTech Solutions",
      location: "Hyderabad",
      category: "Technology",
      rating: 5,
      testimonial:
        "VNB's AI integration solutions have given us a competitive edge. Their innovative approach and technical prowess are unmatched. Highly recommended!",
      project: "AI Integration Platform",
    },
    {
      id: 6,
      name: "Amit Verma",
      position: "Managing Director",
      company: "EduCare Institutions",
      location: "Chennai",
      category: "Education",
      rating: 5,
      testimonial:
        "The custom e-learning platform developed by VNB has transformed our educational delivery. Students and teachers love the intuitive interface and rich features.",
      project: "E-Learning Platform",
    },
  ];

  const filteredTestimonials =
    filter === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === filter);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

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
                Client Testimonials
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                What Our{" "}
                <span className="text-gradient-primary">Clients Say</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hear from our valued clients about their experience working with
                VNB India and how we've helped them achieve their goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  98%
                </div>
                <div className="text-gray-600 font-medium">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  5.0
                </div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  10+
                </div>
                <div className="text-gray-600 font-medium">Years of Trust</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all  ${
                    filter === category
                      ? "bg-vnb-blue text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-vnb-blue/20" />
                    <p className="text-gray-700 leading-relaxed pl-6 italic">
                      {testimonial.testimonial}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">
                          {testimonial.position}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Building2 className="w-3 h-3" />
                          <span>{testimonial.company}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="px-3 py-1 bg-vnb-blue/10 text-vnb-blue text-xs font-semibold rounded-full">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredTestimonials.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  No testimonials found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-vnb-blue to-vnb-purple">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Happy Clients
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Experience the same excellence that our clients rave about.
                Let's discuss how we can help transform your business.
              </p>
              <button className="px-8 py-4 bg-white text-vnb-blue font-semibold rounded-xl hover:bg-gray-50 transition-colors ">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
