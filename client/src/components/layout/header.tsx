import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sparkg-dark/95 backdrop-blur-sm border-b border-sparkg-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-sparkg-gold rounded-sm flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-white font-bold text-xl">SparkG Media</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 ml-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors hover:text-sparkg-gold ${
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
            <Link href="/resources">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-sm px-4 py-2">
                EXPLORE SERVICES
              </Button>
            </Link>
            <Link href="/about">
              <Button className="bg-sparkg-gold hover:bg-sparkg-gold/90 text-black text-sm px-4 py-2">
                START YOUR JOURNEY
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-sparkg-dark border-sparkg-border">
              <nav className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg transition-colors hover:text-sparkg-gold ${
                      location === item.href ? "text-white" : "text-sparkg-gray"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-6">
                  <Link href="/resources" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                      EXPLORE SERVICES
                    </Button>
                  </Link>
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-sparkg-gold hover:bg-sparkg-gold/90 text-black">
                      START YOUR JOURNEY
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
