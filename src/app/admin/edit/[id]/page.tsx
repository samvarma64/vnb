"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Eye, X, Trash2 } from "lucide-react";
import { isAuthenticated } from "@/lib/auth";
import {
  getBlogPostByIdApi,
  updateBlogPostApi,
  deleteBlogPostApi,
  getAllBlogCategoriesApi,
} from "@/lib/blogApi";
import { validateBlogPost } from "@/lib/blogManager";
import MediaUpload from "@/components/MediaUpload";

export default function EditBlogPost() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [previewMode, setPreviewMode] = useState(false);
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    image: "",
    tags: [] as string[],
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

    // Load post data and categories
    async function loadData() {
      const postData = await getBlogPostByIdApi(postId);
      if (!postData) {
        router.push("/admin/dashboard");
        return;
      }

      setPost(postData);
      setFormData({
        title: postData.title,
        excerpt: postData.excerpt,
        content: postData.content,
        author: postData.author,
        category: postData.category,
        image: postData.image,
        tags: postData.tags,
        status: postData.status || "draft",
      });

      const cats = await getAllBlogCategoriesApi();
      if (cats.length > 0) {
        setCategories(cats);
      }

      setLoading(false);
    }

    loadData();
  }, [postId, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);

    const validation = validateBlogPost(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const updatedPost = await updateBlogPostApi(postId, formData);
      if (updatedPost) {
        alert("Blog post updated successfully!");
        router.push("/admin/dashboard");
      } else {
        setErrors(["Failed to update blog post"]);
        setIsSubmitting(false);
      }
    } catch (error) {
      setErrors(["Failed to update blog post"]);
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (
      confirm(
        "Are you sure you want to delete this post? This action cannot be undone.",
      )
    ) {
      setIsDeleting(true);
      const success = await deleteBlogPostApi(postId);
      if (success) {
        alert("Post deleted successfully!");
        router.push("/admin/dashboard");
      } else {
        alert("Failed to delete post");
        setIsDeleting(false);
      }
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

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-vnb-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading post...</p>
        </div>
      </main>
    );
  }

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
            <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPreviewMode(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors "
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50 "
            >
              {isDeleting ? (
                <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Trash2 className="w-4 h-4" />
              )}
              Delete
            </button>
          </div>
        </div>

        {/* Post Info */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Post ID:</strong> {postId} |<strong> Created:</strong>{" "}
            {post?.date} |<strong> Slug:</strong> {post?.slug}
          </p>
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

                  const validation = validateBlogPost(updatedData);
                  if (!validation.isValid) {
                    setErrors(validation.errors);
                    setIsSubmitting(false);
                    return;
                  }

                  try {
                    const updatedPost = await updateBlogPostApi(
                      postId,
                      updatedData,
                    );
                    if (updatedPost) {
                      alert("Draft saved successfully!");
                      router.push("/admin/dashboard");
                    } else {
                      setErrors(["Failed to save draft"]);
                      setIsSubmitting(false);
                    }
                  } catch (error) {
                    setErrors(["Failed to save draft"]);
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

                  const validation = validateBlogPost(updatedData);
                  if (!validation.isValid) {
                    setErrors(validation.errors);
                    setIsSubmitting(false);
                    return;
                  }

                  try {
                    const updatedPost = await updateBlogPostApi(
                      postId,
                      updatedData,
                    );
                    if (updatedPost) {
                      alert("Post published successfully!");
                      router.push("/admin/dashboard");
                    } else {
                      setErrors(["Failed to publish post"]);
                      setIsSubmitting(false);
                    }
                  } catch (error) {
                    setErrors(["Failed to publish post"]);
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
