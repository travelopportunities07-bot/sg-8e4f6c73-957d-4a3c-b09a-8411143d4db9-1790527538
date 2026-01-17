
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LuxembourgPage() {
  return (
    <Layout 
      title="Luxembourg | AfricaOpportunités"
      description="Découvrez les opportunités au Luxembourg pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72" 
          alt="Luxembourg" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇱🇺 Luxembourg</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans ce petit pays cosmopolite au cœur de l'Europe, centre financier international et hub multiculturel.
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
                Le Luxembourg, l'un des plus petits pays d'Europe, est un grand-duché situé entre la France, l'Allemagne et la Belgique. Malgré sa taille modeste, il s'agit d'un acteur économique majeur, abritant de nombreuses institutions européennes et un centre financier international de premier plan.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Avec l'un des PIB par habitant les plus élevés au monde, le Luxembourg offre une qualité de vie exceptionnelle, des infrastructures modernes et un environnement multiculturel unique. Plus de 47% de sa population est d'origine étrangère, créant une société véritablement internationale.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, le Luxembourg présente des opportunités intéressantes dans les secteurs financiers, technologiques, logistiques et des services, avec une politique d'immigration favorable aux talents qualifiés et un environnement multilingue où le français est l'une des langues officielles.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Luxembourg-Ville
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langues officielles:</span> Luxembourgeois, Français, Allemand
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 640 000
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Euro (€)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Continental tempéré avec quatre saisons distinctes
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités au Luxembourg</h2>
          
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
                Le Luxembourg offre d'excellentes opportunités d'emploi pour les professionnels qualifiés, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Services financiers (banques, fonds d'investissement, assurances)</li>
                <li>Technologies de l'information et fintech</li>
                <li>Institutions européennes et organisations internationales</li>
                <li>Services juridiques et de conseil</li>
                <li>Logistique et transport</li>
                <li>Santé et recherche</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler au Luxembourg en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'une autorisation de séjour temporaire avant l'arrivée</li>
                <li>D'un permis de séjour pour travailleur salarié</li>
                <li>D'une offre d'emploi d'un employeur luxembourgeois</li>
                <li>De qualifications professionnelles reconnues</li>
                <li>De compétences linguistiques (français, anglais, allemand ou luxembourgeois selon le secteur)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Travailleurs Hautement Qualifiés</h4>
                <p>
                  Le Luxembourg a mis en place une procédure simplifiée pour les travailleurs hautement qualifiés, avec des conditions plus favorables et un traitement accéléré des demandes. Pour être éligible, vous devez généralement avoir un diplôme universitaire et un salaire minimum correspondant à au moins 1,5 fois le salaire brut moyen luxembourgeois.
                </p>
              </div>
              <Button asChild>
                <Link href="https://guichet.public.lu/en/citoyens/immigration.html" target="_blank">
                  En Savoir Plus sur les Permis de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                Le Luxembourg offre des opportunités d'études de qualité dans un environnement international:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université du Luxembourg, jeune mais dynamique et en pleine croissance</li>
                <li>Programmes d'études multilingues (français, anglais, allemand)</li>
                <li>Environnement multiculturel et international</li>
                <li>Liens étroits avec le monde professionnel</li>
                <li>Infrastructures modernes et équipements de pointe</li>
                <li>Possibilité de travailler pendant et après les études</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université du Luxembourg</li>
                <li>Sacred Heart University Luxembourg</li>
                <li>Luxembourg School of Business</li>
                <li>Miami University Dolibois European Center</li>
                <li>BBI Luxembourg (École de Management en Hôtellerie)</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants internationaux:
                </p>
                <ul className="list-disc pl-6">
                  <li>Bourses de l'Université du Luxembourg</li>
                  <li>Aides financières de l'État luxembourgeois (CEDIES)</li>
                  <li>Bourses de la coopération luxembourgeoise (pour certains pays africains partenaires)</li>
                  <li>Bourses Erasmus Mundus</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://wwwen.uni.lu/international/coming_to_the_university" target="_blank">
                  Explorer les Opportunités d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                Le Luxembourg offre une expérience touristique riche et variée malgré sa petite taille:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Luxembourg-Ville, dont la vieille ville est classée au patrimoine mondial de l'UNESCO</li>
                <li>Les châteaux médiévaux comme Vianden et Bourscheid</li>
                <li>La région des Ardennes luxembourgeoises avec ses paysages naturels</li>
                <li>La Moselle luxembourgeoise et ses vignobles</li>
                <li>La région des Terres Rouges, ancien bassin minier reconverti</li>
                <li>Les musées et institutions culturelles de qualité</li>
                <li>La gastronomie locale influencée par les pays voisins</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa Schengen pour visiter le Luxembourg:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa de court séjour (type C) valable jusqu'à 90 jours</li>
                <li>Documents requis: passeport valide, preuve d'hébergement, assurance voyage, itinéraire, etc.</li>
                <li>Demande à soumettre à l'ambassade ou au consulat du Luxembourg dans votre pays</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  Mai à septembre pour le climat le plus clément, décembre pour les marchés de Noël, juin pour la fête nationale luxembourgeoise.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.visitluxembourg.com/fr" target="_blank">
                  Découvrir le Luxembourg Touristique
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                Le Luxembourg offre diverses possibilités de volontariat pour les résidents africains:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Service volontaire européen (SVE)</li>
                <li>Corps européen de solidarité</li>
                <li>Programmes de volontariat dans les ONG locales</li>
                <li>Volontariat dans des organisations culturelles et sociales</li>
                <li>Projets d'intégration des immigrants</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Organisations Principales</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Service National de la Jeunesse (SNJ)</li>
                <li>Croix-Rouge luxembourgeoise</li>
                <li>Caritas Luxembourg</li>
                <li>ASTI (Association de Soutien aux Travailleurs Immigrés)</li>
                <li>Agence du Bénévolat</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat au Luxembourg, vous aurez généralement besoin d'un visa spécifique. Certains programmes comme le SVE facilitent les démarches administratives et peuvent couvrir les frais de voyage, d'hébergement et offrir une allocation mensuelle.
                </p>
              </div>
              <Button asChild>
                <Link href="https://volontaires.lu/" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages au Luxembourg offrent une excellente expérience professionnelle dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Institutions financières (banques, fonds d'investissement)</li>
                <li>Cabinets d'audit et de conseil (Big Four)</li>
                <li>Institutions européennes</li>
                <li>Entreprises technologiques et startups</li>
                <li>Cabinets d'avocats internationaux</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>AIESEC Luxembourg</li>
                <li>Stages dans les institutions européennes</li>
                <li>Programmes de stages des grandes entreprises</li>
                <li>Stages à l'Université du Luxembourg</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  Au Luxembourg, les stages sont généralement rémunérés, avec un salaire minimum légal pour les stages de plus de 4 semaines. Pour les stages obligatoires dans le cadre des études, un visa étudiant suffit généralement. Pour les autres stages, une autorisation de séjour temporaire peut être nécessaire.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.moovijob.com/luxembourg/stage" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair au Luxembourg permet aux jeunes de vivre avec une famille luxembourgeoise tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation mensuelle d'environ 300-350 € par mois</li>
                <li>Possibilité de suivre des cours de langue (français, allemand ou luxembourgeois)</li>
                <li>30 heures de travail par semaine maximum</li>
                <li>1-2 jours de congé par semaine et vacances payées</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: entre 18 et 30 ans</li>
                <li>Durée: 6 à 12 mois</li>
                <li>Connaissances de base en français, allemand ou anglais</li>
                <li>Expérience avec les enfants</li>
                <li>Autorisation de séjour temporaire et permis de séjour pour au-pair</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair au Luxembourg, vous devez d'abord trouver une famille d'accueil via une agence au-pair ou des plateformes en ligne. Une fois accepté, vous devrez demander une autorisation de séjour temporaire avant votre arrivée, puis un permis de séjour pour au-pair une fois sur place.
                </p>
              </div>
              <Button asChild>
                <Link href="https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/au-pair/jeune-au-pair.html" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                Le Luxembourg offre un environnement favorable aux affaires avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Une économie stable et prospère</li>
                <li>Un cadre fiscal avantageux</li>
                <li>Un accès privilégié au marché européen</li>
                <li>Des infrastructures de qualité</li>
                <li>Un cadre juridique sécurisé</li>
                <li>Des programmes de soutien aux entrepreneurs et startups</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Services financiers et fintech</li>
                <li>Technologies de l'information et économie numérique</li>
                <li>Logistique et e-commerce</li>
                <li>Technologies spatiales</li>
                <li>Technologies de la santé</li>
                <li>Économie circulaire et technologies propres</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Création d'Entreprise</h4>
                <p>
                  Pour créer une entreprise au Luxembourg en tant que non-résident de l'UE, vous pouvez demander un titre de séjour pour investisseur ou pour travailleur indépendant. Vous devrez présenter un business plan viable, disposer de fonds suffisants et démontrer le potentiel de votre entreprise.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.tradeandinvest.lu/invest-in-luxembourg/" target="_blank">
                  Informations sur l'Entrepreneuriat au Luxembourg
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
                    <span className="font-bold">Autorisation de séjour temporaire:</span> À obtenir avant l'arrivée au Luxembourg pour les séjours de plus de 90 jours.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de séjour pour travailleur salarié:</span> Pour les personnes ayant une offre d'emploi au Luxembourg.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de séjour pour étudiant:</span> Pour les études dans une institution luxembourgeoise.
                  </li>
                  <li>
                    <span className="font-bold">Permis de séjour pour investisseur/travailleur indépendant:</span> Pour créer ou diriger une entreprise au Luxembourg.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Demandez une autorisation de séjour temporaire à l'ambassade ou au consulat du Luxembourg dans votre pays</li>
                  <li>Une fois approuvée, vous avez 90 jours pour entrer au Luxembourg</li>
                  <li>À l'arrivée, déclarez votre arrivée à l'administration communale de votre lieu de résidence</li>
                  <li>Passez une visite médicale obligatoire</li>
                  <li>Demandez votre permis de séjour définitif</li>
                  <li>Renouvelez votre permis avant son expiration</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://guichet.public.lu/en/citoyens/immigration.html" target="_blank">
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
                  Le Luxembourg est un pays multilingue où le luxembourgeois, le français et l'allemand sont les langues officielles. Le français est largement utilisé dans l'administration et les affaires, tandis que l'anglais est courant dans les secteurs financiers et internationaux.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Phrases utiles en français:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Bonjour - Bonjour</li>
                    <li>Merci - Merci</li>
                    <li>S'il vous plaît - S'il vous plaît</li>
                    <li>Excusez-moi - Excusez-moi</li>
                    <li>Parlez-vous anglais? - Parlez-vous anglais?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>Les Luxembourgeois apprécient la ponctualité et la formalité</li>
                  <li>Les poignées de main sont la forme de salutation standard</li>
                  <li>Le respect de la vie privée est important</li>
                  <li>La communication est généralement directe mais polie</li>
                  <li>Le multilinguisme est valorisé et respecté</li>
                  <li>L'étiquette à table est formelle et suit les traditions européennes</li>
                  <li>Les cadeaux sont appréciés lors des invitations à domicile</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Le coût de la vie est très élevé, particulièrement pour le logement</li>
                  <li>Les transports publics sont efficaces et gratuits dans tout le pays</li>
                  <li>Le pays est petit et facilement explorable</li>
                  <li>Le système de santé est de haute qualité</li>
                  <li>Les magasins ferment généralement tôt et le dimanche</li>
                  <li>La gastronomie est influencée par les cuisines française, allemande et belge</li>
                  <li>La fête nationale (23 juin) est célébrée avec des feux d'artifice et festivités</li>
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
                    <a href="https://guichet.public.lu/en.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Guichet.lu (portail officiel de l'administration luxembourgeoise)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luxembourg.public.lu/en.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Luxembourg.lu (site officiel du Grand-Duché)
                    </a>
                  </li>
                  <li>
                    <a href="https://wwwen.uni.lu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Université du Luxembourg
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tradeandinvest.lu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Luxembourg Trade & Invest
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
                    <a href="https://www.internations.org/luxembourg-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations Luxembourg
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés au Luxembourg</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/africansinluxembourg/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Africains au Luxembourg (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe communautaire pour les Africains vivant au Luxembourg</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/cities/lu/luxembourg/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup Luxembourg
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
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir le Luxembourg?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités au Luxembourg et commencez votre aventure dans ce pays multiculturel au cœur de l'Europe.
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
