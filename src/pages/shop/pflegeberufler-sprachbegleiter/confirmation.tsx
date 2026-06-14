import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Download, Mail, FileText } from "lucide-react";
import Link from "next/link";

export default function PflegeberuflerConfirmation() {
  return (
    <Layout>
      <SEO
        title="Commande Confirmée - Pflegeberufler Sprachbegleiter"
        description="Merci pour votre achat ! Téléchargez votre guide immédiatement."
      />

      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Success Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                🎉 Félicitations !
              </h1>
              <p className="text-xl text-gray-600">
                Ton paiement a été confirmé avec succès
              </p>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Pflegeberufler Sprachbegleiter
                </h2>
                <p className="text-gray-600">
                  Mini Dictionnaire Français-Allemand pour les Soins Infirmiers
                </p>
              </div>

              {/* Download Section */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Download className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      📥 Télécharge ton guide maintenant
                    </h3>
                    <p className="text-blue-100 mb-4">
                      Clique sur le bouton ci-dessous pour accéder à ton guide PDF immédiatement
                    </p>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/1_VWNMJo3vLBbElvGp8BdGNlaRU_GagI9/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-center shadow-lg"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    <span>Télécharger mon guide (PDF)</span>
                  </div>
                </a>
              </div>

              {/* Email Confirmation */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      📧 Vérifie ta boîte email
                    </h3>
                    <p className="text-gray-700">
                      Tu recevras également un email de confirmation avec le lien de téléchargement dans quelques minutes. 
                      N'oublie pas de vérifier tes spams si tu ne le vois pas !
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  📚 Ce que tu vas trouver dans ton guide :
                </h3>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">200+ termes médicaux</p>
                    <p className="text-sm text-gray-600">Vocabulaire essentiel pour ton quotidien professionnel</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Phrases pratiques</p>
                    <p className="text-sm text-gray-600">Communication avec patients, collègues et médecins</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Organisation thématique</p>
                    <p className="text-sm text-gray-600">Soins, anatomie, pathologies, équipements</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Format PDF pratique</p>
                    <p className="text-sm text-gray-600">Accessible partout : téléphone, tablette, ordinateur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Besoin d'aide ?
              </h3>
              <p className="text-gray-600 mb-4">
                Si tu rencontres un problème avec le téléchargement ou si tu as des questions, n'hésite pas à nous contacter.
              </p>
              <Link
                href="/contact"
                className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
              >
                Contacter le support →
              </Link>
            </div>

            {/* Back to Shop */}
            <div className="text-center mt-8">
              <Link
                href="/shop/ebooks-pro"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                ← Retour à la boutique
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}