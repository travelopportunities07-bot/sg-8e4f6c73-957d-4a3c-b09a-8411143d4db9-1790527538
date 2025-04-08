
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
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
    description: "Découvrez les opportunités professionnelles et éducatives en Allemagne, l'une des économies les plus fortes d'Europe."
  },
  {
    id: "australie",
    name: "Australie",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
    description: "Explorez les possibilités de travail et d'études dans le pays des kangourous, connu pour sa qualité de vie exceptionnelle."
  },
  {
    id: "norvege",
    name: "Norvège",
    flag: "🇳🇴",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
    description: "Découvrez les opportunités dans l'un des pays les plus développés du monde, offrant un excellent système social."
  },
  {
    id: "finlande",
    name: "Finlande",
    flag: "🇫🇮",
    image: "https://images.unsplash.com/photo-1508592931388-95bc7b61033d",
    description: "Explorez le pays du bonheur avec son système éducatif de renommée mondiale et ses opportunités technologiques."
  },
  {
    id: "irlande",
    name: "Irlande",
    flag: "🇮🇪",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e",
    description: "Découvrez l'île d'émeraude, hub technologique européen offrant de nombreuses opportunités professionnelles."
  },
  {
    id: "danemark",
    name: "Danemark",
    flag: "🇩🇰",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc",
    description: "Explorez ce pays scandinave réputé pour sa qualité de vie, son design et ses opportunités d'innovation."
  },
  {
    id: "luxembourg",
    name: "Luxembourg",
    flag: "🇱🇺",
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
    description: "Découvrez ce petit pays au cœur de l'Europe, centre financier offrant d'excellentes opportunités professionnelles."
  },
  {
    id: "autriche",
    name: "Autriche",
    flag: "🇦🇹",
    image: "https://images.unsplash.com/photo-1516550893885-985c994c8609",
    description: "Explorez ce pays alpin riche en culture, offrant d'excellentes opportunités d'études et de travail."
  },
  {
    id: "estonie",
    name: "Estonie",
    flag: "🇪🇪",
    image: "https://images.unsplash.com/photo-1541343672885-9be56236302a",
    description: "Découvrez ce leader numérique européen, pionnier de l'e-gouvernement et des startups technologiques."
  },
  {
    id: "lituanie",
    name: "Lituanie",
    flag: "🇱🇹",
    image: "https://images.unsplash.com/photo-1575308016027-4783c25c8fca",
    description: "Explorez ce pays balte en pleine croissance économique, offrant des opportunités dans les technologies et l'innovation."
  },
  {
    id: "russie",
    name: "Russie",
    flag: "🇷🇺",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d",
    description: "Découvrez le plus grand pays du monde, riche en histoire et en opportunités éducatives et culturelles."
  }
];

export default function DestinationsPage() {
  return (
    <Layout 
      title="Destinations | AfricaOpportunités"
      description="Explorez les différentes destinations internationales offrant des opportunités pour les résidents africains."
    >
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">🌍 Destinations</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-8">
            Explorez nos destinations internationales et découvrez les opportunités qu'elles offrent aux résidents africains.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Link href={`/destinations/${destination.id}`} key={destination.id}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                <div className="relative h-56">
                  <Image 
                    src={destination.image} 
                    alt={destination.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {destination.flag} {destination.name}
                  </h2>
                  <p className="text-gray-600">{destination.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
