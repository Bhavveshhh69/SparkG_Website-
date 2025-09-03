import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useQuery } from "@tanstack/react-query";
import type { SiteSetting } from "@shared/schema";

export default function CTA() {
  const titleRef = useScrollAnimation();
  const transformRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();

  // Get CTA URL from site settings
  const { data: siteSettings = [] } = useQuery<SiteSetting[]>({
    queryKey: ["/api/admin/site-settings"],
  });

  const heroCtaUrl = siteSettings.find(s => s.key === 'hero_cta_url')?.value || '/about';

  const handleCtaClick = (e: React.MouseEvent) => {
    // Check if it's an external URL
    if (heroCtaUrl.startsWith('http://') || heroCtaUrl.startsWith('https://')) {
      e.preventDefault();
      window.open(heroCtaUrl, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-background to-card relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-secondary/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-spin"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-gradient-to-r from-primary to-secondary rounded-full">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
          </div>
          
          <h2 ref={titleRef as any} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 scroll-fade-in">
            Ready to{" "}
            <span ref={transformRef as any} className="text-primary relative font-extrabold scroll-blur-to-clear inline-block">
              <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
              <span className="relative">Build the Brand</span>
            </span>
            <br />
            <span className="text-foreground">That Builds Everything Else?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            We work with a select group of high-performing leaders each quarter. Let's see if we're a fit.
          </p>
          
          <div ref={buttonsRef as any} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center scroll-scale-in px-4 sm:px-0">
            <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 group border-2 border-primary"
              >
                Book Strategy Call
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}