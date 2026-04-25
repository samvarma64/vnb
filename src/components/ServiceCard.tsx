"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  color: "blue" | "green" | "purple";
  features: string[];
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  color,
  features,
  href,
}: ServiceCardProps) {
  const gradientColors = {
    blue: "from-vnb-blue to-vnb-purple",
    green: "from-vnb-green to-vnb-blue",
    purple: "from-vnb-purple to-vnb-pink",
  };

  const bgColors = {
    blue: "hover:bg-vnb-blue/5",
    green: "hover:bg-vnb-green/5",
    purple: "hover:bg-vnb-purple/5",
  };

  const borderColors = {
    blue: "border-vnb-blue/20",
    green: "border-vnb-green/20",
    purple: "border-vnb-purple/20",
  };

  const content = (
    <>
      {/* Background gradient on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientColors[color]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      {/* Icon container */}
      <motion.div
        whileHover={{ rotate: 10, scale: 1.05 }}
        className="relative mb-6"
      >
        <div
          className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${gradientColors[color]} flex items-center justify-center shadow-sm`}
        >
          <Icon size={28} className="text-white" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-vnb-blue transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed text-base">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: featureIndex * 0.1 }}
              className="flex items-center gap-3 text-gray-700"
            >
              <CheckCircle
                size={16}
                className={`flex-shrink-0 ${
                  color === "blue"
                    ? "text-vnb-blue"
                    : color === "green"
                      ? "text-vnb-green"
                      : "text-vnb-purple"
                }`}
              />
              <span className="text-sm font-normal">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Learn more link */}
        <div className="flex items-center gap-2 text-sm font-medium transition-all duration-300">
          <span
            className={`${
              color === "blue"
                ? "text-vnb-blue"
                : color === "green"
                  ? "text-vnb-green"
                  : "text-vnb-purple"
            } group-hover:underline`}
          >
            Learn more
          </span>
          <ArrowRight
            size={14}
            className={`transition-transform duration-300 group-hover:translate-x-1 ${
              color === "blue"
                ? "text-vnb-blue"
                : color === "green"
                  ? "text-vnb-green"
                  : "text-vnb-purple"
            }`}
          />
        </div>
      </div>

      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${gradientColors[color]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className={`group relative p-8 rounded-2xl bg-white border ${borderColors[color]} ${bgColors[color]} transition-all duration-300 hover:shadow-xl overflow-hidden `}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative p-8 rounded-2xl bg-white border ${borderColors[color]} ${bgColors[color]} transition-all duration-300 hover:shadow-xl overflow-hidden`}
    >
      {content}
    </motion.div>
  );
}
