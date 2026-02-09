import { shopifyConfig } from '../config/shopify';

interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
  marketingConsent?: {
    marketingState: 'SUBSCRIBED' | 'NOT_SUBSCRIBED';
    marketingOptInLevel: 'SINGLE_OPT_IN' | 'DOUBLE_OPT_IN';
  };
}

interface NewsletterResponse {
  success: boolean;
  message: string;
  customerId?: string;
  error?: string;
}

class NewsletterService {
  private shopifyDomain: string;
  private accessToken: string;

  constructor() {
    this.shopifyDomain = shopifyConfig.domain;
    this.accessToken = shopifyConfig.accessToken;
  }

  /**
   * Inscrire un utilisateur à la newsletter via l'API Shopify
   */
  async subscribeToNewsletter(email: string, firstName?: string, lastName?: string): Promise<NewsletterResponse> {
    try {
      console.log('📧 Tentative d\'inscription à la newsletter:', email);

      // Vérifier si le client existe déjà
      const existingCustomer = await this.findCustomerByEmail(email);
      
      if (existingCustomer) {
        // Mettre à jour le client existant pour s'assurer qu'il est abonné
        return await this.updateCustomerNewsletterSubscription(existingCustomer.id, email, firstName, lastName);
      } else {
        // Créer un nouveau client
        return await this.createCustomerWithNewsletterSubscription(email, firstName, lastName);
      }
    } catch (error) {
      console.error('❌ Erreur lors de l\'inscription à la newsletter:', error);
      return {
        success: false,
        message: 'Erreur lors de l\'inscription à la newsletter',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }
  }

  /**
   * Trouver un client par email
   */
  private async findCustomerByEmail(email: string): Promise<any> {
    const query = `
      query findCustomerByEmail($email: String!) {
        customers(first: 1, query: $email) {
          edges {
            node {
              id
              email
              firstName
              lastName
              acceptsMarketing
              tags
            }
          }
        }
      }
    `;

    const response = await fetch(`https://${this.shopifyDomain}/admin/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': this.accessToken,
      },
      body: JSON.stringify({
        query,
        variables: { email }
      })
    });

    const data = await response.json();
    
    if (data.errors) {
      console.error('Erreur GraphQL:', data.errors);
      return null;
    }

    const customers = data.data.customers.edges;
    return customers.length > 0 ? customers[0].node : null;
  }

  /**
   * Créer un nouveau client avec abonnement newsletter
   */
  private async createCustomerWithNewsletterSubscription(
    email: string, 
    firstName?: string, 
    lastName?: string
  ): Promise<NewsletterResponse> {
    const mutation = `
      mutation customerCreate($input: CustomerInput!) {
        customerCreate(input: $input) {
          customer {
            id
            email
            firstName
            lastName
            acceptsMarketing
            tags
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const input = {
      email,
      firstName: firstName || '',
      lastName: lastName || '',
      acceptsMarketing: true,
      tags: ['newsletter', 'website-signup'],
      marketingConsent: {
        marketingState: 'SUBSCRIBED',
        marketingOptInLevel: 'SINGLE_OPT_IN'
      }
    };

    const response = await fetch(`https://${this.shopifyDomain}/admin/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': this.accessToken,
      },
      body: JSON.stringify({
        query: mutation,
        variables: { input }
      })
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Erreur GraphQL:', data.errors);
      return {
        success: false,
        message: 'Erreur lors de la création du client',
        error: data.errors[0].message
      };
    }

    if (data.data.customerCreate.userErrors.length > 0) {
      const error = data.data.customerCreate.userErrors[0];
      return {
        success: false,
        message: error.message,
        error: error.message
      };
    }

    const customer = data.data.customerCreate.customer;
    console.log('✅ Client créé avec succès:', customer.id);

    // Envoyer le code de réduction par email
    await this.sendDiscountCode(customer.id, email);

    return {
      success: true,
      message: 'Inscription réussie ! Votre code de réduction vous a été envoyé par email.',
      customerId: customer.id
    };
  }

  /**
   * Mettre à jour un client existant pour l'abonnement newsletter
   */
  private async updateCustomerNewsletterSubscription(
    customerId: string,
    email: string,
    firstName?: string,
    lastName?: string
  ): Promise<NewsletterResponse> {
    const mutation = `
      mutation customerUpdate($input: CustomerInput!) {
        customerUpdate(input: $input) {
          customer {
            id
            email
            firstName
            lastName
            acceptsMarketing
            tags
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const input = {
      id: customerId,
      firstName: firstName || '',
      lastName: lastName || '',
      acceptsMarketing: true,
      tags: ['newsletter', 'website-signup']
    };

    const response = await fetch(`https://${this.shopifyDomain}/admin/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': this.accessToken,
      },
      body: JSON.stringify({
        query: mutation,
        variables: { input }
      })
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Erreur GraphQL:', data.errors);
      return {
        success: false,
        message: 'Erreur lors de la mise à jour du client',
        error: data.errors[0].message
      };
    }

    if (data.data.customerUpdate.userErrors.length > 0) {
      const error = data.data.customerUpdate.userErrors[0];
      return {
        success: false,
        message: error.message,
        error: error.message
      };
    }

    const customer = data.data.customerUpdate.customer;
    console.log('✅ Client mis à jour avec succès:', customer.id);

    // Envoyer le code de réduction par email
    await this.sendDiscountCode(customer.id, email);

    return {
      success: true,
      message: 'Mise à jour réussie ! Votre code de réduction vous a été envoyé par email.',
      customerId: customer.id
    };
  }

  /**
   * Créer et envoyer un code de réduction
   */
  private async sendDiscountCode(customerId: string, email: string): Promise<void> {
    try {
      // Créer un code de réduction
      const discountCode = await this.createDiscountCode();
      
      // Envoyer l'email avec le code de réduction
      await this.sendDiscountEmail(email, discountCode);
      
      console.log('✅ Code de réduction envoyé:', discountCode);
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi du code de réduction:', error);
    }
  }

  /**
   * Créer un code de réduction automatique
   */
  private async createDiscountCode(): Promise<string> {
    const mutation = `
      mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
        discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
          codeDiscountNode {
            id
            codeDiscount {
              ... on DiscountCodeBasic {
                codes(first: 1) {
                  edges {
                    node {
                      code
                    }
                  }
                }
                title
                startsAt
                endsAt
                customerGets {
                  value {
                    ... on DiscountPercentage {
                      percentage
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 jours

    const input = {
      title: "Newsletter Signup - 10% Off",
      code: `NEWSLETTER${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      startsAt: now.toISOString(),
      endsAt: expiresAt.toISOString(),
      customerGets: {
        value: {
          percentage: 10.0
        },
        items: {
          all: true
        }
      },
      customerSelection: {
        all: true
      },
      usageLimit: 1,
      appliesOncePerCustomer: true
    };

    const response = await fetch(`https://${this.shopifyDomain}/admin/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': this.accessToken,
      },
      body: JSON.stringify({
        query: mutation,
        variables: { basicCodeDiscount: input }
      })
    });

    const data = await response.json();

    if (data.errors || data.data.discountCodeBasicCreate.userErrors.length > 0) {
      throw new Error('Erreur lors de la création du code de réduction');
    }

    return data.data.discountCodeBasicCreate.codeDiscountNode.codeDiscount.codes.edges[0].node.code;
  }

  /**
   * Envoyer un email avec le code de réduction
   */
  private async sendDiscountEmail(email: string, discountCode: string): Promise<void> {
    // Utiliser l'API Shopify pour envoyer un email transactionnel
    const mutation = `
      mutation emailSend($input: EmailSendInput!) {
        emailSend(input: $input) {
          email {
            id
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const input = {
      to: email,
      subject: "🎉 Votre code de réduction de 10% !",
      body: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #d13296;">Bienvenue dans notre communauté !</h1>
          <p>Merci de vous être inscrit à notre newsletter !</p>
          <p>Voici votre code de réduction de <strong>10%</strong> sur votre première commande :</p>
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #d13296; font-size: 24px; margin: 0;">${discountCode}</h2>
          </div>
          <p>Ce code est valable pendant 30 jours et peut être utilisé une seule fois.</p>
          <p>À bientôt !</p>
        </div>
      `,
      from: "noreply@${this.shopifyDomain}",
      replyTo: "support@${this.shopifyDomain}"
    };

    const response = await fetch(`https://${this.shopifyDomain}/admin/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': this.accessToken,
      },
      body: JSON.stringify({
        query: mutation,
        variables: { input }
      })
    });

    const data = await response.json();

    if (data.errors || data.data.emailSend.userErrors.length > 0) {
      console.warn('⚠️ Impossible d\'envoyer l\'email automatiquement, le code sera visible dans le modal');
    }
  }

  /**
   * Se désabonner de la newsletter
   */
  async unsubscribeFromNewsletter(email: string): Promise<NewsletterResponse> {
    try {
      const customer = await this.findCustomerByEmail(email);
      
      if (!customer) {
        return {
          success: false,
          message: 'Aucun client trouvé avec cet email'
        };
      }

      const mutation = `
        mutation customerUpdate($input: CustomerInput!) {
          customerUpdate(input: $input) {
            customer {
              id
              acceptsMarketing
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      const input = {
        id: customer.id,
        acceptsMarketing: false
      };

      const response = await fetch(`https://${this.shopifyDomain}/admin/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': this.accessToken,
        },
        body: JSON.stringify({
          query: mutation,
          variables: { input }
        })
      });

      const data = await response.json();

      if (data.errors || data.data.customerUpdate.userErrors.length > 0) {
        return {
          success: false,
          message: 'Erreur lors du désabonnement'
        };
      }

      return {
        success: true,
        message: 'Désabonnement réussi'
      };
    } catch (error) {
      return {
        success: false,
        message: 'Erreur lors du désabonnement',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }
  }
}

export const newsletterService = new NewsletterService();
