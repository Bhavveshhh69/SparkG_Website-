import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const fitCriteria = [
  "You're a founder, coach, or consultant with a big vision",
  "You're ready to be seen, heard, and respected",
  "You don't want to micromanage — you want a trusted partner",
  "You believe your personal brand is your most valuable asset"
];

export default function ClientFit() {
  const titleRef = useScrollAnimation();
  
  return (
    <section className="py-20 bg-gradient-to-br from-sparkg-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9B7B0B] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white font-bold">
              Are We the
            </span>
            <br />
            <span className="text-[#9B7B0B] relative font-extrabold">
              <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
              <span className="relative">Right Fit?</span>
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {fitCriteria.map((criteria, index) => {
              const itemRef = useScrollAnimation();
              return (
                <div 
                  key={index}
                  ref={itemRef as any}
                  className="scroll-fade-in flex items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 0.1}s` 
                  }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#9B7B0B] to-yellow-500 rounded-full flex items-center justify-center mr-6">
                    <Check className="w-5 h-5 text-white font-bold" />
                  </div>
                  <p className="text-xl text-gray-200 font-medium">
                    {criteria}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}