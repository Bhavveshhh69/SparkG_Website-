import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import LogoCarousel from "@/components/sections/logo-carousel";
import ValueProps from "@/components/sections/value-props";
import SocialProof from "@/components/sections/social-proof";
import ResourcesSection from "@/components/sections/resources-section";
import CommunitySection from "@/components/sections/community-section";
import EventsCarousel from "@/components/sections/events-carousel";
import WorkshopsSection from "@/components/sections/workshops-section";
import Newsletter from "@/components/sections/newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-klowt-dark">
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <ValueProps />
        <SocialProof />
        <ResourcesSection />
        <CommunitySection />
        <EventsCarousel />
        <WorkshopsSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
