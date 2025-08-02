import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
  const team = [
    {
      name: "Amelia Sordell",
      title: "Founder & CEO",
      bio: "Personal branding expert who has helped build brands that generate over $4 million in revenue. LinkedIn Top Voice with 300k+ followers.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=400&h=400&fit=crop"
    },
    {
      name: "James Mitchell",
      title: "Head of Strategy",
      bio: "Former marketing director at Fortune 500 companies. Specializes in LinkedIn growth strategies and content optimization.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Chen",
      title: "Content Director",
      bio: "Award-winning content strategist with 8+ years experience helping executives build thought leadership platforms.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=400&h=400&fit=crop"
    }
  ];

  const stats = [
    { number: "10,000+", label: "People Helped" },
    { number: "$4M+", label: "Revenue Generated" },
    { number: "300K+", label: "Audience Built" },
    { number: "95%", label: "Client Success Rate" }
  ];

  const values = [
    {
      title: "Authenticity First",
      description: "We believe personal branding should amplify who you already are, not create a fake persona."
    },
    {
      title: "Results-Driven",
      description: "Every strategy we teach is backed by data and proven results from real businesses."
    },
    {
      title: "Community Support", 
      description: "We build supportive communities where everyone succeeds together, not alone."
    },
    {
      title: "Continuous Learning",
      description: "The digital landscape evolves rapidly, and we stay ahead of every trend and algorithm change."
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
              ABOUT US
            </h1>
            <p className="text-2xl text-klowt-gray mb-8 max-w-3xl mx-auto">
              We're on a mission to help <em className="text-klowt-pink not-italic">ambitious professionals</em> build personal brands that drive real business results.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-klowt-gray mb-6">
                  Klowt was born from a simple observation: the most successful professionals weren't just good at their jobs—they were known for being good at their jobs.
                </p>
                <p className="text-lg text-klowt-gray mb-6">
                  After building personal brands that generated millions in revenue and attracted hundreds of thousands of followers, we realized this wasn't just about social media. It was about creating a systematic approach to building professional reputation, authority, and influence.
                </p>
                <p className="text-lg text-klowt-gray">
                  Today, we've helped over 10,000 professionals transform their careers and businesses through strategic personal branding. From first-time entrepreneurs to Fortune 500 executives, our proven frameworks work across every industry and career stage.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-klowt-blue/20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
            <div className="grid lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-klowt-pink mb-2">{stat.number}</div>
                  <div className="text-klowt-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-klowt-blue/30 border-klowt-border/20 overflow-hidden">
                  <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${member.image}')` }} />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                    <p className="text-klowt-pink text-sm font-medium mb-4">{member.title}</p>
                    <p className="text-klowt-gray">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-klowt-blue/20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-klowt-blue/30 border-klowt-border/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                    <p className="text-klowt-gray">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-2xl text-klowt-gray max-w-4xl mx-auto mb-8">
              To democratize personal branding and make it accessible for every ambitious professional who wants to build authority, attract opportunities, and create meaningful impact in their industry.
            </p>
            <p className="text-lg text-klowt-gray max-w-2xl mx-auto">
              We believe everyone has unique value to offer the world. Our job is to help you package and present that value in a way that gets noticed, gets paid, and gets results.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-klowt-pink/20 to-purple-500/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-klowt-gray mb-8 max-w-2xl mx-auto">
              Whether you're looking to join our community, download our resources, or book a corporate workshop, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community">
                <Button size="lg" className="bg-klowt-pink hover:bg-klowt-pink/90">
                  JOIN THE COMMUNITY
                </Button>
              </Link>
              <Link href="/workshops">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  BOOK A WORKSHOP
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
