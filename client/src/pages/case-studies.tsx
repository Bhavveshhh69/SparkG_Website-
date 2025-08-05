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
      <div className="min-h-screen bg-sparkg-dark">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="text-white text-xl">Loading case studies...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sparkg-dark">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sparkg-dark via-gray-900 to-sparkg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9B7B0B] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Case </span>
              <span className="text-[#9B7B0B] relative font-extrabold">
                <span className="absolute inset-0 bg-[#9B7B0B]/10 blur-lg rounded-lg"></span>
                <span className="relative">Studies</span>
              </span>
            </h1>
            <p className="text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Real results from real clients. See how we've transformed personal brands into powerful business assets.
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
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
                  <Card key={caseStudy.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#9B7B0B]/50 transition-all duration-300 group overflow-hidden">
                    {caseStudy.featuredImage && (
                      <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url('${caseStudy.featuredImage}')` }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#9B7B0B] text-white">
                            {caseStudy.industry}
                          </Badge>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <Target className="w-5 h-5 text-[#9B7B0B]" />
                        <span className="text-[#9B7B0B] font-semibold text-sm">CLIENT SUCCESS</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 break-words">{caseStudy.title}</h3>
                      <p className="text-gray-300 mb-4">
                        <strong>Client:</strong> {caseStudy.clientName}
                      </p>
                      <p className="text-gray-200 mb-6 leading-relaxed">
                        {caseStudy.summary}
                      </p>
                      
                      {caseStudy.results && (
                        <div className="mb-6 p-4 bg-[#9B7B0B]/10 rounded-lg border border-[#9B7B0B]/20">
                          <div className="flex items-center space-x-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-[#9B7B0B]" />
                            <span className="text-[#9B7B0B] font-semibold text-sm">KEY RESULTS</span>
                          </div>
                          <div className="text-white text-sm">
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
                        <Button className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90 text-white group-hover:scale-105 transition-transform duration-300">
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
                  <Users className="w-16 h-16 text-[#9B7B0B] mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">Case Studies Coming Soon</h3>
                  <p className="text-xl text-gray-300 mb-8">
                    We're currently documenting our most impressive client transformations. Check back soon to see how we've helped businesses generate millions in opportunities through strategic personal branding.
                  </p>
                  <Link href={headerCtaUrl}>
                    <Button className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90 text-white">
                      Book Your Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#9B7B0B]/10 via-sparkg-black to-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the ranks of successful entrepreneurs and professionals who've transformed their personal brands into powerful business assets.
            </p>
            <Link href={headerCtaUrl}>
              <Button 
                size="lg"
                className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90 text-white font-bold px-12 py-4 text-lg rounded-full shadow-2xl hover:shadow-[#9B7B0B]/25 transform hover:scale-105 transition-all duration-300"
              >
                Book Your Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}