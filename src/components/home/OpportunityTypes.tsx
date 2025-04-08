
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
    id: "etudes",
    name: "Études",
    description: "Programmes universitaires, bourses et formations professionnelles à l'international",
    icon: <GraduationCap className="h-12 w-12 text-blue-600" />
  },
  {
    id: "travail",
    name: "Emploi",
    description: "Opportunités professionnelles et carrières à l'international",
    icon: <Briefcase className="h-12 w-12 text-indigo-600" />
  },
  {
    id: "volontariat",
    name: "Volontariat",
    description: "Missions humanitaires et programmes de bénévolat pour un impact positif",
    icon: <Heart className="h-12 w-12 text-red-600" />
  },
  {
    id: "stages",
    name: "Stages",
    description: "Expériences professionnelles et programmes d'immersion pour développer vos compétences",
    icon: <Award className="h-12 w-12 text-amber-600" />
  },
  {
    id: "voyages",
    name: "Voyages",
    description: "Séjours linguistiques, voyages culturels et découvertes authentiques",
    icon: <Globe className="h-12 w-12 text-green-600" />
  },
  {
    id: "echanges",
    name: "Échanges",
    description: "Programmes d'échange culturel et immersions dans des familles d'accueil",
    icon: <Home className="h-12 w-12 text-purple-600" />
  }
];

export function OpportunityTypes() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transformez Votre Avenir</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez nos différentes catégories d'opportunités internationales et trouvez celle qui correspond à vos aspirations et à votre projet de vie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunityTypes.map((type) => (
            <Link href={`/opportunites/${type.id}`} key={type.id}>
              <Card className="h-full transition-all hover:shadow-md border-t-4" style={{ borderTopColor: type.icon.props.className.includes("blue") ? "#2563eb" : 
                                                                                          type.icon.props.className.includes("indigo") ? "#4f46e5" : 
                                                                                          type.icon.props.className.includes("red") ? "#dc2626" : 
                                                                                          type.icon.props.className.includes("amber") ? "#d97706" : 
                                                                                          type.icon.props.className.includes("green") ? "#16a34a" : 
                                                                                          "#9333ea" }}>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-gray-50">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{type.name}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/opportunites">
              Explorer Toutes les Opportunités
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
