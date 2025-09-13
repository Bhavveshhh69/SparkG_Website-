import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useQuery } from "@tanstack/react-query";
import type { SiteSetting } from "@shared/schema";
import boltLogo from "@/assets/sparkg-bolt.png";
import fullLogo from "@/assets/sparkg-logo-with-text.png";
import Threads from "@/components/Threads";

export default function Hero() {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();

  // Counter animations with scroll trigger
  const podcastListeners = useCounterAnimation({ 
    end: 72, 
    duration: 3500,
    startOnScroll: true 
  });
  const brandsElevated = useCounterAnimation({ 
    end: 500, 
    duration: 3000,
    startOnScroll: true 
  });
  const contentViews = useCounterAnimation({ 
    end: 300, 
    duration: 4000,
    startOnScroll: true 
  });

  // Get CTA URL from site settings
  const { data: siteSettings = [] } = useQuery<SiteSetting[]>({
    queryKey: ["/api/admin/site-settings"],
  });

  const heroCtaUrl = siteSettings.find(s => s.key === 'hero_cta_url')?.value || '/about';
  
  return (
    <section className="relative flex items-center pt-8 sm:pt-10 md:pt-14 overflow-hidden hero-section min-h-[100dvh] mobile-portrait-min-h">
      {/* Threads Background */}
      <Threads 
        color={[0.639, 0.514, 0.031]} // SparkG gold color in RGB normalized values
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
        className="absolute inset-0"
      />
      
      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80 z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="flex flex-col items-center text-center justify-center mobile-portrait-min-h" style={{ minHeight: 'inherit' }}>
          <div className="max-w-7xl mx-auto space-y-6 sm:space-y-7 md:space-y-8 px-2 sm:px-6 py-8 sm:py-10 md:py-14">
            {/* Logo */}
            
            <h1 ref={titleRef as any} className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-5 sm:mb-6 md:mb-8">
              <div className="hidden sm:block">
                <span className="text-foreground block">
                  <strong>You Don't Need More Content.</strong>
                </span>
                <span className="text-primary relative block mt-3 sm:mt-4 md:mt-5">
                  <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
                  <span className="relative font-extrabold">You Need a Personal Brand That Makes You Unignorable.</span>
                </span>
              </div>
              <div className="block sm:hidden">
                <span className="text-foreground block text-lg xs:text-xl sm:text-2xl">
                  <strong>You Don't Need More Content.</strong>
                </span>
                <span className="text-primary relative block mt-3 text-lg xs:text-xl sm:text-2xl">
                  <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
                  <span className="relative font-extrabold">You Need a Personal Brand That Makes You Unignorable.</span>
                </span>
              </div>
            </h1>
            
            <div className="max-w-full mx-auto text-center">
              <p ref={subtitleRef as any} className="mobile-text-sm md:text-lg lg:text-xl text-foreground dark:text-muted-foreground mb-4 sm:mb-5 md:mb-6 px-2 sm:px-4 block whitespace-normal break-words mobile-relaxed">We build powerful thought leadership assets for founders, CEOs, and coaches and consultants</p>
              <p className="mobile-text-sm md:text-lg lg:text-xl text-foreground dark:text-muted-foreground mb-5 sm:mb-7 md:mb-9 px-2 sm:px-4 block whitespace-normal break-words mobile-relaxed">so you become the authority in your space and attract every opportunity that matters.</p>
            </div>
            
            <div ref={buttonsRef as any} className="flex flex-col xs:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-center scroll-scale-in mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4 w-full">
              <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer" className="w-full xs:w-auto">
                <Button 
                  size="lg"
                  className="w-full xs:w-auto bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 text-primary-foreground font-bold px-4 xs:px-5 sm:px-7 md:px-9 py-3 xs:py-3 sm:py-4 md:py-5 text-sm xs:text-sm sm:text-base md:text-lg shadow-xl hover:shadow-primary/25 rounded-full border-2 border-primary touch-target whitespace-normal break-words text-center"
                >
                  Book Strategy Call
                </Button>
              </a>
              <Link href="/resources" className="w-full xs:w-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full xs:w-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transform hover:scale-105 transition-all duration-300 px-4 xs:px-5 sm:px-7 md:px-9 py-3 xs:py-3 sm:py-4 md:py-5 text-sm xs:text-sm sm:text-base md:text-lg rounded-full touch-target whitespace-normal break-words text-center"
                >
                  See Results
                </Button>
              </Link>
            </div>

            {/* Enhanced Trust Bar */}
            <div className="max-w-6xl mx-auto text-center px-2 sm:px-4">
              <div className="bg-card/5 backdrop-blur-md border border-primary/20 rounded-2xl p-5 sm:p-6 md:p-7 mb-5 sm:mb-7 md:mb-9 shadow-xl">
                <p className="mobile-text-sm sm:text-base md:text-lg font-semibold text-foreground dark:text-muted-foreground mb-5 sm:mb-6 md:mb-7 px-2 whitespace-normal break-words mobile-relaxed">Trusted by 7-figure coaches, funded founders & elite consultants worldwide.</p>
                
                {/* Featured on section */}
                <div className="mb-5 sm:mb-6 md:mb-7">
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                    <span className="text-primary font-bold mobile-text-sm sm:text-base md:text-lg">Featured on</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 text-foreground font-medium">
                    <div className="px-4 sm:px-5 py-3 bg-white rounded-full border border-primary/30 flex items-center gap-2">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/1024px-Forbes_logo.svg.png" 
                        alt="Forbes" 
                        loading="lazy"
                        decoding="async"
                        className="h-4 sm:h-5 md:h-6 w-auto"
                      />
                    </div>
                    <div className="px-4 sm:px-5 py-3 bg-white rounded-full border border-primary/30 flex items-center gap-2">
                      <img 
                        src="https://www.pngkey.com/png/full/123-1233159_entrepreneur-logo-png-transparent-entrepreneur-logo-png.png" 
                        alt="Entrepreneur" 
                        loading="lazy"
                        decoding="async"
                        className="h-4 sm:h-5 md:h-6 w-auto"
                      />
                    </div>
                    <div className="px-4 sm:px-5 py-3 bg-white rounded-full border border-primary/30 flex items-center gap-2">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Jh6oHK_PEs0lbxXc6IHrufjOplS_63uT8A&s" 
                        alt="Spotify" 
                        loading="lazy"
                        decoding="async"
                        className="h-4 sm:h-5 md:h-6 w-auto"
                      />
                    </div>
                    <div className="px-4 sm:px-5 py-3 bg-white rounded-full border border-primary/30 flex items-center gap-2">
                      <img 
                        src="https://vectorseek.com/wp-content/uploads/2023/08/Apple-Podcasts-Logo-Vector.svg-.png" 
                        alt="Apple Podcasts" 
                        loading="lazy"
                        decoding="async"
                        className="h-4 sm:h-5 md:h-6 w-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
                  <div ref={podcastListeners.ref} className="text-center group">
                    <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-700">{podcastListeners.count}K+</div>
                    <div className="text-foreground font-semibold text-sm sm:text-base">Podcast Listeners</div>
                    <div className="w-8 sm:w-10 h-1 bg-primary mx-auto mt-3"></div>
                  </div>
                  <div ref={brandsElevated.ref} className="text-center group">
                    <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-700">{brandsElevated.count}+</div>
                    <div className="text-foreground font-semibold text-sm sm:text-base">Brands Elevated</div>
                    <div className="w-8 sm:w-10 h-1 bg-primary mx-auto mt-3"></div>
                  </div>
                  <div ref={contentViews.ref} className="text-center group">
                    <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-700">{contentViews.count}M+</div>
                    <div className="text-foreground font-semibold text-sm sm:text-base">Content Views</div>
                    <div className="w-8 sm:w-10 h-1 bg-primary mx-auto mt-3"></div>
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