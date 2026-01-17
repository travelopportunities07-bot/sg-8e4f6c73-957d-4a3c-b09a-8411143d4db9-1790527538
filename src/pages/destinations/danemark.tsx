
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DanemarkPage() {
  return (
    <Layout 
      title="Danemark | AfricaOpportunités"
      description="Découvrez les opportunités au Danemark pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc" 
          alt="Danemark" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇩🇰 Danemark</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans ce pays scandinave réputé pour sa qualité de vie exceptionnelle, son innovation et son modèle social équitable.
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
                Le Danemark, situé en Europe du Nord, est un pays scandinave reconnu pour son niveau de vie élevé, son système social développé et son engagement envers le développement durable. Avec ses côtes pittoresques, ses villes historiques et son design innovant, le Danemark offre un cadre de vie équilibré entre tradition et modernité.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Le pays est à la pointe dans les domaines des énergies renouvelables, des technologies propres, du design et de la biotechnologie. Le modèle danois de "flexicurité" combine flexibilité du marché du travail et sécurité sociale, créant un environnement favorable tant pour les entreprises que pour les travailleurs.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, le Danemark présente des opportunités intéressantes dans l'éducation, la recherche, les technologies vertes et la santé, avec une politique d'immigration ciblée sur les talents internationaux et un environnement multiculturel, particulièrement dans les grandes villes comme Copenhague.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Copenhague
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langue officielle:</span> Danois
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 5,8 millions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Couronne danoise (DKK)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Tempéré océanique avec quatre saisons distinctes
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Copenhague, Aarhus, Odense, Aalborg
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités au Danemark</h2>
          
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
                Le Danemark offre d'excellentes opportunités d'emploi pour les professionnels qualifiés, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies vertes et énergies renouvelables</li>
                <li>Technologies de l'information et développement logiciel</li>
                <li>Biotechnologie et sciences de la vie</li>
                <li>Ingénierie et design</li>
                <li>Santé et recherche médicale</li>
                <li>Éducation et recherche</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler au Danemark en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'un permis de travail et de séjour</li>
                <li>D'une offre d'emploi d'un employeur danois</li>
                <li>De qualifications professionnelles reconnues</li>
                <li>De compétences linguistiques en anglais (le danois est un atout mais pas toujours obligatoire)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Fast-Track Scheme</h4>
                <p>
                  Le Danemark a mis en place un système accéléré pour les professionnels hautement qualifiés, les chercheurs et les employés de certaines entreprises certifiées. Ce processus peut être plus rapide que la procédure standard et offre des avantages supplémentaires.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work" target="_blank">
                  En Savoir Plus sur les Permis de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                Le Danemark est reconnu pour son système éducatif de qualité, offrant:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Universités et écoles supérieures de renommée mondiale</li>
                <li>Plus de 700 programmes d'études en anglais</li>
                <li>Approche pédagogique innovante et participative</li>
                <li>Infrastructures et équipements de pointe</li>
                <li>Liens étroits avec l'industrie et le monde professionnel</li>
                <li>Possibilité de travailler pendant et après les études</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université de Copenhague</li>
                <li>Université technique du Danemark (DTU)</li>
                <li>Université d'Aarhus</li>
                <li>Copenhagen Business School</li>
                <li>IT University of Copenhagen</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants africains:
                </p>
                <ul className="list-disc pl-6">
                  <li>Bourses du gouvernement danois (Danida Fellowship Centre)</li>
                  <li>Bourses des universités danoises</li>
                  <li>Bourses Erasmus Mundus</li>
                  <li>Bourses du Conseil nordique</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://studyindenmark.dk/" target="_blank">
                  Explorer les Opportunités d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                Le Danemark offre une expérience touristique riche et variée avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Copenhague, capitale du design et de l'architecture moderne</li>
                <li>Les châteaux historiques comme Kronborg (le château d'Hamlet)</li>
                <li>Le parc d'attractions Tivoli, l'un des plus anciens du monde</li>
                <li>Les plages de sable blanc et les falaises de craie</li>
                <li>Les villages pittoresques et l'architecture traditionnelle</li>
                <li>La gastronomie nordique innovante</li>
                <li>Le concept de "hygge" danois (art de vivre confortable et convivial)</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa Schengen pour visiter le Danemark:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa de court séjour (type C) valable jusqu'à 90 jours</li>
                <li>Documents requis: passeport valide, preuve d'hébergement, assurance voyage, itinéraire, etc.</li>
                <li>Demande à soumettre à l'ambassade ou au consulat du Danemark dans votre pays</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  Mai à septembre pour le climat le plus clément, décembre pour les marchés de Noël et l'ambiance festive, avril-mai pour les jardins en fleurs.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.visitdenmark.com/denmark" target="_blank">
                  Découvrir le Danemark Touristique
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                Le Danemark offre diverses possibilités de volontariat pour les résidents africains:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Service volontaire européen (SVE)</li>
                <li>Corps européen de solidarité</li>
                <li>Programmes de volontariat environnemental</li>
                <li>Volontariat dans des organisations culturelles et sociales</li>
                <li>Projets d'intégration des immigrants</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Organisations Principales</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>MS Action Aid Denmark</li>
                <li>Croix-Rouge danoise</li>
                <li>Mellemfolkeligt Samvirke</li>
                <li>Danish Refugee Council</li>
                <li>YMCA/YWCA Denmark</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat au Danemark, vous aurez généralement besoin d'un visa spécifique. Certains programmes comme le SVE facilitent les démarches administratives et peuvent couvrir les frais de voyage, d'hébergement et offrir une allocation mensuelle.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.volunteering.dk/" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages au Danemark offrent une excellente expérience professionnelle dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Entreprises technologiques et startups innovantes</li>
                <li>Entreprises d'énergies renouvelables</li>
                <li>Institutions de recherche</li>
                <li>Organisations internationales</li>
                <li>Secteur du design et de l'architecture</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IAESTE Danemark</li>
                <li>AIESEC Danemark</li>
                <li>Programmes de stages des universités danoises</li>
                <li>Stages dans les entreprises danoises</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  Au Danemark, les stages sont généralement rémunérés, avec un salaire minimum défini par les conventions collectives. Pour les stages obligatoires dans le cadre des études, un visa étudiant suffit généralement. Pour les autres stages, un permis de travail peut être nécessaire.
                </p>
              </div>
              <Button asChild>
                <Link href="https://graduateland.com/da/jobs/denmark" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair au Danemark permet aux jeunes de vivre avec une famille danoise tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation mensuelle d'environ 4.350 DKK (environ 580 €)</li>
                <li>Possibilité de suivre des cours de danois</li>
                <li>30 heures de travail par semaine maximum</li>
                <li>1,5 jour de congé par semaine et vacances payées</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: entre 18 et 29 ans</li>
                <li>Durée: 1 à 2 ans</li>
                <li>Niveau d'anglais intermédiaire (le danois n'est pas obligatoire)</li>
                <li>Expérience avec les enfants</li>
                <li>Permis de séjour pour au-pair</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair au Danemark, vous devez d'abord trouver une famille d'accueil via une agence au-pair ou des plateformes en ligne. Une fois accepté, vous pourrez demander un permis de séjour pour au-pair avec l'aide de votre famille d'accueil.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.nyidanmark.dk/en-GB/You-want-to-apply/Au-pair" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                Le Danemark offre un environnement favorable aux affaires avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Une économie stable et innovante</li>
                <li>Un accès au marché nordique et européen</li>
                <li>Des infrastructures de qualité</li>
                <li>Un cadre juridique transparent</li>
                <li>Des programmes de soutien aux entrepreneurs</li>
                <li>Un écosystème de startups dynamique</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies vertes et énergies renouvelables</li>
                <li>Technologies de l'information et digitalisation</li>
                <li>Sciences de la vie et biotechnologies</li>
                <li>Design et industries créatives</li>
                <li>Agroalimentaire</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Création d'Entreprise</h4>
                <p>
                  Pour créer une entreprise au Danemark en tant que non-résident de l'UE, vous pouvez demander un permis de séjour pour entrepreneur. Vous devrez présenter un business plan viable, disposer de fonds suffisants et démontrer le potentiel de votre entreprise.
                </p>
              </div>
              <Button asChild>
                <Link href="https://investindk.com/" target="_blank">
                  Informations sur l'Entrepreneuriat au Danemark
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
                <h3 className="text-xl font-bold mb-4">Types de Permis de Séjour</h3>
                <ul className="space-y-3">
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa Schengen (Type C):</span> Pour les séjours touristiques ou d'affaires de courte durée (jusqu'à 90 jours).
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de séjour pour travailleur:</span> Pour les personnes ayant une offre d'emploi au Danemark.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de séjour pour étudiant:</span> Pour les études dans une institution danoise.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de séjour pour entrepreneur:</span> Pour créer ou diriger une entreprise au Danemark.
                  </li>
                  <li>
                    <span className="font-bold">Permis de séjour pour chercheur:</span> Pour les activités de recherche scientifique.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Vérifiez le type de permis dont vous avez besoin sur le site de l'Office danois de l'immigration</li>
                  <li>Rassemblez les documents requis (varie selon le type de permis)</li>
                  <li>Soumettez votre demande en ligne ou à l'ambassade/consulat du Danemark</li>
                  <li>Payez les frais de traitement</li>
                  <li>Attendez la décision (les délais varient selon le type de permis)</li>
                  <li>Une fois approuvé, vous recevrez votre permis de séjour</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://www.nyidanmark.dk/en-GB" target="_blank">
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
                  Le danois est la langue officielle, mais l'anglais est très largement parlé, surtout dans les milieux professionnels et universitaires. Apprendre quelques mots de danois sera apprécié, même si ce n'est pas nécessaire pour la vie quotidienne.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Phrases utiles:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Hej - Bonjour</li>
                    <li>Tak - Merci</li>
                    <li>Undskyld - Excusez-moi</li>
                    <li>Ja/Nej - Oui/Non</li>
                    <li>Taler du engelsk? - Parlez-vous anglais?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>Les Danois apprécient la ponctualité et l'honnêteté</li>
                  <li>L'égalité et le respect mutuel sont des valeurs fondamentales</li>
                  <li>La communication est directe et sans détour</li>
                  <li>Le concept de "hygge" (confort, convivialité) est important</li>
                  <li>La modestie est appréciée, évitez de vous vanter</li>
                  <li>Le respect de l'environnement est très valorisé</li>
                  <li>L'équilibre travail-vie personnelle est primordial</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Le coût de la vie est élevé, surtout à Copenhague</li>
                  <li>Le vélo est un moyen de transport très populaire</li>
                  <li>Les transports publics sont efficaces et ponctuels</li>
                  <li>Le système de santé est de haute qualité</li>
                  <li>Les hivers sont froids et sombres, les étés doux et lumineux</li>
                  <li>Les magasins ferment généralement tôt (17h-18h)</li>
                  <li>Le système de recyclage est très développé</li>
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
                    <a href="https://www.nyidanmark.dk/en-GB" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Office danois de l'immigration
                    </a>
                  </li>
                  <li>
                    <a href="https://lifeindenmark.borger.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Life in Denmark (informations sur la vie au Danemark)
                    </a>
                  </li>
                  <li>
                    <a href="https://studyindenmark.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Study in Denmark
                    </a>
                  </li>
                  <li>
                    <a href="https://investindk.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Invest in Denmark
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
                    <a href="https://www.internations.org/copenhagen-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations Copenhagen
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés au Danemark</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/africansindenmark/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Africains au Danemark (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe communautaire pour les Africains vivant au Danemark</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/cities/dk/copenhagen/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup Copenhagen
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
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir le Danemark?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités au Danemark et commencez votre aventure dans ce pays innovant et accueillant de Scandinavie.
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
