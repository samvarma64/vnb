"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-vnb-green/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="relative rounded-[40px] overflow-hidden shadow-[0_30px_70px_rgba(0,94,170,0.15)] bg-gradient-to-br from-vnb-blue to-blue-800 p-1">
                 <div className="bg-vnb-blue/90 backdrop-blur-sm p-12 text-white rounded-[39px]">
                    <h3 className="text-4xl font-black mb-8 leading-tight">A Decade of Driving <span className="text-vnb-green">Innovation</span></h3>
                    <p className="text-lg text-blue-100 leading-relaxed mb-10 font-medium">
                       Founded in 2010 as Host4Big Technologies, we have evolved into the VNB Group—a multi-disciplinary powerhouse across Information Technology, Sustainable Energy, and Interactive Education.
                    </p>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="glass-morphism p-6 rounded-3xl border-white/10">
                            <div className="text-5xl font-black mb-1">10+</div>
                            <div className="text-blue-200 text-xs font-bold uppercase tracking-widest">Years Experience</div>
                        </div>
                        <div className="glass-morphism p-6 rounded-3xl border-white/10">
                            <div className="text-5xl font-black mb-1 text-vnb-green">CMMI</div>
                            <div className="text-blue-200 text-xs font-bold uppercase tracking-widest">Lvl 3 Certified</div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">One Group. <span className="text-vnb-blue">Unlimited</span> Solutions.</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At VNB Group, we believe in the synergy between technology and sustainability. Our mission is to provide businesses with the tools they need to thrive in a digital-first world while ensuring a cleaner, greener planet for future generations.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Customer-Centric Approach", desc: "Tailored solutions that align with your specific business goals and energy requirements.", color: "green" },
                { title: "CMMI Level 3 Quality", desc: "Our IT processes follow international standards for quality and reliability.", color: "blue" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-vnb-${item.color}/10 flex items-center justify-center text-vnb-${item.color}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
