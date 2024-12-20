import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import { useQuery } from "@tanstack/react-query";
    import type { BlogPost } from "@/types/blog";
    import { AdUnit } from "@/components/ads/AdUnit";
    import { AdScript } from "@/components/ads/AdScript";
    import { Button } from "@/components/ui/button";
    import { Link } from "react-router-dom";
    
    const Blog = () => {
      const { data: posts, isLoading } = useQuery<BlogPost[]>({
        queryKey: ['blog-posts'],
        queryFn: async () => {
          const posts = JSON.parse(localStorage.getItem('blog-posts') || '[]');
          return posts.filter((post: BlogPost) => post.isPublished);
        }
      });
    
      if (isLoading) {
        return (
          <div className="container mx-auto px-4 py-32">
            <div className="flex justify-center items-center min-h-[400px]">
              Loading...
            </div>
          </div>
        );
      }
    
      return (
        <div className="container mx-auto px-4 py-32">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Blog
            </h1>
            <Button asChild variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
    
          {/* Top Ad Unit */}
          <div className="mb-8">
            <AdUnit slot="1234567890" />
            <AdScript />
          </div>
    
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts?.map((post, index) => (
              <>
                <Card key={post.id} className="bg-card/50 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      {new Date(post.createdAt).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{post.content}</p>
                  </CardContent>
                </Card>
    
                {/* Insert ad after every 3 posts */}
                {(index + 1) % 3 === 0 && (
                  <div className="col-span-full my-8">
                    <AdUnit slot="9876543210" format="horizontal" />
                    <AdScript />
                  </div>
                )}
              </>
            ))}
          </div>
    
          {/* Bottom Ad Unit */}
          <div className="mt-8">
            <AdUnit slot="5432109876" />
            <AdScript />
          </div>
        </div>
      );
    };
    
    export default Blog;
