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
      learnMore: "En savoir plus",
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
        nom: "Marcelle K.",
        role: "Volontariat (FSJ/BFD)",
        texte: "Grâce à l'accompagnement de VivrEnAllemagne, j'ai trouvé une mission de volontariat qui me correspond parfaitement. Leur aide pour le visa et le contrat a été rapide et sans faille."
      },
      testimonial2: {
        nom: "Sarah J.",
        role: "Programme Au-Pair",
        texte: "Je craignais les démarches administratives, mais l'équipe m'a guidée pas à pas. Je vis aujourd'hui une expérience culturelle incroyable en toute sécurité."
      },
      testimonial3: {
        nom: "David L.",
        role: "Formation Professionnelle (Ausbildung)",
        texte: "VivrEnAllemagne m'a aidé à décrocher une formation en alternance en soins infirmiers. Un service premium pour tous ceux qui veulent construire un avenir solide en Allemagne."
      },
      testimonial4: {
        nom: "Elena M.",
        role: "Études Universitaires",
        texte: "De la vérification de mes diplômes à l'admission à l'université, tout a été géré avec un professionnalisme exemplaire. Je recommande vivement leurs services !"
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
      soustitre: "Erkunden Sie die verschiedenen Möglichkeiten, im Ausland zu leben und zu arbeiten",
      learnMore: "Mehr erfahren",
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
        nom: "Marcelle K.",
        role: "Freiwilligendienst (FSJ/BFD)",
        texte: "Dank der Begleitung von VivrEnAllemagne habe ich eine Freiwilligenmission gefunden, die perfekt zu mir passt. Ihre Hilfe bei Visum und Vertrag war schnell und einwandfrei."
      },
      testimonial2: {
        nom: "Sarah J.",
        role: "Au-Pair-Programm",
        texte: "Ich hatte Angst vor den administrativen Schritten, aber das Team führte mich Schritt für Schritt. Ich erlebe heute eine unglaubliche kulturelle Erfahrung in völliger Sicherheit."
      },
      testimonial3: {
        nom: "David L.",
        role: "Berufsausbildung (Ausbildung)",
        texte: "VivrEnAllemagne hat mir geholfen, eine duale Ausbildung in der Krankenpflege zu erhalten. Ein Premium-Service für alle, die eine solide Zukunft in Deutschland aufbauen wollen."
      },
      testimonial4: {
        nom: "Elena M.",
        role: "Hochschulstudium",
        texte: "Von der Überprüfung meiner Diplome bis zur Universitätszulassung wurde alles mit beispielhafter Professionalität verwaltet. Ich empfehle ihre Dienste wärmstens!"
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