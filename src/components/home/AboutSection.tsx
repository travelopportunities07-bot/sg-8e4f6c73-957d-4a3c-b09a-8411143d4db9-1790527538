
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Chez AfricaOpportunités, nous nous engageons à faciliter l'accès des résidents africains aux opportunités internationales. Notre plateforme centralise des informations fiables sur les possibilités de travail, d'études, de volontariat et plus encore dans les pays les plus attractifs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nous croyons que chaque personne mérite d'avoir accès aux opportunités qui correspondent à ses aspirations, indépendamment de sa localisation géographique. Notre objectif est de créer des ponts entre l'Afrique et le reste du monde.
            </p>
            <Button asChild>
              <Link href="/a-propos">
                En Savoir Plus
              </Link>
            </Button>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Nos Services</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Information sur les opportunités internationales par pays</p>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Guides sur les procédures de visa et les démarches administratives</p>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Conseils pour préparer votre projet international</p>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Mise en relation avec des partenaires fiables</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
