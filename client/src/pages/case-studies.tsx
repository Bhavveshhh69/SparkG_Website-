import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import type { CaseStudy, SiteSetting } from "@shared/schema";

export default function CaseStudies() {
  const { data: caseStudies = [], isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });

  const { data: siteSettings = [] } = useQuery<SiteSetting[]>({
    queryKey: ["/api/site-settings"],
  });

  const headerCtaUrl = siteSettings.find(s => s.key === 'header_cta_url')?.value || '/about';

  // Case studies are already filtered for published ones in the API
  const publishedCaseStudies = caseStudies;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="text-foreground text-xl">Loading case studies...</div>
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
        <section className="py-20 bg-gradient-to-br from-background via-muted to-card relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Case </span>
              <span className="text-primary relative font-extrabold">
                <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
                <span className="relative">Studies</span>
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Real results from real clients. See how we've transformed personal brands into powerful business assets.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From invisible to iconic - discover the strategies that generated millions in opportunities for our clients.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {publishedCaseStudies.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {publishedCaseStudies.map((caseStudy) => (
                  <Card key={caseStudy.id} className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                    {caseStudy.featuredImage && (
                      <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url('${caseStudy.featuredImage}')` }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground">
                            {caseStudy.industry}
                          </Badge>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <Target className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold text-sm">CLIENT SUCCESS</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-2 break-words">{caseStudy.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        <strong>Client:</strong> {caseStudy.clientName}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {caseStudy.summary}
                      </p>
                      
                      {caseStudy.results && (
                        <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                          <div className="flex items-center space-x-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-primary font-semibold text-sm">KEY RESULTS</span>
                          </div>
                          <div className="text-foreground text-sm">
                            {typeof caseStudy.results === 'object' && caseStudy.results !== null ? (
                              <ul className="space-y-1">
                                {Object.entries(caseStudy.results as Record<string, any>).map(([key, value]) => (
                                  <li key={key}>• {key}: {String(value)}</li>
                                ))}
                              </ul>
                            ) : (
                              <p>{String(caseStudy.results)}</p>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <Link href={`/case-studies/${caseStudy.slug}`}>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group-hover:scale-105 transition-transform duration-300">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
                <div className="text-center py-16">
                  <div className="max-w-2xl mx-auto">
                    <Users className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-foreground mb-4">Case Studies Coming Soon</h3>
                    <p className="text-xl text-muted-foreground mb-8">
                      We're currently documenting our most impressive client transformations. Check back soon to see how we've helped businesses generate millions in opportunities through strategic personal branding.
                    </p>
                    <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Book Strategy Call
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-card to-muted">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the ranks of successful entrepreneurs and professionals who've transformed their personal brands into powerful business assets.
            </p>
            <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-4 text-lg rounded-full shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
              >
                Book Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}