"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Eye, X } from "lucide-react";
import { isAuthenticated } from "@/lib/auth";
import { createBlogPostApi, getAllBlogCategoriesApi } from "@/lib/blogApi";
import { validateBlogPost } from "@/lib/blogManager";
import MediaUpload from "@/components/MediaUpload";

export default function CreateBlogPost() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [previewMode, setPreviewMode] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "VNB Team",
    category: "Solar Energy",
    image: "",
    tags: [] as string[],
    readTime: "5 min read",
    status: "draft" as "draft" | "published",
  });

  const [tagInput, setTagInput] = useState("");
  const [categories, setCategories] = useState<string[]>([
    "Solar Energy",
    "Technology",
    "Education Tech",
  ]);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/admin");
      return;
    }

    // Load categories
    getAllBlogCategoriesApi().then((cats) => {
      if (cats.length > 0) {
        setCategories(cats);
      }
    });
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);

    // Add readTime calculation
    const wordsPerMinute = 200;
    const wordCount = formData.content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute) + " min read";

    const postData = {
      ...formData,
      readTime,
    };

    const validation = validateBlogPost(postData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Creating post with data:", postData);
      const newPost = await createBlogPostApi(postData);

      if (newPost) {
        console.log("Post created successfully:", newPost);
        alert("Blog post created successfully!");
        router.push("/admin/dashboard");
      } else {
        setErrors(["Failed to create blog post. Please try again."]);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      setErrors([
        "Failed to create blog post: " +
          (error instanceof Error ? error.message : "Unknown error"),
      ]);
      setIsSubmitting(false);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleInputChange = (
    field: keyof typeof formData,
    value: string | "draft" | "published",
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (previewMode) {
    return (
      <main className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setPreviewMode(false)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors "
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Editor</span>
            </button>
            <button
              onClick={() => setPreviewMode(false)}
              className="px-4 py-2 bg-vnb-blue text-white rounded-lg hover:bg-vnb-blue/90 transition-colors "
            >
              Continue Editing
            </button>
          </div>

          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="px-4 py-1.5 bg-vnb-blue/10 text-vnb-blue text-sm font-semibold rounded-full">
                {formData.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                {formData.title || "Untitled Post"}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {formData.excerpt || "No excerpt provided"}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: formData.content || "<p>No content</p>",
                }}
              />
            </div>

            {formData.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-semibold text-gray-600">
                    Tags:
                  </span>
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors "
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">
              Create New Blog Post
            </h1>
          </div>
          <button
            onClick={() => setPreviewMode(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors "
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">
              Please fix the following errors:
            </h3>
            <ul className="list-disc list-inside text-red-700">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vnb-blue focus:border-transparent outline-none transition-all"
                placeholder="Enter blog post title"
                required
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => handleInputChange("excerpt", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vnb-blue focus:border-transparent outline-none transition-all resize-none"
                placeholder="Brief description of the blog post"
                required
              />
            </div>

            {/* Author and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => handleInputChange("author", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vnb-blue focus:border-transparent outline-none transition-all"
                  placeholder="Author name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vnb-blue focus:border-transparent outline-none transition-all"
                  required
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Featured Media */}
            <MediaUpload
              currentMedia={formData.image}
              onMediaChange={(url) => handleInputChange("image", url)}
              acceptVideo={true}
            />

            {/* Tags */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tags *
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTag())
                  }
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vnb-blue focus:border-transparent outline-none transition-all"
                  placeholder="Add a tag and press Enter"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-6 py-3 bg-vnb-blue text-white rounded-lg hover:bg-vnb-blue/90 transition-colors "
                >
                  Add Tag
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-vnb-blue/10 text-vnb-blue rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-red-600 transition-colors "
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                rows={15}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vnb-blue focus:border-transparent outline-none transition-all resize-none font-mono"
                placeholder="Write your blog post content here (HTML supported)"
                required
              />
              <p className="text-sm text-gray-500 mt-2">
                You can use HTML tags like &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;,
                &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, etc.
              </p>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={async () => {
                  const updatedData = { ...formData, status: "draft" as const };
                  setFormData(updatedData);
                  setIsSubmitting(true);
                  setErrors([]);

                  const wordsPerMinute = 200;
                  const wordCount = updatedData.content.split(/\s+/).length;
                  const readTime =
                    Math.ceil(wordCount / wordsPerMinute) + " min read";

                  const postData = { ...updatedData, readTime };
                  const validation = validateBlogPost(postData);

                  if (!validation.isValid) {
                    setErrors(validation.errors);
                    setIsSubmitting(false);
                    return;
                  }

                  try {
                    const newPost = await createBlogPostApi(postData);
                    if (newPost) {
                      alert("Draft saved successfully!");
                      router.push("/admin/dashboard");
                    } else {
                      setErrors(["Failed to save draft. Please try again."]);
                      setIsSubmitting(false);
                    }
                  } catch (error) {
                    setErrors([
                      "Failed to save draft: " +
                        (error instanceof Error
                          ? error.message
                          : "Unknown error"),
                    ]);
                    setIsSubmitting(false);
                  }
                }}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed "
              >
                {isSubmitting && formData.status === "draft" ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Saving Draft...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Save className="w-4 h-4" />
                    Save as Draft
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={async () => {
                  const updatedData = {
                    ...formData,
                    status: "published" as const,
                  };
                  setFormData(updatedData);
                  setIsSubmitting(true);
                  setErrors([]);

                  const wordsPerMinute = 200;
                  const wordCount = updatedData.content.split(/\s+/).length;
                  const readTime =
                    Math.ceil(wordCount / wordsPerMinute) + " min read";

                  const postData = { ...updatedData, readTime };
                  const validation = validateBlogPost(postData);

                  if (!validation.isValid) {
                    setErrors(validation.errors);
                    setIsSubmitting(false);
                    return;
                  }

                  try {
                    const newPost = await createBlogPostApi(postData);
                    if (newPost) {
                      alert("Post published successfully!");
                      router.push("/admin/dashboard");
                    } else {
                      setErrors(["Failed to publish post. Please try again."]);
                      setIsSubmitting(false);
                    }
                  } catch (error) {
                    setErrors([
                      "Failed to publish post: " +
                        (error instanceof Error
                          ? error.message
                          : "Unknown error"),
                    ]);
                    setIsSubmitting(false);
                  }
                }}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-vnb-blue text-white rounded-lg font-semibold hover:bg-vnb-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed "
              >
                {isSubmitting && formData.status === "published" ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Publishing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Save className="w-4 h-4" />
                    Publish Post
                  </span>
                )}
              </button>

              <Link
                href="/admin/dashboard"
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center  flex items-center justify-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
