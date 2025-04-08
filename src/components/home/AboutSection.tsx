
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Compass, Globe, Users, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Chez Aventure Sans Frontières, nous croyons que chaque individu mérite d'accéder aux opportunités internationales qui correspondent à ses aspirations. Notre mission est de connecter les esprits curieux aux meilleures possibilités à travers le monde.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nous centralisons des informations fiables et actualisées sur les opportunités de voyages, d'études, de volontariat, de stages et d'emplois à l'international, tout en vous accompagnant dans chaque étape de votre projet.
            </p>
            <Button asChild>
              <Link href="/a-propos">
                En Savoir Plus
              </Link>
            </Button>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Nos Engagements</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mr-4">
                  <Compass className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Orientation Personnalisée</h4>
                  <p className="text-gray-700">Nous vous guidons vers les opportunités qui correspondent à votre profil et à vos aspirations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Réseau International</h4>
                  <p className="text-gray-700">Nous collaborons avec des partenaires fiables dans le monde entier pour vous offrir des opportunités de qualité.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Communauté Solidaire</h4>
                  <p className="text-gray-700">Rejoignez une communauté d'explorateurs partageant leurs expériences et conseils.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Excellence et Fiabilité</h4>
                  <p className="text-gray-700">Nous vérifions rigoureusement chaque opportunité pour garantir leur qualité et leur légitimité.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
