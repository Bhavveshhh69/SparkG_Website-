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
    { name: "Community", href: "/community" },
    { name: "Workshops", href: "/workshops" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-klowt-dark/95 backdrop-blur-sm border-b border-klowt-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center mr-4">
                <span className="text-klowt-dark font-bold text-lg">K</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors hover:text-klowt-pink ${
                    location === item.href ? "text-white" : "text-klowt-gray"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/resources">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                GRAB OUR FREE TOOLS
              </Button>
            </Link>
            <Link href="/community">
              <Button className="bg-klowt-pink hover:bg-klowt-pink/90">
                GROW YOUR PERSONAL BRAND
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
            <SheetContent side="right" className="bg-klowt-dark border-klowt-border">
              <nav className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg transition-colors hover:text-klowt-pink ${
                      location === item.href ? "text-white" : "text-klowt-gray"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-6">
                  <Link href="/resources" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                      GRAB OUR FREE TOOLS
                    </Button>
                  </Link>
                  <Link href="/community" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-klowt-pink hover:bg-klowt-pink/90">
                      GROW YOUR PERSONAL BRAND
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
