import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Target, Zap, TrendingUp, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const comparisons = [
  {
    typical: "Content Calendar",
    sparkG: "Legacy System",
    description: "We don't just plan posts—we build systems that create lasting impact and thought leadership positioning.",
    icon: Target,
    color: "from-sparkg-gold to-primary"
  },
  {
    typical: "Editors & VAs",
    sparkG: "Strategists, Creators, Execs",
    description: "Work with senior-level professionals who understand business strategy, not just content creation.",
    icon: Users,
    color: "from-accent to-sparkg-gold"
  },
  {
    typical: "'Post and Hope'",
    sparkG: "Outcome-Driven Brand Assets",
    description: "Every piece of content is strategically designed to generate specific business outcomes and opportunities.",
    icon: TrendingUp,
    color: "from-sparkg-gold to-destructive"
  },
  {
    typical: "Generic Promos",
    sparkG: "Thought Leadership Positioning",
    description: "Position yourself as the authority in your space through premium content that elevates your expertise.",
    icon: Award,
    color: "from-secondary to-sparkg-gold"
  },
  {
    typical: "DIY Stress",
    sparkG: "Done-For-You, High-Touch",
    description: "Focus on running your business while we handle the complex work of building your digital legacy.",
    icon: Zap,
    color: "from-accent to-sparkg-gold"
  }
];

export default function Features() {
  const titleRef = useScrollAnimation();
  
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted to-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground font-bold">
              What Makes Us
            </span>
            <br />
            <span className="text-primary relative font-extrabold">
              <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
              <span className="relative">Different?</span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <em className="text-primary not-italic font-semibold">"You're not building for likes. You're building for leverage."</em>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.slice(0, 5).map((comparison, index) => {
            const cardRef = useScrollAnimation();
            return (
              <Card 
                key={index}
                ref={cardRef as any}
                className={`bg-card/5 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group ${
                  index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'
                }`}
              >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${comparison.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <comparison.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="mb-4">
                  <div className="text-muted-foreground text-sm mb-2 line-through">Typical Agencies: {comparisons[index]?.typical}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">SparkG Media: {comparisons[index]?.sparkG}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{comparisons[index]?.description}</p>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}