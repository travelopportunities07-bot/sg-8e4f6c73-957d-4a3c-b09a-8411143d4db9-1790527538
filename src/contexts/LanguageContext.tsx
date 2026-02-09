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
      accueil: "Accueil",
      destinations: "Destinations",
      opportunites: "Opportunités",
      apropos: "À Propos",
      contact: "Contact",
      rendezvous: "Rendez-vous",
      devenirPartenaire: "Devenir Partenaire",
      volontariat: "Volontariat",
      formations: "Formations",
      etudes: "Études",
      tourisme: "Tourisme",
      aupair: "Au Pair",
      accompagnement: "Accompagnement",
      blog: "Blog"
    },
    hero: {
      titre: "Vivez, Travaillez et Étudiez en Allemagne",
      soustitre: "Volontariat • Formation • Études • Tourisme en Allemagne – Votre projet international, notre expertise",
      cta: "Commencer Maintenant",
      boutonRendezVous: "Prendre rendez-vous"
    },
    opportunites: {
      badge: "Nos Services",
      titre: "Explorez Nos Opportunités",
      soustitre: "Découvrez différentes façons de réaliser votre projet international",
      volontariat: {
        titre: "Programmes de Volontariat",
        desc: "Participez à des projets significatifs et découvrez de nouvelles cultures"
      },
      formations: {
        titre: "Formations Professionnelles",
        desc: "Accédez aux meilleures formations et programmes de développement professionnel"
      },
      etudes: {
        titre: "Opportunités d'Études",
        desc: "Accédez aux meilleures universités et programmes académiques internationaux"
      },
      tourisme: {
        titre: "Tourisme et Découverte",
        desc: "Explorez de nouvelles destinations et vivez des expériences inoubliables"
      },
      aupair: {
        titre: "Programme Au Pair",
        desc: "Vivez en immersion dans une famille d'accueil et apprenez une nouvelle langue"
      }
    },
    about: {
      badge: "À Propos de Nous",
      titre: "Votre Partenaire de Confiance",
      soustitre: "Depuis plus de 10 ans, nous accompagnons des milliers de personnes dans la réalisation de leurs projets internationaux. Notre expertise et notre réseau mondial font de nous le partenaire idéal pour votre aventure.",
      experience: "Expertise Reconnue",
      experienceDesc: "Plus de 10 ans d'expérience dans l'accompagnement de projets internationaux, avec une connaissance approfondie des destinations et des opportunités.",
      support: "Accompagnement Personnalisé",
      supportDesc: "Un suivi individualisé à chaque étape de votre projet, de la préparation au départ jusqu'à votre installation dans votre nouveau pays.",
      network: "Réseau International",
      networkDesc: "Des partenaires de confiance dans plus de 15 pays pour vous garantir les meilleures opportunités et un accompagnement local.",
      stats: {
        clients: "Clients Accompagnés",
        destinations: "Destinations",
        satisfaction: "Taux de Satisfaction",
        experience: "Ans d'Expérience"
      }
    },
    testimonials: {
      titre: "Ce Que Disent Nos Clients",
      soustitre: "Découvrez les expériences de ceux qui ont réalisé leur rêve avec nous",
      testimonial1: {
        nom: "Aïssatou Diallo",
        role: "Volontariat en Allemagne",
        texte: "Grâce à VivrEnAllemagne, j'ai pu réaliser mon rêve de volontariat en Allemagne. L'accompagnement a été exceptionnel du début à la fin!"
      },
      testimonial2: {
        nom: "Kevin N'Guessan",
        role: "Au Pair aux États-Unis",
        texte: "Mon expérience Au Pair aux États-Unis a été incroyable. L'équipe m'a aidé à trouver la famille parfaite et à préparer tous les documents."
      },
      testimonial3: {
        nom: "Mariam Traoré",
        role: "Formation en Autriche",
        texte: "J'ai obtenu une place en formation professionnelle en Autriche grâce à leur accompagnement. Le processus était simple et bien organisé."
      },
      testimonial4: {
        nom: "Samuel Kouamé",
        role: "Études en Irlande",
        texte: "Partir étudier en Irlande était un grand pas. Grâce à leur soutien, j'ai pu surmonter tous les obstacles et commencer une nouvelle vie."
      }
    },
    cta: {
      badge: "Prêt à Partir ?",
      titre: "Prêt à Commencer Votre Aventure ?",
      soustitre: "Réservez une consultation gratuite et découvrez comment nous pouvons vous aider à réaliser vos rêves",
      bouton: "Réserver un Rendez-vous",
      contact: "Nous Contacter",
      badges: {
        verified: "Vérifié et Certifié",
        secure: "100% Sécurisé",
        clients: "500+ Clients Satisfaits",
        excellence: "Excellence Garantie"
      }
    },
    commun: {
      enSavoirPlus: "En savoir plus"
    }
  },
  de: {
    nav: {
      accueil: "Startseite",
      destinations: "Reiseziele",
      opportunites: "Möglichkeiten",
      apropos: "Über Uns",
      contact: "Kontakt",
      rendezvous: "Termin",
      devenirPartenaire: "Partner Werden",
      volontariat: "Freiwilligenarbeit",
      formations: "Ausbildung",
      etudes: "Studium",
      tourisme: "Tourismus",
      aupair: "Au Pair",
      accompagnement: "Begleitung",
      blog: "Blog"
    },
    hero: {
      titre: "Leben, Arbeiten und Studieren in Deutschland",
      soustitre: "Freiwilligenarbeit • Ausbildung • Studium • Tourismus in Deutschland – Ihr internationales Projekt, unsere Expertise",
      cta: "Jetzt Starten",
      boutonRendezVous: "Termin vereinbaren"
    },
    opportunites: {
      badge: "Unsere Dienstleistungen",
      titre: "Entdecken Sie Unsere Möglichkeiten",
      soustitre: "Entdecken Sie verschiedene Wege, Ihr internationales Projekt zu verwirklichen",
      volontariat: {
        titre: "Freiwilligenprogramme",
        desc: "Nehmen Sie an bedeutungsvollen Projekten teil und entdecken Sie neue Kulturen"
      },
      formations: {
        titre: "Berufsausbildung",
        desc: "Zugang zu den besten Ausbildungen und beruflichen Entwicklungsprogrammen"
      },
      etudes: {
        titre: "Studienmöglichkeiten",
        desc: "Zugang zu den besten internationalen Universitäten und akademischen Programmen"
      },
      tourisme: {
        titre: "Tourismus und Entdeckung",
        desc: "Erkunden Sie neue Ziele und erleben Sie unvergessliche Erfahrungen"
      },
      aupair: {
        titre: "Au Pair Programm",
        desc: "Leben Sie bei einer Gastfamilie und lernen Sie eine neue Sprache"
      }
    },
    about: {
      badge: "Warum Uns Wählen",
      titre: "Ihr Vertrauenspartner",
      soustitre: "Wir begleiten Sie bei jedem Schritt Ihres internationalen Projekts",
      experience: {
        titre: "Bewährte Expertise",
        description: "Über 10 Jahre Erfahrung in der Begleitung internationaler Projekte"
      },
      support: {
        titre: "Persönliche Unterstützung",
        description: "Maßgeschneiderte Begleitung, angepasst an Ihre Bedürfnisse und Ziele"
      },
      network: {
        titre: "Internationales Netzwerk",
        description: "Zuverlässige Partner in mehr als 15 Ländern weltweit"
      }
    },
    testimonials: {
      titre: "Was Unsere Kunden Sagen",
      soustitre: "Entdecken Sie die Erfahrungen derer, die mit uns ihren Traum verwirklicht haben",
      testimonial1: {
        nom: "Aïssatou Diallo",
        role: "Freiwilligendienst in Deutschland",
        texte: "Dank VivrEnAllemagne konnte ich meinen Traum von Freiwilligenarbeit in Deutschland verwirklichen. Die Begleitung war von Anfang bis Ende außergewöhnlich!"
      },
      testimonial2: {
        nom: "Kevin N'Guessan",
        role: "Au Pair in den USA",
        texte: "Meine Au-Pair-Erfahrung in den USA war unglaublich. Das Team half mir, die perfekte Familie zu finden und alle Dokumente vorzubereiten."
      },
      testimonial3: {
        nom: "Mariam Traoré",
        role: "Ausbildung in Österreich",
        texte: "Ich bekam einen Platz in einer Berufsausbildung in Österreich dank ihrer Begleitung. Der Prozess war einfach und gut organisiert."
      },
      testimonial4: {
        nom: "Samuel Kouamé",
        role: "Studium in Irland",
        texte: "Nach Irland zu gehen, um zu studieren, war ein großer Schritt. Dank ihrer Unterstützung konnte ich alle Hindernisse überwinden und ein neues Leben beginnen."
      }
    },
    cta: {
      badge: "Jetzt Beginnen",
      titre: "Bereit, Ihr Abenteuer zu Beginnen?",
      soustitre: "Buchen Sie eine kostenlose Beratung und erfahren Sie, wie wir Ihnen helfen können, Ihre Träume zu verwirklichen",
      bouton: "Termin Buchen",
      contact: "Kontaktieren Sie Uns",
      badges: {
        verified: "Verifiziert und Zertifiziert",
        secure: "100% Sicher",
        clients: "500+ Zufriedene Kunden",
        excellence: "Exzellenz Garantiert"
      }
    },
    commun: {
      enSavoirPlus: "Mehr erfahren"
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
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}