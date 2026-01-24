import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, GraduationCap, Briefcase, Map, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90",
    alt: "Opportunités internationales - Voyages et formation"
  },
  {
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=1920&q=90",
    alt: "Voyageur découvrant Berlin"
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=90",
    alt: "Étudiants internationaux"
  }
];

export function Hero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  return (
    <section className="relative bg-gradient-to-br from-deep-navy via-ocean-teal to-vibrant-coral text-white py-24 md:py-32 overflow-hidden">
      {/* Diaporama animé avec haute qualité */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            <motion.div
              animate={{ scale: 1.08 }}
              transition={{ duration: 7, ease: "linear" }}
              className="relative w-full h-full"
            >
              <Image 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                fill
                style={{ objectFit: "cover" }}
                priority
                quality={90}
                className="opacity-40"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contrôles de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
        aria-label="Slide suivant"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicateurs de slides */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full shadow-lg ${
              index === currentSlide
                ? "w-12 h-3 bg-warm-gold"
                : "w-3 h-3 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Overlay optimisé pour meilleure visibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/70 via-ocean-teal/60 to-deep-navy/70 z-[1]"></div>
      
      {/* Motif de points subtil */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 z-[2]"></div>
      
      {/* Effets lumineux subtils */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-ocean-teal/15 rounded-full blur-3xl animate-pulse z-[3]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-gold/10 rounded-full blur-3xl animate-pulse z-[3]" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge animé avec fond pour lisibilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-xl px-6 py-3 rounded-full border border-white/50 shadow-2xl"
          >
            <Sparkles className="h-5 w-5 text-warm-gold drop-shadow-lg" />
            <span className="text-sm font-bold tracking-wide text-white drop-shadow-lg">{t("hero.badge")}</span>
          </motion.div>
          
          {/* Titre principal avec ombres renforcées */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-white"
            style={{
              textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.9), 0 8px 24px rgba(0,0,0,0.6)'
            }}
          >
            {t("hero.titre")}
          </motion.h1>
          
          {/* Sous-titre avec fond semi-transparent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p
              className="text-xl md:text-2xl text-white font-medium leading-relaxed px-6 py-3 rounded-2xl bg-black/30 backdrop-blur-sm"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)'
              }}
            >
              {t("hero.soustitre")}
            </p>
          </motion.div>
          
          {/* Boutons d'action avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-warm-gold hover:bg-warm-gold/90 text-deep-navy text-lg font-bold px-10 py-7 rounded-2xl shadow-2xl hover:shadow-warm-gold/60 transition-all duration-300 hover:scale-105">
                {t("hero.bouton.principal")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/rendez-vous">
              <Button size="lg" variant="outline" className="border-2 border-white bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-deep-navy text-lg font-bold px-10 py-7 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl">
                Planifiez votre aventure internationale
              </Button>
            </Link>
          </motion.div>
          
          {/* Cartes des services avec animation décalée et fond amélioré */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16"
          >
            {[
              { icon: Briefcase, label: t("hero.stats.volontariat"), gradient: "from-vibrant-coral to-orange-500", delay: 0 },
              { icon: GraduationCap, label: t("hero.stats.formations"), gradient: "from-ocean-teal to-blue-500", delay: 0.1 },
              { icon: GraduationCap, label: t("hero.stats.etudes"), gradient: "from-sage-green to-green-500", delay: 0.2 },
              { icon: Map, label: t("hero.stats.tourisme"), gradient: "from-warm-gold to-yellow-500", delay: 0.3 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + item.delay }}
                className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/40 hover:bg-black/50 transition-all duration-300 hover:scale-105 group shadow-2xl"
              >
                <div className={`bg-gradient-to-br ${item.gradient} p-3 rounded-xl inline-block mb-3 group-hover:scale-110 transition-transform shadow-xl`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <p 
                  className="text-sm font-bold text-white"
                  style={{
                    textShadow: '0 2px 6px rgba(0,0,0,0.8)'
                  }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}