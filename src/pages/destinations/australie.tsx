
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AustraliePage() {
  return (
    <Layout 
      title="Australie | AfricaOpportunités"
      description="Découvrez les opportunités en Australie pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" 
          alt="Australie" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇦🇺 Australie</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans ce vaste pays-continent, réputé pour sa qualité de vie exceptionnelle et ses paysages spectaculaires.
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
                L'Australie, sixième plus grand pays du monde en superficie, est un pays-continent situé dans l'hémisphère sud. Avec ses paysages variés allant des déserts arides aux forêts tropicales luxuriantes, en passant par des plages parmi les plus belles du monde, l'Australie offre un cadre de vie exceptionnel.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Économiquement prospère, l'Australie bénéficie d'un niveau de vie élevé, d'un système éducatif de renommée mondiale et d'un système de santé de qualité. Ses principales villes comme Sydney, Melbourne et Brisbane figurent régulièrement parmi les villes les plus agréables à vivre au monde.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, l'Australie présente de nombreuses opportunités, notamment dans les domaines de l'éducation, de la recherche, des mines, de la santé et des technologies. Le pays a mis en place des programmes spécifiques pour attirer les talents internationaux et favoriser la diversité culturelle.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Canberra
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langue officielle:</span> Anglais
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 26 millions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Dollar australien (AUD)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Varié, de tropical au nord à tempéré au sud
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Sydney, Melbourne, Brisbane, Perth, Adelaide
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités en Australie</h2>
          
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
                L'Australie offre d'excellentes opportunités d'emploi, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Santé et soins médicaux</li>
                <li>Technologies de l'information</li>
                <li>Ingénierie et construction</li>
                <li>Mines et ressources naturelles</li>
                <li>Éducation et recherche</li>
                <li>Finance et services professionnels</li>
                <li>Tourisme et hôtellerie</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler en Australie en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'un visa de travail approprié (Skilled Work Visa, Temporary Skill Shortage Visa, etc.)</li>
                <li>De qualifications professionnelles reconnues en Australie</li>
                <li>D'une maîtrise de l'anglais (généralement niveau IELTS 6.0 ou équivalent)</li>
                <li>Dans certains cas, d'une évaluation de vos compétences par l'autorité compétente</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Programme de Migration Qualifiée</h4>
                <p>
                  L'Australie dispose d'un système de points pour sélectionner les migrants qualifiés. Les points sont attribués en fonction de l'âge, des qualifications, de l'expérience professionnelle, de la maîtrise de l'anglais et d'autres facteurs. Pour être éligible, vous devez généralement exercer une profession figurant sur la liste des métiers en demande.
                </p>
              </div>
              <Button asChild>
                <Link href="https://immi.homeaffairs.gov.au/visas/working-in-australia" target="_blank">
                  En Savoir Plus sur les Visas de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                L'Australie est une destination d'études de premier choix, offrant:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Un système éducatif de renommée mondiale</li>
                <li>Plus de 40 universités, dont plusieurs figurant dans le top 100 mondial</li>
                <li>Une large gamme de programmes d'études en anglais</li>
                <li>Un environnement multiculturel et accueillant</li>
                <li>La possibilité de travailler pendant et après les études</li>
                <li>Un cadre de vie exceptionnel</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Université de Melbourne</li>
                <li>Université de Sydney</li>
                <li>Université nationale australienne</li>
                <li>Université de Queensland</li>
                <li>Université de Nouvelle-Galles du Sud</li>
                <li>Université Monash</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants africains:
                </p>
                <ul className="list-disc pl-6">
                  <li>Australia Awards (bourses du gouvernement australien)</li>
                  <li>Endeavour Leadership Program</li>
                  <li>Bourses spécifiques aux universités</li>
                  <li>Bourses de recherche</li>
                  <li>Bourses d'organisations internationales</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://www.studyinaustralia.gov.au/" target="_blank">
                  Explorer les Opportunités d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                L'Australie offre des expériences touristiques uniques et variées:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>La Grande Barrière de Corail, plus grand récif corallien du monde</li>
                <li>L'Outback australien et ses paysages désertiques spectaculaires</li>
                <li>Des villes cosmopolites comme Sydney et Melbourne</li>
                <li>Des plages parmi les plus belles du monde</li>
                <li>Une faune et une flore uniques (kangourous, koalas, etc.)</li>
                <li>Le parc national d'Uluru-Kata Tjuta et son célèbre rocher</li>
                <li>Les forêts tropicales du Queensland</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa pour visiter l'Australie:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa de visiteur (sous-classe 600) pour les séjours touristiques</li>
                <li>Demande en ligne via le site du Département de l'Immigration</li>
                <li>Documents requis: passeport valide, preuve de fonds suffisants, assurance voyage, etc.</li>
                <li>Délai de traitement variable selon le pays d'origine</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  L'Australie étant dans l'hémisphère sud, les saisons sont inversées par rapport à l'Afrique. Septembre à novembre (printemps) et mars à mai (automne) offrent généralement des températures agréables dans la plupart des régions. Le nord tropical est préférable pendant la saison sèche (mai à octobre).
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.australia.com/fr-fr/" target="_blank">
                  Découvrir l'Australie Touristique
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                L'Australie offre diverses possibilités de volontariat dans des domaines variés:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Conservation de la nature et protection de l'environnement</li>
                <li>Aide aux communautés aborigènes</li>
                <li>Soins aux animaux et sanctuaires de faune</li>
                <li>Projets communautaires et sociaux</li>
                <li>Éducation et enseignement</li>
                <li>Aide humanitaire et services de santé</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Organisations Principales</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Conservation Volunteers Australia</li>
                <li>Australian Volunteers International</li>
                <li>WWOOF Australia (Willing Workers on Organic Farms)</li>
                <li>Croix-Rouge australienne</li>
                <li>The Smith Family</li>
                <li>Habitat for Humanity Australia</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat en Australie, vous aurez généralement besoin d'un visa approprié. Le visa Working Holiday (sous-classe 417) ou le visa Work and Holiday (sous-classe 462) peuvent être adaptés, mais ne sont disponibles que pour certains pays. Alternativement, un visa de visiteur peut convenir pour certains types de volontariat non rémunéré.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.volunteeringaustralia.org/" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages en Australie offrent une expérience professionnelle précieuse dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Finance et services professionnels</li>
                <li>Technologies de l'information</li>
                <li>Ingénierie et ressources naturelles</li>
                <li>Marketing et médias</li>
                <li>Santé et recherche médicale</li>
                <li>Tourisme et hôtellerie</li>
                <li>Organisations non gouvernementales</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>AIESEC Australia</li>
                <li>Programmes de stages des grandes entreprises australiennes</li>
                <li>Stages dans les universités et instituts de recherche</li>
                <li>Programmes d'échange professionnel</li>
                <li>Internships Australia</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  En Australie, les stages non rémunérés ne sont légaux que s'ils font partie d'un programme d'études ou s'ils n'impliquent pas un véritable travail. Pour les stages rémunérés, vous aurez besoin d'un visa de travail approprié. Les stages pour étudiants internationaux peuvent être facilités par leur institution d'enseignement australienne.
                </p>
              </div>
              <Button asChild>
                <Link href="https://gradaustralia.com.au/internships" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair en Australie permet aux jeunes de vivre avec une famille australienne tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation hebdomadaire (pocket money) d'environ 200-300 AUD</li>
                <li>25-35 heures de travail par semaine</li>
                <li>Au moins un jour et demi de congé par semaine</li>
                <li>Possibilité de suivre des cours d'anglais</li>
                <li>Immersion culturelle et découverte du mode de vie australien</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: généralement entre 18 et 30 ans</li>
                <li>Durée: généralement 6 à 12 mois</li>
                <li>Niveau d'anglais intermédiaire à avancé</li>
                <li>Expérience avec les enfants</li>
                <li>Visa Working Holiday (sous-classe 417) ou Work and Holiday (sous-classe 462) si disponible pour votre pays</li>
                <li>Casier judiciaire vierge</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair en Australie, vous pouvez passer par une agence spécialisée ou utiliser des plateformes en ligne pour trouver une famille d'accueil. Vous devrez ensuite obtenir le visa approprié, généralement un visa Working Holiday si vous êtes éligible, ou un visa de visiteur dans certains cas.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.aupairworld.com/en/au-pair-programs/australia" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                L'Australie offre un environnement favorable aux affaires avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Une économie stable et résiliente</li>
                <li>Un cadre juridique transparent et fiable</li>
                <li>Un environnement politique stable</li>
                <li>Des infrastructures de qualité</li>
                <li>Un accès aux marchés asiatiques en pleine croissance</li>
                <li>Un écosystème d'innovation dynamique</li>
                <li>Une main-d'œuvre qualifiée et multiculturelle</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies propres et énergies renouvelables</li>
                <li>Agroalimentaire et agriculture de précision</li>
                <li>Technologies de l'information et économie numérique</li>
                <li>Santé et biotechnologies</li>
                <li>Tourisme et services</li>
                <li>Éducation internationale</li>
                <li>Ressources naturelles et mines</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Création d'Entreprise</h4>
                <p>
                  Pour créer une entreprise en Australie en tant que non-résident, vous pouvez demander un visa d'affaires ou d'investisseur. Plusieurs options sont disponibles, notamment le visa Business Innovation and Investment (sous-classe 188) qui comporte différentes catégories selon votre profil et vos projets. Vous devrez généralement démontrer votre expérience en affaires, disposer de fonds suffisants et présenter un plan d'affaires viable.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.austrade.gov.au/international/invest" target="_blank">
                  Informations sur l'Investissement en Australie
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
                    <span className="font-bold">Visa de Visiteur (sous-classe 600):</span> Pour les séjours touristiques ou d'affaires de courte durée.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa Étudiant (sous-classe 500):</span> Pour étudier dans une institution australienne.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa de Travail Temporaire (sous-classe 482):</span> Pour les travailleurs qualifiés parrainés par un employeur australien.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa de Migration Qualifiée (sous-classe 189, 190, 491):</span> Pour les migrants qualifiés indépendants ou parrainés par un État/Territoire.
                  </li>
                  <li>
                    <span className="font-bold">Visa Business Innovation and Investment (sous-classe 188):</span> Pour les entrepreneurs et investisseurs.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Identifiez le visa qui correspond à votre situation</li>
                  <li>Vérifiez les critères d'éligibilité sur le site du Département de l'Immigration</li>
                  <li>Rassemblez les documents requis (varie selon le type de visa)</li>
                  <li>Soumettez votre demande en ligne via ImmiAccount</li>
                  <li>Payez les frais de demande</li>
                  <li>Passez les examens médicaux si nécessaire</li>
                  <li>Attendez la décision sur votre demande</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://immi.homeaffairs.gov.au/" target="_blank">
                      Département de l'Immigration Australien
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
                  L'anglais est la langue officielle de l'Australie, avec un accent et des expressions spécifiques. L'anglais australien est généralement plus proche de l'anglais britannique que de l'américain.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Expressions australiennes:</p>
                  <ul className="mt-2 space-y-1">
                    <li>G'day - Bonjour</li>
                    <li>No worries - Pas de problème</li>
                    <li>Mate - Ami, pote</li>
                    <li>Arvo - Après-midi</li>
                    <li>Barbie - Barbecue</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>Les Australiens sont généralement décontractés et informels</li>
                  <li>L'égalitarisme est une valeur importante (concept de "fair go")</li>
                  <li>La ponctualité est appréciée dans les contextes professionnels</li>
                  <li>Les poignées de main sont la forme de salutation standard</li>
                  <li>L'humour et l'autodérision sont très présents dans la culture</li>
                  <li>Le respect de la diversité culturelle est important</li>
                  <li>Les Australiens apprécient la franchise et l'honnêteté</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Le coût de la vie est relativement élevé, surtout dans les grandes villes</li>
                  <li>Les transports publics sont bien développés dans les zones urbaines</li>
                  <li>Le climat varie considérablement selon les régions</li>
                  <li>La culture du café est très développée, surtout à Melbourne</li>
                  <li>Les Australiens adorent les activités de plein air et le sport</li>
                  <li>Le système de santé (Medicare) est accessible aux résidents permanents</li>
                  <li>Le pourboire n'est pas obligatoire mais apprécié pour un service exceptionnel</li>
                  <li>La protection solaire est essentielle en raison des rayons UV intenses</li>
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
                    <a href="https://immi.homeaffairs.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Département de l'Immigration et de la Protection des Frontières
                    </a>
                  </li>
                  <li>
                    <a href="https://www.studyinaustralia.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Study in Australia (site officiel pour les étudiants internationaux)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.australia.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Portail du gouvernement australien
                    </a>
                  </li>
                  <li>
                    <a href="https://www.austrade.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Australian Trade and Investment Commission
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
                    <a href="https://www.internations.org/australia-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations Australie
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés en Australie</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/africansinaustralia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Africains en Australie (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe communautaire pour les Africains vivant en Australie</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/cities/au/sydney/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup Sydney
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
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir l'Australie?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités en Australie et commencez votre aventure dans ce pays-continent aux multiples facettes.
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
