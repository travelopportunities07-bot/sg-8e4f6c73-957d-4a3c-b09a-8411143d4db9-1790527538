import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à commencer votre aventure ?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Rejoignez notre communauté et découvrez un monde d'opportunités qui vous attendent.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors">
            Nous contacter
          </Link>
          <Link href="/calendly-widget" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors">
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}