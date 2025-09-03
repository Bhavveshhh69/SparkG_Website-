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
    <section className="py-16 sm:py-20 bg-gradient-to-r from-background to-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-primary/20">
          <div className="animate-fadeIn">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Join <span className="text-primary font-extrabold relative">
                <span className="absolute inset-0 bg-primary/10 blur-lg rounded-lg"></span>
                <span className="relative">Thousands</span>
              </span> of 
              <br className="hidden sm:block" />
              <span className="text-foreground"> Changemaking Thought Leaders</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Get exclusive insights, strategies, and industry updates delivered weekly. 
              Transform your digital presence with actionable content marketing tips.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slideUp">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-muted-foreground focus:border-primary/50 focus:ring-primary/25 rounded-lg h-11 sm:h-12 text-sm sm:text-base"
                disabled={newsletterMutation.isPending}
              />
              <Input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-muted-foreground focus:border-primary/50 focus:ring-primary/25 rounded-lg h-11 sm:h-12 text-sm sm:text-base"
                disabled={newsletterMutation.isPending}
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold transform hover:scale-105 transition-all duration-300 rounded-lg h-11 sm:h-12 px-6 sm:px-8 shadow-2xl hover:shadow-primary/25 border-2 border-primary text-xs sm:text-sm md:text-base whitespace-nowrap"
                disabled={newsletterMutation.isPending}
              >
                {newsletterMutation.isPending ? "SUBSCRIBING..." : "GET FREE WEEKLY TIPS"}
              </Button>
            </div>
            
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground animate-fadeIn">
              <p>✓ No spam, ever. ✓ Unsubscribe anytime. ✓ Weekly insights that actually work.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}