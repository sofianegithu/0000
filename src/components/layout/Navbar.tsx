import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
    import { Link } from "react-router-dom";
    import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from "@/components/ui/dialog";
    import { Button } from "@/components/ui/button";
    
    export const Navbar = () => {
      return (
        <nav className="fixed top-0 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                LinkVerse AI
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <SignedOut>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Sign In</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Admin Access Only</DialogTitle>
                      <DialogDescription>Sign in to access admin features</DialogDescription>
                    </DialogHeader>
                    <SignIn />
                  </DialogContent>
                </Dialog>
              </SignedOut>
              <SignedIn>
                <Link to="/admin/blog">
                  <Button variant="outline">Admin Blog</Button>
                </Link>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </nav>
      );
    };
