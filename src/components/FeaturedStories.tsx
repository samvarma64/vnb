"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "Powering Tomorrow",
    subtitle: "Solar Revolution in Rural Communities",
    description:
      "Transforming 100+ villages with sustainable solar energy solutions, bringing light and hope to thousands.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    link: "/blog/solar-revolution",
  },
  {
    id: 2,
    title: "Clean Energy Future",
    subtitle: "Commercial Solar Success Stories",
    description:
      "Helping businesses reduce carbon footprint and energy costs with our innovative solar installations.",
    image:
      "https://images.unsplash.com/photo-1473341303618-f23b976281c5?w=800&h=600&fit=crop",
    link: "/blog/commercial-solar",
  },
  {
    id: 3,
    title: "Sustainable Living",
    subtitle: "Residential Solar Solutions",
    description:
      "Empowering homeowners to achieve energy independence with our advanced solar panel systems.",
    image:
      "https://images.unsplash.com/photo-1589227365533-2b32cc76a7b5?w=800&h=600&fit=crop",
    link: "/blog/residential-solar",
  },
];

export default function FeaturedStories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Making a Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we&apos;re creating impact across industries and
            communities
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group "
            >
              <Link href={story.link}>
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium mb-3">
                      {story.subtitle}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {story.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      <span>Read Story</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-xl"
          >
            View All Stories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
