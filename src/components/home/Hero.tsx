import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/hero-vivrenallemagne.png",
    alt: "VivrEnAllemagne - Votre guide pour vivre, travailler et étudier en Allemagne"
  },
  {
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=90",
    alt: "Brandenburg Gate Berlin - Symbole de l'Allemagne"
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=90",
    alt: "Étudiants internationaux en Allemagne"
  },
  {
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&q=90",
    alt: "Opportunités professionnelles en Allemagne"
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
    }, 6000);

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
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 md:py-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Diaporama animé avec haute qualité */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary/90 hover:bg-primary backdrop-blur-md p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary/90 hover:bg-primary backdrop-blur-md p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
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
                ? "w-12 h-3 bg-primary"
                : "w-3 h-3 bg-primary/40 hover:bg-primary/60"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Overlay optimisé pour meilleure visibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-50/60 to-white/70 z-[1]"></div>
      
      {/* Motif de points subtil */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMzAsNTgsMTM4LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 z-[2]"></div>
      
      {/* Effets lumineux subtils */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse z-[3]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse z-[3]" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          
          {/* Titre principal premium */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold leading-tight text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
          >
            {t("hero.titre")}
          </motion.h1>
          
          {/* Sous-titre élégant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {t("hero.soustitre")}
            </p>
          </motion.div>
          
          {/* Boutons premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
          >
            <Link href="#services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-12 py-8 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                Découvrir
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}