
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LituaniePage() {
  return (
    <Layout 
      title="Lituanie | AfricaOpportunités"
      description="Découvrez les opportunités en Lituanie pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1589830400998-a6c6774b5eaf" 
          alt="Lituanie" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇱🇹 Lituanie</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans ce joyau des pays baltes, alliant tradition et modernité au cœur de l'Europe du Nord.
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
                La Lituanie, située sur la côte est de la mer Baltique, est le plus grand et le plus peuplé des trois États baltes. Membre de l'Union européenne et de l'OTAN depuis 2004, ce pays a connu une transformation remarquable depuis son indépendance de l'Union soviétique en 1990.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Avec une économie en pleine croissance, la Lituanie s'est positionnée comme un hub technologique émergent en Europe, notamment dans les secteurs des fintech, des sciences de la vie et des technologies de l'information. Sa capitale, Vilnius, est reconnue pour son centre historique classé au patrimoine mondial de l'UNESCO et son écosystème de startups dynamique.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, la Lituanie offre un environnement accueillant avec un coût de la vie abordable par rapport à d'autres pays européens, un système éducatif de qualité et des opportunités croissantes dans les secteurs innovants, le tout dans un cadre riche en histoire et en culture.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Vilnius
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langue officielle:</span> Lituanien
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 2,8 millions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Euro (€)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Continental tempéré avec quatre saisons distinctes
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Vilnius, Kaunas, Klaipėda, Šiauliai, Panevėžys
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités en Lituanie</h2>
          
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
                La Lituanie offre des opportunités d'emploi croissantes, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies de l'information et développement logiciel</li>
                <li>Services financiers et fintech</li>
                <li>Sciences de la vie et biotechnologie</li>
                <li>Centres de services partagés internationaux</li>
                <li>Industrie manufacturière</li>
                <li>Logistique et transport</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler en Lituanie en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'un permis de travail ou d'une Carte bleue européenne</li>
                <li>D'une offre d'emploi d'un employeur lituanien</li>
                <li>De qualifications professionnelles reconnues</li>
                <li>De compétences linguistiques (anglais courant, le lituanien est un atout)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Carte Bleue Européenne</h4>
                <p>
                  Ce permis de travail est destiné aux travailleurs hautement qualifiés non-européens. Pour être éligible, vous devez avoir un diplôme universitaire, une offre d'emploi avec un salaire au moins 1,5 fois supérieur au salaire moyen en Lituanie.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.migracija.lt/en/home" target="_blank">
                  En Savoir Plus sur les Permis de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                La Lituanie propose un système éducatif de qualité avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Universités proposant des programmes en anglais</li>
                <li>Frais de scolarité compétitifs par rapport à d'autres pays européens</li>
                <li>Diplômes reconnus dans toute l'Union européenne</li>
                <li>Environnement d'apprentissage moderne et innovant</li>
                <li>Possibilité de travailler pendant et après les études</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université de Vilnius</li>
                <li>Université technique de Gediminas à Vilnius</li>
                <li>Université de Vytautas Magnus</li>
                <li>Université de technologie de Kaunas</li>
                <li>Université des sciences de la santé de Lituanie</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants internationaux:
                </p>
                <ul className="list-disc pl-6">
                  <li>Bourses du gouvernement lituanien</li>
                  <li>Programme Erasmus+</li>
                  <li>Bourses spécifiques aux universités</li>
                  <li>Bourses de la Fondation Education Exchanges Support</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://studyin.lt/" target="_blank">
                  Explorer les Opportunités d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                La Lituanie offre une expérience touristique riche et variée:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Centres historiques de Vilnius et Kaunas (patrimoine UNESCO)</li>
                <li>L'isthme de Courlande avec ses dunes de sable spectaculaires</li>
                <li>La Colline des Croix, site de pèlerinage unique</li>
                <li>Lacs et parcs nationaux préservés</li>
                <li>Stations balnéaires sur la côte baltique (Palanga, Nida)</li>
                <li>Châteaux et manoirs historiques</li>
                <li>Gastronomie traditionnelle et artisanat local</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa Schengen pour visiter la Lituanie:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa de court séjour (type C) valable jusqu'à 90 jours</li>
                <li>Documents requis: passeport valide, preuve d'hébergement, assurance voyage, itinéraire, etc.</li>
                <li>Demande à soumettre à l'ambassade ou au consulat de Lituanie dans votre pays</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  Mai à septembre pour le climat doux et les festivals d'été, décembre pour les marchés de Noël, février pour le festival des lumières de Vilnius.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.lithuania.travel/en/" target="_blank">
                  Découvrir la Lituanie Touristique
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                La Lituanie offre diverses possibilités de volontariat:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Service volontaire européen (SVE)</li>
                <li>Corps européen de solidarité</li>
                <li>Projets environnementaux et de conservation</li>
                <li>Soutien aux réfugiés et aux personnes vulnérables</li>
                <li>Événements culturels et festivals</li>
                <li>Projets éducatifs et linguistiques</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Organisations Principales</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Agence nationale lituanienne pour les programmes Erasmus+</li>
                <li>Croix-Rouge lituanienne</li>
                <li>Food Bank Lithuania</li>
                <li>Actio Catholica Patria</li>
                <li>Centre de volontariat de Vilnius</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat en Lituanie, vous aurez généralement besoin d'un visa approprié. Les programmes comme le SVE ou le Corps européen de solidarité facilitent les démarches administratives et peuvent couvrir les frais de voyage, d'hébergement et offrir une allocation mensuelle.
                </p>
              </div>
              <Button asChild>
                <Link href="https://europa.eu/youth/solidarity_fr" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages en Lituanie offrent une expérience professionnelle précieuse dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Entreprises technologiques et startups</li>
                <li>Institutions financières et fintech</li>
                <li>Centres de services partagés internationaux</li>
                <li>Organisations non gouvernementales</li>
                <li>Institutions culturelles et médias</li>
                <li>Entreprises de biotechnologie et sciences de la vie</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IAESTE Lituanie (Association internationale pour l'échange d'étudiants en formation technique)</li>
                <li>AIESEC Lituanie</li>
                <li>Programme Erasmus+ stages</li>
                <li>Stages dans les entreprises internationales implantées en Lituanie</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  Les stages en Lituanie peuvent être rémunérés ou non, selon l'organisation et le secteur. Pour les stages liés aux études, un visa étudiant peut suffire. Pour les autres stages, un permis de travail peut être nécessaire. La maîtrise de l'anglais est généralement requise.
                </p>
              </div>
              <Button asChild>
                <Link href="https://erasmusintern.org/traineeships?f%5B0%5D=country%3ALT" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair en Lituanie permet aux jeunes de vivre avec une famille lituanienne tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation mensuelle (pocket money)</li>
                <li>Possibilité de suivre des cours de lituanien</li>
                <li>25-30 heures de travail par semaine maximum</li>
                <li>Au moins un jour et demi de congé par semaine</li>
                <li>Opportunité d'immersion culturelle</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: entre 18 et 30 ans</li>
                <li>Durée: généralement 6 à 12 mois</li>
                <li>Connaissances de base en anglais</li>
                <li>Expérience avec les enfants</li>
                <li>Visa approprié (généralement un visa national de type D)</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair en Lituanie, vous devez d'abord trouver une famille d'accueil via une agence au-pair ou des plateformes en ligne. Une fois accepté, vous pourrez demander un visa avec l'aide de votre famille d'accueil.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.aupair.com/en/p-au-pair-lithuania.php" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                La Lituanie offre un environnement favorable aux affaires avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Procédures simplifiées pour la création d'entreprise</li>
                <li>Fiscalité avantageuse (taux d'imposition des sociétés de 15%)</li>
                <li>Accès au marché européen</li>
                <li>Infrastructure numérique avancée</li>
                <li>Main-d'œuvre qualifiée et multilingue</li>
                <li>Coûts opérationnels compétitifs</li>
                <li>Soutien aux startups et à l'innovation</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies financières (fintech)</li>
                <li>Technologies de l'information et services numériques</li>
                <li>Sciences de la vie et biotechnologie</li>
                <li>Fabrication de haute technologie</li>
                <li>Énergies renouvelables</li>
                <li>Logistique et transport</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Création d'Entreprise</h4>
                <p>
                  Pour créer une entreprise en Lituanie en tant que non-résident de l'UE, vous pouvez demander un visa d'entrepreneur ou un permis de séjour temporaire pour activité commerciale. Invest Lithuania et Enterprise Lithuania offrent des informations et un soutien pour la création d'entreprise.
                </p>
              </div>
              <Button asChild>
                <Link href="https://investlithuania.com/" target="_blank">
                  Informations sur l'Investissement en Lituanie
                </Link>
              </Button>
            </TabsContent>
          </Tabs>
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
                    <span className="font-bold">Permis de Séjour Temporaire:</span> Pour les études, le travail, les affaires ou le regroupement familial.
                  </li>
                  <li>
                    <span className="font-bold">Permis de Séjour Permanent:</span> Après avoir vécu légalement en Lituanie pendant 5 ans.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Contactez l'ambassade ou le consulat de Lituanie dans votre pays</li>
                  <li>Rassemblez les documents requis (varie selon le type de visa)</li>
                  <li>Soumettez votre demande de visa</li>
                  <li>Payez les frais de demande</li>
                  <li>Attendez le traitement de votre demande</li>
                  <li>Une fois en Lituanie, enregistrez-vous auprès du Département des migrations pour les séjours de longue durée</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://www.migracija.lt/en/home" target="_blank">
                      Département des Migrations de Lituanie
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
                  Le lituanien est la langue officielle, mais l'anglais est largement parlé dans les milieux professionnels et par les jeunes, surtout dans les grandes villes. Le russe est également compris par une partie de la population.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Phrases utiles:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Labas - Bonjour</li>
                    <li>Ačiū - Merci</li>
                    <li>Prašau - S'il vous plaît / De rien</li>
                    <li>Atsiprašau - Excusez-moi</li>
                    <li>Ar kalbate angliškai? - Parlez-vous anglais?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>Les Lituaniens peuvent sembler réservés au premier abord, mais sont chaleureux une fois la glace brisée</li>
                  <li>La ponctualité est appréciée</li>
                  <li>Les poignées de main sont la forme de salutation standard</li>
                  <li>Le contact visuel direct est important lors des conversations</li>
                  <li>Les Lituaniens sont fiers de leur culture et de leur histoire</li>
                  <li>Le respect des traditions est important, notamment lors des fêtes nationales</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Le coût de la vie est relativement abordable par rapport à d'autres pays européens</li>
                  <li>Les transports publics sont bien développés dans les grandes villes</li>
                  <li>Le climat présente quatre saisons distinctes, avec des hivers froids</li>
                  <li>La cuisine lituanienne est basée sur des produits comme les pommes de terre, la viande, les produits laitiers et les céréales</li>
                  <li>Les saunas (pirtis) font partie de la culture traditionnelle</li>
                  <li>La nature est très valorisée, avec de nombreux parcs et espaces verts</li>
                  <li>Le basketball est le sport national et une véritable passion</li>
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
                    <a href="https://www.migracija.lt/en/home" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Département des Migrations de Lituanie
                    </a>
                  </li>
                  <li>
                    <a href="https://investlithuania.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Invest Lithuania
                    </a>
                  </li>
                  <li>
                    <a href="https://studyin.lt/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Study in Lithuania
                    </a>
                  </li>
                  <li>
                    <a href="https://www.lithuania.travel/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Lithuania Travel
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
                    <a href="https://www.internations.org/vilnius-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations Vilnius
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés à Vilnius</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/internationalstudentsinlithuania/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      International Students in Lithuania (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe pour les étudiants internationaux</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/cities/lt/vilnius/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup Vilnius
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
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir la Lituanie?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités en Lituanie et commencez votre aventure dans ce joyau des pays baltes, riche en culture et en innovation.
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
