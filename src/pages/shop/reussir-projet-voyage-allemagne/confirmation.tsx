import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Check, Mail, FileText } from "lucide-react";
import Link from "next/link";

export default function ConfirmationGuideAllemagne() {
  const googleDriveLink = "https://drive.google.com/file/d/1rd8lNR-6_Cz-_Bp2MZdXhMYrG-Zo2758/view?usp=drive_link";

  return (
    <Layout>
      <SEO
        title="Confirmation d'achat — Guide Réussir en Allemagne | Vivre en Allemagne"
        description="Téléchargez votre guide complet pour réussir votre projet de voyage en Allemagne."
      />

      <div className="min-h-screen bg-gradient-to-br from-[#2A3F54] to-[#2A3F54]/90 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="text-center mb-12">
            {/* Icône de succès */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
              <Check className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Félicitations ! 🎉
            </h1>
            <p className="text-xl text-white/90 mb-2">
              Votre paiement a été confirmé avec succès
            </p>
            <p className="text-lg text-white/80">
              Vous avez maintenant accès au Guide "Réussir Son Projet de Voyage en Allemagne"
            </p>
          </div>

          {/* Card principale */}
          <Card className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl mb-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#F5A623]/10 text-[#F5A623] px-6 py-3 rounded-full font-bold text-lg mb-6">
                Accès à vie activé ✨
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2A3F54] mb-4">
                Téléchargez votre guide maintenant
              </h2>
              <p className="text-gray-700 mb-8">
                Cliquez sur le bouton ci-dessous pour télécharger votre guide complet au format PDF. Vous pouvez le télécharger autant de fois que vous le souhaitez.
              </p>

              {/* Bouton de téléchargement */}
              <a
                href={googleDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#2A3F54] font-bold text-xl px-12 py-6 rounded-lg transition-all hover:scale-105 shadow-lg mb-8"
              >
                <Download className="w-6 h-6" />
                Télécharger le Guide (PDF)
              </a>

              <p className="text-sm text-gray-600">
                Le téléchargement s'ouvrira dans un nouvel onglet via Google Drive
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Ce que vous allez recevoir */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#2A3F54] mb-6 text-center">
                Ce que contient votre guide :
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Méthode complète de candidature (20+/semaine)</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Modèles de CV et lettres en allemand</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">+250 contacts directs d'employeurs</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Guide visa complet (Au Pair, FSJ, Ausbildung)</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Stratégies de recherche de logement</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Mises à jour gratuites à vie</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Prochaines étapes */}
            <div>
              <h3 className="text-xl font-bold text-[#2A3F54] mb-6 text-center">
                Prochaines étapes :
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-[#F4F6F8] p-4 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#F5A623] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-[#2A3F54] mb-1">Téléchargez et lisez le guide</p>
                    <p className="text-gray-700 text-sm">Prenez le temps de parcourir l'ensemble du guide pour comprendre la méthode complète.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-[#F4F6F8] p-4 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#F5A623] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-[#2A3F54] mb-1">Préparez vos documents</p>
                    <p className="text-gray-700 text-sm">Utilisez nos modèles de CV et lettres de motivation pour créer vos documents professionnels.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-[#F4F6F8] p-4 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#F5A623] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-[#2A3F54] mb-1">Commencez vos candidatures</p>
                    <p className="text-gray-700 text-sm">Appliquez la méthode "20 candidatures/semaine" avec nos contacts directs d'employeurs.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-[#F4F6F8] p-4 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#F5A623] text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <p className="font-bold text-[#2A3F54] mb-1">Préparez votre dossier visa</p>
                    <p className="text-gray-700 text-sm">Suivez notre checklist complète pour obtenir votre visa sans refus.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Retour à l'accueil */}
          <div className="text-center mt-8">
            <Link href="/" className="text-white/80 hover:text-white underline">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}