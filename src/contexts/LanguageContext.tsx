import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Language = 'fr' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const translations = {
  fr: {
    'nav.accueil': 'Accueil',
    'nav.volontariat': 'Volontariat',
    'nav.formations': 'Formations',
    'nav.etudes': 'Études',
    'nav.tourisme': 'Tourisme',
    'nav.accompagnement': 'Démarches & Accompagnement',
    'nav.blog': 'Blog & Guides',
    'nav.contact': 'Contact',
    
    'hero.badge': 'Votre partenaire mobilité en Allemagne',
    'hero.titre': 'Votre Avenir en Allemagne Commence Ici',
    'hero.soustitre': 'Découvrez des opportunités de volontariat, formation professionnelle, études et tourisme en Allemagne. Un accompagnement complet pour concrétiser votre projet.',
    'hero.bouton.principal': 'Demander un accompagnement',
    'hero.bouton.secondaire': 'Découvrir les opportunités',
    'hero.stats.volontariat': 'Volontariat',
    'hero.stats.formations': 'Formations',
    'hero.stats.etudes': 'Études',
    'hero.stats.tourisme': 'Tourisme',
    
    'opportunites.titre': 'Explorez Vos Opportunités en Allemagne',
    'opportunites.soustitre': 'Des parcours adaptés à chaque profil et projet',
    
    'opportunites.volontariat.titre': 'Volontariat (FSJ, BFD, FWD)',
    'opportunites.volontariat.desc': 'Engagez-vous dans une mission de volontariat en Allemagne : social, écologique ou culturel. Une expérience enrichissante avec logement et indemnités.',
    
    'opportunites.formations.titre': 'Formations Professionnelles',
    'opportunites.formations.desc': 'Intégrez une formation professionnelle en Allemagne : soins infirmiers, artisanat, hôtellerie et bien plus. Diplôme reconnu et rémunération.',
    
    'opportunites.etudes.titre': 'Études Supérieures',
    'opportunites.etudes.desc': 'Étudiez dans une université allemande de renom. Frais réduits, qualité académique reconnue internationalement et vie étudiante dynamique.',
    
    'opportunites.tourisme.titre': 'Tourisme & Culture',
    'opportunites.tourisme.desc': 'Découvrez l\'Allemagne : châteaux, musées, festivals et nature. Des circuits organisés et des conseils pour voyager en toute sérénité.',
    
    'pourquoi.titre': 'Pourquoi Choisir l\'Allemagne ?',
    'pourquoi.soustitre': 'Un pays d\'opportunités au cœur de l\'Europe',
    
    'pourquoi.economie.titre': 'Économie Dynamique',
    'pourquoi.economie.desc': 'Première économie européenne avec d\'excellentes opportunités d\'emploi et de formation',
    
    'pourquoi.education.titre': 'Éducation de Qualité',
    'pourquoi.education.desc': 'Universités de renommée mondiale et système de formation professionnelle exemplaire',
    
    'pourquoi.culture.titre': 'Richesse Culturelle',
    'pourquoi.culture.desc': 'Histoire fascinante, patrimoine exceptionnel et scène culturelle vibrante',
    
    'pourquoi.qualite.titre': 'Qualité de Vie',
    'pourquoi.qualite.desc': 'Infrastructures modernes, sécurité, système de santé performant et environnement préservé',
    
    'etapes.titre': 'Comment Ça Marche ?',
    'etapes.soustitre': 'Un parcours simple et accompagné',
    
    'etapes.1.titre': '1. Consultation Gratuite',
    'etapes.1.desc': 'Échangez avec nos conseillers pour définir votre projet et vérifier votre éligibilité',
    
    'etapes.2.titre': '2. Préparation du Dossier',
    'etapes.2.desc': 'Nous vous aidons à constituer votre dossier et à préparer votre départ',
    
    'etapes.3.titre': '3. Accompagnement sur Place',
    'etapes.3.desc': 'Support continu pendant votre séjour : logement, démarches, intégration',
    
    'appel.titre': 'Prêt à Démarrer Votre Projet ?',
    'appel.soustitre': 'Contactez-nous pour un entretien personnalisé et gratuit',
    'appel.bouton': 'Demander une consultation',
    
    'temoignages.titre': 'Ils Ont Réussi Leur Projet',
    'temoignages.soustitre': 'Découvrez les témoignages de nos participants',
    
    'temoignages.1.nom': 'Marie Dupont',
    'temoignages.1.programme': 'Volontariat FSJ - Services sociaux',
    'temoignages.1.texte': 'Une expérience incroyable ! L\'accompagnement d\'AllemagneMobilité m\'a permis de réaliser mon rêve de découvrir l\'Allemagne tout en m\'engageant dans une cause qui me tient à cœur.',
    
    'temoignages.2.nom': 'Thomas Martin',
    'temoignages.2.programme': 'Formation en soins infirmiers',
    'temoignages.2.texte': 'Grâce à leur aide, j\'ai pu intégrer une excellente formation en Allemagne. Le suivi est professionnel et rassurant du début à la fin.',
    
    'temoignages.3.nom': 'Sophie Bernard',
    'temoignages.3.programme': 'Études universitaires à Berlin',
    'temoignages.3.texte': 'L\'équipe m\'a guidée dans toutes les démarches. Aujourd\'hui, je vis mon rêve d\'étudier dans une université allemande prestigieuse.',
    
    'contact.hero.titre': 'Contactez-nous',
    'contact.hero.soustitre': 'Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet de mobilité en Allemagne.',
    
    'contact.formulaire.titre': 'Envoyez-nous un message',
    'contact.formulaire.nom': 'Nom complet',
    'contact.formulaire.nom.placeholder': 'Votre nom',
    'contact.formulaire.email': 'Email',
    'contact.formulaire.email.placeholder': 'votre@email.com',
    'contact.formulaire.sujet': 'Sujet',
    'contact.formulaire.sujet.placeholder': 'Objet de votre demande',
    'contact.formulaire.message': 'Message',
    'contact.formulaire.message.placeholder': 'Décrivez votre projet ou posez vos questions...',
    'contact.formulaire.envoyer': 'Envoyer le message',
    'contact.formulaire.envoi': 'Envoi en cours...',
    'contact.formulaire.succes.titre': 'Message envoyé !',
    'contact.formulaire.succes.message': 'Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.',
    'contact.formulaire.succes.bouton': 'Envoyer un autre message',
    
    'contact.info.titre': 'Nos coordonnées',
    'contact.info.entreprise': 'Entreprise',
    'contact.info.adresse': 'Adresse',
    'contact.info.email': 'Email',
    'contact.info.horaires': 'Horaires',
    'contact.info.horaires.semaine': 'Lun - Ven : 9h00 - 18h00',
    'contact.info.horaires.weekend': 'Sam - Dim : Fermé',
    
    'contact.faq.titre': 'Questions fréquentes',
    'contact.faq.q1.question': 'Combien coûtent vos services d\'accompagnement ?',
    'contact.faq.q1.reponse': 'Nos tarifs varient selon le type de programme et le niveau d\'accompagnement souhaité. Contactez-nous pour un devis personnalisé gratuit.',
    'contact.faq.q2.question': 'Dois-je parler allemand pour partir ?',
    'contact.faq.q2.reponse': 'Cela dépend du programme. Pour le volontariat (FSJ/BFD), un niveau A2-B1 est généralement requis. Pour les études et formations, B2-C1 est recommandé. Nous proposons des cours préparatoires.',
    'contact.faq.q3.question': 'Combien de temps avant mon départ dois-je vous contacter ?',
    'contact.faq.q3.reponse': 'Idéalement 6 à 12 mois avant votre départ souhaité pour avoir le temps de préparer votre dossier, obtenir les documents nécessaires et trouver la meilleure opportunité.',
    'contact.faq.q4.question': 'Proposez-vous un accompagnement une fois sur place en Allemagne ?',
    'contact.faq.q4.reponse': 'Oui ! Nous assurons un suivi pendant toute la durée de votre séjour : aide au logement, démarches administratives, intégration et soutien en cas de besoin.',
    
    'contact.meta.description': 'Contactez Aisso International Ltd pour toutes vos questions sur les opportunités de mobilité en Allemagne : volontariat, formation, études et tourisme.',
    
    'footer.apropos': 'À propos',
    'footer.apropos.texte': 'Votre partenaire de confiance pour réaliser vos projets en Allemagne : volontariat, formation, études et tourisme.',
    'footer.liens': 'Liens Rapides',
    'footer.ressources': 'Ressources',
    'footer.contact': 'Contact',
    'footer.droits': 'Tous droits réservés',
    'footer.confidentialite': 'Politique de confidentialité',
    'footer.conditions': 'Conditions d\'utilisation',
    
    'commun.enSavoirPlus': 'En savoir plus',
    'commun.postuler': 'Postuler',
    'commun.nousContacter': 'Nous contacter',
    'commun.lireLaSuite': 'Lire la suite',
    
    'accueil': 'Accueil',
    'apropos': 'À Propos',
    'contact': 'Contact',
    'rendezvous': 'Rendez-vous'
  },
  en: {
    'nav.accueil': 'Home',
    'nav.volontariat': 'Volunteering',
    'nav.formations': 'Training',
    'nav.etudes': 'Studies',
    'nav.tourisme': 'Tourism',
    'nav.accompagnement': 'Procedures & Support',
    'nav.blog': 'Blog & Guides',
    'nav.contact': 'Contact',
    
    'hero.badge': 'Your mobility partner in Germany',
    'hero.titre': 'Your Future in Germany Starts Here',
    'hero.soustitre': 'Discover volunteering, professional training, study and tourism opportunities in Germany. Complete support to make your project a reality.',
    'hero.bouton.principal': 'Request support',
    'hero.bouton.secondaire': 'Explore opportunities',
    'hero.stats.volontariat': 'Volunteering',
    'hero.stats.formations': 'Training',
    'hero.stats.etudes': 'Studies',
    'hero.stats.tourisme': 'Tourism',
    
    'opportunites.titre': 'Explore Your Opportunities in Germany',
    'opportunites.soustitre': 'Pathways tailored to every profile and project',
    
    'opportunites.volontariat.titre': 'Volunteering (FSJ, BFD, FWD)',
    'opportunites.volontariat.desc': 'Engage in a volunteer mission in Germany: social, ecological or cultural. An enriching experience with accommodation and allowances.',
    
    'opportunites.formations.titre': 'Professional Training',
    'opportunites.formations.desc': 'Join professional training in Germany: nursing, crafts, hospitality and more. Recognized diploma and remuneration.',
    
    'opportunites.etudes.titre': 'Higher Education',
    'opportunites.etudes.desc': 'Study at a renowned German university. Reduced fees, internationally recognized academic quality and dynamic student life.',
    
    'opportunites.tourisme.titre': 'Tourism & Culture',
    'opportunites.tourisme.desc': 'Discover Germany: castles, museums, festivals and nature. Organized tours and advice for peaceful travel.',
    
    'pourquoi.titre': 'Why Choose Germany?',
    'pourquoi.soustitre': 'A land of opportunities in the heart of Europe',
    
    'pourquoi.economie.titre': 'Dynamic Economy',
    'pourquoi.economie.desc': 'Europe\'s leading economy with excellent employment and training opportunities',
    
    'pourquoi.education.titre': 'Quality Education',
    'pourquoi.education.desc': 'World-renowned universities and exemplary vocational training system',
    
    'pourquoi.culture.titre': 'Cultural Richness',
    'pourquoi.culture.desc': 'Fascinating history, exceptional heritage and vibrant cultural scene',
    
    'pourquoi.qualite.titre': 'Quality of Life',
    'pourquoi.qualite.desc': 'Modern infrastructure, safety, efficient healthcare system and preserved environment',
    
    'etapes.titre': 'How Does It Work?',
    'etapes.soustitre': 'A simple and supported journey',
    
    'etapes.1.titre': '1. Free Consultation',
    'etapes.1.desc': 'Talk with our advisors to define your project and check your eligibility',
    
    'etapes.2.titre': '2. File Preparation',
    'etapes.2.desc': 'We help you build your file and prepare your departure',
    
    'etapes.3.titre': '3. On-Site Support',
    'etapes.3.desc': 'Ongoing support during your stay: accommodation, procedures, integration',
    
    'appel.titre': 'Ready to Start Your Project?',
    'appel.soustitre': 'Contact us for a free personalized interview',
    'appel.bouton': 'Request a consultation',
    
    'temoignages.titre': 'They Succeeded in Their Project',
    'temoignages.soustitre': 'Discover testimonials from our participants',
    
    'temoignages.1.nom': 'Marie Dupont',
    'temoignages.1.programme': 'FSJ Volunteering - Social Services',
    'temoignages.1.texte': 'An incredible experience! The support from AllemagneMobilité allowed me to realize my dream of discovering Germany while engaging in a cause close to my heart.',
    
    'temoignages.2.nom': 'Thomas Martin',
    'temoignages.2.programme': 'Nursing Training',
    'temoignages.2.texte': 'Thanks to their help, I was able to join an excellent training program in Germany. The follow-up is professional and reassuring from start to finish.',
    
    'temoignages.3.nom': 'Sophie Bernard',
    'temoignages.3.programme': 'University Studies in Berlin',
    'temoignages.3.texte': 'The team guided me through all the procedures. Today, I am living my dream of studying at a prestigious German university.',
    
    'contact.hero.titre': 'Contact Us',
    'contact.hero.soustitre': 'Our team is here to answer all your questions and support you in your mobility project in Germany.',
    
    'contact.formulaire.titre': 'Send us a message',
    'contact.formulaire.nom': 'Full name',
    'contact.formulaire.nom.placeholder': 'Your name',
    'contact.formulaire.email': 'Email',
    'contact.formulaire.email.placeholder': 'your@email.com',
    'contact.formulaire.sujet': 'Subject',
    'contact.formulaire.sujet.placeholder': 'Subject of your request',
    'contact.formulaire.message': 'Message',
    'contact.formulaire.message.placeholder': 'Describe your project or ask your questions...',
    'contact.formulaire.envoyer': 'Send message',
    'contact.formulaire.envoi': 'Sending...',
    'contact.formulaire.succes.titre': 'Message sent!',
    'contact.formulaire.succes.message': 'We have received your message and will respond as soon as possible.',
    'contact.formulaire.succes.bouton': 'Send another message',
    
    'contact.info.titre': 'Our contact details',
    'contact.info.entreprise': 'Company',
    'contact.info.adresse': 'Address',
    'contact.info.email': 'Email',
    'contact.info.horaires': 'Hours',
    'contact.info.horaires.semaine': 'Mon - Fri: 9:00 AM - 6:00 PM',
    'contact.info.horaires.weekend': 'Sat - Sun: Closed',
    
    'contact.faq.titre': 'Frequently asked questions',
    'contact.faq.q1.question': 'How much do your support services cost?',
    'contact.faq.q1.reponse': 'Our rates vary depending on the type of program and level of support desired. Contact us for a free personalized quote.',
    'contact.faq.q2.question': 'Do I need to speak German to go?',
    'contact.faq.q2.reponse': 'It depends on the program. For volunteering (FSJ/BFD), an A2-B1 level is generally required. For studies and training, B2-C1 is recommended. We offer preparatory courses.',
    'contact.faq.q3.question': 'How far in advance should I contact you before my departure?',
    'contact.faq.q3.reponse': 'Ideally 6 to 12 months before your desired departure to have time to prepare your file, obtain necessary documents and find the best opportunity.',
    'contact.faq.q4.question': 'Do you provide support once in Germany?',
    'contact.faq.q4.reponse': 'Yes! We provide follow-up throughout your stay: help with accommodation, administrative procedures, integration and support when needed.',
    
    'contact.meta.description': 'Contact Aisso International Ltd for all your questions about mobility opportunities in Germany: volunteering, training, studies and tourism.',
    
    'footer.apropos': 'About',
    'footer.apropos.texte': 'Your trusted partner to realize your projects in Germany: volunteering, training, studies and tourism.',
    'footer.liens': 'Quick Links',
    'footer.ressources': 'Resources',
    'footer.contact': 'Contact',
    'footer.droits': 'All rights reserved',
    'footer.confidentialite': 'Privacy Policy',
    'footer.conditions': 'Terms of Use',
    
    'commun.enSavoirPlus': 'Learn more',
    'commun.postuler': 'Apply',
    'commun.nousContacter': 'Contact us',
    'commun.lireLaSuite': 'Read more',
    
    'accueil': 'Home',
    'apropos': 'About',
    'contact': 'Contact',
    'rendezvous': 'Appointment'
  },
  de: {
    'nav.accueil': 'Startseite',
    'nav.volontariat': 'Freiwilligendienst',
    'nav.formations': 'Ausbildung',
    'nav.etudes': 'Studium',
    'nav.tourisme': 'Tourismus',
    'nav.accompagnement': 'Verfahren & Unterstützung',
    'nav.blog': 'Blog & Ratgeber',
    'nav.contact': 'Kontakt',
    
    'hero.badge': 'Ihr Mobilitätspartner in Deutschland',
    'hero.titre': 'Ihre Zukunft in Deutschland Beginnt Hier',
    'hero.soustitre': 'Entdecken Sie Möglichkeiten für Freiwilligendienst, Berufsausbildung, Studium und Tourismus in Deutschland. Umfassende Begleitung zur Verwirklichung Ihres Projekts.',
    'hero.bouton.principal': 'Begleitung anfragen',
    'hero.bouton.secondaire': 'Möglichkeiten entdecken',
    'hero.stats.volontariat': 'Freiwilligendienst',
    'hero.stats.formations': 'Ausbildung',
    'hero.stats.etudes': 'Studium',
    'hero.stats.tourisme': 'Tourismus',
    
    'opportunites.titre': 'Erkunden Sie Ihre Möglichkeiten in Deutschland',
    'opportunites.soustitre': 'Wege für jedes Profil und Projekt',
    
    'opportunites.volontariat.titre': 'Freiwilligendienst (FSJ, BFD, FWD)',
    'opportunites.volontariat.desc': 'Engagieren Sie sich in einem Freiwilligendienst in Deutschland: sozial, ökologisch oder kulturell. Eine bereichernde Erfahrung mit Unterkunft und Vergütung.',
    
    'opportunites.formations.titre': 'Berufsausbildung',
    'opportunites.formations.desc': 'Beginnen Sie eine Berufsausbildung in Deutschland: Krankenpflege, Handwerk, Gastgewerbe und mehr. Anerkanntes Diplom und Vergütung.',
    
    'opportunites.etudes.titre': 'Hochschulstudium',
    'opportunites.etudes.desc': 'Studieren Sie an einer renommierten deutschen Universität. Reduzierte Gebühren, international anerkannte akademische Qualität und dynamisches Studentenleben.',
    
    'opportunites.tourisme.titre': 'Tourismus & Kultur',
    'opportunites.tourisme.desc': 'Entdecken Sie Deutschland: Schlösser, Museen, Festivals und Natur. Organisierte Touren und Tipps für sorgenfreies Reisen.',
    
    'pourquoi.titre': 'Warum Deutschland Wählen?',
    'pourquoi.soustitre': 'Ein Land voller Möglichkeiten im Herzen Europas',
    
    'pourquoi.economie.titre': 'Dynamische Wirtschaft',
    'pourquoi.economie.desc': 'Führende Wirtschaft Europas mit hervorragenden Beschäftigungs- und Ausbildungsmöglichkeiten',
    
    'pourquoi.education.titre': 'Qualitätsbildung',
    'pourquoi.education.desc': 'Weltbekannte Universitäten und vorbildliches Berufsbildungssystem',
    
    'pourquoi.culture.titre': 'Kultureller Reichtum',
    'pourquoi.culture.desc': 'Faszinierende Geschichte, außergewöhnliches Erbe und lebendige Kulturszene',
    
    'pourquoi.qualite.titre': 'Lebensqualität',
    'pourquoi.qualite.desc': 'Moderne Infrastruktur, Sicherheit, effizientes Gesundheitssystem und geschützte Umwelt',
    
    'etapes.titre': 'Wie Funktioniert Es?',
    'etapes.soustitre': 'Ein einfacher und begleiteter Weg',
    
    'etapes.1.titre': '1. Kostenlose Beratung',
    'etapes.1.desc': 'Sprechen Sie mit unseren Beratern, um Ihr Projekt zu definieren und Ihre Eignung zu überprüfen',
    
    'etapes.2.titre': '2. Vorbereitung der Unterlagen',
    'etapes.2.desc': 'Wir helfen Ihnen bei der Erstellung Ihrer Unterlagen und bei der Vorbereitung Ihrer Abreise',
    
    'etapes.3.titre': '3. Begleitung vor Ort',
    'etapes.3.desc': 'Kontinuierliche Unterstützung während Ihres Aufenthalts: Unterkunft, Formalitäten, Integration',
    
    'appel.titre': 'Bereit, Ihr Projekt zu Starten?',
    'appel.soustitre': 'Kontaktieren Sie uns für ein kostenloses persönliches Gespräch',
    'appel.bouton': 'Beratung anfragen',
    
    'temoignages.titre': 'Sie Haben Ihr Projekt Erfolgreich Umgesetzt',
    'temoignages.soustitre': 'Entdecken Sie die Erfahrungsberichte unserer Teilnehmer',
    
    'temoignages.1.nom': 'Marie Dupont',
    'temoignages.1.programme': 'FSJ Freiwilligendienst - Soziale Dienste',
    'temoignages.1.texte': 'Eine unglaubliche Erfahrung! Die Unterstützung von AllemagneMobilité ermöglichte es mir, meinen Traum zu verwirklichen, Deutschland zu entdecken und mich für eine Sache einzusetzen, die mir am Herzen liegt.',
    
    'temoignages.2.nom': 'Thomas Martin',
    'temoignages.2.programme': 'Krankenpflege-Ausbildung',
    'temoignages.2.texte': 'Dank ihrer Hilfe konnte ich eine hervorragende Ausbildung in Deutschland beginnen. Die Betreuung ist professionell und beruhigend von Anfang bis Ende.',
    
    'temoignages.3.nom': 'Sophie Bernard',
    'temoignages.3.programme': 'Universitätsstudium in Berlin',
    'temoignages.3.texte': 'Das Team hat mich durch alle Verfahren geführt. Heute lebe ich meinen Traum, an einer renommierten deutschen Universität zu studieren.',
    
    'contact.hero.titre': 'Kontaktieren Sie uns',
    'contact.hero.soustitre': 'Unser Team steht Ihnen zur Verfügung, um alle Ihre Fragen zu beantworten und Sie bei Ihrem Mobilitätsprojekt in Deutschland zu unterstützen.',
    
    'contact.formulaire.titre': 'Senden Sie uns eine Nachricht',
    'contact.formulaire.nom': 'Vollständiger Name',
    'contact.formulaire.nom.placeholder': 'Ihr Name',
    'contact.formulaire.email': 'E-Mail',
    'contact.formulaire.email.placeholder': 'ihre@email.de',
    'contact.formulaire.sujet': 'Betreff',
    'contact.formulaire.sujet.placeholder': 'Betreff Ihrer Anfrage',
    'contact.formulaire.message': 'Nachricht',
    'contact.formulaire.message.placeholder': 'Beschreiben Sie Ihr Projekt oder stellen Sie Ihre Fragen...',
    'contact.formulaire.envoyer': 'Nachricht senden',
    'contact.formulaire.envoi': 'Wird gesendet...',
    'contact.formulaire.succes.titre': 'Nachricht gesendet!',
    'contact.formulaire.succes.message': 'Wir haben Ihre Nachricht erhalten und werden Ihnen so schnell wie möglich antworten.',
    'contact.formulaire.succes.bouton': 'Weitere Nachricht senden',
    
    'contact.info.titre': 'Unsere Kontaktdaten',
    'contact.info.entreprise': 'Unternehmen',
    'contact.info.adresse': 'Adresse',
    'contact.info.email': 'E-Mail',
    'contact.info.horaires': 'Öffnungszeiten',
    'contact.info.horaires.semaine': 'Mo - Fr: 9:00 - 18:00 Uhr',
    'contact.info.horaires.weekend': 'Sa - So: Geschlossen',
    
    'contact.faq.titre': 'Häufig gestellte Fragen',
    'contact.faq.q1.question': 'Wie viel kosten Ihre Begleitdienste?',
    'contact.faq.q1.reponse': 'Unsere Preise variieren je nach Art des Programms und gewünschtem Begleitungsgrad. Kontaktieren Sie uns für ein kostenloses personalisiertes Angebot.',
    'contact.faq.q2.question': 'Muss ich Deutsch sprechen, um zu gehen?',
    'contact.faq.q2.reponse': 'Das hängt vom Programm ab. Für Freiwilligendienst (FSJ/BFD) ist in der Regel ein A2-B1 Niveau erforderlich. Für Studium und Ausbildung wird B2-C1 empfohlen. Wir bieten Vorbereitungskurse an.',
    'contact.faq.q3.question': 'Wie lange vor meiner Abreise sollte ich Sie kontaktieren?',
    'contact.faq.q3.reponse': 'Idealerweise 6 bis 12 Monate vor Ihrer gewünschten Abreise, um Zeit zu haben, Ihre Unterlagen vorzubereiten, notwendige Dokumente zu erhalten und die beste Gelegenheit zu finden.',
    'contact.faq.q4.question': 'Bieten Sie Unterstützung vor Ort in Deutschland an?',
    'contact.faq.q4.reponse': 'Ja! Wir bieten während Ihres gesamten Aufenthalts Begleitung: Hilfe bei Unterkunft, Verwaltungsverfahren, Integration und Unterstützung bei Bedarf.',
    
    'contact.meta.description': 'Kontaktieren Sie Aisso International Ltd für alle Ihre Fragen zu Mobilitätsmöglichkeiten in Deutschland: Freiwilligendienst, Ausbildung, Studium und Tourismus.',
    
    'footer.apropos': 'Über uns',
    'footer.apropos.texte': 'Ihr vertrauenswürdiger Partner zur Verwirklichung Ihrer Projekte in Deutschland: Freiwilligendienst, Ausbildung, Studium und Tourismus.',
    'footer.liens': 'Schnelllinks',
    'footer.ressources': 'Ressourcen',
    'footer.contact': 'Kontakt',
    'footer.droits': 'Alle Rechte vorbehalten',
    'footer.confidentialite': 'Datenschutzrichtlinie',
    'footer.conditions': 'Nutzungsbedingungen',
    
    'commun.enSavoirPlus': 'Mehr erfahren',
    'commun.postuler': 'Bewerben',
    'commun.nousContacter': 'Kontaktieren Sie uns',
    'commun.lireLaSuite': 'Weiterlesen',
    
    'accueil': 'Startseite',
    'apropos': 'Über uns',
    'contact': 'Kontakt',
    'rendezvous': 'Termin'
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