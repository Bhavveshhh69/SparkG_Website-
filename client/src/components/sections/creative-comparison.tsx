import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { X, Check, Zap } from "lucide-react";

const comparisons = [
  {
    typical: "Content Calendar",
    sparkG: "Legacy System",
    typicalIcon: X,
    sparkGIcon: Check,
  },
  {
    typical: "Editors & VAs",
    sparkG: "Strategists, Creators, Execs",
    typicalIcon: X,
    sparkGIcon: Check,
  },
  {
    typical: "'Post and Hope'",
    sparkG: "Outcome-Driven Brand Assets",
    typicalIcon: X,
    sparkGIcon: Check,
  },
  {
    typical: "Generic Promos",
    sparkG: "Thought Leadership Positioning",
    typicalIcon: X,
    sparkGIcon: Check,
  },
  {
    typical: "DIY Stress",
    sparkG: "Done-For-You, High-Touch",
    typicalIcon: X,
    sparkGIcon: Check,
  }
];

export default function CreativeComparison() {
  const titleRef = useScrollAnimation();
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-sparkg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sparkg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white font-bold">
              What Makes Us
            </span>
            <br />
            <span className="text-[#9B7B0B] relative font-extrabold">
              <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
              <span className="relative">Different?</span>
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            <em className="text-[#9B7B0B] not-italic font-semibold">"You're not building for likes. You're building for leverage."</em>
          </p>
        </div>

        {/* Creative Comparison Table */}
        <div className="max-w-6xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="text-center p-6 bg-red-500/10 rounded-2xl border-2 border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-2">Typical Agencies</h3>
              <p className="text-gray-300">What everyone else does</p>
            </div>
            <div className="text-center p-6 bg-[#9B7B0B]/10 rounded-2xl border-2 border-[#9B7B0B]/50">
              <h3 className="text-2xl font-bold text-[#9B7B0B] mb-2">SparkG Media</h3>
              <p className="text-gray-300">How we do it differently</p>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-6">
            {comparisons.map((comparison, index) => {
              const rowRef = useScrollAnimation();
              return (
                <div 
                  key={index}
                  ref={rowRef as any}
                  className="scroll-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid grid-cols-2 gap-8 relative">
                    {/* VS Divider */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-[#9B7B0B] rounded-full flex items-center justify-center shadow-2xl border-4 border-sparkg-black">
                        <span className="text-white font-bold text-sm">VS</span>
                      </div>
                    </div>

                    {/* Typical Agency Side */}
                    <div className="bg-red-500/5 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                      
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-red-300 mb-2">{comparison.typical}</p>
                          <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                            <comparison.typicalIcon className="w-5 h-5 text-red-400" />
                          </div>
                        </div>
                        
                        {/* Animated disappointment indicator */}
                        <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                          😕
                        </div>
                      </div>
                    </div>

                    {/* SparkG Media Side */}
                    <div className="bg-[#9B7B0B]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#9B7B0B]/20 hover:border-[#9B7B0B]/50 transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-[#9B7B0B]/10 rounded-full blur-2xl transform -translate-x-8 -translate-y-8"></div>
                      
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-[#9B7B0B] mb-2">{comparison.sparkG}</p>
                          <div className="w-8 h-8 bg-[#9B7B0B]/20 rounded-full flex items-center justify-center">
                            <comparison.sparkGIcon className="w-5 h-5 text-[#9B7B0B]" />
                          </div>
                        </div>
                        
                        {/* Animated success indicator */}
                        <div className="text-4xl opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                          🚀
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow Animation */}
                  <div className="flex justify-center mt-4 mb-2">
                    <div className="flex items-center space-x-2 opacity-60">
                      <div className="w-2 h-2 bg-[#9B7B0B] rounded-full animate-ping"></div>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-[#9B7B0B]"></div>
                      <Zap className="w-4 h-4 text-[#9B7B0B] animate-pulse" />
                      <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-[#9B7B0B]"></div>
                      <div className="w-2 h-2 bg-[#9B7B0B] rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#9B7B0B]/10 to-transparent rounded-3xl border border-[#9B7B0B]/20">
            <p className="text-2xl font-bold text-white mb-4">
              Ready to Level Up Your Brand?
            </p>
            <p className="text-gray-300">
              Stop settling for typical. Start building something extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}