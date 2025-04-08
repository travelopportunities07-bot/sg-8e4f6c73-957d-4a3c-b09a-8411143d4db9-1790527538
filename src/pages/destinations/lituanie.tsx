
import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Heart, Globe, Building } from "lucide-react";

export default function LituaniePage() {
  return (
    <Layout
      title="Lituanie | Aventure Sans Frontières"
      description="Découvrez les opportunités d'études, de travail et de volontariat en Lituanie. Un joyau baltique avec un riche patrimoine culturel."
    >
      {/* Hero Section */}
      <div className="relative">
        <div className="h-96 md:h-[500px] relative">
          <Image
            src="https://images.unsplash.com/photo-1541322072-7d8dea59c2b8"
            alt="Vilnius, Lituanie"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🇱🇹</span>
              <h1 className="text-4xl md:text-5xl font-bold">Lituanie</h1>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl mb-6">
              Un joyau baltique avec un riche patrimoine culturel et des universités de qualité.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Aperçu de la Lituanie</h2>
              <p className="text-lg text-gray-700 mb-6">
                La Lituanie, située au cœur de l'Europe du Nord, est un pays balte qui offre un mélange unique de traditions anciennes et d'innovation moderne. Avec ses villes médiévales pittoresques, ses forêts verdoyantes et ses plages de la mer Baltique, la Lituanie est une destination qui séduit par sa beauté naturelle et son patrimoine culturel riche.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Membre de l'Union européenne et de la zone euro, la Lituanie offre un environnement stable et sécurisé pour les étudiants internationaux et les professionnels. Le pays est reconnu pour son système éducatif de qualité, son coût de vie abordable et sa population accueillante.
              </p>
              <p className="text-lg text-gray-700">
                Vilnius, la capitale, est une ville dynamique qui allie patrimoine historique et modernité. Son centre-ville baroque, classé au patrimoine mondial de l'UNESCO, côtoie des quartiers innovants et une scène culturelle vibrante.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="font-semibold">Capitale:</span> Vilnius
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-semibold">Langue:</span> Lituanien
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-semibold">Population:</span> 2,8 millions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-semibold">Monnaie:</span> Euro (€)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-semibold">Climat:</span> Continental tempéré
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-semibold">Visa:</span> Non requis pour les citoyens UE
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1610969227323-669aea192e01"
                  alt="Trakai, Lituanie"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Château de Trakai, l'une des attractions touristiques les plus populaires de Lituanie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Opportunités en Lituanie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-4">
                  <GraduationCap className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Études</h3>
                <p className="text-gray-700 mb-4">
                  Les universités lituaniennes offrent des programmes de qualité en anglais à des tarifs compétitifs. Vilnius University et Kaunas University of Technology sont particulièrement réputées.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/opportunites/etudes">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Briefcase className="h-10 w-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Emploi</h3>
                <p className="text-gray-700 mb-4">
                  Le secteur technologique lituanien est en pleine expansion, offrant de nombreuses opportunités pour les professionnels qualifiés, notamment dans les fintech et les services partagés.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/opportunites/travail">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Heart className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Volontariat</h3>
                <p className="text-gray-700 mb-4">
                  De nombreuses ONG lituaniennes accueillent des volontaires internationaux, notamment dans les domaines de l'environnement, de l'éducation et du patrimoine culturel.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/opportunites/volontariat">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Globe className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Voyages</h3>
                <p className="text-gray-700 mb-4">
                  Découvrez les trésors cachés de la Lituanie : villes médiévales, parcs nationaux, côte baltique et traditions culturelles uniques.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/opportunites/voyages">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Découvrez la Lituanie en Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 md:h-64">
              <Image
                src="https://images.unsplash.com/photo-1586375300773-8384e3e4916f"
                alt="Vilnius Old Town"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="relative h-48 md:h-64">
              <Image
                src="https://images.unsplash.com/photo-1610969227323-669aea192e01"
                alt="Trakai Castle"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="relative h-48 md:h-64">
              <Image
                src="https://images.unsplash.com/photo-1587789202069-f57c846b85db"
                alt="Curonian Spit"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="relative h-48 md:h-64">
              <Image
                src="https://images.unsplash.com/photo-1589830400998-a6c6774b5eaf"
                alt="Kaunas"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir la Lituanie?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Explorez nos ressources et opportunités pour planifier votre aventure lituanienne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Nous Contacter
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/opportunites">
                Explorer les Opportunités
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
