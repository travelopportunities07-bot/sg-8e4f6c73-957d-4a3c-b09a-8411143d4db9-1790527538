
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Découvrez le Monde des Opportunités Internationales
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Votre passerelle vers des opportunités de travail, de volontariat, de formation et plus encore dans les pays les plus attractifs pour les résidents africains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/destinations">
                Découvrir les Destinations
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-blue-700">
              <Link href="/opportunites">
                Explorer les Opportunités
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
