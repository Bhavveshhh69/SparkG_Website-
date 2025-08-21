import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsGrid() {
  const titleRef = useScrollAnimation();
  
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  // Filter active testimonials
  const activeTestimonials = testimonials.filter(t => t.isActive);
  const testimonialsToRender = activeTestimonials.length > 0 ? activeTestimonials : testimonials;

  if (isLoading) {
    return (
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-sparkg-black to-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Results That Speak for Themselves
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 animate-pulse border border-white/10">
                <div className="h-4 bg-gray-600 rounded mb-4"></div>
                <div className="h-4 bg-gray-600 rounded mb-6"></div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-600 rounded mb-2"></div>
                    <div className="h-3 bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-sparkg-black to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#9B7B0B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Results That </span>
            <span className="text-[#9B7B0B] relative font-extrabold">
              <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
              <span className="relative">Speak for Themselves</span>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto px-4 sm:px-0">
            Real transformations from real clients who trusted us with their brand legacy.
          </p>
        </div>

        {/* Dynamic Testimonials Grid */}
        {testimonialsToRender.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonialsToRender.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#9B7B0B]/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-[#9B7B0B] text-[#9B7B0B]" 
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-gray-200 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        loading="lazy"
                        decoding="async"
                        width={56}
                        height={56}
                        sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 56px"
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#9B7B0B]/30"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#9B7B0B]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#9B7B0B] font-bold text-lg sm:text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-sm sm:text-base group-hover:text-[#9B7B0B] transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm truncate">
                        {testimonial.title}
                      </div>
                      {testimonial.company && (
                        <div className="text-[#9B7B0B] text-xs sm:text-sm font-medium truncate">
                          {testimonial.company}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">No testimonials available at the moment.</p>
            <p className="text-gray-500 mt-2">Check back soon for amazing client stories!</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-[#9B7B0B]/10 to-[#9B7B0B]/5 rounded-2xl p-6 sm:p-8 border border-[#9B7B0B]/20 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl font-bold text-white mb-2">
              Ready to Join Them?
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              Your success story could be next. Let's build your legacy together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}