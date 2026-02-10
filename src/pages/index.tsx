import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { OpportunityTypes } from "@/components/home/OpportunityTypes";
import { AboutSection } from "@/components/home/AboutSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div id="services">
        <OpportunityTypes />
      </div>
      <AboutSection />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}