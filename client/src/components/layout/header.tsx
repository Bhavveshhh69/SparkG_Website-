import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { SiteSetting } from "@shared/schema";
import boltLogo from "@/assets/sparkg-bolt.png";
import fullLogo from "@/assets/sparkg-logo-with-text.png";

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
      {/* Mobile Menu - Absolute Left Corner of Header */}
      <div className="md:hidden absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="p-2 hover:bg-accent"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-[280px] sm:w-[320px] mobile-landscape-sheet mobile-portrait-sheet mobile-landscape-menu">
            <div className="flex items-center mt-4">
              <div className="h-12 sm:h-14 flex items-center">
                <img src={fullLogo} alt="SparkG Media Logo" className="max-h-full w-auto object-contain" />
              </div>
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
                <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                    Book Strategy Call
                  </Button>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between relative">
          {/* Mobile Logo - Center */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <div className="h-10 flex items-center justify-center">
                <img src={fullLogo} alt="SparkG Media Logo" className="max-h-full w-auto object-contain" />
              </div>
            </Link>
          </div>
          
          {/* Desktop Logo and Navigation - Left Side */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center">
                <img src={fullLogo} alt="SparkG Media Logo" className="max-h-full w-auto object-contain" />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 ml-8 lg:ml-12">
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
          
          {/* Desktop CTAs - Right Side */}
          <div className="hidden md:flex items-center">
            <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-4 py-2">
                Book Strategy Call
              </Button>
            </a>
          </div>
          
          {/* Mobile Spacer - Right Side to balance centered logo */}
          <div className="md:hidden w-12"></div>
        </div>
      </div>
    </header>
  );
}
