import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sparkg-dark via-sparkg-black/90 to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              spark your digital<br />
              <span className="text-white">presence</span> with{" "}
              <em className="text-sparkg-gold not-italic">media</em><br />
              that <span className="text-white">converts</span>.
            </h1>
            
            <p className="text-lg text-sparkg-gray mb-8 max-w-md">
              Transform your brand with strategic content creation and digital marketing that drives real results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/community">
                <Button 
                  size="lg"
                  className="bg-sparkg-gold hover:bg-sparkg-gold/90 transform hover:scale-105 transition-all text-black"
                >
                  START YOUR JOURNEY →
                </Button>
              </Link>
              <Link href="/resources">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
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
