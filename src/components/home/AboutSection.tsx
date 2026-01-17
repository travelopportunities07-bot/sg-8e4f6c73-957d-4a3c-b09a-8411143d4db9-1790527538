import { TrendingUp, Award, Globe, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: TrendingUp,
      titleKey: "why.economy.title",
      descKey: "why.economy.desc"
    },
    {
      icon: Award,
      titleKey: "why.education.title",
      descKey: "why.education.desc"
    },
    {
      icon: Globe,
      titleKey: "why.culture.title",
      descKey: "why.culture.desc"
    },
    {
      icon: Shield,
      titleKey: "why.quality.title",
      descKey: "why.quality.desc"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-section-gray">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-institutional-blue">
            {t("why.title")}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t("why.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-institutional-blue to-blue-700 rounded-lg p-3 w-14 h-14 flex items-center justify-center mb-4">
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-institutional-blue mb-3">
                {t(benefit.titleKey)}
              </h3>
              
              <p className="text-text-secondary">
                {t(benefit.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}