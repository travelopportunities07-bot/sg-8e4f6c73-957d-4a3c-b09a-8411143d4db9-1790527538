import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { FileText, CheckCircle, Users, Headphones, ArrowRight, ClipboardCheck, Globe, BookOpen, Phone } from "lucide-react";

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

  const documents = [
    "Passeport ou carte d'identité valide",
    "Diplômes et relevés de notes traduits",
    "CV actualisé (format européen)",
    "Lettre de motivation personnalisée",
    "Certificats de langue (si disponibles)",
    "Certificat médical",
    "Photos d'identité récentes",
    "Justificatifs de ressources financières"
  ];

  const tarifs = [
    {
      formule: "Consultation gratuite",
      prix: "0€",
      description: "Premier rendez-vous d'évaluation",
      inclus: [
        "Entretien individuel 45 minutes",
        "Analyse de votre profil",
        "Recommandations personnalisées",
        "Devis détaillé de nos services"
      ]
    },
    {
      formule: "Accompagnement Essentiel",
      prix: "À partir de 500€",
      description: "Pour les candidatures simples",
      inclus: [
        "Constitution du dossier",
        "Traductions de base",
        "Envoi des candidatures",
        "Suivi administratif"
      ]
    },
    {
      formule: "Accompagnement Complet",
      prix: "À partir de 1.200€",
      description: "Prise en charge totale",
      inclus: [
        "Tous les services Essentiel",
        "Cours de langue (40h minimum)",
        "Assistance visa et démarches",
        "Accompagnement sur place",
        "Support continu 12 mois"
      ]
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
              Aisso International Ltd vous accompagne à chaque étape de votre projet en Allemagne. De la première consultation jusqu'à votre installation, nous sommes à vos côtés.
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
                {documents.map((document, index) => (
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
                  Aisso International Ltd vous aide à rassembler, traduire et certifier tous ces documents. Nous vérifions que votre dossier est complet avant l'envoi.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nos formules d'accompagnement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous les budgets et tous les besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tarifs.map((tarif, index) => (
              <Card key={index} className={`p-8 hover:shadow-2xl transition-all duration-300 ${index === 2 ? 'border-4 border-green-500 relative' : 'border-2'}`}>
                {index === 2 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Le plus complet
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    {tarif.formule}
                  </h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {tarif.prix}
                  </div>
                  <p className="text-gray-600">
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
                    <Button className={`w-full ${index === 2 ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-900 hover:bg-blue-800'}`}>
                      {index === 0 ? 'Demander' : 'Choisir cette formule'}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg mb-4">
              💡 Tarifs indicatifs. Devis personnalisé gratuit après évaluation de votre profil.
            </p>
            <p className="text-gray-600">
              Facilités de paiement disponibles • Paiement sécurisé • Garantie satisfaction
            </p>
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
                  Contactez Aisso International Ltd
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
            Ne laissez pas les démarches administratives vous freiner. Avec Aisso International Ltd, votre projet en Allemagne devient simple et accessible.
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