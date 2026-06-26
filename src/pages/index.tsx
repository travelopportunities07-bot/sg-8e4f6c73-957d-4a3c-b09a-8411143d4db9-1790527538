import { Hero } from "@/components/home/Hero";
import { OpportunityTypes } from "@/components/home/OpportunityTypes";
import { AboutSection } from "@/components/home/AboutSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";
import { QuickAppointment } from "@/components/home/QuickAppointment";

export default function Home() {
  return (
    <>
      <Hero />
      <OpportunityTypes />
      <AboutSection />
      <Testimonials />
      <QuickAppointment />
      <CallToAction />
    </>
  );
}