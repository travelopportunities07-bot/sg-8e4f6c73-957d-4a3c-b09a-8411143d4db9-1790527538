
import { Layout } from "@/components/layout/Layout";

export default function CalendlyIntegrationPage() {
  return (
    <Layout
      title="Réservez un rendez-vous | Aventure Sans Frontières"
      description="Réservez facilement un créneau pour discuter de vos projets à l'international avec nos conseillers experts."
    >
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Réservez votre rendez-vous</h1>
            <p className="text-xl text-slate-600">
              Sélectionnez un créneau disponible dans notre calendrier ci-dessous pour discuter 
              de vos projets à l'international avec nos conseillers experts.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pb-16">
        <div className="bg-white rounded-xl shadow-sm p-4 max-w-4xl mx-auto">
          {/* Intégration directe du widget Calendly avec le code exact fourni */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/travelopportunities07/nouvelle-reunion" style={{ minWidth: "320px", height: "700px" }}></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
      </div>
    </Layout>
  );
}
