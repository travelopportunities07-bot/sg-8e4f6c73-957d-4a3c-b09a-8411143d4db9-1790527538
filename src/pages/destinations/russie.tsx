
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RussiePage() {
  return (
    <Layout 
      title="Russie | AfricaOpportunités"
      description="Découvrez les opportunités en Russie pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1513326738677-b964603b136d" 
          alt="Russie" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇷🇺 Russie</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans le plus vaste pays du monde, riche en histoire, culture et ressources, offrant des perspectives uniques dans l'éducation et la recherche.
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
                La Russie, le plus grand pays du monde en termes de superficie, s'étend sur deux continents et 11 fuseaux horaires. Cette nation eurasienne possède un riche patrimoine culturel, une histoire fascinante et des ressources naturelles abondantes. Avec ses villes historiques, ses paysages variés et son influence géopolitique, la Russie occupe une place unique sur la scène mondiale.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Le pays est reconnu pour l'excellence de son système éducatif, particulièrement dans les domaines des sciences, des mathématiques, de l'ingénierie et des arts. Les universités russes attirent des étudiants internationaux du monde entier, offrant une formation de qualité à des coûts relativement abordables.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, la Russie présente des opportunités intéressantes dans l'éducation supérieure, la recherche scientifique, l'ingénierie et les industries extractives, avec des programmes de bourses dédiés et une longue tradition d'accueil d'étudiants africains depuis l'époque soviétique.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Moscou
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langue officielle:</span> Russe
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 144 millions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Rouble russe (₽)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Continental avec des hivers froids et des étés chauds
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Moscou, Saint-Pétersbourg, Novossibirsk, Ekaterinbourg, Kazan
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités en Russie</h2>
          
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
                La Russie offre des opportunités d'emploi pour les professionnels qualifiés, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Enseignement des langues étrangères (notamment le français et l'anglais)</li>
                <li>Industries extractives (pétrole, gaz, mines)</li>
                <li>Ingénierie et construction</li>
                <li>Technologies de l'information</li>
                <li>Recherche scientifique</li>
                <li>Traduction et interprétation</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler en Russie en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'un permis de travail ou d'un permis de travail hautement qualifié</li>
                <li>D'une invitation de travail d'un employeur russe</li>
                <li>D'un visa de travail</li>
                <li>De qualifications professionnelles reconnues</li>
                <li>De compétences linguistiques en russe (pour la plupart des emplois)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Permis de Travail Hautement Qualifié</h4>
                <p>
                  La Russie propose un permis de travail spécial pour les spécialistes hautement qualifiés, offrant une procédure simplifiée et des avantages supplémentaires. Pour être éligible, vous devez généralement avoir une expertise confirmée dans votre domaine et un salaire annuel minimum d'environ 2 millions de roubles (environ 22 000 €).
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.mid.ru/en/countries_en/" target="_blank">
                  En Savoir Plus sur les Permis de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                La Russie est une destination d'études populaire pour les étudiants africains, offrant:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Universités de renommée mondiale avec une longue tradition académique</li>
                <li>Frais de scolarité relativement abordables par rapport à l'Europe occidentale</li>
                <li>Programmes d'études en anglais et en russe</li>
                <li>Excellence dans les domaines des sciences, de l'ingénierie, de la médecine et des mathématiques</li>
                <li>Programmes préparatoires de langue russe pour les étudiants internationaux</li>
                <li>Infrastructures et équipements de qualité</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université d'État de Moscou Lomonossov</li>
                <li>Université d'État de Saint-Pétersbourg</li>
                <li>Institut de physique et de technologie de Moscou</li>
                <li>Université russe de l'amitié des peuples</li>
                <li>Université nationale de recherche École supérieure d'économie</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants africains:
                </p>
                <ul className="list-disc pl-6">
                  <li>Bourses du gouvernement russe (quotas gouvernementaux)</li>
                  <li>Bourses des universités russes</li>
                  <li>Bourses bilatérales entre la Russie et certains pays africains</li>
                  <li>Bourses de la Fondation russe pour la science</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://studyinrussia.ru/en/" target="_blank">
                  Explorer les Opportunités d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                La Russie offre une expérience touristique riche et variée avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Les trésors architecturaux de Moscou et Saint-Pétersbourg</li>
                <li>La Place Rouge et le Kremlin, symboles de la Russie</li>
                <li>Les musées de renommée mondiale comme l'Ermitage</li>
                <li>Le Transsibérien, le plus long chemin de fer du monde</li>
                <li>Les paysages naturels variés, du lac Baïkal aux montagnes de l'Oural</li>
                <li>Le riche patrimoine culturel et artistique russe</li>
                <li>La gastronomie traditionnelle russe</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa pour visiter la Russie:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa touristique valable jusqu'à 30 jours</li>
                <li>Documents requis: passeport valide, invitation touristique (voucher), assurance voyage, etc.</li>
                <li>Demande à soumettre à l'ambassade ou au consulat de Russie dans votre pays</li>
                <li>Possibilité de visa électronique pour certaines régions et certains pays</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  Mai à septembre pour le climat le plus clément, décembre à février pour l'expérience hivernale authentique, juin pour les nuits blanches à Saint-Pétersbourg.
                </p>
              </div>
              <Button asChild>
                <Link href="https://tourism.gov.ru/en/" target="_blank">
                  Découvrir la Russie Touristique
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                La Russie offre diverses possibilités de volontariat pour les résidents africains:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Programmes d'échange culturel et linguistique</li>
                <li>Volontariat dans des organisations environnementales</li>
                <li>Projets de conservation de la nature</li>
                <li>Volontariat dans des organisations culturelles et sociales</li>
                <li>Programmes d'aide aux personnes défavorisées</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Organisations Principales</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Association des Volontaires de Russie</li>
                <li>Croix-Rouge russe</li>
                <li>Greenpeace Russie</li>
                <li>WWF Russie</li>
                <li>Caritas Russie</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat en Russie, vous aurez généralement besoin d'un visa humanitaire ou d'un visa de travail, selon la nature et la durée du programme. Il est important de vérifier les exigences spécifiques auprès de l'organisation d'accueil et de l'ambassade russe.
                </p>
              </div>
              <Button asChild>
                <Link href="https://dobro.ru/" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages en Russie offrent une expérience professionnelle dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Grandes entreprises russes et multinationales</li>
                <li>Organisations internationales</li>
                <li>Institutions de recherche</li>
                <li>Médias et communication</li>
                <li>Secteur énergétique</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>AIESEC Russie</li>
                <li>Programmes de stages des universités russes</li>
                <li>Stages dans les entreprises russes</li>
                <li>Programmes d'échange professionnel</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  En Russie, les stages peuvent être rémunérés ou non, selon l'entreprise et le secteur. Pour les stages dans le cadre des études, un visa étudiant suffit généralement. Pour les autres stages, un visa de travail ou un visa d'affaires peut être nécessaire. La connaissance du russe est souvent requise, bien que certaines entreprises internationales puissent accepter des stagiaires anglophones.
                </p>
              </div>
              <Button asChild>
                <Link href="https://hh.ru/search/vacancy/internship" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair en Russie permet aux jeunes de vivre avec une famille russe tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation mensuelle (montant variable selon les familles)</li>
                <li>Possibilité de suivre des cours de russe</li>
                <li>30-35 heures de travail par semaine maximum</li>
                <li>1-2 jours de congé par semaine</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: entre 18 et 26 ans</li>
                <li>Durée: 6 à 12 mois</li>
                <li>Connaissances de base en russe ou en anglais</li>
                <li>Expérience avec les enfants</li>
                <li>Visa approprié (généralement un visa humanitaire ou de travail)</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair en Russie, vous devez d'abord trouver une famille d'accueil via une agence au-pair ou des plateformes en ligne. Une fois accepté, vous pourrez demander un visa approprié avec l'aide de votre famille d'accueil. Le processus peut être plus complexe que dans d'autres pays européens, il est donc recommandé de passer par une agence spécialisée.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.aupair.com/en/p-au-pair-russia.php" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                La Russie offre un environnement d'affaires avec des opportunités spécifiques:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Un vaste marché intérieur de 144 millions d'habitants</li>
                <li>Des ressources naturelles abondantes</li>
                <li>Une main-d'œuvre qualifiée</li>
                <li>Des coûts opérationnels relativement bas</li>
                <li>Des zones économiques spéciales avec avantages fiscaux</li>
                <li>Des liens commerciaux croissants avec l'Afrique</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Agriculture et agroalimentaire</li>
                <li>Technologies de l'information</li>
                <li>Commerce international</li>
                <li>Services éducatifs</li>
                <li>Tourisme</li>
                <li>Énergie et ressources naturelles</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Création d'Entreprise</h4>
                <p>
                  Pour créer une entreprise en Russie en tant qu'étranger, vous pouvez choisir entre plusieurs formes juridiques, comme la société à responsabilité limitée (OOO) ou la société par actions (AO). Le processus implique généralement l'enregistrement auprès des autorités fiscales et statistiques, l'ouverture d'un compte bancaire et l'obtention des licences nécessaires. Il est fortement recommandé de faire appel à des conseillers juridiques locaux pour naviguer dans les complexités administratives et réglementaires.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.economy.gov.ru/en/" target="_blank">
                  Informations sur l'Entrepreneuriat en Russie
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
                    <span className="font-bold">Visa touristique:</span> Pour les séjours touristiques (jusqu'à 30 jours).
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa d'affaires:</span> Pour les voyages d'affaires et les négociations commerciales.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa d'étudiant:</span> Pour les études dans une institution russe.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa de travail:</span> Pour les personnes ayant une offre d'emploi en Russie.
                  </li>
                  <li>
                    <span className="font-bold">Visa humanitaire:</span> Pour les activités culturelles, sportives, religieuses ou humanitaires.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Obtenez une invitation (selon le type de visa) d'un sponsor russe</li>
                  <li>Remplissez le formulaire de demande de visa en ligne</li>
                  <li>Rassemblez les documents requis (varie selon le type de visa)</li>
                  <li>Soumettez votre demande à l'ambassade ou au consulat de Russie</li>
                  <li>Payez les frais de visa</li>
                  <li>Attendez le traitement de votre demande</li>
                  <li>Une fois en Russie, enregistrez-vous auprès des autorités migratoires</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://www.mid.ru/en/countries_en/" target="_blank">
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
                  Le russe est la langue officielle et la connaissance de quelques phrases de base est très appréciée. L'anglais est parlé dans les grandes villes et les lieux touristiques, mais moins répandu que dans d'autres pays européens. Apprendre l'alphabet cyrillique est très utile pour se déplacer.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Phrases utiles:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Здравствуйте (Zdravstvuyte) - Bonjour</li>
                    <li>Спасибо (Spasibo) - Merci</li>
                    <li>Пожалуйста (Pozhaluysta) - S'il vous plaît / De rien</li>
                    <li>Извините (Izvinite) - Excusez-moi</li>
                    <li>Вы говорите по-английски? (Vy govorite po-angliyski?) - Parlez-vous anglais?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>Les Russes peuvent sembler réservés au premier abord mais sont généralement chaleureux une fois la glace brisée</li>
                  <li>Les poignées de main sont fermes et le contact visuel est important</li>
                  <li>L'hospitalité est une valeur fondamentale dans la culture russe</li>
                  <li>Retirer ses chaussures en entrant dans une maison est une coutume répandue</li>
                  <li>Les cadeaux sont appréciés lors des visites chez des amis ou des connaissances</li>
                  <li>Les toasts sont une tradition importante lors des repas festifs</li>
                  <li>Le respect des aînés et des traditions est valorisé</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Le coût de la vie varie considérablement entre Moscou/Saint-Pétersbourg et le reste du pays</li>
                  <li>Les transports publics sont bien développés dans les grandes villes</li>
                  <li>Les hivers sont très froids, nécessitant des vêtements adaptés</li>
                  <li>La cuisine russe est riche et variée, avec des spécialités comme le bortsch, les pelmeni et le caviar</li>
                  <li>Les bains russes (banya) sont une tradition culturelle importante</li>
                  <li>La vie culturelle est riche, avec de nombreux théâtres, musées et concerts</li>
                  <li>Les fêtes et traditions russes sont célébrées avec enthousiasme</li>
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
                    <a href="https://www.mid.ru/en/countries_en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Ministère des Affaires étrangères de la Fédération de Russie
                    </a>
                  </li>
                  <li>
                    <a href="https://studyinrussia.ru/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Study in Russia
                    </a>
                  </li>
                  <li>
                    <a href="https://tourism.gov.ru/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Agence fédérale du tourisme
                    </a>
                  </li>
                  <li>
                    <a href="https://www.economy.gov.ru/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Ministère du Développement économique
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
                    <a href="https://www.internations.org/moscow-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations Moscou
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés en Russie</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/africansinrussia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Africains en Russie (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe communautaire pour les Africains vivant en Russie</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/cities/ru/moscow/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup Moscou
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
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir la Russie?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités en Russie et commencez votre aventure dans ce vaste pays aux multiples facettes.
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
