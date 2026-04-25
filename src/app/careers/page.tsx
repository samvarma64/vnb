"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  GraduationCap,
  Heart,
  Trophy,
  MapPin,
  Clock,
  DollarSign,
  Send,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = [
    "All",
    "Engineering",
    "Sales",
    "Marketing",
    "HR",
    "Operations",
    "Finance",
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teamwork",
      description: "Collaborate with talented professionals and grow together",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Learning",
      description: "Continuous learning opportunities and skill development",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness",
      description: "Comprehensive health benefits and work-life balance",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Growth",
      description: "Clear career path and advancement opportunities",
    },
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Health, dental, and vision insurance",
    "Flexible work arrangements",
    "Professional development budget",
    "Generous paid time off",
    "Retirement savings plan",
    "Employee wellness programs",
    "Modern office environment",
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹15-25 LPA",
      description:
        "We're looking for experienced software engineers to join our dynamic team.",
    },
    {
      id: 2,
      title: "Solar Energy Consultant",
      department: "Sales",
      location: "Mumbai",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹10-18 LPA",
      description: "Help clients transition to sustainable energy solutions.",
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Bangalore",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹12-20 LPA",
      description: "Lead our digital marketing efforts and brand presence.",
    },
    {
      id: 4,
      title: "HR Business Partner",
      department: "HR",
      location: "Bangalore",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹8-15 LPA",
      description: "Partner with business leaders to drive talent strategy.",
    },
    {
      id: 5,
      title: "Project Manager",
      department: "Operations",
      location: "Pune",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹14-22 LPA",
      description: "Manage complex projects and ensure successful delivery.",
    },
    {
      id: 6,
      title: "Financial Analyst",
      department: "Finance",
      location: "Bangalore",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹7-12 LPA",
      description: "Analyze financial data and support strategic decisions.",
    },
  ];

  const filteredJobs =
    selectedDepartment === "All"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === selectedDepartment);

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
                Join Our Team
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Build Your <span className="text-gradient-primary">Career</span>{" "}
                at VNB
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Be part of a team that&apos;s shaping the future of technology
                and renewable energy. Discover opportunities to grow, innovate,
                and make an impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work <span className="text-gradient-primary">With Us</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We foster a culture of innovation, collaboration, and continuous
                growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-vnb-blue/10 rounded-2xl flex items-center justify-center text-vnb-blue mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Perks &{" "}
                  <span className="text-gradient-primary">Benefits</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-vnb-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-3xl p-1">
                  <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                    <Heart className="w-32 h-32 text-vnb-blue" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current <span className="text-gradient-primary">Openings</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find the perfect opportunity to match your skills and
                aspirations
              </p>
            </motion.div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all  ${
                    selectedDepartment === dept
                      ? "bg-vnb-blue text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="space-y-6 max-w-4xl mx-auto">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 px-6 py-3 bg-vnb-blue text-white font-semibold rounded-xl hover:bg-vnb-blue/90 transition-colors  whitespace-nowrap"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  No openings found in this department.
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
                Don&apos;t See the Right Fit?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals. Send us your
                resume and we&apos;ll keep you in mind for future opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-vnb-blue font-semibold rounded-xl hover:bg-gray-50 transition-colors "
              >
                <Send className="w-5 h-5" />
                Send Resume
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
