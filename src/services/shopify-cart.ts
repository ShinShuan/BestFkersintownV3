import { shopifyStorefrontAPI } from './shopify';

export interface ShopifyCartLineItem {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    price: {
      amount: string;
      currencyCode: string;
    };
    image?: {
      url: string;
      altText?: string;
    };
    product: {
      title: string;
    };
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  createdAt: string;
  updatedAt: string;
  lines: {
    edges: Array<{
      node: ShopifyCartLineItem;
    }>;
  };
  cost: {
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalTaxAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  buyerIdentity?: {
    email?: string;
    customer?: {
      id: string;
      email: string;
    };
  };
}

// Service pour les carts Shopify (API moderne)
export const cartService = {
  // Créer un nouveau cart
  async createCart(lineItems: Array<{ variantId: string; quantity: number }>, email?: string): Promise<ShopifyCart> {
    const mutation = `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
            createdAt
            updatedAt
            lines(first: 50) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
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
                      product {
                        title
                      }
                    }
                  }
                }
              }
            }
            cost {
              subtotalAmount {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
            }
            buyerIdentity {
              email
              customer {
                id
                email
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }
    `;

    const variables = {
      input: {
        lines: lineItems.map(item => ({
          merchandiseId: item.variantId,
          quantity: item.quantity
        })),
        buyerIdentity: email ? {
          email: email
        } : undefined
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

      if (response.data.data.cartCreate.userErrors.length > 0) {
        throw new Error(response.data.data.cartCreate.userErrors[0].message);
      }

      return response.data.data.cartCreate.cart;
    } catch (error) {
      console.error('Erreur lors de la création du cart:', error);
      throw error;
    }
  },

  // Récupérer un cart existant
  async getCart(cartId: string): Promise<ShopifyCart> {
    const query = `
      query getCart($id: ID!) {
        cart(id: $id) {
          id
          checkoutUrl
          createdAt
          updatedAt
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
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
                    product {
                      title
                    }
                  }
                }
              }
            }
          }
          cost {
            subtotalAmount {
              amount
              currencyCode
            }
            totalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
          }
          buyerIdentity {
            email
            customer {
              id
              email
            }
          }
        }
      }
    `;

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query,
        variables: { id: cartId }
      });

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      return response.data.data.cart;
    } catch (error) {
      console.error('Erreur lors de la récupération du cart:', error);
      throw error;
    }
  },

  // Ajouter des produits au cart
  async addToCart(cartId: string, lineItems: Array<{ variantId: string; quantity: number }>): Promise<ShopifyCart> {
    const mutation = `
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
            checkoutUrl
            createdAt
            updatedAt
            lines(first: 50) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
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
                      product {
                        title
                      }
                    }
                  }
                }
              }
            }
            cost {
              subtotalAmount {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }
    `;

    const variables = {
      cartId,
      lines: lineItems.map(item => ({
        merchandiseId: item.variantId,
        quantity: item.quantity
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

      if (response.data.data.cartLinesAdd.userErrors.length > 0) {
        throw new Error(response.data.data.cartLinesAdd.userErrors[0].message);
      }

      return response.data.data.cartLinesAdd.cart;
    } catch (error) {
      console.error('Erreur lors de l\'ajout au cart:', error);
      throw error;
    }
  },

  // Mettre à jour les quantités dans le cart
  async updateCartLines(cartId: string, lineUpdates: Array<{ id: string; quantity: number }>): Promise<ShopifyCart> {
    const mutation = `
      mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart {
            id
            checkoutUrl
            createdAt
            updatedAt
            lines(first: 50) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
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
                      product {
                        title
                      }
                    }
                  }
                }
              }
            }
            cost {
              subtotalAmount {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }
    `;

    const variables = {
      cartId,
      lines: lineUpdates.map(item => ({
        id: item.id,
        quantity: item.quantity
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

      if (response.data.data.cartLinesUpdate.userErrors.length > 0) {
        throw new Error(response.data.data.cartLinesUpdate.userErrors[0].message);
      }

      return response.data.data.cartLinesUpdate.cart;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du cart:', error);
      throw error;
    }
  },

  // Supprimer des lignes du cart
  async removeFromCart(cartId: string, lineIds: string[]): Promise<ShopifyCart> {
    const mutation = `
      mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
            id
            checkoutUrl
            createdAt
            updatedAt
            lines(first: 50) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
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
                      product {
                        title
                      }
                    }
                  }
                }
              }
            }
            cost {
              subtotalAmount {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }
    `;

    const variables = {
      cartId,
      lineIds
    };

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query: mutation,
        variables
      });

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      if (response.data.data.cartLinesRemove.userErrors.length > 0) {
        throw new Error(response.data.data.cartLinesRemove.userErrors[0].message);
      }

      return response.data.data.cartLinesRemove.cart;
    } catch (error) {
      console.error('Erreur lors de la suppression du cart:', error);
      throw error;
    }
  },

  // Rediriger vers le checkout
  redirectToCheckout(checkoutUrl: string): void {
    window.location.href = checkoutUrl;
  }
};
