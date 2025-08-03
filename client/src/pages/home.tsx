import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Stats from "@/components/sections/stats";
import LogoCarousel from "@/components/sections/logo-carousel";
import ValueProps from "@/components/sections/value-props";
import SocialProof from "@/components/sections/social-proof";
import CTA from "@/components/sections/cta";
import Newsletter from "@/components/sections/newsletter-new";

export default function Home() {
  return (
    <div className="min-h-screen bg-sparkg-dark">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <LogoCarousel />
        <ValueProps />
        <SocialProof />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
