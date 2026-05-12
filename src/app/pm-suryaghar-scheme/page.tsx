"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sun,
  CheckCircle,
  IndianRupee,
  Home,
  Zap,
  Shield,
  FileText,
  X,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function PMSuryagharSchemePage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    electricityBill: "",
    rooftopArea: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const message = encodeURIComponent(
      `🌞 PM Suryaghar Scheme Application\n\n` +
        `📝 *Applicant Details:*\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📱 *Phone:* ${formData.phone}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📍 *State:* ${formData.state}\n` +
        `🏙️ *City:* ${formData.city}\n` +
        `💡 *Monthly Electricity Bill:* ₹${formData.electricityBill}\n` +
        `🏠 *Rooftop Area:* ${formData.rooftopArea} sq. ft.\n` +
        `💬 *Additional Message:* ${formData.message || "N/A"}\n\n` +
        `*Submitted via VNB PM Suryaghar Scheme Form*`,
    );

    // WhatsApp number (replace with your actual number)
    const whatsappNumber = "918333018333";

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    // Close modal after submission
    closeModal();

    // Optional: Show success message or redirect
    console.log("Form submitted to WhatsApp:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-vnb-orange/5 via-white to-vnb-yellow/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-vnb-orange/10 to-transparent rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
                  <Sun className="w-4 h-4" />
                  PM Suryaghar Scheme
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Government Solar{" "}
                  <span className="text-gradient-primary">Subsidy Scheme</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Get up to ₹78,000 government subsidy on rooftop solar
                  installation under PM Suryaghar Scheme. VNB helps you avail
                  this benefit with complete end-to-end support from application
                  to installation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openModal}
                    className="px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Apply for Subsidy
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&q=80"
                  alt="PM Suryaghar Scheme"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">PM Suryaghar Scheme</p>
                  <p className="text-sm text-white/80">
                    Government subsidy for rooftop solar
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
                Benefits
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose PM Suryaghar Scheme?
              </h2>
              <p className="text-lg text-gray-600">
                Transform your home into a solar-powered house with government
                support and significant financial benefits.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: IndianRupee,
                  title: "Up to ₹78,000 Subsidy",
                  desc: "Get substantial government subsidy based on your solar system capacity and state-specific rates.",
                },
                {
                  icon: Zap,
                  title: "Zero Electricity Bills",
                  desc: "Generate your own electricity and eliminate monthly electricity bills completely.",
                },
                {
                  icon: Home,
                  title: "Increase Property Value",
                  desc: "Solar installation significantly increases your property value and market appeal.",
                },
                {
                  icon: Shield,
                  title: "25-Year Warranty",
                  desc: "Long-term warranty on solar panels with reliable performance and maintenance support.",
                },
                {
                  icon: Zap,
                  title: "Quick ROI",
                  desc: "Return on investment within 3-4 years with lifetime savings on electricity.",
                },
                {
                  icon: FileText,
                  title: "Easy Documentation",
                  desc: "We handle all paperwork and documentation for subsidy application process.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-orange/20 hover:shadow-xl transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subsidy Details */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-orange bg-vnb-orange/5 rounded-full border border-vnb-orange/10">
                  Subsidy Structure
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Government Subsidy Details
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The PM Suryaghar Scheme provides different subsidy amounts
                  based on system capacity and consumer category. VNB helps you
                  maximize your subsidy benefits.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      category: "1-2 kW System",
                      subsidy: "₹30,000 to ₹60,000",
                      desc: "For residential consumers with smaller rooftop spaces",
                    },
                    {
                      category: "2-3 kW System",
                      subsidy: "₹60,000 to ₹78,000",
                      desc: "Most popular option for average Indian households",
                    },
                    {
                      category: "Above 3 kW",
                      subsidy: "₹78,000 fixed",
                      desc: "Maximum subsidy cap for larger installations",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-vnb-orange/5 rounded-2xl p-5 border border-vnb-orange/10"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">
                          {item.category}
                        </h4>
                        <span className="text-lg font-bold text-vnb-orange">
                          {item.subsidy}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Check Eligibility</span>
                  <CheckCircle className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop&q=80"
                  alt="Solar Subsidy Benefits"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Solar Subsidy Benefits</p>
                  <p className="text-sm text-white/80">
                    Save money with government support
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-green bg-vnb-green/5 rounded-full border border-vnb-green/10">
                Process
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple Application Process
              </h2>
              <p className="text-lg text-gray-600">
                VNB makes the PM Suryaghar Scheme application process
                hassle-free with expert guidance at every step.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Eligibility Check",
                  desc: "We verify your eligibility and calculate maximum subsidy amount you can avail.",
                },
                {
                  step: "02",
                  title: "Documentation",
                  desc: "Complete documentation support including electricity bills and property papers.",
                },
                {
                  step: "03",
                  title: "Application Submission",
                  desc: "We submit your application through the official government portal.",
                },
                {
                  step: "04",
                  title: "Installation & Commissioning",
                  desc: "Professional installation with net metering and subsidy claim processing.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-vnb-green/20 hover:shadow-xl transition-all text-center relative"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-vnb-green to-vnb-blue rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=800&h=600&fit=crop&q=80"
                  alt="Eligibility for PM Suryaghar"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Check Your Eligibility</p>
                  <p className="text-sm text-white/80">
                    Simple criteria for PM Suryaghar Scheme
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-vnb-blue bg-vnb-blue/5 rounded-full border border-vnb-blue/10">
                  Eligibility
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Eligibility Criteria
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Check if you qualify for the PM Suryaghar Scheme. Most Indian
                  households are eligible with basic requirements.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Indian residential property owner",
                    "Valid electricity connection",
                    "Rooftop with minimum shadow-free area",
                    "No existing solar subsidy availed",
                    "Aadhaar card and bank account",
                    "Latest electricity bill (6 months)",
                  ].map((criterion, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-vnb-blue flex-shrink-0" />
                      <span className="font-medium">{criterion}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vnb-blue to-vnb-purple text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Check Eligibility</span>
                  <CheckCircle className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-vnb-orange to-vnb-yellow rounded-3xl p-12 text-center text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your Solar Journey Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of Indians benefiting from PM Suryaghar Scheme.
                Get up to ₹78,000 subsidy and zero electricity bills.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="inline-block px-8 py-4 bg-white text-vnb-orange rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Apply for PM Suryaghar
                </button>
                <a
                  href="tel:+918333018333"
                  className="inline-block px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  Call +91 8333 01 8333
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lead Form Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4 pt-24 pb-8"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br bg-white rounded-3xl p-8 w-full max-w-xl mx-auto h-[85vh] overflow-y-auto relative border border-vnb-orange/10 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Apply for PM Suryaghar Scheme
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vnb-orange focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vnb-orange focus:border-transparent"
                      placeholder="Enter your phone number"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vnb-orange focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vnb-orange focus:border-transparent"
                      placeholder="Enter your state"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vnb-orange focus:border-transparent"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Electricity Bill (₹) *
                    </label>
                    <input
                      type="number"
                      name="electricityBill"
                      value={formData.electricityBill}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vnb-orange focus:border-transparent"
                      placeholder="Enter your monthly electricity bill"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rooftop Area (sq. ft.) *
                    </label>
                    <input
                      type="number"
                      name="rooftopArea"
                      value={formData.rooftopArea}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vnb-orange focus:border-transparent"
                      placeholder="Enter available rooftop area"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vnb-orange focus:border-transparent"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-vnb-orange to-vnb-yellow text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-8 py-4 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
