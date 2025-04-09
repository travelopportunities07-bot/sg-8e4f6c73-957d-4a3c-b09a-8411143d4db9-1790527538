
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EstoniePage() {
  return (
    <Layout 
      title="Estonie | AfricaOpportunités"
      description="Découvrez les opportunités en Estonie pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1541336744128-c4b211d13087" 
          alt="Estonie" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇪🇪 Estonie</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans ce pays balte pionnier du numérique, alliant innovation technologique et patrimoine médiéval préservé.
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
                L'Estonie, située en Europe du Nord-Est, est un pays balte reconnu comme l'un des plus avancés numériquement au monde. Avec son programme e-Residency, son administration électronique et son écosystème de startups florissant, l'Estonie s'est positionnée comme un leader de l'innovation technologique.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Malgré sa petite taille, l'Estonie offre un mélange unique de modernité numérique et de patrimoine médiéval préservé, notamment dans sa capitale Tallinn. Le pays se distingue par son environnement des affaires favorable, sa fiscalité attractive et son engagement envers l'économie numérique.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, l'Estonie présente des opportunités intéressantes dans les technologies de l'information, la cybersécurité, l'entrepreneuriat numérique et l'éducation, avec une politique d'immigration favorable aux talents internationaux et un environnement propice à l'innovation.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Tallinn
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langue officielle:</span> Estonien
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 1,3 million
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Euro (€)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Continental tempéré avec quatre saisons distinctes
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Tallinn, Tartu, Narva, Pärnu
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités en Estonie</h2>
          
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
                L'Estonie offre d'excellentes opportunités d'emploi pour les professionnels qualifiés, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies de l'information et développement logiciel</li>
                <li>Cybersécurité et blockchain</li>
                <li>Startups et entreprises technologiques</li>
                <li>E-commerce et services numériques</li>
                <li>Éducation et recherche</li>
                <li>Services partagés et centres d'excellence</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler en Estonie en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'un permis de séjour temporaire pour travail</li>
                <li>D'une offre d'emploi d'un employeur estonien</li>
                <li>De qualifications professionnelles reconnues</li>
                <li>De compétences linguistiques en anglais (l'estonien est un atout mais pas obligatoire dans le secteur technologique)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Programme de Visa Startup</h4>
                <p>
                  L'Estonie propose un programme de visa startup qui permet aux entrepreneurs non-européens de s'installer en Estonie pour développer une startup innovante. Ce visa facilite l'accès à l'écosystème entrepreneurial estonien et peut mener à une résidence de longue durée.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.workinestonia.com/" target="_blank">
                  En Savoir Plus sur les Opportunités de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                L'Estonie offre un système éducatif de qualité, reconnu pour son approche innovante:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Universités proposant plus de 100 programmes en anglais</li>
                <li>Frais de scolarité compétitifs par rapport à d'autres pays européens</li>
                <li>Approche pédagogique moderne et numérique</li>
                <li>Infrastructures et équipements de pointe</li>
                <li>Liens étroits avec l'industrie technologique</li>
                <li>Possibilité de travailler pendant et après les études</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université de Tartu</li>
                <li>Université de technologie de Tallinn</li>
                <li>Université de Tallinn</li>
                <li>Estonian Business School</li>
                <li>IT College</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants internationaux:
                </p>
                <ul className="list-disc pl-6">
                  <li>Bourses Dora Plus</li>
                  <li>Bourses des universités estoniennes</li>
                  <li>Bourses Erasmus+</li>
                  <li>Bourses du gouvernement estonien</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://studyinestonia.ee/" target="_blank">
                  Explorer les Opportunités d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                L'Estonie offre une expérience touristique riche et variée avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>La vieille ville médiévale de Tallinn, classée au patrimoine mondial de l'UNESCO</li>
                <li>Les parcs nationaux et les zones naturelles préservées</li>
                <li>Les îles de la mer Baltique comme Saaremaa et Hiiumaa</li>
                <li>Les stations balnéaires comme Pärnu</li>
                <li>La ville universitaire de Tartu</li>
                <li>Les manoirs historiques et les châteaux</li>
                <li>Les saunas traditionnels estoniens</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa Schengen pour visiter l'Estonie:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa de court séjour (type C) valable jusqu'à 90 jours</li>
                <li>Documents requis: passeport valide, preuve d'hébergement, assurance voyage, itinéraire, etc.</li>
                <li>Demande à soumettre à l'ambassade ou au consulat d'Estonie dans votre pays</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  Mai à septembre pour le climat le plus clément, décembre pour les marchés de Noël et l'ambiance hivernale, février pour les activités de neige.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.visitestonia.com/en" target="_blank">
                  Découvrir l'Estonie Touristique
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                L'Estonie offre diverses possibilités de volontariat pour les résidents africains:
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
                <li>Estonian National Youth Council</li>
                <li>Volunteer Development Estonia</li>
                <li>Estonian Fund for Nature</li>
                <li>AIESEC Estonia</li>
                <li>Mondo (ONG estonienne de développement)</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat en Estonie, vous aurez généralement besoin d'un visa spécifique. Certains programmes comme le SVE facilitent les démarches administratives et peuvent couvrir les frais de voyage, d'hébergement et offrir une allocation mensuelle.
                </p>
              </div>
              <Button asChild>
                <Link href="https://vabatahtlikud.ee/en/" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages en Estonie offrent une excellente expérience professionnelle dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Entreprises technologiques (Skype, Transferwise, Bolt, etc.)</li>
                <li>Startups innovantes</li>
                <li>Institutions de recherche</li>
                <li>Organisations internationales</li>
                <li>Agences gouvernementales numériques</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>AIESEC Estonia</li>
                <li>Erasmus+ Stages</li>
                <li>Programmes de stages des universités estoniennes</li>
                <li>Stages dans les entreprises technologiques estoniennes</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  En Estonie, les stages sont souvent rémunérés, particulièrement dans le secteur technologique. Pour les stages obligatoires dans le cadre des études, un visa étudiant suffit généralement. Pour les autres stages, un permis de séjour temporaire peut être nécessaire.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.workinestonia.com/internships-in-estonia/" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair en Estonie permet aux jeunes de vivre avec une famille estonienne tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation mensuelle d'environ 250-300 € par mois</li>
                <li>Possibilité de suivre des cours d'estonien ou d'autres matières</li>
                <li>30 heures de travail par semaine maximum</li>
                <li>1-2 jours de congé par semaine et vacances payées</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: entre 18 et 30 ans</li>
                <li>Durée: 6 à 12 mois</li>
                <li>Niveau d'anglais intermédiaire (l'estonien n'est pas obligatoire)</li>
                <li>Expérience avec les enfants</li>
                <li>Permis de séjour temporaire pour au-pair</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair en Estonie, vous devez d'abord trouver une famille d'accueil via une agence au-pair ou des plateformes en ligne. Une fois accepté, vous pourrez demander un permis de séjour temporaire avec l'aide de votre famille d'accueil.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.aupair.com/en/p-au-pair-estonia.php" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                L'Estonie offre un environnement exceptionnel pour les entrepreneurs avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Un système de création d'entreprise entièrement numérique (15 minutes pour créer une entreprise en ligne)</li>
                <li>Le programme e-Residency permettant de gérer une entreprise à distance</li>
                <li>Un régime fiscal favorable (impôt sur les sociétés uniquement sur les bénéfices distribués)</li>
                <li>Un écosystème de startups dynamique</li>
                <li>Des infrastructures numériques de pointe</li>
                <li>Un accès au marché européen</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies de l'information et développement logiciel</li>
                <li>Fintech et services financiers numériques</li>
                <li>Cybersécurité et blockchain</li>
                <li>E-commerce et services en ligne</li>
                <li>Greentech et technologies propres</li>
                <li>Santé numérique</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Programme Startup Visa</h4>
                <p>
                  L'Estonie propose un programme de visa startup qui permet aux entrepreneurs non-européens de s'installer en Estonie pour développer une startup innovante. Ce programme facilite l'accès à l'écosystème entrepreneurial estonien et peut mener à une résidence de longue durée.
                </p>
              </div>
              <Button asChild>
                <Link href="https://startupestonia.ee/" target="_blank">
                  Informations sur l'Entrepreneuriat en Estonie
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
                    <span className="font-bold">Permis de séjour temporaire pour travail:</span> Pour les personnes ayant une offre d'emploi en Estonie.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de séjour temporaire pour études:</span> Pour les études dans une institution estonienne.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de séjour pour startup:</span> Pour les entrepreneurs créant une startup innovante en Estonie.
                  </li>
                  <li>
                    <span className="font-bold">E-Residency:</span> Identité numérique permettant de gérer une entreprise à distance (n'est pas un permis de séjour).
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Déterminez le type de permis dont vous avez besoin</li>
                  <li>Rassemblez les documents requis (varie selon le type de permis)</li>
                  <li>Soumettez votre demande à l'ambassade ou au consulat d'Estonie</li>
                  <li>Payez les frais de traitement</li>
                  <li>Attendez la décision (les délais varient selon le type de permis)</li>
                  <li>Une fois approuvé, vous recevrez votre permis de séjour</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://www.politsei.ee/en/instructions/residence-permit" target="_blank">
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
                  L'estonien est la langue officielle, mais l'anglais est largement parlé, surtout dans les milieux professionnels, technologiques et universitaires. Le russe est également parlé par une partie de la population. Apprendre quelques mots d'estonien sera apprécié, même si ce n'est pas nécessaire pour la vie quotidienne.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Phrases utiles:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Tere - Bonjour</li>
                    <li>Aitäh - Merci</li>
                    <li>Palun - S'il vous plaît / De rien</li>
                    <li>Vabandust - Excusez-moi</li>
                    <li>Kas te räägite inglise keelt? - Parlez-vous anglais?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>Les Estoniens sont généralement réservés et apprécient l'espace personnel</li>
                  <li>La ponctualité est très importante</li>
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
                  <li>Le coût de la vie est modéré par rapport à d'autres pays européens</li>
                  <li>Les services numériques sont omniprésents (Wi-Fi gratuit, e-services gouvernementaux)</li>
                  <li>Les transports publics sont efficaces et souvent gratuits pour les résidents de Tallinn</li>
                  <li>Les hivers sont froids et sombres, les étés doux avec de longues journées</li>
                  <li>Le système de santé est de bonne qualité</li>
                  <li>L'équilibre travail-vie personnelle est valorisé</li>
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
                    <a href="https://www.politsei.ee/en/instructions/residence-permit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Police and Border Guard Board (immigration)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.workinestonia.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Work in Estonia
                    </a>
                  </li>
                  <li>
                    <a href="https://studyinestonia.ee/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Study in Estonia
                    </a>
                  </li>
                  <li>
                    <a href="https://e-estonia.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      e-Estonia (informations sur la société numérique estonienne)
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
                    <a href="https://www.internations.org/tallinn-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations Tallinn
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés en Estonie</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/africansinestonia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Africains en Estonie (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe communautaire pour les Africains vivant en Estonie</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/cities/ee/tallinn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup Tallinn
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
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir l'Estonie?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités en Estonie et commencez votre aventure dans ce pays innovant à la pointe du numérique.
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
