"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Happy Clients",
      color: "blue",
    },
    {
      icon: Zap,
      value: 1000,
      suffix: "+",
      label: "Projects Completed",
      color: "green",
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      color: "blue",
    },
    {
      icon: TrendingUp,
      value: 99,
      suffix: "%",
      label: "Client Satisfaction",
      color: "green",
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface StatType {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: StatType;
  index: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  const colorClasses = {
    blue: "from-vnb-blue to-vnb-blue/80",
    green: "from-vnb-green to-vnb-green/80",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`text-center group ${index > 0 && index % 2 !== 0 ? "md:pl-8" : ""} ${index > 1 ? "pt-8 md:pt-0" : ""}`}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4 group-hover:shadow-lg transition-all duration-300"
      >
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center`}
        >
          <stat.icon className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
    </motion.div>
  );
}
