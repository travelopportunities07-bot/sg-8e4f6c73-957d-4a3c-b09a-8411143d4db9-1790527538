import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function AProposPage() {
  return (
    <Layout 
      title="À Propos | Aventures Sans Frontières"
      description="Découvrez notre mission et notre vision pour faciliter l'accès aux opportunités internationales de mobilité."
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-ocean-blue via-primary to-deep-teal text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="relative container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">À Propos de Nous</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Nous créons des ponts entre les continents pour faciliter votre mobilité internationale
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Target className="h-5 w-5" />
                <span className="font-semibold">Notre Mission</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 font-heading text-dark-navy">
                Faciliter votre mobilité internationale
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                Chez Aventures Sans Frontières, notre mission est de démocratiser l'accès aux opportunités internationales. Nous croyons que chaque personne mérite d'avoir accès aux possibilités qui correspondent à ses aspirations, indépendamment de sa localisation géographique.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                Nous nous engageons à fournir des informations fiables, actualisées et un accompagnement personnalisé pour concrétiser vos projets de volontariat, formation, études ou tourisme à l'étranger.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-slide-right bg-gradient-to-br from-ocean-blue/10 to-primary/10 flex items-center justify-center">
              <Users className="w-32 h-32 text-ocean-blue opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-ocean-blue to-deep-teal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold mb-2">13+</div>
              <div className="text-white/80">Destinations</div>
            </div>
            <div className="text-center animate-fade-in-delay-1">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80">Candidats accompagnés</div>
            </div>
            <div className="text-center animate-fade-in-delay-2">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-white/80">Taux de satisfaction</div>
            </div>
            <div className="text-center animate-fade-in-delay-3">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading text-dark-navy">Nos Valeurs</h2>
            <p className="text-xl text-charcoal max-w-2xl mx-auto">
              Les principes qui guident notre accompagnement au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="bg-gradient-to-br from-ocean-blue to-primary p-4 rounded-2xl inline-block mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-dark-navy">Transparence</h3>
              <p className="text-charcoal leading-relaxed">
                Nous fournissons des informations claires, précises et vérifiées sur toutes les opportunités et démarches.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-delay-1">
              <div className="bg-gradient-to-br from-vibrant-coral to-accent p-4 rounded-2xl inline-block mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-dark-navy">Accompagnement</h3>
              <p className="text-charcoal leading-relaxed">
                Un suivi personnalisé à chaque étape de votre projet, de la préparation au départ et au-delà.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-delay-2">
              <div className="bg-gradient-to-br from-deep-teal to-success p-4 rounded-2xl inline-block mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-dark-navy">Excellence</h3>
              <p className="text-charcoal leading-relaxed">
                Nous sélectionnons rigoureusement nos partenaires et programmes pour garantir la meilleure expérience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 font-heading text-dark-navy">Notre Histoire</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-ocean-blue to-vibrant-coral mx-auto rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-charcoal leading-relaxed">
              <p>
                Aventures Sans Frontières est né de la vision d'Aisso International Ltd, une entreprise britannique dédiée à faciliter la mobilité internationale. Nous avons constaté que malgré le talent et la motivation de nombreux candidats, l'accès aux opportunités internationales reste souvent limité par le manque d'information fiable et la complexité des démarches administratives.
              </p>
              <p>
                Notre équipe, ayant elle-même vécu les défis liés aux projets de mobilité internationale, a décidé de créer une plateforme qui centraliserait toutes les informations nécessaires et accompagnerait les candidats dans leur projet, de A à Z.
              </p>
              <p>
                Aujourd'hui, notre équipe multiculturelle travaille avec passion pour identifier les meilleures opportunités dans plus de 13 pays et fournir un accompagnement personnalisé à notre communauté grandissante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-dark-navy via-ocean-blue to-deep-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">Prêt à démarrer votre aventure ?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-white/90">
            Découvrez des opportunités adaptées à votre profil et bénéficiez d'un accompagnement personnalisé pour réaliser votre projet international.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-vibrant-coral hover:bg-vibrant-coral/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Link href="/destinations">
                Découvrir les Destinations
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-ocean-blue font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105">
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