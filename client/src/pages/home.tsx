import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Positioning from "@/components/sections/positioning";
import HowItWorks from "@/components/sections/how-it-works";
import ProofSection from "@/components/sections/proof-section";
import Features from "@/components/sections/features";
import ClientFit from "@/components/sections/client-fit";
import CTA from "@/components/sections/cta";
import Newsletter from "@/components/sections/newsletter-new";

export default function Home() {
  return (
    <div className="min-h-screen bg-sparkg-dark">
      <Header />
      <main>
        <Hero />
        <Positioning />
        <HowItWorks />
        <ProofSection />
        <Features />
        <ClientFit />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
