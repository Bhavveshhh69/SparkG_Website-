import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
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
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-sparkg-gold via-yellow-400 to-sparkg-gold bg-clip-text text-transparent glow-text">
              Transform
            </span>
            <br />
            <span className="text-white">Your Digital Presence?</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful brands who've already made the leap. 
            Your audience is waiting—let's make them notice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/about">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-sparkg-gold to-yellow-500 hover:from-yellow-500 hover:to-sparkg-gold text-black font-bold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-sparkg-gold/25 transform hover:scale-105 transition-all duration-300 group"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link href="/resources">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-sparkg-gold/50 px-10 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fadeIn">
              <div className="text-2xl font-bold text-sparkg-gold mb-2">Free Consultation</div>
              <p className="text-gray-300">No commitment required</p>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl font-bold text-sparkg-gold mb-2">30-Day Guarantee</div>
              <p className="text-gray-300">See results or money back</p>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <div className="text-2xl font-bold text-sparkg-gold mb-2">24/7 Support</div>
              <p className="text-gray-300">We're here when you need us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}