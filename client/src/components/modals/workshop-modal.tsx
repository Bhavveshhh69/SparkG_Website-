import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { X } from "lucide-react";

interface WorkshopModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WorkshopModal({ isOpen, onClose }: WorkshopModalProps) {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const workshopMutation = useMutation({
    mutationFn: (data: { companyName: string; email: string; message: string }) =>
      apiRequest("POST", "/api/workshop-request", data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your workshop request has been submitted. We'll be in touch soon!",
      });
      setCompanyName("");
      setEmail("");
      setMessage("");
      onClose();
      queryClient.invalidateQueries({ queryKey: ["/api/admin/workshop-requests"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    workshopMutation.mutate({
      companyName: companyName.trim(),
      email: email.trim(),
      message: message.trim(),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-background border-border text-foreground max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">Book a Workshop</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder-muted-foreground focus:border-primary"
            disabled={workshopMutation.isPending}
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder-muted-foreground focus:border-primary"
            disabled={workshopMutation.isPending}
          />
          <Textarea
            placeholder="Tell us about your workshop needs"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder-muted-foreground focus:border-primary h-24 resize-none"
            disabled={workshopMutation.isPending}
          />
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={workshopMutation.isPending}
          >
            {workshopMutation.isPending ? "SUBMITTING..." : "SUBMIT REQUEST"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
