import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Resource } from "@shared/schema";

export default function Resources() {
  const { data: resources = [], isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  // Resources are already filtered for active ones in the API
  const activeResources = resources;

  const handleDownload = (resource: Resource) => {
    if (resource.downloadUrl) {
      window.open(resource.downloadUrl, '_blank');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-klowt-dark">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="text-white text-xl">Loading resources...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-klowt-dark">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-klowt-dark via-klowt-blue/90 to-klowt-dark">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              THE RESOURCES
            </h1>
            <p className="text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              <em className="text-sparkg-gold not-italic">DIY</em> your personal brand growth with our most-loved tools, templates, and playbooks.
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Everything you need to build a personal brand that gets noticed, gets paid, and gets results.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {activeResources.length > 0 ? (
              <div className="grid lg:grid-cols-3 gap-8">
                {activeResources.map((resource) => (
                  <Card key={resource.id} className="bg-klowt-blue/30 border-klowt-border/20 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                    {resource.fileUrl && (
                      <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${resource.fileUrl}')` }}>
                        <div className="absolute top-4 left-4">
                          <span className="bg-sparkg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                            {resource.fileType || "RESOURCE"}
                          </span>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold mb-2 text-white">{resource.title}</CardTitle>
                      <p className="text-klowt-gray mb-6">{resource.description}</p>
                      <Button 
                        className="w-full bg-sparkg-gold hover:bg-sparkg-gold/90 text-black font-medium"
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
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-white mb-4">No Resources Available</h3>
                <p className="text-gray-300">Check back soon for amazing resources to help build your personal brand!</p>
              </div>
            )}
          </div>
        </section>

        {/* Fallback Resources Grid - Show if no database resources */}
        {activeResources.length === 0 && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-8">
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
                  <Card key={index} className="bg-klowt-blue/30 border-klowt-border/20 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${resource.image}')` }}>
                    <div className="absolute top-4 left-4">
                      <span className="bg-sparkg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                        {resource.type}
                      </span>
                    </div>
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold mb-2 text-white">{resource.title}</CardTitle>
                      <p className="text-klowt-gray mb-6">{resource.description}</p>
                      <Button 
                        className="w-full bg-sparkg-gold hover:bg-sparkg-gold/90 text-black font-medium"
                        disabled
                      >
                        COMING SOON
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-klowt-blue/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Need More <em className="text-klowt-pink not-italic">Support</em>?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Get in touch with our team for personalized guidance and ongoing support to accelerate your personal brand growth.
            </p>
            <Button size="lg" className="bg-sparkg-gold hover:bg-sparkg-gold/90 text-black font-medium">
              GET IN TOUCH →
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
