import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CTA() {
  const titleRef = useScrollAnimation();
  const transformRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();
  
  return (
    <section className="py-20 bg-gradient-to-br from-sparkg-black via-gray-900 to-sparkg-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sparkg-gold/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sparkg-gold/5 to-purple-500/5 rounded-full blur-3xl animate-spin"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-sparkg-gold to-yellow-500 rounded-full">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 ref={titleRef as any} className="text-4xl md:text-6xl font-bold mb-6 scroll-fade-in">
            Ready to{" "}
            <span ref={transformRef as any} className="text-[#9B7B0B] relative font-extrabold scroll-blur-to-clear inline-block">
              <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
              <span className="relative">Build the Brand</span>
            </span>
            <br />
            <span className="text-white">That Builds Everything Else?</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            We work with a select group of high-performing leaders each quarter. Let's see if we're a fit.
          </p>
          
          <div ref={buttonsRef as any} className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-scale-in">
            <Link href="/about">
              <Button 
                size="lg"
                className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90 text-white font-bold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-[#9B7B0B]/25 transform hover:scale-105 transition-all duration-300 group border-2 border-[#9B7B0B]"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link href="/resources">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[#9B7B0B] font-semibold">⚡ Limited availability for August onboarding</p>
          </div>
        </div>
      </div>
    </section>
  );
}