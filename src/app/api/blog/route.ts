import { NextRequest, NextResponse } from "next/server";
import { BlogPost } from "@/lib/blogData";
import fs from "fs";
import path from "path";

// File-based storage for blog posts (can be replaced with database)
const BLOG_DATA_FILE = path.join(process.cwd(), "data", "blog-posts.json");

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read all blog posts from file
function readBlogPosts(): BlogPost[] {
  ensureDataDirectory();

  if (!fs.existsSync(BLOG_DATA_FILE)) {
    // Initialize with empty array - will be populated by admin
    const initialPosts: BlogPost[] = [];
    fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(initialPosts, null, 2));
    return initialPosts;
  }

  const data = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
  return JSON.parse(data);
}

// Write blog posts to file
function writeBlogPosts(posts: BlogPost[]) {
  ensureDataDirectory();
  fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(posts, null, 2));
}

// GET - Get all blog posts
export async function GET() {
  try {
    const posts = readBlogPosts();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return NextResponse.json(
      { success: false, error: "Failed to read blog posts" },
      { status: 500 },
    );
  }
}

// POST - Create new blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const posts = readBlogPosts();

    const newPost: BlogPost = {
      ...body,
      id: Date.now().toString(),
      slug: generateSlug(body.title),
      date: new Date().toISOString().split("T")[0],
      status: body.status || "draft",
    };

    posts.unshift(newPost);
    writeBlogPosts(posts);

    return NextResponse.json({ success: true, post: newPost });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create blog post" },
      { status: 500 },
    );
  }
}

// PUT - Update blog post
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    const posts = readBlogPosts();
    const index = posts.findIndex((post) => post.id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 },
      );
    }

    const updatedPost = { ...posts[index], ...updates };

    // Update slug if title changed
    if (updates.title && updates.title !== posts[index].title) {
      updatedPost.slug = generateSlug(updates.title);
    }

    posts[index] = updatedPost;
    writeBlogPosts(posts);

    return NextResponse.json({ success: true, post: updatedPost });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update blog post" },
      { status: 500 },
    );
  }
}

// DELETE - Delete blog post
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Post ID required" },
        { status: 400 },
      );
    }

    const posts = readBlogPosts();
    const filteredPosts = posts.filter((post) => post.id !== id);

    if (filteredPosts.length === posts.length) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 },
      );
    }

    writeBlogPosts(filteredPosts);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog post" },
      { status: 500 },
    );
  }
}

// Helper function to generate URL-friendly slug
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
