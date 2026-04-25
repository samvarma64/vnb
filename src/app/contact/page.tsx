"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      service: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      details: ["123 Tech Park, Bangalore", "Karnataka 560001, India"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 80 1234 5678", "+91 80 8765 4321"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@vnbgroup.com", "support@vnbgroup.com"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    },
  ];

  const supportOptions = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      available: "24/7 Available",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Call Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      available: "Mon-Sat, 9AM-7PM",
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Help Center",
      description: "Find answers to common questions",
      action: "Browse FAQs",
      available: "Always Available",
    },
  ];

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
                Get In Touch
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Contact <span className="text-gradient-primary">Us</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have a question or need assistance? Our team is here to help.
                Reach out to us through any of the channels below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-vnb-blue/10 rounded-2xl flex items-center justify-center text-vnb-blue mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Support Options */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send us a{" "}
                  <span className="text-gradient-primary">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-vnb-blue focus:ring-2 focus:ring-vnb-blue/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-vnb-blue focus:ring-2 focus:ring-vnb-blue/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-vnb-blue focus:ring-2 focus:ring-vnb-blue/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-vnb-blue focus:ring-2 focus:ring-vnb-blue/20 outline-none transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="solar">Solar Energy Solutions</option>
                        <option value="tech">Technology Services</option>
                        <option value="education">Education Technology</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-vnb-blue focus:ring-2 focus:ring-vnb-blue/20 outline-none transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-vnb-blue focus:ring-2 focus:ring-vnb-blue/20 outline-none transition-all resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white font-semibold rounded-xl hover:shadow-lg transition-all "
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Support Options */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Other Ways to{" "}
                  <span className="text-gradient-primary">Connect</span>
                </h2>

                <div className="space-y-6">
                  {supportOptions.map((option, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors "
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-vnb-blue shadow-sm">
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1">
                            {option.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {option.description}
                          </p>
                          <p className="text-xs text-vnb-blue font-medium mb-3">
                            {option.available}
                          </p>
                          <button className="text-vnb-blue font-semibold text-sm hover:underline">
                            {option.action} →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="mt-12 p-6 bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-2xl text-white">
                  <h3 className="font-bold text-xl mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a href="/about" className="block hover:underline">
                      About VNB Group
                    </a>
                    <a href="/portfolio" className="block hover:underline">
                      View Our Portfolio
                    </a>
                    <a href="/testimonials" className="block hover:underline">
                      Client Testimonials
                    </a>
                    <a href="/blog" className="block hover:underline">
                      Latest Updates
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our <span className="text-gradient-primary">Office</span>
              </h2>
              <p className="text-lg text-gray-600">
                Stop by for a cup of coffee and discuss your project ideas
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-vnb-blue/20 to-vnb-purple/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-vnb-blue mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">
                    123 Tech Park, Bangalore
                  </p>
                  <p className="text-gray-600">Karnataka 560001, India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
