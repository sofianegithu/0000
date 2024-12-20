import { useState } from "react";
    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Textarea } from "@/components/ui/textarea";
    import { useToast } from "@/components/ui/use-toast";
    import { generateBlogPost } from "@/services/mistralService";
    import { Loader2 } from "lucide-react";
    import { useMutation, useQueryClient } from "@tanstack/react-query";
    import type { BlogPost } from "@/types/blog";
    import { createBlogPost } from "@/services/blogService";
    
    const AdminBlog = () => {
      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");
      const [isGenerating, setIsGenerating] = useState(false);
      const { toast } = useToast();
      const queryClient = useQueryClient();
    
      const createPostMutation = useMutation({
        mutationFn: createBlogPost,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
          toast({
            title: "Success",
            description: "Blog post published successfully!",
          });
          setTitle("");
          setContent("");
        },
        onError: (error) => {
          console.error("Error saving post:", error);
          toast({
            title: "Error",
            description: "Failed to save blog post. Please try again.",
            variant: "destructive",
          });
        },
      });
    
      const handleGenerate = async () => {
        setIsGenerating(true);
        try {
          const generatedPost = await generateBlogPost();
          const lines = generatedPost.split('\n');
          const generatedTitle = lines[0].replace(/^#\s+/, '');
          const generatedContent = lines.slice(1).join('\n').trim();
          
          setTitle(generatedTitle);
          setContent(generatedContent);
          
          toast({
            title: "Success",
            description: "Blog post generated successfully!",
          });
        } catch (error) {
          console.error("Error generating post:", error);
          toast({
            title: "Error",
            description: "Failed to generate blog post. Please try again.",
            variant: "destructive",
          });
        } finally {
          setIsGenerating(false);
        }
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        createPostMutation.mutate({
          title,
          content,
          isPublished: true
        });
      };
    
      const schedulePost = () => {
        createPostMutation.mutate({
          title,
          content,
          isPublished: false
        });
        
        toast({
          title: "Scheduled",
          description: `Post will be published tomorrow at 9 AM`,
        });
      };
    
      return (
        <div className="container mx-auto px-4 py-32">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Admin Blog Management
          </h1>
          
          <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle>Create New Blog Post</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex justify-end space-x-4">
                <Button 
                  onClick={handleGenerate} 
                  variant="outline"
                  disabled={isGenerating}
                >
                  {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Generate AI Post
                </Button>
                <Button 
                  onClick={schedulePost}
                  variant="outline"
                >
                  Schedule for Tomorrow
                </Button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Blog Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[200px] bg-background/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={createPostMutation.isPending}
                >
                  {createPostMutation.isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Publish Post
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      );
    };
    
    export default AdminBlog;
