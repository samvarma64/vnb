"use client";

import { motion } from "framer-motion";
import { Eye, Lock, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
                Legal & Privacy
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Privacy <span className="text-gradient-primary">Policy</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your privacy is important to us. This policy explains how we
                collect, use, and protect your information.
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
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At VNB India, we are committed to protecting your privacy and
                  ensuring the security of your personal information. This
                  Privacy Policy outlines our practices regarding the
                  collection, use, and disclosure of your data when you use our
                  website and services.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  By using VNB India&apos;s services, you agree to the
                  collection and use of information in accordance with this
                  policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-vnb-blue/10 rounded-xl flex items-center justify-center text-vnb-blue">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Personal Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Name and contact details</li>
                      <li>Email address and phone number</li>
                      <li>Company information and job title</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Technical Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Cookies and usage data</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-vnb-blue/10 rounded-xl flex items-center justify-center text-vnb-blue">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    How We Use Your Information
                  </h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>To provide and maintain our services</li>
                  <li>To respond to your inquiries and requests</li>
                  <li>To send you technical notices and support messages</li>
                  <li>
                    To communicate about products, services, and promotional
                    offers
                  </li>
                  <li>To monitor and analyze trends and usage</li>
                  <li>To detect, prevent, and address technical issues</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-vnb-blue/10 rounded-xl flex items-center justify-center text-vnb-blue">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Data Protection
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. These include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers for data storage</li>
                  <li>Regular security audits and updates</li>
                  <li>Restricted access to personal data</li>
                  <li>Employee training on privacy practices</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Privacy Rights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of the data we hold about you</li>
                  <li>Object to processing of your information</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Email:</strong> privacy@vnbindia.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 80 1234 5678
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Tech Park, Bangalore,
                    Karnataka 560001, India
                  </p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  This Privacy Policy was last updated on{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  .
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
