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

        {/* Improved Comparison Table */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-gray-800 to-gray-900">
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-400">Service Area</h3>
              </div>
              <div className="p-6 text-center bg-red-500/10 border-x border-red-500/20">
                <h3 className="text-xl font-bold text-red-400">Typical Agencies</h3>
                <p className="text-sm text-gray-300 mt-1">What everyone else does</p>
              </div>
              <div className="p-6 text-center bg-[#9B7B0B]/10">
                <h3 className="text-xl font-bold text-[#9B7B0B]">SparkG Media</h3>
                <p className="text-sm text-gray-300 mt-1">How we do it differently</p>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((comparison, index) => {
              const rowRef = useScrollAnimation();
              return (
                <div 
                  key={index}
                  ref={rowRef as any}
                  className="grid grid-cols-3 border-t border-white/10 hover:bg-white/5 transition-all duration-300 scroll-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Service Category */}
                  <div className="p-6 flex items-center">
                    <div className="text-white font-semibold">
                      {index === 0 && "Content Strategy"}
                      {index === 1 && "Team Composition"}
                      {index === 2 && "Content Approach"}
                      {index === 3 && "Brand Positioning"}
                      {index === 4 && "Service Model"}
                    </div>
                  </div>

                  {/* Typical Agency */}
                  <div className="p-6 border-x border-white/10 bg-red-500/5 flex items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <comparison.typicalIcon className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="text-red-300 font-medium">{comparison.typical}</p>
                    </div>
                  </div>

                  {/* SparkG Media */}
                  <div className="p-6 bg-[#9B7B0B]/5 flex items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#9B7B0B]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <comparison.sparkGIcon className="w-4 h-4 text-[#9B7B0B]" />
                      </div>
                      <p className="text-[#9B7B0B] font-medium">{comparison.sparkG}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Table Footer */}
            <div className="bg-gradient-to-r from-[#9B7B0B]/10 to-[#9B7B0B]/5 p-8 text-center border-t border-[#9B7B0B]/20">
              <p className="text-xl font-bold text-white mb-2">
                The Choice is Clear
              </p>
              <p className="text-gray-300">
                Stop settling for typical. Start building something extraordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}