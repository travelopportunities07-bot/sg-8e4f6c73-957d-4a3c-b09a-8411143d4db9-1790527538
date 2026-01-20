import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DestinationConsultation } from '@/components/destinations/DestinationConsultation';

export default function AllemagnePage() {
  return (
    <Layout 
      title="Allemagne | AfricaOpportunités"
      description="Découvrez les opportunités en Allemagne pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc" 
          alt="Allemagne" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇩🇪 Allemagne</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans l'une des économies les plus puissantes d'Europe, riche en innovation et en culture.
            </p>
          </div>
        </div>
      </div>

      {/* Country Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Aperçu du Pays</h2>
              <p className="text-lg text-gray-700 mb-4">
                L'Allemagne, située au cœur de l'Europe, est la plus grande économie de l'Union européenne et la quatrième puissance économique mondiale. Connue pour son excellence en ingénierie, son système éducatif de qualité et sa riche histoire culturelle, l'Allemagne offre un environnement stable et prospère.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Le pays se distingue par son système dual de formation professionnelle, son réseau d'universités prestigieuses et ses nombreuses entreprises internationales. Berlin, la capitale, est devenue un hub pour les startups et les industries créatives, tandis que des villes comme Munich, Francfort et Hambourg sont des centres économiques majeurs.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, l'Allemagne présente de nombreuses opportunités dans les domaines de l'éducation, de la recherche, de l'ingénierie, des technologies de l'information et de la santé, avec des politiques d'immigration favorables aux travailleurs qualifiés et aux étudiants internationaux.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Berlin
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langue officielle:</span> Allemand
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 83 millions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Euro (€)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Tempéré avec quatre saisons distinctes
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Berlin, Munich, Hambourg, Cologne, Francfort
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités en Allemagne</h2>
          
          <Tabs defaultValue="travail">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
              <TabsTrigger value="travail" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> Travail
              </TabsTrigger>
              <TabsTrigger value="formations" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> Formations
              </TabsTrigger>
              <TabsTrigger value="tourisme" className="flex items-center gap-2">
                <Globe className="h-4 w-4" /> Tourisme
              </TabsTrigger>
              <TabsTrigger value="volontariat" className="flex items-center gap-2">
                <Heart className="h-4 w-4" /> Volontariat
              </TabsTrigger>
              <TabsTrigger value="stages" className="flex items-center gap-2">
                <Award className="h-4 w-4" /> Stages
              </TabsTrigger>
              <TabsTrigger value="au-pair" className="flex items-center gap-2">
                <Home className="h-4 w-4" /> Au-pair
              </TabsTrigger>
              <TabsTrigger value="business" className="flex items-center gap-2">
                <Building className="h-4 w-4" /> Business
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="travail" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Travail</h3>
              <p className="mb-4">
                L'Allemagne offre d'excellentes opportunités d'emploi pour les professionnels qualifiés, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Ingénierie (mécanique, automobile, électrique)</li>
                <li>Technologies de l'information et développement logiciel</li>
                <li>Santé et soins médicaux</li>
                <li>Recherche scientifique</li>
                <li>Finance et services bancaires</li>
                <li>Énergie renouvelable</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler en Allemagne en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'un visa de travail ou d'une carte bleue européenne</li>
                <li>D'une offre d'emploi d'un employeur allemand</li>
                <li>De qualifications professionnelles reconnues</li>
                <li>De compétences linguistiques en allemand (niveau B1 ou supérieur recommandé pour la plupart des emplois)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Carte Bleue Européenne</h4>
                <p>
                  Ce permis de travail est destiné aux travailleurs hautement qualifiés non-européens. Pour être éligible, vous devez avoir un diplôme universitaire, une offre d'emploi avec un salaire minimum requis (environ 56 400 € par an en 2023, ou 43 992 € pour les professions en pénurie).
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.make-it-in-germany.com/fr/visa-sejour/types/travailler-en-allemagne" target="_blank">
                  En Savoir Plus sur les Permis de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                L'Allemagne est une destination d'études privilégiée pour les étudiants internationaux, offrant:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Universités publiques avec des frais de scolarité très bas ou inexistants</li>
                <li>Plus de 2 000 programmes d'études en anglais</li>
                <li>Système dual combinant théorie et pratique professionnelle</li>
                <li>Excellentes infrastructures de recherche</li>
                <li>Possibilité de travailler pendant et après les études</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université technique de Munich</li>
                <li>Université Humboldt de Berlin</li>
                <li>Université de Heidelberg</li>
                <li>Université Ludwig-Maximilian de Munich</li>
                <li>Université technique de Berlin</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants africains:
                </p>
                <ul className="list-disc pl-6">
                  <li>Bourses DAAD (Office allemand d'échanges universitaires)</li>
                  <li>Programme de bourses Erasmus Mundus</li>
                  <li>Bourses de la Fondation Alexander von Humboldt</li>
                  <li>Bourses spécifiques aux universités</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://www.daad.de/en/study-and-research-in-germany/scholarships/" target="_blank">
                  Explorer les Bourses d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                L'Allemagne offre une riche expérience touristique avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Des villes historiques comme Berlin, Munich et Dresde</li>
                <li>Des châteaux féeriques comme Neuschwanstein</li>
                <li>La Forêt-Noire et les Alpes bavaroises</li>
                <li>La Route Romantique et la Vallée du Rhin</li>
                <li>Des festivals comme l'Oktoberfest et les marchés de Noël</li>
                <li>Un riche patrimoine culturel et artistique</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa Schengen pour visiter l'Allemagne:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa de court séjour (type C) valable jusqu'à 90 jours</li>
                <li>Documents requis: passeport valide, preuve d'hébergement, assurance voyage, itinéraire, etc.</li>
                <li>Demande à soumettre à l'ambassade ou au consulat d'Allemagne dans votre pays</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  Mai à septembre pour le climat doux et les activités de plein air, décembre pour les marchés de Noël, septembre-octobre pour l'Oktoberfest à Munich.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.germany.travel/fr/home.html" target="_blank">
                  Découvrir l'Allemagne Touristique
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                L'Allemagne offre diverses possibilités de volontariat pour les résidents africains:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Service volontaire européen (SVE)</li>
                <li>Corps européen de solidarité</li>
                <li>Programmes de volontariat écologique</li>
                <li>Volontariat dans des organisations culturelles et sociales</li>
                <li>Projets d'intégration des réfugiés</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Organisations Principales</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Freiwilligendienste in Deutschland</li>
                <li>Caritas Allemagne</li>
                <li>Croix-Rouge allemande</li>
                <li>AIESEC Allemagne</li>
                <li>Weltwärts (programme de volontariat du gouvernement allemand)</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat en Allemagne, vous aurez généralement besoin d'un visa spécifique. Certains programmes comme le SVE ou Weltwärts facilitent les démarches administratives et peuvent couvrir les frais de voyage, d'hébergement et offrir une allocation mensuelle.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.bundes-freiwilligendienst.de/" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages en Allemagne offrent une excellente expérience professionnelle dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Grandes entreprises internationales (Siemens, BMW, SAP, etc.)</li>
                <li>Startups innovantes, particulièrement à Berlin</li>
                <li>Institutions de recherche</li>
                <li>Organisations internationales</li>
                <li>Secteur bancaire et financier</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IAESTE (Association internationale pour l'échange d'étudiants en formation technique)</li>
                <li>AIESEC Allemagne</li>
                <li>DAAD RISE (Research Internships in Science and Engineering)</li>
                <li>Programmes de stages des grandes entreprises allemandes</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  En Allemagne, les stages de plus de trois mois doivent être rémunérés au salaire minimum. Pour les stages obligatoires dans le cadre des études, un visa étudiant suffit généralement. Pour les autres stages, un visa de travail peut être nécessaire.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.daad.de/rise/en/" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair en Allemagne permet aux jeunes de vivre avec une famille allemande tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation mensuelle d'environ 280-380 € par mois</li>
                <li>Cours d'allemand financés partiellement</li>
                <li>30 heures de travail par semaine maximum</li>
                <li>1,5 jour de congé par semaine et 4 semaines de vacances payées par an</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: entre 18 et 26 ans</li>
                <li>Durée: 6 à 12 mois</li>
                <li>Connaissances de base en allemand (niveau A1 minimum)</li>
                <li>Expérience avec les enfants</li>
                <li>Visa au-pair spécifique</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair en Allemagne, vous devez d'abord trouver une famille d'accueil via une agence au-pair ou des plateformes en ligne. Une fois accepté, vous pourrez demander un visa au-pair avec l'aide de votre famille d'accueil.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.aupair-world.net/au-pair-programs/germany" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                L'Allemagne offre un environnement favorable aux affaires avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Une économie stable et puissante</li>
                <li>Un accès au marché européen</li>
                <li>Des infrastructures de qualité</li>
                <li>Un cadre juridique fiable</li>
                <li>Des programmes de soutien aux entrepreneurs</li>
                <li>Un écosystème d'innovation dynamique</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies vertes et énergies renouvelables</li>
                <li>Technologies de l'information et intelligence artificielle</li>
                <li>Industrie 4.0 et automatisation</li>
                <li>Biotechnologie et sciences de la vie</li>
                <li>Commerce électronique et services numériques</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Création d'Entreprise</h4>
                <p>
                  Pour créer une entreprise en Allemagne en tant que non-résident de l'UE, vous pouvez demander un visa d'entrepreneur. Vous devrez présenter un business plan viable, disposer de fonds suffisants et démontrer l'intérêt économique de votre projet pour l'Allemagne.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.gtai.de/gtai-en" target="_blank">
                  Informations sur l'Investissement en Allemagne
                </Link>
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section Ausbildung - Formation en alternance */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
                ⭐ Spécial Allemagne : L'Ausbildung
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Formation professionnelle en alternance
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Le système <span className="font-bold text-blue-600">Ausbildung</span> allemand est reconnu dans toute l'Europe comme le meilleur modèle de formation professionnelle. 
                Apprenez un métier concret, <span className="text-green-600 font-bold">soyez rémunéré pendant votre formation</span>, 
                et décrochez un <span className="text-green-600 font-bold">diplôme reconnu en Europe</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">100% Rémunéré</h3>
                  <p className="text-gray-600">
                    Toutes les formations en alternance sont payées dès le premier jour, de 800€ à 1.300€/mois selon le secteur
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">90% d'embauche</h3>
                  <p className="text-gray-600">
                    Plus de 9 apprentis sur 10 trouvent un emploi immédiatement après leur formation
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mx-auto mb-4">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Diplôme européen</h3>
                  <p className="text-gray-600">
                    Diplômes reconnus partout en Europe et valorisés internationalement
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
                Secteurs de formation disponibles
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-lg flex-shrink-0">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Santé et soins</h4>
                    <p className="text-sm text-gray-600">Infirmier, aide-soignant, assistant médical, assistant dentaire, assistant en pharmacie</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Techniques industrielles</h4>
                    <p className="text-sm text-gray-600">Électrotechnicien, mécanicien industriel, mécatronique</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg flex-shrink-0">
                    <Building className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Commerce et gestion</h4>
                    <p className="text-sm text-gray-600">Employé de commerce, comptable, banque/assurance, commerce de détail</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex-shrink-0">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Informatique</h4>
                    <p className="text-sm text-gray-600">Développeur logiciel, systèmes informatiques, cybersécurité</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex-shrink-0">
                    <Home className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Hôtellerie & Restauration</h4>
                    <p className="text-sm text-gray-600">Cuisinier, serveur, employé en hôtellerie, management hôtelier</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Logistique</h4>
                    <p className="text-sm text-gray-600">Logisticien, magasinier, supply chain, e-commerce</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-blue-900 mb-3 text-lg">💡 Le système dual : théorie + pratique</h4>
                <p className="text-gray-700 mb-4">
                  L'Ausbildung combine cours théoriques à l'école professionnelle (1-2 jours/semaine) et formation pratique en entreprise (3-4 jours/semaine). 
                  Vous apprenez un métier réel tout en étant payé, avec un diplôme reconnu à la clé.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Formation de 2 à 3,5 ans selon le métier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Salaire mensuel progressif (augmente chaque année)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Plus de 350 métiers accessibles en Ausbildung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Accompagnement complet par Aventures Sans Frontières</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                  <Link href="/ausbildung">
                    Découvrir toutes les formations en détail
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa and Immigration */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Visa et Immigration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Types de Visa</h3>
                <ul className="space-y-3">
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa Schengen (Type C):</span> Pour les séjours touristiques ou d'affaires de courte durée (jusqu'à 90 jours).
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa National (Type D):</span> Pour les séjours de plus de 90 jours (études, travail, regroupement familial).
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Carte Bleue Européenne:</span> Pour les travailleurs hautement qualifiés.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa Étudiant:</span> Pour les études dans une institution allemande.
                  </li>
                  <li>
                    <span className="font-bold">Visa Recherche d'Emploi:</span> Permet aux diplômés qualifiés de chercher un emploi en Allemagne pendant 6 mois.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Contactez l'ambassade ou le consulat d'Allemagne dans votre pays</li>
                  <li>Rassemblez les documents requis (varie selon le type de visa)</li>
                  <li>Prenez rendez-vous pour déposer votre demande</li>
                  <li>Soumettez votre demande et payez les frais</li>
                  <li>Attendez le traitement de votre demande</li>
                  <li>Récupérez votre visa une fois approuvé</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://www.auswaertiges-amt.de/en/visa-service" target="_blank">
                      Site Officiel d'Immigration
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Conseils Culturels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Langue</h3>
                <p className="mb-4">
                  L'allemand est la langue officielle, mais l'anglais est largement parlé dans les milieux professionnels et universitaires, surtout dans les grandes villes. Apprendre l'allemand est toutefois un atout majeur pour l'intégration.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Phrases utiles:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Guten Tag - Bonjour</li>
                    <li>Danke - Merci</li>
                    <li>Bitte - S'il vous plaît / De rien</li>
                    <li>Entschuldigung - Excusez-moi</li>
                    <li>Sprechen Sie Englisch? - Parlez-vous anglais?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>La ponctualité est extrêmement importante en Allemagne</li>
                  <li>Les salutations formelles sont de mise (poignée de main ferme)</li>
                  <li>Utilisez les titres et noms de famille jusqu'à ce qu'on vous invite à utiliser les prénoms</li>
                  <li>La communication est généralement directe et franche</li>
                  <li>Respectez les règles et l'ordre public</li>
                  <li>Le recyclage et la conscience environnementale sont très valorisés</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Le coût de la vie varie selon les villes (Munich et Francfort sont plus chères que Berlin)</li>
                  <li>Les transports publics sont excellents et ponctuels</li>
                  <li>Les magasins sont généralement fermés le dimanche</li>
                  <li>Le tri des déchets est obligatoire et réglementé</li>
                  <li>Le système de santé est de haute qualité</li>
                  <li>L'équilibre travail-vie personnelle est valorisé</li>
                  <li>Le paiement en espèces reste courant dans de nombreux endroits</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Ressources Utiles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Sites Officiels</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.auswaertiges-amt.de/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Ministère fédéral des Affaires étrangères
                    </a>
                  </li>
                  <li>
                    <a href="https://www.make-it-in-germany.com/fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Make it in Germany (portail officiel pour les travailleurs qualifiés)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.daad.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      DAAD (Office allemand d'échanges universitaires)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gtai.de/gtai-en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Germany Trade & Invest
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Communautés et Réseaux</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.internations.org/germany-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations Allemagne
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés en Allemagne</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/africansinberlin/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Africains à Berlin (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe communautaire pour les Africains vivant à Berlin</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/cities/de/berlin/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup Berlin
                    </a>
                    <p className="text-gray-600 text-sm">Groupes et événements locaux</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir l'Allemagne?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités en Allemagne et commencez votre aventure dans ce pays dynamique au cœur de l'Europe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contact">
                Nous Contacter
              </Link>
            </Button>
            <Button asChild className="bg-white text-primary hover:bg-gray-100">
              <Link href="/opportunites">
                Explorer les Types d'Opportunités
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}