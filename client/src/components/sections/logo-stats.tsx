import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

// Logo components using React Icons
import { SiSpotify } from "react-icons/si";
import { SiApplepodcasts } from "react-icons/si";

const logos = [
  { icon: () => <span className="text-2xl font-bold text-blue-600">Forbes</span>, name: "Forbes", color: "text-blue-600" },
  { icon: () => <span className="text-2xl font-bold text-green-600">Entrepreneur</span>, name: "Entrepreneur", color: "text-green-600" },
  { icon: SiSpotify, name: "Spotify", color: "text-green-500" },
  { icon: SiApplepodcasts, name: "Apple Podcasts", color: "text-gray-300" }
];

export default function LogoStats() {
  const titleRef = useScrollAnimation();
  
  // Counter animations
  const podcastListeners = useCounterAnimation({ end: 72, duration: 2500 });
  const brandsElevated = useCounterAnimation({ end: 50, duration: 2000 });
  const contentViews = useCounterAnimation({ end: 300, duration: 3000 });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-sparkg-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9B7B0B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Featured In Section */}
        <div ref={titleRef as any} className="text-center mb-16 scroll-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-8">Featured In</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="mb-2">
                  <logo.icon className={`text-4xl md:text-5xl ${logo.color} group-hover:brightness-125 transition-all duration-300`} />
                </div>
                <span className="text-sm text-gray-400 font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div ref={podcastListeners.ref} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#9B7B0B]/30 transition-all duration-300">
            <div className="text-5xl md:text-6xl font-bold text-[#9B7B0B] mb-2">
              {podcastListeners.count}K+
            </div>
            <p className="text-xl text-white font-semibold mb-1">Podcast Listeners</p>
            <p className="text-gray-400 text-sm">Across all platforms</p>
          </div>

          <div ref={brandsElevated.ref} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#9B7B0B]/30 transition-all duration-300">
            <div className="text-5xl md:text-6xl font-bold text-[#9B7B0B] mb-2">
              {brandsElevated.count}+
            </div>
            <p className="text-xl text-white font-semibold mb-1">Brands Elevated</p>
            <p className="text-gray-400 text-sm">To thought leadership</p>
          </div>

          <div ref={contentViews.ref} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#9B7B0B]/30 transition-all duration-300">
            <div className="text-5xl md:text-6xl font-bold text-[#9B7B0B] mb-2">
              {contentViews.count}M+
            </div>
            <p className="text-xl text-white font-semibold mb-1">Content Views</p>
            <p className="text-gray-400 text-sm">Generated for clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}