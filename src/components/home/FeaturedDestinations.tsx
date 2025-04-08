
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Destination {
  id: string;
  name: string;
  flag: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: "allemagne",
    name: "Allemagne",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc",
    description: "Découvrez les opportunités professionnelles et éducatives en Allemagne."
  },
  {
    id: "australie",
    name: "Australie",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
    description: "Explorez les possibilités de travail et d'études dans le pays des kangourous."
  },
  {
    id: "norvege",
    name: "Norvège",
    flag: "🇳🇴",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
    description: "Découvrez les opportunités dans l'un des pays les plus développés du monde."
  },
  {
    id: "irlande",
    name: "Irlande",
    flag: "🇮🇪",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e",
    description: "Explorez les possibilités d'emploi et d'études dans l'île d'émeraude."
  }
];

export function FeaturedDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Destinations Populaires</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos destinations les plus recherchées et les opportunités qu'elles offrent aux résidents africains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Link href={`/destinations/${destination.id}`} key={destination.id}>
              <Card className="overflow-hidden h-full transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image 
                    src={destination.image} 
                    alt={destination.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    {destination.flag} {destination.name}
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
              Voir Toutes les Destinations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
