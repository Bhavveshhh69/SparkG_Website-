import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useQuery } from "@tanstack/react-query";
import type { SiteSetting } from "@shared/schema";

export default function Hero() {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();

  // Get CTA URL from site settings
  const { data: siteSettings = [] } = useQuery<SiteSetting[]>({
    queryKey: ["/api/admin/site-settings"],
  });

  const heroCtaUrl = siteSettings.find(s => s.key === 'hero_cta_url')?.value || '/about';
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sparkg-dark via-sparkg-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-sparkg-gold/10 via-transparent to-sparkg-gold/5 animate-pulse"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-sparkg-gold/5 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-sparkg-gold/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="flex flex-col items-center text-center min-h-[80vh] justify-center">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            <h1 ref={titleRef as any} className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-8">
              <span className="text-white block mb-2 sm:mb-4">
                <strong>You Don't Need More Content.</strong>
              </span>
              <span className="text-[#9B7B0B] relative">
                <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
                <span className="relative font-extrabold">You Need a Personal Brand That Makes You Unignorable.</span>
              </span>
            </h1>
            
            <p ref={subtitleRef as any} className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed scroll-fade-in px-4 sm:px-0">
              We build powerful thought leadership assets for founders, CEOs, and coaches — so you become the authority in your space and attract every opportunity that matters.
            </p>
            
            <div ref={buttonsRef as any} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center scroll-scale-in mb-8 sm:mb-16 px-4 sm:px-0">
              {heroCtaUrl.startsWith('http://') || heroCtaUrl.startsWith('https://') ? (
                <a href={heroCtaUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-[#9B7B0B] hover:bg-[#9B7B0B]/90 transform hover:scale-105 transition-all duration-300 text-white font-bold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-[#9B7B0B]/25 rounded-full border-2 border-[#9B7B0B]"
                  >
                    Book Strategy Call
                  </Button>
                </a>
              ) : (
                <Link href={heroCtaUrl} className="w-full sm:w-auto">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-[#9B7B0B] hover:bg-[#9B7B0B]/90 transform hover:scale-105 transition-all duration-300 text-white font-bold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-[#9B7B0B]/25 rounded-full border-2 border-[#9B7B0B]"
                  >
                    Book Strategy Call
                  </Button>
                </Link>
              )}
              <Link href="/resources" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full"
                >
                  See Results
                </Button>
              </Link>
            </div>

            {/* Enhanced Trust Bar */}
            <div className="max-w-6xl mx-auto text-center px-4 sm:px-0">
              <div className="bg-white/5 backdrop-blur-md border border-[#9B7B0B]/20 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 shadow-2xl">
                <p className="text-white text-base sm:text-lg font-semibold mb-6 sm:mb-8">Trusted by 7-figure coaches, funded founders & elite consultants worldwide.</p>
                
                {/* Featured on section */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-[#9B7B0B] font-bold text-base sm:text-lg">Featured on</span>
                    <div className="w-6 sm:w-8 h-0.5 bg-[#9B7B0B]"></div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-white font-medium">
                    <div className="px-3 sm:px-4 py-2 bg-[#9B7B0B]/10 rounded-full border border-[#9B7B0B]/30 flex items-center gap-2 sm:gap-3">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/1024px-Forbes_logo.svg.png" 
                        alt="Forbes" 
                        loading="lazy"
                        decoding="async"
                        className="h-4 sm:h-6 w-auto filter brightness-0 invert"
                      />
                    </div>
                    <div className="px-3 sm:px-4 py-2 bg-[#9B7B0B]/10 rounded-full border border-[#9B7B0B]/30 flex items-center gap-2 sm:gap-3">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Entrepreneur_logo.png" 
                        alt="Entrepreneur" 
                        loading="lazy"
                        decoding="async"
                        className="h-4 sm:h-6 w-auto filter brightness-0 invert"
                      />
                    </div>
                    <span className="px-3 sm:px-4 py-2 bg-[#9B7B0B]/10 rounded-full border border-[#9B7B0B]/30 text-sm sm:text-base">Spotify</span>
                    <span className="px-3 sm:px-4 py-2 bg-[#9B7B0B]/10 rounded-full border border-[#9B7B0B]/30 text-sm sm:text-base">Apple Podcasts</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  <div className="text-center group">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9B7B0B] mb-2 group-hover:scale-110 transition-transform duration-300">72K+</div>
                    <div className="text-white font-semibold text-sm sm:text-base">Podcast Listeners</div>
                    <div className="w-12 h-0.5 bg-[#9B7B0B] mx-auto mt-2"></div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9B7B0B] mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-white font-semibold text-sm sm:text-base">Brands Elevated</div>
                    <div className="w-12 h-0.5 bg-[#9B7B0B] mx-auto mt-2"></div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9B7B0B] mb-2 group-hover:scale-110 transition-transform duration-300">300M+</div>
                    <div className="text-white font-semibold text-sm sm:text-base">Content Views</div>
                    <div className="w-12 h-0.5 bg-[#9B7B0B] mx-auto mt-2"></div>
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
