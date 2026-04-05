import { customerService } from './bigcommerce';

export interface LeadData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  community: string;
  timestamp: string;
}

export const leadService = {
  submitLead: async (data: LeadData) => {
    // 1. Envoi vers BigCommerce (Prioritaire)
    try {
      console.log('📦 Envoi du lead vers BigCommerce...', data.email);
      await customerService.createCustomer({
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        company: data.community // Utilisation de Community comme Company par défaut
      });
      console.log('✅ Lead enregistré avec succès dans BigCommerce');
    } catch (bcError) {
      console.error('❌ Erreur lors de l\'enregistrement dans BigCommerce:', bcError);
      // On continue quand même vers Google Sheets si possible
    }

    // 2. Envoi vers Google Sheets (Backup)
    const WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;
    
    if (!WEBHOOK_URL || WEBHOOK_URL.includes('XXXXXX')) {
      console.warn('⚠️ Google Sheets Webhook URL non configurée. Backup ignoré.');
      return { success: true, message: 'Enregistré dans BigCommerce' };
    }
    
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      return { success: true };
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi backup Google Sheets:', error);
      // Si BC a réussi, on considère quand même un succès global
      return { success: true, warning: 'Backup Google Sheets échoué' };
    }
  }
};
