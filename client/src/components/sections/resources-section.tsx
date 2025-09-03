import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ResourcesSection() {
  const resources = [
    {
      title: "THE $4 MILLION SALES METHOD",
      subtitle: "The ultimate guide to pitching and winning new business.",
      description: "Learn how to position your offer, pitch with confidence, and turn your personal brand into a pipeline of premium clients – without discounting, chasing, or second-guessing yourself.",
      type: "PAID DOWNLOAD",
      typeColor: "bg-primary",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      buttonText: "DOWNLOAD YOUR COPY",
      buttonVariant: "default" as const
    },
    {
      title: "THE LINKEDIN PLAYBOOK", 
      subtitle: "Tired of being overlooked on LinkedIn?",
      description: "Download the exact framework we use with clients to generate over 20 million views every month on LinkedIn.",
      type: "PAID DOWNLOAD",
      typeColor: "bg-primary",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      buttonText: "DOWNLOAD YOUR COPY",
      buttonVariant: "default" as const
    },
    {
      title: "THE LINKEDIN CONTENT ENGINE",
      subtitle: "The system for generating engagement, on repeat.",
      description: "Go from unseen to in-demand with fill-in-the-blank templates designed to unlock your expertise, share your stories, and create authentic content your audience loves.",
      type: "FREE DOWNLOAD",
      typeColor: "bg-accent",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      buttonText: "DOWNLOAD YOUR COPY",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            THE RESOURCES
          </h2>
          <h3 className="text-3xl text-muted-foreground">
            <em className="text-primary not-italic">DIY</em> your personal brand growth with our most-loved tools.
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-primary/30 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${resource.image}')` }}>
                <div className="absolute top-4 left-4">
                  <span className={`${resource.typeColor} text-primary-foreground px-3 py-1 rounded-full text-sm font-medium`}>
                    {resource.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-foreground">{resource.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm font-medium">{resource.subtitle}</p>
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                <Button 
                  variant={resource.buttonVariant}
                  className={`w-full ${resource.buttonVariant === 'default' ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'border-border text-foreground hover:bg-accent'}`}
                >
                  {resource.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/resources">
            <button className="text-primary font-medium text-lg hover:underline">
              VIEW ALL RESOURCES →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}