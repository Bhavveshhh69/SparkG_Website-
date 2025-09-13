import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ValueProps() {
  const titleRef = useScrollAnimation();
  
  const valueProps = [
    {
      number: "01",
      title: "Strategic Content Creation",
      description: "Develop compelling content strategies that engage your audience and drive conversions across all digital platforms.",
      cta: "Explore Services",
      link: "/resources",
      gradient: "from-sparkg-gold to-primary"
    },
    {
      number: "02", 
      title: "Brand Development & Positioning",
      description: "Build a distinctive brand identity that resonates with your target market and stands out from competitors.",
      cta: "Learn More",
      link: "/about",
      gradient: "from-accent to-sparkg-gold"
    },
    {
      number: "03",
      title: "Digital Marketing Excellence", 
      description: "Implement data-driven marketing campaigns that maximize ROI and accelerate your business growth.",
      cta: "Get Started",
      link: "/about",
      gradient: "from-sparkg-gold to-destructive"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted to-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Turn Your <span className="bg-gradient-to-r from-sparkg-gold to-primary bg-clip-text text-transparent">Vision</span>
            <br />
            <span className="text-foreground">Into Digital Reality</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We transform businesses through strategic digital solutions that deliver measurable results
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => {
            const cardRef = useScrollAnimation();
            return (
              <div 
                key={prop.number}
                ref={cardRef as any}
                className="group hover:transform hover:scale-105 transition-all duration-500 scroll-scale-in"
              >
              <div className="bg-card/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-border hover:border-primary/30 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${prop.gradient} opacity-10 rounded-full blur-2xl transform translate-x-8 -translate-y-8`}></div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${prop.gradient} flex items-center justify-center mr-4`}>
                    <span className="text-2xl font-bold text-primary-foreground">{prop.number}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">{prop.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">{prop.description}</p>
                
                <Link href={prop.link}>
                  <button className="text-primary font-semibold hover:text-foreground transition-colors group-hover:translate-x-2 transform duration-300 relative z-10">
                    {prop.cta} →
                  </button>
                </Link>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}