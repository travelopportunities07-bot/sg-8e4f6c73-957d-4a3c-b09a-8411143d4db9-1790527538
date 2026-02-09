import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { Heart, Home, Users, GraduationCap, Globe, Calendar, Euro, BookOpen } from "lucide-react";

export default function AuPair() {
  const { t, language } = useLanguage();

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      titleFr: "Immersion Culturelle",
      titleDe: "Kulturelle Immersion",
      descriptionFr: "Vivez au sein d'une famille allemande et découvrez leur quotidien",
      descriptionDe: "Leben Sie in einer deutschen Familie und entdecken Sie ihren Alltag"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      titleFr: "Apprentissage Linguistique",
      titleDe: "Sprachlernen",
      descriptionFr: "Perfectionnez votre allemand dans un contexte naturel et quotidien",
      descriptionDe: "Verbessern Sie Ihr Deutsch in einem natürlichen und alltäglichen Kontext"
    },
    {
      icon: <Home className="w-6 h-6" />,
      titleFr: "Logement et Repas Inclus",
      titleDe: "Unterkunft und Verpflegung Inklusive",
      descriptionFr: "Chambre privée et pension complète fournis par la famille d'accueil",
      descriptionDe: "Privatzimmer und Vollpension von der Gastfamilie bereitgestellt"
    },
    {
      icon: <Euro className="w-6 h-6" />,
      titleFr: "Argent de Poche",
      titleDe: "Taschengeld",
      descriptionFr: "Environ 280€ par mois pour vos dépenses personnelles",
      descriptionDe: "Etwa 280€ pro Monat für Ihre persönlichen Ausgaben"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      titleFr: "Temps Libre",
      titleDe: "Freizeit",
      descriptionFr: "Profitez de cours de langue et de temps libre pour explorer le pays",
      descriptionDe: "Genießen Sie Sprachkurse und Freizeit, um das Land zu erkunden"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      titleFr: "Réseau International",
      titleDe: "Internationales Netzwerk",
      descriptionFr: "Rencontrez d'autres au pairs du monde entier",
      descriptionDe: "Treffen Sie andere Au-pairs aus der ganzen Welt"
    }
  ];

  const requirements = [
    {
      titleFr: "Âge",
      titleDe: "Alter",
      descriptionFr: "18 à 26 ans",
      descriptionDe: "18 bis 26 Jahre"
    },
    {
      titleFr: "Expérience",
      titleDe: "Erfahrung",
      descriptionFr: "Expérience avec les enfants (baby-sitting, animation, etc.)",
      descriptionDe: "Erfahrung mit Kindern (Babysitting, Animation, etc.)"
    },
    {
      titleFr: "Langue",
      titleDe: "Sprache",
      descriptionFr: "Niveau basique d'allemand (A1 minimum)",
      descriptionDe: "Grundkenntnisse Deutsch (mindestens A1)"
    },
    {
      titleFr: "Durée",
      titleDe: "Dauer",
      descriptionFr: "Engagement de 6 à 12 mois",
      descriptionDe: "Verpflichtung von 6 bis 12 Monaten"
    },
    {
      titleFr: "Permis",
      titleDe: "Führerschein",
      descriptionFr: "Permis de conduire recommandé",
      descriptionDe: "Führerschein empfohlen"
    },
    {
      titleFr: "Santé",
      titleDe: "Gesundheit",
      descriptionFr: "Bonne santé physique et mentale",
      descriptionDe: "Gute körperliche und geistige Gesundheit"
    }
  ];

  const steps = [
    {
      titleFr: "1. Candidature",
      titleDe: "1. Bewerbung",
      descriptionFr: "Remplissez notre formulaire en ligne avec votre profil complet",
      descriptionDe: "Füllen Sie unser Online-Formular mit Ihrem vollständigen Profil aus"
    },
    {
      titleFr: "2. Entretien",
      titleDe: "2. Gespräch",
      descriptionFr: "Passez un entretien avec notre équipe pour valider votre projet",
      descriptionDe: "Führen Sie ein Gespräch mit unserem Team, um Ihr Projekt zu validieren"
    },
    {
      titleFr: "3. Matching",
      titleDe: "3. Matching",
      descriptionFr: "Nous trouvons la famille d'accueil qui correspond à votre profil",
      descriptionDe: "Wir finden die Gastfamilie, die zu Ihrem Profil passt"
    },
    {
      titleFr: "4. Préparation",
      titleDe: "4. Vorbereitung",
      descriptionFr: "Préparez vos documents et votre voyage avec notre accompagnement",
      descriptionDe: "Bereiten Sie Ihre Dokumente und Ihre Reise mit unserer Begleitung vor"
    },
    {
      titleFr: "5. Départ",
      titleDe: "5. Abreise",
      descriptionFr: "Commencez votre aventure au pair en Allemagne !",
      descriptionDe: "Beginnen Sie Ihr Au-pair-Abenteuer in Deutschland!"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-6">
              <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                {t("nav.accueil") === "Accueil" ? "Programme Au Pair" : "Au Pair Programm"}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("nav.accueil") === "Accueil" ? "Devenez Au Pair en Allemagne" : "Werden Sie Au Pair in Deutschland"}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("nav.accueil") === "Accueil" 
                  ? "Vivez une expérience unique au sein d'une famille allemande tout en améliorant votre allemand"
                  : "Erleben Sie eine einzigartige Erfahrung in einer deutschen Familie, während Sie Ihr Deutsch verbessern"
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    {t("nav.accueil") === "Accueil" ? "Postuler Maintenant" : "Jetzt Bewerben"}
                  </Button>
                </Link>
                <Link href="/rendez-vous">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    {t("nav.accueil") === "Accueil" ? "Consultation Gratuite" : "Kostenlose Beratung"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-blue-600 text-white">
                {t("nav.accueil") === "Accueil" ? "Avantages" : "Vorteile"}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("nav.accueil") === "Accueil" ? "Pourquoi Devenir Au Pair ?" : "Warum Au Pair werden?"}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("nav.accueil") === "Accueil"
                  ? "Découvrez tous les avantages du programme au pair en Allemagne"
                  : "Entdecken Sie alle Vorteile des Au-pair-Programms in Deutschland"
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-t-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {t("nav.accueil") === "Accueil" ? benefit.titleFr : benefit.titleDe}
                      </h3>
                      <p className="text-gray-600">
                        {t("nav.accueil") === "Accueil" ? benefit.descriptionFr : benefit.descriptionDe}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-purple-600 text-white">
                {t("nav.accueil") === "Accueil" ? "Prérequis" : "Voraussetzungen"}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("nav.accueil") === "Accueil" ? "Conditions de Participation" : "Teilnahmebedingungen"}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("nav.accueil") === "Accueil"
                  ? "Voici les conditions essentielles pour devenir au pair en Allemagne"
                  : "Hier sind die wesentlichen Bedingungen, um Au Pair in Deutschland zu werden"
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requirements.map((req, index) => (
                <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg text-blue-600 mb-2">
                    {t("nav.accueil") === "Accueil" ? req.titleFr : req.titleDe}
                  </h3>
                  <p className="text-gray-600">
                    {t("nav.accueil") === "Accueil" ? req.descriptionFr : req.descriptionDe}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-blue-600 text-white">
                {t("nav.accueil") === "Accueil" ? "Processus" : "Prozess"}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("nav.accueil") === "Accueil" ? "Comment Ça Marche ?" : "Wie funktioniert es?"}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("nav.accueil") === "Accueil"
                  ? "5 étapes simples pour devenir au pair en Allemagne"
                  : "5 einfache Schritte, um Au Pair in Deutschland zu werden"
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center border-t-4 border-purple-600">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t("nav.accueil") === "Accueil" ? step.titleFr : step.titleDe}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t("nav.accueil") === "Accueil" ? step.descriptionFr : step.descriptionDe}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("nav.accueil") === "Accueil" ? "Prêt à Vivre l'Aventure Au Pair ?" : "Bereit für das Au Pair Abenteuer?"}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {t("nav.accueil") === "Accueil"
                ? "Rejoignez des centaines de jeunes qui ont déjà vécu cette expérience enrichissante"
                : "Schließen Sie sich Hunderten junger Menschen an, die diese bereichernde Erfahrung bereits gemacht haben"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  {t("nav.accueil") === "Accueil" ? "Postuler Maintenant" : "Jetzt Bewerben"}
                </Button>
              </Link>
              <Link href="/rendez-vous">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  {t("nav.accueil") === "Accueil" ? "En Savoir Plus" : "Mehr Erfahren"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}