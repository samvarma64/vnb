"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SolarGraphics from "./SolarGraphics";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Moving Solar Graphics Background */}
      <SolarGraphics />

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-vnb-blue/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-vnb-green/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider uppercase text-vnb-green bg-vnb-green/10 rounded-full border border-vnb-green/20"
            >
              Innovation • Sustainability • Excellence
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-extrabold text-gray-900 leading-[1.1] mb-8 tracking-tighter"
            >
              The Power of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vnb-blue via-vnb-blue/80 to-vnb-green animate-gradient">Tomorrow</span> Today.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:ml-0"
            >
              VNB Group integrates world-class <span className="font-bold text-vnb-blue">IT Consulting</span> with premium <span className="font-bold text-vnb-green">Solar Energy</span> solutions and interactive technology. 
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#solar"
                className="px-10 py-5 bg-vnb-green text-white rounded-2xl font-black text-lg hover:bg-green-700 transition-all shadow-[0_20px_50px_rgba(40,167,69,0.2)] hover:shadow-green-500/40 transform hover:-translate-y-1"
              >
                VNB Solar
              </a>
              <a
                href="#tech"
                className="px-10 py-5 bg-vnb-blue text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-[0_20px_50px_rgba(0,94,170,0.2)] hover:shadow-blue-500/40 transform hover:-translate-y-1"
              >
                VNB Tech Services
              </a>
            </motion.div>
          </div>

          {/* Trendy Floating Asset */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-2/5 relative"
          >
            <div className="relative z-10 glass-morphism p-4 rounded-[40px] shadow-2xl animate-float">
               <Image
                  src="/hero-bg.png"
                  alt="VNB Innovation"
                  width={600}
                  height={600}
                  className="rounded-[32px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-vnb-green rounded-full flex items-center justify-center text-white">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.243a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM16.464 14.95a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707z"></path></svg>
                      </div>
                      <div>
                         <div className="text-2xl font-black text-gray-900">50MW+</div>
                         <div className="text-gray-500 text-sm font-bold uppercase">Solar Installed</div>
                      </div>
                   </div>
                </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-vnb-blue/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
