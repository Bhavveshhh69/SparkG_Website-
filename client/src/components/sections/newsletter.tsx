import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const newsletterMutation = useMutation({
    mutationFn: (data: { name: string; email: string }) =>
      apiRequest("POST", "/api/newsletter", data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setName("");
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/admin/newsletters"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate({ name: name.trim(), email: email.trim() });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-background via-card to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-primary/20">
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join <span className="text-primary glow-text">Thousands</span> of 
              <br className="hidden sm:block" />
              <span className="text-foreground"> Smart Marketers</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get exclusive insights, strategies, and industry updates delivered weekly. 
              Transform your digital presence with actionable content marketing tips.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 animate-slideUp">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-card/10 backdrop-blur-sm border-border text-foreground placeholder-muted-foreground focus:border-primary/50 focus:ring-primary/25 rounded-lg h-12"
                disabled={newsletterMutation.isPending}
              />
              <Input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card/10 backdrop-blur-sm border-border text-foreground placeholder-muted-foreground focus:border-primary/50 focus:ring-primary/25 rounded-lg h-12"
                disabled={newsletterMutation.isPending}
              />
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-sparkg-gold to-primary hover:from-primary hover:to-sparkg-gold text-primary-foreground font-semibold transform hover:scale-105 transition-all duration-300 rounded-lg h-12 px-8 shadow-2xl hover:shadow-primary/25"
                disabled={newsletterMutation.isPending}
              >
                {newsletterMutation.isPending ? "SUBSCRIBING..." : "GET FREE WEEKLY TIPS"}
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground animate-fadeIn">
              <p>✓ No spam, ever. ✓ Unsubscribe anytime. ✓ Weekly insights that actually work.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}