import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, MessageSquare, Calendar, Video, Trophy, BookOpen } from "lucide-react";

export default function Community() {
  const features = [
    {
      icon: Users,
      title: "Private Community Access",
      description: "Join thousands of founders and freelancers in our exclusive community"
    },
    {
      icon: MessageSquare,
      title: "Expert Feedback & Coaching",
      description: "Get personalized feedback on your content and strategy from our team"
    },
    {
      icon: Calendar,
      title: "Monthly Live Sessions",
      description: "Attend monthly coaching calls and Q&A sessions with industry experts"
    },
    {
      icon: Video,
      title: "Exclusive Video Training",
      description: "Access our complete library of step-by-step video tutorials"
    },
    {
      icon: Trophy,
      title: "Success Accountability",
      description: "Weekly check-ins and accountability to keep you on track"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Free access to all our premium templates and playbooks"
    }
  ];

  const pricingPlans = [
    {
      name: "Monthly",
      price: "$97",
      period: "/month",
      popular: false,
      features: [
        "Private community access",
        "Expert feedback & coaching",
        "Monthly live sessions",
        "Video training library",
        "All premium resources"
      ]
    },
    {
      name: "Annual",
      price: "$970",
      period: "/year",
      popular: true,
      features: [
        "Everything in Monthly",
        "2 months free (save $194)",
        "Priority support",
        "1:1 strategy session",
        "Beta access to new features"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Marketing Director",
      company: "TechFlow",
      quote: "In just 3 months, I've grown my LinkedIn following by 400% and received 12 inbound leads. The community support is incredible.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop"
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder",
      company: "BuildRight",
      quote: "The strategies taught here generated $50K in new business for my company. Best investment I've made in my personal brand.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop"
    },
    {
      name: "Emma Thompson",
      title: "Freelance Consultant",
      company: "Independent",
      quote: "I went from charging $75/hour to $300/hour after implementing the personal branding strategies. Life changing!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop"
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
              THE COMMUNITY
            </h1>
            <p className="text-2xl text-klowt-gray mb-8 max-w-3xl mx-auto">
              get the clarity, consistency and content to grow <em className="text-klowt-pink not-italic">faster and strategically</em>.
            </p>
            <p className="text-lg text-klowt-gray max-w-2xl mx-auto mb-8">
              Learn from the world's leading experts on personal branding and join the most supportive community of founders, freelancers, and professionals.
            </p>
            <Button size="lg" className="bg-klowt-pink hover:bg-klowt-pink/90">
              JOIN THE COMMUNITY →
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              What You Get Inside
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-klowt-blue/30 border-klowt-border/20 hover:border-klowt-pink/30 transition-colors">
                  <CardContent className="p-8 text-center">
                    <feature.icon className="w-12 h-12 text-klowt-pink mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-klowt-gray">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-klowt-blue/20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Choose Your Plan
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`bg-klowt-blue/30 border-klowt-border/20 relative ${plan.popular ? 'border-klowt-pink' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-klowt-pink text-white px-4 py-2 rounded-full text-sm font-medium">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-klowt-pink mb-2">
                        {plan.price}<span className="text-lg text-klowt-gray">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-klowt-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-klowt-pink hover:bg-klowt-pink/90' : 'border-white/30 text-white hover:bg-white/10'}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      GET STARTED
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              What Our Members Say
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-klowt-blue/30 border-klowt-border/20">
                  <CardContent className="p-8">
                    <p className="text-klowt-gray mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-klowt-gray text-sm">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-klowt-pink/20 to-purple-500/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Personal Brand?
            </h2>
            <p className="text-lg text-klowt-gray mb-8 max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs and professionals who are building profitable personal brands.
            </p>
            <Button size="lg" className="bg-klowt-pink hover:bg-klowt-pink/90">
              START YOUR JOURNEY TODAY →
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
