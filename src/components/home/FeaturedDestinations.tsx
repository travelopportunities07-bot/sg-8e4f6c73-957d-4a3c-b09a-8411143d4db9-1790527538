import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Users, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturedDestinations() {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Users,
      titleKey: "etapes.1.titre",
      descKey: "etapes.1.desc"
    },
    {
      icon: CheckCircle,
      titleKey: "etapes.2.titre",
      descKey: "etapes.2.desc"
    },
    {
      icon: MapPin,
      titleKey: "etapes.3.titre",
      descKey: "etapes.3.desc"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-institutional-blue">
            {t("etapes.titre")}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t("etapes.soustitre")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent-green to-transparent"></div>
              )}
              
              <Card className="p-8 text-center border-2 border-gray-200 hover:border-accent-green hover:shadow-xl transition-all duration-300 relative bg-white">
                <div className="bg-gradient-to-br from-accent-green to-green-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-institutional-blue mb-3">
                  {t(step.titleKey)}
                </h3>
                
                <p className="text-text-secondary">
                  {t(step.descKey)}
                </p>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/demarches">
            <Button size="lg" className="bg-institutional-blue hover:bg-blue-900 text-white text-lg px-8 py-6 rounded-lg shadow-lg">
              {t("commun.enSavoirPlus")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}