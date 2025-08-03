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
            <h1 ref={titleRef as any} className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight scroll-blur-to-clear">
              <span className="bg-gradient-to-r from-white via-sparkg-gold to-white bg-clip-text text-transparent">
                Spark Your Digital
              </span>
              <br />
              <span className="text-white">Presence With</span>
              <br />
              <em className="text-sparkg-gold not-italic glow-text">Media That Converts</em>
            </h1>
            
            <p ref={subtitleRef as any} className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed scroll-fade-in">
              Transform your brand with strategic content creation and digital marketing that drives real results for your business.
            </p>
            
            <div ref={buttonsRef as any} className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-scale-in">
              <Link href="/about">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-sparkg-gold to-yellow-500 hover:from-yellow-500 hover:to-sparkg-gold transform hover:scale-105 transition-all duration-300 text-black font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-sparkg-gold/25"
                >
                  START YOUR JOURNEY →
                </Button>
              </Link>
              <Link href="/resources">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-sparkg-gold/50 transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm"
                >
                  EXPLORE SERVICES →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
