
import type { NextApiRequest, NextApiResponse } from 'next';

// Cette API peut être utilisée pour recevoir des notifications de Calendly
// lorsqu'un rendez-vous est planifié, annulé, etc.
// Voir la documentation: https://developer.calendly.com/api-docs/e2f95ebd7f674-webhook-subscriptions

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const payload = req.body;
    
    // Vérifiez la signature du webhook (recommandé en production)
    // const signature = req.headers['calendly-webhook-signature'];
    
    // Traitez l'événement selon son type
    const eventType = payload.event;
    
    console.log('Calendly webhook received:', eventType);
    
    // Exemple de traitement selon le type d'événement
    switch(payload.event) {
      case 'invitee.created':
        // Un nouveau rendez-vous a été planifié
        console.log('Nouveau rendez-vous:', payload.payload.invitee);
        // Ici vous pourriez envoyer un email, mettre à jour une base de données, etc.
        break;
        
      case 'invitee.canceled':
        // Un rendez-vous a été annulé
        console.log('Rendez-vous annulé:', payload.payload.invitee);
        break;
        
      default:
        console.log('Autre événement Calendly:', payload);
    }
    
    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Erreur de traitement du webhook Calendly:', error);
    return res.status(500).json({ error: 'Erreur de traitement' });
  }
}
