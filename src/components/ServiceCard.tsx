"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  color: "blue" | "green";
  features: string[];
}

export default function ServiceCard({ title, description, icon: Icon, color, features }: ServiceCardProps) {
  const accentColor = color === "blue" ? "text-vnb-blue border-vnb-blue" : "text-vnb-green border-vnb-green";
  const hoverBg = color === "blue" ? "hover:bg-vnb-blue/5" : "hover:bg-vnb-green/5";
  const featureIconColor = color === "blue" ? "text-vnb-blue" : "text-vnb-green";

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-8 rounded-2xl border-2 border-gray-100 transition-all duration-300 ${hoverBg} hover:border-transparent hover:shadow-xl group bg-white`}
    >
      <motion.div 
        whileHover={{ rotate: 15 }}
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all ${accentColor} border-2`}
      >
        <Icon size={28} />
      </motion.div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
            <span className={`w-1.5 h-1.5 rounded-full ${featureIconColor}`} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
