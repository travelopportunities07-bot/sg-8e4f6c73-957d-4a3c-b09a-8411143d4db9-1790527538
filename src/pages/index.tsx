
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { OpportunityTypes } from "@/components/home/OpportunityTypes";
import { AboutSection } from "@/components/home/AboutSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <Layout 
      title="AfricaOpportunités | Opportunités Internationales pour Résidents Africains"
      description="Découvrez des opportunités de travail, d'études, de volontariat et plus encore dans les pays les plus attractifs pour les résidents africains."
    >
      <Hero />
      <FeaturedDestinations />
      <OpportunityTypes />
      <AboutSection />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}
