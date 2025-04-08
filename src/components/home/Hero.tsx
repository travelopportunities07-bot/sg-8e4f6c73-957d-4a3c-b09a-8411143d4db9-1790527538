
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 md:py-36">
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080" 
          alt="Carte du monde" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aventure Sans Frontières
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Votre passerelle vers le monde. Nous connectons les esprits curieux aux meilleures opportunités de voyages, études, volontariat, stages ou emplois à l'international. Explorez, osez, transformez votre avenir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/destinations">
                Découvrir les Destinations
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-indigo-800">
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
