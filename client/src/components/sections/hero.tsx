import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Hero() {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();
  
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
            <h1 ref={titleRef as any} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight scroll-blur-to-clear mb-8">
              <span className="text-white block mb-4">
                <strong>You Don't Need More Content.</strong>
              </span>
              <span className="bg-gradient-to-r from-sparkg-gold via-yellow-400 to-sparkg-gold bg-clip-text text-transparent glow-text">
                You Need a Personal Brand That Makes You Unignorable.
              </span>
            </h1>
            
            <p ref={subtitleRef as any} className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed scroll-fade-in">
              We build powerful thought leadership assets for founders, CEOs, and coaches — so you become the authority in your space and attract every opportunity that matters.
            </p>
            
            <div ref={buttonsRef as any} className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-scale-in mb-16">
              <Link href="/about">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-sparkg-gold to-yellow-500 hover:from-yellow-500 hover:to-sparkg-gold transform hover:scale-105 transition-all duration-300 text-black font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-sparkg-gold/25 rounded-full"
                >
                  Book Strategy Call
                </Button>
              </Link>
              <Link href="/resources">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-sparkg-gold text-sparkg-gold hover:bg-sparkg-gold hover:text-black transform hover:scale-105 transition-all duration-300 px-10 py-4 text-lg rounded-full border-2"
                >
                  See Results
                </Button>
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-400 text-sm mb-6">Trusted by 7-figure coaches, funded founders & elite consultants worldwide.</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-sparkg-gold font-semibold">Featured on →</span>
                  <span>Forbes, Entrepreneur, Spotify, Apple Podcasts</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-4 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <span>🎙️</span>
                  <span>72K+ Podcast Listeners</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🧠</span>
                  <span>50+ Brands Elevated</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📈</span>
                  <span>300M+ Content Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
