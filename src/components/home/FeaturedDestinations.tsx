import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, MapPin, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FeaturedDestinations() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const steps = [
    {
      icon: Users,
      titleKey: "etapes.1.titre",
      descKey: "etapes.1.desc",
      gradient: "from-blue-600 to-blue-400",
      accent: "text-blue-500",
      bg: "bg-blue-50",
      number: "01",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=85&auto=format&fit=crop"
    },
    {
      icon: CheckCircle,
      titleKey: "etapes.2.titre",
      descKey: "etapes.2.desc",
      gradient: "from-amber-500 to-amber-300",
      accent: "text-amber-500",
      bg: "bg-amber-50",
      number: "02",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=85&auto=format&fit=crop"
    },
    {
      icon: MapPin,
      titleKey: "etapes.3.titre",
      descKey: "etapes.3.desc",
      gradient: "from-emerald-600 to-emerald-400",
      accent: "text-emerald-500",
      bg: "bg-emerald-50",
      number: "03",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, steps.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };
  
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">
              Une Méthode Éprouvée
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
          >
            {t("etapes.titre")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t("etapes.soustitre")}
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-12 min-h-[600px]">
              
              {/* Content Side */}
              <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${steps[currentSlide].gradient} shadow-lg shadow-blue-900/5`}>
                      {(() => {
                        const Icon = steps[currentSlide].icon;
                        return <Icon className="h-10 w-10 text-white" />;
                      })()}
                    </div>
                    
                    <div className="space-y-4">
                      <div className={`text-6xl font-black text-slate-100 absolute top-12 right-12 select-none pointer-events-none`}>
                        {steps[currentSlide].number}
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                        {t(steps[currentSlide].titleKey)}
                      </h3>
                      
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {t(steps[currentSlide].descKey)}
                      </p>
                    </div>

                    <Link href="/demarches">
                      <Button className="group mt-4 bg-slate-900 text-white hover:bg-blue-900 border-none">
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="flex gap-4 mt-12 pt-8 border-t border-slate-100">
                  {steps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className="group flex flex-col gap-2 flex-1"
                      aria-label={`Aller à l'étape ${idx + 1}`}
                    >
                      <div className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                        idx === currentSlide 
                          ? `bg-gradient-to-r ${step.gradient}` 
                          : "bg-slate-100 group-hover:bg-slate-200"
                      }`} />
                      <span className={`text-xs font-bold transition-colors duration-300 ${
                        idx === currentSlide ? "text-slate-900" : "text-slate-400"
                      }`}>
                        {step.number}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:col-span-7 relative h-[400px] lg:h-auto overflow-hidden order-1 lg:order-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={steps[currentSlide].image}
                      alt={t(steps[currentSlide].titleKey)}
                      fill
                      style={{ objectFit: "cover" }}
                      className="brightness-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 lg:to-transparent"></div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons Overlay */}
                <div className="absolute bottom-8 right-8 flex gap-3 z-10">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 bg-white/90 backdrop-blur-md hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg border border-white/20"
                    aria-label="Étape précédente"
                  >
                    <ChevronLeft className="h-6 w-6 text-slate-900" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 bg-white/90 backdrop-blur-md hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg border border-white/20"
                    aria-label="Étape suivante"
                  >
                    <ChevronRight className="h-6 w-6 text-slate-900" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/demarches">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-bold px-10 py-6 rounded-2xl shadow-xl hover:shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1">
              Commencer votre procédure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}