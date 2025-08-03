import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Positioning() {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-sparkg-black to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-sparkg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 ref={titleRef as any} className="text-4xl md:text-6xl font-bold mb-12 scroll-blur-to-clear">
            <span className="bg-gradient-to-r from-sparkg-gold via-yellow-400 to-sparkg-gold bg-clip-text text-transparent">
              Personal Branding That Pays Dividends Forever.
            </span>
          </h2>
          
          <div ref={contentRef as any} className="space-y-8 text-xl md:text-2xl leading-relaxed scroll-fade-in">
            <p className="text-gray-200">
              At SparkG Media, we don't <em className="text-sparkg-gold not-italic">"do content."</em>
            </p>
            
            <p className="text-white font-semibold">
              We build your digital legacy — a magnetic brand system that positions you as a media personality in your industry.
            </p>
            
            <p className="text-gray-300">
              <strong className="text-sparkg-gold">Done-for-you. End-to-end.</strong> From strategy to execution.
            </p>
            
            <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-sparkg-gold/20">
              <p className="text-2xl md:text-3xl font-bold text-white">
                While others post to stay active —<br />
                <span className="text-sparkg-gold">we position you to stay iconic.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}