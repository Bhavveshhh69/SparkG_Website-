import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Positioning() {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background via-background/90 to-card/80 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-60 h-60 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 ref={titleRef as any} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 scroll-blur-to-clear">
            <span className="text-primary relative font-extrabold">
              <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
              <span className="relative">Personal Branding That Pays Dividends Forever.</span>
            </span>
          </h2>
          
          <div ref={contentRef as any} className="space-y-6 sm:space-y-8 text-lg sm:text-xl md:text-2xl leading-relaxed scroll-fade-in px-4 sm:px-0">
            <p className="text-muted-foreground">
              At SparkG Media, we don't <em className="text-primary not-italic">"do content."</em>
            </p>
            
            <p className="text-foreground font-semibold">
              We build your digital legacy a magnetic brand system that positions you as a media personality in your industry.
            </p>
            
            <p className="text-foreground">
              <strong className="text-primary">Done-for-you. End-to-end.</strong> From strategy to execution.
            </p>
            
            <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-primary/20">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                While others post to stay active<br className="hidden sm:block" />
                <span className="text-primary">we position you to stay iconic.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}