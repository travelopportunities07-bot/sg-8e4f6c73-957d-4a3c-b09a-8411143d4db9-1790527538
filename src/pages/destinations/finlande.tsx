import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DestinationConsultation } from '@/components/destinations/DestinationConsultation';

export default function FinlandePage() {
  return (
    <Layout 
      title="Finlande | AfricaOpportunités"
      description="Découvrez les opportunités en Finlande pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1508592931388-95bc7b61033d" 
          alt="Finlande" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇫🇮 Finlande</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans le pays du bonheur, réputé pour son système éducatif d'excellence et sa qualité de vie exceptionnelle.
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
                La Finlande, située en Europe du Nord, est régulièrement classée parmi les pays les plus heureux du monde. Avec ses vastes forêts, ses milliers de lacs et ses aurores boréales, ce pays offre un cadre de vie exceptionnel alliant nature préservée et innovation technologique.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Reconnue pour son système éducatif d'excellence, la Finlande est également à la pointe dans les domaines des technologies propres, du design et des télécommunications. Le pays se distingue par son modèle social équitable, sa transparence gouvernementale et son engagement pour le développement durable.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, la Finlande offre des opportunités intéressantes dans l'éducation, la recherche, les technologies de l'information et l'ingénierie, avec une politique d'immigration favorable aux talents internationaux et un environnement multiculturel accueillant.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Helsinki
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langues officielles:</span> Finnois, Suédois
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 5,5 millions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Euro (€)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Continental froid avec quatre saisons distinctes
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Helsinki, Espoo, Tampere, Vantaa, Oulu
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités en Finlande</h2>
          
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
                La Finlande offre d'excellentes opportunités d'emploi pour les professionnels qualifiés, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies de l'information et développement logiciel</li>
                <li>Ingénierie et technologies propres</li>
                <li>Santé et biotechnologies</li>
                <li>Éducation et recherche</li>
                <li>Design et industries créatives</li>
                <li>Télécommunications</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler en Finlande en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'un permis de séjour pour travailleur</li>
                <li>D'une offre d'emploi d'un employeur finlandais</li>
                <li>De qualifications professionnelles reconnues</li>
                <li>De compétences linguistiques en anglais (le finnois est un atout mais pas toujours obligatoire dans certains secteurs)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Spécialistes et Professionnels</h4>
                <p>
                  La Finlande a mis en place un système de permis de séjour accéléré pour les spécialistes, chercheurs et professionnels hautement qualifiés. Ce processus peut être plus rapide que la procédure standard et offre des avantages supplémentaires.
                </p>
              </div>
              <Button asChild>
                <Link href="https://migri.fi/en/working-in-finland" target="_blank">
                  En Savoir Plus sur les Permis de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                La Finlande est mondialement reconnue pour son système éducatif d'excellence, offrant:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Universités et écoles polytechniques de renommée mondiale</li>
                <li>Plus de 400 programmes d'études en anglais</li>
                <li>Frais de scolarité abordables ou inexistants pour certains programmes</li>
                <li>Approche pédagogique innovante et centrée sur l'étudiant</li>
                <li>Infrastructures et équipements de pointe</li>
                <li>Possibilité de travailler pendant et après les études</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université d'Helsinki</li>
                <li>Université Aalto</li>
                <li>Université de Tampere</li>
                <li>Université de Turku</li>
                <li>Université de Jyväskylä</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants africains:
                </p>
                <ul className="list-disc pl-6">
                  <li>Bourses des universités finlandaises</li>
                  <li>Programme de bourses EDUFI</li>
                  <li>Bourses Erasmus Mundus</li>
                  <li>Bourses de la Fondation finlandaise pour la culture</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://www.studyinfinland.fi/" target="_blank">
                  Explorer les Opportunités d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                La Finlande offre une expérience touristique unique avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Les aurores boréales en Laponie</li>
                <li>Des milliers de lacs et d'îles</li>
                <li>Helsinki, capitale du design</li>
                <li>Le village du Père Noël à Rovaniemi</li>
                <li>Les saunas traditionnels finlandais</li>
                <li>Les activités hivernales comme le ski, les safaris en traîneau à chiens</li>
                <li>La nature préservée et les parcs nationaux</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa Schengen pour visiter la Finlande:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa de court séjour (type C) valable jusqu'à 90 jours</li>
                <li>Documents requis: passeport valide, preuve d'hébergement, assurance voyage, itinéraire, etc.</li>
                <li>Demande à soumettre à l'ambassade ou au consulat de Finlande dans votre pays</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  Juin à août pour l'été et le soleil de minuit, décembre à mars pour les activités hivernales et les aurores boréales, septembre pour les couleurs automnales.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.visitfinland.com/fr/" target="_blank">
                  Découvrir la Finlande Touristique
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                La Finlande offre diverses possibilités de volontariat pour les résidents africains:
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
                <li>Allianssi (Conseil finlandais de la jeunesse)</li>
                <li>Croix-Rouge finlandaise</li>
                <li>KVT Finlande (Service civil international)</li>
                <li>WWF Finlande</li>
                <li>Kepa (Plateforme finlandaise des ONG)</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat en Finlande, vous aurez généralement besoin d'un visa spécifique. Certains programmes comme le SVE facilitent les démarches administratives et peuvent couvrir les frais de voyage, d'hébergement et offrir une allocation mensuelle.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.alli.fi/en/services/international-activities" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages en Finlande offrent une excellente expérience professionnelle dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Entreprises technologiques (Nokia, Supercell, etc.)</li>
                <li>Startups innovantes</li>
                <li>Institutions de recherche</li>
                <li>Organisations internationales</li>
                <li>Secteur du design et des industries créatives</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>CIMO (Centre pour la mobilité internationale)</li>
                <li>AIESEC Finlande</li>
                <li>Programmes de stages des universités finlandaises</li>
                <li>Stages dans les entreprises finlandaises</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  En Finlande, les stages sont généralement rémunérés, bien que le montant puisse varier selon le secteur et l'entreprise. Pour les stages obligatoires dans le cadre des études, un visa étudiant suffit généralement. Pour les autres stages, un permis de séjour pour stagiaire peut être nécessaire.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.businessfinland.fi/en/do-business-with-finland/work-in-finland/internship" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair en Finlande permet aux jeunes de vivre avec une famille finlandaise tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation mensuelle d'environ 280-350 € par mois</li>
                <li>Possibilité de suivre des cours de finnois ou de suédois</li>
                <li>30 heures de travail par semaine maximum</li>
                <li>1-2 jours de congé par semaine et vacances payées</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: entre 18 et 30 ans</li>
                <li>Durée: 6 à 12 mois</li>
                <li>Connaissances de base en anglais (le finnois n'est pas obligatoire)</li>
                <li>Expérience avec les enfants</li>
                <li>Permis de séjour pour au-pair</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair en Finlande, vous devez d'abord trouver une famille d'accueil via une agence au-pair ou des plateformes en ligne. Une fois accepté, vous pourrez demander un permis de séjour pour au-pair avec l'aide de votre famille d'accueil.
                </p>
              </div>
              <Button asChild>
                <Link href="https://migri.fi/en/au-pair" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                La Finlande offre un environnement favorable aux affaires avec:
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
                <li>Technologies propres et économie circulaire</li>
                <li>Technologies de l'information et intelligence artificielle</li>
                <li>Santé et biotechnologies</li>
                <li>Design et industries créatives</li>
                <li>Solutions pour l'Arctique</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Création d'Entreprise</h4>
                <p>
                  Pour créer une entreprise en Finlande en tant que non-résident de l'UE, vous pouvez demander un permis de séjour pour entrepreneur. Vous devrez présenter un business plan viable, disposer de fonds suffisants et démontrer le potentiel de votre entreprise.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.businessfinland.fi/en/do-business-with-finland/startup-in-finland/startup-permit" target="_blank">
                  Informations sur l'Entrepreneuriat en Finlande
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
                    <span className="font-bold">Permis de séjour pour travailleur:</span> Pour les personnes ayant une offre d'emploi en Finlande.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de séjour pour étudiant:</span> Pour les études dans une institution finlandaise.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de séjour pour entrepreneur:</span> Pour créer ou diriger une entreprise en Finlande.
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
                  <li>Vérifiez le type de permis dont vous avez besoin sur le site de l'Office finlandais de l'immigration</li>
                  <li>Rassemblez les documents requis (varie selon le type de permis)</li>
                  <li>Soumettez votre demande en ligne via le service Enter Finland</li>
                  <li>Visitez l'ambassade ou le consulat de Finlande pour l'identification</li>
                  <li>Payez les frais de traitement</li>
                  <li>Attendez la décision (les délais varient selon le type de permis)</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://migri.fi/en/home" target="_blank">
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
                  Le finnois et le suédois sont les langues officielles, mais l'anglais est largement parlé, surtout dans les milieux professionnels et universitaires. Apprendre quelques mots de finnois sera apprécié, même si ce n'est pas nécessaire pour la vie quotidienne.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Phrases utiles:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Hei - Bonjour</li>
                    <li>Kiitos - Merci</li>
                    <li>Ole hyvä - S'il vous plaît / De rien</li>
                    <li>Anteeksi - Excusez-moi</li>
                    <li>Puhutko englantia? - Parlez-vous anglais?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>Les Finlandais apprécient la ponctualité et l'honnêteté</li>
                  <li>Le respect de l'espace personnel est important</li>
                  <li>La communication est directe et sans détour</li>
                  <li>Les silences dans la conversation sont normaux et confortables</li>
                  <li>Le sauna est une tradition culturelle importante</li>
                  <li>L'égalité et le respect mutuel sont des valeurs fondamentales</li>
                  <li>La modestie est appréciée, évitez de vous vanter</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Le coût de la vie est élevé, surtout à Helsinki</li>
                  <li>Les transports publics sont efficaces et ponctuels</li>
                  <li>Le vélo est un moyen de transport populaire, même en hiver</li>
                  <li>Les hivers sont longs et sombres, mais les étés offrent presque 24h de lumière</li>
                  <li>Le système de santé est de haute qualité</li>
                  <li>L'équilibre travail-vie personnelle est très valorisé</li>
                  <li>La nature joue un rôle important dans la vie quotidienne</li>
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
                    <a href="https://migri.fi/en/home" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Office finlandais de l'immigration
                    </a>
                  </li>
                  <li>
                    <a href="https://www.infofinland.fi/fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InfoFinland (informations sur la vie en Finlande en plusieurs langues)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.studyinfinland.fi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Study in Finland
                    </a>
                  </li>
                  <li>
                    <a href="https://www.businessfinland.fi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Business Finland
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
                    <a href="https://www.internations.org/helsinki-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations Helsinki
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés en Finlande</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/africansinfinland/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Africains en Finlande (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe communautaire pour les Africains vivant en Finlande</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/cities/fi/helsinki/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup Helsinki
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
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir la Finlande?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités en Finlande et commencez votre aventure dans ce pays innovant et accueillant du Nord de l'Europe.
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