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
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-sparkg-dark via-gray-900 to-sparkg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#9B7B0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 sm:w-80 sm:h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 sm:mb-20 scroll-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Done-For-You, But Built </span>
            <span className="text-[#9B7B0B] relative font-extrabold">
              <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
              <span className="relative">For You.</span>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto px-4 sm:px-0">
            Our 3-Step Framework transforms you from invisible to iconic
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Mobile: Simple vertical layout, Desktop: Process Flow */}
          <div className="relative">
            {/* Desktop Dotted Line with Loops - Hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden md:block">
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
                  className={`relative mb-12 sm:mb-16 ${
                    // Mobile: center everything, Desktop: alternate sides
                    isEven 
                      ? 'md:pr-8 lg:pr-16' 
                      : 'md:pl-8 lg:pl-16'
                  } ${
                    isEven 
                      ? 'md:text-right' 
                      : 'md:text-left'
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className={`${
                    // Mobile: left aligned, Desktop: center
                    'absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2'
                  } -translate-y-1/2 top-8 z-20`}>
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl border-4 border-sparkg-black`}>
                      <span className="text-white font-bold text-lg sm:text-xl">{step.number}</span>
                    </div>
                  </div>

                  <Card 
                    ref={cardRef as any}
                    className={`bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#9B7B0B]/50 transition-all duration-500 hover:scale-105 scroll-scale-in group relative overflow-hidden ${
                      // Mobile: margin for number circle, Desktop: responsive margins
                      'ml-20 sm:ml-24 md:ml-0'
                    } ${
                      isEven 
                        ? 'md:mr-8 lg:mr-16' 
                        : 'md:ml-8 lg:ml-16'
                    }`}
                  >
                    <div className={`absolute ${
                      isEven 
                        ? 'top-0 right-0' 
                        : 'top-0 left-0'
                    } w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r ${step.color} opacity-10 rounded-full blur-2xl transform ${
                      isEven 
                        ? 'translate-x-4 sm:translate-x-8' 
                        : '-translate-x-4 sm:-translate-x-8'
                    } -translate-y-4 sm:-translate-y-8`}></div>
                    
                    <CardContent className="p-6 sm:p-8 relative z-10">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 ${
                        // Mobile: left aligned, Desktop: responsive alignment
                        'mb-4 sm:mb-6 md:' + (isEven ? 'ml-auto' : 'mr-auto')
                      } rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{step.title}</h3>
                      <p className="text-gray-200 leading-relaxed text-sm sm:text-base">{step.description}</p>
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