import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { SiteSetting } from "@shared/schema";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-sparkg-dark/95 backdrop-blur-sm border-b border-sparkg-border/20">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sparkg-gold rounded-sm flex items-center justify-center mr-3 sm:mr-4">
                <span className="text-white font-bold text-base sm:text-lg">S</span>
              </div>
              <span className="text-white font-bold text-lg sm:text-xl">SparkG Media</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 ml-6 lg:ml-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors hover:text-sparkg-gold text-sm lg:text-base ${
                    location === item.href ? "text-white" : "text-sparkg-gray"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href={headerCtaUrl}>
              <Button className="bg-sparkg-gold hover:bg-sparkg-gold/90 text-black text-sm px-4 py-2">
                Book Your Strategy Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden p-2 hover:bg-white/10"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-sparkg-dark border-sparkg-border w-[280px] sm:w-[320px]">
              <nav className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg transition-colors hover:text-sparkg-gold py-2 ${
                      location === item.href ? "text-white" : "text-sparkg-gray"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-6 border-t border-white/10">
                  <Link href={headerCtaUrl} onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-sparkg-gold hover:bg-sparkg-gold/90 text-black py-3">
                      Book Your Strategy Call
                    </Button>
                  </Link>  
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
