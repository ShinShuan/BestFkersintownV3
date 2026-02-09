import { shopifyStorefrontAPI } from './shopify';

// Types pour l'authentification Shopify
export interface ShopifyCustomer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  verifiedEmail: boolean;
  acceptsMarketing: boolean;
  createdAt: string;
  updatedAt: string;
  ordersCount: number;
  totalSpent: string;
  tags: string[];
  note?: string;
  addresses: {
    id: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    phone?: string;
    default: boolean;
  }[];
  defaultAddress?: {
    id: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    phone?: string;
  };
}

export interface ShopifyCustomerAccessToken {
  accessToken: string;
  expiresAt: string;
}

export interface ShopifyCustomerAccessTokenCreateInput {
  email: string;
  password: string;
}

export interface ShopifyCustomerCreateInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  acceptsMarketing?: boolean;
}

// Service d'authentification Shopify
export const authService = {
  // Créer un compte client
  async createCustomer(customerData: ShopifyCustomerCreateInput): Promise<ShopifyCustomer> {
    const mutation = `
      mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customer {
            id
            email
            firstName
            lastName
            phone
            verifiedEmail
            acceptsMarketing
            createdAt
            updatedAt
            ordersCount
            totalSpent
            tags
            note
            addresses {
              id
              firstName
              lastName
              address1
              address2
              city
              province
              country
              zip
              phone
              default
            }
            defaultAddress {
              id
              firstName
              lastName
              address1
              address2
              city
              province
              country
              zip
              phone
            }
          }
          customerAccessToken {
            accessToken
            expiresAt
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }
    `;

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query: mutation,
        variables: {
          input: customerData
        }
      });

      console.log('Réponse création compte Shopify:', response.data);

      // Vérifier si la réponse contient des erreurs
      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      if (!response.data.data || !response.data.data.customerCreate) {
        throw new Error('Réponse invalide de l\'API Shopify');
      }

      if (response.data.data.customerCreate.customerUserErrors.length > 0) {
        throw new Error(response.data.data.customerCreate.customerUserErrors[0].message);
      }

      const customer = response.data.data.customerCreate.customer;
      const accessToken = response.data.data.customerCreate.customerAccessToken;

      // Stocker le token d'accès
      if (accessToken) {
        localStorage.setItem('shopify_customer_token', accessToken.accessToken);
        localStorage.setItem('shopify_customer_token_expires', accessToken.expiresAt);
      }

      return customer;
    } catch (error) {
      console.error('Erreur lors de la création du compte:', error);
      throw error;
    }
  },

  // Connexion client
  async loginCustomer(email: string, password: string): Promise<{ customer: ShopifyCustomer; accessToken: ShopifyCustomerAccessToken }> {
    const mutation = `
      mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
          customerAccessToken {
            accessToken
            expiresAt
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }
    `;

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query: mutation,
        variables: {
          input: { email, password }
        }
      });

      console.log('Réponse Shopify:', response.data);

      // Vérifier si la réponse contient des erreurs
      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      if (!response.data.data || !response.data.data.customerAccessTokenCreate) {
        throw new Error('Réponse invalide de l\'API Shopify');
      }

      if (response.data.data.customerAccessTokenCreate.customerUserErrors.length > 0) {
        throw new Error(response.data.data.customerAccessTokenCreate.customerUserErrors[0].message);
      }

      const accessToken = response.data.data.customerAccessTokenCreate.customerAccessToken;

      // Stocker le token d'accès
      localStorage.setItem('shopify_customer_token', accessToken.accessToken);
      localStorage.setItem('shopify_customer_token_expires', accessToken.expiresAt);

      // Récupérer les informations du client
      const customer = await this.getCurrentCustomer(accessToken.accessToken);

      if (!customer) {
        throw new Error('Impossible de récupérer les informations du client');
      }
      return { customer, accessToken };
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  },

  // Récupérer le client actuel
  async getCurrentCustomer(accessToken?: string): Promise<ShopifyCustomer | null> {
    const token = accessToken || localStorage.getItem('shopify_customer_token');
    
    if (!token) {
      return null;
    }

    const query = `
      query getCustomer {
        customer {
          id
          email
          firstName
          lastName
          phone
          verifiedEmail
          acceptsMarketing
          createdAt
          updatedAt
          ordersCount
          totalSpent
          tags
          note
          addresses {
            id
            firstName
            lastName
            address1
            address2
            city
            province
            country
            zip
            phone
            default
          }
          defaultAddress {
            id
            firstName
            lastName
            address1
            address2
            city
            province
            country
            zip
            phone
          }
        }
      }
    `;

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query,
        headers: {
          'X-Shopify-Storefront-Access-Token': token
        }
      });

      return response.data.data.customer;
    } catch (error) {
      console.error('Erreur lors de la récupération du client:', error);
      // Si le token est invalide, le supprimer
      this.logout();
      return null;
    }
  },

  // Déconnexion
  logout(): void {
    localStorage.removeItem('shopify_customer_token');
    localStorage.removeItem('shopify_customer_token_expires');
  },

  // Vérifier si le client est connecté
  isAuthenticated(): boolean {
    const token = localStorage.getItem('shopify_customer_token');
    const expiresAt = localStorage.getItem('shopify_customer_token_expires');
    
    if (!token || !expiresAt) {
      return false;
    }

    // Vérifier si le token n'a pas expiré
    const expirationDate = new Date(expiresAt);
    const now = new Date();
    
    return expirationDate > now;
  },

  // Mettre à jour le profil client
  async updateCustomer(customerData: Partial<ShopifyCustomer>): Promise<ShopifyCustomer> {
    const mutation = `
      mutation customerUpdate($customer: CustomerUpdateInput!) {
        customerUpdate(customer: $customer) {
          customer {
            id
            email
            firstName
            lastName
            phone
            verifiedEmail
            acceptsMarketing
            createdAt
            updatedAt
            ordersCount
            totalSpent
            tags
            note
            addresses {
              id
              firstName
              lastName
              address1
              address2
              city
              province
              country
              zip
              phone
              default
            }
            defaultAddress {
              id
              firstName
              lastName
              address1
              address2
              city
              province
              country
              zip
              phone
            }
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }
    `;

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query: mutation,
        variables: {
          customer: customerData
        }
      });

      if (response.data.data.customerUpdate.customerUserErrors.length > 0) {
        throw new Error(response.data.data.customerUpdate.customerUserErrors[0].message);
      }

      return response.data.data.customerUpdate.customer;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
      throw error;
    }
  },

  // Réinitialiser le mot de passe
  async resetPassword(email: string): Promise<void> {
    const mutation = `
      mutation customerRecover($email: String!) {
        customerRecover(email: $email) {
          customerUserErrors {
            code
            field
            message
          }
        }
      }
    `;

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query: mutation,
        variables: { email }
      });

      if (response.data.data.customerRecover.customerUserErrors.length > 0) {
        throw new Error(response.data.data.customerRecover.customerUserErrors[0].message);
      }
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe:', error);
      throw error;
    }
  },

  // Connexion avec Google (OAuth)
  async loginWithGoogle(): Promise<{ customer: ShopifyCustomer; accessToken: ShopifyCustomerAccessToken }> {
    try {
      // Vérifier si Google OAuth est disponible
      if (!window.google || !window.google.accounts) {
        throw new Error('Google OAuth non disponible. Veuillez recharger la page et réessayer.');
      }

      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      if (!clientId) {
        throw new Error('ID client Google non configuré. Veuillez configurer VITE_GOOGLE_CLIENT_ID.');
      }

      // Créer une promesse pour gérer la réponse Google
      return new Promise((resolve, reject) => {
        // Configuration Google OAuth avec gestion d'erreur améliorée
        window.google.accounts.id.initialize({
          client_id: clientId,
          auto_select: false,
          cancel_on_tap_outside: true,
          callback: async (response: any) => {
            try {
              // Décoder le token JWT pour obtenir les informations utilisateur
              const payload = JSON.parse(atob(response.credential.split('.')[1]));
              
              console.log('Données Google reçues:', payload);
              
              // Vérifier si l'utilisateur existe déjà dans Shopify
              let customer: ShopifyCustomer;
              
              try {
                // Essayer de se connecter avec l'email Google
                const loginResult = await this.loginCustomer(payload.email, `google_${payload.sub}`);
                customer = loginResult.customer;
              } catch (loginError) {
                // Si la connexion échoue, créer un nouveau compte
                console.log('Création d\'un nouveau compte avec Google...');
                customer = await this.createCustomer({
                  email: payload.email,
                  password: `google_${payload.sub}`, // Mot de passe généré
                  firstName: payload.given_name || 'Utilisateur',
                  lastName: payload.family_name || 'Google',
                  acceptsMarketing: false
                });
              }
              
              // Récupérer le token d'accès
              const accessToken = {
                accessToken: localStorage.getItem('shopify_customer_token') || '',
                expiresAt: localStorage.getItem('shopify_customer_token_expires') || ''
              };
              
              resolve({ customer, accessToken });
            } catch (error) {
              console.error('Erreur lors du traitement Google:', error);
              reject(new Error('Erreur lors du traitement de la réponse Google. Veuillez réessayer.'));
            }
          }
        });
        
        // Déclencher la popup Google avec gestion d'erreur
        try {
          window.google.accounts.id.prompt();
        } catch (error) {
          reject(new Error('Erreur lors de l\'ouverture de la popup Google. Vérifiez votre configuration OAuth.'));
        }
      });
    } catch (error) {
      console.error('Erreur lors de la connexion Google:', error);
      throw error;
    }
  },

  // Créer un compte avec Google
  async createCustomerWithGoogle(googleData: {
    email: string;
    firstName: string;
    lastName: string;
    googleId: string;
  }): Promise<ShopifyCustomer> {
    try {
      // Cette fonction nécessiterait une intégration avec l'API Google
      // et la création d'un compte Shopify avec les données Google
      
      // Pour l'instant, nous utilisons la méthode standard de création
      return await this.createCustomer({
        email: googleData.email,
        password: `google_${googleData.googleId}`, // Mot de passe généré
        firstName: googleData.firstName,
        lastName: googleData.lastName,
        acceptsMarketing: false
      });
    } catch (error) {
      console.error('Erreur lors de la création du compte avec Google:', error);
      throw error;
    }
  }
};

export default authService;
