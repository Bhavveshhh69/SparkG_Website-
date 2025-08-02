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
    <section className="py-20 bg-klowt-dark">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-klowt-pink/20 to-purple-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            join <em className="text-klowt-pink not-italic">thousands</em> of free weekly readers learning how to build a profitable personal brand.
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder-klowt-gray focus:border-klowt-pink"
              disabled={newsletterMutation.isPending}
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder-klowt-gray focus:border-klowt-pink"
              disabled={newsletterMutation.isPending}
            />
            <Button
              type="submit"
              size="lg"
              className="bg-klowt-pink hover:bg-klowt-pink/90 transform hover:scale-105 transition-all"
              disabled={newsletterMutation.isPending}
            >
              {newsletterMutation.isPending ? "SUBSCRIBING..." : "GET FREE WEEKLY TIPS"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
