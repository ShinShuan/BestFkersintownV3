import axios from 'axios';
import { ENV_CONFIG } from '../../environment.config.js';

// Configuration Shopify
const SHOPIFY_STORE_URL = ENV_CONFIG.SHOPIFY.STORE_URL;
const SHOPIFY_ADMIN_API_VERSION = '2024-01';
const SHOPIFY_STOREFRONT_API_VERSION = '2024-01';

// Clés API
const ADMIN_ACCESS_TOKEN = ENV_CONFIG.SHOPIFY.ADMIN_ACCESS_TOKEN;
const STOREFRONT_ACCESS_TOKEN = ENV_CONFIG.SHOPIFY.STOREFRONT_ACCESS_TOKEN;
const FRONTEND_API_KEY = ENV_CONFIG.SHOPIFY.FRONTEND_API_KEY;
const FRONTEND_API_SECRET = ENV_CONFIG.SHOPIFY.FRONTEND_API_SECRET;

// Instance Axios pour l'API Admin
export const shopifyAdminAPI = axios.create({
  baseURL: `https://${SHOPIFY_STORE_URL}/admin/api/${SHOPIFY_ADMIN_API_VERSION}`,
  headers: {
    'X-Shopify-Access-Token': ADMIN_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
});

// Instance Axios pour l'API Storefront
export const shopifyStorefrontAPI = axios.create({
  baseURL: `https://${SHOPIFY_STORE_URL}/api/${SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
});

// Instance Axios pour l'API Frontend
export const shopifyFrontendAPI = axios.create({
  baseURL: `https://${SHOPIFY_STORE_URL}/api`,
  headers: {
    'X-Shopify-API-Key': FRONTEND_API_KEY,
    'X-Shopify-API-Secret': FRONTEND_API_SECRET,
    'Content-Type': 'application/json',
  },
});

// Types pour les produits Shopify
export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  images: {
    id: string;
    src: string;
    altText: string;
  }[];
  variants: {
    id: string;
    title: string;
    price: string;
    compareAtPrice: string;
    available: boolean;
    inventoryQuantity: number;
    selectedOptions: Array<{
      name: string;
      value: string;
    }>;
  }[];
  tags: string[];
  productType: string;
  vendor: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  status: string;
  totalInventory: number;
  hasOnlyDefaultVariant: boolean;
  options: {
    id: string;
    name: string;
    values: string[];
  }[];
}

// Types pour les commandes Shopify
export interface ShopifyOrder {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  processedAt: string;
  cancelledAt: string | null;
  cancelReason: string | null;
  currency: string;
  subtotalPrice: string;
  totalTax: string;
  totalPrice: string;
  totalDiscounts: string;
  totalWeight: number;
  financialStatus: string;
  fulfillmentStatus: string;
  confirmed: boolean;
  totalLineItemsQuantity: number;
  lineItems: {
    id: string;
    title: string;
    quantity: number;
    price: string;
    sku: string;
    variantId: string;
    productId: string;
  }[];
  shippingAddress: {
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    phone: string;
  } | null;
  billingAddress: {
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    phone: string;
  } | null;
  customer: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  } | null;
}

// Types pour les clients Shopify
export interface ShopifyCustomer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  verifiedEmail: boolean;
  acceptsMarketing: boolean;
  createdAt: string;
  updatedAt: string;
  ordersCount: number;
  totalSpent: string;
  tags: string[];
  note: string;
  addresses: {
    id: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    phone: string;
    default: boolean;
  }[];
  defaultAddress: {
    id: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    phone: string;
  } | null;
}

// Service pour les produits
export const productService = {
  // Méthode principale utilisant GraphQL
  async getAllProducts(limit: number = 50, after?: string) {
    const query = `
      query GetProducts($first: Int!, $after: String) {
        products(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              title
              descriptionHtml
              handle
              images(first: 10) {
                edges {
                  node {
                    id
                    url
                    altText
                  }
                }
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    compareAtPrice {
                      amount
                      currencyCode
                    }
                                      availableForSale
                  quantityAvailable
                  selectedOptions {
                    name
                    value
                  }
                  }
                }
              }
              tags
              productType
              vendor
              createdAt
              updatedAt
              publishedAt
              totalInventory
              options {
                id
                name
                values
              }
            }
          }
        }
      }
    `;

    try {
      console.log('🔄 Envoi de la requête GraphQL...');
      const response = await shopifyStorefrontAPI.post('', {
        query,
        variables: { first: limit, after }
      });

      console.log('📦 Réponse complète:', response.data);

      // Vérifier la structure de la réponse
      if (!response.data) {
        throw new Error('Pas de données dans la réponse');
      }

      if (!response.data.data) {
        console.error('❌ Erreur GraphQL:', response.data.errors);
        throw new Error('Erreur GraphQL: ' + (response.data.errors?.[0]?.message || 'Structure de réponse invalide'));
      }

      if (!response.data.data.products) {
        throw new Error('Pas de produits dans la réponse');
      }

      const products = response.data.data.products.edges.map((edge: any) => ({
        ...edge.node,
        description: edge.node.descriptionHtml || edge.node.description || '',
        images: edge.node.images.edges.map((img: any) => ({
          id: img.node.id,
          src: img.node.url,
          altText: img.node.altText
        })),
        variants: edge.node.variants.edges.map((variant: any) => ({
          id: variant.node.id,
          title: variant.node.title,
          price: variant.node.price.amount,
          compareAtPrice: variant.node.compareAtPrice?.amount,
          available: variant.node.availableForSale,
          inventoryQuantity: variant.node.quantityAvailable,
          selectedOptions: variant.node.selectedOptions || []
        }))
      }));

      console.log('✅ Produits transformés:', products);
      console.log('🖼️ URLs des images du premier produit:', products[0]?.images);

      return {
        products,
        hasNextPage: response.data.data.products.pageInfo.hasNextPage,
        endCursor: response.data.data.products.pageInfo.endCursor
      };
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des produits:', error);
      throw error;
    }
  },

  // Récupérer un produit par son ID
  async getProductById(productId: string): Promise<ShopifyProduct> {
    const query = `
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          title
          descriptionHtml
          handle
          images(first: 10) {
            edges {
              node {
                id
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                availableForSale
                quantityAvailable
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          tags
          productType
          vendor
          createdAt
          updatedAt
          publishedAt
          totalInventory
          options {
            id
            name
            values
          }
        }
      }
    `;

    try {
      console.log('🔄 Récupération du produit par ID:', productId);
      // Convertir l'ID numérique en Global ID si nécessaire
      const globalId = productId.includes('gid://') ? productId : `gid://shopify/Product/${productId}`;
      
      const response = await shopifyStorefrontAPI.post('', {
        query,
        variables: { id: globalId }
      });

      console.log('📦 Réponse produit:', response.data);

      if (!response.data?.data?.product) {
        throw new Error('Produit non trouvé');
      }

      const product = response.data.data.product;
      
              return {
          ...product,
          description: product.descriptionHtml || product.description || '',
          images: product.images.edges.map((img: any) => ({
            id: img.node.id,
            src: img.node.url,
            altText: img.node.altText
          })),
          variants: product.variants.edges.map((variant: any) => ({
            id: variant.node.id,
            title: variant.node.title,
            price: variant.node.price.amount,
            compareAtPrice: variant.node.compareAtPrice?.amount,
            available: variant.node.availableForSale,
            inventoryQuantity: variant.node.quantityAvailable,
            selectedOptions: variant.node.selectedOptions || []
          }))
        };
    } catch (error) {
      console.error('❌ Erreur lors de la récupération du produit:', error);
      throw error;
    }
  },

  // Méthode alternative utilisant l'API REST
  async getAllProductsREST() {
    try {
      console.log('Tentative avec l\'API REST Shopify...');
      
      const response = await shopifyAdminAPI.get('/products.json');
      console.log('✅ Réponse API REST:', response.data);
      
      return {
        products: response.data.products.map((product: any) => ({
          id: product.id.toString(),
          title: product.title,
          description: product.body_html || '',
          handle: product.handle,
          images: product.images.map((img: any) => ({
            id: img.id.toString(),
            src: img.src,
            altText: img.alt || ''
          })),
          variants: product.variants.map((variant: any) => ({
            id: variant.id.toString(),
            title: variant.title,
            price: variant.price,
            compareAtPrice: variant.compare_at_price,
            available: variant.inventory_quantity > 0,
            inventoryQuantity: variant.inventory_quantity
          })),
          tags: product.tags ? product.tags.split(',').map((tag: string) => tag.trim()) : [],
          productType: product.product_type || '',
          vendor: product.vendor || '',
          createdAt: product.created_at,
          updatedAt: product.updated_at,
          publishedAt: product.published_at,
          status: product.status,
          totalInventory: product.variants.reduce((sum: number, variant: any) => sum + (variant.inventory_quantity || 0), 0),
          hasOnlyDefaultVariant: product.variants.length === 1,
          options: product.options.map((option: any) => ({
            id: option.id.toString(),
            name: option.name,
            values: option.values
          }))
        })),
        hasNextPage: false,
        endCursor: null
      };
    } catch (error) {
      console.error('❌ Erreur API REST Shopify:', error);
      throw error;
    }
  },

  // Récupérer un produit par son handle
  async getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
    const query = `
      query GetProductByHandle($handle: String!) {
        productByHandle(handle: $handle) {
          id
          title
          description
          handle
          images(first: 10) {
            edges {
              node {
                id
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                availableForSale
                quantityAvailable
              }
            }
          }
          tags
          productType
          vendor
          createdAt
          updatedAt
          publishedAt
          status
          totalInventory
          hasOnlyDefaultVariant
          options {
            id
            name
            values
          }
        }
      }
    `;

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query,
        variables: { handle }
      });

      if (!response.data.data.productByHandle) {
        return null;
      }

      const product = response.data.data.productByHandle;
      return {
        ...product,
        images: product.images.edges.map((img: any) => ({
          id: img.node.id,
          src: img.node.url,
          altText: img.node.altText
        })),
        variants: product.variants.edges.map((variant: any) => ({
          id: variant.node.id,
          title: variant.node.title,
          price: variant.node.price.amount,
          compareAtPrice: variant.node.compareAtPrice?.amount,
          available: variant.node.availableForSale,
          inventoryQuantity: variant.node.quantityAvailable
        }))
      };
    } catch (error) {
      console.error('Erreur lors de la récupération du produit:', error);
      throw error;
    }
  },

  // Rechercher des produits
  async searchProducts(query: string, limit = 20): Promise<ShopifyProduct[]> {
    const searchQuery = `
      query SearchProducts($query: String!, $first: Int!) {
        products(query: $query, first: $first) {
          edges {
            node {
              id
              title
              description
              handle
              images(first: 5) {
                edges {
                  node {
                    id
                    url
                    altText
                  }
                }
              }
              variants(first: 5) {
                edges {
                  node {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    compareAtPrice {
                      amount
                      currencyCode
                    }
                    availableForSale
                    quantityAvailable
                  }
                }
              }
              tags
              productType
              vendor
              createdAt
              updatedAt
              publishedAt
              status
              totalInventory
              hasOnlyDefaultVariant
            }
          }
        }
      }
    `;

    try {
      const response = await shopifyStorefrontAPI.post('', {
        query: searchQuery,
        variables: { query, first: limit }
      });

      return response.data.data.products.edges.map((edge: any) => ({
        ...edge.node,
        images: edge.node.images.edges.map((img: any) => ({
          id: img.node.id,
          src: img.node.url,
          altText: img.node.altText
        })),
        variants: edge.node.variants.edges.map((variant: any) => ({
          id: variant.node.id,
          title: variant.node.title,
          price: variant.node.price.amount,
          compareAtPrice: variant.node.compareAtPrice?.amount,
          available: variant.node.availableForSale,
          inventoryQuantity: variant.node.quantityAvailable
        }))
      }));
    } catch (error) {
      console.error('Erreur lors de la recherche de produits:', error);
      throw error;
    }
  }
};

// Service pour les commandes
export const orderService = {
  // Récupérer les commandes d'un client
  async getCustomerOrders(customerId: string): Promise<ShopifyOrder[]> {
    try {
      const response = await shopifyAdminAPI.get(`/customers/${customerId}/orders.json`);
      return response.data.orders;
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes:', error);
      throw error;
    }
  },

  // Récupérer une commande spécifique
  async getOrder(orderId: string): Promise<ShopifyOrder> {
    try {
      const response = await shopifyAdminAPI.get(`/orders/${orderId}.json`);
      return response.data.order;
    } catch (error) {
      console.error('Erreur lors de la récupération de la commande:', error);
      throw error;
    }
  },

  // Créer une commande
  async createOrder(orderData: any): Promise<ShopifyOrder> {
    try {
      const response = await shopifyAdminAPI.post('/orders.json', {
        order: orderData
      });
      return response.data.order;
    } catch (error) {
      console.error('Erreur lors de la création de la commande:', error);
      throw error;
    }
  }
};

// Service pour les clients
export const customerService = {
  // Récupérer un client par email
  async getCustomerByEmail(email: string): Promise<ShopifyCustomer | null> {
    try {
      const response = await shopifyAdminAPI.get(`/customers/search.json?query=email:${email}`);
      return response.data.customers[0] || null;
    } catch (error) {
      console.error('Erreur lors de la récupération du client:', error);
      throw error;
    }
  },

  // Créer un nouveau client
  async createCustomer(customerData: any): Promise<ShopifyCustomer> {
    try {
      const response = await shopifyAdminAPI.post('/customers.json', {
        customer: customerData
      });
      return response.data.customer;
    } catch (error) {
      console.error('Erreur lors de la création du client:', error);
      throw error;
    }
  },

  // Mettre à jour un client
  async updateCustomer(customerId: string, customerData: any): Promise<ShopifyCustomer> {
    try {
      const response = await shopifyAdminAPI.put(`/customers/${customerId}.json`, {
        customer: customerData
      });
      return response.data.customer;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du client:', error);
      throw error;
    }
  }
};

// Service pour l'inventaire
export const inventoryService = {
  // Vérifier la disponibilité d'un produit
  async checkProductAvailability(productId: string): Promise<boolean> {
    try {
      const response = await shopifyAdminAPI.get(`/products/${productId}.json`);
      return response.data.product.totalInventory > 0;
    } catch (error) {
      console.error('Erreur lors de la vérification de disponibilité:', error);
      return false;
    }
  },

  // Mettre à jour l'inventaire
  async updateInventory(variantId: string, quantity: number): Promise<void> {
    try {
      await shopifyAdminAPI.put(`/inventory_levels/set.json`, {
        location_id: 1, // ID de l'emplacement principal
        inventory_item_id: variantId,
        available: quantity
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'inventaire:', error);
      throw error;
    }
  }
};

export default {
  productService,
  orderService,
  customerService,
  inventoryService
};
