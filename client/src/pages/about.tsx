import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Target, Zap, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useQuery } from "@tanstack/react-query";
import type { SiteSetting } from "@shared/schema";

export default function About() {
  const titleRef = useScrollAnimation();

  const { data: siteSettings = [] } = useQuery<SiteSetting[]>({
    queryKey: ["/api/site-settings"],
  });

  const headerCtaUrl = siteSettings.find(s => s.key === 'header_cta_url')?.value || '/about';
  
  // Counter animations
  const podcastListeners = useCounterAnimation({ end: 72, duration: 2500 });
  const brandsElevated = useCounterAnimation({ end: 500, duration: 2000 });
  const contentViews = useCounterAnimation({ end: 300, duration: 3000 });

  const services = [
    {
      icon: Target,
      title: "Magnetic Positioning",
      description: "We identify what makes you powerful and turn it into a market-dominating positioning."
    },
    {
      icon: Zap,
      title: "Premium Content Engine",
      description: "You show up. We do the rest. Includes short-form video, long-form repurposing, podcast invites, PR placements, and more."
    },
    {
      icon: TrendingUp,
      title: "Legacy System Activation",
      description: "Your brand becomes a magnet for speaking gigs, followers, sales, media features all driven by your unique digital presence."
    }
  ];

  const differentiators = [
    "Strategists, Creators, Execs (not just editors & VAs)",
    "Outcome-Driven Brand Assets (not 'post and hope')",
    "Thought Leadership Positioning (not generic promos)",
    "Done-For-You, High-Touch (not DIY stress)",
    "Legacy System (not just content calendars)"
  ];

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
            <div ref={titleRef as any} className="scroll-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-foreground">About </span>
                <span className="text-primary relative font-extrabold">
                  <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
                  <span className="relative">SparkG Media</span>
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                SparkG Media is a <span className="text-primary font-semibold">premium thought leadership agency</span> helping CEOs, coaches, and founders build iconic personal brands that generate trust, growth, and legacy.
              </p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                <em className="text-primary not-italic font-semibold">"You're not building for likes. You're building for leverage."</em>
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-gradient-to-br from-muted via-card to-muted">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  We transform ambitious leaders from invisible to iconic through strategic personal branding that drives real business outcomes.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  While typical agencies focus on content calendars and generic promotions, we build legacy systems that position you as the undisputed authority in your space.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every piece of content, every strategic decision, every brand asset we create is designed with one goal: turning your personal brand into your most valuable business asset.
                </p>
              </div>
              <div className="grid gap-6">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Results */}
        <section className="py-20 bg-gradient-to-br from-card via-muted to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We measure success in outcomes that matter to your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div ref={podcastListeners.ref} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                  {podcastListeners.count}K+
                </div>
                <p className="text-xl text-foreground font-semibold mb-2">Podcast Listeners</p>
                <p className="text-muted-foreground">Generated for our clients</p>
              </div>

              <div ref={brandsElevated.ref} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                  {brandsElevated.count}+
                </div>
                <p className="text-xl text-foreground font-semibold mb-2">Brands Elevated</p>
                <p className="text-muted-foreground">To thought leadership status</p>
              </div>

              <div ref={contentViews.ref} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                  {contentViews.count}M+
                </div>
                <p className="text-xl text-foreground font-semibold mb-2">Content Views</p>
                <p className="text-muted-foreground">Across all platforms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Framework */}
        <section className="py-20 bg-gradient-to-br from-muted via-background to-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our 3-Step Framework
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                How we transform you from invisible to iconic
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-card to-muted">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Build the Brand That Builds Everything Else?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              We work with a select group of high-performing leaders each quarter. Let's see if we're a fit.
            </p>
            <a href="https://calendly.com/meetsubrat/30min" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-4 text-lg rounded-full shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
              >
                Book Strategy Call
              </Button>
            </a>
            <p className="text-primary font-semibold mt-6">⚡ Limited availability for August onboarding</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
