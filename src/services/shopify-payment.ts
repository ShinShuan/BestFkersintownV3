import axios from 'axios';
import { shopifyStorefrontAPI } from './shopify';

import { ENV_CONFIG } from '../../environment.config.js';

// Configuration Shopify Payment
const SHOPIFY_STORE_URL = ENV_CONFIG.SHOPIFY.STORE_URL;
const STRIPE_PUBLISHABLE_KEY = ENV_CONFIG.STRIPE.PUBLISHABLE_KEY;

// Types pour les paiements
export interface ShopifyPaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
  clientSecret: string;
  paymentMethodTypes: string[];
}

export interface ShopifyCheckout {
  id: string;
  webUrl: string;
  completedAt: string | null;
  lineItems: {
    id: string;
    title: string;
    quantity: number;
    variant: {
      id: string;
      title: string;
      price: string;
      image?: string;
    };
  }[];
  subtotalPrice: string;
  totalTax: string;
  totalPrice: string;
  shippingAddress?: {
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
  billingAddress?: {
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

// Service pour les paiements Shopify
export const paymentService = {
  // Créer un checkout Shopify
  async createCheckout(lineItems: Array<{ variantId: string; quantity: number }>): Promise<ShopifyCheckout> {
    const mutation = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
            completedAt
            lineItems(first: 50) {
              edges {
                node {
                  id
                  title
                  quantity
                  variant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                      altText
                    }
                  }
                }
              }
            }
            subtotalPrice {
              amount
              currencyCode
            }
            totalTax {
              amount
              currencyCode
            }
            totalPrice {
              amount
              currencyCode
            }
            shippingAddress {
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
            billingAddress {
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
          checkoutUserErrors {
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
          input: {
            lineItems: lineItems.map(item => ({
              variantId: item.variantId,
              quantity: item.quantity
            }))
          }
        }
      });

      if (response.data.data.checkoutCreate.checkoutUserErrors.length > 0) {
        throw new Error(response.data.data.checkoutCreate.checkoutUserErrors[0].message);
      }

      const checkout = response.data.data.checkoutCreate.checkout;
      return {
        ...checkout,
        lineItems: checkout.lineItems.edges.map((edge: any) => ({
          id: edge.node.id,
          title: edge.node.title,
          quantity: edge.node.quantity,
          variant: {
            id: edge.node.variant.id,
            title: edge.node.variant.title,
            price: edge.node.variant.price.amount,
            image: edge.node.variant.image?.url
          }
        })),
        subtotalPrice: checkout.subtotalPrice.amount,
        totalTax: checkout.totalTax.amount,
        totalPrice: checkout.totalPrice.amount
      };
    } catch (error) {
      console.error('Erreur lors de la création du checkout:', error);
      throw error;
    }
  },

  // Mettre à jour un checkout existant
  async updateCheckout(checkoutId: string, updates: any): Promise<ShopifyCheckout> {
    const mutation = `
      mutation checkoutUpdate($checkoutId: ID!, $input: CheckoutUpdateInput!) {
        checkoutUpdate(checkoutId: $checkoutId, input: $input) {
          checkout {
            id
            webUrl
            completedAt
            lineItems(first: 50) {
              edges {
                node {
                  id
                  title
                  quantity
                  variant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                      altText
                    }
                  }
                }
              }
            }
            subtotalPrice {
              amount
              currencyCode
            }
            totalTax {
              amount
              currencyCode
            }
            totalPrice {
              amount
              currencyCode
            }
            shippingAddress {
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
            billingAddress {
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
          checkoutUserErrors {
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
          checkoutId,
          input: updates
        }
      });

      if (response.data.data.checkoutUpdate.checkoutUserErrors.length > 0) {
        throw new Error(response.data.data.checkoutUpdate.checkoutUserErrors[0].message);
      }

      const checkout = response.data.data.checkoutUpdate.checkout;
      return {
        ...checkout,
        lineItems: checkout.lineItems.edges.map((edge: any) => ({
          id: edge.node.id,
          title: edge.node.title,
          quantity: edge.node.quantity,
          variant: {
            id: edge.node.variant.id,
            title: edge.node.variant.title,
            price: edge.node.variant.price.amount,
            image: edge.node.variant.image?.url
          }
        })),
        subtotalPrice: checkout.subtotalPrice.amount,
        totalTax: checkout.totalTax.amount,
        totalPrice: checkout.totalPrice.amount
      };
    } catch (error) {
      console.error('Erreur lors de la mise à jour du checkout:', error);
      throw error;
    }
  },

  // Récupérer un checkout par ID
  async getCheckout(checkoutId: string): Promise<ShopifyCheckout | null> {
    const query = `
      query getCheckout($id: ID!) {
        node(id: $id) {
          ... on Checkout {
            id
            webUrl
            completedAt
            lineItems(first: 50) {
              edges {
                node {
                  id
                  title
                  quantity
                  variant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                      altText
                    }
                  }
                }
              }
            }
            subtotalPrice {
              amount
              currencyCode
            }
            totalTax {
              amount
              currencyCode
            }
            totalPrice {
              amount
              currencyCode
            }
            shippingAddress {
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
            billingAddress {
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
      }
    `;

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query,
        variables: { id: checkoutId }
      });

      const checkout = response.data.data.node;
      if (!checkout) return null;

      return {
        ...checkout,
        lineItems: checkout.lineItems.edges.map((edge: any) => ({
          id: edge.node.id,
          title: edge.node.title,
          quantity: edge.node.quantity,
          variant: {
            id: edge.node.variant.id,
            title: edge.node.variant.title,
            price: edge.node.variant.price.amount,
            image: edge.node.variant.image?.url
          }
        })),
        subtotalPrice: checkout.subtotalPrice.amount,
        totalTax: checkout.totalTax.amount,
        totalPrice: checkout.totalPrice.amount
      };
    } catch (error) {
      console.error('Erreur lors de la récupération du checkout:', error);
      throw error;
    }
  },

  // Créer un intent de paiement Stripe
  async createPaymentIntent(amount: number, currency: string = 'EUR'): Promise<ShopifyPaymentIntent> {
    try {
      // Cette fonction nécessiterait un backend pour créer l'intent Stripe
      // Pour l'instant, nous simulons la création
      const mockIntent: ShopifyPaymentIntent = {
        id: `pi_${Math.random().toString(36).substr(2, 9)}`,
        amount,
        currency,
        status: 'requires_payment_method',
        clientSecret: `pi_${Math.random().toString(36).substr(2, 9)}_secret_${Math.random().toString(36).substr(2, 9)}`,
        paymentMethodTypes: ['card', 'sepa_debit']
      };

      return mockIntent;
    } catch (error) {
      console.error('Erreur lors de la création de l\'intent de paiement:', error);
      throw error;
    }
  },

  // Traiter un paiement
  async processPayment(paymentIntentId: string, paymentMethodId: string): Promise<{ success: boolean; message: string }> {
    try {
      // Cette fonction nécessiterait un backend pour traiter le paiement
      // Pour l'instant, nous simulons le traitement
      console.log(`Traitement du paiement: ${paymentIntentId} avec ${paymentMethodId}`);
      
      // Simulation d'un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return {
        success: true,
        message: 'Paiement traité avec succès'
      };
    } catch (error) {
      console.error('Erreur lors du traitement du paiement:', error);
      throw error;
    }
  }
};

export default paymentService;
