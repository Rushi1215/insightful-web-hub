
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse-slow" />
            <span>and precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
