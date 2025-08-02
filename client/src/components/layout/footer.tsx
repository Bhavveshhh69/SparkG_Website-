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
    { icon: Music, href: "https://www.tiktok.com/@getklowt", label: "TikTok" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCcjf0AC8aj-GSv7EYiCP2PA", label: "YouTube" },
    { icon: Pinterest, href: "https://www.pinterest.co.uk/klowtagency", label: "Pinterest" },
  ];

  const navigation = {
    main: [
      { name: "HOME", href: "/" },
      { name: "ABOUT US", href: "/about" },
      { name: "BOOK A WORKSHOP", href: "/workshops" },
    ],
    services: [
      { name: "JOIN THE COMMUNITY", href: "/community" },
      { name: "RESOURCES", href: "/resources" },
      { name: "WORK WITH US", href: "/workshops" },
    ],
  };

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Terms and Conditions", href: "#" },
  ];

  return (
    <footer className="bg-klowt-blue/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center mr-4">
                <span className="text-klowt-dark font-bold text-lg">K</span>
              </div>
              <span className="text-2xl font-bold">Klowt</span>
            </div>
            
            <div className="flex space-x-6 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-klowt-gray hover:text-klowt-pink transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
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
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
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
          </div>
        </div>
        
        <div className="border-t border-klowt-border/20 pt-8 mt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-klowt-gray text-sm mb-4 lg:mb-0">
              Klowt Ltd © 2025 | All Rights Reserved
            </p>
            <div className="flex space-x-6 text-sm">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-klowt-gray hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
