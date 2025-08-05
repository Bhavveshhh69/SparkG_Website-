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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sparkg-dark via-sparkg-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-sparkg-gold/10 via-transparent to-sparkg-gold/5 animate-pulse"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sparkg-gold/5 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sparkg-gold/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center text-center min-h-[80vh] justify-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 ref={titleRef as any} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-white block mb-4">
                <strong>You Don't Need More Content.</strong>
              </span>
              <span className="text-[#9B7B0B] relative">
                <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
                <span className="relative font-extrabold">You Need a Personal Brand That Makes You Unignorable.</span>
              </span>
            </h1>
            
            <p ref={subtitleRef as any} className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed scroll-fade-in">
              We build powerful thought leadership assets for founders, CEOs, and coaches — so you become the authority in your space and attract every opportunity that matters.
            </p>
            
            <div ref={buttonsRef as any} className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-scale-in mb-16">
              {heroCtaUrl.startsWith('http://') || heroCtaUrl.startsWith('https://') ? (
                <a href={heroCtaUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90 transform hover:scale-105 transition-all duration-300 text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-[#9B7B0B]/25 rounded-full border-2 border-[#9B7B0B]"
                  >
                    Book Strategy Call
                  </Button>
                </a>
              ) : (
                <Link href={heroCtaUrl}>
                  <Button 
                    size="lg"
                    className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90 transform hover:scale-105 transition-all duration-300 text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-[#9B7B0B]/25 rounded-full border-2 border-[#9B7B0B]"
                  >
                    Book Strategy Call
                  </Button>
                </Link>
              )}
              <Link href="/resources">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 px-10 py-4 text-lg rounded-full"
                >
                  See Results
                </Button>
              </Link>
            </div>

            {/* Enhanced Trust Bar */}
            <div className="max-w-6xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-md border border-[#9B7B0B]/20 rounded-2xl p-8 mb-8 shadow-2xl">
                <p className="text-white text-lg font-semibold mb-8">Trusted by 7-figure coaches, funded founders & elite consultants worldwide.</p>
                
                {/* Featured on section */}
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-[#9B7B0B] font-bold text-lg">Featured on</span>
                    <div className="w-8 h-0.5 bg-[#9B7B0B]"></div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-6 text-white font-medium">
                    <div className="px-4 py-2 bg-[#9B7B0B]/10 rounded-full border border-[#9B7B0B]/30 flex items-center gap-3">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/1024px-Forbes_logo.svg.png" 
                        alt="Forbes" 
                        className="h-6 w-auto filter brightness-0 invert"
                      />
                    </div>
                    <div className="px-4 py-2 bg-[#9B7B0B]/10 rounded-full border border-[#9B7B0B]/30 flex items-center gap-3">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Entrepreneur_logo.png" 
                        alt="Entrepreneur" 
                        className="h-6 w-auto filter brightness-0 invert"
                      />
                    </div>
                    <span className="px-4 py-2 bg-[#9B7B0B]/10 rounded-full border border-[#9B7B0B]/30">Spotify</span>
                    <span className="px-4 py-2 bg-[#9B7B0B]/10 rounded-full border border-[#9B7B0B]/30">Apple Podcasts</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="text-4xl md:text-5xl font-bold text-[#9B7B0B] mb-2 group-hover:scale-110 transition-transform duration-300">72K+</div>
                    <div className="text-white font-semibold">Podcast Listeners</div>
                    <div className="w-12 h-0.5 bg-[#9B7B0B] mx-auto mt-2"></div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl md:text-5xl font-bold text-[#9B7B0B] mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-white font-semibold">Brands Elevated</div>
                    <div className="w-12 h-0.5 bg-[#9B7B0B] mx-auto mt-2"></div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl md:text-5xl font-bold text-[#9B7B0B] mb-2 group-hover:scale-110 transition-transform duration-300">300M+</div>
                    <div className="text-white font-semibold">Content Views</div>
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
