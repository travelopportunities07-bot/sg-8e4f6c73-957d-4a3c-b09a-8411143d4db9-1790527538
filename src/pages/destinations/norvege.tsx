import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DestinationConsultation } from '@/components/destinations/DestinationConsultation';

export default function NorvegePage() {
  return (
    <Layout 
      title="Norvège | AfricaOpportunités"
      description="Découvrez les opportunités en Norvège pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38" 
          alt="Norvège" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇳🇴 Norvège</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans l'un des pays les plus développés au monde, connu pour ses fjords spectaculaires et sa qualité de vie exceptionnelle.
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
                La Norvège, située en Europe du Nord, est l'un des pays les plus prospères au monde avec un niveau de vie parmi les plus élevés. Connue pour ses fjords spectaculaires, ses montagnes majestueuses et ses aurores boréales, la Norvège offre un cadre de vie exceptionnel alliant nature préservée et infrastructures modernes.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Bien que n'étant pas membre de l'Union européenne, la Norvège fait partie de l'Espace économique européen (EEE) et de l'espace Schengen. Son économie est principalement basée sur les ressources naturelles, notamment le pétrole, le gaz naturel, la pêche et les énergies renouvelables.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, la Norvège offre des opportunités intéressantes dans les secteurs de l'éducation, de la recherche, des technologies, de l'énergie et de la santé, avec un système social généreux et une forte culture d'égalité et d'inclusion.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Oslo
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langue officielle:</span> Norvégien (bokmål et nynorsk)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 5,4 millions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Couronne norvégienne (NOK)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Tempéré à subarctique selon les régions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Oslo, Bergen, Trondheim, Stavanger, Tromsø
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités en Norvège</h2>
          
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
                La Norvège offre d'excellentes conditions de travail et des salaires compétitifs, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Pétrole et gaz</li>
                <li>Énergies renouvelables</li>
                <li>Technologies de l'information</li>
                <li>Santé et soins médicaux</li>
                <li>Ingénierie et construction</li>
                <li>Pêche et aquaculture</li>
                <li>Éducation et recherche</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler en Norvège en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'un permis de travail (obtenu avant l'arrivée)</li>
                <li>D'une offre d'emploi d'un employeur norvégien</li>
                <li>De qualifications professionnelles reconnues</li>
                <li>De compétences linguistiques (anglais courant, norvégien apprécié)</li>
                <li>D'un numéro d'identification personnel norvégien (après l'arrivée)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Permis de Travail pour Travailleurs Qualifiés</h4>
                <p>
                  Ce permis est destiné aux professionnels ayant au moins une formation professionnelle ou un diplôme universitaire. Vous devez avoir une offre d'emploi correspondant à vos qualifications avec un salaire conforme aux conventions collectives norvégiennes.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.udi.no/en/want-to-apply/work-immigration/" target="_blank">
                  En Savoir Plus sur les Permis de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                La Norvège offre un système éducatif de haute qualité avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Universités publiques sans frais de scolarité (même pour les étudiants internationaux)</li>
                <li>Nombreux programmes de master en anglais</li>
                <li>Environnement d'apprentissage moderne et innovant</li>
                <li>Forte orientation vers la recherche</li>
                <li>Possibilité de travailler à temps partiel pendant les études</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université d'Oslo</li>
                <li>Université norvégienne de sciences et de technologie (NTNU)</li>
                <li>Université de Bergen</li>
                <li>Université arctique de Norvège (UiT)</li>
                <li>École norvégienne d'économie (NHH)</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants africains:
                </p>
                <ul className="list-disc pl-6">
                  <li>Programme de bourses Quota (pour certains pays en développement)</li>
                  <li>Bourses Erasmus+ pour les pays partenaires</li>
                  <li>Bourses du Conseil norvégien pour l'Afrique</li>
                  <li>Bourses spécifiques aux universités</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://www.studyinnorway.no/" target="_blank">
                  Explorer les Opportunités d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                La Norvège offre des paysages à couper le souffle et des expériences uniques:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Fjords spectaculaires (Geirangerfjord, Sognefjord)</li>
                <li>Aurores boréales dans le nord</li>
                <li>Soleil de minuit en été</li>
                <li>Randonnées dans des paysages préservés</li>
                <li>Villes historiques et culturelles (Oslo, Bergen)</li>
                <li>Croisières côtières (Hurtigruten)</li>
                <li>Sports d'hiver</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa Schengen pour visiter la Norvège:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa de court séjour (type C) valable jusqu'à 90 jours</li>
                <li>Documents requis: passeport valide, preuve d'hébergement, assurance voyage, itinéraire, etc.</li>
                <li>Demande à soumettre à l'ambassade ou au consulat de Norvège dans votre pays</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  Mai à septembre pour le climat doux et les activités de plein air, décembre à mars pour les aurores boréales et les sports d'hiver, juin-juillet pour le soleil de minuit.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.visitnorway.fr/" target="_blank">
                  Découvrir la Norvège Touristique
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                La Norvège offre diverses possibilités de volontariat, notamment dans:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Protection de l'environnement et conservation</li>
                <li>Aide aux réfugiés et intégration</li>
                <li>Organisations culturelles et festivals</li>
                <li>Projets communautaires</li>
                <li>Fermes biologiques (WWOOF Norvège)</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Organisations Principales</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Norges Frivilligsentraler (centres de volontariat norvégiens)</li>
                <li>Croix-Rouge norvégienne</li>
                <li>Norwegian People's Aid</li>
                <li>Norsk Folkehjelp</li>
                <li>WWOOF Norvège (World Wide Opportunities on Organic Farms)</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat en Norvège, vous aurez généralement besoin d'un visa approprié. Les programmes de volontariat de courte durée peuvent être couverts par un visa touristique, tandis que les engagements plus longs peuvent nécessiter un permis spécifique.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.frivillighetnorge.no/english" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages en Norvège offrent une expérience professionnelle précieuse dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Entreprises pétrolières et gazières (Equinor, anciennement Statoil)</li>
                <li>Entreprises d'énergies renouvelables</li>
                <li>Organisations internationales</li>
                <li>Instituts de recherche</li>
                <li>Entreprises technologiques</li>
                <li>Secteur maritime</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IAESTE Norvège (Association internationale pour l'échange d'étudiants en formation technique)</li>
                <li>AIESEC Norvège</li>
                <li>Programmes de stages des grandes entreprises norvégiennes</li>
                <li>Stages dans les institutions de recherche norvégiennes</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  Les stages en Norvège sont généralement bien rémunérés, avec des conditions de travail excellentes. Pour les stages liés aux études, un visa étudiant peut suffire. Pour les autres stages, un permis de travail peut être nécessaire. La maîtrise de l'anglais est essentielle, et des connaissances en norvégien sont un atout.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.iaeste.no/for-students/" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair en Norvège permet aux jeunes de vivre avec une famille norvégienne tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation mensuelle d'environ 5 600 NOK (environ 500 €)</li>
                <li>Cours de norvégien financés</li>
                <li>Maximum 30 heures de travail par semaine</li>
                <li>Au moins 48 heures de temps libre par semaine et 25 jours de vacances par an</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: entre 18 et 30 ans</li>
                <li>Durée: jusqu'à 2 ans</li>
                <li>Connaissances de base en anglais ou norvégien</li>
                <li>Expérience avec les enfants</li>
                <li>Permis au-pair spécifique</li>
                <li>Casier judiciaire vierge</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair en Norvège, vous devez d'abord trouver une famille d'accueil via une agence au-pair ou des plateformes en ligne. Une fois accepté, vous pourrez demander un permis au-pair avec l'aide de votre famille d'accueil.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.udi.no/en/want-to-apply/au-pair/" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                La Norvège offre un environnement favorable aux affaires avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Une économie stable et prospère</li>
                <li>Un cadre juridique transparent</li>
                <li>Une faible corruption</li>
                <li>Des infrastructures de qualité</li>
                <li>Un fort pouvoir d'achat</li>
                <li>Un soutien à l'innovation et aux startups</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Énergies renouvelables et technologies vertes</li>
                <li>Technologies maritimes</li>
                <li>Technologies de l'information et numériques</li>
                <li>Aquaculture et produits de la mer</li>
                <li>Santé et biotechnologie</li>
                <li>Tourisme durable</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Création d'Entreprise</h4>
                <p>
                  Pour créer une entreprise en Norvège en tant que non-résident de l'EEE, vous devrez généralement obtenir un permis de séjour pour indépendants ou entrepreneurs. Innovation Norway et le Norwegian Business Registry (Brønnøysundregistrene) offrent des informations et un soutien pour la création d'entreprise.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.innovasjonnorge.no/en/start-page/" target="_blank">
                  Informations sur l'Entrepreneuriat en Norvège
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
                    <span className="font-bold">Permis de Séjour:</span> Pour les séjours de plus de 90 jours (études, travail, regroupement familial).
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de Travail pour Travailleurs Qualifiés:</span> Pour les professionnels ayant des qualifications spécifiques.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis d'Études:</span> Pour les études dans une institution norvégienne.
                  </li>
                  <li>
                    <span className="font-bold">Permis Au-pair:</span> Pour les programmes au-pair.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Contactez l'ambassade ou le consulat de Norvège dans votre pays</li>
                  <li>Rassemblez les documents requis (varie selon le type de visa)</li>
                  <li>Soumettez votre demande en ligne via le portail UDI</li>
                  <li>Prenez rendez-vous pour soumettre vos documents biométriques</li>
                  <li>Payez les frais de demande</li>
                  <li>Attendez le traitement de votre demande</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://www.udi.no/en/" target="_blank">
                      Direction de l'Immigration Norvégienne (UDI)
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
                  Le norvégien est la langue officielle, mais l'anglais est très largement parlé et compris. Apprendre quelques phrases de base en norvégien sera toutefois apprécié par les locaux.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Phrases utiles:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Hei - Bonjour</li>
                    <li>Takk - Merci</li>
                    <li>Vær så snill - S'il vous plaît</li>
                    <li>Unnskyld - Excusez-moi</li>
                    <li>Snakker du engelsk? - Parlez-vous anglais?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>Les Norvégiens valorisent la ponctualité</li>
                  <li>La communication est directe et honnête</li>
                  <li>L'égalité est une valeur fondamentale (notamment l'égalité des sexes)</li>
                  <li>Le respect de la vie privée est important</li>
                  <li>La modestie est appréciée (évitez de vous vanter)</li>
                  <li>Le respect de la nature et de l'environnement est essentiel</li>
                  <li>Le concept de "Janteloven" encourage l'humilité et décourage l'individualisme excessif</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Le coût de la vie est parmi les plus élevés au monde</li>
                  <li>Les transports publics sont excellents et ponctuels</li>
                  <li>Le concept de "friluftsliv" (vie en plein air) est important</li>
                  <li>Les Norvégiens pratiquent beaucoup d'activités de plein air, même en hiver</li>
                  <li>Le système de santé est de haute qualité et largement accessible</li>
                  <li>L'équilibre travail-vie personnelle est fortement valorisé</li>
                  <li>Les cartes de crédit/débit sont acceptées presque partout</li>
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
                    <a href="https://www.regjeringen.no/en/id4/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Gouvernement norvégien
                    </a>
                  </li>
                  <li>
                    <a href="https://www.udi.no/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Direction de l'Immigration Norvégienne (UDI)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.studyinnorway.no/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Study in Norway
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nav.no/en/home" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Administration norvégienne du travail et de la protection sociale (NAV)
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
                    <a href="https://www.internations.org/norway-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations Norvège
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés en Norvège</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/africansinOslo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Africains à Oslo (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe communautaire pour les Africains vivant à Oslo</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/cities/no/oslo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup Oslo
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
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir la Norvège?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités en Norvège et commencez votre aventure dans ce pays scandinave aux paysages spectaculaires.
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