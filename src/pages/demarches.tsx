import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { FileText, CheckCircle, Users, Headphones, ArrowRight, ClipboardCheck, Globe, BookOpen, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function DemarchesPage() {
  const { t } = useLanguage();

  const services = [
    {
      titre: "Évaluation de votre profil",
      description: "Consultation gratuite pour identifier les meilleures opportunités selon votre situation, vos compétences et vos objectifs.",
      icone: Users,
      couleur: "text-blue-600",
      details: [
        "Entretien individuel approfondi",
        "Analyse de vos qualifications",
        "Recommandations personnalisées",
        "Plan d'action sur mesure"
      ]
    },
    {
      titre: "Constitution du dossier",
      description: "Aide complète pour préparer tous les documents nécessaires : traductions certifiées, équivalences de diplômes, CV adapté.",
      icone: FileText,
      couleur: "text-green-600",
      details: [
        "Traduction de documents officiels",
        "Reconnaissance de diplômes",
        "CV et lettre de motivation optimisés",
        "Vérification et validation"
      ]
    },
    {
      titre: "Candidatures et placements",
      description: "Mise en relation avec des universités, entreprises formatrices ou programmes de volontariat adaptés à votre profil.",
      icone: ClipboardCheck,
      couleur: "text-purple-600",
      details: [
        "Sélection des meilleures opportunités",
        "Dépôt des candidatures",
        "Suivi des réponses",
        "Préparation aux entretiens"
      ]
    },
    {
      titre: "Démarches administratives",
      description: "Accompagnement pour toutes les formalités : visa, assurance santé, inscription, ouverture de compte bancaire.",
      icone: Globe,
      couleur: "text-orange-600",
      details: [
        "Demande de visa étudiant/travail",
        "Assurance maladie obligatoire",
        "Enregistrement auprès des autorités",
        "Documents administratifs allemands"
      ]
    },
    {
      titre: "Cours de langue allemande",
      description: "Préparation linguistique adaptée à votre niveau et à vos besoins spécifiques (A1 à C1).",
      icone: BookOpen,
      couleur: "text-red-600",
      details: [
        "Cours intensifs ou extensifs",
        "Préparation aux certifications",
        "Allemand professionnel spécialisé",
        "Plateforme d'apprentissage en ligne"
      ]
    },
    {
      titre: "Accompagnement continu",
      description: "Suivi personnalisé avant le départ et pendant votre séjour en Allemagne. Assistance 24/7 en cas de besoin.",
      icone: Headphones,
      couleur: "text-indigo-600",
      details: [
        "Préparation au départ (bagages, culture)",
        "Accueil et orientation sur place",
        "Support permanent en France et Allemagne",
        "Réseau d'entraide entre participants"
      ]
    }
  ];

  const etapes = [
    {
      numero: "1",
      titre: "Premier contact",
      description: "Consultation gratuite par téléphone, email ou rendez-vous pour discuter de votre projet"
    },
    {
      numero: "2",
      titre: "Évaluation détaillée",
      description: "Analyse approfondie de votre profil et définition d'un plan d'action personnalisé"
    },
    {
      numero: "3",
      titre: "Préparation du dossier",
      description: "Constitution complète de tous les documents nécessaires avec notre aide"
    },
    {
      numero: "4",
      titre: "Candidatures",
      description: "Envoi des dossiers aux organismes, universités ou entreprises sélectionnés"
    },
    {
      numero: "5",
      titre: "Obtention des admissions",
      description: "Suivi des réponses et aide à la décision en cas de plusieurs offres"
    },
    {
      numero: "6",
      titre: "Démarches administratives",
      description: "Accompagnement pour visa, assurances, logement et formalités"
    },
    {
      numero: "7",
      titre: "Préparation au départ",
      description: "Cours de langue, briefing culturel et conseils pratiques"
    },
    {
      numero: "8",
      titre: "Installation et suivi",
      description: "Accompagnement pendant votre séjour et assistance continue"
    }
  ];

  const tarifs = [
    {
      formule: "Consultation initiale",
      prix: "30€",
      description: "Premier rendez-vous d'évaluation approfondie",
      inclus: [
        "Entretien individuel de 60 minutes",
        "Analyse détaillée de votre profil",
        "Recommandations personnalisées",
        "Plan d'action et devis détaillé"
      ]
    },
    {
      formule: "Accompagnement Standard",
      duree: "3 mois",
      prix: "897€",
      description: "Accompagnement complet sur 3 mois",
      inclus: [
        "Constitution du dossier complet",
        "Candidatures et suivi des réponses",
        "Assistance pour démarches administratives",
        "Support continu pendant 3 mois"
      ]
    },
    {
      formule: "Accompagnement Premium",
      duree: "6 mois",
      prix: "1297€",
      description: "Accompagnement renforcé sur 6 mois",
      inclus: [
        "Tous les services Standard",
        "Cours de langue allemande (30h)",
        "Préparation aux entretiens",
        "Assistance visa renforcée",
        "Support continu pendant 6 mois"
      ],
      populaire: true
    },
    {
      formule: "Accompagnement VIP",
      duree: "9 mois",
      prix: "1497€",
      description: "Accompagnement complet sur 9 mois",
      inclus: [
        "Tous les services Premium",
        "Cours de langue allemande (60h)",
        "Accompagnement sur place en Allemagne",
        "Assistance logement et installation",
        "Support prioritaire 24/7 pendant 9 mois",
        "Réseau professionnel et communauté"
      ]
    }
  ];

  const temoignages = [
    {
      nom: "Sophie M.",
      programme: "Étudiante en Master Marketing",
      ville: "Berlin",
      note: 5,
      couleur: "bg-blue-500",
      initiales: "SM",
      commentaire: "VivrEnAllemagne a transformé mon projet en réalité. Leur équipe a su me conseiller sur tous les aspects, de la préparation du dossier à l'installation. Je suis maintenant en train de vivre mes rêves !",
      details: "Diplômée d'un Master en Marketing, Sophie a choisi de poursuivre ses études en Allemagne. Elle a bénéficié de l'accompagnement Premium."
    },
    {
      nom: "Jean L.",
      programme: "Au Pair",
      ville: "Munich",
      note: 4,
      couleur: "bg-green-500",
      initiales: "JL",
      commentaire: "Leur aide pour les démarches administratives a été inestimable. J'ai reçu mon visa en moins de 2 semaines. Leur conseil sur la préparation du CV a été un atout majeur pour trouver un emploi.",
      details: "Jean a choisi le programme Au Pair et a bénéficié de l'accompagnement Standard."
    },
    {
      nom: "Marie P.",
      programme: "Formations - Tourisme",
      ville: "Hambourg",
      note: 5,
      couleur: "bg-purple-500",
      initiales: "MP",
      commentaire: "Les cours de langue ont été un véritable atout. J'ai acquis un niveau A2 en moins de 3 mois. Leur conseil sur la préparation aux entretiens a été très utile.",
      details: "Marie a choisi le programme Formations - Tourisme et a bénéficié de l'accompagnement Premium."
    },
    {
      nom: "Lucas R.",
      programme: "Rapprochement Familial",
      ville: "Dortmund",
      note: 4,
      couleur: "bg-orange-500",
      initiales: "LR",
      commentaire: "Leur accompagnement sur place a été incroyable. Ils ont su me trouver un logement idéal et m'aider à m'adapter rapidement. Je suis maintenant très à l'aise dans ma nouvelle ville.",
      details: "Lucas a choisi le programme Rapprochement Familial et a bénéficié de l'accompagnement VIP."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Accompagnement complet
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Démarches & Accompagnement
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              VivrEnAllemagne vous accompagne à chaque étape de votre projet en Allemagne. De la première consultation jusqu'à votre installation, nous sommes à vos côtés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rendez-vous">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                  Planifiez votre aventure internationale
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/rendez-vous">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                  Prendre rendez-vous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nos services d'accompagnement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une prise en charge complète et personnalisée pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icone = service.icone;
              return (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500">
                  <div className={`${service.couleur} mb-6`}>
                    <Icone className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    {service.titre}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <div className="border-t pt-6">
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Les étapes de votre projet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus structuré et transparent du premier contact jusqu'à votre réussite en Allemagne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {etapes.map((etape, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full text-2xl font-bold mb-4">
                      {etape.numero}
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 mb-3">
                      {etape.titre}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {etape.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Documents nécessaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Liste des documents généralement requis pour votre dossier (peut varier selon le programme)
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Passeport ou carte d'identité valide",
                  "Diplômes et relevés de notes traduits",
                  "CV actualisé (format européen)",
                  "Lettre de motivation personnalisée",
                  "Certificats de langue (si disponibles)",
                  "Certificat médical",
                  "Photos d'identité récentes",
                  "Justificatifs de ressources financières"
                ].map((document, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{document}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-blue-900 font-semibold mb-2">
                  📋 Note importante
                </p>
                <p className="text-gray-700">
                  VivrEnAllemagne vous aide à rassembler, traduire et certifier tous ces documents. Nous vérifions que votre dossier est complet avant l'envoi.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos formules d'accompagnement
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des solutions adaptées à tous les budgets et tous les besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {tarifs.map((tarif, index) => (
              <Card key={index} className={`p-8 hover:shadow-2xl transition-all duration-300 bg-white ${tarif.populaire ? 'border-4 border-green-500 relative' : 'border-2 border-gray-200'}`}>
                {tarif.populaire && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Le plus populaire
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    {tarif.formule}
                  </h3>
                  {tarif.duree && (
                    <p className="text-lg text-gray-600 mb-4">
                      Durée : {tarif.duree}
                    </p>
                  )}
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {tarif.prix}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {tarif.description}
                  </p>
                </div>
                <div className="border-t pt-6">
                  <ul className="space-y-3 mb-6">
                    {tarif.inclus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/rendez-vous">
                    <Button className={`w-full ${tarif.populaire ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-900 hover:bg-blue-800'}`}>
                      {index === 0 ? 'Réserver' : 'Choisir cette formule'}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg mb-4">
              💡 Devis personnalisé disponible après consultation initiale.
            </p>
            <p className="text-gray-400">
              Facilités de paiement disponibles • Paiement sécurisé • Garantie satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Témoignages clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les expériences de nos clients qui ont réussi leur projet en Allemagne avec VivrEnAllemagne
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {temoignages.map((temoignage, index) => (
                <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${temoignage.couleur}`}>
                      {temoignage.initiales}
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 text-lg">
                        {temoignage.nom}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {temoignage.programme}
                      </p>
                      <p className="text-xs text-gray-500">
                        📍 {temoignage.ville}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(temoignage.note)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4">
                    "{temoignage.commentaire}"
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      {temoignage.details}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Contactez VivrEnAllemagne
                </h2>
                <p className="text-xl text-gray-700">
                  Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-900 text-white rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">Par email</p>
                    <p className="text-gray-700">successprocompany@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full flex-shrink-0">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">Siège social</p>
                    <p className="text-gray-700 text-sm">
                      71-75 Shelton Street, Covent Garden<br/>
                      London WC2H 9JQ, United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link href="/rendez-vous">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                    Prendre rendez-vous maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ne laissez pas les démarches administratives vous freiner. Avec VivrEnAllemagne, votre projet en Allemagne devient simple et accessible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rendez-vous">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                Planifiez votre aventure internationale
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/rendez-vous">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}