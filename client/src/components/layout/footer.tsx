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
    <footer className="bg-klowt-blue/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-[#9B7B0B] rounded-sm flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">SparkG Media</span>
            </div>
            
            <p className="text-gray-200 mb-8 max-w-md leading-relaxed">
              SparkG Media is a premium thought leadership agency helping CEOs, coaches, and founders build iconic personal brands that generate trust, growth, and legacy.
            </p>
            
            <div className="flex space-x-6 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-klowt-gray hover:text-[#9B7B0B] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <div className="grid grid-cols-2 gap-6">
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-klowt-gray hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <h5 className="text-sm font-semibold text-gray-400 mb-3">Socials</h5>
                <ul className="space-y-2">
                  <li><a href="https://linkedin.com" className="text-klowt-gray hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="https://instagram.com" className="text-klowt-gray hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="https://youtube.com" className="text-klowt-gray hover:text-white transition-colors">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-klowt-border/20 pt-8 mt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-klowt-gray text-sm mb-4 lg:mb-0">
              SparkG Media © 2025 | All Rights Reserved
            </p>
            <p className="text-klowt-gray text-sm">Developed by Delta 4</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
