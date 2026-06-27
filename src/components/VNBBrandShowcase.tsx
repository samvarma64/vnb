"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "VNB Power",
    image:
      "/banners/home/vnb-power.jpg",
    link: "/services/power",
  },
  {
    name: "VNB Solar",
    image:
      "/banners/home/vnb-solar.jpg",
    link: "/services/solar",
  },
  {
    name: "VNB Interactive",
    image:
      "/banners/home/vnb-interactive.jpg",
    link: "/services/it-smart-services",
  },
  {
    name: "Enterprise Solutions",
    image:
      "/banners/home/enterprise-solutions.jpg",
    link: "/services/power",
  },
  {
    name: "Smart Energy",
    image:
      "/banners/home/smart-energy.jpg",
    link: "/services/solar",
  },
  {
    name: "Digital Learning",
    image:
      "/banners/home/digital-learnings-2.jpg",
    link: "/services/it-smart-services",
  },
];

export default function VNBBrandShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
        </motion.div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={brand.link}
                className="group block relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Brand Name */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    {brand.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
