import { Layout } from "@/components/layout/Layout";
import { CalendlyEmbed } from "@/components/appointment/CalendlyEmbed";

export default function AppointmentPage() {
  // URL Calendly réelle
  const calendlyUrl = "https://calendly.com/travelopportunities07/nouvelle-reunion";
  
  return (
    <Layout
      title="Prenez rendez-vous | Aventure Sans Frontières"
      description="Réservez un créneau pour discuter de vos projets à l'international avec nos conseillers experts."
    >
      <div className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Planifiez votre aventure internationale
            </h1>
            <p className="text-xl text-slate-600">
              Nos conseillers sont là pour vous aider à concrétiser vos projets à l'étranger.
              Choisissez un créneau qui vous convient dans le calendrier ci-dessous.
            </p>
          </div>

          {/* Widget Calendly intégré directement */}
          <div className="max-w-4xl mx-auto mb-16">
            <CalendlyEmbed 
              url={calendlyUrl}
              height={800}
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                📅 Consultation personnalisée gratuite
              </h3>
              <p className="text-blue-800">
                Profitez d'un entretien individuel avec nos experts pour discuter de vos projets, 
                poser vos questions et obtenir des conseils adaptés à votre situation.
              </p>
            </div>

            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Questions fréquentes</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">⏱️ Combien de temps dure une consultation ?</h3>
                <p className="text-slate-600">
                  Nos consultations standard durent 30 minutes. Si vous avez besoin de plus de temps, 
                  vous pouvez sélectionner une option de 60 minutes dans le calendrier.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">💻 Comment se déroule un rendez-vous en ligne ?</h3>
                <p className="text-slate-600">
                  Après votre réservation, vous recevrez un lien pour rejoindre un appel vidéo via Zoom ou Google Meet 
                  à l'heure convenue. Assurez-vous d'avoir une connexion internet stable.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">🔄 Puis-je annuler ou reporter mon rendez-vous ?</h3>
                <p className="text-slate-600">
                  Oui, vous pouvez modifier ou annuler votre rendez-vous jusqu'à 24 heures avant l'heure prévue. 
                  Un lien pour gérer votre réservation sera inclus dans l'email de confirmation.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">📋 Que dois-je préparer avant ma consultation ?</h3>
                <p className="text-slate-600">
                  Pour tirer le meilleur parti de votre rendez-vous, réfléchissez à vos objectifs, vos disponibilités 
                  et vos contraintes. Si vous avez un CV ou des documents pertinents, vous pourrez les partager pendant l'appel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}