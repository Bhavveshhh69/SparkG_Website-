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
      className="bg-card/5 backdrop-blur-sm rounded-2xl border border-border overflow-hidden scroll-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 text-center">
          {service}
        </h3>
        
        <div className="space-y-4">
          {/* Typical Agency */}
          <div className="bg-destructive/10 rounded-xl p-4 border border-destructive/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0">
                <comparison.typicalIcon className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-destructive-foreground font-medium mb-1">Typical Agencies</p>
                <p className="text-destructive-foreground font-semibold text-sm sm:text-base">{comparison.typical}</p>
              </div>
            </div>
          </div>

          {/* SparkG Media */}
          <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <comparison.sparkGIcon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-primary font-medium mb-1">SparkG Media</p>
                <p className="text-primary font-semibold text-sm sm:text-base">{comparison.sparkG}</p>
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
      className="grid grid-cols-3 border-t border-border hover:bg-accent/5 transition-all duration-300 scroll-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Service Category */}
      <div className="p-6 flex items-center">
        <div className="text-foreground font-semibold">
          {service}
        </div>
      </div>

      {/* Typical Agency */}
      <div className="p-6 border-x border-border bg-destructive/5 flex items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0">
            <comparison.typicalIcon className="w-4 h-4 text-destructive" />
          </div>
          <p className="text-destructive-foreground font-medium">{comparison.typical}</p>
        </div>
      </div>

      {/* SparkG Media */}
      <div className="p-6 bg-primary/5 flex items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
            <comparison.sparkGIcon className="w-4 h-4 text-primary" />
          </div>
          <p className="text-primary font-medium">{comparison.sparkG}</p>
        </div>
      </div>
    </div>
  );
}

export default function CreativeComparison() {
  const titleRef = useScrollAnimation();
  
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-background via-background/90 to-card/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-destructive rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-12 sm:mb-16 scroll-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground font-bold">
              What Makes Us
            </span>
            <br />
            <span className="text-primary relative font-extrabold">
              <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
              <span className="relative">Different?</span>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            <em className="text-primary not-italic font-semibold">"You're not building for likes. You're building for leverage."</em>
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
          <div className="hidden lg:block bg-card/5 backdrop-blur-sm rounded-3xl border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-muted to-card">
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-muted-foreground">Service Area</h3>
              </div>
              <div className="p-6 text-center bg-destructive/10 border-x border-destructive/20">
                <h3 className="text-xl font-bold text-destructive">Typical Agencies</h3>
                <p className="text-sm text-muted-foreground mt-1">What everyone else does</p>
              </div>
              <div className="p-6 text-center bg-primary/10">
                <h3 className="text-xl font-bold text-primary">SparkG Media</h3>
                <p className="text-sm text-muted-foreground mt-1">How we do it differently</p>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((comparison, index) => (
              <ComparisonRow key={index} comparison={comparison} service={serviceCategories[index]} index={index} />
            ))}

            {/* Table Footer */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center border-t border-primary/20">
              <p className="text-xl font-bold text-foreground mb-2">
                The Choice is Clear
              </p>
              <p className="text-muted-foreground">
                Stop settling for typical. Start building something extraordinary.
              </p>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="lg:hidden mt-8 bg-gradient-to-r from-primary/10 to-primary/5 p-6 sm:p-8 text-center rounded-2xl border border-primary/20">
            <p className="text-lg sm:text-xl font-bold text-foreground mb-2">
              The Choice is Clear
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Stop settling for typical. Start building something extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}