
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AProposPage() {
  return (
    <Layout 
      title="À Propos | AfricaOpportunités"
      description="Découvrez notre mission et notre vision pour faciliter l'accès des résidents africains aux opportunités internationales."
    >
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">À Propos de Nous</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Nous créons des ponts entre l'Afrique et le monde pour faciliter l'accès aux opportunités internationales.
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                Chez AfricaOpportunités, notre mission est de démocratiser l'accès aux opportunités internationales pour les résidents africains. Nous croyons que chaque personne mérite d'avoir accès aux possibilités qui correspondent à ses aspirations, indépendamment de sa localisation géographique.
              </p>
              <p className="text-lg text-gray-700">
                Nous nous engageons à fournir des informations fiables, actualisées et pertinentes sur les opportunités de travail, d'études, de volontariat et plus encore dans les pays les plus attractifs pour les résidents africains.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8" 
                alt="Notre mission" 
                fill 
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparence</h3>
              <p className="text-gray-600">
                Nous nous engageons à fournir des informations claires, précises et vérifiées sur toutes les opportunités que nous présentons.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Accessibilité</h3>
              <p className="text-gray-600">
                Nous travaillons à rendre l'information accessible à tous, en simplifiant les procédures complexes et en fournissant des guides pratiques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusion</h3>
              <p className="text-gray-600">
                Nous croyons que chaque personne, indépendamment de son origine, mérite d'avoir accès aux opportunités qui lui permettront de réaliser son potentiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Notre Histoire</h2>
            <p className="text-lg text-gray-700 mb-6">
              AfricaOpportunités est né d'un constat simple : malgré le talent et le potentiel des résidents africains, l'accès aux opportunités internationales reste souvent limité par le manque d'information fiable et le manque de guidance dans les démarches administratives.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Notre fondateur, ayant lui-même vécu les défis liés à la recherche d'opportunités à l'étranger, a décidé de créer une plateforme qui centraliserait toutes les informations nécessaires et accompagnerait les candidats dans leur projet international.
            </p>
            <p className="text-lg text-gray-700">
              Aujourd'hui, notre équipe multiculturelle travaille avec passion pour identifier les meilleures opportunités et fournir des conseils pratiques à notre communauté grandissante.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Équipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member placeholders - replace with actual team members */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Membre de l'équipe" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-xl font-bold">Thomas Mensah</h3>
              <p className="text-primary mb-3">Fondateur & Directeur</p>
              <p className="text-gray-600">
                Passionné par l'éducation internationale et le développement des compétences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
                  alt="Membre de l'équipe" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-xl font-bold">Aminata Diallo</h3>
              <p className="text-primary mb-3">Responsable des Partenariats</p>
              <p className="text-gray-600">
                Experte en relations internationales avec une expérience dans plusieurs pays européens.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919" 
                  alt="Membre de l'équipe" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-xl font-bold">Jean-Paul Nkosi</h3>
              <p className="text-primary mb-3">Conseiller en Immigration</p>
              <p className="text-gray-600">
                Spécialiste des procédures de visa avec plus de 10 ans d'expérience dans le domaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez Notre Communauté</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Découvrez des opportunités adaptées à votre profil et bénéficiez de conseils personnalisés pour réaliser votre projet international.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/destinations">
                Découvrir les Destinations
              </Link>
            </Button>
            <Button asChild className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">
                Nous Contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
