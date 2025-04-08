import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { OpportunityTypes } from "@/components/home/OpportunityTypes";
import { AboutSection } from "@/components/home/AboutSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";
import { QuickAppointment } from '@/components/home/QuickAppointment';

export default function Home() {
  // TODO: Remplacez cette URL par votre URL Calendly réelle pour les appels rapides
  const quickCallUrl = 'https://calendly.com/votre-nom/15min';
  
  return (
    <Layout 
      title='Aventure Sans Frontières | Votre Passerelle vers le Monde'
      description='Découvrez des opportunités de voyages, études, volontariat, stages ou emplois à l'international. Explorez, osez, transformez votre avenir.'
    >
      <Hero />
      <OpportunityTypes />
      <FeaturedDestinations />
      <AboutSection />
      <Testimonials />
      <CallToAction />
      
      {/* Ajout du composant de rendez-vous rapide flottant */}
      <div className='fixed bottom-6 right-6 z-50 max-w-xs w-full'>
        <QuickAppointment calendlyUrl={quickCallUrl} />
      </div>
    </Layout>
  );
}