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

const serviceCategories = [
  "Content Strategy",
  "Team Composition", 
  "Content Approach",
  "Brand Positioning",
  "Service Model"
];

// New component for the animated mobile card
function ComparisonCard({ comparison, service, index }: { comparison: any, service: string, index: number }) {
  const ref = useScrollAnimation();
  return (
    <div 
      ref={ref as any}
      key={index}
      className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden scroll-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
          {service}
        </h3>
        
        <div className="space-y-4">
          {/* Typical Agency */}
          <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <comparison.typicalIcon className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-red-300 font-medium mb-1">Typical Agencies</p>
                <p className="text-red-300 font-semibold text-sm sm:text-base">{comparison.typical}</p>
              </div>
            </div>
          </div>

          {/* SparkG Media */}
          <div className="bg-[#9B7B0B]/10 rounded-xl p-4 border border-[#9B7B0B]/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#9B7B0B]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <comparison.sparkGIcon className="w-4 h-4 text-[#9B7B0B]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-[#9B7B0B] font-medium mb-1">SparkG Media</p>
                <p className="text-[#9B7B0B] font-semibold text-sm sm:text-base">{comparison.sparkG}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// New component for the animated table row
function ComparisonRow({ comparison, service, index }: { comparison: any, service: string, index: number }) {
  const ref = useScrollAnimation();
  return (
    <div 
      ref={ref as any}
      key={index}
      className="grid grid-cols-3 border-t border-white/10 hover:bg-white/5 transition-all duration-300 scroll-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Service Category */}
      <div className="p-6 flex items-center">
        <div className="text-white font-semibold">
          {service}
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
}

export default function CreativeComparison() {
  const titleRef = useScrollAnimation();
  
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-sparkg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-sparkg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-red-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-12 sm:mb-16 scroll-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white font-bold">
              What Makes Us
            </span>
            <br />
            <span className="text-[#9B7B0B] relative font-extrabold">
              <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
              <span className="relative">Different?</span>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            <em className="text-[#9B7B0B] not-italic font-semibold">"You're not building for likes. You're building for leverage."</em>
          </p>
        </div>

        {/* Mobile-First Comparison Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Card-based layout, Desktop: Table layout */}
          <div className="lg:hidden space-y-6">
            {comparisons.map((comparison, index) => (
              <ComparisonCard key={index} comparison={comparison} service={serviceCategories[index]} index={index} />
            ))}
          </div>

          {/* Desktop: Table Layout */}
          <div className="hidden lg:block bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
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
            {comparisons.map((comparison, index) => (
              <ComparisonRow key={index} comparison={comparison} service={serviceCategories[index]} index={index} />
            ))}

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

          {/* Mobile Footer */}
          <div className="lg:hidden mt-8 bg-gradient-to-r from-[#9B7B0B]/10 to-[#9B7B0B]/5 p-6 sm:p-8 text-center rounded-2xl border border-[#9B7B0B]/20">
            <p className="text-lg sm:text-xl font-bold text-white mb-2">
              The Choice is Clear
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              Stop settling for typical. Start building something extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}