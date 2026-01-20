import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Globe, GraduationCap, Briefcase, Map, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-gradient-to-br from-deep-navy via-ocean-teal to-vibrant-coral text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 z-0"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-ocean-teal/30 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-coral/20 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/30 shadow-xl animate-fade-in">
            <Sparkles className="h-5 w-5 text-warm-gold" />
            <span className="text-sm font-semibold tracking-wide">{t("hero.badge")}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in bg-gradient-to-r from-white via-warm-gold to-white bg-clip-text text-transparent">
            {t("hero.titre")}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t("hero.soustitre")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4 animate-fade-in">
            <Link href="/contact">
              <Button size="lg" className="bg-warm-gold hover:bg-warm-gold/90 text-deep-navy text-lg font-bold px-10 py-7 rounded-2xl shadow-2xl hover:shadow-warm-gold/50 transition-all duration-300 hover:scale-105">
                {t("hero.bouton.principal")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/opportunites">
              <Button size="lg" variant="outline" className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-deep-navy text-lg font-semibold px-10 py-7 rounded-2xl transition-all duration-300 hover:scale-105">
                {t("hero.bouton.secondaire")}
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 animate-fade-in">
            {[
              { icon: Briefcase, label: t("hero.stats.volontariat"), gradient: "from-vibrant-coral to-orange-500" },
              { icon: GraduationCap, label: t("hero.stats.formations"), gradient: "from-ocean-teal to-blue-500" },
              { icon: GraduationCap, label: t("hero.stats.etudes"), gradient: "from-sage-green to-green-500" },
              { icon: Map, label: t("hero.stats.tourisme"), gradient: "from-warm-gold to-yellow-500" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <div className={`bg-gradient-to-br ${item.gradient} p-3 rounded-xl inline-block mb-3 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}