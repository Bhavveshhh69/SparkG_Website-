import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useQuery } from "@tanstack/react-query";
import type { SiteSetting } from "@shared/schema";
import boltLogo from "@/assets/sparkg-bolt.png";
import fullLogo from "@/assets/sparkg-logo-with-text.png";

export default function Hero() {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();

  // Counter animations
  const podcastListeners = useCounterAnimation({ end: 72, duration: 2500 });
  const brandsElevated = useCounterAnimation({ end: 500, duration: 2000 });
  const contentViews = useCounterAnimation({ end: 300, duration: 3000 });

  // Get CTA URL from site settings
  const { data: siteSettings = [] } = useQuery<SiteSetting[]>({
    queryKey: ["/api/admin/site-settings"],
  });

  const heroCtaUrl = siteSettings.find(s => s.key === 'hero_cta_url')?.value || '/about';
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-background to-background/90"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 animate-pulse"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl animate-bounce opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-primary/25 rounded-full blur-2xl animate-pulse opacity-30"></div>
      
      <div className="container mx-auto px-2 sm:px-6 relative z-20">
        <div className="flex flex-col items-center text-center min-h-[80vh] justify-center">
          <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 px-1 sm:px-4">
            {/* Logo */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                <img src={boltLogo} alt="SparkG Logo" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            
            <h1 ref={titleRef as any} className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-8">
              <div className="hidden sm:block">
                <span className="text-foreground whitespace-nowrap">
                  <strong>You Don't Need More Content.</strong>
                </span>
                <span className="text-primary relative ml-2">
                  <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
                  <span className="relative font-extrabold">You Need a Personal Brand That Makes You Unignorable.</span>
                </span>
              </div>
              <div className="block sm:hidden">
                <span className="text-foreground whitespace-nowrap mb-2">
                  <strong>You Don't Need More Content.</strong>
                </span>
                <span className="text-primary relative block">
                  <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
                  <span className="relative font-extrabold">You Need a Personal Brand That Makes You Unignorable.</span>
                </span>
              </div>
            </h1>
            
            <div className="max-w-full mx-auto text-center">
              <p ref={subtitleRef as any} className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2 sm:mb-3 px-1 sm:px-0 inline-block">We build powerful thought leadership assets for founders, CEOs, and coaches and consultants</p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 px-1 sm:px-0 block">so you become the authority in your space and attract every opportunity that matters.</p>
            </div>
            
            <div ref={buttonsRef as any} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center scroll-scale-in mb-8 sm:mb-16 px-1 sm:px-0">
              <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 text-primary-foreground font-bold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-primary/25 rounded-full border-2 border-primary"
                >
                  Book Strategy Call
                </Button>
              </a>
              <Link href="/resources" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transform hover:scale-105 transition-all duration-300 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full"
                >
                  See Results
                </Button>
              </Link>
            </div>

            {/* Enhanced Trust Bar */}
            <div className="max-w-6xl mx-auto text-center px-1 sm:px-0">
              <div className="bg-card/5 backdrop-blur-md border border-primary/20 rounded-2xl p-3 sm:p-6 md:p-8 mb-8 shadow-2xl">
                <p className="text-foreground text-base sm:text-lg font-semibold mb-6 sm:mb-8">Trusted by 7-figure coaches, funded founders & elite consultants worldwide.</p>
                
                {/* Featured on section */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-primary font-bold text-base sm:text-lg">Featured on</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-foreground font-medium">
                    <div className="px-3 sm:px-4 py-2 bg-white rounded-full border border-primary/30 flex items-center gap-2 sm:gap-3">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/1024px-Forbes_logo.svg.png" 
                        alt="Forbes" 
                        loading="lazy"
                        decoding="async"
                        className="h-4 sm:h-5 w-auto"
                      />
                    </div>
                    <div className="px-3 sm:px-4 py-2 bg-white rounded-full border border-primary/30 flex items-center gap-2 sm:gap-3">
                      <img 
                        src="https://www.pngkey.com/png/full/123-1233159_entrepreneur-logo-png-transparent-entrepreneur-logo-png.png" 
                        alt="Entrepreneur" 
                        loading="lazy"
                        decoding="async"
                        className="h-4 sm:h-5 w-auto"
                      />
                    </div>
                    <div className="px-3 sm:px-4 py-2 bg-white rounded-full border border-primary/30 flex items-center gap-2 sm:gap-3">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Jh6oHK_PEs0lbxXc6IHrufjOplS_63uT8A&s" 
                        alt="Spotify" 
                        loading="lazy"
                        decoding="async"
                        className="h-4 sm:h-5 w-auto"
                      />
                    </div>
                    <div className="px-3 sm:px-4 py-2 bg-white rounded-full border border-primary/30 flex items-center gap-2 sm:gap-3">
                      <img 
                        src="https://vectorseek.com/wp-content/uploads/2023/08/Apple-Podcasts-Logo-Vector.svg-.png" 
                        alt="Apple Podcasts" 
                        loading="lazy"
                        decoding="async"
                        className="h-4 sm:h-5 w-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  <div ref={podcastListeners.ref} className="text-center group">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-700">{podcastListeners.count}K+</div>
                    <div className="text-foreground font-semibold text-sm sm:text-base">Podcast Listeners</div>
                    <div className="w-12 h-0.5 bg-primary mx-auto mt-2"></div>
                  </div>
                  <div ref={brandsElevated.ref} className="text-center group">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-700">{brandsElevated.count}+</div>
                    <div className="text-foreground font-semibold text-sm sm:text-base">Brands Elevated</div>
                    <div className="w-12 h-0.5 bg-primary mx-auto mt-2"></div>
                  </div>
                  <div ref={contentViews.ref} className="text-center group">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-700">{contentViews.count}M+</div>
                    <div className="text-foreground font-semibold text-sm sm:text-base">Content Views</div>
                    <div className="w-12 h-0.5 bg-primary mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}