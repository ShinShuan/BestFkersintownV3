export interface LeadData {
  firstName: string;
  phone: string;
  email: string;
  community: string;
  timestamp: string;
}

export const leadService = {
  submitLead: async (data: LeadData) => {
    // URL de l'Apps Script Google (Webhook)
    // Note: L'utilisateur devra configurer cette URL dans les variables d'environnement
    const WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbz_XXXXXXXXXXXX/exec';
    
    if (WEBHOOK_URL.includes('XXXXXX')) {
      console.warn('⚠️ Google Sheets Webhook URL non configurée. Simulation de l\'envoi.');
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { success: true, message: 'Simulation réussie' };
    }
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      return { success: true, response };
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi du lead:', error);
      throw error;
    }
  }
};
