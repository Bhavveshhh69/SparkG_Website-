import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Resources() {
  const resources = [
    {
      title: "THE SALES METHOD GUIDE",
      subtitle: "The ultimate guide to pitching and winning new business.",
      description: "Learn how to position your offer, pitch with confidence, and turn your personal brand into a pipeline of premium clients – without discounting, chasing, or second-guessing yourself.",
      type: "GUIDE",
      typeColor: "bg-sparkg-gold",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "THE LINKEDIN PLAYBOOK",
      subtitle: "Tired of being overlooked on LinkedIn?",
      description: "Download the exact framework we use with clients to generate over 20 million views every month on LinkedIn.",
      type: "PLAYBOOK",
      typeColor: "bg-sparkg-gold",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "THE LINKEDIN CONTENT ENGINE",
      subtitle: "The system for generating engagement, on repeat.",
      description: "Go from unseen to in-demand with fill-in-the-blank templates designed to unlock your expertise, share your stories, and create authentic content your audience loves.",
      type: "TEMPLATE",
      typeColor: "bg-green-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "PERSONAL BRAND AUDIT CHECKLIST",
      subtitle: "Everything you need to audit your personal brand.",
      description: "A comprehensive checklist to evaluate your current personal brand across all platforms and identify areas for improvement.",
      type: "CHECKLIST",
      typeColor: "bg-green-500",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "CONTENT CALENDAR TEMPLATE",
      subtitle: "Plan your content strategy like a pro.",
      description: "A ready-to-use content calendar template that helps you plan, organize, and track your content across all platforms.",
      type: "TEMPLATE",
      typeColor: "bg-sparkg-gold",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "EMAIL TEMPLATES FOR OUTREACH",
      subtitle: "Templates that get responses.",
      description: "Proven email templates for networking, collaboration requests, and business development that actually get opened and responded to.",
      type: "TEMPLATE",
      typeColor: "bg-sparkg-gold",  
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    }
  ];

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
            <div className="grid lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-klowt-blue/30 border-klowt-border/20 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${resource.image}')` }}>
                    <div className="absolute top-4 left-4">
                      <span className={`${resource.typeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {resource.type}
                      </span>
                    </div>

                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold mb-2 text-white">{resource.title}</CardTitle>
                    <p className="text-klowt-gray mb-4 text-sm font-medium">{resource.subtitle}</p>
                    <p className="text-klowt-gray mb-6">{resource.description}</p>
                    <Button 
                      className="w-full bg-sparkg-gold hover:bg-sparkg-gold/90 text-black font-medium"
                    >
                      DOWNLOAD NOW
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
