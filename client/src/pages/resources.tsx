import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Resource, SiteSetting } from "@shared/schema";
import { Link } from "wouter";

export default function Resources() {
  const { data: resources = [], isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  const { data: siteSettings = [] } = useQuery<SiteSetting[]>({
    queryKey: ["/api/site-settings"],
  });

  const headerCtaUrl = siteSettings.find(s => s.key === 'header_cta_url')?.value || '/about';

  // Resources are already filtered for active ones in the API
  const activeResources = resources;

  const handleDownload = (resource: Resource) => {
    if (resource.downloadUrl) {
      window.open(resource.downloadUrl, '_blank');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[100dvh] bg-background">
        <Header />
        <main className="pt-20 sm:pt-24 center-all">
          <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 center-content">
            <div className="text-foreground text-lg sm:text-xl center-text">Loading resources...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background">
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-background via-primary/90 to-background center-all">
          <div className="container mx-auto px-4 sm:px-6 center-content">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 center-text">
              THE RESOURCES
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl center-block">
              <em className="text-primary not-italic">DIY</em> your personal brand growth with our most-loved tools, templates, and playbooks.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl center-block px-4 sm:px-0">
              Everything you need to build a personal brand that gets noticed, gets paid, and gets results.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-8 sm:py-10">
          <div className="container mx-auto px-4 sm:px-6">
            {activeResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {activeResources.map((resource) => (
                  <Card key={resource.id} className="bg-card border-border overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                    {resource.fileUrl && (
                      <div className="h-40 sm:h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${resource.fileUrl}')` }}>
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                          <span className="bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                            {resource.fileType || "RESOURCE"}
                          </span>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl font-bold mb-2 text-foreground">{resource.title}</CardTitle>
                      <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{resource.description}</p>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm sm:text-base"
                        onClick={() => handleDownload(resource)}
                        disabled={!resource.downloadUrl}
                      >
                        {resource.downloadUrl ? "DOWNLOAD NOW" : "COMING SOON"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </section>

        {/* Fallback Resources Grid - Show if no database resources */}
        {activeResources.length === 0 && (
          <section className="py-8 sm:py-10">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "THE SALES METHOD GUIDE",
                    description: "Learn how to position your offer, pitch with confidence, and turn your personal brand into a pipeline of premium clients – without discounting, chasing, or second-guessing yourself.",
                    type: "GUIDE",
                    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
                  },
                  {
                    title: "THE LINKEDIN PLAYBOOK",
                    description: "Download the exact framework we use with clients to generate over 20 million views every month on LinkedIn.",
                    type: "PLAYBOOK",
                    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
                  },
                  {
                    title: "THE LINKEDIN CONTENT ENGINE",
                    description: "Go from unseen to in-demand with fill-in-the-blank templates designed to unlock your expertise, share your stories, and create authentic content your audience loves.",
                    type: "TEMPLATE",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
                  }
                ].map((resource, index) => (
                  <Card key={index} className="bg-card border-border overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="h-40 sm:h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${resource.image}')` }}>
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className="bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl font-bold mb-2 text-foreground">{resource.title}</CardTitle>
                      <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{resource.description}</p>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm sm:text-base"
                        disabled
                      >
                        COMING SOON
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-muted center-all">
          <div className="container mx-auto px-4 sm:px-6 center-content">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 center-text">
              Need More <em className="text-primary not-italic">Support</em>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl center-block px-4 sm:px-0">
              Get in touch with our team for personalized guidance and ongoing support to accelerate your personal brand growth.
            </p>
            <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                Book Strategy Call
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}