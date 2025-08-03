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

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-sparkg-black to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Results That Speak for Themselves
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-pulse">
                <div className="h-4 bg-gray-600 rounded mb-4"></div>
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
    <section className="py-20 bg-gradient-to-br from-gray-900 via-sparkg-black to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9B7B0B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Results That </span>
            <span className="text-[#9B7B0B] relative font-extrabold">
              <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
              <span className="relative">Speak for Themselves</span>
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Real transformations from CEOs, coaches, and founders who trusted us with their personal brands
          </p>
        </div>

        {/* Dynamic Testimonials Grid */}
        {activeTestimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {activeTestimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#9B7B0B]/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Star Rating */}
                  <div className="flex mb-6 space-x-1">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#9B7B0B] text-[#9B7B0B]" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg text-gray-200 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    {testimonial.image && (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-[#9B7B0B]/50"
                      />
                    )}
                    <div className="flex-1">
                      <div className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-[#9B7B0B] font-medium">
                        {testimonial.title} at {testimonial.company}
                      </div>
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

        {/* Bottom Quote */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#9B7B0B]/10 to-transparent rounded-3xl border border-[#9B7B0B]/20">
          <p className="text-2xl font-bold text-white mb-4">
            Ready to Join These Success Stories?
          </p>
          <p className="text-gray-300">
            Your transformation could be next.
          </p>
        </div>
      </div>
    </section>
  );
}