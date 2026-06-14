import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Check, Star, Clock, Shield, Download } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PflegeberuflerSprachbegleiter() {
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
        title="Pflegeberufler Sprachbegleiter - Mini Dictionnaire Français-Allemand | 29,99€"
        description="Le guide linguistique indispensable pour les Azubis et professionnels de santé francophones en Allemagne. Terminologie médicale bilingue et phrases essentielles."
        image="/pflegeberufler-cover.png"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-blue-200">
                  🏥 Formation Professionnelle Santé
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ton <span className="text-blue-300">Compagnon Linguistique</span> pour Réussir ton Ausbildung en Pflege
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Le mini-dictionnaire Français-Allemand conçu spécialement pour les Azubis et professionnels de santé francophones. Ne laisse plus la barrière linguistique freiner ta carrière !
              </p>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-xl shadow-2xl border-2 border-orange-400">
                <p className="text-center text-white font-bold text-lg mb-3">
                  ⚠️ OFFRE LIMITÉE - SE TERMINE DANS :
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
                <a
                  href="https://buy.stripe.com/9B64gr65pdxogRB9RB1sQ0n"
                  className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all text-center"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-sm line-through text-white/70">49,99 €</span>
                    <span className="text-xl font-bold">Je télécharge mon guide - 29,99 €</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-3xl rounded-full"></div>
              <Image
                src="/pflegeberufler-cover.png"
                alt="Pflegeberufler Sprachbegleiter"
                width={500}
                height={600}
                className="relative z-10 rounded-2xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 text-white font-semibold">
            ✅ Terminologie médicale bilingue • 🎯 Phrases du quotidien • 💼 Langage professionnel • 🚀 Réussis ton Ausbildung • ✅ Terminologie médicale bilingue • 🎯 Phrases du quotidien • 💼 Langage professionnel • 🚀 Réussis ton Ausbildung
          </span>
        </div>
      </div>

      {/* Story Section - Le Problème */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
              Tu connais cette <span className="text-red-600">frustration</span> ?
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              La réalité quotidienne des Azubis francophones en Allemagne...
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-lg">
                <div className="text-4xl mb-4">😰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Le vocabulaire médical te bloque</h3>
                <p className="text-gray-700">
                  Tu comprends le français, mais les termes médicaux allemands sont un véritable casse-tête. "Blutdruck", "Pflege", "Verbandswechsel"... Ça te dit quelque chose ?
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-lg">
                <div className="text-4xl mb-4">😔</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">La communication avec les patients</h3>
                <p className="text-gray-700">
                  Tu veux bien faire, mais tu cherches tes mots. Les patients ne te comprennent pas toujours, et tu te sens mal à l'aise.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-lg">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Le stress des examens</h3>
                <p className="text-gray-700">
                  Les examens approchent, et tu dois connaître toute la terminologie médicale en allemand. Impossible de tout apprendre par cœur !
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-lg">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Le manque de temps</h3>
                <p className="text-gray-700">
                  Entre les cours, les stages, et les révisions, tu n'as pas le temps de chercher chaque mot dans un dictionnaire traditionnel.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-2xl text-white shadow-xl">
              <p className="text-lg italic mb-4">
                "J'avais peur de ne pas réussir mon Ausbildung à cause de la langue. Depuis que j'utilise ce guide, je me sens beaucoup plus confiante avec les patients et mes collègues."
              </p>
              <p className="font-bold">— Aïcha K., Azubi Pflege, Hamburg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner 2 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-3 overflow-hidden">
        <div className="animate-scroll-reverse whitespace-nowrap">
          <span className="inline-block px-8 text-white font-semibold">
            📚 200+ termes médicaux • 💬 Phrases pratiques • 👨‍⚕️ Communication patient • 🎓 Réussis tes examens • 📚 200+ termes médicaux • 💬 Phrases pratiques • 👨‍⚕️ Communication patient • 🎓 Réussis tes examens
          </span>
        </div>
      </div>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                La <span className="text-blue-600">Solution</span> à Tes Problèmes Linguistiques
              </h2>
              <p className="text-xl text-gray-600">
                Un guide pratique pensé pour les réalités du terrain
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Image
                  src="/pflegeberufler-azubi.png"
                  alt="Azubis en formation"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Terminologie médicale bilingue</h3>
                      <p className="text-gray-700">Plus de 200 termes médicaux essentiels traduits et expliqués simplement</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Phrases du quotidien professionnel</h3>
                      <p className="text-gray-700">Conversations types avec patients, collègues et médecins</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Classement par thématiques</h3>
                      <p className="text-gray-700">Organisation pratique par domaines : soins, anatomie, pathologies, équipements</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Format PDF pratique</h3>
                      <p className="text-gray-700">Accessible sur ton téléphone, tablette ou ordinateur - consulte-le partout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://buy.stripe.com/9B64gr65pdxogRB9RB1sQ0n"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-10 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm line-through text-white/80">49,99 €</span>
                  <span>Je profite de l'offre - 29,99 €</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner 3 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 text-white font-semibold">
            ⭐ 98% de satisfaction • 🎯 Succès garanti • 💼 Outil professionnel • 🚀 Téléchargement immédiat • ⭐ 98% de satisfaction • 🎯 Succès garanti • 💼 Outil professionnel • 🚀 Téléchargement immédiat
          </span>
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Ce que disent nos <span className="text-blue-600">utilisateurs</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                  AM
                </div>
                <div>
                  <p className="font-bold text-gray-900">Aminata M.</p>
                  <p className="text-sm text-gray-600">Azubi 2ème année, Berlin</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Ce guide m'a sauvé la vie ! Maintenant je peux communiquer facilement avec mes patients et mes collègues. Je le recommande à tous les francophones."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                  JB
                </div>
                <div>
                  <p className="font-bold text-gray-900">Jean-Baptiste K.</p>
                  <p className="text-sm text-gray-600">Pfleger, Munich</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Indispensable pour travailler en Pflege ! J'ai réussi mon examen final grâce à ce dictionnaire. Tout est bien organisé et facile à utiliser."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                  FC
                </div>
                <div>
                  <p className="font-bold text-gray-900">Fatoumata C.</p>
                  <p className="text-sm text-gray-600">Azubi 3ème année, Frankfurt</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Un outil professionnel à petit prix. Ça vaut vraiment le coup ! Je l'utilise tous les jours au travail."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">Paiement sécurisé</p>
              <p className="text-sm text-gray-600">via Stripe</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">Téléchargement</p>
              <p className="text-sm text-gray-600">Immédiat</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">Accès à vie</p>
              <p className="text-sm text-gray-600">Garanti</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-blue-600 fill-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">98% satisfaits</p>
              <p className="text-sm text-gray-600">200+ utilisateurs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ne laisse plus la langue te freiner dans ta carrière !
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Investis dans ton avenir professionnel dès aujourd'hui
            </p>

            {/* Price Display */}
            <div className="mb-8">
              <div className="text-2xl text-blue-200 line-through mb-2">49,99 €</div>
              <div className="text-6xl font-bold text-white mb-2">29,99 €</div>
              <div className="text-lg text-blue-200">Paiement unique - Accès à vie</div>
            </div>

            {/* Final Timer */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-xl shadow-2xl border-2 border-orange-400 mb-8 max-w-2xl mx-auto">
              <p className="text-center text-white font-bold text-base mb-3">
                ⏰ OFFRE LIMITÉE - EXPIRE DANS :
              </p>
              <div className="flex justify-center gap-3">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[70px]">
                    <div className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-white/90 uppercase font-semibold">H</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[70px]">
                    <div className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-white/90 uppercase font-semibold">M</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[70px]">
                    <div className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-white/90 uppercase font-semibold">S</div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://buy.stripe.com/9B64gr65pdxogRB9RB1sQ0n"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xl px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
            >
              <div className="flex flex-col items-center">
                <span className="text-sm line-through text-white/70">49,99 €</span>
                <span className="font-bold">Je télécharge mon guide - 29,99 €</span>
              </div>
            </a>

            <p className="mt-6 text-sm text-blue-200">
              🔒 Paiement 100% sécurisé via Stripe • Téléchargement immédiat
            </p>
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