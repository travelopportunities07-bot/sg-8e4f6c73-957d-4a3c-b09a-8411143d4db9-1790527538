import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { Stethoscope, Wrench, ChefHat, Building2, CheckCircle, ArrowRight, GraduationCap, Euro, Clock, Laptop, TrendingUp, Users, Globe, Package } from "lucide-react";

export default function FormationsPage() {
  const { t } = useLanguage();

  const formations = [
    {
      titre: "Soins infirmiers (Pflegefachmann/-frau)",
      description: "Formation professionnelle de 3 ans pour devenir infirmier/infirmière qualifié(e) en Allemagne. Soins aux patients en hôpital, maison de retraite ou à domicile. Formation rémunérée avec diplôme reconnu internationalement et forte demande dans tout le pays.",
      duree: "3 ans",
      salaire: "1.100€ - 1.300€/mois",
      debouches: "Hôpitaux, cliniques, EHPAD, soins à domicile, établissements de santé",
      conditions: ["Niveau Bac ou équivalent", "Bon niveau d'allemand (B2)", "Motivation pour le secteur médical", "Empathie et sens du contact"],
      avantages: ["Formation gratuite et rémunérée", "Diplôme reconnu en Europe", "Forte demande nationale", "Évolution vers spécialisations", "Carrière internationale possible"],
      icone: Stethoscope,
      couleur: "text-red-500"
    },
    {
      titre: "Aide-soignant (Altenpflegehelfer/in)",
      description: "Assistance aux personnes âgées dans les gestes quotidiens. Formation courte (1-2 ans) idéale pour entrer rapidement dans le secteur de la santé et servant de tremplin vers d'autres diplômes.",
      duree: "1 à 2 ans",
      salaire: "800€ - 1.000€/mois",
      debouches: "EHPAD, services de soins, aide à domicile",
      conditions: ["Niveau 3e ou CAP", "Niveau d'allemand A2/B1", "Motivation pour l'aide à la personne"],
      avantages: ["Accès rapide à l'emploi", "Formation courte", "Tremplin vers infirmier", "Contact humain valorisant"],
      icone: Stethoscope,
      couleur: "text-red-400"
    },
    {
      titre: "Assistant médical (MFA)",
      description: "Assistance en cabinet médical : accueil des patients, soins de base, tâches administratives. Formation complète combinant aspects médicaux et administratifs.",
      duree: "3 ans",
      salaire: "900€ - 1.100€/mois",
      debouches: "Cabinets médicaux, cliniques, services de santé publique",
      conditions: ["Niveau secondaire", "Bonne communication", "Sens de l'organisation", "Allemand B1"],
      avantages: ["Travail stable", "Horaires réguliers", "Bon équilibre vie pro/perso", "Environnement médical"],
      icone: Stethoscope,
      couleur: "text-pink-500"
    },
    {
      titre: "Électrotechnicien (Elektroniker/in)",
      description: "Formation technique de 3,5 ans pour travailler sur les installations électriques, l'électronique industrielle et les automatismes. Secteur en forte demande dans l'industrie allemande.",
      duree: "3,5 ans",
      salaire: "950€ - 1.200€/mois",
      debouches: "Industrie, bâtiment, maintenance industrielle, freelance possible",
      conditions: ["Niveau secondaire recommandé", "Bonnes bases en maths/physique", "Aptitudes techniques", "Allemand B1"],
      avantages: ["Formation très recherchée", "Bien rémunérée", "Évolution rapide", "Travail technique stimulant", "Freelance possible"],
      icone: Wrench,
      couleur: "text-blue-600"
    },
    {
      titre: "Mécanicien industriel (Industriemechaniker/in)",
      description: "Montage, entretien et réparation de machines industrielles. Formation au cœur de l'industrie manufacturière allemande avec de nombreuses opportunités.",
      duree: "3,5 ans",
      salaire: "900€ - 1.150€/mois",
      debouches: "Industrie manufacturière, services de maintenance, secteur automobile",
      conditions: ["Niveau secondaire", "Habileté technique", "Précision", "Allemand B1"],
      avantages: ["Forte demande", "Travail stable", "Secteur en croissance", "Compétences transférables"],
      icone: Wrench,
      couleur: "text-blue-500"
    },
    {
      titre: "Développeur logiciel (Fachinformatiker/in)",
      description: "Conception, développement et test d'applications logicielles. Le secteur IT en Allemagne offre des débouchés immédiats avec des salaires attractifs et une évolution rapide.",
      duree: "3 ans",
      salaire: "950€ - 1.250€/mois",
      debouches: "Entreprises IT, start-ups, freelance, multinationales, agences digitales",
      conditions: ["Bonne logique", "Connaissances en informatique", "Allemand B1/B2"],
      avantages: ["Forte demande", "Salaires élevés", "Évolution rapide", "Freelance possible", "Secteur innovant"],
      icone: Laptop,
      couleur: "text-purple-600"
    },
    {
      titre: "Cuisinier (Koch/Köchin)",
      description: "Formation en cuisine professionnelle avec création de menus et travail en équipe. Métier passion offrant des possibilités internationales et une créativité au quotidien.",
      duree: "3 ans",
      salaire: "800€ - 1.050€/mois",
      debouches: "Restaurants, hôtels, traiteurs, possibilité chef de cuisine",
      conditions: ["Résistance physique", "Créativité", "Travail en horaires décalés", "Allemand A2-B1"],
      avantages: ["Métier passion", "Possibilités à l'étranger", "Créativité quotidienne", "Évolution vers chef"],
      icone: ChefHat,
      couleur: "text-orange-500"
    },
    {
      titre: "Employé hôtellerie (Hotelfachmann/-frau)",
      description: "Travail à la réception, housekeeping, réservations et gestion d'établissement. Formation complète et polyvalente, utile à l'international.",
      duree: "3 ans",
      salaire: "850€ - 1.100€/mois",
      debouches: "Hôtels, chaînes internationales, direction d'établissement",
      conditions: ["Polyvalence", "Service client", "Allemand B1"],
      avantages: ["Formation complète", "Utile à l'international", "Secteur dynamique", "Évolution rapide"],
      icone: ChefHat,
      couleur: "text-orange-600"
    },
    {
      titre: "Employé de commerce (Kaufmann/-frau)",
      description: "Gestion administrative, communication interne et organisation d'entreprise. Formation polyvalente ouvrant de multiples portes dans tous les secteurs.",
      duree: "3 ans",
      salaire: "850€ - 1.100€/mois",
      debouches: "Entreprises privées, secteur public, évolutions vers RH, gestion, management",
      conditions: ["Bon niveau scolaire", "Organisation", "Allemand B1/B2"],
      avantages: ["Métier polyvalent", "Très demandé", "Évolutions multiples", "Applicable tous secteurs"],
      icone: Building2,
      couleur: "text-green-600"
    },
    {
      titre: "Comptable (Steuerfachangestellte/r)",
      description: "Travail avec expert-comptable, gestion des finances et déclarations fiscales. Formation menant à une excellente rémunération avec possibilité de devenir expert-comptable.",
      duree: "3 ans",
      salaire: "900€ - 1.150€/mois",
      debouches: "Cabinets comptables, entreprises, banques, fiscalité",
      conditions: ["Bonne logique", "Mathématiques", "Allemand B2 recommandé"],
      avantages: ["Bonne rémunération", "Évolution vers expert-comptable", "Secteur stable", "Compétences recherchées"],
      icone: Building2,
      couleur: "text-green-500"
    },
    {
      titre: "Logisticien (Fachkraft für Lagerlogistik)",
      description: "Gestion du stockage, réception et expédition de marchandises en entrepôt. Secteur en plein boom avec l'e-commerce, offrant de nombreux débouchés.",
      duree: "3 ans",
      salaire: "850€ - 1.100€/mois",
      debouches: "Entrepôts, logistique e-commerce, industrie, distribution",
      conditions: ["Bonne condition physique", "Organisation", "Allemand A2/B1"],
      avantages: ["Métier très demandé", "Accessible", "Secteur e-commerce en croissance", "Emploi stable"],
      icone: Package,
      couleur: "text-indigo-600"
    }
  ];

  const systeme = [
    {
      titre: "Le système dual allemand",
      description: "Formation en alternance unique combinant théorie à l'école professionnelle (1-2 jours/semaine) et pratique en entreprise (3-4 jours/semaine). Reconnue mondialement pour son excellence et son efficacité."
    },
    {
      titre: "Rémunération durant la formation",
      description: "Contrairement à la France, toutes les formations professionnelles en Allemagne sont rémunérées dès le premier jour. Salaire progressif sur 3 ans versé par l'entreprise formatrice."
    },
    {
      titre: "Débouchés garantis",
      description: "Plus de 90% des apprentis trouvent un emploi immédiatement après leur formation. Secteurs en forte demande de main-d'œuvre qualifiée avec perspectives d'évolution rapide."
    },
    {
      titre: "Diplôme reconnu en Europe",
      description: "Diplômes professionnels reconnus dans toute l'Europe et valorisés internationalement. Équivalents aux diplômes universitaires et ouvrant les portes d'une carrière internationale."
    }
  ];

  const stats = [
    { nombre: "90%", texte: "Taux d'embauche après formation" },
    { nombre: "350+", texte: "Métiers accessibles en Ausbildung" },
    { nombre: "€1.000+", texte: "Salaire moyen pendant la formation" },
    { nombre: "3 ans", texte: "Durée moyenne de formation" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Ausbildung en Allemagne
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Formations professionnelles en Allemagne
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Formez-vous dans un métier d'avenir avec le système dual allemand. Formation gratuite, rémunérée et diplôme reconnu en Europe.
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
                  Consultation gratuite
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                  {stat.nombre}
                </div>
                <p className="text-gray-600 text-sm md:text-base">{stat.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nos formations professionnelles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les principales formations professionnelles accessibles en Allemagne avec VivrEnAllemagne
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {formations.map((formation, index) => {
              const Icone = formation.icone;
              return (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${formation.couleur}`}>
                      <Icone className="h-16 w-16" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        {formation.titre}
                      </h3>
                      <p className="text-gray-700">
                        {formation.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <Clock className="h-5 w-5 text-blue-600 mb-2" />
                      <p className="text-xs text-gray-600 mb-1">Durée</p>
                      <p className="font-semibold text-blue-900">{formation.duree}</p>
                    </div>
                    <div>
                      <Euro className="h-5 w-5 text-green-600 mb-2" />
                      <p className="text-xs text-gray-600 mb-1">Salaire</p>
                      <p className="font-semibold text-green-600">{formation.salaire}</p>
                    </div>
                    <div>
                      <GraduationCap className="h-5 w-5 text-purple-600 mb-2" />
                      <p className="text-xs text-gray-600 mb-1">Débouchés</p>
                      <p className="font-semibold text-purple-600 text-sm">{formation.debouches}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold text-blue-900 mb-3">Conditions requises :</p>
                    <ul className="space-y-2">
                      {formation.conditions.map((condition, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <p className="font-semibold text-green-600 mb-3">Avantages :</p>
                    <ul className="space-y-2">
                      {formation.avantages.map((avantage, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{avantage}</span>
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

      {/* System Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Le système de formation allemand
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un modèle d'excellence reconnu mondialement pour la qualité de ses formations professionnelles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {systeme.map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">
                    {item.titre}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Pourquoi choisir VivrEnAllemagne ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement complet pour réussir votre projet d'Ausbildung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Orientation personnalisée
              </h3>
              <p className="text-gray-600 text-sm">
                Nous identifions avec vous la formation qui correspond à votre profil et vos aspirations
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Cours d'allemand
              </h3>
              <p className="text-gray-600 text-sm">
                Préparation linguistique adaptée à votre niveau et au secteur visé (A2 à B2)
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Dossier de candidature
              </h3>
              <p className="text-gray-600 text-sm">
                Constitution complète : CV, lettre de motivation et recherche d'entreprises
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Suivi personnalisé
              </h3>
              <p className="text-gray-600 text-sm">
                Accompagnement visa, logement et toutes les formalités jusqu'à votre arrivée
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lancez votre carrière en Allemagne
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            VivrEnAllemagne vous accompagne de A à Z : choix de formation, dossier de candidature, cours d'allemand, et suivi personnalisé
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