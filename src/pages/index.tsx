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
      title="Aventures Sans Frontières | Votre Passerelle vers le Monde"
      description="Découvrez des opportunités de volontariat, formation professionnelle, études et tourisme à l'international. Accompagnement personnalisé pour votre projet de mobilité."
    >
      <Hero />
      <OpportunityTypes />
      <AboutSection />
      <FeaturedDestinations />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}