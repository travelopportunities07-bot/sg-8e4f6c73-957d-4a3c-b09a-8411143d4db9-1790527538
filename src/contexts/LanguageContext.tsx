import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Language = 'fr' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.volunteering': 'Volontariat',
    'nav.training': 'Formations',
    'nav.studies': 'Études',
    'nav.tourism': 'Tourisme',
    'nav.support': 'Accompagnement',
    'nav.blog': 'Blog & Guides',
    'nav.contact': 'Contact',
    
    'hero.title': 'Votre Avenir en Allemagne Commence Ici',
    'hero.subtitle': 'Découvrez des opportunités de volontariat, formation professionnelle, études et tourisme en Allemagne. Un accompagnement complet pour concrétiser votre projet.',
    'hero.cta.primary': 'Demander un accompagnement',
    'hero.cta.secondary': 'Découvrir les opportunités',
    
    'opportunities.title': 'Explorez Vos Opportunités en Allemagne',
    'opportunities.subtitle': 'Des parcours adaptés à chaque profil et projet',
    
    'opportunities.volunteering.title': 'Volontariat (FSJ, BFD, FWD)',
    'opportunities.volunteering.desc': 'Engagez-vous dans une mission de volontariat en Allemagne : social, écologique ou culturel. Une expérience enrichissante avec logement et indemnités.',
    
    'opportunities.training.title': 'Formations Professionnelles',
    'opportunities.training.desc': 'Intégrez une formation professionnelle en Allemagne : soins infirmiers, artisanat, hôtellerie et bien plus. Diplôme reconnu et rémunération.',
    
    'opportunities.studies.title': 'Études Supérieures',
    'opportunities.studies.desc': 'Étudiez dans une université allemande de renom. Frais réduits, qualité académique reconnue internationalement et vie étudiante dynamique.',
    
    'opportunities.tourism.title': 'Tourisme & Culture',
    'opportunities.tourism.desc': 'Découvrez l\'Allemagne : châteaux, musées, festivals et nature. Des circuits organisés et des conseils pour voyager en toute sérénité.',
    
    'why.title': 'Pourquoi Choisir l\'Allemagne ?',
    'why.subtitle': 'Un pays d\'opportunités au cœur de l\'Europe',
    
    'why.economy.title': 'Économie Dynamique',
    'why.economy.desc': 'Première économie européenne avec d\'excellentes opportunités d\'emploi et de formation',
    
    'why.education.title': 'Éducation de Qualité',
    'why.education.desc': 'Universités de renommée mondiale et système de formation professionnelle exemplaire',
    
    'why.culture.title': 'Richesse Culturelle',
    'why.culture.desc': 'Histoire fascinante, patrimoine exceptionnel et scène culturelle vibrante',
    
    'why.quality.title': 'Qualité de Vie',
    'why.quality.desc': 'Infrastructures modernes, sécurité, système de santé performant et environnement préservé',
    
    'steps.title': 'Comment Ça Marche ?',
    'steps.subtitle': 'Un parcours simple et accompagné',
    
    'steps.1.title': '1. Consultation Gratuite',
    'steps.1.desc': 'Échangez avec nos conseillers pour définir votre projet et vérifier votre éligibilité',
    
    'steps.2.title': '2. Préparation du Dossier',
    'steps.2.desc': 'Nous vous aidons à constituer votre dossier et à préparer votre départ',
    
    'steps.3.title': '3. Accompagnement sur Place',
    'steps.3.desc': 'Support continu pendant votre séjour : logement, démarches, intégration',
    
    'cta.title': 'Prêt à Démarrer Votre Projet ?',
    'cta.subtitle': 'Contactez-nous pour un entretien personnalisé',
    'cta.button': 'Demander une consultation',
    
    'footer.about': 'À propos',
    'footer.about.text': 'Votre partenaire de confiance pour réaliser vos projets en Allemagne : volontariat, formation, études et tourisme.',
    'footer.links': 'Liens Rapides',
    'footer.resources': 'Ressources',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    
    'common.learnMore': 'En savoir plus',
    'common.apply': 'Postuler',
    'common.contact': 'Nous contacter',
    'common.readMore': 'Lire la suite',
    
    'home': 'Accueil',
    'about': 'À Propos',
    'contact': 'Contact',
    'appointment': 'Rendez-vous'
  },
  en: {
    'nav.home': 'Home',
    'nav.volunteering': 'Volunteering',
    'nav.training': 'Training',
    'nav.studies': 'Studies',
    'nav.tourism': 'Tourism',
    'nav.support': 'Support',
    'nav.blog': 'Blog & Guides',
    'nav.contact': 'Contact',
    
    'hero.title': 'Your Future in Germany Starts Here',
    'hero.subtitle': 'Discover volunteering, professional training, study and tourism opportunities in Germany. Complete support to make your project a reality.',
    'hero.cta.primary': 'Request support',
    'hero.cta.secondary': 'Explore opportunities',
    
    'opportunities.title': 'Explore Your Opportunities in Germany',
    'opportunities.subtitle': 'Pathways tailored to every profile and project',
    
    'opportunities.volunteering.title': 'Volunteering (FSJ, BFD, FWD)',
    'opportunities.volunteering.desc': 'Engage in a volunteer mission in Germany: social, ecological or cultural. An enriching experience with accommodation and allowances.',
    
    'opportunities.training.title': 'Professional Training',
    'opportunities.training.desc': 'Join professional training in Germany: nursing, crafts, hospitality and more. Recognized diploma and remuneration.',
    
    'opportunities.studies.title': 'Higher Education',
    'opportunities.studies.desc': 'Study at a renowned German university. Reduced fees, internationally recognized academic quality and dynamic student life.',
    
    'opportunities.tourism.title': 'Tourism & Culture',
    'opportunities.tourism.desc': 'Discover Germany: castles, museums, festivals and nature. Organized tours and advice for peaceful travel.',
    
    'why.title': 'Why Choose Germany?',
    'why.subtitle': 'A land of opportunities in the heart of Europe',
    
    'why.economy.title': 'Dynamic Economy',
    'why.economy.desc': 'Europe\'s leading economy with excellent employment and training opportunities',
    
    'why.education.title': 'Quality Education',
    'why.education.desc': 'World-renowned universities and exemplary vocational training system',
    
    'why.culture.title': 'Cultural Richness',
    'why.culture.desc': 'Fascinating history, exceptional heritage and vibrant cultural scene',
    
    'why.quality.title': 'Quality of Life',
    'why.quality.desc': 'Modern infrastructure, safety, efficient healthcare system and preserved environment',
    
    'steps.title': 'How Does It Work?',
    'steps.subtitle': 'A simple and supported journey',
    
    'steps.1.title': '1. Free Consultation',
    'steps.1.desc': 'Talk with our advisors to define your project and check your eligibility',
    
    'steps.2.title': '2. File Preparation',
    'steps.2.desc': 'We help you build your file and prepare your departure',
    
    'steps.3.title': '3. On-Site Support',
    'steps.3.desc': 'Ongoing support during your stay: accommodation, procedures, integration',
    
    'cta.title': 'Ready to Start Your Project?',
    'cta.subtitle': 'Contact us for a personalized interview',
    'cta.button': 'Request a consultation',
    
    'footer.about': 'About',
    'footer.about.text': 'Your trusted partner to realize your projects in Germany: volunteering, training, studies and tourism.',
    'footer.links': 'Quick Links',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    
    'common.learnMore': 'Learn more',
    'common.apply': 'Apply',
    'common.contact': 'Contact us',
    'common.readMore': 'Read more',
    
    'home': 'Home',
    'about': 'About',
    'contact': 'Contact',
    'appointment': 'Appointment'
  },
  de: {
    'nav.home': 'Startseite',
    'nav.volunteering': 'Freiwilligendienst',
    'nav.training': 'Ausbildung',
    'nav.studies': 'Studium',
    'nav.tourism': 'Tourismus',
    'nav.support': 'Begleitung',
    'nav.blog': 'Blog & Ratgeber',
    'nav.contact': 'Kontakt',
    
    'hero.title': 'Ihre Zukunft in Deutschland Beginnt Hier',
    'hero.subtitle': 'Entdecken Sie Möglichkeiten für Freiwilligendienst, Berufsausbildung, Studium und Tourismus in Deutschland. Umfassende Begleitung zur Verwirklichung Ihres Projekts.',
    'hero.cta.primary': 'Begleitung anfragen',
    'hero.cta.secondary': 'Möglichkeiten entdecken',
    
    'opportunities.title': 'Erkunden Sie Ihre Möglichkeiten in Deutschland',
    'opportunities.subtitle': 'Wege für jedes Profil und Projekt',
    
    'opportunities.volunteering.title': 'Freiwilligendienst (FSJ, BFD, FWD)',
    'opportunities.volunteering.desc': 'Engagieren Sie sich in einem Freiwilligendienst in Deutschland: sozial, ökologisch oder kulturell. Eine bereichernde Erfahrung mit Unterkunft und Vergütung.',
    
    'opportunities.training.title': 'Berufsausbildung',
    'opportunities.training.desc': 'Beginnen Sie eine Berufsausbildung in Deutschland: Krankenpflege, Handwerk, Gastgewerbe und mehr. Anerkanntes Diplom und Vergütung.',
    
    'opportunities.studies.title': 'Hochschulstudium',
    'opportunities.studies.desc': 'Studieren Sie an einer renommierten deutschen Universität. Reduzierte Gebühren, international anerkannte akademische Qualität und dynamisches Studentenleben.',
    
    'opportunities.tourism.title': 'Tourismus & Kultur',
    'opportunities.tourism.desc': 'Entdecken Sie Deutschland: Schlösser, Museen, Festivals und Natur. Organisierte Touren und Tipps für sorgenfreies Reisen.',
    
    'why.title': 'Warum Deutschland Wählen?',
    'why.subtitle': 'Ein Land voller Möglichkeiten im Herzen Europas',
    
    'why.economy.title': 'Dynamische Wirtschaft',
    'why.economy.desc': 'Führende Wirtschaft Europas mit hervorragenden Beschäftigungs- und Ausbildungsmöglichkeiten',
    
    'why.education.title': 'Qualitätsbildung',
    'why.education.desc': 'Weltbekannte Universitäten und vorbildliches Berufsbildungssystem',
    
    'why.culture.title': 'Kultureller Reichtum',
    'why.culture.desc': 'Faszinierende Geschichte, außergewöhnliches Erbe und lebendige Kulturszene',
    
    'why.quality.title': 'Lebensqualität',
    'why.quality.desc': 'Moderne Infrastruktur, Sicherheit, effizientes Gesundheitssystem und geschützte Umwelt',
    
    'steps.title': 'Wie Funktioniert Es?',
    'steps.subtitle': 'Ein einfacher und begleiteter Weg',
    
    'steps.1.title': '1. Kostenlose Beratung',
    'steps.1.desc': 'Sprechen Sie mit unseren Beratern, um Ihr Projekt zu definieren und Ihre Eignung zu überprüfen',
    
    'steps.2.title': '2. Vorbereitung der Unterlagen',
    'steps.2.desc': 'Wir helfen Ihnen bei der Erstellung Ihrer Unterlagen und bei der Vorbereitung Ihrer Abreise',
    
    'steps.3.title': '3. Begleitung vor Ort',
    'steps.3.desc': 'Kontinuierliche Unterstützung während Ihres Aufenthalts: Unterkunft, Formalitäten, Integration',
    
    'cta.title': 'Bereit, Ihr Projekt zu Starten?',
    'cta.subtitle': 'Kontaktieren Sie uns für ein persönliches Gespräch',
    'cta.button': 'Beratung anfragen',
    
    'footer.about': 'Über uns',
    'footer.about.text': 'Ihr vertrauenswürdiger Partner zur Verwirklichung Ihrer Projekte in Deutschland: Freiwilligendienst, Ausbildung, Studium und Tourismus.',
    'footer.links': 'Schnelllinks',
    'footer.resources': 'Ressourcen',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    
    'common.learnMore': 'Mehr erfahren',
    'common.apply': 'Bewerben',
    'common.contact': 'Kontaktieren Sie uns',
    'common.readMore': 'Weiterlesen',
    
    'home': 'Startseite',
    'about': 'Über uns',
    'contact': 'Kontakt',
    'appointment': 'Termin'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string, params?: Record<string, string>): string => {
    const translation = translations[language][key as keyof typeof translations.fr] || key;
    
    if (params) {
      return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
        return acc.replace(`{{${paramKey}}}`, paramValue);
      }, translation);
    }
    
    return translation;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en" || savedLanguage === "de")) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}