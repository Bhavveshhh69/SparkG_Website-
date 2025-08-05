import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

export default function ProofSection() {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  
  const results = [
    {
      result: "From 0 to 3,500 qualified followers in 60 days",
      outcome: "4 inbound consulting leads",
      highlight: "3,500 followers"
    },
    {
      result: "Landed 3 podcast interviews, 1 speaking gig",
      outcome: "Approached by Forbes India",
      highlight: "Forbes India"
    },
    {
      result: "Finally feel like my brand matches the caliber of my work",
      outcome: "Authentic thought leadership positioning",
      highlight: "Authentic positioning"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-sparkg-black to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#9B7B0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-blur-to-clear">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Results That Speak
            <span className="block text-[#9B7B0B] font-extrabold relative">
              <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
              <span className="relative">For Themselves.</span>
            </span>
          </h2>
        </div>

        <div ref={contentRef as any} className="grid md:grid-cols-3 gap-8 mb-16 scroll-fade-in">
          {results.map((item, index) => {
            const cardRef = useScrollAnimation();
            return (
              <Card 
                key={index}
                ref={cardRef as any}
                className="bg-white/5 backdrop-blur-md border-[#9B7B0B]/20 hover:border-[#9B7B0B]/50 transition-all duration-500 hover:scale-105 scroll-scale-in group"
              >
                <CardContent className="p-8">
                  <div className="text-[#9B7B0B] text-4xl font-bold mb-4">•</div>
                  <p className="text-white font-semibold mb-3 leading-relaxed">
                    {item.result}
                  </p>
                  <p className="text-gray-300 text-sm">
                    — {item.outcome}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/case-studies">
              <Button 
                size="lg"
                className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90 transform hover:scale-105 transition-all duration-300 text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-[#9B7B0B]/25 rounded-full border-2 border-[#9B7B0B]"
              >
                View Case Studies
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}