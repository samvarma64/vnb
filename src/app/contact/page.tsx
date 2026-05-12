"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Car,
  Coffee,
  Wifi,
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
      details: [
        "A-49, Street-3, Lane-3, Prakashnagar, Begumpet",
        "Hyderabad – 500003, India",
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 8333 01 8333"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hello@vnb.in"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM"],
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

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-1 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Office Information Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Head Office
                      </h3>
                      <p className="text-sm text-gray-500">Hyderabad, India</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Address
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        A-49, Street-3, Lane-3, Prakashnagar, Begumpet
                        <br />
                        Hyderabad – 500003
                        <br />
                        Telangana, India
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Contact
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          <span className="font-medium">Phone:</span> +91
                          8333018333
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Email:</span>{" "}
                          hello@vnb.in
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                    </div>

                    <div className="pt-4 space-y-3">
                      <a
                        href="tel:+918333018333"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Call Us
                      </a>
                      <a
                        href="mailto:hello@vnb.in"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Interactive Map */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[500px]">
                  <div className="relative h-full">
                    {/* Google Maps Embed */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4054988984!2d78.4697!3d17.4487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b0b0b0b0b0b%3A0x0!2sA-49%2C%20Street-3%2C%20Lane-3%2C%20Prakashnagar%2C%20Begumpet%2C%20Hyderabad%20%E2%80%93%20500003!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "500px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="VNB India Office Location"
                    />

                    {/* Map Overlay Controls */}
                    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2 space-y-2">
                      <button
                        onClick={() =>
                          window.open(
                            "https://maps.google.com/?q=A-49,+Street-3,+Lane-3,+Prakashnagar,+Begumpet,+Hyderabad,+500003",
                            "_blank",
                          )
                        }
                        className="block px-3 py-2 text-sm bg-vnb-blue text-white rounded hover:bg-vnb-blue/90 transition-colors"
                      >
                        Open in Google Maps
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://www.google.com/maps/dir/?api=1&destination=A-49,+Street-3,+Lane-3,+Prakashnagar,+Begumpet,+Hyderabad,+500003",
                            "_blank",
                          )
                        }
                        className="block px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                      >
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-vnb-blue/10 rounded-xl flex items-center justify-center text-vnb-blue mx-auto mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Parking Available
                </h4>
                <p className="text-sm text-gray-600">
                  Free parking for visitors
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-vnb-green/10 rounded-xl flex items-center justify-center text-vnb-green mx-auto mb-4">
                  <Coffee className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Refreshments
                </h4>
                <p className="text-sm text-gray-600">
                  Coffee and tea available
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-vnb-purple/10 rounded-xl flex items-center justify-center text-vnb-purple mx-auto mb-4">
                  <Wifi className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Free WiFi</h4>
                <p className="text-sm text-gray-600">
                  High-speed internet access
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
