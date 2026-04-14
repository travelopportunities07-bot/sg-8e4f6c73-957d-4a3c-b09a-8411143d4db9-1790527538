import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function GuideSuccess() {
  return (
    <Layout>
      <SEO
        title="Téléchargement - Guide Réussir en Allemagne"
        description="Félicitations ! Téléchargez votre guide maintenant."
      />

      {/* Page de téléchargement post-paiement */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl font-bold mb-6">
              Félicitations !
              <br />
              <span className="text-green-300">Votre nouvelle vie en Allemagne commence ici.</span>
            </h2>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xl py-8 rounded-xl shadow-2xl mb-6"
              >
                📥 TÉLÉCHARGER L'E-BOOK ICI (PDF)
              </Button>

              <div className="text-left space-y-4 text-gray-200">
                <h3 className="font-bold text-lg text-white mb-4">Instructions :</h3>
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">1.</span>
                  <p>Enregistrez le fichier sur votre téléphone.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">2.</span>
                  <p>Commencez par le Module 2 (Démarches Administratives) pour sécuriser vos papiers.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">3.</span>
                  <p>Rejoignez notre grande Communauté "Réussir en Allemagne" pour être informé de nos offres et divers programmes.</p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8"
            >
              Rejoindre la communauté
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}