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
      titleKey: "opportunites.volontariat.titre",
      descKey: "opportunites.volontariat.desc",
      href: "/volontariat",
      gradient: "from-vibrant-coral to-rose-500",
      bgColor: "bg-vibrant-coral/5",
      iconBg: "bg-gradient-to-br from-vibrant-coral to-rose-500"
    },
    {
      icon: Wrench,
      titleKey: "opportunites.formations.titre",
      descKey: "opportunites.formations.desc",
      href: "/formations",
      gradient: "from-warm-gold to-amber-500",
      bgColor: "bg-warm-gold/5",
      iconBg: "bg-gradient-to-br from-warm-gold to-amber-500"
    },
    {
      icon: GraduationCap,
      titleKey: "opportunites.etudes.titre",
      descKey: "opportunites.etudes.desc",
      href: "/etudes",
      gradient: "from-ocean-teal to-blue-500",
      bgColor: "bg-ocean-teal/5",
      iconBg: "bg-gradient-to-br from-ocean-teal to-blue-500"
    },
    {
      icon: Camera,
      titleKey: "opportunites.tourisme.titre",
      descKey: "opportunites.tourisme.desc",
      href: "/tourisme",
      gradient: "from-sage-green to-emerald-500",
      bgColor: "bg-sage-green/5",
      iconBg: "bg-gradient-to-br from-sage-green to-emerald-500"
    }
  ];
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-soft-cream to-white">
      <div className="container">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-block">
            <span className="text-ocean-teal font-bold text-sm uppercase tracking-wider bg-ocean-teal/10 px-4 py-2 rounded-full">
              Nos Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy">
            {t("opportunites.titre")}
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            {t("opportunites.soustitre")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opportunity, index) => (
            <Link href={opportunity.href} key={index}>
              <Card className={`h-full p-8 ${opportunity.bgColor} border-2 border-transparent hover:border-opacity-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group cursor-pointer animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`${opportunity.iconBg} rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <opportunity.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-deep-navy mb-4 group-hover:text-ocean-teal transition-colors">
                  {t(opportunity.titleKey)}
                </h3>
                
                <p className="text-charcoal/80 mb-6 leading-relaxed min-h-[100px]">
                  {t(opportunity.descKey)}
                </p>
                
                <Button variant="ghost" className="text-ocean-teal hover:text-ocean-teal/80 p-0 h-auto font-bold group/btn">
                  {t("commun.enSavoirPlus")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}