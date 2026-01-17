import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <div className='relative bg-gradient-to-r from-blue-700/80 to-indigo-800/80 text-white py-24 md:py-36'>
      <div className='absolute inset-0 opacity-60'>
        <Image 
          src='https://images.unsplash.com/photo-1488085061387-422e29b40080' 
          alt={t('hero.title')} 
          fill 
          style={{ objectFit: 'cover' }}
          priority
          className='brightness-90'
        />
      </div>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-3xl backdrop-blur-sm bg-black/10 p-6 rounded-lg'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow'>
            {t('hero.title')}
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-shadow'>
            {t('hero.subtitle')}
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button asChild size='lg' className='text-lg'>
              <Link href='/destinations'>
                {t('destinations.viewAll')}
              </Link>
            </Button>
            <Button asChild variant='outline' size='lg' className='text-lg bg-transparent border-white text-white hover:bg-white hover:text-indigo-800'>
              <Link href='/opportunites'>
                {t('hero.cta')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}