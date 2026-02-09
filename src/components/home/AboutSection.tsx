import { TrendingUp, Award, Globe, Shield, ChevronLeft, ChevronRight, Star, ShieldCheck, UserCheck, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AboutSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const benefits = [
    {
      icon: TrendingUp,
      titleKey: "pourquoi.economie.titre",
      descKey: "pourquoi.economie.desc",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: Award,
      titleKey: "pourquoi.education.titre",
      descKey: "pourquoi.education.desc",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      icon: Globe,
      titleKey: "pourquoi.culture.titre",
      descKey: "pourquoi.culture.desc",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
      gradient: "from-emerald-600 to-teal-500"
    },
    {
      icon: Shield,
      titleKey: "pourquoi.qualite.titre",
      descKey: "pourquoi.qualite.desc",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
      gradient: "from-orange-600 to-red-500"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, benefits.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
    setIsAutoPlaying(false);
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Effets de fond animés */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-institutional-blue via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {t("pourquoi.titre")}
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto font-medium">
            {t("pourquoi.soustitre")}
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="min-w-full">
                  <div className="grid md:grid-cols-2 gap-0 items-center">
                    {/* Image Section */}
                    <div className="relative h-80 md:h-96 overflow-hidden">
                      <Image 
                        src={benefit.image}
                        alt={t(benefit.titleKey)}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 hover:scale-110"
                        priority={index === 0}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-40`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Floating Icon */}
                      <div className={`absolute top-8 left-8 bg-gradient-to-br ${benefit.gradient} rounded-2xl p-4 shadow-2xl transform hover:scale-110 transition-transform`}>
                        <benefit.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 md:p-12 space-y-6">
                      <div className="space-y-4">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${benefit.gradient} rounded-full text-white text-sm font-bold shadow-lg`}>
                          <benefit.icon className="h-4 w-4" />
                          <span>Avantage {index + 1}</span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                          {t(benefit.titleKey)}
                        </h3>
                        
                        <p className="text-lg text-slate-600 leading-relaxed">
                          {t(benefit.descKey)}
                        </p>
                      </div>

                      {/* Progress Bar */}
                      <div className="pt-4">
                        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${benefit.gradient} rounded-full transition-all duration-300`}
                            style={{ 
                              width: currentSlide === index ? "100%" : "0%",
                              transition: currentSlide === index ? "width 5s linear" : "width 0.3s"
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white border-2 border-slate-200 shadow-xl rounded-full h-12 w-12 z-10 hover:scale-110 transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-institutional-blue" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white border-2 border-slate-200 shadow-xl rounded-full h-12 w-12 z-10 hover:scale-110 transition-all"
          >
            <ChevronRight className="h-6 w-6 text-institutional-blue" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index 
                    ? "w-12 h-3 bg-gradient-to-r from-institutional-blue to-cyan-600" 
                    : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Badges Premium & Pro (Remplacement des Mini Preview Cards) */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-6xl mx-auto">
          {[
            { icon: Star, label: "Référence Allemagne" },
            { icon: ShieldCheck, label: "Conseils Fiables" },
            { icon: UserCheck, label: "Suivi Pro" },
            { icon: Headphones, label: "Support dédié" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-default flex-1 min-w-[200px] justify-center"
            >
              <item.icon className="h-6 w-6" />
              <span className="font-bold text-lg whitespace-nowrap">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}