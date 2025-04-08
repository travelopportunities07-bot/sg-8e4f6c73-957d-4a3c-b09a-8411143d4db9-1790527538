import { Layout } from "@/components/layout/Layout";
import { AppointmentSection } from "@/components/appointment/AppointmentSection";

export default function AppointmentPage() {
  // URL Calendly réelle
  const calendlyUrl = 'https://calendly.com/travelopportunities07/30min?hide_event_type_details=1&hide_gdpr_banner=1';
  
  return (
    <Layout
      title='Prenez rendez-vous | Aventure Sans Frontières'
      description='Réservez un créneau pour discuter de vos projets à l'international avec nos conseillers experts.'
    >
      <div className='py-12 bg-white'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center mb-16'>
            <h1 className='text-4xl font-bold tracking-tight mb-4'>Planifiez votre aventure internationale</h1>
            <p className='text-xl text-slate-600'>
              Nos conseillers sont là pour vous aider à concrétiser vos projets à l'étranger.
              Prenez rendez-vous pour une consultation personnalisée.
            </p>
          </div>
        </div>
      </div>
      
      <AppointmentSection 
        calendlyUrl={calendlyUrl}
        title='Réservez votre consultation'
        description='Choisissez un créneau dans notre calendrier ci-dessous pour discuter de vos projets avec l'un de nos conseillers experts. Nous vous aiderons à trouver les meilleures opportunités adaptées à votre profil et vos objectifs.'
      />
      
      <div className='py-16 bg-white'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-bold tracking-tight mb-6'>Questions fréquentes</h2>
            
            <div className='space-y-8 text-left'>
              <div>
                <h3 className='text-xl font-medium mb-2'>Combien de temps dure une consultation ?</h3>
                <p className='text-slate-600'>Nos consultations standard durent 30 minutes. Si vous avez besoin de plus de temps, vous pouvez sélectionner une option de 60 minutes dans le calendrier.</p>
              </div>
              
              <div>
                <h3 className='text-xl font-medium mb-2'>Comment se déroule un rendez-vous en ligne ?</h3>
                <p className='text-slate-600'>Après votre réservation, vous recevrez un lien pour rejoindre un appel vidéo via Zoom ou Google Meet à l'heure convenue. Assurez-vous d'avoir une connexion internet stable.</p>
              </div>
              
              <div>
                <h3 className='text-xl font-medium mb-2'>Puis-je annuler ou reporter mon rendez-vous ?</h3>
                <p className='text-slate-600'>Oui, vous pouvez modifier ou annuler votre rendez-vous jusqu'à 24 heures avant l'heure prévue. Un lien pour gérer votre réservation sera inclus dans l'email de confirmation.</p>
              </div>
              
              <div>
                <h3 className='text-xl font-medium mb-2'>Que dois-je préparer avant ma consultation ?</h3>
                <p className='text-slate-600'>Pour tirer le meilleur parti de votre rendez-vous, réfléchissez à vos objectifs, vos disponibilités et vos contraintes. Si vous avez un CV ou des documents pertinents, vous pourrez les partager pendant l'appel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}