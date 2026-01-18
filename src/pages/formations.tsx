import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { Stethoscope, Wrench, ChefHat, Building2, CheckCircle, ArrowRight, GraduationCap, Euro, Clock } from "lucide-react";

export default function FormationsPage() {
  const { t } = useLanguage();

  const formations = [
    {
      titre: "Soins infirmiers (Pflegeausbildung)",
      description: "Formation professionnelle de 3 ans pour devenir infirmier/infirmière qualifié(e). Formation rémunérée avec diplôme reconnu internationalement.",
      duree: "3 ans",
      salaire: "1.100€ - 1.300€/mois",
      debouches: "Hôpitaux, cliniques, EHPAD, soins à domicile",
      conditions: ["Niveau Bac ou équivalent", "Motivation pour le secteur médical", "Allemand niveau B1-B2"],
      avantages: ["Formation gratuite et rémunérée", "Diplôme reconnu en Europe", "Forte demande d'emploi", "Évolution de carrière rapide"],
      icone: Stethoscope,
      couleur: "text-red-500"
    },
    {
      titre: "Métiers techniques (Mechatroniker)",
      description: "Formation en mécatronique, électrotechnique, ou génie industriel. Débouchés dans l'industrie automobile et manufacturière.",
      duree: "3-3,5 ans",
      salaire: "900€ - 1.200€/mois",
      debouches: "Industrie automobile, machines-outils, robotique",
      conditions: ["Niveau Bac technique", "Aptitudes en sciences", "Allemand niveau B1"],
      avantages: ["Secteur en forte croissance", "Salaires attractifs", "Technologie de pointe", "Opportunités internationales"],
      icone: Wrench,
      couleur: "text-blue-600"
    },
    {
      titre: "Hôtellerie-Restauration (Gastronomie)",
      description: "Formation en cuisine, service, ou gestion hôtelière. Secteur dynamique avec nombreuses opportunités en Allemagne.",
      duree: "3 ans",
      salaire: "800€ - 1.000€/mois",
      debouches: "Restaurants, hôtels, traiteurs, événementiel",
      conditions: ["Passion pour la gastronomie", "Sens du service", "Allemand niveau A2-B1"],
      avantages: ["Secteur international", "Créativité au quotidien", "Évolution rapide", "Réseau professionnel étendu"],
      icone: ChefHat,
      couleur: "text-orange-500"
    },
    {
      titre: "Commerce et gestion (Kaufmann/Kauffrau)",
      description: "Formation commerciale polyvalente : vente, marketing, comptabilité, gestion. Applicable dans tous les secteurs.",
      duree: "2-3 ans",
      salaire: "850€ - 1.100€/mois",
      debouches: "Entreprises de tous secteurs, banques, administrations",
      conditions: ["Bac général ou professionnel", "Sens commercial", "Allemand niveau B1-B2"],
      avantages: ["Formation polyvalente", "Nombreux débouchés", "Évolution vers management", "Compétences transférables"],
      icone: Building2,
      couleur: "text-green-600"
    }
  ];

  const systeme = [
    {
      titre: "Le système dual allemand",
      description: "Formation en alternance unique combinant théorie à l'école professionnelle et pratique en entreprise. Reconnue mondialement pour son excellence."
    },
    {
      titre: "Rémunération durant la formation",
      description: "Contrairement à la France, toutes les formations professionnelles en Allemagne sont rémunérées dès le premier jour. Salaire progressif sur 3 ans."
    },
    {
      titre: "Débouchés garantis",
      description: "Plus de 90% des apprentis trouvent un emploi immédiatement après leur formation. Secteurs en forte demande de main-d'œuvre qualifiée."
    },
    {
      titre: "Diplôme reconnu",
      description: "Diplômes professionnels reconnus dans toute l'Europe et valorisés internationalement. Équivalents aux diplômes universitaires."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Ausbildung en Allemagne
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Formations professionnelles en Allemagne
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Formez-vous dans un métier d'avenir avec le système dual allemand. Formation gratuite, rémunérée et diplôme reconnu en Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                  Demander des informations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/rendez-vous">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                  Consultation gratuite
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nos formations professionnelles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les principales formations professionnelles accessibles en Allemagne avec Aisso International Ltd
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {formations.map((formation, index) => {
              const Icone = formation.icone;
              return (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${formation.couleur}`}>
                      <Icone className="h-16 w-16" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        {formation.titre}
                      </h3>
                      <p className="text-gray-700">
                        {formation.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <Clock className="h-5 w-5 text-blue-600 mb-2" />
                      <p className="text-xs text-gray-600 mb-1">Durée</p>
                      <p className="font-semibold text-blue-900">{formation.duree}</p>
                    </div>
                    <div>
                      <Euro className="h-5 w-5 text-green-600 mb-2" />
                      <p className="text-xs text-gray-600 mb-1">Salaire</p>
                      <p className="font-semibold text-green-600">{formation.salaire}</p>
                    </div>
                    <div>
                      <GraduationCap className="h-5 w-5 text-purple-600 mb-2" />
                      <p className="text-xs text-gray-600 mb-1">Débouchés</p>
                      <p className="font-semibold text-purple-600 text-sm">{formation.debouches}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold text-blue-900 mb-3">Conditions requises :</p>
                    <ul className="space-y-2">
                      {formation.conditions.map((condition, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <p className="font-semibold text-green-600 mb-3">Avantages :</p>
                    <ul className="space-y-2">
                      {formation.avantages.map((avantage, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{avantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Le système de formation allemand
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un modèle d'excellence reconnu mondialement pour la qualité de ses formations professionnelles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {systeme.map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">
                    {item.titre}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lancez votre carrière en Allemagne
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Aisso International Ltd vous accompagne de A à Z : choix de formation, dossier de candidature, cours d'allemand, et suivi personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
                Commencer mon projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/rendez-vous">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}