import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Mail } from "lucide-react";
import Link from "next/link";

export default function GuideSuccess() {
  return (
    <Layout>
      <SEO
        title="Merci pour votre achat ! - Vivre en Allemagne"
        description="Votre guide est prêt à être téléchargé."
      />

      <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Icône de succès */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-6">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                🎉 Félicitations !
              </h1>
              
              <p className="text-xl text-gray-700 mb-2">
                Votre commande a été confirmée avec succès
              </p>
              
              <p className="text-lg text-gray-600">
                Bienvenue dans la communauté des personnes qui réussissent en Allemagne !
              </p>
            </div>

            {/* Carte principale */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Download className="w-6 h-6 text-green-600" />
                Accédez à votre guide maintenant
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border border-green-200">
                <h3 className="font-bold text-lg text-gray-900 mb-3">📧 Vérifiez votre email</h3>
                <p className="text-gray-700 mb-4">
                  Nous venons de vous envoyer un email contenant :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Le lien de téléchargement de votre guide PDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Votre reçu de paiement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Des instructions pour bien démarrer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong>💡 Astuce :</strong> Si vous ne voyez pas l'email dans votre boîte de réception, 
                  vérifiez vos <strong>spams/courrier indésirable</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg py-6"
                  onClick={() => window.location.href = 'mailto:contact@vivrenallemagne.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Besoin d'aide ? Contactez-nous
                </Button>
              </div>
            </div>

            {/* Prochaines étapes */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                📋 Vos prochaines étapes
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Téléchargez votre guide</h3>
                    <p className="text-gray-600">Cliquez sur le lien dans l'email pour télécharger votre PDF.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Lisez le premier chapitre</h3>
                    <p className="text-gray-600">Commencez par le chapitre qui répond à votre besoin le plus urgent.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Passez à l'action</h3>
                    <p className="text-gray-600">Utilisez les modèles et check-lists fournis pour avancer concrètement.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Partagez vos résultats</h3>
                    <p className="text-gray-600">Envoyez-nous vos réussites, nous adorons les célébrer avec vous !</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                💬 Besoin d'aide ?
              </h2>
              <p className="text-gray-700 mb-4">
                Notre équipe est là pour vous accompagner. N'hésitez pas à nous contacter 
                si vous avez la moindre question.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Nous contacter
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}