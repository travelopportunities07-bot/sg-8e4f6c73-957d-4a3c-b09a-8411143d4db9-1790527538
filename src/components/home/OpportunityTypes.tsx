
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface OpportunityType {
  id: string;
  nameKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  color: string;
}

export function OpportunityTypes() {
  const { t } = useLanguage();

  const opportunityTypes: OpportunityType[] = [
    {
      id: "etudes",
      nameKey: "opportunity.studies",
      descriptionKey: "opportunity.studies.desc",
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      color: "#2563eb"
    },
    {
      id: "travail",
      nameKey: "opportunity.work",
      descriptionKey: "opportunity.work.desc",
      icon: <Briefcase className="h-12 w-12 text-indigo-600" />,
      color: "#4f46e5"
    },
    {
      id: "volontariat",
      nameKey: "opportunity.volunteer",
      descriptionKey: "opportunity.volunteer.desc",
      icon: <Heart className="h-12 w-12 text-red-600" />,
      color: "#dc2626"
    },
    {
      id: "stages",
      nameKey: "opportunity.internship",
      descriptionKey: "opportunity.internship.desc",
      icon: <Award className="h-12 w-12 text-amber-600" />,
      color: "#d97706"
    },
    {
      id: "voyages",
      nameKey: "opportunity.travel",
      descriptionKey: "opportunity.travel.desc",
      icon: <Globe className="h-12 w-12 text-green-600" />,
      color: "#16a34a"
    },
    {
      id: "echanges",
      nameKey: "opportunity.exchange",
      descriptionKey: "opportunity.exchange.desc",
      icon: <Home className="h-12 w-12 text-purple-600" />,
      color: "#9333ea"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('opportunity.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('opportunity.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunityTypes.map((type) => (
            <Link href={`/opportunites/${type.id}`} key={type.id}>
              <Card className="h-full transition-all hover:shadow-md border-t-4" style={{ borderTopColor: type.color }}>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-gray-50">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{t(type.nameKey)}</h3>
                  <p className="text-gray-600">{t(type.descriptionKey)}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/opportunites">
              {t('opportunities')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
