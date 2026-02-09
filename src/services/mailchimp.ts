// Configuration Mailchimp
const MAILCHIMP_API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY || '';
const MAILCHIMP_LIST_ID = import.meta.env.VITE_MAILCHIMP_LIST_ID || '';
const MAILCHIMP_SERVER_PREFIX = import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX || '';

// Types pour Mailchimp
export interface MailchimpSubscriber {
  email_address: string;
  status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
  merge_fields?: {
    FNAME?: string;
    LNAME?: string;
    PHONE?: string;
  };
  tags?: string[];
}

export interface MailchimpCampaign {
  id: string;
  type: 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate';
  status: 'save' | 'paused' | 'schedule' | 'sending' | 'sent';
  settings: {
    subject_line: string;
    title: string;
    from_name: string;
    reply_to: string;
    to_name: string;
  };
  recipients: {
    list_id: string;
    segment_opts?: {
      saved_segment_id?: number;
      match?: 'all' | 'any';
      conditions?: Array<{
        condition_type: string;
        op: string;
        field: string;
        value: string;
      }>;
    };
  };
}

// Service Mailchimp
export const mailchimpService = {
  // Ajouter un abonné à la liste
  async addSubscriber(subscriber: MailchimpSubscriber): Promise<any> {
    try {
      const response = await fetch(
        `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(subscriber),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Erreur lors de l\'ajout de l\'abonné');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur Mailchimp:', error);
      throw error;
    }
  },

  // Mettre à jour un abonné
  async updateSubscriber(email: string, updates: Partial<MailchimpSubscriber>): Promise<any> {
    try {
      const emailHash = btoa(email.toLowerCase());
      const response = await fetch(
        `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${emailHash}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updates),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Erreur lors de la mise à jour de l\'abonné');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur Mailchimp:', error);
      throw error;
    }
  },

  // Supprimer un abonné
  async removeSubscriber(email: string): Promise<any> {
    try {
      const emailHash = btoa(email.toLowerCase());
      const response = await fetch(
        `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${emailHash}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Erreur lors de la suppression de l\'abonné');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur Mailchimp:', error);
      throw error;
    }
  },

  // Créer une campagne
  async createCampaign(campaign: MailchimpCampaign): Promise<any> {
    try {
      const response = await fetch(
        `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(campaign),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Erreur lors de la création de la campagne');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur Mailchimp:', error);
      throw error;
    }
  },

  // Envoyer une campagne
  async sendCampaign(campaignId: string): Promise<any> {
    try {
      const response = await fetch(
        `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns/${campaignId}/actions/send`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Erreur lors de l\'envoi de la campagne');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur Mailchimp:', error);
      throw error;
    }
  },

  // Obtenir les statistiques d'une campagne
  async getCampaignStats(campaignId: string): Promise<any> {
    try {
      const response = await fetch(
        `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns/${campaignId}/reports`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Erreur lors de la récupération des statistiques');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur Mailchimp:', error);
      throw error;
    }
  },

  // Envoyer un email de bienvenue
  async sendWelcomeEmail(email: string, firstName?: string): Promise<any> {
    const subscriber: MailchimpSubscriber = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName || '',
      },
      tags: ['welcome', 'new-subscriber'],
    };

    return await this.addSubscriber(subscriber);
  },

  // Envoyer un email de confirmation de commande
  async sendOrderConfirmationEmail(email: string, orderData: any): Promise<any> {
    const subscriber: MailchimpSubscriber = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: orderData.customer?.firstName || '',
        LNAME: orderData.customer?.lastName || '',
      },
      tags: ['order-confirmation', `order-${orderData.id}`],
    };

    return await this.addSubscriber(subscriber);
  },

  // Envoyer un email de suivi de commande
  async sendOrderTrackingEmail(email: string, orderData: any): Promise<any> {
    const subscriber: MailchimpSubscriber = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: orderData.customer?.firstName || '',
        LNAME: orderData.customer?.lastName || '',
      },
      tags: ['order-tracking', `order-${orderData.id}`],
    };

    return await this.addSubscriber(subscriber);
  },
};

export default mailchimpService;
