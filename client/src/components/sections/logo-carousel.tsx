export default function LogoCarousel() {
  const companies = [
    "Signify Technology",
    "National Lottery", 
    "SkyBet",
    "PaddyPower",
    "Alvarez & Marsal",
    "Stir",
    "Cummins",
    "Flutter",
    "Sifted",
    "HF",
    "Oscar"
  ];

  return (
    <section className="py-16 bg-klowt-blue/30">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {/* Original logos */}
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
                <div className="h-8 px-6 bg-white/10 rounded flex items-center justify-center min-w-[120px]">
                  <span className="text-white text-sm font-medium whitespace-nowrap">
                    {company}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite scroll */}
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
                <div className="h-8 px-6 bg-white/10 rounded flex items-center justify-center min-w-[120px]">
                  <span className="text-white text-sm font-medium whitespace-nowrap">
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
