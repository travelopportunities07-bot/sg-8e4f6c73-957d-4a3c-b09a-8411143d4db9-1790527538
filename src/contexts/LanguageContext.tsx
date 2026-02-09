import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      destinations: "Destinations",
      opportunities: "Opportunités",
      about: "À Propos",
      contact: "Contact",
      appointment: "Rendez-vous",
      partner: "Devenir Partenaire"
    },
    hero: {
      title: "Votre Voyage Commence Ici",
      subtitle: "Découvrez des opportunités uniques de volontariat, d'études et de travail à travers le monde",
      cta: "Prendre rendez-vous",
      learnMore: "En savoir plus"
    },
    destinations: {
      title: "Destinations Populaires",
      subtitle: "Explorez nos destinations les plus prisées et trouvez celle qui correspond à vos aspirations",
      viewAll: "Voir toutes les destinations",
      germany: "Allemagne",
      germanyDesc: "Leader européen en formation professionnelle et opportunités académiques",
      usa: "États-Unis",
      usaDesc: "Terre d'opportunités pour l'éducation et le développement professionnel",
      australia: "Australie",
      australiaDesc: "Qualité de vie exceptionnelle et programmes de travail-vacances",
      ireland: "Irlande",
      irelandDesc: "Hub technologique européen avec une culture accueillante"
    },
    opportunities: {
      title: "Nos Services",
      subtitle: "Découvrez les différentes façons de réaliser votre projet international",
      volunteer: "Volontariat",
      volunteerDesc: "Engagez-vous dans des projets significatifs tout en découvrant une nouvelle culture",
      study: "Études",
      studyDesc: "Accédez aux meilleures institutions académiques internationales",
      work: "Travail",
      workDesc: "Développez votre carrière avec des opportunités professionnelles à l'étranger",
      training: "Formation",
      trainingDesc: "Perfectionnez vos compétences avec des programmes de formation reconnus"
    },
    about: {
      badge: "Pourquoi Nous Choisir",
      title: "Référence Allemagne",
      subtitle: "Expert en mobilité internationale depuis 2010",
      feature1Title: "Conseils Fiables",
      feature1Desc: "Accompagnement personnalisé par des experts certifiés",
      feature2Title: "Suivi Pro",
      feature2Desc: "De la candidature jusqu'à votre installation",
      feature3Title: "Support dédié",
      feature3Desc: "Assistance 24/7 pour votre tranquillité d'esprit"
    },
    testimonials: {
      title: "Témoignages",
      subtitle: "Découvrez les expériences de ceux qui nous ont fait confiance",
      testimonial1Name: "Aïssatou Diallo",
      testimonial1Title: "Volontariat réussi",
      testimonial1Text: "Une expérience humaine enrichissante et un accompagnement sérieux du début à la fin.",
      testimonial2Name: "Kevin N'Guessan",
      testimonial2Title: "Aventure AuPair",
      testimonial2Text: "J'ai appris l'allemand, découvert une nouvelle culture et gagné en confiance.",
      testimonial3Name: "Mariam Traoré",
      testimonial3Title: "Formation concrète",
      testimonial3Text: "Une formation pratique, bien encadrée et très utile pour mon avenir.",
      testimonial4Name: "Samuel Kouamé",
      testimonial4Title: "Nouvel avenir",
      testimonial4Text: "Un vrai tremplin pour étudier, se former et construire son projet en Allemagne."
    },
    cta: {
      title: "Planifiez votre aventure internationale",
      subtitle: "Prenez rendez-vous avec nos conseillers pour discuter de votre projet",
      button: "Commencer votre procédure"
    },
    common: {
      learnMore: "En savoir plus",
      readMore: "Lire la suite",
      contactUs: "Nous contacter",
      getStarted: "Commencer",
      bookNow: "Réserver maintenant"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      destinations: "Reiseziele",
      opportunities: "Möglichkeiten",
      about: "Über uns",
      contact: "Kontakt",
      appointment: "Termin",
      partner: "Partner werden"
    },
    hero: {
      title: "Ihre Reise Beginnt Hier",
      subtitle: "Entdecken Sie einzigartige Möglichkeiten für Freiwilligenarbeit, Studium und Arbeit weltweit",
      cta: "Termin vereinbaren",
      learnMore: "Mehr erfahren"
    },
    destinations: {
      title: "Beliebte Reiseziele",
      subtitle: "Erkunden Sie unsere beliebtesten Ziele und finden Sie das, was zu Ihren Zielen passt",
      viewAll: "Alle Reiseziele anzeigen",
      germany: "Deutschland",
      germanyDesc: "Europäischer Marktführer in beruflicher Bildung und akademischen Möglichkeiten",
      usa: "Vereinigte Staaten",
      usaDesc: "Land der Möglichkeiten für Bildung und berufliche Entwicklung",
      australia: "Australien",
      australiaDesc: "Außergewöhnliche Lebensqualität und Work-Holiday-Programme",
      ireland: "Irland",
      irelandDesc: "Europäischer Tech-Hub mit einladender Kultur"
    },
    opportunities: {
      title: "Unsere Dienstleistungen",
      subtitle: "Entdecken Sie verschiedene Wege, Ihr internationales Projekt zu verwirklichen",
      volunteer: "Freiwilligenarbeit",
      volunteerDesc: "Engagieren Sie sich in bedeutungsvollen Projekten und entdecken Sie eine neue Kultur",
      study: "Studium",
      studyDesc: "Zugang zu den besten internationalen akademischen Institutionen",
      work: "Arbeit",
      workDesc: "Entwickeln Sie Ihre Karriere mit beruflichen Möglichkeiten im Ausland",
      training: "Ausbildung",
      trainingDesc: "Verbessern Sie Ihre Fähigkeiten mit anerkannten Schulungsprogrammen"
    },
    about: {
      badge: "Warum Uns Wählen",
      title: "Deutschland Referenz",
      subtitle: "Experte für internationale Mobilität seit 2010",
      feature1Title: "Zuverlässige Beratung",
      feature1Desc: "Persönliche Begleitung durch zertifizierte Experten",
      feature2Title: "Professionelle Betreuung",
      feature2Desc: "Von der Bewerbung bis zu Ihrer Niederlassung",
      feature3Title: "Dedizierter Support",
      feature3Desc: "24/7-Unterstützung für Ihre Sicherheit"
    },
    testimonials: {
      title: "Erfahrungsberichte",
      subtitle: "Entdecken Sie die Erfahrungen derer, die uns vertraut haben",
      testimonial1Name: "Aïssatou Diallo",
      testimonial1Title: "Erfolgreiche Freiwilligenarbeit",
      testimonial1Text: "Eine bereichernde menschliche Erfahrung und ernsthafte Begleitung von Anfang bis Ende.",
      testimonial2Name: "Kevin N'Guessan",
      testimonial2Title: "AuPair-Abenteuer",
      testimonial2Text: "Ich habe Deutsch gelernt, eine neue Kultur entdeckt und Selbstvertrauen gewonnen.",
      testimonial3Name: "Mariam Traoré",
      testimonial3Title: "Konkrete Ausbildung",
      testimonial3Text: "Eine praktische, gut betreute und sehr nützliche Ausbildung für meine Zukunft.",
      testimonial4Name: "Samuel Kouamé",
      testimonial4Title: "Neue Zukunft",
      testimonial4Text: "Ein echtes Sprungbrett zum Studieren, Lernen und Aufbauen meines Projekts in Deutschland."
    },
    cta: {
      title: "Planen Sie Ihr internationales Abenteuer",
      subtitle: "Vereinbaren Sie einen Termin mit unseren Beratern, um Ihr Projekt zu besprechen",
      button: "Starten Sie Ihr Verfahren"
    },
    common: {
      learnMore: "Mehr erfahren",
      readMore: "Weiterlesen",
      contactUs: "Kontaktieren Sie uns",
      getStarted: "Loslegen",
      bookNow: "Jetzt buchen"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

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