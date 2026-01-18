import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Globe, GraduationCap, Briefcase, Map } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-gradient-to-br from-institutional-blue via-institutional-blue to-blue-900 text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600')] bg-cover bg-center opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 animate-fade-in">
            <Globe className="h-5 w-5 text-accent-green" />
            <span className="text-sm font-medium">{t("hero.badge")}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            {t("hero.titre")}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            {t("hero.soustitre")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link href="/contact">
              <Button size="lg" className="bg-accent-green hover:bg-accent-green/90 text-white text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
                {t("hero.bouton.principal")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/opportunites">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-institutional-blue text-lg px-8 py-6 rounded-lg transition-all">
                {t("hero.bouton.secondaire")}
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-fade-in">
            {[
              { icon: Briefcase, label: t("hero.stats.volontariat") },
              { icon: GraduationCap, label: t("hero.stats.formations") },
              { icon: GraduationCap, label: t("hero.stats.etudes") },
              { icon: Map, label: t("hero.stats.tourisme") }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <item.icon className="h-8 w-8 text-accent-green mx-auto mb-2" />
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}