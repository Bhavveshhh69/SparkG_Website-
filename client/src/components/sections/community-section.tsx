import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CommunitySection() {
  return (
    <section className="py-20 bg-klowt-blue/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              THE COMMUNITY
            </h2>
            <h3 className="text-3xl text-klowt-gray mb-8">
              get the clarity, consistency and content to grow <em className="text-klowt-pink not-italic">faster and strategically</em>.
            </h3>
            <p className="text-klowt-gray mb-8">
              Learn from the world's leading top voice on personal branding and join the most supportive community of founders, freelancers, and professionals who are building a predictable income stream simply by being themselves.
            </p>
            <Link href="/community">
              <Button 
                size="lg"
                className="bg-klowt-pink hover:bg-klowt-pink/90 transform hover:scale-105 transition-all"
              >
                GET STARTED →
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Collaborative workspace with diverse professionals" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
