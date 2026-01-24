import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { GraduationCap, BookOpen, Briefcase, Globe, CheckCircle, ArrowRight, Euro, Clock, Trophy } from "lucide-react";

export default function EtudesPage() {
  const { t } = useLanguage();

  const filieres = [
    {
      titre: "Ingénierie et Technologies",
      description: "Programmes d'excellence en ingénierie mécanique, électrique, informatique et automobile. L'Allemagne est leader mondial dans ces domaines.",
      universites: ["TU Munich", "RWTH Aachen", "KIT Karlsruhe", "TU Berlin"],
      debouches: "Industrie automobile, robotique, IA, énergies renouvelables",
      icone: Briefcase,
      couleur: "text-blue-600"
    },
    {
      titre: "Commerce et Gestion",
      description: "MBA, gestion d'entreprise, finance et commerce international. Formation pratique avec stages en entreprises allemandes et internationales.",
      universites: ["Mannheim Business School", "WHU", "Frankfurt School", "ESMT Berlin"],
      debouches: "Management, conseil, finance, entrepreneuriat",
      icone: Trophy,
      couleur: "text-green-600"
    },
    {
      titre: "Sciences et Recherche",
      description: "Programmes de recherche de renommée mondiale en physique, chimie, biologie, mathématiques et sciences naturelles.",
      universites: ["Heidelberg", "LMU Munich", "Göttingen", "Freiburg"],
      debouches: "Recherche, pharmaceutique, biotechnologie, laboratoires",
      icone: BookOpen,
      couleur: "text-purple-600"
    },
    {
      titre: "Médecine et Santé",
      description: "Formation médicale de haut niveau : médecine générale, dentaire, pharmacie et sciences de la santé.",
      universites: ["Charité Berlin", "Heidelberg", "LMU Munich", "Hamburg"],
      debouches: "Médecin, chirurgien, chercheur médical, pharmacien",
      icone: GraduationCap,
      couleur: "text-red-600"
    }
  ];

  const avantages = [
    {
      icone: Euro,
      titre: "Frais de scolarité très bas",
      description: "La plupart des universités publiques sont gratuites ou coûtent moins de 500€/semestre. Accessible à tous !"
    },
    {
      icone: Trophy,
      titre: "Excellence académique",
      description: "Universités classées parmi les meilleures au monde. Diplômes reconnus internationalement."
    },
    {
      icone: Briefcase,
      titre: "Opportunités professionnelles",
      description: "Permis de travail post-diplôme de 18 mois. Forte demande de diplômés qualifiés."
    },
    {
      icone: Globe,
      titre: "Vie étudiante dynamique",
      description: "Ambiance internationale, activités culturelles, réseaux d'étudiants étrangers et soutien linguistique."
    }
  ];

  const etapes = [
    {
      numero: "1",
      titre: "Évaluation de votre profil",
      description: "Consultation gratuite pour identifier les programmes et universités adaptés à votre parcours et vos objectifs"
    },
    {
      numero: "2",
      titre: "Préparation du dossier",
      description: "Aide à la constitution du dossier : traduction, équivalences, lettre de motivation, CV académique"
    },
    {
      numero: "3",
      titre: "Candidatures",
      description: "Dépôt des candidatures auprès des universités sélectionnées et suivi personnalisé des admissions"
    },
    {
      numero: "4",
      titre: "Démarches et installation",
      description: "Accompagnement pour le visa étudiant, logement, inscription et intégration en Allemagne"
    }
  ];

  const types = [
    {
      titre: "Licence (Bachelor)",
      duree: "3-4 ans",
      niveau: "Après le Bac",
      description: "Formation de base reconnue internationalement"
    },
    {
      titre: "Master",
      duree: "1-2 ans",
      niveau: "Après la Licence",
      description: "Spécialisation et recherche avancée"
    },
    {
      titre: "Doctorat (PhD)",
      duree: "3-5 ans",
      niveau: "Après le Master",
      description: "Recherche scientifique de haut niveau"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Excellence académique
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Étudier en Allemagne
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Rejoignez l'un des meilleurs systèmes universitaires au monde. Frais de scolarité très bas, excellence académique et opportunités professionnelles exceptionnelles.
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

      {/* Types de programmes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Types de programmes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Du Bachelor au Doctorat, trouvez le programme qui correspond à votre niveau et vos ambitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {types.map((type, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-blue-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <GraduationCap className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {type.titre}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-green-600 font-semibold flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    {type.duree}
                  </p>
                  <p className="text-gray-600 font-semibold">
                    {type.niveau}
                  </p>
                </div>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filières Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Filières d'études populaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les domaines d'études les plus demandés et prestigieux en Allemagne
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filieres.map((filiere, index) => {
              const Icone = filiere.icone;
              return (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${filiere.couleur}`}>
                      <Icone className="h-16 w-16" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        {filiere.titre}
                      </h3>
                      <p className="text-gray-700">
                        {filiere.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold text-blue-900 mb-3">Universités d'excellence :</p>
                    <div className="flex flex-wrap gap-2">
                      {filiere.universites.map((uni, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="font-semibold text-green-600 mb-2">Débouchés :</p>
                    <p className="text-gray-700">{filiere.debouches}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Pourquoi étudier en Allemagne ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'Allemagne offre l'un des meilleurs rapports qualité-prix pour les études supérieures au monde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {avantages.map((avantage, index) => {
              const Icone = avantage.icone;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Icone className="h-8 w-8 text-green-600" />
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Comment postuler avec Aventures Sans Frontières ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement personnalisé de A à Z pour maximiser vos chances d'admission
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
            Réalisez votre rêve d'étudier en Allemagne
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez Aventures Sans Frontières pour une évaluation gratuite de votre profil et découvrez les universités qui vous correspondent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rendez-vous">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                Commencer mon projet
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