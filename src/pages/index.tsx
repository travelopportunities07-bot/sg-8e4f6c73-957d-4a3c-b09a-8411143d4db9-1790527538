
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
      title="Aventure Sans Frontières | Votre Passerelle vers le Monde"
      description="Découvrez des opportunités de voyages, études, volontariat, stages ou emplois à l'international. Explorez, osez, transformez votre avenir."
    >
      <Hero />
      <OpportunityTypes />
      <FeaturedDestinations />
      <AboutSection />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}
