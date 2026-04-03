"use client";

import { motion } from "framer-motion";

export default function SolarGraphics() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Sun Rays */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(40,167,69,0.05)_0%,transparent_70%)]"
      />
      
      {/* Floating Glowing Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0.1 + Math.random() * 0.2,
            scale: 0.5 + Math.random()
          }}
          animate={{ 
            y: ["0%", "-20%", "0%"],
            x: ["0%", "5%", "0%"],
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className={`absolute w-64 h-64 rounded-full blur-[100px] ${
            i % 2 === 0 ? "bg-vnb-green/20" : "bg-vnb-blue/20"
          }`}
        />
      ))}

      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
    </div>
  );
}
