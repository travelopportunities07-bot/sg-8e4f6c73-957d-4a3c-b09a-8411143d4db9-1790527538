
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EtatsUnisPage() {
  return (
    <Layout 
      title="États-Unis | AfricaOpportunités"
      description="Découvrez les opportunités aux États-Unis pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29" 
          alt="États-Unis" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇺🇸 États-Unis</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les innombrables opportunités dans la première puissance mondiale, pays d'innovation, d'entrepreneuriat et d'excellence académique.
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
                Les États-Unis, première puissance économique mondiale, offrent un vaste éventail d'opportunités dans pratiquement tous les domaines. Avec ses 50 états, chacun ayant ses propres caractéristiques, le pays présente une diversité géographique, culturelle et économique exceptionnelle, des métropoles dynamiques comme New York et San Francisco aux vastes espaces naturels.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Berceau de l'innovation technologique avec la Silicon Valley, centre financier mondial avec Wall Street, et pôle académique avec ses universités prestigieuses comme Harvard, MIT et Stanford, les États-Unis attirent des talents du monde entier. Le pays est reconnu pour son esprit entrepreneurial, sa culture du travail dynamique et ses possibilités d'évolution professionnelle.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, les États-Unis représentent une destination prisée pour les études supérieures, la recherche scientifique, l'entrepreneuriat, et les carrières dans les secteurs de pointe comme la technologie, la finance, la santé et les industries créatives. Bien que les procédures d'immigration puissent être complexes, de nombreux programmes existent pour faciliter l'accès aux talents internationaux qualifiés.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Washington D.C.
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langue officielle:</span> Anglais (de facto)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 332 millions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Dollar américain ($)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Varié selon les régions (continental, subtropical, désertique, etc.)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> New York, Los Angeles, Chicago, Houston, Miami, San Francisco, Boston
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités aux États-Unis</h2>
          
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
                Les États-Unis offrent de nombreuses opportunités d'emploi pour les professionnels qualifiés, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies de l'information et intelligence artificielle</li>
                <li>Finance et services bancaires</li>
                <li>Santé et biotechnologies</li>
                <li>Éducation et recherche</li>
                <li>Industries créatives (cinéma, médias, jeux vidéo)</li>
                <li>Ingénierie et sciences</li>
                <li>Conseil et services professionnels</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Visas de Travail</h4>
              <p className="mb-4">
                Pour travailler aux États-Unis en tant que résident africain, vous aurez besoin d'un visa de travail approprié:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa H-1B pour les travailleurs spécialisés (soumis à un quota annuel)</li>
                <li>Visa O-1 pour les personnes ayant des capacités extraordinaires</li>
                <li>Visa L-1 pour les transferts intra-entreprise</li>
                <li>Visa E-2 pour les investisseurs de pays ayant des traités avec les États-Unis</li>
                <li>Carte verte (résidence permanente) via un employeur ou la loterie de la diversité (DV Lottery)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Processus de Visa H-1B</h4>
                <p>
                  Le visa H-1B est le plus courant pour les professionnels qualifiés. L'employeur américain doit soumettre une demande en votre nom et prouver qu'il ne peut pas trouver un travailleur américain qualifié pour le poste. Le nombre de visas H-1B est limité chaque année, et les demandes sont souvent soumises à une loterie. Le processus comprend une certification de travail, une pétition d'immigration et une demande de visa.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.uscis.gov/working-in-the-united-states" target="_blank">
                  En Savoir Plus sur les Visas de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                Les États-Unis abritent certaines des meilleures universités du monde et offrent:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Plus de 4 000 établissements d'enseignement supérieur</li>
                <li>Des programmes académiques de renommée mondiale</li>
                <li>Des opportunités de recherche avancée</li>
                <li>Un environnement multiculturel</li>
                <li>Des connexions avec l'industrie et des opportunités de réseautage</li>
                <li>La possibilité de travailler pendant et après les études (OPT)</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Universités Prestigieuses</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Ivy League (Harvard, Yale, Princeton, Columbia, etc.)</li>
                <li>MIT, Stanford, Caltech</li>
                <li>Universités publiques de premier plan (UC Berkeley, UCLA, University of Michigan)</li>
                <li>Liberal Arts Colleges (Williams, Amherst, Swarthmore)</li>
                <li>Écoles spécialisées (Juilliard pour la musique, RISD pour l'art)</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses et Financement</h4>
                <p className="mb-2">
                  Plusieurs options de financement sont disponibles pour les étudiants africains:
                </p>
                <ul className="list-disc pl-6">
                  <li>Fulbright Foreign Student Program</li>
                  <li>Bourses Mastercard Foundation</li>
                  <li>Programme YALI (Young African Leaders Initiative)</li>
                  <li>Bourses spécifiques aux universités</li>
                  <li>Bourses du gouvernement américain (USAID, etc.)</li>
                  <li>Bourses d'organisations privées et de fondations</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://educationusa.state.gov/" target="_blank">
                  Explorer les Opportunités d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                Les États-Unis offrent une incroyable diversité d'attractions touristiques:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Métropoles emblématiques: New York, Los Angeles, San Francisco, Chicago, Miami</li>
                <li>Parcs nationaux spectaculaires: Grand Canyon, Yellowstone, Yosemite</li>
                <li>Sites historiques: Washington D.C., Boston, Philadelphie</li>
                <li>Attractions de divertissement: Disney World, Universal Studios, Las Vegas</li>
                <li>Diversité culturelle: quartiers ethniques, festivals, gastronomie</li>
                <li>Paysages variés: plages, montagnes, déserts, forêts</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Visa Touristique (B-2)</h4>
              <p className="mb-4">
                Pour visiter les États-Unis en tant que touriste:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Demandez un visa B-2 à l'ambassade ou au consulat américain de votre pays</li>
                <li>Préparez les documents requis: passeport valide, preuve de liens avec votre pays d'origine, preuve de financement, itinéraire, etc.</li>
                <li>Passez un entretien consulaire</li>
                <li>La durée de séjour autorisée est généralement de 6 mois maximum</li>
                <li>Certains pays sont éligibles au programme d'exemption de visa (Visa Waiver Program), mais peu de pays africains en font partie</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Conseils pour Obtenir un Visa Touristique</h4>
                <p>
                  Démontrez clairement vos liens avec votre pays d'origine (emploi, famille, propriétés) et votre intention de retourner après votre séjour. Préparez un itinéraire détaillé et des preuves de financement suffisant pour couvrir votre séjour. Soyez honnête lors de l'entretien consulaire et commencez le processus bien à l'avance de votre voyage prévu.
                </p>
              </div>
              <Button asChild>
                <Link href="https://travel.state.gov/content/travel/en/us-visas/tourism-visit.html" target="_blank">
                  Informations sur les Visas Touristiques
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                Le volontariat aux États-Unis offre une expérience enrichissante et diverses possibilités:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Organisations à but non lucratif dans divers domaines</li>
                <li>Programmes environnementaux et de conservation</li>
                <li>Services communautaires et sociaux</li>
                <li>Organisations religieuses et caritatives</li>
                <li>Festivals culturels et événements</li>
                <li>Programmes d'échange culturel</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>AmeriCorps (principalement pour les résidents américains)</li>
                <li>WWOOF USA (World Wide Opportunities on Organic Farms)</li>
                <li>Habitat for Humanity</li>
                <li>Sierra Club</li>
                <li>Programmes de volontariat dans les parcs nationaux</li>
                <li>Programmes d'échange culturel J-1</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Considérations Légales</h4>
                <p>
                  Pour faire du volontariat aux États-Unis, vous aurez généralement besoin d'un visa approprié. Le visa B-2 (touriste) ne permet pas le volontariat si celui-ci remplace un emploi rémunéré. Le visa J-1 pour les échanges culturels est souvent utilisé pour les programmes de volontariat structurés. Assurez-vous de comprendre les restrictions légales avant de vous engager dans une activité de volontariat.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.volunteermatch.org/" target="_blank">
                  Découvrir les Opportunités de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages aux États-Unis sont très valorisés et offrent une expérience professionnelle précieuse:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Stages dans des entreprises de renommée mondiale (Google, Microsoft, Goldman Sachs, etc.)</li>
                <li>Opportunités dans les startups innovantes</li>
                <li>Stages dans les organisations internationales (ONU à New York)</li>
                <li>Programmes dans les institutions gouvernementales</li>
                <li>Stages dans les médias, les arts et les organisations culturelles</li>
                <li>Expérience pratique dans des laboratoires de recherche de pointe</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes de Stages pour Internationaux</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Programme J-1 Exchange Visitor (le plus courant pour les stages)</li>
                <li>Stages via AIESEC</li>
                <li>Programmes de stages universitaires pour étudiants internationaux</li>
                <li>Stages d'été dans les grandes entreprises</li>
                <li>Programmes de formation professionnelle</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa J-1 pour Stagiaires</h4>
                <p>
                  Le visa J-1 est le plus couramment utilisé pour les stages aux États-Unis. Vous devez trouver un programme de stage et un sponsor approuvé par le Département d'État américain. La durée maximale est généralement de 12 mois (18 mois pour certains domaines). Le processus comprend l'obtention d'un formulaire DS-2019 de votre sponsor, le paiement des frais SEVIS, et une demande de visa à l'ambassade américaine.
                </p>
              </div>
              <Button asChild>
                <Link href="https://j1visa.state.gov/programs/intern" target="_blank">
                  En Savoir Plus sur les Stages J-1
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Programme Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair aux États-Unis est une excellente façon de vivre avec une famille américaine tout en s'occupant des enfants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation hebdomadaire d'environ 195-200$ par semaine</li>
                <li>Bourse d'études de 500$ pour suivre des cours</li>
                <li>Maximum 45 heures de travail par semaine</li>
                <li>1,5 jour de congé par semaine et 2 semaines de vacances payées</li>
                <li>Immersion culturelle et amélioration de l'anglais</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: entre 18 et 26 ans</li>
                <li>Durée: 12 mois (possibilité d'extension jusqu'à 24 mois)</li>
                <li>Niveau d'anglais intermédiaire</li>
                <li>Expérience avec les enfants (minimum 200 heures documentées)</li>
                <li>Diplôme d'études secondaires ou équivalent</li>
                <li>Permis de conduire (généralement requis)</li>
                <li>Casier judiciaire vierge</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Processus de Demande</h4>
                <p>
                  Pour devenir au-pair aux États-Unis, vous devez vous inscrire auprès d'une agence au-pair désignée par le Département d'État américain. Ces agences vous aideront à trouver une famille d'accueil et à obtenir un visa J-1. Le processus comprend des entretiens, des vérifications d'antécédents, et la préparation de documents. Une fois accepté, vous recevrez une formation avant de partir aux États-Unis.
                </p>
              </div>
              <Button asChild>
                <Link href="https://j1visa.state.gov/programs/au-pair" target="_blank">
                  En Savoir Plus sur le Programme Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                Les États-Unis offrent un environnement dynamique pour les entrepreneurs et investisseurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Marché de consommation le plus important au monde</li>
                <li>Écosystème d'innovation de premier plan</li>
                <li>Accès au capital-risque et aux investisseurs</li>
                <li>Infrastructure commerciale développée</li>
                <li>Protection de la propriété intellectuelle</li>
                <li>Incubateurs et accélérateurs de startups</li>
                <li>Réseaux d'entrepreneurs et mentors</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies et intelligence artificielle</li>
                <li>Santé et biotechnologies</li>
                <li>Énergies renouvelables et cleantech</li>
                <li>Commerce électronique et fintech</li>
                <li>Médias et divertissement</li>
                <li>Services professionnels et B2B</li>
                <li>Immobilier et construction</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visas pour Entrepreneurs et Investisseurs</h4>
                <p>
                  Plusieurs options de visa existent pour les entrepreneurs et investisseurs:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Visa E-2 (investisseur de traité) - requiert un investissement substantiel et la nationalité d'un pays ayant un traité avec les États-Unis</li>
                  <li>Visa EB-5 (investisseur immigrant) - requiert un investissement d'au moins 900 000 $ à 1,8 million $ selon la zone</li>
                  <li>Visa L-1 (transfert intra-entreprise) - pour établir une filiale américaine d'une entreprise étrangère</li>
                  <li>Visa O-1 (capacité extraordinaire) - pour les entrepreneurs reconnus dans leur domaine</li>
                  <li>International Entrepreneur Parole - pour les startups prometteuses</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://www.sba.gov/business-guide" target="_blank">
                  Guide pour Créer une Entreprise aux États-Unis
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
                    <span className="font-bold">Visa B-1/B-2:</span> Pour les voyages d'affaires ou touristiques de courte durée.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa F-1:</span> Pour les étudiants à temps plein dans des établissements académiques.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa J-1:</span> Pour les programmes d'échange (étudiants, chercheurs, stagiaires, au-pairs).
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa H-1B:</span> Pour les travailleurs spécialisés.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa O-1:</span> Pour les personnes ayant des capacités extraordinaires.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa L-1:</span> Pour les transferts intra-entreprise.
                  </li>
                  <li>
                    <span className="font-bold">Carte verte (résidence permanente):</span> Via l'emploi, la famille, l'investissement ou la loterie de diversité.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Déterminez le type de visa dont vous avez besoin</li>
                  <li>Remplissez le formulaire DS-160 en ligne</li>
                  <li>Payez les frais de demande de visa</li>
                  <li>Prenez rendez-vous à l'ambassade ou au consulat américain</li>
                  <li>Rassemblez les documents requis (varie selon le type de visa)</li>
                  <li>Passez l'entretien consulaire</li>
                  <li>Attendez le traitement de votre demande</li>
                  <li>Si approuvé, recevez votre visa</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://travel.state.gov/content/travel/en/us-visas.html" target="_blank">
                      Site Officiel des Visas Américains
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
                <h3 className="text-xl font-bold mb-4">Langue et Communication</h3>
                <p className="mb-4">
                  L'anglais est la langue principale aux États-Unis, mais avec des accents et expressions qui varient selon les régions. L'espagnol est également largement parlé dans certaines régions.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Particularités américaines:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Communication directe et informelle</li>
                    <li>Utilisation fréquente de "How are you?" comme salutation (sans attendre de réponse détaillée)</li>
                    <li>Importance du small talk (météo, sports, actualités légères)</li>
                    <li>Expressions idiomatiques nombreuses</li>
                    <li>Pourboires attendus dans les restaurants (15-20%)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>Les Américains apprécient la ponctualité, surtout en contexte professionnel</li>
                  <li>Poignée de main ferme pour les salutations professionnelles</li>
                  <li>Respect de l'espace personnel (environ un bras de distance)</li>
                  <li>Culture du "self-made" et de l'indépendance valorisée</li>
                  <li>Diversité culturelle importante selon les régions</li>
                  <li>Discussions sur la politique et la religion souvent évitées en contexte professionnel</li>
                  <li>Valorisation de l'initiative et de l'expression des opinions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Coût de la vie variable selon les villes (très élevé à New York, San Francisco)</li>
                  <li>Système de mesure impérial (miles, gallons, Fahrenheit)</li>
                  <li>Dépendance à la voiture dans la plupart des régions (sauf grandes villes)</li>
                  <li>Système de santé privé et coûteux (assurance médicale essentielle)</li>
                  <li>Culture de consommation et grands espaces commerciaux</li>
                  <li>Horaires de repas différents (déjeuner tôt, dîner vers 18h-19h)</li>
                  <li>Pourboires attendus dans de nombreux services</li>
                  <li>Grandes portions alimentaires au restaurant</li>
                  <li>Nombreux jours fériés et traditions (Thanksgiving, 4 juillet)</li>
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
                    <a href="https://travel.state.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Département d'État américain
                    </a>
                  </li>
                  <li>
                    <a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Services de Citoyenneté et d'Immigration (USCIS)
                    </a>
                  </li>
                  <li>
                    <a href="https://educationusa.state.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      EducationUSA (études aux États-Unis)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.usa.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      USA.gov (portail officiel du gouvernement)
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
                    <a href="https://www.internations.org/usa-expats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      InterNations USA
                    </a>
                    <p className="text-gray-600 text-sm">Réseau d'expatriés aux États-Unis</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/africansinamerica/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Africains aux États-Unis (Facebook)
                    </a>
                    <p className="text-gray-600 text-sm">Groupe communautaire pour les Africains vivant aux États-Unis</p>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Meetup
                    </a>
                    <p className="text-gray-600 text-sm">Groupes et événements locaux dans toutes les grandes villes</p>
                  </li>
                  <li>
                    <a href="https://www.alueducation.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      African Leadership University
                    </a>
                    <p className="text-gray-600 text-sm">Réseau pour les étudiants et professionnels africains</p>
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
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir les États-Unis?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités aux États-Unis et commencez votre aventure dans ce pays aux possibilités infinies.
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
