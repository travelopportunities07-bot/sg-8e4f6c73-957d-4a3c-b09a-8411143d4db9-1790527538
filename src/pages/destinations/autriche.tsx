
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AutrichePage() {
  return (
    <Layout 
      title="Autriche | AfricaOpportunités"
      description="Découvrez les opportunités en Autriche pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1516550893885-985c994c8609" 
          alt="Autriche" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇦🇹 Autriche</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans ce pays alpin au cœur de l'Europe, riche en culture et en histoire.
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
                L'Autriche est un pays alpin situé au cœur de l'Europe, connu pour sa riche histoire, sa culture musicale, ses paysages montagneux spectaculaires et sa haute qualité de vie. Avec Vienne comme capitale, l'Autriche offre un mélange unique de tradition et de modernité.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Le pays dispose d'une économie forte et stable, avec des secteurs clés comme le tourisme, les services financiers, l'industrie et la technologie. Le système éducatif autrichien est reconnu pour son excellence, et le pays offre de nombreuses opportunités pour les étudiants internationaux.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, l'Autriche présente des opportunités intéressantes dans divers domaines, notamment l'éducation, la recherche, le tourisme et les affaires.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Vienne
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langue officielle:</span> Allemand
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 9 millions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Euro (€)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Continental avec quatre saisons distinctes
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Vienne, Graz, Linz, Salzbourg, Innsbruck
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités en Autriche</h2>
          
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
                L'Autriche offre diverses opportunités d'emploi pour les professionnels qualifiés, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Tourisme et hôtellerie</li>
                <li>Ingénierie et technologie</li>
                <li>Santé et soins médicaux</li>
                <li>Finance et services bancaires</li>
                <li>Éducation et recherche</li>
                <li>Technologies de l'information</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler en Autriche en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'un permis de travail (Rot-Weiß-Rot-Karte ou Carte Rouge-Blanc-Rouge)</li>
                <li>D'une offre d'emploi d'un employeur autrichien</li>
                <li>De qualifications professionnelles reconnues</li>
                <li>De compétences linguistiques en allemand (niveau B1 ou supérieur recommandé)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Carte Rouge-Blanc-Rouge (RWR)</h4>
                <p>
                  Ce permis de travail est destiné aux travailleurs qualifiés de pays tiers. Il est basé sur un système de points qui évalue vos qualifications, expérience professionnelle, compétences linguistiques et âge.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/skilled-workers-in-shortage-occupations/" target="_blank">
                  En Savoir Plus sur les Permis de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                L'Autriche dispose d'un système éducatif de haute qualité avec des universités renommées et des programmes accessibles aux étudiants internationaux:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Universités publiques avec des frais de scolarité relativement bas</li>
                <li>Programmes de master et doctorat en anglais</li>
                <li>Écoles techniques et professionnelles</li>
                <li>Programmes d'échange et bourses d'études</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université de Vienne</li>
                <li>Université technique de Vienne</li>
                <li>Université de Graz</li>
                <li>Université d'Innsbruck</li>
                <li>Université économique de Vienne (WU)</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants africains:
                </p>
                <ul className="list-disc pl-6">
                  <li>Bourses OeAD (Agence autrichienne pour la coopération internationale)</li>
                  <li>Programme de bourses Ernst Mach</li>
                  <li>Bourses de la Fondation autrichienne pour la recherche</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://oead.at/en/to-austria/scholarships" target="_blank">
                  Explorer les Bourses d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                L'Autriche est une destination touristique populaire offrant:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Des paysages alpins spectaculaires</li>
                <li>Un riche patrimoine culturel et historique</li>
                <li>Des villes impériales comme Vienne et Salzbourg</li>
                <li>Des stations de ski de renommée mondiale</li>
                <li>Des festivals de musique classique</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa Schengen pour visiter l'Autriche:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa de court séjour (type C) valable jusqu'à 90 jours</li>
                <li>Documents requis: passeport valide, preuve d'hébergement, assurance voyage, itinéraire, etc.</li>
                <li>Demande à soumettre à l'ambassade ou au consulat d'Autriche dans votre pays</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  Été (juin-août) pour la randonnée et les festivals culturels, hiver (décembre-mars) pour les sports d'hiver, printemps et automne pour visiter les villes avec moins de touristes.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.bmeia.gv.at/en/travel-stay/entry-and-residence-in-austria/entrance-and-residence/" target="_blank">
                  Informations sur les Visas Touristiques
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                L'Autriche offre diverses possibilités de volontariat pour les résidents africains:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Service volontaire européen (SVE)</li>
                <li>Programmes de volontariat environnemental</li>
                <li>Volontariat dans des organisations culturelles</li>
                <li>Projets sociaux et humanitaires</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Organisations Principales</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Österreichischer Freiwilligenrat (Conseil autrichien des volontaires)</li>
                <li>Caritas Autriche</li>
                <li>Croix-Rouge autrichienne</li>
                <li>SOS Villages d'Enfants Autriche</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat en Autriche, vous aurez généralement besoin d'un visa spécifique selon la durée et le type de programme. Certains programmes offrent une aide pour les démarches administratives.
                </p>
              </div>
              <Button asChild>
                <Link href="https://europa.eu/youth/go-abroad/volunteering_en" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages en Autriche offrent une excellente expérience professionnelle dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Entreprises internationales et locales</li>
                <li>Organisations des Nations Unies à Vienne</li>
                <li>Institutions culturelles et musées</li>
                <li>Secteur touristique et hôtelier</li>
                <li>Entreprises technologiques et startups</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IAESTE (Association internationale pour l'échange d'étudiants en formation technique)</li>
                <li>AIESEC Autriche</li>
                <li>Stages à l'ONU Vienne</li>
                <li>Programmes de stages universitaires</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  Les stages en Autriche peuvent être rémunérés ou non, selon l'organisation. Pour les stages rémunérés, un permis de travail peut être nécessaire. Les stages liés aux études sont souvent plus faciles à obtenir grâce aux accords universitaires.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.iaeste.at/en/" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair en Autriche permet aux jeunes de vivre avec une famille autrichienne tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation mensuelle (argent de poche)</li>
                <li>Temps libre pour étudier l'allemand</li>
                <li>Expérience culturelle immersive</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: généralement entre 18 et 30 ans</li>
                <li>Durée: 6 à 12 mois</li>
                <li>Connaissances de base en allemand recommandées</li>
                <li>Expérience avec les enfants</li>
                <li>Visa spécifique au-pair</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair en Autriche, vous devez d'abord trouver une famille d'accueil via une agence au-pair ou des plateformes en ligne. Une fois accepté, vous pourrez demander un visa au-pair avec l'aide de votre famille d'accueil.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.aupair.com/en/p-austria.php" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                L'Autriche offre un environnement favorable aux affaires avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Une économie stable et développée</li>
                <li>Une position stratégique au cœur de l'Europe</li>
                <li>Des infrastructures de qualité</li>
                <li>Un accès au marché européen</li>
                <li>Des incitations pour les investisseurs étrangers</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies propres et énergies renouvelables</li>
                <li>Technologies de l'information</li>
                <li>Biotechnologie et sciences de la vie</li>
                <li>Tourisme et hospitalité</li>
                <li>Services financiers</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Création d'Entreprise</h4>
                <p>
                  Pour créer une entreprise en Autriche en tant que non-résident de l'UE, vous aurez besoin d'un permis de séjour pour indépendants ou entrepreneurs. L'Agence autrichienne pour la promotion des investissements (ABA) offre des conseils gratuits aux investisseurs étrangers.
                </p>
              </div>
              <Button asChild>
                <Link href="https://investinaustria.at/en/" target="_blank">
                  Informations sur l'Investissement en Autriche
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
                    <span className="font-bold">Carte Rouge-Blanc-Rouge:</span> Pour les travailleurs qualifiés et les professionnels.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa Étudiant:</span> Pour les études dans une institution autrichienne.
                  </li>
                  <li>
                    <span className="font-bold">Visa Au-pair:</span> Pour les programmes au-pair.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Contactez l'ambassade ou le consulat d'Autriche dans votre pays</li>
                  <li>Rassemblez les documents requis (varie selon le type de visa)</li>
                  <li>Soumettez votre demande et payez les frais</li>
                  <li>Attendez le traitement de votre demande</li>
                  <li>Récupérez votre visa une fois approuvé</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://www.bmeia.gv.at/en/travel-stay/entry-and-residence-in-austria/" target="_blank">
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
                  L'allemand est la langue officielle de l'Autriche, mais l'anglais est largement parlé dans les grandes villes et les zones touristiques. Apprendre quelques phrases de base en allemand sera très apprécié par les locaux.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Phrases utiles:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Guten Tag - Bonjour</li>
                    <li>Danke - Merci</li>
                    <li>Bitte - S'il vous plaît</li>
                    <li>Entschuldigung - Excusez-moi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>La ponctualité est très importante en Autriche</li>
                  <li>Les salutations formelles sont appréciées (poignée de main)</li>
                  <li>Utilisez les titres et noms de famille jusqu'à ce qu'on vous invite à utiliser les prénoms</li>
                  <li>Respectez les règles et l'ordre public</li>
                  <li>Les Autrichiens apprécient la discrétion et le calme dans les lieux publics</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Le coût de la vie est relativement élevé, surtout à Vienne</li>
                  <li>Les transports publics sont excellents et ponctuels</li>
                  <li>Les magasins sont généralement fermés le dimanche</li>
                  <li>Le tri des déchets est pris très au sérieux</li>
                  <li>Le système de santé est de haute qualité</li>
                  <li>Les Autrichiens valorisent l'équilibre travail-vie personnelle</li>
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
                    <a href="https://www.bmeia.gv.at/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Ministère fédéral des Affaires européennes et internationales
                    </a>
                  </li>
                  <li>
                    <a href="https://www.migration.gv.at/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Portal d'Immigration Autrichien
                    </a>
                  </li>
                  <li>
                    <a href="https://www.oead.at/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Agence autrichienne pour la coopération internationale (OeAD)
                    </a>
                  </li>
                  <li>
                    <a href="https://investinaustria.at/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Agence autrichienne pour la promotion des investissements (ABA)
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
                    <a href="https://www.internations.org/vienna-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations Vienne
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés à Vienne</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/africansinvienna/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Africains à Vienne (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe communautaire pour les Africains vivant à Vienne</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/cities/at/vienna/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup Vienne
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
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir l'Autriche?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités en Autriche et commencez votre aventure dans ce magnifique pays alpin.
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
