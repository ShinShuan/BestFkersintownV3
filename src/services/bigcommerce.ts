import axios, { AxiosInstance } from 'axios';
import { ENV_CONFIG } from '../../environment.config.js';

// Configuration BigCommerce
const STORE_HASH = ENV_CONFIG.BIGCOMMERCE.STORE_HASH;
const STOREFRONT_URL = ENV_CONFIG.BIGCOMMERCE.STOREFRONT_URL;

// Proxy URL pour eviter les problemes CORS
// En production sur Vercel, utilise le meme domaine (pas besoin de proxy externe)
// En developpement local, utilise le serveur proxy sur le port 3001
const isProduction = import.meta.env.PROD || import.meta.env.VITE_VERCEL_ENV === 'production' || import.meta.env.VITE_VERCEL_ENV === 'preview';
const PROXY_URL = isProduction
  ? '/' // Utiliser le chemin relatif à la racine en production
  : (import.meta.env.VITE_PROXY_URL || 'http://localhost:3001/');

// S'assurer que PROXY_URL se termine par / si ce n'est pas le cas pour une URL complète, 
// mais ici on veut qu'il soit soit '/' soit 'http://.../'
const cleanProxyUrl = PROXY_URL.endsWith('/') ? PROXY_URL.slice(0, -1) : PROXY_URL;

// Instance Axios pour l'API BigCommerce V3 (via proxy)
export const bigcommerceAPI: AxiosInstance = axios.create({
  baseURL: `${cleanProxyUrl}/api/bigcommerce/v3`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Instance pour l'API V2 (certaines fonctionnalités) (via proxy)
export const bigcommerceAPIv2: AxiosInstance = axios.create({
  baseURL: `${cleanProxyUrl}/api/bigcommerce/v2`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Instance pour tester directement (serveur uniquement)
export const bigcommerceDirectAPI: AxiosInstance = axios.create({
  baseURL: `https://api.bigcommerce.com/stores/${STORE_HASH}/v3`,
  headers: {
    'X-Auth-Token': ENV_CONFIG.BIGCOMMERCE.ACCESS_TOKEN,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Types pour les produits BigCommerce
export interface BigCommerceProduct {
  id: number;
  name: string;
  type: 'physical' | 'digital';
  sku: string;
  description: string;
  weight: number;
  width: number;
  depth: number;
  height: number;
  price: number;
  cost_price: number;
  retail_price: number;
  sale_price: number;
  map_price: number;
  tax_class_id: number;
  product_tax_code: string;
  calculated_price: number;
  categories: number[];
  brand_id: number;
  option_set_id: number | null;
  option_set_display: string;
  inventory_level: number;
  inventory_warning_level: number;
  inventory_tracking: 'none' | 'product' | 'variant';
  reviews_rating_sum: number;
  reviews_count: number;
  total_sold: number;
  custom_url: {
    url: string;
    is_customized: boolean;
  };
  base_variant_id: number | null;
  images: BigCommerceImage[];
  variants: BigCommerceVariant[];
  options: BigCommerceOption[];
  modifiers: BigCommerceModifier[];
  custom_fields: BigCommerceCustomField[];
  is_visible: boolean;
  is_featured: boolean;
  is_free_shipping: boolean;
  is_condition_shown: boolean;
  condition: 'New' | 'Used' | 'Refurbished';
  is_preorder_only: boolean;
  preorder_release_date: string | null;
  preorder_message: string;
  date_created: string;
  date_modified: string;
  availability: 'available' | 'disabled' | 'preorder';
  availability_description: string;
}

export interface BigCommerceImage {
  id: number;
  product_id: number;
  is_thumbnail: boolean;
  sort_order: number;
  description: string;
  image_file: string;
  url_zoom: string;
  url_standard: string;
  url_thumbnail: string;
  url_tiny: string;
  date_modified: string;
}

export interface BigCommerceVariant {
  id: number;
  product_id: number;
  sku: string;
  sku_id: number | null;
  price: number | null;
  calculated_price: number;
  sale_price: number | null;
  retail_price: number | null;
  map_price: number | null;
  weight: number | null;
  calculated_weight: number;
  width: number | null;
  height: number | null;
  depth: number | null;
  is_free_shipping: boolean;
  fixed_cost_shipping_price: number | null;
  purchasing_disabled: boolean;
  purchasing_disabled_message: string;
  image_url: string;
  cost_price: number | null;
  upc: string;
  mpn: string;
  gtin: string;
  inventory_level: number;
  inventory_warning_level: number;
  bin_picking_number: string;
  option_values: {
    id: number;
    label: string;
    option_id: number;
    option_display_name: string;
  }[];
}

export interface BigCommerceOption {
  id: number;
  product_id: number;
  display_name: string;
  type: 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
  config: any;
  sort_order: number;
  option_values: {
    id: number;
    label: string;
    sort_order: number;
    value_data: any;
    is_default: boolean;
  }[];
}

export interface BigCommerceModifier {
  id: number;
  product_id: number;
  name: string;
  display_name: string;
  type: string;
  required: boolean;
  sort_order: number;
  config: any;
  option_values: any[];
}

export interface BigCommerceCustomField {
  id: number;
  name: string;
  value: string;
}

export interface BigCommerceCategory {
  id: number;
  parent_id: number;
  name: string;
  description: string;
  views: number;
  sort_order: number;
  page_title: string;
  meta_keywords: string[];
  meta_description: string;
  layout_file: string;
  image_url: string;
  is_visible: boolean;
  search_keywords: string;
  default_product_sort: string;
  custom_url: {
    url: string;
    is_customized: boolean;
  };
}

export interface BigCommerceCustomer {
  id: number;
  company: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_created: string;
  date_modified: string;
  store_credit: number;
  registration_ip_address: string;
  customer_group_id: number;
  notes: string;
  tax_exempt_category: string;
  accepts_product_review_abandoned_cart_emails: boolean;
  addresses: BigCommerceAddress[];
}

export interface BigCommerceAddress {
  id: number;
  customer_id: number;
  first_name: string;
  last_name: string;
  company: string;
  street_1: string;
  street_2: string;
  city: string;
  state_or_province: string;
  postal_code: string;
  country: string;
  country_code: string;
  phone: string;
  address_type: 'residential' | 'commercial';
}

export interface BigCommerceOrder {
  id: number;
  customer_id: number;
  date_created: string;
  date_modified: string;
  date_shipped: string;
  status_id: number;
  status: string;
  subtotal_ex_tax: string;
  subtotal_inc_tax: string;
  subtotal_tax: string;
  base_shipping_cost: string;
  shipping_cost_ex_tax: string;
  shipping_cost_inc_tax: string;
  shipping_cost_tax: string;
  shipping_cost_tax_class_id: number;
  base_handling_cost: string;
  handling_cost_ex_tax: string;
  handling_cost_inc_tax: string;
  handling_cost_tax: string;
  handling_cost_tax_class_id: number;
  base_wrapping_cost: string;
  wrapping_cost_ex_tax: string;
  wrapping_cost_inc_tax: string;
  wrapping_cost_tax: string;
  wrapping_cost_tax_class_id: number;
  total_ex_tax: string;
  total_inc_tax: string;
  total_tax: string;
  items_total: number;
  items_shipped: number;
  payment_method: string;
  payment_provider_id: string;
  payment_status: string;
  refunded_amount: string;
  order_is_digital: boolean;
  store_credit_amount: string;
  gift_certificate_amount: string;
  ip_address: string;
  ip_address_v6: string;
  geoip_country: string;
  geoip_country_iso2: string;
  currency_id: number;
  currency_code: string;
  currency_exchange_rate: string;
  default_currency_id: number;
  default_currency_code: string;
  staff_notes: string;
  customer_message: string;
  discount_amount: string;
  coupon_discount: string;
  shipping_address_count: number;
  is_deleted: boolean;
  ebay_order_id: string;
  cart_id: string;
  billing_address: BigCommerceAddress;
  is_email_opt_in: boolean;
  credit_card_type: string | null;
  order_source: string;
  channel_id: number;
  external_source: string | null;
  products: {
    url: string;
    resource: string;
  };
  shipping_addresses: {
    url: string;
    resource: string;
  };
  coupons: {
    url: string;
    resource: string;
  };
}

// Interface normalisée pour compatibilité avec le reste de l'application
export interface NormalizedProduct {
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
    price: number;
    compareAtPrice: number | null;
    available: boolean;
    inventoryQuantity: number;
    options: Array<{
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

// Fonction pour normaliser un produit BigCommerce vers le format standard de l'application
function normalizeProduct(product: BigCommerceProduct): NormalizedProduct {
  return {
    id: product.id.toString(),
    title: product.name,
    description: product.description || '',
    handle: product.custom_url?.url?.replace(/^\/|\/$/g, '') || product.name.toLowerCase().replace(/\s+/g, '-'),
    images: (product.images || []).map(img => ({
      id: img.id.toString(),
      src: img.url_standard || img.url_zoom || img.image_file,
      altText: img.description || product.name
    })),
    variants: (product.variants || []).map(variant => ({
      id: variant.id.toString(),
      title: variant.option_values?.map(ov => ov.label).join(' / ') || 'Default',
      price: parseFloat((variant.calculated_price || variant.price || product.price).toString()),
      compareAtPrice: variant.retail_price ? parseFloat(variant.retail_price.toString()) : null,
      available: !variant.purchasing_disabled && variant.inventory_level > 0,
      inventoryQuantity: variant.inventory_level,
      options: (variant.option_values || []).map(ov => ({
        name: ov.option_display_name,
        value: ov.label
      }))
    })),
    tags: product.custom_fields?.filter(cf => cf.name === 'tag').map(cf => cf.value) || [],
    productType: product.categories?.[0]?.toString() || '',
    vendor: product.brand_id?.toString() || '',
    createdAt: product.date_created,
    updatedAt: product.date_modified,
    publishedAt: product.date_created,
    status: product.is_visible ? 'active' : 'draft',
    totalInventory: product.inventory_level,
    hasOnlyDefaultVariant: !product.variants || product.variants.length <= 1,
    options: (product.options || []).map(opt => ({
      id: opt.id.toString(),
      name: opt.display_name,
      values: opt.option_values?.map(ov => ov.label) || []
    }))
  };
}

// Service pour les produits
export const productService = {
  // Récupérer tous les produits
  async getAllProducts(limit: number = 50, page: number = 1): Promise<{
    products: NormalizedProduct[];
    hasNextPage: boolean;
    totalPages: number;
    totalProducts: number;
  }> {
    try {
      console.log('Fetching BigCommerce products...');

      const response = await bigcommerceAPI.get('/catalog/products', {
        params: {
          limit,
          page,
          include: 'images,variants,options,modifiers,custom_fields',
          is_visible: true
        }
      });

      console.log('BigCommerce API Response:', response.data);

      const products = response.data.data.map(normalizeProduct);
      const pagination = response.data.meta?.pagination || {};

      return {
        products,
        hasNextPage: pagination.current_page < pagination.total_pages,
        totalPages: pagination.total_pages || 1,
        totalProducts: pagination.total || products.length
      };
    } catch (error: any) {
      console.error('Error fetching BigCommerce products:', error.response?.data || error.message);
      throw error;
    }
  },

  // Récupérer un produit par son ID
  async getProductById(productId: string): Promise<NormalizedProduct> {
    try {
      console.log('Fetching BigCommerce product by ID:', productId);

      const response = await bigcommerceAPI.get(`/catalog/products/${productId}`, {
        params: {
          include: 'images,variants,options,modifiers,custom_fields'
        }
      });

      return normalizeProduct(response.data.data);
    } catch (error: any) {
      console.error('Error fetching BigCommerce product:', error.response?.data || error.message);
      throw error;
    }
  },

  // Rechercher des produits
  async searchProducts(query: string, limit: number = 20): Promise<NormalizedProduct[]> {
    try {
      const response = await bigcommerceAPI.get('/catalog/products', {
        params: {
          limit,
          'name:like': query,
          include: 'images,variants,options',
          is_visible: true
        }
      });

      return response.data.data.map(normalizeProduct);
    } catch (error: any) {
      console.error('Error searching BigCommerce products:', error.response?.data || error.message);
      throw error;
    }
  },

  // Récupérer les produits par catégorie
  async getProductsByCategory(categoryId: number, limit: number = 50): Promise<NormalizedProduct[]> {
    try {
      const response = await bigcommerceAPI.get('/catalog/products', {
        params: {
          limit,
          'categories:in': categoryId,
          include: 'images,variants,options',
          is_visible: true
        }
      });

      return response.data.data.map(normalizeProduct);
    } catch (error: any) {
      console.error('Error fetching products by category:', error.response?.data || error.message);
      throw error;
    }
  }
};

// Service pour les catégories
export const categoryService = {
  // Récupérer toutes les catégories
  async getAllCategories(): Promise<BigCommerceCategory[]> {
    try {
      const response = await bigcommerceAPI.get('/catalog/categories', {
        params: {
          limit: 250,
          is_visible: true
        }
      });
      return response.data.data;
    } catch (error: any) {
      console.error('Error fetching categories:', error.response?.data || error.message);
      throw error;
    }
  },

  // Récupérer une catégorie par ID
  async getCategoryById(categoryId: number): Promise<BigCommerceCategory> {
    try {
      const response = await bigcommerceAPI.get(`/catalog/categories/${categoryId}`);
      return response.data.data;
    } catch (error: any) {
      console.error('Error fetching category:', error.response?.data || error.message);
      throw error;
    }
  }
};

// Service pour les clients
export const customerService = {
  // Récupérer un client par email
  async getCustomerByEmail(email: string): Promise<BigCommerceCustomer | null> {
    try {
      const response = await bigcommerceAPI.get('/customers', {
        params: {
          'email:in': email
        }
      });
      return response.data.data[0] || null;
    } catch (error: any) {
      console.error('Error fetching customer:', error.response?.data || error.message);
      throw error;
    }
  },

  // Créer un nouveau client
  async createCustomer(customerData: {
    email: string;
    first_name: string;
    last_name: string;
    phone?: string;
    company?: string;
  }): Promise<BigCommerceCustomer> {
    try {
      const response = await bigcommerceAPI.post('/customers', [customerData]);
      return response.data.data[0];
    } catch (error: any) {
      console.error('Error creating customer:', error.response?.data || error.message);
      throw error;
    }
  },

  // Mettre à jour un client
  async updateCustomer(customerId: number, customerData: Partial<BigCommerceCustomer>): Promise<BigCommerceCustomer> {
    try {
      const response = await bigcommerceAPI.put('/customers', [{
        id: customerId,
        ...customerData
      }]);
      return response.data.data[0];
    } catch (error: any) {
      console.error('Error updating customer:', error.response?.data || error.message);
      throw error;
    }
  }
};

// Service pour les commandes
export const orderService = {
  // Récupérer les commandes d'un client
  async getCustomerOrders(customerId: number): Promise<BigCommerceOrder[]> {
    try {
      const response = await bigcommerceAPIv2.get('/orders', {
        params: {
          customer_id: customerId
        }
      });
      return response.data;
    } catch (error: any) {
      console.error('Error fetching customer orders:', error.response?.data || error.message);
      throw error;
    }
  },

  // Récupérer une commande par ID
  async getOrderById(orderId: number): Promise<BigCommerceOrder> {
    try {
      const response = await bigcommerceAPIv2.get(`/orders/${orderId}`);
      return response.data;
    } catch (error: any) {
      console.error('Error fetching order:', error.response?.data || error.message);
      throw error;
    }
  }
};

// Service pour l'inventaire
export const inventoryService = {
  // Vérifier la disponibilité d'un produit
  async checkProductAvailability(productId: string): Promise<boolean> {
    try {
      const response = await bigcommerceAPI.get(`/catalog/products/${productId}`, {
        params: { include: 'variants' }
      });
      const product = response.data.data;
      return product.inventory_level > 0 || product.variants?.some((v: BigCommerceVariant) => v.inventory_level > 0);
    } catch (error) {
      console.error('Error checking product availability:', error);
      return false;
    }
  },

  // Mettre à jour l'inventaire d'un variant
  async updateVariantInventory(productId: number, variantId: number, quantity: number): Promise<void> {
    try {
      await bigcommerceAPI.put(`/catalog/products/${productId}/variants/${variantId}`, {
        inventory_level: quantity
      });
    } catch (error: any) {
      console.error('Error updating inventory:', error.response?.data || error.message);
      throw error;
    }
  }
};

// Service pour le panier (Cart API)
export const cartService = {
  // Créer un nouveau panier
  async createCart(lineItems: { productId: number; variantId?: number; quantity: number }[]): Promise<any> {
    try {
      const response = await bigcommerceAPI.post('/carts', {
        line_items: lineItems.map(item => ({
          product_id: item.productId,
          variant_id: item.variantId,
          quantity: item.quantity
        }))
      });
      return response.data.data;
    } catch (error: any) {
      console.error('Error creating cart:', error.response?.data || error.message);
      throw error;
    }
  },

  // Ajouter un article au panier
  async addToCart(cartId: string, productId: number, variantId: number | undefined, quantity: number): Promise<any> {
    try {
      const response = await bigcommerceAPI.post(`/carts/${cartId}/items`, {
        line_items: [{
          product_id: productId,
          variant_id: variantId,
          quantity
        }]
      });
      return response.data.data;
    } catch (error: any) {
      console.error('Error adding to cart:', error.response?.data || error.message);
      throw error;
    }
  },

  // Récupérer un panier
  async getCart(cartId: string): Promise<any> {
    try {
      const response = await bigcommerceAPI.get(`/carts/${cartId}`, {
        params: { include: 'line_items.physical_items.options,line_items.digital_items.options' }
      });
      return response.data.data;
    } catch (error: any) {
      console.error('Error fetching cart:', error.response?.data || error.message);
      throw error;
    }
  },

  // Mettre à jour la quantité d'un article
  async updateCartItem(cartId: string, itemId: string, quantity: number): Promise<any> {
    try {
      const response = await bigcommerceAPI.put(`/carts/${cartId}/items/${itemId}`, {
        line_item: { quantity }
      });
      return response.data.data;
    } catch (error: any) {
      console.error('Error updating cart item:', error.response?.data || error.message);
      throw error;
    }
  },

  // Supprimer un article du panier
  async removeFromCart(cartId: string, itemId: string): Promise<any> {
    try {
      const response = await bigcommerceAPI.delete(`/carts/${cartId}/items/${itemId}`);
      return response.data.data;
    } catch (error: any) {
      console.error('Error removing from cart:', error.response?.data || error.message);
      throw error;
    }
  },

  // Supprimer le panier
  async deleteCart(cartId: string): Promise<void> {
    try {
      await bigcommerceAPI.delete(`/carts/${cartId}`);
    } catch (error: any) {
      console.error('Error deleting cart:', error.response?.data || error.message);
      throw error;
    }
  },

  // Créer une URL de checkout
  async createCheckoutUrl(cartId: string): Promise<string> {
    try {
      const response = await bigcommerceAPI.post(`/carts/${cartId}/redirect_urls`);
      return response.data.data.checkout_url;
    } catch (error: any) {
      console.error('Error creating checkout URL:', error.response?.data || error.message);
      throw error;
    }
  }
};

// Export par défaut
export default {
  productService,
  categoryService,
  customerService,
  orderService,
  inventoryService,
  cartService,
  bigcommerceAPI,
  bigcommerceAPIv2
};
