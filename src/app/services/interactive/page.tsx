"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Monitor,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";

export default function InteractiveServicesPage() {
  const benefits = [
    {
      icon: Monitor,
      title: "Latest Technology",
      desc: "State-of-the-art interactive panels",
    },
    {
      icon: Users,
      title: "10K+ Students",
      desc: "Impacting education nationwide",
    },
    {
      icon: TrendingUp,
      title: "95% Satisfaction",
      desc: "Highly rated by educators",
    },
    { icon: Award, title: "50+ Schools", desc: "Trusted by institutions" },
  ];

  const services = [
    "Interactive Panel Installation",
    "Smart Classroom Solutions",
    "Digital Learning Platforms",
    "Teacher Training Programs",
    "Content Development",
    "Technical Support & Maintenance",
    "Educational Software Integration",
    "Custom Interactive Solutions",
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="relative py-20 bg-gradient-to-br from-vnb-purple/5 via-white to-vnb-pink/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-purple/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-purple transition-colors mb-8 "
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-purple bg-vnb-purple/5 rounded-full border border-vnb-purple/10">
              <Monitor className="w-4 h-4" />
              Interactive Technology
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Revolutionize Learning with{" "}
              <span className="text-gradient-primary">Interactive Tech</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              VNB Interactive brings cutting-edge technology to classrooms,
              creating engaging and effective learning experiences for students
              and educators.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-vnb-purple to-vnb-pink text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all "
              >
                Request Demo
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-lg font-semibold hover:border-vnb-purple transition-all "
              >
                Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop&q=80"
              alt="Interactive Technology"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Transforming 50+ Classrooms
              </h2>
              <p className="text-white/90">
                Empowering educators and engaging students nationwide
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose VNB Interactive?
            </h2>
            <p className="text-lg text-gray-600">
              Proven solutions for modern education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-vnb-purple/20 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-vnb-purple to-vnb-pink rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Our Interactive Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-vnb-purple/20 hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-vnb-purple flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-vnb-purple to-vnb-pink rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Classroom?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a demo and see how interactive technology can enhance
              learning
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-vnb-purple rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all "
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
