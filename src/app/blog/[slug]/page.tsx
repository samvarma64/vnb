"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from "lucide-react";
import { getBlogPostBySlugApi, getRecentBlogPostsApi } from "@/lib/blogApi";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { BlogPost } from "@/lib/blogData";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const fetchedPost = await getBlogPostBySlugApi(slug);
      const recent = await getRecentBlogPostsApi(3);
      setPost(fetchedPost);
      setRecentPosts(recent.filter((p) => p.slug !== slug));
      setLoading(false);
    }
    loadPost();
  }, [slug]);

  if (!post) {
    return (
      <main className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <Link
            href="/blog"
            className="text-vnb-blue hover:underline cursor-pointer"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vnb-blue transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-vnb-blue/10 text-vnb-blue text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vnb-blue to-vnb-green flex items-center justify-center text-white font-semibold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {post.author}
                  </div>
                  <div className="text-sm text-gray-500">Author</div>
                </div>
              </div>

              <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {post.image &&
            (post.image.endsWith(".mp4") ||
              post.image.endsWith(".webm") ||
              post.image.endsWith(".mov")) ? (
              <video
                src={post.image}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={post.image || "/file.svg"}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/file.svg";
                }}
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <article className="prose prose-lg max-w-none">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="w-5 h-5 text-gray-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-vnb-blue/10 hover:text-vnb-blue transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-8">
                {/* Recent Posts */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((recentPost) => (
                      <Link
                        key={recentPost.id}
                        href={`/blog/${recentPost.slug}`}
                        className="block group cursor-pointer"
                      >
                        <div className="flex gap-4">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            {recentPost.image &&
                            (recentPost.image.endsWith(".mp4") ||
                              recentPost.image.endsWith(".webm") ||
                              recentPost.image.endsWith(".mov")) ? (
                              <video
                                src={recentPost.image}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                muted
                                playsInline
                                preload="metadata"
                              />
                            ) : (
                              <Image
                                src={recentPost.image || "/file.svg"}
                                alt={recentPost.title}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/file.svg";
                                }}
                              />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-vnb-blue transition-colors line-clamp-2 text-sm">
                              {recentPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {recentPost.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-vnb-blue to-vnb-purple rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Get Started Today</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Ready to transform your business with our solutions?
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-white text-vnb-blue rounded-lg font-semibold text-center hover:shadow-lg transition-all cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}
