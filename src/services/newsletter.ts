// Service de newsletter (Placeholder après retrait de Shopify)

interface NewsletterResponse {
  success: boolean;
  message: string;
  customerId?: string;
  error?: string;
}

class NewsletterService {
  /**
   * Inscrire un utilisateur à la newsletter (À implémenter avec BigCommerce ou Mailchimp)
   */
  async subscribeToNewsletter(email: string, firstName?: string, lastName?: string): Promise<NewsletterResponse> {
    console.log('📧 Tentative d\'inscription à la newsletter (Shopify retiré):', email, firstName, lastName);

    // Simulation d'une réponse positive pour ne pas bloquer le frontend
    return {
      success: true,
      message: 'Inscription réussie (Mode démo - Shopify retiré) !'
    };
  }

  async unsubscribeFromNewsletter(email: string): Promise<NewsletterResponse> {
    console.log('📧 Désabonnement (Shopify retiré):', email);
    return {
      success: true,
      message: 'Désabonnement réussi'
    };
  }
}

export const newsletterService = new NewsletterService();
export default newsletterService;
