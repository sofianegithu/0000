import type { BlogPost } from "@/types/blog";

    export const createBlogPost = async (post: Omit<BlogPost, 'id' | 'createdAt'>): Promise<BlogPost> => {
      // This is a mock implementation
      const newPost: BlogPost = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        publishedAt: post.isPublished ? new Date().toISOString() : null,
        ...post
      };
      
      // Store in localStorage for now (replace with API call later)
      const posts = JSON.parse(localStorage.getItem('blog-posts') || '[]');
      posts.push(newPost);
      localStorage.setItem('blog-posts', JSON.stringify(posts));
      
      return newPost;
    };
    
    export const getBlogPosts = async (): Promise<BlogPost[]> => {
      const posts = JSON.parse(localStorage.getItem('blog-posts') || '[]');
      return posts;
    };
