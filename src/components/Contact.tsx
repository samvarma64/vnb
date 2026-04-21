"use client";

import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const offices = [
    {
      city: "Hyderabad (HQ)",
      addr: "A-49, Street-3, Lane-3, Prakashnagar, Begumpet, Hyderabad – 500003",
      color: "blue",
      phone: "+91 8333 01 8333",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
    {
      city: "Vijayawada (Solar)",
      addr: "1st Floor, Sri Babu Sadan, Plot No. 66, Gurunanak Nagar, Vijayawada – 520008",
      color: "green",
      phone: "+91 8333 01 8333",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
    {
      city: "Gurugram",
      addr: "6, K-5A Rd, DLF Phase 2, Sector 25, Gurugram, Haryana – 122002",
      color: "blue",
      phone: "+91 8333 01 8333",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-white overflow-hidden">
      {/* Clean minimal background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-vnb-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-vnb-green/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10"
          >
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Let's Build{" "}
            <span className="text-gradient-primary">Something Great</span>{" "}
            Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind or need expert advice? Our team is ready to
            help you reach your goals with innovative solutions tailored to your
            needs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Our Offices
              </h3>
              <div className="space-y-6">
                {offices.map((office, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-vnb-blue/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                          office.color === "blue"
                            ? "from-vnb-blue to-vnb-purple"
                            : "from-vnb-green to-vnb-blue"
                        } flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}
                      >
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-2">
                          {office.city}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {office.addr}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Phone className="w-4 h-4" />
                            <span>{office.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                          <Clock className="w-4 h-4" />
                          <span>{office.timing}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect line */}
                    <div
                      className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r ${
                        office.color === "blue"
                          ? "from-vnb-blue to-vnb-purple"
                          : "from-vnb-green to-vnb-blue"
                      } w-0 group-hover:w-full transition-all duration-500 rounded-full`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-vnb-blue/5 to-vnb-green/5 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vnb-blue to-vnb-green flex items-center justify-center text-white shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600 text-sm">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
              <a
                href="mailto:hello@vnb.in"
                className="text-vnb-blue font-semibold hover:text-vnb-green transition-colors"
              >
                hello@vnb.in
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <form className="relative bg-white p-10 rounded-2xl space-y-6 border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">
                  Send us a message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-vnb-blue focus:ring-2 focus:ring-vnb-blue/20 outline-none transition-all placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-vnb-blue focus:ring-2 focus:ring-vnb-blue/20 outline-none transition-all placeholder-gray-400"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Service of Interest
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-vnb-blue focus:ring-2 focus:ring-vnb-blue/20 outline-none transition-all appearance-none cursor-pointer">
                    <option>Solar Solutions</option>
                    <option>IT Consulting & Managed Services</option>
                    <option>Interactive Panels</option>
                    <option>Other Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-vnb-blue focus:ring-2 focus:ring-vnb-blue/20 outline-none transition-all resize-none placeholder-gray-400"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-vnb-blue to-vnb-green text-white rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <Send
                    size={20}
                    className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-vnb-green to-vnb-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
