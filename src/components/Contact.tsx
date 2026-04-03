"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Get In Touch</h2>
          <p className="text-gray-600">
            Have a project in mind or need expert advice? Our team is ready to help you reach your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
              <div className="space-y-6">
                {[
                  { city: "Hyderabad (HQ)", addr: "A-49, Street-3, Lane-3, Prakashnagar, Begumpet, Hyderabad – 500003", color: "blue" },
                  { city: "Vijayawada (Solar)", addr: "1st Floor, Sri Babu Sadan, Plot No. 66, Gurunanak Nagar, Vijayawada – 520008", color: "green" },
                  { city: "Gurugram", addr: "6, K-5A Rd, DLF Phase 2, Sector 25, Gurugram, Haryana – 122002", color: "blue" }
                ].map((office, i) => (
                  <div key={i} className="flex gap-4 group">
                    <MapPin className={`text-vnb-${office.color} flex-shrink-0 transition-transform group-hover:scale-125`} />
                    <div>
                      <h4 className="font-bold text-gray-900">{office.city}</h4>
                      <p className="text-gray-600 text-sm">{office.addr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-vnb-blue" size={20} />
                <span className="text-gray-700 font-medium">+91 8333 01 8333 / +91 040 35175686</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-vnb-blue" size={20} />
                <span className="text-gray-700 font-medium">hello@vnb.in</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form className="bg-gray-50 p-8 rounded-3xl space-y-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">FullName</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border-transparent bg-white focus:ring-2 focus:ring-vnb-blue focus:bg-white outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border-transparent bg-white focus:ring-2 focus:ring-vnb-blue focus:bg-white outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border-transparent bg-white focus:ring-2 focus:ring-vnb-blue focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                  <option>Solar Solutions</option>
                  <option>IT Consulting & Managed Services</option>
                  <option>Interactive Panels</option>
                  <option>Other Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border-transparent bg-white focus:ring-2 focus:ring-vnb-blue focus:bg-white outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full py-4 bg-vnb-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
