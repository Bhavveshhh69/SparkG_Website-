export default function LogoCarousel() {
  const companies = [
    "TechCorp",
    "Digital Solutions", 
    "Brand Masters",
    "Creative Studio",
    "Growth Partners",
    "Media Agency",
    "Content Kings",
    "Social Pro",
    "Market Leaders",
    "Brand Force",
    "Digital Elite"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-muted via-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground">Join the brands that chose excellence</p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {/* Original logos */}
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110">
                <div className="h-12 px-8 bg-gradient-to-r from-card/5 to-card/10 backdrop-blur-sm rounded-lg border border-border hover:border-primary/30 flex items-center justify-center min-w-[160px]">
                  <span className="text-foreground text-base font-medium whitespace-nowrap">
                    {company}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite scroll */}
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110">
                <div className="h-12 px-8 bg-gradient-to-r from-card/5 to-card/10 backdrop-blur-sm rounded-lg border border-border hover:border-primary/30 flex items-center justify-center min-w-[160px]">
                  <span className="text-foreground text-base font-medium whitespace-nowrap">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}