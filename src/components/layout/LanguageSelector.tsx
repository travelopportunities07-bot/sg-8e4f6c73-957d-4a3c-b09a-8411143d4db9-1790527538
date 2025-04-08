import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSelector({ className }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button 
        variant='ghost' 
        size='sm' 
        className='flex items-center gap-1 text-white hover:text-white hover:bg-primary-dark'
        onClick={toggleLanguage}
      >
        <Globe className='h-4 w-4' />
        <span>{language === 'fr' ? 'FR' : 'EN'}</span>
      </Button>
    </div>
  );
}