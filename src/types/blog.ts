export interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  publishedAt: string | null;
  isPublished: boolean;
}
