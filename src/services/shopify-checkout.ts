import { shopifyStorefrontAPI } from './shopify';
import { ENV_CONFIG } from '../../environment.config.js';

// Types pour les checkouts Shopify
export interface ShopifyCheckoutLineItem {
  variantId: string;
  quantity: number;
  customAttributes?: Array<{
    key: string;
    value: string;
  }>;
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
      price: {
        amount: string;
        currencyCode: string;
      };
      image?: {
        url: string;
        altText: string;
      };
    };
  }[];
  subtotalPrice: {
    amount: string;
    currencyCode: string;
  };
  totalTax: {
    amount: string;
    currencyCode: string;
  };
  totalPrice: {
    amount: string;
    currencyCode: string;
  };
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
  email?: string;
  note?: string;
  discountApplications: Array<{
    type: string;
    value: {
      amount?: string;
      percentage?: number;
    };
    allocationMethod: string;
    targetSelection: string;
    targetType: string;
    code?: string;
  }>;
}

export interface ShopifyPaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
  clientSecret: string;
  paymentMethodTypes: string[];
}

// Service pour les checkouts Shopify
export const checkoutService = {
  // Créer un nouveau checkout
  async createCheckout(lineItems: ShopifyCheckoutLineItem[], email?: string): Promise<ShopifyCheckout> {
    const mutation = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
            completedAt
            email
            note
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
            discountApplications(first: 10) {
              edges {
                node {
                  type
                  value {
                    ... on MoneyV2 {
                      amount
                      currencyCode
                    }
                    ... on PricingPercentageValue {
                      percentage
                    }
                  }
                  allocationMethod
                  targetSelection
                  targetType
                  code
                }
              }
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

    const variables = {
      input: {
        lineItems: lineItems.map(item => ({
          variantId: item.variantId,
          quantity: item.quantity,
          customAttributes: item.customAttributes
        })),
        email: email
      }
    };

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query: mutation,
        variables
      });

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      if (response.data.data.checkoutCreate.checkoutUserErrors.length > 0) {
        throw new Error(response.data.data.checkoutCreate.checkoutUserErrors[0].message);
      }

      const checkout = response.data.data.checkoutCreate.checkout;
      
      // Transformer les données pour correspondre à notre interface
      return {
        ...checkout,
        lineItems: checkout.lineItems.edges.map((edge: any) => edge.node),
        discountApplications: checkout.discountApplications.edges.map((edge: any) => edge.node)
      };
    } catch (error) {
      console.error('Erreur lors de la création du checkout:', error);
      throw error;
    }
  },

  // Récupérer un checkout existant
  async getCheckout(checkoutId: string): Promise<ShopifyCheckout> {
    const query = `
      query getCheckout($id: ID!) {
        node(id: $id) {
          ... on Checkout {
            id
            webUrl
            completedAt
            email
            note
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
            discountApplications(first: 10) {
              edges {
                node {
                  type
                  value {
                    ... on MoneyV2 {
                      amount
                      currencyCode
                    }
                    ... on PricingPercentageValue {
                      percentage
                    }
                  }
                  allocationMethod
                  targetSelection
                  targetType
                  code
                }
              }
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

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      const checkout = response.data.data.node;
      
      return {
        ...checkout,
        lineItems: checkout.lineItems.edges.map((edge: any) => edge.node),
        discountApplications: checkout.discountApplications.edges.map((edge: any) => edge.node)
      };
    } catch (error) {
      console.error('Erreur lors de la récupération du checkout:', error);
      throw error;
    }
  },

  // Ajouter des produits au checkout
  async addLineItems(checkoutId: string, lineItems: ShopifyCheckoutLineItem[]): Promise<ShopifyCheckout> {
    const mutation = `
      mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
        checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
          checkout {
            id
            webUrl
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
                  }
                }
              }
            }
            subtotalPrice {
              amount
              currencyCode
            }
            totalPrice {
              amount
              currencyCode
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

    const variables = {
      checkoutId,
      lineItems: lineItems.map(item => ({
        variantId: item.variantId,
        quantity: item.quantity,
        customAttributes: item.customAttributes
      }))
    };

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query: mutation,
        variables
      });

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      if (response.data.data.checkoutLineItemsAdd.checkoutUserErrors.length > 0) {
        throw new Error(response.data.data.checkoutLineItemsAdd.checkoutUserErrors[0].message);
      }

      const checkout = response.data.data.checkoutLineItemsAdd.checkout;
      
      return {
        ...checkout,
        lineItems: checkout.lineItems.edges.map((edge: any) => edge.node)
      };
    } catch (error) {
      console.error('Erreur lors de l\'ajout de produits au checkout:', error);
      throw error;
    }
  },

  // Mettre à jour les quantités
  async updateLineItems(checkoutId: string, lineItems: Array<{ id: string; quantity: number }>): Promise<ShopifyCheckout> {
    const mutation = `
      mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
        checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
          checkout {
            id
            webUrl
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
                  }
                }
              }
            }
            subtotalPrice {
              amount
              currencyCode
            }
            totalPrice {
              amount
              currencyCode
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
          lineItems
        }
      });

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      if (response.data.data.checkoutLineItemsUpdate.checkoutUserErrors.length > 0) {
        throw new Error(response.data.data.checkoutLineItemsUpdate.checkoutUserErrors[0].message);
      }

      const checkout = response.data.data.checkoutLineItemsUpdate.checkout;
      
      return {
        ...checkout,
        lineItems: checkout.lineItems.edges.map((edge: any) => edge.node)
      };
    } catch (error) {
      console.error('Erreur lors de la mise à jour des produits:', error);
      throw error;
    }
  },

  // Supprimer des produits du checkout
  async removeLineItems(checkoutId: string, lineItemIds: string[]): Promise<ShopifyCheckout> {
    const mutation = `
      mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
        checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
          checkout {
            id
            webUrl
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
                  }
                }
              }
            }
            subtotalPrice {
              amount
              currencyCode
            }
            totalPrice {
              amount
              currencyCode
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
          lineItemIds
        }
      });

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      if (response.data.data.checkoutLineItemsRemove.checkoutUserErrors.length > 0) {
        throw new Error(response.data.data.checkoutLineItemsRemove.checkoutUserErrors[0].message);
      }

      const checkout = response.data.data.checkoutLineItemsRemove.checkout;
      
      return {
        ...checkout,
        lineItems: checkout.lineItems.edges.map((edge: any) => edge.node)
      };
    } catch (error) {
      console.error('Erreur lors de la suppression de produits:', error);
      throw error;
    }
  },

  // Appliquer un code de réduction
  async applyDiscountCode(checkoutId: string, discountCode: string): Promise<ShopifyCheckout> {
    const mutation = `
      mutation checkoutDiscountCodeApplyV2($checkoutId: ID!, $discountCode: String!) {
        checkoutDiscountCodeApplyV2(checkoutId: $checkoutId, discountCode: $discountCode) {
          checkout {
            id
            webUrl
            discountApplications(first: 10) {
              edges {
                node {
                  type
                  value {
                    ... on MoneyV2 {
                      amount
                      currencyCode
                    }
                    ... on PricingPercentageValue {
                      percentage
                    }
                  }
                  allocationMethod
                  targetSelection
                  targetType
                  code
                }
              }
            }
            totalPrice {
              amount
              currencyCode
            }
          }
          checkoutUserErrors {
            code
            field
            message
          }
          discountCodeApplicationUserErrors {
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
          discountCode
        }
      });

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      const result = response.data.data.checkoutDiscountCodeApplyV2;
      
      if (result.checkoutUserErrors.length > 0) {
        throw new Error(result.checkoutUserErrors[0].message);
      }

      if (result.discountCodeApplicationUserErrors.length > 0) {
        throw new Error(result.discountCodeApplicationUserErrors[0].message);
      }

      const checkout = result.checkout;
      
      return {
        ...checkout,
        discountApplications: checkout.discountApplications.edges.map((edge: any) => edge.node)
      };
    } catch (error) {
      console.error('Erreur lors de l\'application du code de réduction:', error);
      throw error;
    }
  },

  // Rediriger vers le checkout Shopify
  redirectToCheckout(checkoutUrl: string): void {
    window.location.href = checkoutUrl;
  },

  // Ouvrir le checkout dans une nouvelle fenêtre
  openCheckoutInNewWindow(checkoutUrl: string): void {
    window.open(checkoutUrl, '_blank', 'width=800,height=600');
  }
};

export default checkoutService;
