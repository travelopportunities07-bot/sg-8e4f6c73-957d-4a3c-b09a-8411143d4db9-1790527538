
import { Layout } from "@/components/layout/Layout";

export default function CalendlyGuidePage() {
  return (
    <Layout
      title="Guide d'intégration Calendly | Aventure Sans Frontières"
      description="Comment configurer et utiliser Calendly pour la prise de rendez-vous sur votre site."
    >
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Guide d'intégration Calendly</h1>
            
            <div className="prose prose-slate max-w-none">
              <h2>Configuration de votre compte Calendly</h2>
              <ol>
                <li>Créez un compte sur <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">Calendly.com</a></li>
                <li>Connectez votre calendrier (Google Calendar, Outlook, etc.)</li>
                <li>Définissez vos disponibilités dans les paramètres</li>
                <li>Créez différents types d'événements (15min, 30min, 60min)</li>
              </ol>
              
              <h2>Obtenir votre URL Calendly</h2>
              <ol>
                <li>Connectez-vous à votre compte Calendly</li>
                <li>Sélectionnez le type d'événement que vous souhaitez partager</li>
                <li>Cliquez sur "Share" ou "Partager"</li>
                <li>Copiez l'URL qui ressemble à <code>https://calendly.com/votre-nom/type-de-rendez-vous</code></li>
              </ol>
              
              <h2>Intégration sur votre site</h2>
              <p>Ouvrez le fichier <code>src/pages/rendez-vous.tsx</code> et remplacez l'URL Calendly par la vôtre :</p>
              <pre><code>const calendlyUrl = 'https://calendly.com/votre-nom/30min';</code></pre>
              
              <p>Pour le bouton d'appel rapide sur la page d'accueil, ouvrez <code>src/pages/index.tsx</code> et mettez à jour :</p>
              <pre><code>const quickCallUrl = 'https://calendly.com/votre-nom/15min';</code></pre>
              
              <h2>Personnalisation avancée</h2>
              <p>Vous pouvez personnaliser davantage l'intégration Calendly en modifiant :</p>
              <ul>
                <li><code>src/components/appointment/CalendlyEmbed.tsx</code> - Pour l'intégration complète</li>
                <li><code>src/components/appointment/CalendlyPopup.tsx</code> - Pour les boutons popup</li>
                <li><code>src/components/home/QuickAppointment.tsx</code> - Pour le widget flottant</li>
              </ul>
              
              <h2>Webhooks Calendly (Avancé)</h2>
              <p>Pour recevoir des notifications lorsque des rendez-vous sont planifiés ou annulés :</p>
              <ol>
                <li>Allez dans les paramètres de votre compte Calendly</li>
                <li>Sélectionnez "Integrations" puis "Webhooks"</li>
                <li>Ajoutez un nouveau webhook avec l'URL de votre API :</li>
                <pre><code>https://votre-domaine.com/api/calendly-webhook</code></pre>
                <li>Sélectionnez les événements que vous souhaitez recevoir</li>
              </ol>
              
              <p>Le fichier <code>src/pages/api/calendly-webhook.ts</code> est déjà configuré pour recevoir ces notifications.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
