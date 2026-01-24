import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, GraduationCap, Briefcase, Map, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-gradient-to-br from-deep-navy via-ocean-teal to-vibrant-coral text-white py-24 md:py-32 overflow-hidden">
      {/* Image de fond professionnelle */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
          alt="Opportunités internationales - Voyages et formation"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="opacity-25"
        />
      </div>
      
      {/* Overlay pour meilleure lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/95 via-ocean-teal/90 to-deep-navy/95 z-[1]"></div>
      
      {/* Motif de points subtil */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 z-[2]"></div>
      
      {/* Effets lumineux subtils */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-ocean-teal/20 rounded-full blur-3xl animate-pulse z-[3]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-gold/15 rounded-full blur-3xl animate-pulse z-[3]" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/40 shadow-2xl animate-fade-in">
            <Sparkles className="h-5 w-5 text-warm-gold" />
            <span className="text-sm font-bold tracking-wide text-white">{t("hero.badge")}</span>
          </div>
          
          {/* Titre principal avec ombre pour lisibilité */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in text-white drop-shadow-2xl">
            {t("hero.titre")}
          </h1>
          
          {/* Sous-titre avec contraste amélioré */}
          <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg">
            {t("hero.soustitre")}
          </p>
          
          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4 animate-fade-in">
            <Link href="/contact">
              <Button size="lg" className="bg-warm-gold hover:bg-warm-gold/90 text-deep-navy text-lg font-bold px-10 py-7 rounded-2xl shadow-2xl hover:shadow-warm-gold/50 transition-all duration-300 hover:scale-105">
                {t("hero.bouton.principal")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/rendez-vous">
              <Button size="lg" variant="outline" className="border-2 border-white bg-white/15 backdrop-blur-sm text-white hover:bg-white hover:text-deep-navy text-lg font-bold px-10 py-7 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl">
                Planifiez votre aventure internationale
              </Button>
            </Link>
          </div>
          
          {/* Cartes des services */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 animate-fade-in">
            {[
              { icon: Briefcase, label: t("hero.stats.volontariat"), gradient: "from-vibrant-coral to-orange-500" },
              { icon: GraduationCap, label: t("hero.stats.formations"), gradient: "from-ocean-teal to-blue-500" },
              { icon: GraduationCap, label: t("hero.stats.etudes"), gradient: "from-sage-green to-green-500" },
              { icon: Map, label: t("hero.stats.tourisme"), gradient: "from-warm-gold to-yellow-500" }
            ].map((item, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 group shadow-xl">
                <div className={`bg-gradient-to-br ${item.gradient} p-3 rounded-xl inline-block mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-sm font-bold text-white drop-shadow-md">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}