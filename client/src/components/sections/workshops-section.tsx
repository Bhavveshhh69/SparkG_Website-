import { useState } from "react";
import { Button } from "@/components/ui/button";
import WorkshopModal from "@/components/modals/workshop-modal";

export default function WorkshopsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-klowt-blue/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              THE 1:1 APPROACH
            </h2>
            <h3 className="text-3xl text-klowt-gray">
              turn your team into your most <em className="text-klowt-pink not-italic">powerful</em> brand asset.
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-klowt-gray mb-8">
                We work with ambitious founders, execs, and leadership teams to turn personal brands into powerful growth engines. From in-house workshops to 1:1 strategy, we help you (or your team) show up with clarity, confidence, and real commercial impact.
              </p>
              <p className="text-lg text-klowt-gray mb-8">
                Whether you're a founder ready to scale your visibility, or a company looking to activate your people online – we build the strategy, content, and frameworks to help you do it right.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-klowt-pink hover:bg-klowt-pink/90 transform hover:scale-105 transition-all"
                  onClick={() => setIsModalOpen(true)}
                >
                  WORK DIRECTLY WITH THE TEAM
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => setIsModalOpen(true)}
                >
                  BOOK A WORKSHOP
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Executive team strategy meeting" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkshopModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
