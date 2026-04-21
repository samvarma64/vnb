// Blog API Client - Server-side storage for all users
import { BlogPost } from './blogData';

const API_BASE = '/api/blog';
const UPLOAD_API = '/api/upload';

// Get all blog posts
export async function getAllBlogPostsApi(): Promise<BlogPost[]> {
  try {
    const response = await fetch(API_BASE, {
      method: 'GET',
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Get single blog post by slug
export async function getBlogPostBySlugApi(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getAllBlogPostsApi();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Get single blog post by ID
export async function getBlogPostByIdApi(id: string): Promise<BlogPost | null> {
  try {
    const posts = await getAllBlogPostsApi();
    return posts.find(post => post.id === id) || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Create new blog post
export async function createBlogPostApi(postData: Omit<BlogPost, 'id' | 'slug' | 'date'>): Promise<BlogPost | null> {
  try {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create blog post');
    }
    
    const data = await response.json();
    return data.post;
  } catch (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
}

// Update blog post
export async function updateBlogPostApi(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  try {
    const response = await fetch(API_BASE, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, ...updates }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update blog post');
    }
    
    const data = await response.json();
    return data.post;
  } catch (error) {
    console.error('Error updating blog post:', error);
    return null;
  }
}

// Delete blog post
export async function deleteBlogPostApi(id: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE}?id=${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete blog post');
    }
    
    return true;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return false;
  }
}

// Get all categories
export async function getAllBlogCategoriesApi(): Promise<string[]> {
  try {
    const posts = await getAllBlogPostsApi();
    const categories = posts.map(post => post.category);
    return [...new Set(categories)];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Get recent posts
export async function getRecentBlogPostsApi(limit: number = 3): Promise<BlogPost[]> {
  try {
    const posts = await getAllBlogPostsApi();
    return posts.slice(0, limit);
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }
}

// Search blog posts
export async function searchBlogPostsApi(query: string): Promise<BlogPost[]> {
  try {
    const posts = await getAllBlogPostsApi();
    const lowercaseQuery = query.toLowerCase();
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  } catch (error) {
    console.error('Error searching blog posts:', error);
    return [];
  }
}

// Upload image
export async function uploadImageApi(file: File): Promise<{ success: boolean; url?: string; error?: string }> {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(UPLOAD_API, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const error = await response.json();
      return { success: false, error: error.error || 'Upload failed' };
    }
    
    const data = await response.json();
    return { success: true, url: data.url };
  } catch (error) {
    console.error('Error uploading image:', error);
    return { success: false, error: 'Upload failed' };
  }
}
