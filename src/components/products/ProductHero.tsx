"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductHero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden flex items-center bg-[#020617] noise-overlay">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-vnb-blue/20 rounded-full blur-[120px] animate-mesh" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-vnb-green/10 rounded-full blur-[120px] animate-mesh animation-delay-5000" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-vnb-purple/10 rounded-full blur-[120px] animate-mesh animation-delay-2000" />
      </div>

      {/* Background Image with subtle parallax effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
          alt="Advanced Technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/40 to-[#020617]" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-vnb-blue uppercase bg-vnb-blue/5 border border-vnb-blue/20 rounded-full backdrop-blur-xl glow-border"
            >
              The Future of Interactive Solutions
            </motion.span>
            
            <h1 className="text-6xl md:text-[7rem] font-bold text-white mb-10 leading-[0.9] tracking-tighter">
              The <span className="text-vnb-blue italic font-light">next</span> generation of <br />
              <span className="text-gradient-primary">Digital Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto font-normal leading-relaxed">
              We engineer the infrastructure that powers seamless learning and enterprise collaboration, 
              bridging the gap between technology and human potential.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-vnb-blue text-white font-bold rounded-full overflow-hidden transition-all shadow-2xl shadow-vnb-blue/30"
              >
                <span className="relative z-10">Explore Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-vnb-blue via-vnb-green to-vnb-blue bg-[length:200%_100%] group-hover:bg-pos-100 transition-all duration-500" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white/5 text-white font-bold rounded-full border border-white/10 backdrop-blur-xl transition-all"
              >
                Experience Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vnb-blue/50 to-transparent opacity-30" />
    </section>
  );
}
