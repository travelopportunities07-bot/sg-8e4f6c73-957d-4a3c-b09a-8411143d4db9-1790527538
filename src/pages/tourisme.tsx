import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { MapPin, Camera, Utensils, Building, CheckCircle, ArrowRight, Clock, Euro, Compass } from "lucide-react";

export default function TourismePage() {
  const { t } = useLanguage();

  const destinations = [
    {
      titre: "Berlin",
      description: "Capitale dynamique mêlant histoire, culture contemporaine et vie nocturne. Musées de classe mondiale, street art et gastronomie internationale.",
      attractions: ["Porte de Brandebourg", "Mur de Berlin", "Île aux Musées", "Reichstag"],
      icone: Building,
      couleur: "text-blue-600"
    },
    {
      titre: "Munich",
      description: "Ville élégante alliant traditions bavaroises et modernité. Architecture baroque, jardins anglais et capitale de la bière.",
      attractions: ["Marienplatz", "Jardin anglais", "Palais Nymphenburg", "Oktoberfest"],
      icone: Utensils,
      couleur: "text-orange-600"
    },
    {
      titre: "Château de Neuschwanstein",
      description: "Château de conte de fées au cœur des Alpes bavaroises. Architecture romantique inspirant Disney.",
      attractions: ["Château royal", "Alpsee", "Pont Marienbrücke", "Hohenschwangau"],
      icone: Camera,
      couleur: "text-purple-600"
    },
    {
      titre: "La Route Romantique",
      description: "Parcours pittoresque à travers villages médiévaux, vignobles et châteaux. 400 km de paysages enchanteurs.",
      attractions: ["Rothenburg", "Dinkelsbühl", "Nördlingen", "Würzburg"],
      icone: MapPin,
      couleur: "text-green-600"
    }
  ];

  const formules = [
    {
      titre: "Séjour découverte",
      duree: "3-7 jours",
      description: "Escapade urbaine dans les grandes villes allemandes",
      inclus: ["Hébergement en hôtel 3-4*", "Transferts aéroport", "Carte de transport", "Guide touristique"],
      prix: "À partir de 450€"
    },
    {
      titre: "Circuit culturel",
      duree: "7-14 jours",
      description: "Tour complet des trésors culturels et historiques",
      inclus: ["Hébergement", "Transport inter-villes", "Visites guidées", "Entrées musées"],
      prix: "À partir de 1.200€"
    },
    {
      titre: "Séjour thématique",
      duree: "Variable",
      description: "Tourisme gastronomique, festivals, Noël, Oktoberfest",
      inclus: ["Programme personnalisé", "Réservations événements", "Guide local", "Expériences uniques"],
      prix: "Sur mesure"
    }
  ];

  const services = [
    {
      icone: MapPin,
      titre: "Itinéraires personnalisés",
      description: "Programmes sur mesure selon vos intérêts et votre budget"
    },
    {
      icone: Clock,
      titre: "Organisation complète",
      description: "Hébergement, transport, visites guidées et activités"
    },
    {
      icone: Compass,
      titre: "Guide francophone",
      description: "Accompagnement en français pour une expérience immersive"
    },
    {
      icone: CheckCircle,
      titre: "Assistance 24/7",
      description: "Support permanent durant votre séjour en Allemagne"
    }
  ];

  const experiences = [
    "Marchés de Noël traditionnels",
    "Dégustation de bières et brasseries",
    "Croisière sur le Rhin romantique",
    "Visite de châteaux médiévaux",
    "Festivals culturels et musicaux",
    "Gastronomie régionale authentique",
    "Randonnées dans la Forêt-Noire",
    "Architecture et design contemporain"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Découvrez l'Allemagne
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tourisme en Allemagne
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Partez à la découverte de l'Allemagne : histoire fascinante, culture riche, paysages spectaculaires et gastronomie savoureuse. Voyages organisés sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rendez-vous">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                  Planifiez votre aventure internationale
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/rendez-vous">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                  Consultation gratuite
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Destinations incontournables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez les trésors de l'Allemagne, des grandes métropoles aux villages pittoresques
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {destinations.map((destination, index) => {
              const Icone = destination.icone;
              return (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${destination.couleur}`}>
                      <Icone className="h-16 w-16" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        {destination.titre}
                      </h3>
                      <p className="text-gray-700">
                        {destination.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="font-semibold text-blue-900 mb-3">À ne pas manquer :</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {destination.attractions.map((attraction, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{attraction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formules Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nos formules de voyage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des séjours adaptés à tous les budgets et tous les rythmes de voyage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {formules.map((formule, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Compass className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    {formule.titre}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-green-600 font-semibold mb-4">
                    <Clock className="h-5 w-5" />
                    <span>{formule.duree}</span>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {formule.description}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="font-semibold text-blue-900 mb-3">Inclus dans la formule :</p>
                  <ul className="space-y-2">
                    {formule.inclus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-green-600 mb-4">
                    <Euro className="h-6 w-6" />
                    <span>{formule.prix}</span>
                  </div>
                  <Link href="/contact">
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">
                      Demander un devis
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nos services touristiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aventures Sans Frontières organise votre voyage de A à Z pour une expérience sans stress
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icone = service.icone;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Icone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {service.titre}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Expériences authentiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vivez l'Allemagne de manière unique avec nos activités et excursions spéciales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-semibold">{experience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt pour l'aventure allemande ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez Aventures Sans Frontières pour organiser votre voyage sur mesure en Allemagne. Devis gratuit et personnalisé !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rendez-vous">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                Planifier mon voyage
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/rendez-vous">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}