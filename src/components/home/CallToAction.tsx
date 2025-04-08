
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à Découvrir Votre Prochaine Opportunité?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Explorez nos destinations et types d'opportunités pour trouver celle qui correspond à vos aspirations et compétences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
            <Link href="/destinations">
              Découvrir les Destinations
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">
              Nous Contacter
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
