import { Link } from "wouter";
import { 
  Linkedin, 
  Instagram, 
  Music, 
  Youtube
} from "lucide-react";
import boltLogo from "@/assets/sparkg-bolt.svg";

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/sparkg-media", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/sparkgmedia/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCcjf0AC8aj-GSv7EYiCP2PA", label: "YouTube" }
  ];

  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "Resources", href: "/resources" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "About", href: "/about" },
    ],
  };

  return (
    <footer className="bg-primary/30 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4">
                <img src={boltLogo} alt="SparkG Logo" className="w-full h-full" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-foreground">SparkG Media</span>
            </div>
            
            <p className="text-muted-foreground mb-6 sm:mb-8 max-w-md leading-relaxed text-sm sm:text-base">
              SparkG Media is a premium thought leadership agency helping CEOs, coaches, and founders build iconic personal brands that generate trust, growth, and legacy.
            </p>
            
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-foreground">Links</h4>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <ul className="space-y-2 sm:space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <h5 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2 sm:mb-3">Socials</h5>
                <ul className="space-y-1 sm:space-y-2">
                  <li><a href="https://www.linkedin.com/company/sparkg-media" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">LinkedIn</a></li>
                  <li><a href="https://www.instagram.com/sparkgmedia/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 pt-6 sm:pt-8 mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <img src={boltLogo} alt="SparkG Logo" className="w-4 h-4" />
              <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
                SparkG Media © 2025 | All Rights Reserved
              </p>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm">Developed by Delta 4</p>
          </div>
        </div>
      </div>
    </footer>
  );
}