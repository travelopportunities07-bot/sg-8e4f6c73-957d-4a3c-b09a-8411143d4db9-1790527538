import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Wrench, GraduationCap, Camera, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function OpportunityTypes() {
  const { t } = useLanguage();
  
  const opportunities = [
    {
      icon: Heart,
      titleKey: "opportunities.volunteering.title",
      descKey: "opportunities.volunteering.desc",
      href: "/volontariat",
      color: "bg-red-50 text-red-600",
      borderColor: "border-red-200"
    },
    {
      icon: Wrench,
      titleKey: "opportunities.training.title",
      descKey: "opportunities.training.desc",
      href: "/formations",
      color: "bg-orange-50 text-orange-600",
      borderColor: "border-orange-200"
    },
    {
      icon: GraduationCap,
      titleKey: "opportunities.studies.title",
      descKey: "opportunities.studies.desc",
      href: "/etudes",
      color: "bg-blue-50 text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: Camera,
      titleKey: "opportunities.tourism.title",
      descKey: "opportunities.tourism.desc",
      href: "/tourisme",
      color: "bg-green-50 text-green-600",
      borderColor: "border-green-200"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-institutional-blue">
            {t("opportunities.title")}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t("opportunities.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index} 
              className="p-6 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${opportunity.color} ${opportunity.borderColor} border-2 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <opportunity.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold text-institutional-blue mb-3">
                {t(opportunity.titleKey)}
              </h3>
              
              <p className="text-text-secondary mb-4 min-h-[80px]">
                {t(opportunity.descKey)}
              </p>
              
              <Link href={opportunity.href}>
                <Button variant="ghost" className="text-accent-green hover:text-accent-green/90 p-0 h-auto font-semibold group/btn">
                  {t("common.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}