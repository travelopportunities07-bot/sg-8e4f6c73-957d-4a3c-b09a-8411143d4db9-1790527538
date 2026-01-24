import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

export function FeaturedDestinations() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const steps = [
    {
      icon: Users,
      titleKey: "etapes.1.titre",
      descKey: "etapes.1.desc",
      gradient: "from-vibrant-coral to-rose-500",
      number: "01",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=85&auto=format&fit=crop"
    },
    {
      icon: CheckCircle,
      titleKey: "etapes.2.titre",
      descKey: "etapes.2.desc",
      gradient: "from-ocean-teal to-blue-500",
      number: "02",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85&auto=format&fit=crop"
    },
    {
      icon: MapPin,
      titleKey: "etapes.3.titre",
      descKey: "etapes.3.desc",
      gradient: "from-sage-green to-emerald-500",
      number: "03",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=85&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }, 5000);

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
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ocean-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vibrant-coral/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block animate-fade-in">
            <span className="text-ocean-teal font-bold text-sm uppercase tracking-widest bg-ocean-teal/10 px-6 py-2.5 rounded-full border border-ocean-teal/20">
              Notre Méthode
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy animate-fade-in leading-tight">
            {t("etapes.titre")}
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            {t("etapes.soustitre")}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Slides */}
            <div className="relative h-[600px] md:h-[500px]">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0"
                      : index < currentSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="grid md:grid-cols-2 h-full bg-white">
                    {/* Image Side */}
                    <div className="relative h-64 md:h-full order-1 md:order-2">
                      <Image
                        src={step.image}
                        alt={t(step.titleKey)}
                        fill
                        priority={index === 0}
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                      
                      {/* Floating Number */}
                      <div className="absolute top-8 right-8 w-20 h-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center">
                        <span className={`text-4xl font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}>
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 order-2 md:order-1">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-lg mb-6`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6 leading-tight">
                        {t(step.titleKey)}
                      </h3>
                      
                      <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                        {t(step.descKey)}
                      </p>

                      {/* Progress Bar */}
                      <div className="flex gap-2">
                        {steps.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className="group relative h-1 flex-1 bg-gray-200 rounded-full overflow-hidden transition-all hover:h-1.5"
                            aria-label={`Aller à l'étape ${idx + 1}`}
                          >
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${step.gradient} transition-all duration-300 ${
                                idx === currentSlide ? "w-full" : "w-0"
                              }`}
                            ></div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10 group"
              aria-label="Étape précédente"
            >
              <ChevronLeft className="h-6 w-6 text-deep-navy group-hover:text-ocean-teal transition-colors" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10 group"
              aria-label="Étape suivante"
            >
              <ChevronRight className="h-6 w-6 text-deep-navy group-hover:text-ocean-teal transition-colors" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? `w-12 h-3 bg-gradient-to-r ${step.gradient}`
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Aller à l'étape ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/demarches">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg font-bold px-12 py-7 rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group">
              {t("commun.enSavoirPlus")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}