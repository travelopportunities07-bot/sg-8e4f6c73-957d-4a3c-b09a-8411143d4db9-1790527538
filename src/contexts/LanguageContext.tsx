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
    'nav.support': 'Démarches & Accompagnement',
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
    
    'contact.hero.title': 'Contactez-nous',
    'contact.hero.subtitle': 'Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet de mobilité en Allemagne.',
    
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom complet',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'votre@email.com',
    'contact.form.subject': 'Sujet',
    'contact.form.subject.placeholder': 'Objet de votre demande',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Décrivez votre projet ou posez vos questions...',
    'contact.form.send': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success.title': 'Message envoyé !',
    'contact.form.success.message': 'Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.',
    'contact.form.success.button': 'Envoyer un autre message',
    
    'contact.info.title': 'Nos coordonnées',
    'contact.info.company': 'Entreprise',
    'contact.info.address': 'Adresse',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Horaires',
    'contact.info.hours.weekdays': 'Lun - Ven : 9h00 - 18h00',
    'contact.info.hours.weekend': 'Sam - Dim : Fermé',
    
    'contact.faq.title': 'Questions fréquentes',
    'contact.faq.q1.question': 'Combien coûtent vos services d\'accompagnement ?',
    'contact.faq.q1.answer': 'Nos tarifs varient selon le type de programme et le niveau d\'accompagnement souhaité. Contactez-nous pour un devis personnalisé gratuit.',
    'contact.faq.q2.question': 'Dois-je parler allemand pour partir ?',
    'contact.faq.q2.answer': 'Cela dépend du programme. Pour le volontariat (FSJ/BFD), un niveau A2-B1 est généralement requis. Pour les études et formations, B2-C1 est recommandé. Nous proposons des cours préparatoires.',
    'contact.faq.q3.question': 'Combien de temps avant mon départ dois-je vous contacter ?',
    'contact.faq.q3.answer': 'Idéalement 6 à 12 mois avant votre départ souhaité pour avoir le temps de préparer votre dossier, obtenir les documents nécessaires et trouver la meilleure opportunité.',
    'contact.faq.q4.question': 'Proposez-vous un accompagnement une fois sur place en Allemagne ?',
    'contact.faq.q4.answer': 'Oui ! Nous assurons un suivi pendant toute la durée de votre séjour : aide au logement, démarches administratives, intégration et soutien en cas de besoin.',
    
    'contact.meta.description': 'Contactez Aisso International Ltd pour toutes vos questions sur les opportunités de mobilité en Allemagne : volontariat, formation, études et tourisme.',
    
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
    'nav.support': 'Procedures & Support',
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
    
    'contact.hero.title': 'Contact Us',
    'contact.hero.subtitle': 'Our team is here to answer all your questions and support you in your mobility project in Germany.',
    
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Full name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Subject of your request',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Describe your project or ask your questions...',
    'contact.form.send': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success.title': 'Message sent!',
    'contact.form.success.message': 'We have received your message and will respond as soon as possible.',
    'contact.form.success.button': 'Send another message',
    
    'contact.info.title': 'Our contact details',
    'contact.info.company': 'Company',
    'contact.info.address': 'Address',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Hours',
    'contact.info.hours.weekdays': 'Mon - Fri: 9:00 AM - 6:00 PM',
    'contact.info.hours.weekend': 'Sat - Sun: Closed',
    
    'contact.faq.title': 'Frequently asked questions',
    'contact.faq.q1.question': 'How much do your support services cost?',
    'contact.faq.q1.answer': 'Our rates vary depending on the type of program and level of support desired. Contact us for a free personalized quote.',
    'contact.faq.q2.question': 'Do I need to speak German to go?',
    'contact.faq.q2.answer': 'It depends on the program. For volunteering (FSJ/BFD), an A2-B1 level is generally required. For studies and training, B2-C1 is recommended. We offer preparatory courses.',
    'contact.faq.q3.question': 'How far in advance should I contact you before my departure?',
    'contact.faq.q3.answer': 'Ideally 6 to 12 months before your desired departure to have time to prepare your file, obtain necessary documents and find the best opportunity.',
    'contact.faq.q4.question': 'Do you provide support once in Germany?',
    'contact.faq.q4.answer': 'Yes! We provide follow-up throughout your stay: help with accommodation, administrative procedures, integration and support when needed.',
    
    'contact.meta.description': 'Contact Aisso International Ltd for all your questions about mobility opportunities in Germany: volunteering, training, studies and tourism.',
    
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
    'nav.support': 'Verfahren & Unterstützung',
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
    
    'contact.hero.title': 'Kontaktieren Sie uns',
    'contact.hero.subtitle': 'Unser Team steht Ihnen zur Verfügung, um alle Ihre Fragen zu beantworten und Sie bei Ihrem Mobilitätsprojekt in Deutschland zu unterstützen.',
    
    'contact.form.title': 'Senden Sie uns eine Nachricht',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.name.placeholder': 'Ihr Name',
    'contact.form.email': 'E-Mail',
    'contact.form.email.placeholder': 'ihre@email.de',
    'contact.form.subject': 'Betreff',
    'contact.form.subject.placeholder': 'Betreff Ihrer Anfrage',
    'contact.form.message': 'Nachricht',
    'contact.form.message.placeholder': 'Beschreiben Sie Ihr Projekt oder stellen Sie Ihre Fragen...',
    'contact.form.send': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.form.success.title': 'Nachricht gesendet!',
    'contact.form.success.message': 'Wir haben Ihre Nachricht erhalten und werden Ihnen so schnell wie möglich antworten.',
    'contact.form.success.button': 'Weitere Nachricht senden',
    
    'contact.info.title': 'Unsere Kontaktdaten',
    'contact.info.company': 'Unternehmen',
    'contact.info.address': 'Adresse',
    'contact.info.email': 'E-Mail',
    'contact.info.hours': 'Öffnungszeiten',
    'contact.info.hours.weekdays': 'Mo - Fr: 9:00 - 18:00 Uhr',
    'contact.info.hours.weekend': 'Sa - So: Geschlossen',
    
    'contact.faq.title': 'Häufig gestellte Fragen',
    'contact.faq.q1.question': 'Wie viel kosten Ihre Begleitdienste?',
    'contact.faq.q1.answer': 'Unsere Preise variieren je nach Art des Programms und gewünschtem Begleitungsgrad. Kontaktieren Sie uns für ein kostenloses personalisiertes Angebot.',
    'contact.faq.q2.question': 'Muss ich Deutsch sprechen, um zu gehen?',
    'contact.faq.q2.answer': 'Das hängt vom Programm ab. Für Freiwilligendienst (FSJ/BFD) ist in der Regel ein A2-B1 Niveau erforderlich. Für Studium und Ausbildung wird B2-C1 empfohlen. Wir bieten Vorbereitungskurse an.',
    'contact.faq.q3.question': 'Wie lange vor meiner Abreise sollte ich Sie kontaktieren?',
    'contact.faq.q3.answer': 'Idealerweise 6 bis 12 Monate vor Ihrer gewünschten Abreise, um Zeit zu haben, Ihre Unterlagen vorzubereiten, notwendige Dokumente zu erhalten und die beste Gelegenheit zu finden.',
    'contact.faq.q4.question': 'Bieten Sie Unterstützung vor Ort in Deutschland an?',
    'contact.faq.q4.answer': 'Ja! Wir bieten während Ihres gesamten Aufenthalts Begleitung: Hilfe bei Unterkunft, Verwaltungsverfahren, Integration und Unterstützung bei Bedarf.',
    
    'contact.meta.description': 'Kontaktieren Sie Aisso International Ltd für alle Ihre Fragen zu Mobilitätsmöglichkeiten in Deutschland: Freiwilligendienst, Ausbildung, Studium und Tourismus.',
    
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