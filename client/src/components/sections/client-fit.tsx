import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const fitCriteria = [
  "You're a founder, coach, or consultant with a big vision",
  "You're ready to be seen, heard, and respected",
  "You don't want to micromanage — you want a trusted partner",
  "You believe your personal brand is your most valuable asset"
];

// New component for the animated item
function FitCriterion({ criteria, index }: { criteria: string, index: number }) {
  const ref = useScrollAnimation();
  return (
    <div 
      ref={ref as any}
      className="scroll-fade-in flex items-center p-4 sm:p-6 bg-card/5 backdrop-blur-sm rounded-2xl border border-border hover:bg-accent/10 transition-all duration-300"
      style={{ 
        animationDelay: `${index * 0.1}s` 
      }}
    >
      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4 sm:mr-6">
        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground font-bold" />
      </div>
      <p className="text-lg sm:text-xl text-muted-foreground font-medium">
        {criteria}
      </p>
    </div>
  );
}

export default function ClientFit() {
  const titleRef = useScrollAnimation();
  
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-background via-background/90 to-card/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-12 sm:mb-16 scroll-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground font-bold">
              Are We the
            </span>
            <br />
            <span className="text-primary relative font-extrabold">
              <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
              <span className="relative">Right Fit?</span>
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 sm:gap-6">
            {fitCriteria.map((criteria, index) => (
              <FitCriterion key={index} criteria={criteria} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}