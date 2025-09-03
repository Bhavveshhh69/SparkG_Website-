import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { SiteSetting } from "@shared/schema";
import boltLogo from "@/assets/sparkg-bolt.svg";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const { data: siteSettings = [] } = useQuery<SiteSetting[]>({
    queryKey: ["/api/site-settings"],
  });

  const headerCtaUrl = siteSettings.find(s => s.key === 'header_cta_url')?.value || '/about';

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4">
                <img src={boltLogo} alt="SparkG Logo" className="w-full h-full" />
              </div>
              <span className="text-foreground font-bold text-lg sm:text-xl">SparkG Media</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 ml-6 lg:ml-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors hover:text-primary text-sm lg:text-base ${
                    location === item.href ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center">
            {location === "/about" ? (
              <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-4 py-2">
                  Book Your Strategy Call
                </Button>
              </a>
            ) : (
              <Link href={headerCtaUrl}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-4 py-2">
                  Book Your Strategy Call
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden p-2 hover:bg-accent"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-[280px] sm:w-[320px]">
              <div className="flex items-center mt-4">
                <img src={boltLogo} alt="SparkG Logo" className="w-8 h-8 mr-3" />
                <span className="text-foreground font-bold text-xl">SparkG Media</span>
              </div>
              <nav className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg transition-colors hover:text-primary py-2 ${
                      location === item.href ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-6 border-t border-border">
                  {location === "/about" ? (
                    <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                        Book Your Strategy Call
                      </Button>
                    </a>
                  ) : (
                    <Link href={headerCtaUrl} onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                        Book Your Strategy Call
                      </Button>
                    </Link>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
