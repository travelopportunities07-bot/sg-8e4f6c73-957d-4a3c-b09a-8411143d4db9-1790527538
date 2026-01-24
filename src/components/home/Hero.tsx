import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, GraduationCap, Briefcase, Map, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
    alt: "Opportunités internationales - Voyages et formation"
  },
  {
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=1920&q=80",
    alt: "Voyageur découvrant Berlin"
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
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
      {/* Diaporama animé */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              animate={{ scale: 1.05 }}
              transition={{ duration: 7, ease: "linear" }}
              className="relative w-full h-full"
            >
              <Image 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                fill
                style={{ objectFit: "cover" }}
                priority
                className="opacity-25"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contrôles de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110"
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
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-warm-gold"
                : "w-3 h-3 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Overlay pour meilleure lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/95 via-ocean-teal/90 to-deep-navy/95 z-[1]"></div>
      
      {/* Motif de points subtil */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 z-[2]"></div>
      
      {/* Effets lumineux subtils */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-ocean-teal/20 rounded-full blur-3xl animate-pulse z-[3]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-gold/15 rounded-full blur-3xl animate-pulse z-[3]" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge animé */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/40 shadow-2xl"
          >
            <Sparkles className="h-5 w-5 text-warm-gold" />
            <span className="text-sm font-bold tracking-wide text-white">{t("hero.badge")}</span>
          </motion.div>
          
          {/* Titre principal avec animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl"
          >
            {t("hero.titre")}
          </motion.h1>
          
          {/* Sous-titre avec animation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {t("hero.soustitre")}
          </motion.p>
          
          {/* Boutons d'action avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4"
          >
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
          </motion.div>
          
          {/* Cartes des services avec animation décalée */}
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
                className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 group shadow-xl"
              >
                <div className={`bg-gradient-to-br ${item.gradient} p-3 rounded-xl inline-block mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-sm font-bold text-white drop-shadow-md">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}