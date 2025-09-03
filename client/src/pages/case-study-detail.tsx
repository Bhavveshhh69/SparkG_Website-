import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Target, Calendar, Building } from "lucide-react";
import type { CaseStudy } from "@shared/schema";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: caseStudy, isLoading, error } = useQuery<CaseStudy>({
    queryKey: [`/api/case-studies/${slug}`],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="text-white text-xl">Loading case study...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="text-white text-xl">Case study not found</div>
            <Link href="/case-studies">
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-background via-muted to-card relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link href="/case-studies">
              <Button 
                variant="outline" 
                className="mb-8 border-white/20 text-white hover:bg-white/5"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-primary text-primary-foreground">
                  {caseStudy.industry}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(caseStudy.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                {caseStudy.title}
              </h1>
              
              <div className="flex items-center space-x-2 mb-6">
                <Building className="w-5 h-5 text-primary" />
                <span className="text-xl text-muted-foreground">
                  <strong>Client:</strong> {caseStudy.clientName}
                </span>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {caseStudy.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {caseStudy.featuredImage && (
          <section className="py-0">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto my-8">
                <img 
                  src={caseStudy.featuredImage}
                  alt={caseStudy.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </section>
        )}

        {/* Results Section */}
        {caseStudy.results && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-primary/10 rounded-lg border border-primary/20 p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-primary">Key Results</h2>
                  </div>
                  <div className="text-foreground">
                    {typeof caseStudy.results === 'object' && caseStudy.results !== null ? (
                      <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(caseStudy.results as Record<string, any>).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-white/5 rounded-lg">
                            <div className="text-3xl font-bold text-primary mb-2">{String(value)}</div>
                            <div className="text-muted-foreground font-medium">{key}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-lg">{String(caseStudy.results)}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-2 mb-8">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">The Full Story</h2>
              </div>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <div 
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: typeof caseStudy.content === 'object' && caseStudy.content !== null 
                      ? (caseStudy.content as any).html || '' 
                      : String(caseStudy.content || '') 
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-card to-muted">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready for Similar Results?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can transform your personal brand and generate similar success for your business.
            </p>
            <Link href="/about">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-4 text-lg rounded-full shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
              >
                Book Your Discovery Call
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 