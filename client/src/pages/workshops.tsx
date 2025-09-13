import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WorkshopModal from "@/components/modals/workshop-modal";
import { Users, Clock, Target, Award } from "lucide-react";

export default function Workshops() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const workshopTypes = [
    {
      icon: Users,
      title: "Team Personal Branding Workshops",
      duration: "Half Day (4 hours)",
      participants: "Up to 20 participants",
      description: "Empower your entire team with the skills to build compelling personal brands that drive business results.",
      features: [
        "Personal brand strategy development",
        "LinkedIn optimization for all participants",
        "Content creation frameworks",
        "Team brand alignment exercises"
      ]
    },
    {
      icon: Target,
      title: "Executive Personal Branding",
      duration: "Full Day (8 hours)",
      participants: "C-Suite & Leadership",
      description: "Intensive personal branding program designed specifically for executives and senior leadership.",
      features: [
        "Executive presence development",
        "Thought leadership content strategy",
        "Crisis communication protocols",
        "Media training and interview prep"
      ]
    },
    {
      icon: Clock,
      title: "Quick Start Sessions",
      duration: "2 Hours",
      participants: "Up to 10 participants",
      description: "Perfect introduction to personal branding fundamentals for smaller teams or departments.",
      features: [
        "Personal branding fundamentals",
        "LinkedIn profile optimization",
        "Content ideation workshop",
        "Action plan development"
      ]
    }
  ];

  const benefits = [
    {
      title: "Increased Lead Generation",
      description: "Teams see an average 300% increase in inbound leads within 90 days"
    },
    {
      title: "Enhanced Recruitment",
      description: "Strong personal brands help attract top talent to your organization"
    },
    {
      title: "Improved Company Reputation",
      description: "Employee advocacy significantly boosts your company's market presence"
    },
    {
      title: "Revenue Growth",
      description: "Companies with strong employee personal brands report 2x faster revenue growth"
    }
  ];

  const testimonials = [
    {
      company: "TechFlow Solutions",
      logo: "TF",
      quote: "After the workshop, our sales team generated $2M in new pipeline within 6 months. The ROI was immediate and substantial.",
      author: "David Park",
      title: "VP of Sales"
    },
    {
      company: "Innovation Labs",
      logo: "IL",
      quote: "The workshop transformed how our leadership team shows up online. We've seen a 400% increase in speaking opportunities.",
      author: "Sarah Martinez",
      title: "Chief Marketing Officer"
    },
    {
      company: "Global Consulting",
      logo: "GC",
      quote: "Outstanding workshop! Our team now confidently represents our brand online, leading to better client relationships.",
      author: "Michael Chen",
      title: "Managing Director"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-[100dvh] bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="text-white text-xl">Loading workshops...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[100dvh] bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="text-white text-xl">Error loading workshops</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-background via-primary/90 to-background">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              CORPORATE WORKSHOPS
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              turn your team into your most <em className="text-primary not-italic">powerful</em> brand asset.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We work with ambitious founders, execs, and leadership teams to turn personal brands into powerful growth engines.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => setIsModalOpen(true)}
            >
              BOOK A WORKSHOP →
            </Button>
          </div>
        </section>

        {/* Workshop Types */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Workshop Options
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {workshopTypes.map((workshop, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-8">
                    <workshop.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-foreground">{workshop.title}</h3>
                    <div className="text-muted-foreground text-sm mb-4">
                      <p>{workshop.duration} • {workshop.participants}</p>
                    </div>
                    <p className="text-muted-foreground mb-6">{workshop.description}</p>
                    <ul className="space-y-2">
                      {workshop.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground text-sm flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Why Invest in Team Personal Branding?
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Our Workshop Process
            </h2>
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "We understand your team's goals, challenges, and current brand presence"
                },
                {
                  step: "02", 
                  title: "Custom Curriculum",
                  description: "We develop a tailored workshop curriculum based on your specific needs"
                },
                {
                  step: "03",
                  title: "Interactive Workshop",
                  description: "Engaging, hands-on session with practical exercises and real-time coaching"
                },
                {
                  step: "04",
                  title: "Follow-up Support",
                  description: "30-day follow-up support to ensure implementation and answer questions"
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              What Our Clients Say
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-foreground font-bold">{testimonial.logo}</span>
                      </div>
                      <span className="text-foreground font-semibold">{testimonial.company}</span>
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/20 to-purple-500/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Empower Your Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a discovery call to discuss how we can help your team build powerful personal brands that drive business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => setIsModalOpen(true)}
              >
                BOOK A WORKSHOP
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border text-foreground hover:bg-muted"
                onClick={() => setIsModalOpen(true)}
              >
                SCHEDULE DISCOVERY CALL
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <WorkshopModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}