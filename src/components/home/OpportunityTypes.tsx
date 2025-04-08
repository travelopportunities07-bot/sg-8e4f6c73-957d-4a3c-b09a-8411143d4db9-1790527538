
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";

interface OpportunityType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const opportunityTypes: OpportunityType[] = [
  {
    id: "travail",
    name: "Travail",
    description: "Opportunités d'emploi et de carrière à l'international",
    icon: <Briefcase className="h-10 w-10 text-blue-500" />
  },
  {
    id: "formations",
    name: "Formations",
    description: "Programmes d'études, bourses et formations professionnelles",
    icon: <GraduationCap className="h-10 w-10 text-green-500" />
  },
  {
    id: "tourisme",
    name: "Tourisme",
    description: "Voyages, visites et expériences culturelles",
    icon: <Globe className="h-10 w-10 text-purple-500" />
  },
  {
    id: "volontariat",
    name: "Volontariat",
    description: "Missions humanitaires et programmes de bénévolat",
    icon: <Heart className="h-10 w-10 text-red-500" />
  },
  {
    id: "stages",
    name: "Stages",
    description: "Stages professionnels et programmes d'immersion",
    icon: <Award className="h-10 w-10 text-yellow-500" />
  },
  {
    id: "au-pair",
    name: "Au-pair",
    description: "Programmes d'échange culturel et garde d'enfants",
    icon: <Home className="h-10 w-10 text-pink-500" />
  },
  {
    id: "business",
    name: "Business",
    description: "Opportunités d'affaires et d'entrepreneuriat",
    icon: <Building className="h-10 w-10 text-indigo-500" />
  }
];

export function OpportunityTypes() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Types d'Opportunités</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez les différentes catégories d'opportunités disponibles pour les résidents africains souhaitant voyager à l'international.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {opportunityTypes.map((type) => (
            <Link href={`/opportunites/${type.id}`} key={type.id}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/opportunites">
              Explorer Toutes les Opportunités
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
