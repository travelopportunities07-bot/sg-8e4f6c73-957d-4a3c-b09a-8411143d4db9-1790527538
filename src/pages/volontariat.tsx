import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { Heart, Users, Globe, CheckCircle, ArrowRight, Clock, Euro, GraduationCap } from "lucide-react";

export default function VolontariatPage() {
  const { t } = useLanguage();

  const programmes = [
    {
      titre: "FSJ - Freiwilliges Soziales Jahr",
      soustitre: "Volontariat Social",
      description: "Programme de volontariat d'un an dans le domaine social et médical. Parfait pour découvrir les métiers du soin et de l'accompagnement.",
      duree: "6 à 18 mois",
      argent: "Indemnité mensuelle + logement",
      age: "16-27 ans",
      domaines: ["Hôpitaux", "Maisons de retraite", "Écoles", "Aide aux personnes handicapées"],
      icone: Heart,
      couleur: "text-red-500"
    },
    {
      titre: "BFD - Bundesfreiwilligendienst",
      soustitre: "Service Volontaire Fédéral",
      description: "Service civique allemand ouvert à tous les âges. Engagement dans des organisations sociales, culturelles ou environnementales.",
      duree: "6 à 24 mois",
      argent: "Indemnité + avantages sociaux",
      age: "Tous âges (16+)",
      domaines: ["Social", "Culture", "Sport", "Environnement", "Éducation"],
      icone: Users,
      couleur: "text-blue-500"
    },
    {
      titre: "Freiwilligendienst",
      soustitre: "Service Volontaire Général",
      description: "Programme de volontariat flexible permettant de s'engager dans divers secteurs. Idéal pour acquérir une expérience internationale tout en contribuant à des projets significatifs.",
      duree: "6 à 18 mois",
      argent: "Indemnité + couverture sociale",
      age: "18+ ans",
      domaines: ["Projets sociaux", "Environnement", "Éducation", "Santé", "Culture et arts"],
      icone: Globe,
      couleur: "text-green-600"
    }
  ];

  const avantages = [
    {
      icone: Euro,
      titre: "Indemnité mensuelle",
      description: "Entre 300€ et 600€ selon le programme, plus logement et nourriture souvent inclus"
    },
    {
      icone: GraduationCap,
      titre: "Formation linguistique",
      description: "Cours d'allemand gratuits et immersion totale pour progresser rapidement"
    },
    {
      icone: Clock,
      titre: "Expérience valorisante",
      description: "Une année reconnue professionnellement et personnellement enrichissante"
    },
    {
      icone: CheckCircle,
      titre: "Assurance complète",
      description: "Couverture santé, accident et responsabilité civile incluse"
    }
  ];

  const etapes = [
    {
      numero: "1",
      titre: "Consultation gratuite",
      description: "Échangez avec nos experts pour définir le programme adapté à votre profil"
    },
    {
      numero: "2",
      titre: "Préparation du dossier",
      description: "Nous vous accompagnons dans la constitution complète de votre candidature"
    },
    {
      numero: "3",
      titre: "Placement",
      description: "Nous vous mettons en relation avec des structures d'accueil en Allemagne"
    },
    {
      numero: "4",
      titre: "Accompagnement",
      description: "Suivi personnalisé avant le départ et pendant votre volontariat"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              FSJ • BFD • FWD
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Volontariat en Allemagne
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in">
              Engagez-vous dans un programme de volontariat en Allemagne. Une expérience humaine unique avec indemnité, logement et formation linguistique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
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

      {/* Programmes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Les programmes de volontariat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois programmes officiels reconnus par l'État allemand, adaptés à différents profils et projets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programmes.map((programme, index) => {
              const Icone = programme.icone;
              return (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500">
                  <div className={`${programme.couleur} mb-6`}>
                    <Icone className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    {programme.titre}
                  </h3>
                  <p className="text-green-600 font-semibold mb-4">
                    {programme.soustitre}
                  </p>
                  <p className="text-gray-700 mb-6">
                    {programme.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-semibold">Durée : {programme.duree}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Euro className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-semibold">{programme.argent}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-semibold">Âge : {programme.age}</span>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="font-semibold text-blue-900 mb-3">Domaines d'intervention :</p>
                    <ul className="space-y-2">
                      {programme.domaines.map((domaine, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{domaine}</span>
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

      {/* Avantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Pourquoi faire un volontariat en Allemagne ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience unique qui combine engagement social, apprentissage linguistique et découverte culturelle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {avantages.map((avantage, index) => {
              const Icone = avantage.icone;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icone className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {avantage.titre}
                  </h3>
                  <p className="text-gray-600">
                    {avantage.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Comment postuler ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VivrEnAllemagne vous accompagne à chaque étape de votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {etapes.map((etape, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 text-white rounded-full text-3xl font-bold mb-6">
                    {etape.numero}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {etape.titre}
                  </h3>
                  <p className="text-gray-600">
                    {etape.description}
                  </p>
                </div>
                {index < etapes.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-1 bg-gray-200">
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à vivre une expérience inoubliable ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez VivrEnAllemagne dès aujourd'hui pour une consultation gratuite et démarrez votre aventure en Allemagne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rendez-vous">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                Demander des informations
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