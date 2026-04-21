"use client";

import { motion } from "framer-motion";
import { FileText, AlertCircle, CheckCircle, Gavel } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
                Legal Terms
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Terms of <span className="text-gradient-primary">Service</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These terms govern your use of VNB Group&apos;s website and services. 
                By accessing our services, you agree to be bound by these terms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Acceptance of Terms */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-vnb-blue/10 rounded-xl flex items-center justify-center text-vnb-blue">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Acceptance of Terms
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using VNB Group&apos;s website and services, you accept and agree 
                  to be bound by the terms and provision of this agreement. If you do not agree 
                  to abide by the above, please do not use this service.
                </p>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Description of Services
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  VNB Group provides the following services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Solar energy solutions and installations</li>
                  <li>Technology consulting and digital transformation</li>
                  <li>Interactive education technology solutions</li>
                  <li>IT infrastructure and support services</li>
                  <li>Professional consulting and advisory services</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-vnb-blue/10 rounded-xl flex items-center justify-center text-vnb-blue">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    User Responsibilities
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Provide accurate and complete information</li>
                  <li>Use the services for lawful purposes only</li>
                  <li>Not attempt to gain unauthorized access</li>
                  <li>Not interfere with or disrupt the service</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain confidentiality of account credentials</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All content, trademarks, service marks, logos, and other intellectual property 
                  displayed on the VNB Group website are the property of VNB Group or its licensors. 
                  You may not use, copy, reproduce, or distribute any of these materials without 
                  prior written consent.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Any feedback, suggestions, or ideas you provide to VNB Group shall become our 
                  property and may be used to improve our services.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-vnb-blue/10 rounded-xl flex items-center justify-center text-vnb-blue">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Limitation of Liability
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  VNB Group shall not be liable for any indirect, incidental, special, or 
                  consequential damages resulting from your use of our services. Our total 
                  liability to you for all claims shall not exceed the amount paid by you, 
                  if any, for accessing our services.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Termination
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  VNB Group reserves the right to terminate or suspend your access to our 
                  services at any time, without prior notice or liability, for any reason 
                  whatsoever, including without limitation if you breach the Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-vnb-blue/10 rounded-xl flex items-center justify-center text-vnb-blue">
                    <Gavel className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Governing Law
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of India, 
                  without regard to its conflict of law provisions. Any disputes arising 
                  from these terms shall be subject to the exclusive jurisdiction of 
                  the courts in Bangalore, India.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Changes to Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  VNB Group reserves the right to modify these terms at any time. 
                  We will notify users of any changes by posting the new terms on 
                  this page. Your continued use of our services after such changes 
                  constitutes acceptance of the new terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> legal@vnbgroup.com</p>
                  <p><strong>Phone:</strong> +91 80 1234 5678</p>
                  <p><strong>Address:</strong> 123 Tech Park, Bangalore, Karnataka 560001, India</p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  These Terms of Service were last updated on {new Date().toLocaleDateString("en-US", { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}.
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
