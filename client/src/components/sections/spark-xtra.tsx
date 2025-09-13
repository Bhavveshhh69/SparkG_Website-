import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, CheckCircle2, Mic2 } from "lucide-react";

export default function SparkXtra() {
  const titleRef = useScrollAnimation();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background to-card relative overflow-hidden">
      {/* Subtle background accents to match theme */
}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-8 w-40 h-40 sm:w-60 sm:h-60 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-8 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div ref={titleRef as any} className="text-center mb-10 sm:mb-14 scroll-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold tracking-wide text-xs sm:text-sm mb-4">
            <Mic2 className="w-4 h-4" />
            <span>Bonus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            SparkXtra: Podcast-to-Sales Conversion System
          </h2>
          <p className="text-lg sm:text-xl text-foreground mb-2">Turn Every Guest Into a Growth Opportunity.</p>
          <p className="text-muted-foreground max-w-3xl mx-auto">Your podcast isn’t just content it’s your warmest client acquisition system.</p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Left: DFY model bullets */}
          <div ref={leftRef as any} className="scroll-fade-in">
            <p className="text-foreground font-semibold mb-4">With our <span className="text-primary">done-for-you podcast model</span>, we:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 text-muted-foreground">
              <li>Brand and launch your show to establish instant authority.</li>
              <li>Bring in high-value guests that align with your ICP.</li>
              <li>Repurpose every episode into viral short-form content.</li>
              <li>Coach you on transitioning interviews into business opportunities.</li>
              <li>Automate follow-up so conversations turn into <span className="text-foreground font-semibold">sales, partnerships, or referrals</span>.</li>
            </ul>
          </div>

          {/* Right: Benefits with checks + CTA */}
          <div ref={rightRef as any} className="bg-card/5 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 scroll-scale-in">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-foreground mt-0.5" />
                <span className="text-foreground">Warm conversations, not cold outreach.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-foreground mt-0.5" />
                <span className="text-foreground">Direct access to decision-makers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-foreground mt-0.5" />
                <span className="text-foreground">Evergreen content that compounds in value.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-foreground mt-0.5" />
                <span className="text-foreground">ROI-driven: one deal can pay for the entire year.</span>
              </li>
            </ul>

            <div className="mt-6 sm:mt-8">
              <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 sm:px-14 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 group border-2 border-primary"
                >
                  Launch My Podcast-to-Sales System
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}