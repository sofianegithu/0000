import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Link2 } from "lucide-react";

export const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
    } catch (e) {
      return false;
    }
  };

  const shortenUrl = async () => {
    if (!url) {
      toast.error("Please enter a URL");
      return;
    }

    if (!validateUrl(url)) {
      toast.error("Please enter a valid URL (including http:// or https://)");
      return;
    }
    
    console.log("Attempting to shorten URL:", url);
    setIsLoading(true);
    
    try {
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_BITLY_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
          long_url: url.trim(),
          domain: "bit.ly"
        })
      });
      
      console.log("API Response status:", response.status);
      const data = await response.json();
      console.log("API Response data:", data);
      
      if (!response.ok) {
        throw new Error(data.message || data.description || "Failed to shorten URL");
      }

      if (data.link) {
        setShortUrl(data.link);
        toast.success("URL shortened successfully!");
      } else {
        throw new Error("Invalid API response");
      }
    } catch (error: any) {
      console.error("Error shortening URL:", error);
      toast.error(error.message || "Failed to shorten URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex gap-2">
        <Input
          type="url"
          placeholder="Enter your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="bg-background/50 border-white/10 focus:border-primary/50 transition-colors"
        />
        <Button 
          onClick={shortenUrl} 
          disabled={isLoading}
          className="bg-primary hover:bg-primary/90 min-w-[120px] transition-all duration-300 hover:scale-105"
        >
          {isLoading ? (
            <div className="animate-pulse">Processing...</div>
          ) : (
            <>
              <Link2 className="mr-2 h-4 w-4" />
              Shorten
            </>
          )}
        </Button>
      </div>
      
      {shortUrl && (
        <div className="p-4 bg-background/50 rounded-lg border border-white/10 animate-fade-up">
          <p className="text-sm text-muted-foreground mb-2">Your shortened URL:</p>
          <div className="flex items-center gap-2">
            <Input
              value={shortUrl}
              readOnly
              className="bg-background/50 border-white/10"
            />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                toast.success("Copied to clipboard!");
              }}
              variant="outline"
              className="border-white/10 hover:bg-white/5 transition-colors"
            >
              Copy
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
