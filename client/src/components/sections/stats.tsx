import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const stats = [
  {
    number: "500+",
    label: "Brands Transformed",
    description: "Successful brand makeovers"
  },
  {
    number: "2M+",
    label: "Audience Reached",
    description: "Total engagement across platforms"
  },
  {
    number: "300%",
    label: "Average Growth",
    description: "Client conversion increase"
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Dedicated account management"
  }
];

export default function Stats() {
  const titleRef = useScrollAnimation();
  
  return (
    <section className="py-20 bg-gradient-to-r from-sparkg-gold/10 via-sparkg-black to-sparkg-gold/10 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--sparkg-gold)_0%,_transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-blur-to-clear">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Results That Speak
            <span className="block text-sparkg-gold glow-text">Louder Than Words</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it—here's the impact we've made
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const cardRef = useScrollAnimation();
            return (
              <Card 
                key={index}
                ref={cardRef as any}
                className="bg-white/5 backdrop-blur-md border-sparkg-gold/20 hover:border-sparkg-gold/50 transition-all duration-500 hover:scale-105 scroll-scale-in group"
              >
              <CardContent className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-sparkg-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}