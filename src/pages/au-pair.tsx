import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, Heart, Globe, Calendar, CheckCircle, ArrowRight, Users, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AuPairPage() {
  const { t } = useLanguage();

  const avantages = [
    {
      icon: Home,
      titleKey: "aupair.avantages.immersion.titre",
      descKey: "aupair.avantages.immersion.desc"
    },
    {
      icon: BookOpen,
      titleKey: "aupair.avantages.langue.titre",
      descKey: "aupair.avantages.langue.desc"
    },
    {
      icon: Heart,
      titleKey: "aupair.avantages.famille.titre",
      descKey: "aupair.avantages.famille.desc"
    },
    {
      icon: Globe,
      titleKey: "aupair.avantages.culture.titre",
      descKey: "aupair.avantages.culture.desc"
    }
  ];

  const conditions = [
    "aupair.conditions.age",
    "aupair.conditions.langue",
    "aupair.conditions.experience",
    "aupair.conditions.duree",
    "aupair.conditions.disponibilite"
  ];

  const inclus = [
    "aupair.inclus.chambre",
    "aupair.inclus.repas",
    "aupair.inclus.argent",
    "aupair.inclus.assurance",
    "aupair.inclus.cours",
    "aupair.inclus.conges"
  ];

  return (
    <Layout
      title={t("aupair.meta.titre")}
      description={t("aupair.meta.description")}
    >
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-lg">
                {t("aupair.hero.badge")}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-deep-navy leading-tight">
              {t("aupair.hero.titre")}
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
              {t("aupair.hero.soustitre")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 rounded-full">
                  {t("aupair.hero.bouton.principal")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-500 hover:bg-purple-50 text-lg px-8 py-6 rounded-full">
                  {t("aupair.hero.bouton.secondaire")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy">
                {t("aupair.description.titre")}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-charcoal/80 space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-xl leading-relaxed">
                {t("aupair.description.texte1")}
              </p>
              <p className="text-xl leading-relaxed">
                {t("aupair.description.texte2")}
              </p>
              <p className="text-xl leading-relaxed">
                {t("aupair.description.texte3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-gradient-to-b from-soft-cream to-white">
        <div className="container">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-block">
              <span className="text-purple-500 font-bold text-sm uppercase tracking-wider bg-purple-500/10 px-4 py-2 rounded-full">
                {t("aupair.avantages.badge")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy">
              {t("aupair.avantages.titre")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {avantages.map((avantage, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <avantage.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-navy mb-4">
                  {t(avantage.titleKey)}
                </h3>
                <p className="text-charcoal/80 leading-relaxed text-lg">
                  {t(avantage.descKey)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy">
                {t("aupair.inclus.titre")}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inclus.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-purple-500/5 hover:bg-purple-500/10 transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-purple-500" />
                  </div>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    {t(item)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-gradient-to-b from-soft-cream to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in">
              <div className="inline-block">
                <span className="text-pink-500 font-bold text-sm uppercase tracking-wider bg-pink-500/10 px-4 py-2 rounded-full">
                  {t("aupair.conditions.badge")}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy">
                {t("aupair.conditions.titre")}
              </h2>
            </div>

            <Card className="p-8 md:p-12 bg-white shadow-xl">
              <div className="space-y-6">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-pink-500" />
                    </div>
                    <p className="text-lg text-charcoal/80 leading-relaxed">
                      {t(condition)}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy">
                {t("aupair.processus.titre")}
              </h2>
              <p className="text-xl text-charcoal/80">
                {t("aupair.processus.soustitre")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((step) => (
                <Card key={step} className="p-8 text-center bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${step * 0.1}s` }}>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                    {step}
                  </div>
                  <h3 className="text-2xl font-bold text-deep-navy mb-4">
                    {t(`aupair.processus.etape${step}.titre`)}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    {t(`aupair.processus.etape${step}.desc`)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8 text-white animate-fade-in">
            <Users className="h-16 w-16 mx-auto opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("aupair.cta.titre")}
            </h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              {t("aupair.cta.soustitre")}
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 rounded-full font-bold">
                  {t("aupair.cta.bouton")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}