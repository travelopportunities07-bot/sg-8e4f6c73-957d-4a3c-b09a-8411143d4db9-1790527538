
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Language = 'fr' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

// Dictionnaire de traductions étendu
const translations = {
  fr: {
    // Navigation
    'home': 'Accueil',
    'opportunities': 'Opportunités',
    'destinations': 'Destinations',
    'appointment': 'Rendez-vous',
    'about': 'À propos',
    'contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Découvrez le Monde, Transformez Votre Avenir',
    'hero.subtitle': 'Explorez des opportunités internationales de voyage, d\'études, de volontariat et plus encore',
    'hero.cta': 'Découvrir les opportunités',
    
    // Opportunity Types
    'opportunity.title': 'Explorez Nos Opportunités',
    'opportunity.subtitle': 'Découvrez diverses façons de vivre une expérience internationale enrichissante',
    'opportunity.studies': 'Études',
    'opportunity.studies.desc': 'Programmes d\'études à l\'étranger pour élargir vos horizons académiques',
    'opportunity.internship': 'Stages',
    'opportunity.internship.desc': 'Acquérir une expérience professionnelle internationale précieuse',
    'opportunity.volunteer': 'Volontariat',
    'opportunity.volunteer.desc': 'Contribuer à des projets significatifs tout en découvrant de nouvelles cultures',
    'opportunity.work': 'Emploi',
    'opportunity.work.desc': 'Opportunités de carrière à l\'international dans divers secteurs',
    'opportunity.travel': 'Voyages',
    'opportunity.travel.desc': 'Expériences de voyage immersives et culturellement enrichissantes',
    
    // Featured Destinations
    'destinations.title': 'Destinations Populaires',
    'destinations.subtitle': 'Explorez nos destinations les plus recherchées',
    'destinations.viewAll': 'Voir toutes les destinations',
    'destinations.austria': 'Autriche',
    'destinations.lithuania': 'Lituanie',
    
    // About Section
    'about.title': 'À Propos de Nous',
    'about.subtitle': 'Votre partenaire de confiance pour les opportunités internationales',
    'about.description': 'Aventure Sans Frontières est dédié à connecter les personnes avec des opportunités internationales transformatrices. Notre mission est de faciliter les expériences interculturelles qui enrichissent les vies et élargissent les perspectives.',
    'about.mission': 'Notre Mission',
    'about.mission.desc': 'Faciliter des expériences internationales accessibles et enrichissantes',
    'about.vision': 'Notre Vision',
    'about.vision.desc': 'Un monde où les échanges culturels sont à la portée de tous',
    'about.values': 'Nos Valeurs',
    'about.values.desc': 'Authenticité, diversité, croissance personnelle et impact positif',
    
    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Participants',
    'testimonials.subtitle': 'Découvrez les expériences de ceux qui ont participé à nos programmes',
    
    // Call to Action
    'cta.title': 'Prêt à Commencer Votre Aventure?',
    'cta.subtitle': 'Prenez rendez-vous avec nos conseillers pour discuter de vos options',
    'cta.button': 'Prendre Rendez-vous',
    
    // Quick Appointment
    'quick.title': 'Besoin d\'aide?',
    'quick.subtitle': 'Planifiez un appel rapide de 30 minutes',
    'quick.button': 'Réserver',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation'
  },
  en: {
    // Navigation
    'home': 'Home',
    'opportunities': 'Opportunities',
    'destinations': 'Destinations',
    'appointment': 'Appointment',
    'about': 'About',
    'contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Discover the World, Transform Your Future',
    'hero.subtitle': 'Explore international opportunities for travel, studies, volunteering and more',
    'hero.cta': 'Discover opportunities',
    
    // Opportunity Types
    'opportunity.title': 'Explore Our Opportunities',
    'opportunity.subtitle': 'Discover various ways to experience an enriching international experience',
    'opportunity.studies': 'Studies',
    'opportunity.studies.desc': 'Study abroad programs to broaden your academic horizons',
    'opportunity.internship': 'Internships',
    'opportunity.internship.desc': 'Gain valuable international professional experience',
    'opportunity.volunteer': 'Volunteering',
    'opportunity.volunteer.desc': 'Contribute to meaningful projects while discovering new cultures',
    'opportunity.work': 'Employment',
    'opportunity.work.desc': 'International career opportunities in various sectors',
    'opportunity.travel': 'Travel',
    'opportunity.travel.desc': 'Immersive and culturally enriching travel experiences',
    
    // Featured Destinations
    'destinations.title': 'Popular Destinations',
    'destinations.subtitle': 'Explore our most sought-after destinations',
    'destinations.viewAll': 'View all destinations',
    'destinations.austria': 'Austria',
    'destinations.lithuania': 'Lithuania',
    
    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'Your trusted partner for international opportunities',
    'about.description': 'Adventure Without Borders is dedicated to connecting people with transformative international opportunities. Our mission is to facilitate cross-cultural experiences that enrich lives and broaden perspectives.',
    'about.mission': 'Our Mission',
    'about.mission.desc': 'Facilitate accessible and enriching international experiences',
    'about.vision': 'Our Vision',
    'about.vision.desc': 'A world where cultural exchanges are accessible to everyone',
    'about.values': 'Our Values',
    'about.values.desc': 'Authenticity, diversity, personal growth and positive impact',
    
    // Testimonials
    'testimonials.title': 'What Our Participants Say',
    'testimonials.subtitle': 'Discover the experiences of those who have participated in our programs',
    
    // Call to Action
    'cta.title': 'Ready to Start Your Adventure?',
    'cta.subtitle': 'Schedule an appointment with our advisors to discuss your options',
    'cta.button': 'Schedule Appointment',
    
    // Quick Appointment
    'quick.title': 'Need help?',
    'quick.subtitle': 'Schedule a quick 30-minute call',
    'quick.button': 'Book Now',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use'
  },
  de: {
    // Navigation
    'home': 'Startseite',
    'opportunities': 'Möglichkeiten',
    'destinations': 'Reiseziele',
    'appointment': 'Termin',
    'about': 'Über uns',
    'contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Entdecke die Welt, Verändere Deine Zukunft',
    'hero.subtitle': 'Erkunde internationale Möglichkeiten für Reisen, Studium, Freiwilligenarbeit und mehr',
    'hero.cta': 'Möglichkeiten entdecken',
    
    // Opportunity Types
    'opportunity.title': 'Entdecke Unsere Möglichkeiten',
    'opportunity.subtitle': 'Entdecke verschiedene Wege, um eine bereichernde internationale Erfahrung zu erleben',
    'opportunity.studies': 'Studium',
    'opportunity.studies.desc': 'Auslandsstudienprogramme zur Erweiterung deiner akademischen Horizonte',
    'opportunity.internship': 'Praktika',
    'opportunity.internship.desc': 'Sammle wertvolle internationale Berufserfahrung',
    'opportunity.volunteer': 'Freiwilligenarbeit',
    'opportunity.volunteer.desc': 'Trage zu bedeutsamen Projekten bei und entdecke neue Kulturen',
    'opportunity.work': 'Beschäftigung',
    'opportunity.work.desc': 'Internationale Karrieremöglichkeiten in verschiedenen Sektoren',
    'opportunity.travel': 'Reisen',
    'opportunity.travel.desc': 'Immersive und kulturell bereichernde Reiseerfahrungen',
    
    // Featured Destinations
    'destinations.title': 'Beliebte Reiseziele',
    'destinations.subtitle': 'Erkunde unsere gefragtesten Reiseziele',
    'destinations.viewAll': 'Alle Reiseziele anzeigen',
    'destinations.austria': 'Österreich',
    'destinations.lithuania': 'Litauen',
    
    // About Section
    'about.title': 'Über Uns',
    'about.subtitle': 'Dein vertrauenswürdiger Partner für internationale Möglichkeiten',
    'about.description': 'Abenteuer Ohne Grenzen widmet sich der Verbindung von Menschen mit transformativen internationalen Möglichkeiten. Unsere Mission ist es, interkulturelle Erfahrungen zu erleichtern, die Leben bereichern und Perspektiven erweitern.',
    'about.mission': 'Unsere Mission',
    'about.mission.desc': 'Zugängliche und bereichernde internationale Erfahrungen ermöglichen',
    'about.vision': 'Unsere Vision',
    'about.vision.desc': 'Eine Welt, in der kultureller Austausch für jeden zugänglich ist',
    'about.values': 'Unsere Werte',
    'about.values.desc': 'Authentizität, Vielfalt, persönliches Wachstum und positive Wirkung',
    
    // Testimonials
    'testimonials.title': 'Was Unsere Teilnehmer Sagen',
    'testimonials.subtitle': 'Entdecke die Erfahrungen derer, die an unseren Programmen teilgenommen haben',
    
    // Call to Action
    'cta.title': 'Bereit, Dein Abenteuer zu Beginnen?',
    'cta.subtitle': 'Vereinbare einen Termin mit unseren Beratern, um deine Optionen zu besprechen',
    'cta.button': 'Termin Vereinbaren',
    
    // Quick Appointment
    'quick.title': 'Brauchst du Hilfe?',
    'quick.subtitle': 'Plane einen schnellen 30-minütigen Anruf',
    'quick.button': 'Jetzt Buchen',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  // Fonction de traduction améliorée avec support pour les paramètres
  const t = (key: string, params?: Record<string, string>): string => {
    const translation = translations[language][key as keyof typeof translations.fr] || key;
    
    if (params) {
      return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
        return acc.replace(`{{${paramKey}}}`, paramValue);
      }, translation);
    }
    
    return translation;
  };

  // Sauvegarde de la langue dans le localStorage
  useEffect(() => {
    // Récupérer la langue depuis localStorage au chargement
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en" || savedLanguage === "de")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Mettre à jour localStorage quand la langue change
  useEffect(() => {
    localStorage.setItem("language", language);
    // Mettre à jour l'attribut lang du document HTML
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
