import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Globe, Heart, Award, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InterestSection } from '@/components/destinations/InterestSection';
import { PaymentSection } from '@/components/destinations/PaymentSection';
import { ContactForm } from '@/components/destinations/ContactForm';

export default function IrlandePage() {
  return (
    <Layout 
      title="Irlande | AfricaOpportunités"
      description="Découvrez les opportunités en Irlande pour les résidents africains - travail, études, volontariat et plus."
    >
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image 
          src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e" 
          alt="Irlande" 
          fill 
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🇮🇪 Irlande</h1>
            <p className="text-xl text-white max-w-2xl">
              Découvrez les opportunités dans l'île d'émeraude, hub technologique européen offrant un environnement accueillant et dynamique.
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
                L'Irlande, surnommée "l'île d'émeraude" pour ses paysages verdoyants, est un pays dynamique situé à l'ouest de l'Europe. Membre de l'Union européenne, l'Irlande s'est transformée en quelques décennies en une économie moderne et prospère, devenant un hub majeur pour les technologies, la finance et la pharmaceutique.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Avec une population jeune et multiculturelle, particulièrement dans les grandes villes comme Dublin, l'Irlande offre un environnement accueillant pour les internationaux. Le pays est réputé pour son système éducatif de qualité, sa culture riche et son atmosphère chaleureuse.
              </p>
              <p className="text-lg text-gray-700">
                Pour les résidents africains, l'Irlande présente des opportunités intéressantes dans les secteurs technologiques, pharmaceutiques, financiers et éducatifs, avec une politique d'immigration relativement ouverte pour les travailleurs qualifiés et les étudiants internationaux.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations Clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Capitale:</span> Dublin
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Langues officielles:</span> Irlandais (Gaélique), Anglais
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Population:</span> Environ 5 millions
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Monnaie:</span> Euro (€)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Climat:</span> Océanique tempéré, doux et humide
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Principales villes:</span> Dublin, Cork, Galway, Limerick, Waterford
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
          <h2 className="text-3xl font-bold mb-8 text-center">Opportunités en Irlande</h2>
          
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
                L'Irlande offre d'excellentes opportunités d'emploi pour les professionnels qualifiés, particulièrement dans les secteurs suivants:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies de l'information (nombreuses multinationales comme Google, Facebook, Microsoft)</li>
                <li>Pharmaceutique et biotechnologies</li>
                <li>Services financiers et fintech</li>
                <li>Santé et recherche médicale</li>
                <li>Enseignement et éducation</li>
                <li>Industrie agroalimentaire</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Exigences et Procédures</h4>
              <p className="mb-4">
                Pour travailler en Irlande en tant que résident africain, vous aurez généralement besoin:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>D'un permis de travail (Critical Skills Employment Permit ou General Employment Permit)</li>
                <li>D'une offre d'emploi d'un employeur irlandais</li>
                <li>De qualifications professionnelles reconnues</li>
                <li>De compétences linguistiques en anglais</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Critical Skills Employment Permit</h4>
                <p>
                  Ce permis est destiné aux professionnels hautement qualifiés dans des secteurs en pénurie. Il offre un parcours accéléré vers la résidence permanente et permet aux conjoints et partenaires de travailler sans restriction. Le salaire annuel minimum requis est généralement de 32 000 € ou 64 000 € selon la profession.
                </p>
              </div>
              <Button asChild>
                <Link href="https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/" target="_blank">
                  En Savoir Plus sur les Permis de Travail
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="formations" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Formation</h3>
              <p className="mb-4">
                L'Irlande est une destination d'études de plus en plus populaire, offrant:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Universités et instituts technologiques de renommée mondiale</li>
                <li>Programmes d'études en anglais</li>
                <li>Environnement multiculturel et accueillant</li>
                <li>Possibilité de travailler pendant les études (20h/semaine)</li>
                <li>Autorisation de séjour post-études de 1-2 ans pour chercher un emploi</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Principales Institutions</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Trinity College Dublin</li>
                <li>University College Dublin</li>
                <li>National University of Ireland, Galway</li>
                <li>University College Cork</li>
                <li>Dublin City University</li>
                <li>Technological University Dublin</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Bourses Disponibles</h4>
                <p className="mb-2">
                  Plusieurs programmes de bourses sont disponibles pour les étudiants africains:
                </p>
                <ul className="list-disc pl-6">
                  <li>Government of Ireland International Education Scholarships</li>
                  <li>Irish Aid Fellowship Programme (spécifiquement pour les étudiants de pays africains)</li>
                  <li>Bourses spécifiques aux universités</li>
                  <li>Bourses Erasmus Mundus</li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://www.educationinireland.com/en/" target="_blank">
                  Explorer les Opportunités d'Études
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="tourisme" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Tourisme</h3>
              <p className="mb-4">
                L'Irlande offre une expérience touristique riche et variée avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Des paysages spectaculaires comme les falaises de Moher et l'Anneau du Kerry</li>
                <li>Un riche patrimoine historique et culturel</li>
                <li>Des villes dynamiques comme Dublin, Cork et Galway</li>
                <li>Une scène musicale traditionnelle vibrante</li>
                <li>Des châteaux médiévaux et sites préhistoriques</li>
                <li>Une gastronomie locale de qualité</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Informations Visa Touristique</h4>
              <p className="mb-4">
                Les résidents africains ont généralement besoin d'un visa pour visiter l'Irlande:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa de court séjour (type C) valable jusqu'à 90 jours</li>
                <li>Documents requis: passeport valide, preuve d'hébergement, assurance voyage, itinéraire, etc.</li>
                <li>Demande à soumettre à l'ambassade ou au consulat d'Irlande dans votre pays</li>
                <li>Notez que l'Irlande n'est pas dans l'espace Schengen, un visa séparé est nécessaire</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Meilleures Périodes pour Visiter</h4>
                <p>
                  Mai à septembre pour le climat le plus clément, mars pour la Saint-Patrick, été pour les festivals culturels et musicaux.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.ireland.com/fr-fr/" target="_blank">
                  Découvrir l'Irlande Touristique
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="volontariat" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Volontariat</h3>
              <p className="mb-4">
                L'Irlande offre diverses possibilités de volontariat pour les résidents africains:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Service volontaire européen (SVE)</li>
                <li>Corps européen de solidarité</li>
                <li>Programmes de volontariat environnemental</li>
                <li>Volontariat dans des organisations caritatives</li>
                <li>Projets communautaires et culturels</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Organisations Principales</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Volunteer Ireland</li>
                <li>Léargas (agence nationale pour les programmes européens)</li>
                <li>Croix-Rouge irlandaise</li>
                <li>Concern Worldwide</li>
                <li>Trócaire</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Visa et Conditions</h4>
                <p>
                  Pour participer à des programmes de volontariat en Irlande, vous aurez généralement besoin d'un visa spécifique. Certains programmes comme le SVE facilitent les démarches administratives et peuvent couvrir les frais de voyage, d'hébergement et offrir une allocation mensuelle.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.volunteer.ie/" target="_blank">
                  Explorer les Programmes de Volontariat
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="stages" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités de Stages</h3>
              <p className="mb-4">
                Les stages en Irlande offrent une excellente expérience professionnelle dans divers secteurs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Grandes entreprises technologiques (Google, Facebook, LinkedIn, etc.)</li>
                <li>Entreprises pharmaceutiques (Pfizer, Johnson & Johnson, etc.)</li>
                <li>Institutions financières</li>
                <li>Startups innovantes</li>
                <li>Organisations internationales</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Programmes Notables</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IAESTE Irlande</li>
                <li>AIESEC Irlande</li>
                <li>Erasmus+ Stages</li>
                <li>Programmes de stages des universités irlandaises</li>
                <li>Programmes de stages des grandes entreprises</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Exigences et Rémunération</h4>
                <p>
                  En Irlande, les stages sont généralement rémunérés, avec un salaire minimum national applicable. Pour les stages obligatoires dans le cadre des études, un visa étudiant suffit généralement. Pour les autres stages, un permis de travail peut être nécessaire.
                </p>
              </div>
              <Button asChild>
                <Link href="https://gradireland.com/careers-advice/work-experience-internships" target="_blank">
                  Découvrir les Opportunités de Stages
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="au-pair" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Au-pair</h3>
              <p className="mb-4">
                Le programme au-pair en Irlande permet aux jeunes de vivre avec une famille irlandaise tout en s'occupant des enfants et en découvrant la culture locale:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hébergement et repas fournis par la famille d'accueil</li>
                <li>Allocation hebdomadaire d'environ 100-120 € par semaine</li>
                <li>Possibilité de suivre des cours d'anglais</li>
                <li>30-35 heures de travail par semaine maximum</li>
                <li>1-2 jours de congé par semaine et vacances payées</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Conditions et Exigences</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Âge: entre 18 et 27 ans</li>
                <li>Durée: 6 à 12 mois</li>
                <li>Niveau d'anglais intermédiaire</li>
                <li>Expérience avec les enfants</li>
                <li>Visa approprié (généralement un visa d'étudiant si vous suivez des cours d'anglais)</li>
              </ul>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Procédure de Demande</h4>
                <p>
                  Pour devenir au-pair en Irlande, vous devez d'abord trouver une famille d'accueil via une agence au-pair ou des plateformes en ligne. Une fois accepté, vous pourrez demander un visa approprié, généralement un visa d'étudiant si vous vous inscrivez à des cours d'anglais.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.aupairworld.com/en/au-pair-programs/ireland" target="_blank">
                  En Savoir Plus sur les Programmes Au-pair
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="business" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Opportunités Business</h3>
              <p className="mb-4">
                L'Irlande offre un environnement favorable aux affaires avec:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Un taux d'imposition des sociétés compétitif (12,5%)</li>
                <li>Un accès au marché européen</li>
                <li>Une main-d'œuvre qualifiée et anglophone</li>
                <li>Un écosystème d'innovation dynamique</li>
                <li>Des programmes de soutien aux entrepreneurs</li>
                <li>Une économie ouverte et orientée vers l'international</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Secteurs Prometteurs</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technologies de l'information et fintech</li>
                <li>Sciences de la vie et biotechnologies</li>
                <li>Services financiers</li>
                <li>Agroalimentaire</li>
                <li>Énergies renouvelables</li>
                <li>Industries créatives</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Création d'Entreprise</h4>
                <p>
                  Pour créer une entreprise en Irlande en tant que non-résident de l'UE, vous pouvez demander un visa d'investisseur ou d'entrepreneur. Le programme Immigrant Investor Programme (IIP) ou le Start-up Entrepreneur Programme (STEP) offrent des voies pour les entrepreneurs et investisseurs étrangers.
                </p>
              </div>
              <Button asChild>
                <Link href="https://www.idaireland.com/" target="_blank">
                  Informations sur l'Investissement en Irlande
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
                    <span className="font-bold">Visa de court séjour:</span> Pour les séjours touristiques ou d'affaires de courte durée (jusqu'à 90 jours).
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa d'étudiant:</span> Pour les études dans une institution irlandaise.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Permis de travail:</span> Critical Skills Employment Permit ou General Employment Permit.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-bold">Visa d'investisseur/entrepreneur:</span> Pour les personnes souhaitant investir ou créer une entreprise en Irlande.
                  </li>
                  <li>
                    <span className="font-bold">Visa de regroupement familial:</span> Pour rejoindre un membre de la famille en Irlande.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Procédure de Demande</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Déterminez le type de visa dont vous avez besoin</li>
                  <li>Rassemblez les documents requis (varie selon le type de visa)</li>
                  <li>Soumettez votre demande en ligne ou à l'ambassade/consulat d'Irlande</li>
                  <li>Payez les frais de demande</li>
                  <li>Attendez le traitement de votre demande</li>
                  <li>Une fois approuvé, vous recevrez votre visa</li>
                </ol>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="https://www.irishimmigration.ie/" target="_blank">
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
                  L'anglais est largement parlé en Irlande, bien que l'irlandais (gaélique) soit la première langue officielle. L'accent irlandais peut être différent de l'anglais britannique ou américain, mais vous vous y habituerez rapidement.
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">Expressions irlandaises courantes:</p>
                  <ul className="mt-2 space-y-1">
                    <li>"What's the craic?" - Comment ça va?</li>
                    <li>"Grand" - Bien/OK</li>
                    <li>"Thanks a million" - Merci beaucoup</li>
                    <li>"Cheers" - Merci/Au revoir</li>
                    <li>"Sláinte" - Santé (pour trinquer)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Étiquette Sociale</h3>
                <ul className="space-y-3">
                  <li>Les Irlandais sont généralement chaleureux, amicaux et accueillants</li>
                  <li>L'humour et la conversation sont très valorisés</li>
                  <li>La ponctualité est appréciée mais pas aussi stricte que dans d'autres pays européens</li>
                  <li>Offrir de payer sa tournée de boissons est une coutume sociale importante</li>
                  <li>Les pubs sont des lieux de socialisation centraux dans la culture irlandaise</li>
                  <li>Évitez les discussions sur les troubles en Irlande du Nord à moins d'être bien informé</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vie Quotidienne</h3>
                <ul className="space-y-3">
                  <li>Le coût de la vie est élevé, particulièrement à Dublin</li>
                  <li>Le climat est tempéré mais très changeant, prévoyez toujours un imperméable</li>
                  <li>Les transports publics sont bons dans les grandes villes, mais limités dans les zones rurales</li>
                  <li>Le système de santé est de bonne qualité</li>
                  <li>La musique traditionnelle et les sports gaéliques font partie intégrante de la culture</li>
                  <li>Les magasins sont généralement ouverts tard le jeudi soir</li>
                  <li>La Saint-Patrick (17 mars) est une fête nationale majeure</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Ressources Utiles</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold mb-4'>Sites Officiels</h3>
                <ul className='space-y-3'>
                  <li>
                    <a href='https://www.irishimmigration.ie/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                      Service irlandais de naturalisation et d'immigration
                    </a>
                  </li>
                  <li>
                    <a href='https://www.citizensinformation.ie/en/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                      Citizens Information (informations sur la vie en Irlande)
                    </a>
                  </li>
                  <li>
                    <a href='https://www.educationinireland.com/en/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                      Education in Ireland
                    </a>
                  </li>
                  <li>
                    <a href='https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                      Department of Enterprise, Trade and Employment
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold mb-4'>Communautés et Réseaux</h3>
                <ul className='space-y-3'>
                  <li>
                    <a href='https://www.internations.org/dublin-expats' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                      InterNations Dublin
                    </a>
                    <p className='text-gray-600 text-sm'>Réseau d'expatriés en Irlande</p>
                  </li>
                  <li>
                    <a href='https://www.facebook.com/groups/africansinireland/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                      Africains en Irlande (Facebook)
                    </a>
                    <p className='text-gray-600 text-sm'>Groupe communautaire pour les Africains vivant en Irlande</p>
                  </li>
                  <li>
                    <a href='https://www.meetup.com/cities/ie/dublin/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                      Meetup Dublin
                    </a>
                    <p className='text-gray-600 text-sm'>Groupes et événements locaux</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <div className='container mx-auto px-4'>
        <InterestSection />
      </div>

      {/* Payment Section */}
      <PaymentSection />

      {/* Contact Form */}
      <ContactForm />

      {/* Call to Action */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Découvrir l'Irlande?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explorez les opportunités en Irlande et commencez votre aventure dans ce pays accueillant et dynamique.
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