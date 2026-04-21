// Blog Management System - No Firebase Required
// Uses localStorage for persistence and dynamic state management

import { BlogPost, blogPosts } from "./blogData";

const STORAGE_KEY = "vnb_blog_posts";

// Initialize localStorage with sample data if empty
export function initializeBlogStorage(): void {
  if (typeof window === "undefined") return;

  const existingPosts = localStorage.getItem(STORAGE_KEY);
  if (!existingPosts) {
    // Store sample posts in localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogPosts));
  }
}

// Get all posts from localStorage
export function getAllBlogPosts(): BlogPost[] {
  if (typeof window === "undefined") return [];

  try {
    const posts = localStorage.getItem(STORAGE_KEY);
    return posts ? JSON.parse(posts) : [];
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

// Save all posts to localStorage
export function saveAllBlogPosts(posts: BlogPost[]): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (error) {
    console.error("Error saving blog posts:", error);
  }
}

// Create a new blog post
export function createBlogPost(
  postData: Omit<BlogPost, "id" | "slug" | "date">,
): BlogPost {
  // Ensure localStorage is initialized
  initializeBlogStorage();

  const posts = getAllBlogPosts();
  const newPost: BlogPost = {
    ...postData,
    id: Date.now().toString(),
    slug: generateSlug(postData.title),
    date: new Date().toISOString().split("T")[0],
  };

  posts.unshift(newPost); // Add to beginning
  saveAllBlogPosts(posts);
  return newPost;
}

// Update an existing blog post
export function updateBlogPost(
  id: string,
  updates: Partial<BlogPost>,
): BlogPost | null {
  const posts = getAllBlogPosts();
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) return null;

  const updatedPost = { ...posts[index], ...updates };

  // Update slug if title changed
  if (updates.title && updates.title !== posts[index].title) {
    updatedPost.slug = generateSlug(updates.title);
  }

  posts[index] = updatedPost;
  saveAllBlogPosts(posts);
  return updatedPost;
}

// Delete a blog post
export function deleteBlogPost(id: string): boolean {
  const posts = getAllBlogPosts();
  const filteredPosts = posts.filter((post) => post.id !== id);

  if (filteredPosts.length === posts.length) return false;

  saveAllBlogPosts(filteredPosts);
  return true;
}

// Get a single blog post by ID
export function getBlogPostById(id: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((post) => post.id === id) || null;
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

// Get posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.filter((post) => post.category === category);
}

// Get recent posts
export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.slice(0, limit);
}

// Get all categories
export function getAllBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = posts.map((post) => post.category);
  return [...new Set(categories)];
}

// Search posts
export function searchBlogPosts(query: string): BlogPost[] {
  const posts = getAllBlogPosts();
  const lowercaseQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  );
}

// Generate URL-friendly slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Remove multiple hyphens
    .trim();
}

// Blog post validation
export function validateBlogPost(post: Partial<BlogPost>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!post.title || post.title.trim().length === 0) {
    errors.push("Title is required");
  }

  if (!post.excerpt || post.excerpt.trim().length === 0) {
    errors.push("Excerpt is required");
  }

  if (!post.content || post.content.trim().length === 0) {
    errors.push("Content is required");
  }

  if (!post.author || post.author.trim().length === 0) {
    errors.push("Author is required");
  }

  if (!post.category || post.category.trim().length === 0) {
    errors.push("Category is required");
  }

  if (!post.image || post.image.trim().length === 0) {
    errors.push("Featured image is required");
  }

  if (!post.tags || !Array.isArray(post.tags) || post.tags.length === 0) {
    errors.push("At least one tag is required");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Export blog posts as JSON (for backup)
export function exportBlogPosts(): string {
  const posts = getAllBlogPosts();
  return JSON.stringify(posts, null, 2);
}

// Import blog posts from JSON
export function importBlogPosts(jsonData: string): {
  success: boolean;
  imported: number;
  errors: string[];
} {
  try {
    const posts = JSON.parse(jsonData);

    if (!Array.isArray(posts)) {
      return { success: false, imported: 0, errors: ["Invalid data format"] };
    }

    const errors: string[] = [];
    let imported = 0;

    for (const post of posts) {
      const validation = validateBlogPost(post);
      if (validation.isValid) {
        createBlogPost(post);
        imported++;
      } else {
        errors.push(
          `Post "${post.title || "Unknown"}": ${validation.errors.join(", ")}`,
        );
      }
    }

    return { success: true, imported, errors };
  } catch (error) {
    return { success: false, imported: 0, errors: ["Invalid JSON format"] };
  }
}

// Initialize storage when module loads
if (typeof window !== "undefined") {
  initializeBlogStorage();
}
