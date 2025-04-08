import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Destination {
  id: string;
  name: string;
  flag: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
    description: "Un pays accueillant offrant d'excellentes opportunités d'études et de travail."
  },
  {
    id: "lituanie",
    name: "Lituanie",
    flag: "🇱🇹",
    image: "https://images.unsplash.com/photo-1541322072-7d8dea59c2b8",
    description: "Un joyau baltique avec un riche patrimoine culturel et des universités de qualité."
  },
  {
    id: "autriche",
    name: "Autriche",
    flag: "🇦🇹",
    image: "https://images.unsplash.com/photo-1516550893885-985c836c5be4",
    description: "Tradition et innovation au cœur de l'Europe, excellence académique et qualité de vie."
  },
  {
    id: "japon",
    name: "Japon",
    flag: "🇯🇵",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d",
    description: "Découvrez une culture fascinante et des programmes d'échange enrichissants."
  },
  {
    id: "allemagne",
    name: "Allemagne",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc",
    description: "Un pays à la pointe de l'innovation avec des formations de qualité."
  },
  {
    id: "australie",
    name: "Australie",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
    description: "Combinez aventure et opportunités professionnelles dans un cadre exceptionnel."
  }
];

export function FeaturedDestinations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Destinations Inspirantes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez des pays qui offrent des opportunités exceptionnelles pour étudier, travailler, voyager ou vous engager dans des projets de volontariat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Link href={`/destinations/${destination.id}`} key={destination.id}>
              <Card className="overflow-hidden h-full transition-transform hover:scale-105 shadow-sm">
                <div className="relative h-56">
                  <Image 
                    src={destination.image} 
                    alt={destination.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-sm font-bold">
                    {destination.flag}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600">{destination.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/destinations">
              Découvrir Toutes les Destinations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}