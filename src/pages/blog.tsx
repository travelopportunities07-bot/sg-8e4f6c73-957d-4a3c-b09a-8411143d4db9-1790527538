import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { BookOpen, FileText, Users, Globe, ArrowRight, Clock, Calendar } from "lucide-react";

export default function BlogPage() {
  const { t } = useLanguage();

  const articles = [
    {
      titre: "Guide complet : Obtenir son visa pour l'Allemagne",
      categorie: "Démarches",
      description: "Tout ce que vous devez savoir sur les différents types de visa : étudiant, travail, volontariat. Documents requis et procédures détaillées.",
      date: "15 janvier 2026",
      duree: "10 min",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
      lien: "#"
    },
    {
      titre: "FSJ en Allemagne : Témoignage de Marie, 22 ans",
      categorie: "Témoignages",
      description: "Marie partage son expérience d'un an en tant que volontaire dans une maison de retraite à Munich. Un récit inspirant et pratique.",
      date: "10 janvier 2026",
      duree: "8 min",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      lien: "#"
    },
    {
      titre: "Top 10 des universités allemandes pour étudiants internationaux",
      categorie: "Études",
      description: "Classement des meilleures universités allemandes accessibles aux étudiants francophones, avec leurs spécialités et programmes phares.",
      date: "5 janvier 2026",
      duree: "12 min",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      lien: "#"
    },
    {
      titre: "Apprendre l'allemand rapidement : Nos meilleures astuces",
      categorie: "Langue",
      description: "Méthodes efficaces, ressources gratuites et conseils pratiques pour progresser rapidement en allemand avant votre départ.",
      date: "28 décembre 2025",
      duree: "7 min",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
      lien: "#"
    },
    {
      titre: "Formation d'infirmier en Allemagne : Salaire et débouchés",
      categorie: "Formations",
      description: "Tout savoir sur la formation Pflegeausbildung : durée, rémunération, conditions de travail et perspectives d'évolution professionnelle.",
      date: "20 décembre 2025",
      duree: "9 min",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      lien: "#"
    },
    {
      titre: "Coût de la vie en Allemagne : Budget étudiant réaliste",
      categorie: "Vie pratique",
      description: "Loyer, alimentation, transport, loisirs : découvrez le budget mensuel moyen pour vivre confortablement en Allemagne en 2026.",
      date: "15 décembre 2025",
      duree: "6 min",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
      lien: "#"
    }
  ];

  const guides = [
    {
      titre: "Guide du volontariat FSJ/BFD/FWD",
      description: "Document PDF complet sur les programmes de volontariat en Allemagne",
      pages: "25 pages",
      icone: FileText,
      couleur: "text-blue-600"
    },
    {
      titre: "Checklist départ en Allemagne",
      description: "Liste complète des démarches à effectuer avant et après votre arrivée",
      pages: "8 pages",
      icone: BookOpen,
      couleur: "text-green-600"
    },
    {
      titre: "Glossaire français-allemand",
      description: "Vocabulaire essentiel pour les démarches administratives et la vie quotidienne",
      pages: "15 pages",
      icone: Globe,
      couleur: "text-purple-600"
    },
    {
      titre: "Annuaire des organismes",
      description: "Contacts utiles : ambassades, universités, organismes de volontariat, services publics",
      pages: "12 pages",
      icone: Users,
      couleur: "text-orange-600"
    }
  ];

  const categories = [
    { nom: "Tous les articles", count: 42 },
    { nom: "Démarches", count: 12 },
    { nom: "Témoignages", count: 8 },
    { nom: "Études", count: 10 },
    { nom: "Formations", count: 7 },
    { nom: "Vie pratique", count: 5 }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Ressources gratuites
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Blog & Guides pratiques
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Conseils, témoignages et guides complets pour réussir votre projet en Allemagne. Toutes les informations dont vous avez besoin, rédigées par nos experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((categorie, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-blue-900 hover:bg-blue-800" : ""}
              >
                {categorie.nom} ({categorie.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Derniers articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos articles récents pour tout savoir sur les opportunités en Allemagne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.titre}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.categorie}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">
                    {article.titre}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{article.duree}</span>
                    </div>
                  </div>
                  <Link href={article.lien}>
                    <Button variant="outline" className="w-full">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              Voir tous les articles
            </Button>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Guides pratiques à télécharger
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Documents complets et gratuits pour vous accompagner dans vos démarches
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guides.map((guide, index) => {
              const Icone = guide.icone;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-green-500">
                  <div className="flex items-start gap-6">
                    <div className={`${guide.couleur}`}>
                      <Icone className="h-16 w-16" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        {guide.titre}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {guide.description}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        📄 {guide.pages}
                      </p>
                      <Button className="bg-green-500 hover:bg-green-600">
                        Télécharger gratuitement
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Restez informé des nouveautés
                </h2>
                <p className="text-xl text-gray-700">
                  Recevez nos derniers articles, guides et conseils directement dans votre boîte mail
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                />
                <Button size="lg" className="bg-green-500 hover:bg-green-600 whitespace-nowrap">
                  S'abonner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                📧 Newsletter mensuelle • Désabonnement en un clic • Pas de spam
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Les articles et guides sont utiles, mais rien ne remplace un accompagnement sur mesure. Contactez VivrEnAllemagne pour bénéficier de notre expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                Consultation gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demarches">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                Voir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}