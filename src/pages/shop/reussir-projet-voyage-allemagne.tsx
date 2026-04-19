import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function ReussirProjetVoyageAllemagne() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
      <SEO
        title="Guide Réussir Son Projet de Voyage en Allemagne - 397€"
        description="La méthode utilisée par +157 candidats pour trouver emploi, visa et logement en Allemagne. Guide complet à 397€ avec accès à vie."
        image="/og-image.png"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-block bg-orange-50 border border-[#F5A623] rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-[#2A3F54]">
                    🔥 Déjà +157 candidats ont réussi grâce à cette méthode
                  </span>
                </div>

                {/* H1 */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
                  L'Allemagne recrute.
                  <br />
                  <span className="text-[#2A3F54]">
                    Mais sans ce guide, vous allez perdre des mois... et des milliers d'euros.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Découvrez la méthode utilisée par +157 candidats pour décrocher un contrat en Allemagne en 60 jours ou moins — même avec un niveau d'allemand débutant.
                </p>

                {/* Reassurance Icons */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">Contrat garanti</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">Logement inclus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">Visa approuvé</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://buy.stripe.com/9B6dR1alF1OGgRB3td1sQ07"
                  className="inline-block bg-[#F5A623] text-[#2A3F54] font-bold text-lg px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
                >
                  👉 Je veux mon Guide — Accès Immédiat à 397€
                </a>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative w-full max-w-[500px] mx-auto">
                  <img
                    src="/2image_hero.png"
                    alt="Guide Complet pour Réussir en Allemagne"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2A3F54]/90 to-transparent rounded-b-2xl p-6">
                    <p className="text-white text-2xl font-bold text-center">
                      Guide Complet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Banner 1 */}
        <div className="bg-[#F5A623] py-4 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              ✨ +157 candidats ont déjà réussi ✨ Accès à vie garanti ✨ Support email inclus ✨ Mises à jour gratuites ✨
            </span>
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              ✨ +157 candidats ont déjà réussi ✨ Accès à vie garanti ✨ Support email inclus ✨ Mises à jour gratuites ✨
            </span>
          </div>
        </div>

        {/* Problem Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2A3F54] mb-4">
              Pourquoi vous allez échouer en Allemagne
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">(et comment l'éviter)</p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Vous envoyez 50 CV… et personne ne répond.",
                "Votre visa est refusé parce que votre dossier n'est pas aux normes allemandes.",
                "Vous arrivez en Allemagne sans logement, sans argent, et sans réseau.",
                "Les agences vous facturent 2 000€ pour des infos que vous auriez pu trouver gratuitement."
              ].map((pain, index) => (
                <div key={index} className="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-xl">❌</span>
                    </div>
                    <p className="text-gray-700 font-medium">{pain}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="max-w-3xl mx-auto bg-white border-l-4 border-[#F5A623] rounded-lg p-8 shadow-xl">
              <p className="text-lg text-gray-700 italic mb-4">
                "J'ai gaspillé 6 mois et 3 000€ avant de trouver ce guide. Aujourd'hui, je suis en Ausbildung en Pflege avec un salaire de 1 200€/mois."
              </p>
              <p className="text-[#2A3F54] font-bold">— Koffi, 23 ans, Côte d'Ivoire</p>
            </div>
          </div>
        </section>

        {/* Scrolling Banner 2 */}
        <div className="bg-[#F5A623] py-4 overflow-hidden">
          <div className="animate-scroll-reverse whitespace-nowrap">
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              💼 Employeurs illimités 💼 Modèles prêts à l'emploi 💼 Stratégie éprouvée 💼 Contacts directs 💼
            </span>
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              💼 Employeurs illimités 💼 Modèles prêts à l'emploi 💼 Stratégie éprouvée 💼 Contacts directs 💼
            </span>
          </div>
        </div>

        {/* Solution Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2A3F54] mb-4">
              Ce Guide est Votre Passeport pour l'Allemagne
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">Voici ce qu'il contient</p>

            {/* Subtitle */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-2xl font-semibold text-[#2A3F54] mb-4">Un système clé en main pour :</p>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>— Trouver un emploi, une formation ou un volontariat en 30 jours</li>
                <li>— Éviter les arnaques et les erreurs coûteuses (visa, logement, contrats)</li>
                <li>— Bénéficier de contacts directs avec un nombre illimité d'employeurs en Allemagne</li>
              </ul>
            </div>

            {/* Benefits Table */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12 border-2 border-[#F5A623]">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#2A3F54] to-[#1a2d3d]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">✅ Bénéfice</th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Détail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      benefit: "Méthode testée par +157 candidats",
                      detail: "Stratégie de candidature massive (20+/semaine) pour maximiser les réponses"
                    },
                    {
                      benefit: "Modèles prêts à l'emploi",
                      detail: "CV, lettres de motivation et emails de relance en allemand"
                    },
                    {
                      benefit: "Contacts exclusifs",
                      detail: "Nombre d'employeurs illimité avec emails et numéros de téléphone dans les 16 Bundesländer"
                    },
                    {
                      benefit: "Guide visa pas à pas",
                      detail: "Checklist complète pour obtenir votre visa sans refus"
                    },
                    {
                      benefit: "Logement garanti",
                      detail: "Liste des régions où le logement est offert (Brandenburg, Thüringen…)"
                    },
                    {
                      benefit: "Accès à vie + mises à jour",
                      detail: "Recevez les nouvelles offres et astuces gratuitement"
                    }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#2A3F54]">{item.benefit}</td>
                      <td className="px-6 py-4 text-gray-700">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://buy.stripe.com/9B6dR1alF1OGgRB3td1sQ07"
                className="inline-block bg-[#F5A623] text-[#2A3F54] font-bold text-lg px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
              >
                👉 Je veux mon Guide — Accès Immédiat à 397€
              </a>
            </div>
          </div>
        </section>

        {/* Scrolling Banner 3 */}
        <div className="bg-[#F5A623] py-4 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              🎯 92% de réussite 🎯 Support inclus 🎯 Méthode éprouvée 🎯 Accès immédiat 🎯
            </span>
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              🎯 92% de réussite 🎯 Support inclus 🎯 Méthode éprouvée 🎯 Accès immédiat 🎯
            </span>
          </div>
        </div>

        {/* Social Proof Section */}
        <section className="py-20 bg-[#2A3F54] text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Ils ont réussi grâce à ce guide. Et vous ?
            </h2>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  initials: "AM",
                  text: "Grâce à ce guide, j'ai trouvé un FSJ en 3 semaines avec logement inclus !",
                  name: "Amina, 22 ans — Maroc",
                  program: "FSJ en Saxe"
                },
                {
                  initials: "JN",
                  text: "Les modèles de CV m'ont fait gagner des mois de travail. Aujourd'hui, je suis en Ausbildung en Pflege avec un salaire de 1 100€/mois.",
                  name: "Jean, 32 ans — Cameroun",
                  program: "Ausbildung Pflege"
                },
                {
                  initials: "FD",
                  text: "Je ne parlais presque pas allemand… Aujourd'hui, je suis Au Pair à Munich et je gagne 300€/mois + cours d'allemand.",
                  name: "Fatou, 19 ans — Sénégal",
                  program: "Au Pair à Munich"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center text-[#2A3F54] font-bold text-xl mb-4">
                    {testimonial.initials}
                  </div>
                  <p className="text-white/90 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-[#F5A623]">{testimonial.name}</p>
                  <p className="text-white/70 text-sm">{testimonial.program}</p>
                </div>
              ))}
            </div>

            {/* Key Numbers */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "92%", label: "des utilisateurs trouvent une opportunité en moins de 2 mois" },
                { number: "Illimité", label: "employeurs listés avec contacts directs" },
                { number: "100%", label: "des clients recommandent le guide" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-[#F5A623] mb-2">{stat.number}</div>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scrolling Banner 4 */}
        <div className="bg-[#F5A623] py-4 overflow-hidden">
          <div className="animate-scroll-reverse whitespace-nowrap">
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              ⭐ 100% recommandé ⭐ Paiement sécurisé ⭐ Garantie satisfait ⭐ Téléchargement immédiat ⭐
            </span>
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              ⭐ 100% recommandé ⭐ Paiement sécurisé ⭐ Garantie satisfait ⭐ Téléchargement immédiat ⭐
            </span>
          </div>
        </div>

        {/* Comparison Table Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2A3F54] mb-12">
              Pourquoi payer 2 000€ à une agence quand ce guide fait mieux pour 397€ ?
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                <thead className="bg-gradient-to-r from-[#2A3F54] to-[#1a2d3d]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-bold">Critère</th>
                    <th className="px-6 py-4 text-center text-white font-bold bg-[#F5A623] text-[#2A3F54]">✅ Votre Guide</th>
                    <th className="px-6 py-4 text-center text-white font-bold">❌ Agences Traditionnelles</th>
                    <th className="px-6 py-4 text-center text-white font-bold">❌ Guides Génériques</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { criterion: "Prix", guide: "397€ (accès à vie)", agencies: "500€–2 000€", generic: "10€–50€ (incomplet)" },
                    { criterion: "Contacts directs", guide: "Nombre d'employeurs illimité avec emails/tél", agencies: "Aucune transparence", generic: "Listes obsolètes" },
                    { criterion: "Modèles prêts", guide: "CV, lettres, scripts d'appel", agencies: "Vous devez tout faire", generic: "Modèles basiques" },
                    { criterion: "Stratégie", guide: "Méthode '20+/semaine'", agencies: "Aucune méthode", generic: "Conseils vagues" },
                    { criterion: "Support", guide: "Email inclus", agencies: "Support limité", generic: "Aucun support" },
                    { criterion: "Mises à jour", guide: "Gratuites à vie", agencies: "Payantes", generic: "Rarement mises à jour" }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.criterion}</td>
                      <td className="px-6 py-4 text-center bg-[#F5A623]/10 border-x-4 border-[#F5A623] font-semibold text-[#2A3F54]">
                        {row.guide}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.agencies}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.generic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://buy.stripe.com/9B6dR1alF1OGgRB3td1sQ07"
                className="inline-block bg-[#F5A623] text-[#2A3F54] font-bold text-lg px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
              >
                👉 Je profite de l'offre exceptionnelle - Accès Immédiat à 397 €
              </a>
            </div>
          </div>
        </section>

        {/* Scrolling Banner 5 */}
        <div className="bg-[#F5A623] py-4 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              📚 Guide complet 📚 Modèles inclus 📚 Support dédié 📚 Résultats garantis 📚
            </span>
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              📚 Guide complet 📚 Modèles inclus 📚 Support dédié 📚 Résultats garantis 📚
            </span>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2A3F54] mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">Tout ce que vous devez savoir</p>

            <div className="space-y-4">
              {[
                {
                  question: "Je ne parle pas bien allemand, est-ce que ce guide est pour moi ?",
                  answer: "Oui ! Le guide inclut des modèles de CV et lettres en allemand (niveau A2–B1 suffisant). Nous vous donnons aussi les mots-clés pour trouver des offres adaptées à votre niveau."
                },
                {
                  question: "Combien de temps faut-il pour trouver une opportunité ?",
                  answer: "Avec la méthode '20 candidatures/semaine', 80% de nos clients trouvent une offre en 1 à 2 mois. Le secteur Pflege recrute toute l'année !"
                },
                {
                  question: "Est-ce que le guide fonctionne pour les visas ?",
                  answer: "Absolument. Nous incluons une checklist complète pour le visa (Au Pair, FSJ, Ausbildung) et des conseils pour éviter les refus."
                },
                {
                  question: "Puis-je utiliser le guide si je veux partir en Au Pair ?",
                  answer: "Oui ! Le guide couvre les 4 programmes principaux : Au Pair, FSJ, BFD, Ausbildung — avec des contacts d'agences certifiées."
                }
              ].map((faq, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#F5A623] transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#2A3F54] text-lg">❓ {faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-[#F5A623] transform transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                      <p className="text-gray-700 leading-relaxed">✅ {faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scrolling Banner 6 */}
        <div className="bg-[#F5A623] py-4 overflow-hidden">
          <div className="animate-scroll-reverse whitespace-nowrap">
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              🚀 Démarrez maintenant 🚀 Résultats rapides 🚀 Investissement unique 🚀 Valeur 597€ 🚀
            </span>
            <span className="inline-block text-[#2A3F54] font-bold text-lg px-8">
              🚀 Démarrez maintenant 🚀 Résultats rapides 🚀 Investissement unique 🚀 Valeur 597€ 🚀
            </span>
          </div>
        </div>

        {/* Final Offer Section */}
        <section className="py-20 bg-[#2A3F54] text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Votre Accès Immédiat au Guide — 397€ seulement
            </h2>

            <p className="text-xl text-center text-white/90 mb-12 max-w-3xl mx-auto">
              Ce guide est le résultat de 5 ans d'expérience et des mois de recherche. Il contient tout ce dont vous avez besoin pour réussir en Allemagne sans perdre de temps ni d'argent.
            </p>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="inline-block">
                <p className="text-2xl text-white/60 line-through mb-2">597€</p>
                <p className="text-6xl md:text-7xl font-bold text-[#F5A623] mb-2">397€</p>
                <p className="text-lg text-white/80">Accès à vie + mises à jour gratuites incluses</p>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="text-center">
                  <p className="text-white font-semibold mb-4">Paiement sécurisé : Visa, Mastercard, Amex — via Stripe / PayPal</p>
                  <img 
                    src="/payment_trustbadge.png" 
                    alt="Moyens de paiement sécurisés" 
                    className="mx-auto h-16 w-auto"
                  />
                </div>
                
                <a
                  href="https://buy.stripe.com/9B6dR1alF1OGgRB3td1sQ07"
                  className="w-full max-w-md bg-[#F5A623] text-[#2A3F54] font-bold text-xl px-12 py-5 rounded-lg hover:scale-105 transition-transform shadow-xl text-center"
                >
                  👉 Je veux mon Guide — Accès Immédiat à 397€
                </a>
              </div>
            </div>

            {/* Reassurance Icons */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center text-3xl">
                  🔒
                </div>
                <p className="text-white/90 font-medium">Paiement 100% sécurisé</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center text-3xl">
                  📥
                </div>
                <p className="text-white/90 font-medium">Téléchargement immédiat</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center text-3xl">
                  ♾️
                </div>
                <p className="text-white/90 font-medium">Accès à vie garanti</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 20s linear infinite;
        }
      `}</style>
    </Layout>
  );
}