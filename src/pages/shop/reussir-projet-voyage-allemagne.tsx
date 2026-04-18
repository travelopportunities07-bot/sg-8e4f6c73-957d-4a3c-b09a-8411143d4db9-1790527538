import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, Shield, Download, Infinity, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

export default function ReussirProjetVoyageAllemagne() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stripePaymentLink = "https://buy.stripe.com/9B6dR1alF1OGgRB3td1sQ07";

  const scrollToOffer = () => {
    const offerSection = document.getElementById("offre-finale");
    offerSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <SEO
        title="Guide Voyage Allemagne — Décrochez un Contrat en 60 Jours | Vivre en Allemagne"
        description="La méthode utilisée par +157 candidats pour trouver emploi, visa et logement en Allemagne. Guide complet à 397€ avec accès à vie."
        image="/og-image.png"
      />

      <div className="min-h-screen bg-white">
        {/* Section 1 - HÉRO */}
        <section className="relative bg-white py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-[1100px]">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 text-[#2A3F54] px-4 py-2 rounded-full mb-6 font-medium">
                <span className="text-xl">🔥</span>
                <span>Déjà +157 candidats ont réussi grâce à cette méthode</span>
              </div>

              <div className="grid md:grid-cols-[60%_40%] gap-8 md:gap-12 items-center">
                {/* Colonne gauche - Texte */}
                <div>
                  {/* H1 */}
                  <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                    L'Allemagne recrute.<br />
                    <span className="text-[#2A3F54]">Mais sans ce guide, vous allez perdre des mois… et des milliers d'euros.</span>
                  </h1>

                  {/* Sous-titre */}
                  <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    Découvrez la méthode utilisée par +157 candidats pour décrocher un contrat en Allemagne en <strong>60 jours ou moins</strong> — même avec un niveau d'allemand débutant.
                  </p>

                  {/* Icônes de réassurance */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-[#2A3F54]">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Contrat garanti</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#2A3F54]">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Logement inclus</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#2A3F54]">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Visa approuvé</span>
                    </div>
                  </div>

                  {/* CTA Principal */}
                  <a
                    href="https://buy.stripe.com/9B6dR1alF1OGgRB3td1sQ07"
                    className="inline-block bg-[#F5A623] text-[#2A3F54] font-bold text-lg px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
                  >
                    👉 Je veux mon Guide — Accès Immédiat à 397€
                  </a>
                </div>

                {/* Colonne droite - Visuel */}
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-[#2A3F54] to-[#2A3F54]/80 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-[#F5A623] text-[#2A3F54] px-4 py-2 rounded-full font-bold text-sm">
                      157 réussites
                    </div>
                    <div className="text-white text-center z-10">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-xl font-bold mb-2">Guide Complet</p>
                      <p className="text-sm opacity-90">Votre passeport pour l'Allemagne</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - PROBLÈME */}
        <section className="py-12 md:py-20 bg-[#F4F6F8]">
          <div className="container mx-auto px-4 max-w-[1100px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Pourquoi vous allez échouer en Allemagne<br />
                <span className="text-[#2A3F54]">(et comment l'éviter)</span>
              </h2>
            </div>

            {/* 4 Douleurs */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Vous envoyez 50 CV… et personne ne répond.</p>
              </div>
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Votre visa est refusé parce que votre dossier n'est pas aux normes allemandes.</p>
              </div>
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Vous arrivez en Allemagne sans logement, sans argent, et sans réseau.</p>
              </div>
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Les agences vous facturent 2 000€ pour des infos que vous auriez pu trouver gratuitement.</p>
              </div>
            </div>

            {/* Citation témoignage */}
            <div className="bg-white p-8 rounded-lg border-l-4 border-[#F5A623] shadow-sm">
              <p className="text-lg text-gray-700 italic mb-4">
                "J'ai gaspillé 6 mois et 3 000€ avant de trouver ce guide. Aujourd'hui, je suis en Ausbildung en Pflege avec un salaire de 1 200€/mois."
              </p>
              <p className="font-bold text-[#2A3F54]">— Koffi, 23 ans, Côte d'Ivoire</p>
            </div>
          </div>
        </section>

        {/* Section 3 - SOLUTION */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-[1100px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Ce Guide est Votre Passeport pour l'Allemagne
              </h2>
              <p className="text-xl text-gray-700 mb-2">Voici ce qu'il contient</p>
            </div>

            {/* Sous-titre à 3 bénéfices */}
            <div className="bg-[#F4F6F8] p-8 rounded-lg mb-12">
              <p className="text-xl font-bold text-[#2A3F54] mb-4">Un système clé en main pour :</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Trouver un emploi, une formation ou un volontariat en 30 jours</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Éviter les arnaques et les erreurs coûteuses (visa, logement, contrats)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Bénéficier de contacts directs avec +250 employeurs en Allemagne</span>
                </li>
              </ul>
            </div>

            {/* Tableau des bénéfices */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-4 font-bold text-[#2A3F54] flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      Méthode testée par +5 000 candidats
                    </td>
                    <td className="p-4 text-gray-700">Stratégie de candidature massive (20+/semaine) pour maximiser les réponses</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-4 font-bold text-[#2A3F54] flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      Modèles prêts à l'emploi
                    </td>
                    <td className="p-4 text-gray-700">CV, lettres de motivation et emails de relance en allemand</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-4 font-bold text-[#2A3F54] flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      Contacts exclusifs
                    </td>
                    <td className="p-4 text-gray-700">Emails et numéros de téléphone des recruteurs dans les 16 Bundesländer</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-4 font-bold text-[#2A3F54] flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      Guide visa pas à pas
                    </td>
                    <td className="p-4 text-gray-700">Checklist complète pour obtenir votre visa sans refus</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-4 font-bold text-[#2A3F54] flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      Logement garanti
                    </td>
                    <td className="p-4 text-gray-700">Liste des régions où le logement est offert (Brandenburg, Thüringen…)</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-4 font-bold text-[#2A3F54] flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      Accès à vie + mises à jour
                    </td>
                    <td className="p-4 text-gray-700">Recevez les nouvelles offres et astuces gratuitement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <a
              href="https://buy.stripe.com/9B6dR1alF1OGgRB3td1sQ07"
              className="inline-block bg-[#F5A623] text-[#2A3F54] font-bold text-lg px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              👉 Je veux mon Guide — Accès Immédiat à 397€
            </a>
          </div>
        </section>

        {/* Section 4 - PREUVES SOCIALES */}
        <section className="py-12 md:py-20 bg-[#2A3F54] text-white">
          <div className="container mx-auto px-4 max-w-[1100px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Ils ont réussi grâce à ce guide. Et vous ?
              </h2>
            </div>

            {/* 3 témoignages */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="bg-white/10 backdrop-blur border-white/20 p-6">
                <div className="w-12 h-12 rounded-full bg-[#F5A623] text-[#2A3F54] font-bold flex items-center justify-center mb-4">
                  AM
                </div>
                <p className="text-white mb-4 italic">
                  "Grâce à ce guide, j'ai trouvé un FSJ en 3 semaines avec logement inclus !"
                </p>
                <p className="text-[#F5A623] font-bold">Amina, 22 ans — Maroc</p>
                <p className="text-white/80 text-sm">FSJ en Saxe</p>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20 p-6">
                <div className="w-12 h-12 rounded-full bg-[#F5A623] text-[#2A3F54] font-bold flex items-center justify-center mb-4">
                  JN
                </div>
                <p className="text-white mb-4 italic">
                  "Les modèles de CV m'ont fait gagner des mois de travail. Aujourd'hui, je suis en Ausbildung en Pflege avec un salaire de 1 100€/mois."
                </p>
                <p className="text-[#F5A623] font-bold">Jean, 32 ans — Cameroun</p>
                <p className="text-white/80 text-sm">Ausbildung Pflege</p>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20 p-6">
                <div className="w-12 h-12 rounded-full bg-[#F5A623] text-[#2A3F54] font-bold flex items-center justify-center mb-4">
                  FD
                </div>
                <p className="text-white mb-4 italic">
                  "Je ne parlais presque pas allemand… Aujourd'hui, je suis Au Pair à Munich et je gagne 300€/mois + cours d'allemand."
                </p>
                <p className="text-[#F5A623] font-bold">Fatou, 19 ans — Sénégal</p>
                <p className="text-white/80 text-sm">Au Pair à Munich</p>
              </Card>
            </div>

            {/* 3 chiffres clés */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#F5A623] mb-2">92%</div>
                <p className="text-white">des utilisateurs trouvent une opportunité en moins de 2 mois</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#F5A623] mb-2">+250</div>
                <p className="text-white">employeurs listés avec contacts directs</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#F5A623] mb-2">100%</div>
                <p className="text-white">des clients recommandent le guide</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - COMPARATIF */}
        <section className="py-12 md:py-20 bg-[#F4F6F8]">
          <div className="container mx-auto px-4 max-w-[1100px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Pourquoi payer 2 000€ à une agence quand ce guide fait mieux pour 397€ ?
              </h2>
            </div>

            {/* Tableau comparatif */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left text-[#1A1A1A] font-bold">Critère</th>
                    <th className="p-4 text-center bg-white border-l-4 border-r-4 border-[#F5A623] text-[#2A3F54] font-bold">
                      ✅ Votre Guide
                    </th>
                    <th className="p-4 text-center text-[#1A1A1A] font-bold">❌ Agences Traditionnelles</th>
                    <th className="p-4 text-center text-[#1A1A1A] font-bold">❌ Guides Génériques</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 font-medium text-[#1A1A1A]">Prix</td>
                    <td className="p-4 text-center bg-[#F5A623]/5 border-l-4 border-r-4 border-[#F5A623] font-bold text-[#2A3F54]">397€ (accès à vie)</td>
                    <td className="p-4 text-center text-gray-700">500€–2 000€</td>
                    <td className="p-4 text-center text-gray-700">10€–50€ (incomplet)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#1A1A1A]">Contacts directs</td>
                    <td className="p-4 text-center bg-[#F5A623]/5 border-l-4 border-r-4 border-[#F5A623] font-bold text-[#2A3F54]">+250 employeurs avec emails/tél</td>
                    <td className="p-4 text-center text-gray-700">Aucune transparence</td>
                    <td className="p-4 text-center text-gray-700">Listes obsolètes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#1A1A1A]">Modèles prêts</td>
                    <td className="p-4 text-center bg-[#F5A623]/5 border-l-4 border-r-4 border-[#F5A623] font-bold text-[#2A3F54]">CV, lettres, scripts d'appel</td>
                    <td className="p-4 text-center text-gray-700">Vous devez tout faire</td>
                    <td className="p-4 text-center text-gray-700">Modèles basiques</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#1A1A1A]">Stratégie</td>
                    <td className="p-4 text-center bg-[#F5A623]/5 border-l-4 border-r-4 border-[#F5A623] font-bold text-[#2A3F54]">Méthode "20+/semaine"</td>
                    <td className="p-4 text-center text-gray-700">Aucune méthode</td>
                    <td className="p-4 text-center text-gray-700">Conseils vagues</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#1A1A1A]">Support</td>
                    <td className="p-4 text-center bg-[#F5A623]/5 border-l-4 border-r-4 border-[#F5A623] font-bold text-[#2A3F54]">Email inclus</td>
                    <td className="p-4 text-center text-gray-700">Support limité</td>
                    <td className="p-4 text-center text-gray-700">Aucun support</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#1A1A1A]">Mises à jour</td>
                    <td className="p-4 text-center bg-[#F5A623]/5 border-l-4 border-r-4 border-[#F5A623] font-bold text-[#2A3F54]">Gratuites à vie</td>
                    <td className="p-4 text-center text-gray-700">Payantes</td>
                    <td className="p-4 text-center text-gray-700">Rarement mises à jour</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <a
              href="https://buy.stripe.com/9B6dR1alF1OGgRB3td1sQ07"
              className="inline-block bg-[#F5A623] text-[#2A3F54] font-bold text-lg px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              👉 Je choisis la Méthode Pro — Télécharger Maintenant
            </a>
          </div>
        </section>

        {/* Section 6 - FAQ */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-[1100px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Questions fréquentes — Tout ce que vous devez savoir
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-[#F4F6F8] rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-bold text-[#2A3F54] hover:text-[#F5A623]">
                  ❓ Je ne parle pas bien allemand, est-ce que ce guide est pour moi ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2">
                  <div className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p>Oui ! Le guide inclut des modèles de CV et lettres en allemand (niveau A2–B1 suffisant). Nous vous donnons aussi les mots-clés pour trouver des offres adaptées à votre niveau.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-[#F4F6F8] rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-bold text-[#2A3F54] hover:text-[#F5A623]">
                  ❓ Combien de temps faut-il pour trouver une opportunité ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2">
                  <div className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p>Avec la méthode "20 candidatures/semaine", 80% de nos clients trouvent une offre en 1 à 2 mois. Le secteur Pflege recrute toute l'année !</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-[#F4F6F8] rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-bold text-[#2A3F54] hover:text-[#F5A623]">
                  ❓ Est-ce que le guide fonctionne pour les visas ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2">
                  <div className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p>Absolument. Nous incluons une checklist complète pour le visa (Au Pair, FSJ, Ausbildung) et des conseils pour éviter les refus.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-[#F4F6F8] rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-bold text-[#2A3F54] hover:text-[#F5A623]">
                  ❓ Puis-je utiliser le guide si je veux partir en Au Pair ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2">
                  <div className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p>Oui ! Le guide couvre les 4 programmes principaux : Au Pair, FSJ, BFD, Ausbildung — avec des contacts d'agences certifiées.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Section 7 - OFFRE FINALE */}
        <section id="offre-finale" className="py-12 md:py-20 bg-[#2A3F54] text-white">
          <div className="container mx-auto px-4 max-w-[1100px]">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre Accès Immédiat au Guide — 397€ seulement
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                Ce guide est le résultat de 5 ans d'expérience et des mois de recherche. Il contient tout ce dont vous avez besoin pour réussir en Allemagne sans perdre de temps ni d'argent.
              </p>
            </div>

            {/* Prix */}
            <div className="text-center mb-8">
              <div className="inline-block">
                <div className="text-2xl text-white/60 line-through mb-2">597€</div>
                <div className="text-6xl font-bold text-[#F5A623] mb-2">397€</div>
                <p className="text-white/90">Accès à vie + mises à jour gratuites incluses</p>
              </div>
            </div>

            {/* Options de paiement */}
            <div className="text-center mb-8">
              <p className="text-white/90 mb-4">Paiement sécurisé : Visa, Mastercard, Amex — via Stripe / PayPal</p>
              
              {/* CTA Principal */}
              <a
                href="https://buy.stripe.com/9B6dR1alF1OGgRB3td1sQ07"
                className="inline-block bg-[#F5A623] text-[#2A3F54] font-bold text-xl px-12 py-5 rounded-lg hover:scale-105 transition-transform shadow-xl"
              >
                👉 Je veux mon Guide — Accès Immédiat à 397€
              </a>
            </div>

            {/* 3 icônes de réassurance */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <Lock className="w-12 h-12 text-[#F5A623] mb-3" />
                <p className="text-white font-medium">Paiement 100% sécurisé</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Download className="w-12 h-12 text-[#F5A623] mb-3" />
                <p className="text-white font-medium">Téléchargement immédiat</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Infinity className="w-12 h-12 text-[#F5A623] mb-3" />
                <p className="text-white font-medium">Accès à vie garanti</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}