
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";

interface OpportunityType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const opportunityTypes: OpportunityType[] = [
  {
    id: "travail",
    name: "Travail",
    description: "Découvrez des opportunités d'emploi et de carrière à l'international dans divers secteurs. Informations sur les permis de travail, les secteurs qui recrutent et les démarches à suivre.",
    icon: <Briefcase className="h-12 w-12" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: "formations",
    name: "Formations",
    description: "Explorez les programmes d'études, bourses et formations professionnelles disponibles pour les résidents africains dans différents pays.",
    icon: <GraduationCap className="h-12 w-12" />,
    color: "bg-green-50 text-green-600"
  },
  {
    id: "tourisme",
    name: "Tourisme",
    description: "Informations sur les visas touristiques, les destinations recommandées et les conseils pratiques pour organiser votre voyage.",
    icon: <Globe className="h-12 w-12" />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: "volontariat",
    name: "Volontariat",
    description: "Découvrez des programmes de volontariat et des missions humanitaires qui vous permettront de contribuer tout en vivant une expérience enrichissante.",
    icon: <Heart className="h-12 w-12" />,
    color: "bg-red-50 text-red-600"
  },
  {
    id: "stages",
    name: "Stages",
    description: "Trouvez des stages professionnels et des programmes d'immersion pour acquérir une expérience internationale valorisante.",
    icon: <Award className="h-12 w-12" />,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    id: "au-pair",
    name: "Au-pair",
    description: "Informations sur les programmes d'échange culturel et de garde d'enfants qui vous permettent de vivre dans une famille à l'étranger.",
    icon: <Home className="h-12 w-12" />,
    color: "bg-pink-50 text-pink-600"
  },
  {
    id: "business",
    name: "Business",
    description: "Explorez les opportunités d'affaires, d'entrepreneuriat et d'investissement dans différents pays pour développer vos projets professionnels.",
    icon: <Building className="h-12 w-12" />,
    color: "bg-indigo-50 text-indigo-600"
  }
];

export default function OpportunitesPage() {
  return (
    <Layout 
      title="Types d'Opportunités | AfricaOpportunités"
      description="Découvrez les différents types d'opportunités internationales disponibles pour les résidents africains."
    >
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Types d'Opportunités</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-8">
            Explorez les différentes catégories d'opportunités internationales disponibles pour les résidents africains.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunityTypes.map((type) => (
            <Link href={`/opportunites/${type.id}`} key={type.id}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className={`${type.color} p-4 rounded-full inline-block mb-6`}>
                    {type.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{type.name}</h2>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
