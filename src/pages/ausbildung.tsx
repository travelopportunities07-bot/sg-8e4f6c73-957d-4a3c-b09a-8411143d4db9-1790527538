import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Stethoscope, 
  Wrench, 
  ChefHat, 
  Building2, 
  CheckCircle, 
  ArrowRight, 
  GraduationCap, 
  Euro, 
  Clock,
  Laptop,
  Package,
  TrendingUp,
  Globe2,
  Heart,
  Zap,
  Award,
  Users,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AusbildungPage() {
  const secteurs = [
    {
      id: "technique",
      nom: "Techniques industrielles",
      icone: Wrench,
      couleur: "text-blue-600",
      bgCouleur: "bg-blue-50",
      description: "L'industrie allemande recherche constamment des profils qualifiés. Ces métiers offrent stabilité, salaires attractifs et perspectives d'évolution rapide.",
      formations: [
        {
          titre: "Électrotechnicien",
          titreAllemand: "Elektroniker/in",
          description: "Travaille sur les installations électriques, l'électronique industrielle, les automatismes et les systèmes de contrôle.",
          duree: "3,5 ans",
          conditions: "Niveau secondaire recommandé, bonnes bases en maths/physique",
          avantages: ["Formation très recherchée", "Bien rémunérée", "Évolution rapide", "Travail technique stimulant"],
          perspectives: "Industrie, bâtiment, maintenance industrielle, ou freelance",
          salaire: "950€ - 1.200€/mois"
        },
        {
          titre: "Mécanicien industriel",
          titreAllemand: "Industriemechaniker/in",
          description: "Montage, entretien et réparation de machines industrielles complexes. Un métier au cœur de l'industrie manufacturière.",
          duree: "3,5 ans",
          conditions: "Niveau secondaire, habileté technique, précision",
          avantages: ["Forte demande", "Travail stable", "Secteur en croissance", "Compétences transférables"],
          perspectives: "Industrie manufacturière, services de maintenance, automobile",
          salaire: "900€ - 1.150€/mois"
        }
      ]
    },
    {
      id: "sante",
      nom: "Santé et soins",
      icone: Stethoscope,
      couleur: "text-red-600",
      bgCouleur: "bg-red-50",
      description: "Donnez du sens à votre métier ! L'Allemagne manque cruellement de personnel qualifié dans la santé. Des opportunités exceptionnelles pour les francophones.",
      formations: [
        {
          titre: "Infirmier/ère",
          titreAllemand: "Pflegefachmann/-frau",
          description: "Soins aux patients en hôpital, maison de retraite ou à domicile. Un métier noble avec de fortes responsabilités.",
          duree: "3 ans",
          conditions: "Niveau équivalent bac, bon niveau d'allemand (B2), motivation et empathie",
          avantages: ["Forte demande nationale", "Évolution vers spécialisations", "Carrière internationale", "Métier valorisant"],
          perspectives: "Établissements de santé, hôpitaux, cliniques, soins à domicile",
          salaire: "1.100€ - 1.300€/mois"
        },
        {
          titre: "Aide-soignant",
          titreAllemand: "Altenpflegehelfer/in",
          description: "Assistance aux personnes âgées dans les gestes quotidiens. Accès rapide à l'emploi et tremplin vers d'autres métiers de la santé.",
          duree: "1 à 2 ans",
          conditions: "Niveau 3e ou CAP, niveau d'allemand A2/B1",
          avantages: ["Accès rapide à l'emploi", "Formation courte", "Tremplin vers infirmier", "Contact humain"],
          perspectives: "EHPAD, services de soins, peut évoluer vers formation d'infirmier",
          salaire: "800€ - 1.000€/mois"
        },
        {
          titre: "Assistant médical",
          titreAllemand: "Medizinische/r Fachangestellte/r (MFA)",
          description: "Assistance en cabinet médical : accueil des patients, soins de base, tâches administratives.",
          duree: "3 ans",
          conditions: "Niveau secondaire, bonne communication, sens de l'organisation",
          avantages: ["Travail stable", "Horaires réguliers", "Environnement médical", "Bon équilibre vie pro/perso"],
          perspectives: "Cabinets médicaux, cliniques, services de santé publique",
          salaire: "900€ - 1.100€/mois"
        },
        {
          titre: "Assistant en pharmacie",
          titreAllemand: "PTA – Pharmazeutisch-technische/r Assistent/in",
          description: "Prépare des médicaments, conseille les clients, soutient le pharmacien dans son activité quotidienne.",
          duree: "2 ans d'école + 6 mois de stage",
          conditions: "Bac recommandé, intérêt pour la chimie et biologie",
          avantages: ["Bonne insertion", "Métier valorisant", "Environnement scientifique", "Contact client"],
          perspectives: "Pharmacies, industrie pharmaceutique, laboratoires",
          salaire: "850€ - 1.050€/mois"
        },
        {
          titre: "Assistant dentaire",
          titreAllemand: "Zahnmedizinische/r Fachangestellte/r (ZFA)",
          description: "Aide les dentistes, assiste aux soins, gère l'hygiène et le matériel dentaire.",
          duree: "3 ans",
          conditions: "Niveau secondaire, rigueur, sens du contact",
          avantages: ["Métier en tension", "Très recherché", "Environnement médical", "Horaires réguliers"],
          perspectives: "Cabinets dentaires, cliniques, orthodontie, chirurgie dentaire",
          salaire: "850€ - 1.100€/mois"
        }
      ]
    },
    {
      id: "commerce",
      nom: "Commerce, gestion et finance",
      icone: Building2,
      couleur: "text-green-600",
      bgCouleur: "bg-green-50",
      description: "Des formations polyvalentes ouvrant les portes de multiples carrières. Secteur dynamique, accessible et en constante évolution.",
      formations: [
        {
          titre: "Employé de commerce",
          titreAllemand: "Kaufmann/-frau für Büromanagement",
          description: "Gestion administrative, communication interne, organisation globale de l'entreprise.",
          duree: "3 ans",
          conditions: "Bon niveau scolaire, organisation, allemand B1/B2",
          avantages: ["Métier polyvalent", "Très demandé", "Évolutions multiples", "Tous secteurs"],
          perspectives: "Entreprises privées, secteur public, évolutions vers RH, gestion, management",
          salaire: "850€ - 1.100€/mois"
        },
        {
          titre: "Comptable",
          titreAllemand: "Steuerfachangestellte/r",
          description: "Travaille avec un expert-comptable, gère les finances, les déclarations fiscales des entreprises.",
          duree: "3 ans",
          conditions: "Bonne logique, mathématiques, allemand B2 recommandé",
          avantages: ["Bonne rémunération", "Possibilité devenir expert-comptable", "Secteur stable", "Compétences recherchées"],
          perspectives: "Cabinets comptables, entreprises, banques, fiscalité",
          salaire: "900€ - 1.150€/mois"
        },
        {
          titre: "Employé commerce de détail",
          titreAllemand: "Kaufmann/-frau im Einzelhandel",
          description: "Conseille les clients, gère la caisse, réapprovisionne les rayons, participe à la gestion du magasin.",
          duree: "2 à 3 ans",
          conditions: "Aucun diplôme requis parfois, motivation et bonne présentation",
          avantages: ["Facile d'accès", "Formation courte", "Nombreux postes", "Évolution possible"],
          perspectives: "Magasins, supermarchés, possibilité de devenir manager ou responsable de rayon",
          salaire: "800€ - 1.000€/mois"
        },
        {
          titre: "Employé banque/assurance",
          titreAllemand: "Bankkaufmann/-frau / Versicherungskaufmann/-frau",
          description: "Conseille les clients, gère les comptes bancaires, propose des produits financiers et d'assurance.",
          duree: "2,5 à 3 ans",
          conditions: "Bac conseillé, rigueur, allemand B2",
          avantages: ["Statut valorisé", "Bonne évolution possible", "Environnement professionnel", "Formation complète"],
          perspectives: "Banques, compagnies d'assurance, services financiers",
          salaire: "950€ - 1.200€/mois"
        }
      ]
    },
    {
      id: "informatique",
      nom: "Informatique et numérique",
      icone: Laptop,
      couleur: "text-purple-600",
      bgCouleur: "bg-purple-50",
      description: "Le secteur du futur ! L'Allemagne a un besoin massif de talents IT. Débouchés immédiats, salaires attractifs, évolution rapide.",
      formations: [
        {
          titre: "Développeur logiciel",
          titreAllemand: "Fachinformatiker/in – Anwendungsentwicklung",
          description: "Conçoit, développe et teste des applications logicielles pour entreprises ou clients.",
          duree: "3 ans",
          conditions: "Bonne logique, connaissances en informatique, allemand B1/B2",
          avantages: ["Forte demande", "Salaires élevés", "Évolution rapide", "Freelance possible"],
          perspectives: "Entreprises IT, start-ups, freelance, multinationales, agences digitales",
          salaire: "950€ - 1.250€/mois"
        }
      ]
    },
    {
      id: "hotellerie",
      nom: "Hôtellerie, restauration, tourisme",
      icone: ChefHat,
      couleur: "text-orange-600",
      bgCouleur: "bg-orange-50",
      description: "Pour ceux qui aiment le contact humain et la mobilité. Secteur ouvert, accessible et apprécié internationalement.",
      formations: [
        {
          titre: "Cuisinier",
          titreAllemand: "Koch/Köchin",
          description: "Prépare des plats en cuisine professionnelle, travaille en équipe, crée des menus.",
          duree: "3 ans",
          conditions: "Résistance physique, créativité, travail en horaires décalés",
          avantages: ["Métier passion", "Possibilités à l'étranger", "Créativité au quotidien", "Évolution vers chef"],
          perspectives: "Restaurants, hôtels, traiteurs, possibilité de devenir chef de cuisine",
          salaire: "800€ - 1.050€/mois"
        },
        {
          titre: "Serveur / Hôte de restauration",
          titreAllemand: "Restaurantfachmann/-frau",
          description: "Service en salle, accueil client, dressage des tables, prise de commande.",
          duree: "3 ans",
          conditions: "Bonne présentation, relation client, allemand B1",
          avantages: ["Beaucoup de postes disponibles", "Contact international", "Pourboires", "Mobilité"],
          perspectives: "Hôtellerie, restauration gastronomique, gestion de salle",
          salaire: "800€ - 1.000€/mois"
        },
        {
          titre: "Employé en hôtellerie",
          titreAllemand: "Hotelfachmann/-frau",
          description: "Travaille à la réception, housekeeping, réservations, gestion globale de l'établissement.",
          duree: "3 ans",
          conditions: "Polyvalence, service client, allemand B1",
          avantages: ["Formation complète", "Utile à l'international", "Secteur dynamique", "Évolution rapide"],
          perspectives: "Hôtels, chaînes internationales, direction d'établissement",
          salaire: "850€ - 1.100€/mois"
        }
      ]
    },
    {
      id: "logistique",
      nom: "Logistique et transport",
      icone: Package,
      couleur: "text-indigo-600",
      bgCouleur: "bg-indigo-50",
      description: "Le cœur de l'économie allemande ! Secteur en plein boom avec l'e-commerce. Formations pratiques, emplois stables.",
      formations: [
        {
          titre: "Logisticien / Magasinier",
          titreAllemand: "Fachkraft für Lagerlogistik",
          description: "Gère le stockage, la réception, l'expédition des marchandises en entrepôt.",
          duree: "3 ans",
          conditions: "Bonne condition physique, organisation, allemand A2/B1",
          avantages: ["Métier très demandé", "Accessible", "Secteur e-commerce", "Emploi stable"],
          perspectives: "Entrepôts, logistique e-commerce, industrie, distribution",
          salaire: "850€ - 1.100€/mois"
        }
      ]
    }
  ];

  const avantagesSysteme = [
    {
      icone: Euro,
      titre: "Formation 100% rémunérée",
      description: "Contrairement à la France, TOUTES les formations en alternance en Allemagne sont payées dès le premier jour. Salaire progressif sur 3 ans."
    },
    {
      icone: GraduationCap,
      titre: "Système dual d'excellence",
      description: "Combinaison unique de théorie à l'école professionnelle et pratique intensive en entreprise. Reconnu mondialement."
    },
    {
      icone: TrendingUp,
      titre: "90% d'embauche garantie",
      description: "Plus de 9 apprentis sur 10 trouvent un emploi immédiatement après leur formation. Secteurs en forte demande."
    },
    {
      icone: Award,
      titre: "Diplôme reconnu en Europe",
      description: "Diplômes professionnels valorisés internationalement et équivalents aux diplômes universitaires."
    },
    {
      icone: Globe2,
      titre: "Carrière internationale",
      description: "Une fois formé en Allemagne, vos compétences sont recherchées partout en Europe et dans le monde."
    },
    {
      icone: Zap,
      titre: "Évolution rapide",
      description: "Possibilité d'évoluer rapidement vers des postes de responsabilité, de se spécialiser ou de créer son entreprise."
    }
  ];

  return (
    <Layout 
      title="Ausbildung - Formation en Alternance en Allemagne | Aventures Sans Frontières"
      description="Découvrez les formations professionnelles (Ausbildung) en Allemagne : rémunérées, reconnues, avec 90% d'embauche. Santé, technique, commerce, IT et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" 
          alt="Formation professionnelle en Allemagne" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/95 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
                🇩🇪 Ausbildung - Le système d'excellence allemand
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Formations professionnelles en Allemagne
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Apprenez un métier concret, soyez <span className="text-green-400 font-bold">rémunéré pendant votre formation</span>, 
                accumulez de l'expérience réelle et décrochez un <span className="text-green-400 font-bold">diplôme reconnu en Europe</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
                  <Link href="/contact">
                    <Heart className="mr-2 h-5 w-5" />
                    Commencer mon projet
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6">
                  <Link href="/rendez-vous">
                    Consultation gratuite
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Un tremplin vers votre avenir professionnel
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              L'Allemagne est reconnue dans toute l'Europe pour la qualité de son système de formation professionnelle en alternance, 
              appelé <span className="font-bold text-blue-600">"Ausbildung"</span>. Chaque année, des milliers de jeunes — allemands et 
              internationaux — choisissent cette voie pour apprendre un métier concret, tout en étant rémunérés et en accumulant de 
              l'expérience professionnelle réelle.
            </p>
            <p className="text-lg text-gray-600">
              Que vous soyez passionné par la santé, les métiers techniques, l'informatique, le commerce, la restauration ou encore 
              la logistique, <span className="font-semibold text-blue-600">il existe une formation faite pour vous</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages du système */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Pourquoi choisir l'Ausbildung ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le système de formation professionnelle allemand offre des avantages uniques au monde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {avantagesSysteme.map((avantage, index) => {
              const Icone = avantage.icone;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full">
                        <Icone className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">
                        {avantage.titre}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {avantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formations par secteur */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Découvrez les formations disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez les secteurs porteurs et trouvez la formation qui vous correspond
            </p>
          </div>

          <Tabs defaultValue="sante" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-12">
              {secteurs.map((secteur) => {
                const Icone = secteur.icone;
                return (
                  <TabsTrigger key={secteur.id} value={secteur.id} className="flex items-center gap-2">
                    <Icone className="h-4 w-4" />
                    <span className="hidden lg:inline">{secteur.nom}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {secteurs.map((secteur) => {
              const IconeSecteur = secteur.icone;
              return (
                <TabsContent key={secteur.id} value={secteur.id}>
                  <div className={`${secteur.bgCouleur} rounded-lg p-8 mb-8`}>
                    <div className="flex items-center gap-4 mb-4">
                      <IconeSecteur className={`h-12 w-12 ${secteur.couleur}`} />
                      <div>
                        <h3 className="text-3xl font-bold text-blue-900">{secteur.nom}</h3>
                        <p className="text-gray-700 mt-2 text-lg">{secteur.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-8">
                    {secteur.formations.map((formation, index) => (
                      <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500">
                        <CardContent className="p-8">
                          <div className="flex flex-col lg:flex-row gap-8">
                            {/* Informations principales */}
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-blue-900 mb-2">
                                {formation.titre}
                              </h4>
                              <p className="text-gray-500 italic mb-4">{formation.titreAllemand}</p>
                              <p className="text-gray-700 mb-6 leading-relaxed">
                                {formation.description}
                              </p>

                              {/* Conditions */}
                              <div className="mb-6">
                                <p className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-blue-500" />
                                  Conditions requises :
                                </p>
                                <p className="text-gray-700 ml-7">{formation.conditions}</p>
                              </div>

                              {/* Perspectives */}
                              <div>
                                <p className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                                  <Briefcase className="h-5 w-5 text-purple-500" />
                                  Perspectives de carrière :
                                </p>
                                <p className="text-gray-700 ml-7">{formation.perspectives}</p>
                              </div>
                            </div>

                            {/* Détails et avantages */}
                            <div className="lg:w-80">
                              {/* Infos clés */}
                              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                <div className="space-y-4">
                                  <div>
                                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                                      <Clock className="h-5 w-5" />
                                      <span className="font-semibold">Durée</span>
                                    </div>
                                    <p className="text-gray-900 font-bold ml-7">{formation.duree}</p>
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2 text-green-600 mb-1">
                                      <Euro className="h-5 w-5" />
                                      <span className="font-semibold">Salaire apprenti</span>
                                    </div>
                                    <p className="text-green-600 font-bold ml-7">{formation.salaire}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Avantages */}
                              <div>
                                <p className="font-semibold text-green-600 mb-3">✨ Avantages :</p>
                                <ul className="space-y-2">
                                  {formation.avantages.map((avantage, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                      <span className="text-sm text-gray-700">{avantage}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Comment fonctionne l'Ausbildung ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le système dual allemand : l'alliance parfaite entre théorie et pratique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Formation en entreprise
                </h3>
                <p className="text-gray-600">
                  3 à 4 jours par semaine en entreprise pour apprendre le métier sur le terrain avec des professionnels.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Cours théoriques
                </h3>
                <p className="text-gray-600">
                  1 à 2 jours par semaine à l'école professionnelle pour acquérir les connaissances théoriques nécessaires.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Rémunération mensuelle
                </h3>
                <p className="text-gray-600">
                  Vous êtes payé chaque mois par votre entreprise. Le salaire augmente progressivement chaque année de formation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Diplôme reconnu
                </h3>
                <p className="text-gray-600">
                  À l'issue de votre formation, vous obtenez un diplôme officiel reconnu partout en Europe et très valorisé.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Ils ont réussi leur Ausbildung
            </h2>
            <p className="text-xl text-gray-600">
              Des parcours inspirants de jeunes africains formés en Allemagne
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" 
                      alt="Aminata M." 
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Aminata M.</p>
                    <p className="text-sm text-gray-600">Sénégal → Infirmière, Berlin</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "J'ai fait mon Ausbildung en soins infirmiers à Berlin. Être payée pendant ma formation m'a permis d'être autonome. 
                  Aujourd'hui j'ai un CDI dans un grand hôpital et je vis ma passion !"
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" 
                      alt="Kofi D." 
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Kofi D.</p>
                    <p className="text-sm text-gray-600">Ghana → Mécanicien industriel, Munich</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Le système dual m'a permis d'apprendre rapidement. J'avais un salaire dès le début et j'ai été embauché directement 
                  après ma formation. Une vraie opportunité !"
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" 
                      alt="Fatou N." 
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Fatou N.</p>
                    <p className="text-sm text-gray-600">Cameroun → Développeuse IT, Francfort</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Mon Ausbildung en développement logiciel m'a ouvert toutes les portes. Le secteur IT en Allemagne est incroyable, 
                  et maintenant je travaille pour une grande entreprise avec un excellent salaire."
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notre accompagnement */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Aventures Sans Frontières vous accompagne de A à Z
            </h2>
            <p className="text-xl text-gray-700">
              Nous vous guidons à chaque étape de votre projet d'Ausbildung en Allemagne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Orientation personnalisée</h3>
              <p className="text-gray-600 text-sm">
                Nous identifions avec vous la formation qui correspond à votre profil et vos aspirations
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Cours d'allemand</h3>
              <p className="text-gray-600 text-sm">
                Préparation linguistique adaptée à votre niveau et au secteur visé (A2 à B2)
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Dossier de candidature</h3>
              <p className="text-gray-600 text-sm">
                Constitution complète de votre dossier, CV, lettre de motivation et recherche d'entreprises
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Démarches administratives</h3>
              <p className="text-gray-600 text-sm">
                Accompagnement pour le visa, la recherche de logement et toutes les formalités
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à construire votre avenir en Allemagne ?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rejoignez les milliers de jeunes qui ont choisi l'Ausbildung pour lancer leur carrière professionnelle. 
            Une formation de qualité, rémunérée, avec un emploi à la clé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
              <Link href="/contact">
                <ArrowRight className="mr-2 h-5 w-5" />
                Démarrer mon projet maintenant
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6">
              <Link href="/rendez-vous">
                Réserver une consultation gratuite
              </Link>
            </Button>
          </div>
          <p className="text-blue-200 text-sm">
            ✓ Accompagnement personnalisé &nbsp;&nbsp; ✓ Cours d'allemand inclus &nbsp;&nbsp; ✓ Suivi jusqu'à votre arrivée
          </p>
        </div>
      </section>
    </Layout>
  );
}