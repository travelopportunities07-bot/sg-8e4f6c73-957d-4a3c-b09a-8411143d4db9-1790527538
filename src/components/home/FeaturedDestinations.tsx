import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Destination {
  id: string;
  nameKey?: string;
  name: string;
  flag: string;
  image: string;
  descriptionKey?: string;
  description: string;
}

export function FeaturedDestinations() {
  const { t, language } = useLanguage();

  const destinations: Destination[] = [
    {
      id: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce',
      description: language === 'fr' 
        ? 'Un pays accueillant offrant d\'excellentes opportunités d\'études et de travail.'
        : language === 'de'
        ? 'Ein einladendes Land, das hervorragende Studien- und Arbeitsmöglichkeiten bietet.'
        : 'A welcoming country offering excellent study and work opportunities.'
    },
    {
      id: 'japon',
      name: 'Japon',
      flag: '🇯🇵',
      image: 'https://images.unsplash.com/photo-1528164344705-47542687000d',
      description: language === 'fr'
        ? 'Découvrez une culture fascinante et des programmes d\'échange enrichissants.'
        : language === 'de'
        ? 'Entdecken Sie eine faszinierende Kultur und bereichernde Austauschprogramme.'
        : 'Discover a fascinating culture and enriching exchange programs.'
    },
    {
      id: 'allemagne',
      name: 'Allemagne',
      flag: '🇩🇪',
      image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc',
      description: language === 'fr'
        ? 'Un pays à la pointe de l\'innovation avec des formations de qualité.'
        : language === 'de'
        ? 'Ein Land an der Spitze der Innovation mit hochwertigen Ausbildungsmöglichkeiten.'
        : 'A country at the forefront of innovation with quality training programs.'
    },
    {
      id: 'australie',
      name: 'Australie',
      flag: '🇦🇺',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
      description: language === 'fr'
        ? 'Combinez aventure et opportunités professionnelles dans un cadre exceptionnel.'
        : language === 'de'
        ? 'Kombinieren Sie Abenteuer und berufliche Möglichkeiten in einem außergewöhnlichen Umfeld.'
        : 'Combine adventure and professional opportunities in an exceptional setting.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('destinations.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('destinations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Link href={`/destinations/${destination.id}`} key={destination.id}>
              <Card className="overflow-hidden h-full transition-transform hover:scale-105 shadow-sm">
                <div className="relative h-56">
                  <Image 
                    src={destination.image} 
                    alt={destination.nameKey ? t(destination.nameKey) : destination.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-sm font-bold">
                    {destination.flag}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-2">
                    {destination.nameKey ? t(destination.nameKey) : destination.name}
                  </h3>
                  <p className="text-gray-600">
                    {destination.descriptionKey ? t(destination.descriptionKey) : destination.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/destinations">
              {t('destinations.viewAll')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}