import { Navbar } from "@/components/layout/Navbar";
import { UrlShortener } from "@/components/url-shortener/UrlShortener";
import { FeatureGrid } from "@/components/features/FeatureGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-card">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <Navbar />
      
      <div className="container relative mx-auto px-4 pt-32 pb-20">
        <div className="text-center animate-fade-up space-y-6">
          <div className="inline-block">
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary animate-glow">
                Next-Gen Link Management
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your long URLs into powerful, trackable short links with advanced analytics and AI-powered insights
          </p>
          
          <div className="backdrop-blur-xl bg-card/30 border border-white/10 p-8 rounded-2xl shadow-2xl">
            <UrlShortener />
          </div>
        </div>
      </div>

      <FeatureGrid />
    </div>
  );
};

export default Index;
