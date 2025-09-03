import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function SocialProof() {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  
  const testimonials = [
    {
      quote: "SparkG Media transformed our digital presence completely. Our engagement rates increased by 400% in just 3 months.",
      author: "Sarah Johnson",
      title: "CEO, TechStart",
      avatar: "bg-gradient-to-br from-primary to-secondary"
    },
    {
      quote: "The strategic content approach they provided helped us close our biggest deals. ROI was immediate and substantial.",
      author: "Michael Chen",
      title: "Founder, Growth Dynamics",
      avatar: "bg-gradient-to-br from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted to-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={titleRef as any} className="scroll-slide-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Trusted by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">10,000+</span> 
              <br />
              <span className="text-foreground">Business Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-foreground">We've helped businesses generate over $10M in revenue through strategic digital marketing, build audiences of 500K+, and establish market-leading brand positions.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From ambitious startups to established enterprises, we work with visionary leaders who understand that digital excellence isn't optional—it's essential. Whether you're launching your first campaign or scaling to new markets, we have the expertise and proven strategies to accelerate your growth.
            </p>
          </div>
          
          <div ref={contentRef as any} className="space-y-6 scroll-slide-right">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card/5 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 ${testimonial.avatar} rounded-full flex-shrink-0 flex items-center justify-center`}>
                    <span className="text-primary-foreground font-bold text-lg">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}