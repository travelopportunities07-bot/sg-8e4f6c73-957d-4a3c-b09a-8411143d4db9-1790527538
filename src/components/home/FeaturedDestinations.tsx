import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Users, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturedDestinations() {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Users,
      titleKey: "etapes.1.titre",
      descKey: "etapes.1.desc",
      gradient: "from-vibrant-coral to-rose-500",
      number: "01",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
    },
    {
      icon: CheckCircle,
      titleKey: "etapes.2.titre",
      descKey: "etapes.2.desc",
      gradient: "from-ocean-teal to-blue-500",
      number: "02",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
    },
    {
      icon: MapPin,
      titleKey: "etapes.3.titre",
      descKey: "etapes.3.desc",
      gradient: "from-sage-green to-emerald-500",
      number: "03",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80"
    }
  ];
  
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-coral/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-block">
            <span className="text-sage-green font-bold text-sm uppercase tracking-wider bg-sage-green/10 px-4 py-2 rounded-full">
              Notre Méthode
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy">
            {t("etapes.titre")}
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            {t("etapes.soustitre")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-1 bg-gradient-to-r from-ocean-teal/30 via-warm-gold/30 to-transparent rounded-full"></div>
              )}
              
              <Card className="overflow-hidden p-0 text-center border-2 border-gray-100 hover:border-ocean-teal/30 hover:shadow-2xl transition-all duration-500 relative bg-white group hover:-translate-y-2">
                {/* Image d'illustration */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={t(step.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 text-6xl font-bold text-white/20">
                    {step.number}
                  </div>
                </div>
                
                <div className="p-10">
                  <div className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-5 w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 -mt-16 relative z-10`}>
                    <step.icon className="h-12 w-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-deep-navy mb-4 group-hover:text-ocean-teal transition-colors">
                    {t(step.titleKey)}
                  </h3>
                  
                  <p className="text-charcoal/80 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Link href="/demarches">
            <Button size="lg" className="bg-gradient-to-r from-ocean-teal to-blue-600 hover:from-ocean-teal/90 hover:to-blue-600/90 text-white text-lg font-bold px-12 py-7 rounded-2xl shadow-2xl hover:shadow-ocean-teal/50 transition-all duration-300 hover:scale-105 group">
              {t("commun.enSavoirPlus")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}