import { Link } from "wouter";
import { 
  Linkedin, 
  Instagram, 
  Music, 
  Youtube, 
  PinIcon as Pinterest 
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/klowt/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/getklowt", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCcjf0AC8aj-GSv7EYiCP2PA", label: "YouTube" },
    { icon: Pinterest, href: "https://www.pinterest.co.uk/klowtagency", label: "Pinterest" },
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
    <footer className="bg-klowt-blue/30 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#9B7B0B] rounded-sm flex items-center justify-center mr-3 sm:mr-4">
                <span className="text-white font-bold text-base sm:text-lg">S</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">SparkG Media</span>
            </div>
            
            <p className="text-gray-200 mb-6 sm:mb-8 max-w-md leading-relaxed text-sm sm:text-base">
              SparkG Media is a premium thought leadership agency helping CEOs, coaches, and founders build iconic personal brands that generate trust, growth, and legacy.
            </p>
            
            <div className="flex space-x-4 sm:space-x-6 mb-6 sm:mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-klowt-gray hover:text-[#9B7B0B] transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Links</h4>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <ul className="space-y-2 sm:space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-klowt-gray hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <h5 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3">Socials</h5>
                <ul className="space-y-1 sm:space-y-2">
                  <li><a href="https://linkedin.com" className="text-klowt-gray hover:text-white transition-colors text-sm">LinkedIn</a></li>
                  <li><a href="https://instagram.com" className="text-klowt-gray hover:text-white transition-colors text-sm">Instagram</a></li>
                  <li><a href="https://youtube.com" className="text-klowt-gray hover:text-white transition-colors text-sm">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-klowt-border/20 pt-6 sm:pt-8 mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-klowt-gray text-xs sm:text-sm text-center sm:text-left">
              SparkG Media © 2025 | All Rights Reserved
            </p>
            <p className="text-klowt-gray text-xs sm:text-sm">Developed by Delta 4</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
