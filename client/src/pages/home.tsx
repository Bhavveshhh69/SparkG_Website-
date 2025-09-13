import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Positioning from "@/components/sections/positioning";
import HowItWorks from "@/components/sections/how-it-works";
import TestimonialsGrid from "@/components/sections/testimonials-grid";
import CreativeComparison from "@/components/sections/creative-comparison";
import ClientFit from "@/components/sections/client-fit";
import CTA from "@/components/sections/cta";
import Newsletter from "@/components/sections/newsletter-new";
import SparkXtra from "@/components/sections/spark-xtra";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background dark:bg-black">
      <Header />
      <main className="pt-16 sm:pt-20">
        <Hero />
        <Positioning />
        <HowItWorks />
        <TestimonialsGrid />
        <CreativeComparison />
        <ClientFit />
        <Newsletter />
        <SparkXtra />
      </main>
      <Footer />
    </div>
  );
}