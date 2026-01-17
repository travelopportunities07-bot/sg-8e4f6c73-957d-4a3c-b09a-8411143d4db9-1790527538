import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, Globe } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 text-white py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Image 
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080" 
          alt={t('hero.title')} 
          fill 
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-blue-800/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <span className="text-sm font-medium">Votre voyage commence ici</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <Link href="/destinations" className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                {t('destinations.viewAll')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-indigo-900 shadow-lg transform hover:scale-105 transition-all">
              <Link href="/opportunites">
                {t('hero.cta')}
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">12+</div>
              <div className="text-sm text-blue-200">Pays partenaires</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-blue-200">Opportunités</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm text-blue-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}