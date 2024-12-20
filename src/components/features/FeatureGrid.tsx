import { ChartBar, Brain, Lock } from "lucide-react";
    
    export const FeatureGrid = () => {
      return (
        <div className="container mx-auto px-4 py-20 border-t border-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-6 bg-card/30 backdrop-blur-xl rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <ChartBar className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Track clicks, geographic data, and user behavior with our comprehensive analytics dashboard.
              </p>
            </div>
    
            <div className="group p-6 bg-card/30 backdrop-blur-xl rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <Brain className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">AI-Powered Tools</h3>
              <p className="text-muted-foreground">
                Generate engaging content and optimize your links with our AI-powered tools.
              </p>
            </div>
    
            <div className="group p-6 bg-card/30 backdrop-blur-xl rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <Lock className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Keep your links secure with password protection and expiration dates.
              </p>
            </div>
          </div>
        </div>
      );
    };
