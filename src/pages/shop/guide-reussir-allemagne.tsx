import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GuideReussirAllemagne() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <SEO
        title="Guide Réussir en Allemagne - E-book Complet"
        description="Le guide ultime pour les migrants africains en Allemagne. De l'arrivée à l'aéroport jusqu'à votre premier contrat de travail."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ne vous contentez pas de <span className="text-[#D4AF37]">survivre</span> en Allemagne.
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  DOMINEZ LE SYSTÈME !
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Le guide complet pour les migrants africains : De l'arrivée à l'aéroport jusqu'à votre premier contrat de travail et vos premières allocations familiales.
              </p>

              {/* Compteur à rebours */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-xl shadow-2xl border-2 border-red-400">
                <p className="text-center text-white font-bold text-lg mb-3">
                  ⚠️ OFFRE SPÉCIALE SE TERMINE DANS :
                </p>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px]">
                      <div className="text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-xs text-white/90 uppercase font-semibold">Heures</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px]">
                      <div className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-xs text-white/90 uppercase font-semibold">Minutes</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px]">
                      <div className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-xs text-white/90 uppercase font-semibold">Secondes</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
                  onClick={() => window.location.href = 'https://buy.stripe.com/28E5kv65palc1WHbZJ1sQ0g'}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-sm line-through text-white/70">37,97 €</span>
                    <span className="text-xl font-bold">OBTENIR MON GUIDE - 19,97 €</span>
                  </div>
                </Button>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-500">
                  <Image
                    src="/guide-social-proof.png"
                    alt="Social proof"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-green-400">Déjà utilisé par plus de 500 nouveaux arrivants</span> cette année.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 blur-3xl rounded-full"></div>
              <Image
                src="/guide-hero.jpg"
                alt="Guide Réussir en Allemagne"
                width={600}
                height={700}
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bande défilante verte */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 text-white font-semibold">
            ✅ Guide complet • 🎯 Stratégies éprouvées • 💼 Conseils pratiques • 🚀 Résultats rapides • ✅ Guide complet • 🎯 Stratégies éprouvées • 💼 Conseils pratiques • 🚀 Résultats rapides
          </span>
        </div>
      </div>

      {/* Problème & Douleur */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Vous êtes arrivé en Allemagne avec des <span className="text-[#D4AF37]">rêves</span>,
              <br />mais la réalité vous rattrape...
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="text-4xl mb-4">😰</div>
                <h3 className="text-xl font-bold mb-3 text-red-400">Le labyrinthe administratif</h3>
                <p className="text-gray-300">Vous ne comprenez rien aux lettres reçues.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="text-4xl mb-4">😔</div>
                <h3 className="text-xl font-bold mb-3 text-red-400">L'isolement</h3>
                <p className="text-gray-300">Vous avez peur de faire une erreur qui pourrait annuler votre visa.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-bold mb-3 text-red-400">Le manque d'argent</h3>
                <p className="text-gray-300">Vous ne savez pas comment accéder aux aides et aux bons jobs.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-red-400">Le choc culturel</h3>
                <p className="text-gray-300">Vous vous sentez étranger même après plusieurs mois.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bande défilante verte */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 text-white font-semibold">
            ✅ Guide complet • 🎯 Stratégies éprouvées • 💼 Conseils pratiques • 🚀 Résultats rapides • ✅ Guide complet • 🎯 Stratégies éprouvées • 💼 Conseils pratiques • 🚀 Résultats rapides
          </span>
        </div>
      </div>

      {/* Solution */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
              Ce que vous allez <span className="text-green-400">apprendre</span>
            </h2>
            <p className="text-xl text-center text-gray-300 mb-12">
              Ce n'est pas un livre de théorie. C'est un <span className="font-bold text-[#D4AF37]">plan d'action</span>.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-700/50 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-colors">
                <div className="flex gap-4">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">Chapitre Logement</h3>
                    <p className="text-gray-300">Le secret pour qu'un propriétaire allemand vous dise 'OUI' (avec modèles de lettres).</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-colors">
                <div className="flex gap-4">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">Chapitre Finances</h3>
                    <p className="text-gray-300">Comment toucher le Kindergeld et optimiser votre salaire net.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-colors">
                <div className="flex gap-4">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">Chapitre Carrière</h3>
                    <p className="text-gray-300">Pourquoi l'Ausbildung est plus rapide que l'Université pour devenir riche.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-colors">
                <div className="flex gap-4">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">Chapitre Démarches Administratives</h3>
                    <p className="text-gray-300">L'Armure Administrative — Anmeldung, Schufa, Krankenkasse.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-colors">
                <div className="flex gap-4">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">Chapitre Sécurité</h3>
                    <p className="text-gray-300">L'assurance à 5€ qui vous protège contre l'expulsion et les procès.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compteur à rebours milieu de page */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-xl shadow-2xl border-2 border-red-400 mt-12 mb-8">
              <p className="text-center text-white font-bold text-lg mb-3">
                ⏰ L'OFFRE EXPIRE DANS :
              </p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px]">
                    <div className="text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-white/90 uppercase font-semibold">Heures</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px]">
                    <div className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-white/90 uppercase font-semibold">Minutes</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px]">
                    <div className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-white/90 uppercase font-semibold">Secondes</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-10 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
                onClick={() => window.location.href = 'https://buy.stripe.com/28E5kv65palc1WHbZJ1sQ0g'}
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm line-through text-white/80">37,97 €</span>
                  <span>JE VEUX CE GUIDE MAINTENANT - 19,97 €</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bande défilante verte */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 text-white font-semibold">
            ✅ Guide complet • 🎯 Stratégies éprouvées • 💼 Conseils pratiques • 🚀 Résultats rapides • ✅ Guide complet • 🎯 Stratégies éprouvées • 💼 Conseils pratiques • 🚀 Résultats rapides
          </span>
        </div>
      </div>

      {/* Témoignages */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Ce que disent nos <span className="text-[#D4AF37]">clients</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div>
                  <p className="font-bold">Moussa S.</p>
                  <p className="text-sm text-gray-400">Berlin</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Grâce au chapitre sur le logement, j'ai trouvé mon studio en 3 semaines alors que je galérais depuis 6 mois. Ce guide s'est rentabilisé en un jour."
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <p className="font-bold">Awa K.</p>
                  <p className="text-sm text-gray-400">Munich</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Je ne savais pas que j'avais droit à 250€ par mois pour mon fils resté au pays. Ce guide a changé ma vie financière."
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div>
                  <p className="font-bold">Serge Ndzié</p>
                  <p className="text-sm text-gray-400">Hamburg</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Grâce à ce guide, j'ai fait mes démarches sans stress et sans perdre des mois inutilement."
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div>
                  <p className="font-bold">Mariam Traoré</p>
                  <p className="text-sm text-gray-400">Frankfurt</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Tout est expliqué simplement. Ça m'a vraiment aidée à m'intégrer plus rapidement."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bande défilante verte */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 text-white font-semibold">
            ✅ Guide complet • 🎯 Stratégies éprouvées • 💼 Conseils pratiques • 🚀 Résultats rapides • ✅ Guide complet • 🎯 Stratégies éprouvées • 💼 Conseils pratiques • 🚀 Résultats rapides
          </span>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Questions <span className="text-green-400">Fréquentes</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-bold mb-3 text-green-400">👉 Est-ce adapté aux débutants ?</h3>
                <p className="text-gray-300">Oui, même si tu viens d'arriver.</p>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-bold mb-3 text-green-400">👉 Quand vais-je recevoir le guide ?</h3>
                <p className="text-gray-300">Immédiatement après paiement.</p>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-bold mb-3 text-green-400">👉 Est-ce fiable ?</h3>
                <p className="text-gray-300">Oui, basé sur des expériences réelles.</p>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-bold mb-3 text-green-400">👉 Format ?</h3>
                <p className="text-gray-300">PDF accessible sur téléphone et ordinateur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bande défilante verte */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 text-white font-semibold">
            ✅ Guide complet • 🎯 Stratégies éprouvées • 💼 Conseils pratiques • 🚀 Résultats rapides • ✅ Guide complet • 🎯 Stratégies éprouvées • 💼 Conseils pratiques • 🚀 Résultats rapides
          </span>
        </div>
      </div>

      {/* Réassurance */}
      <section className="py-12 bg-gray-900 text-white border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Accès immédiat</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Aucun abonnement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Section - FOND BLANC */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Récapitulatif de votre commande</h2>

              <div className="bg-white p-6 rounded-xl mb-6 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-green-600">E-book "Réussir son intégration en Allemagne"</h3>
                    <p className="text-sm text-gray-600 mt-1">Format PDF - Lecture immédiate sur mobile/PC</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg text-gray-400 line-through">37,97 €</div>
                    <div className="text-2xl font-bold text-[#D4AF37]">19,97 €</div>
                  </div>
                </div>
              </div>

              {/* Compteur à rebours final */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 rounded-xl shadow-xl border-2 border-red-400 mb-6">
                <p className="text-center text-white font-bold text-sm mb-2">
                  ⚠️ OFFRE EXPIRE DANS :
                </p>
                <div className="flex justify-center gap-3">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
                      <div className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-[10px] text-white/90 uppercase font-semibold">H</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
                      <div className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-[10px] text-white/90 uppercase font-semibold">M</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
                      <div className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-[10px] text-white/90 uppercase font-semibold">S</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <Image
                  src="/payment-trust-badge.png"
                  alt="Paiement sécurisé"
                  width={400}
                  height={80}
                  className="mx-auto"
                />
                <p className="text-center text-sm text-gray-600 mt-2">Paiement sécurisé et vérifié avec Stripe</p>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xl py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
                onClick={() => window.location.href = 'https://buy.stripe.com/28E5kv65palc1WHbZJ1sQ0g'}
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm line-through text-white/80">37,97 €</span>
                  <span>🔒 PAYER MAINTENANT - 19,97 €</span>
                </div>
              </Button>

              <p className="text-center text-xs text-gray-500 mt-4">
                Paiement sécurisé par Stripe. Vos données sont protégées.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: inline-block;
        }
      `}</style>
    </Layout>
  );
}