import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Target, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorks() {
  const titleRef = useScrollAnimation();
  
  const steps = [
    {
      number: "1",
      title: "Magnetic Positioning",
      description: "We identify what makes you powerful — and turn it into a market-dominating positioning.",
      icon: Target,
      color: "from-emerald-500 to-teal-600"
    },
    {
      number: "2", 
      title: "Premium Content Engine",
      description: "You show up. We do the rest. Includes short-form video, long-form repurposing, podcast invites, PR placements, and more.",
      icon: Zap,
      color: "from-blue-500 to-purple-600"
    },
    {
      number: "3",
      title: "Legacy System Activation", 
      description: "Your brand becomes a magnet for speaking gigs, followers, sales, media features — all driven by your unique digital presence.",
      icon: TrendingUp,
      color: "from-sparkg-gold to-yellow-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sparkg-dark via-gray-900 to-sparkg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sparkg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-20 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Done-For-You, But Built </span>
            <span className="bg-gradient-to-r from-sparkg-gold to-yellow-400 bg-clip-text text-transparent">*For You*.</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our 3-Step Framework transforms you from invisible to iconic
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const cardRef = useScrollAnimation();
            return (
              <Card 
                key={step.number}
                ref={cardRef as any}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-sparkg-gold/50 transition-all duration-500 hover:scale-105 scroll-scale-in group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${step.color} opacity-10 rounded-full blur-2xl transform translate-x-8 -translate-y-8`}></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-6xl font-bold text-sparkg-gold/20 mb-4 absolute top-4 left-6">
                    {step.number}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                  <p className="text-gray-200 leading-relaxed relative z-10">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}