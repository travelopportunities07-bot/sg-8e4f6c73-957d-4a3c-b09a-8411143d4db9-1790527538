import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Briefcase, GraduationCap, Globe, Heart, Plane, BookOpen, Users } from "lucide-react";

interface OpportunityType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  href: string;
}

const opportunityTypes: OpportunityType[] = [
  {
    id: "volontariat",
    name: "Volontariat International",
    description: "Découvrez des programmes de volontariat et des missions qui vous permettront de contribuer tout en vivant une expérience enrichissante à l'étranger.",
    icon: <Heart className="h-12 w-12" />,
    gradient: "from-vibrant-coral to-accent",
    href: "/volontariat"
  },
  {
    id: "formations",
    name: "Formations Professionnelles",
    description: "Explorez les programmes de formation et d'apprentissage professionnels disponibles dans différents pays pour développer vos compétences.",
    icon: <Briefcase className="h-12 w-12" />,
    gradient: "from-ocean-blue to-primary",
    href: "/formations"
  },
  {
    id: "etudes",
    name: "Études & Bourses",
    description: "Découvrez les opportunités d'études supérieures, bourses universitaires et programmes académiques à l'international.",
    icon: <GraduationCap className="h-12 w-12" />,
    gradient: "from-deep-teal to-success",
    href: "/etudes"
  },
  {
    id: "tourisme",
    name: "Tourisme & Voyages",
    description: "Informations sur les visas touristiques, les destinations recommandées et les conseils pratiques pour organiser vos voyages.",
    icon: <Plane className="h-12 w-12" />,
    gradient: "from-primary to-ocean-blue",
    href: "/tourisme"
  },
  {
    id: "demarches",
    name: "Démarches & Accompagnement",
    description: "Bénéficiez d'un accompagnement complet pour toutes vos démarches administratives, de visa et d'immigration.",
    icon: <BookOpen className="h-12 w-12" />,
    gradient: "from-accent to-vibrant-coral",
    href: "/demarches"
  },
  {
    id: "communaute",
    name: "Communauté & Réseau",
    description: "Rejoignez notre communauté de voyageurs et bénéficiez du partage d'expériences et de conseils pratiques.",
    icon: <Users className="h-12 w-12" />,
    gradient: "from-success to-deep-teal",
    href: "/blog"
  }
];

export default function OpportunitesPage() {
  return (
    <Layout 
      title="Types d'Opportunités | VivrEnAllemagne"
      description="Découvrez les différents types d'opportunités internationales : volontariat, formations, études, tourisme et accompagnement personnalisé."
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-dark-navy via-ocean-blue to-deep-teal text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="relative container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">Nos Opportunités</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Explorez les différentes catégories d'opportunités internationales que nous proposons
          </p>
        </div>
      </div>

      {/* Opportunities Grid */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunityTypes.map((type, index) => (
              <Link href={type.href} key={type.id} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className={`bg-gradient-to-br ${type.gradient} p-5 rounded-2xl inline-block mb-6 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {type.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 font-heading text-dark-navy group-hover:text-ocean-blue transition-colors">
                      {type.name}
                    </h2>
                    <p className="text-charcoal leading-relaxed">
                      {type.description}
                    </p>
                    <div className="mt-6 flex items-center text-ocean-blue font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>En savoir plus</span>
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-ocean-blue to-deep-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">Besoin d'aide pour choisir ?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
            Notre équipe est là pour vous guider vers l'opportunité qui correspond le mieux à votre profil et vos aspirations.
          </p>
          <Link href="/contact">
            <button className="bg-vibrant-coral hover:bg-vibrant-coral/90 text-white font-semibold px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Contactez-nous
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}