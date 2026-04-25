"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap } from "lucide-react";

const features = [
  {
    title: "Customized Solutions",
    description: "VNB recognizes that each client has unique energy requirements, offering tailored solar energy solutions optimized for maximum efficiency and cost-effectiveness.",
    icon: Settings
  },
  {
    title: "Proven Expertise",
    description: "With a track record of successfully commissioned solar projects, our expertise in the energy sector ensures high-quality delivery.",
    icon: Award
  },
  {
    title: "End-to-End EPC Services",
    description: "Comprehensive coverage from site identification and quality procurement to efficient construction and ongoing maintenance.",
    icon: Zap
  }
];

import { Settings } from "lucide-react";

export default function WhyChooseVNB() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Why Choose <br />
              <span className="text-vnb-green">VNB?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-8"
            >
              As one of the top solar companies in India, we are committed 
              to driving India’s energy transition and meeting escalating 
              global energy demands.
            </motion.p>
            <div className="space-y-4">
              {["Reliable Solutions", "Advanced Technology", "Scalable Systems"].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-vnb-green" size={24} />
                  <span className="font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-vnb-green/10 text-vnb-green flex items-center justify-center mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
