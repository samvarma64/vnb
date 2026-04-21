"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink, Users, TrendingUp, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const portfolioData = {
  1: {
    title: "Solar Power Plant Installation",
    category: "Solar Energy",
    client: "Major Industrial Group",
    date: "2024",
    description: "Complete setup of 5MW solar power plant for industrial client, reducing carbon footprint by 70%.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop&q=80",
    tags: ["Solar Panels", "Energy Storage", "Grid Integration"],
    impact: "70% carbon reduction",
    overview: "We successfully designed and implemented a 5MW solar power plant for one of India's leading industrial manufacturers. This project involved comprehensive site assessment, custom solar panel arrangement, and seamless grid integration.",
    challenges: ["Limited roof space", "Strict safety regulations", "Tight deadline"],
    solutions: [
      "Utilized high-efficiency bifacial panels to maximize energy generation",
      "Implemented advanced safety monitoring systems",
      "Deployed modular construction techniques for faster installation"
    ],
    results: [
      { metric: "5MW", description: "Total installed capacity" },
      { metric: "70%", description: "Reduction in carbon footprint" },
      { metric: "25 years", description: "Project lifespan with maintenance" }
    ],
    testimonial: {
      quote: "VNB Power's expertise in solar energy solutions exceeded our expectations. The project was completed on time and has already shown significant cost savings.",
      author: "Chief Operating Officer",
      company: "Major Industrial Group"
    }
  },
  2: {
    title: "Digital Transformation Platform",
    category: "Technology",
    client: "Financial Services Company",
    date: "2024",
    description: "Enterprise-wide digital transformation implementing cloud solutions and automation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=80",
    tags: ["Cloud Migration", "AI Integration", "Process Automation"],
    impact: "3x ROI in 18 months",
    overview: "Led a comprehensive digital transformation initiative for a major financial services firm, migrating legacy systems to cloud infrastructure and implementing AI-driven automation.",
    challenges: ["Data security concerns", "Legacy system dependencies", "Employee resistance to change"],
    solutions: [
      "Implemented zero-trust security architecture",
      "Phased migration strategy with minimal downtime",
      "Comprehensive training and change management program"
    ],
    results: [
      { metric: "3x", description: "Return on investment" },
      { metric: "60%", description: "Process automation achieved" },
      { metric: "99.9%", description: "System uptime" }
    ],
    testimonial: {
      quote: "The digital transformation has revolutionized our operations. We're now more efficient, secure, and ready for the future.",
      author: "CTO",
      company: "Financial Services Company"
    }
  },
  3: {
    title: "Smart Classroom Implementation",
    category: "Education",
    client: "State Education Department",
    date: "2023",
    description: "Deployment of interactive panels and digital learning solutions across 50 schools.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&q=80",
    tags: ["Interactive Panels", "Digital Content", "Teacher Training"],
    impact: "50,000+ students reached",
    overview: "Transformed traditional classrooms into modern learning environments by deploying interactive flat panels and comprehensive digital learning solutions across 50 government schools.",
    challenges: ["Budget constraints", "Teacher training needs", "Infrastructure limitations"],
    solutions: [
      "Phased implementation with priority to underserved areas",
      "Train-the-trainer program for sustainable knowledge transfer",
      "Hybrid cloud-based solution for minimal infrastructure requirements"
    ],
    results: [
      { metric: "50+", description: "Schools transformed" },
      { metric: "50,000+", description: "Students benefiting" },
      { metric: "85%", description: "Improvement in student engagement" }
    ],
    testimonial: {
      quote: "The smart classroom initiative has transformed how our students learn. Teachers are more engaged, and students are excited about education.",
      author: "Director of Education",
      company: "State Education Department"
    }
  },
  4: {
    title: "Infrastructure Modernization",
    category: "Infrastructure",
    client: "Manufacturing Giant",
    date: "2023",
    description: "Complete IT infrastructure overhaul for a leading manufacturing facility.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80",
    tags: ["Network Upgrade", "Security Systems", "Data Centers"],
    impact: "99.9% uptime achieved",
    overview: "Undertook a complete infrastructure modernization project for a major manufacturing facility, upgrading network systems, implementing advanced security, and building a state-of-the-art data center.",
    challenges: ["Zero-downtime requirement", "Complex legacy systems", "Harsh industrial environment"],
    solutions: [
      "Parallel infrastructure deployment for seamless cutover",
      "Custom industrial-grade hardware solutions",
      "Comprehensive disaster recovery planning"
    ],
    results: [
      { metric: "99.9%", description: "System uptime achieved" },
      { metric: "40%", description: "Reduction in maintenance costs" },
      { metric: "10Gbps", description: "Network speed upgrade" }
    ],
    testimonial: {
      quote: "The infrastructure upgrade has been game-changing. Our operations are more reliable and efficient than ever before.",
      author: "IT Director",
      company: "Manufacturing Giant"
    }
  },
  5: {
    title: "Rooftop Solar Solutions",
    category: "Solar Energy",
    client: "Various Clients",
    date: "2023",
    description: "Residential and commercial rooftop solar installations across multiple cities.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop&q=80",
    tags: ["Rooftop Solar", "Net Metering", "Maintenance"],
    impact: "200+ homes powered",
    overview: "Successfully executed a large-scale rooftop solar installation program across multiple cities, helping residential and commercial clients transition to clean energy.",
    challenges: ["Varied roof types", "Regulatory compliance", "Customer education"],
    solutions: [
      "Custom mounting solutions for different roof types",
      "Dedicated regulatory compliance team",
      "Comprehensive customer education and support program"
    ],
    results: [
      { metric: "200+", description: "Homes and businesses powered" },
      { metric: "40%", description: "Average energy cost savings" },
      { metric: "2.5MW", description: "Total capacity installed" }
    ],
    testimonial: {
      quote: "Going solar with VNB Power was the best decision. The process was smooth, and we're already seeing significant savings on our electricity bills.",
      author: "Multiple Clients",
      company: "Residential & Commercial"
    }
  },
  6: {
    title: "E-Learning Platform Development",
    category: "Education",
    client: "Educational Institution",
    date: "2023",
    description: "Custom e-learning platform with interactive content and assessment tools.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&q=80",
    tags: ["LMS Development", "Content Creation", "Mobile App"],
    impact: "95% student satisfaction",
    overview: "Developed a comprehensive e-learning platform featuring interactive content, real-time assessments, and mobile accessibility for a leading educational institution.",
    challenges: ["Scalability requirements", "Content migration", "User adoption"],
    solutions: [
      "Cloud-native architecture for infinite scalability",
      "Automated content migration tools",
      "Gamification elements to drive engagement"
    ],
    results: [
      { metric: "95%", description: "Student satisfaction rate" },
      { metric: "10K+", description: "Active users" },
      { metric: "24/7", description: "Platform availability" }
    ],
    testimonial: {
      quote: "The e-learning platform has transformed how we deliver education. Student engagement and outcomes have improved significantly.",
      author: "Principal",
      company: "Educational Institution"
    }
  }
};

export default function PortfolioCaseStudy({ params }: { params: { id: string } }) {
  const project = portfolioData[params.id as keyof typeof portfolioData];

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-vnb-blue font-medium hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
              
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                {project.category}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{project.date}</span>
                </div>
                <span>•</span>
                <span>{project.client}</span>
                <span>•</span>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-vnb-green/20 rounded-lg">
                  <span className="font-semibold">{project.impact}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.overview}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid md:grid-cols-2 gap-12 mb-16"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenges</h3>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-vnb-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solutions</h3>
                  <ul className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-vnb-green rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-16"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Results</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {project.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-vnb-blue mb-2">
                        {result.metric}
                      </div>
                      <div className="text-gray-600">
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonial</h3>
                <blockquote className="text-lg text-gray-600 italic mb-6">
                  "{project.testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
                  <div className="text-gray-500">{project.testimonial.company}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Projects</h2>
              <p className="text-gray-600">Explore more of our work in {project.category}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(portfolioData)
                .filter(([id, p]) => id !== params.id && p.category === project.category)
                .slice(0, 3)
                .map(([id, relatedProject]) => (
                  <Link
                    key={id}
                    href={`/portfolio/${id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-vnb-blue transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedProject.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-vnb-green to-vnb-blue">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Get in touch with our team to discuss your requirements.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
              >
                Start Your Project
                <ExternalLink className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
