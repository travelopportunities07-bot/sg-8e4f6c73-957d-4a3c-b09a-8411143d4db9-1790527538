import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSelectorProps {
  className?: string;
}

export function LanguageSelector({ className }: LanguageSelectorProps) {
  const { language, setLanguage, isLoaded } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const languageLabels = {
    fr: 'Français',
    en: 'English',
    de: 'Deutsch'
  };

  const languageCodes = {
    fr: 'FR',
    en: 'EN',
    de: 'DE'
  };

  const handleLanguageChange = (lang: 'fr' | 'en' | 'de') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Éviter le mismatch d'hydratation en attendant le montage côté client
  if (!mounted || !isLoaded) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Button 
          variant='ghost' 
          size='sm' 
          className='flex items-center gap-1 text-white hover:text-white hover:bg-primary-dark'
          disabled
        >
          <Globe className='h-4 w-4' />
          <span>FR</span>
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            variant='ghost' 
            size='sm' 
            className='flex items-center gap-1 text-white hover:text-white hover:bg-primary-dark'
          >
            <Globe className='h-4 w-4' />
            <span>{languageCodes[language]}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onClick={() => handleLanguageChange('fr')}>
            {languageLabels.fr}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
            {languageLabels.en}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('de')}>
            {languageLabels.de}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}