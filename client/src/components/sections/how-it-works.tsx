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
      color: "from-[#9B7B0B] to-[#B8941A]"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sparkg-dark via-gray-900 to-sparkg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#9B7B0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-20 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Done-For-You, But Built </span>
            <span className="text-[#9B7B0B] relative font-extrabold">
              <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
              <span className="relative">For You.</span>
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our 3-Step Framework transforms you from invisible to iconic
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Process Flow */}
          <div className="relative">
            {/* Dotted Line with Loops */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1">
              <svg className="w-full h-full" viewBox="0 0 4 800" fill="none">
                <path 
                  d="M2 0 L2 200 Q2 220 22 220 Q42 220 42 240 Q42 260 22 260 L2 260 L2 400 Q2 420 22 420 Q42 420 42 440 Q42 460 22 460 L2 460 L2 600 Q2 620 22 620 Q42 620 42 640 Q42 660 22 660 L2 660 L2 800" 
                  stroke="#9B7B0B" 
                  strokeWidth="2" 
                  strokeDasharray="8,8"
                  opacity="0.6"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {steps.map((step, index) => {
              const cardRef = useScrollAnimation();
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={step.number}
                  className={`relative mb-16 ${isEven ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'} ${isEven ? 'text-right' : 'text-left'}`}
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 z-20">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl border-4 border-sparkg-black`}>
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                  </div>

                  <Card 
                    ref={cardRef as any}
                    className={`bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#9B7B0B]/50 transition-all duration-500 hover:scale-105 scroll-scale-in group relative overflow-hidden ${isEven ? 'md:mr-16' : 'md:ml-16'}`}
                  >
                    <div className={`absolute ${isEven ? 'top-0 right-0' : 'top-0 left-0'} w-32 h-32 bg-gradient-to-r ${step.color} opacity-10 rounded-full blur-2xl transform ${isEven ? 'translate-x-8' : '-translate-x-8'} -translate-y-8`}></div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className={`w-20 h-20 ${isEven ? 'ml-auto' : 'mr-auto'} mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-200 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}