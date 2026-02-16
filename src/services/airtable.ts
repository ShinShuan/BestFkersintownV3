// Configuration Airtable
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY || '';
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID || '';

// Tables Airtable
const TABLES = {
  CUSTOMERS: 'Customers',
  ORDERS: 'Orders',
  PRODUCTS: 'Products',
  ANALYTICS: 'Analytics',
  SUPPORT: 'Support',
};

// Types pour Airtable
export interface AirtableCustomer {
  id?: string;
  fields: {
    Email: string;
    'First Name'?: string;
    'Last Name'?: string;
    Phone?: string;
    'Total Spent'?: number;
    'Orders Count'?: number;
    'Last Order Date'?: string;
    Status?: 'active' | 'inactive' | 'vip';
    Tags?: string[];
    'Created Date'?: string;
    'Updated Date'?: string;
  };
}

export interface AirtableOrder {
  id?: string;
  fields: {
    'Order ID': string;
    'Customer Email': string;
    'Customer Name'?: string;
    'Order Date': string;
    'Order Status': 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
    'Total Amount': number;
    'Shipping Address'?: string;
    'Billing Address'?: string;
    'Payment Method'?: string;
    'Payment Status': 'pending' | 'paid' | 'failed' | 'refunded';
    'Tracking Number'?: string;
    'Items'?: string[];
    'Notes'?: string;
    'Created Date'?: string;
    'Updated Date'?: string;
  };
}

export interface AirtableProduct {
  id?: string;
  fields: {
    'Product ID': string;
    'Product Name': string;
    'Product Type'?: string;
    'Price'?: number;
    'Stock Level'?: number;
    'SKU'?: string;
    'Description'?: string;
    'Tags'?: string[];
    'Status': 'active' | 'inactive' | 'out-of-stock';
    'Created Date'?: string;
    'Updated Date'?: string;
  };
}

export interface AirtableAnalytics {
  id?: string;
  fields: {
    'Date': string;
    'Page Views'?: number;
    'Unique Visitors'?: number;
    'Orders'?: number;
    'Revenue'?: number;
    'Conversion Rate'?: number;
    'Top Products'?: string[];
    'Top Pages'?: string[];
    'Created Date'?: string;
  };
}

export interface AirtableSupport {
  id?: string;
  fields: {
    'Ticket ID': string;
    'Customer Email': string;
    'Customer Name'?: string;
    'Subject': string;
    'Message': string;
    'Status': 'open' | 'in-progress' | 'resolved' | 'closed';
    'Priority': 'low' | 'medium' | 'high' | 'urgent';
    'Category'?: string;
    'Assigned To'?: string;
    'Created Date'?: string;
    'Updated Date'?: string;
  };
}

// Service Airtable
export const airtableService = {
  // Méthodes génériques pour interagir avec Airtable
  async createRecord(tableName: string, fields: any): Promise<any> {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tableName}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fields }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Erreur lors de la création du record');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur Airtable:', error);
      throw error;
    }
  },

  async getRecords(tableName: string, filterByFormula?: string): Promise<any> {
    try {
      let url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tableName}`;
      if (filterByFormula) {
        url += `?filterByFormula=${encodeURIComponent(filterByFormula)}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Erreur lors de la récupération des records');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur Airtable:', error);
      throw error;
    }
  },

  async updateRecord(tableName: string, recordId: string, fields: any): Promise<any> {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tableName}/${recordId}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fields }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Erreur lors de la mise à jour du record');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur Airtable:', error);
      throw error;
    }
  },

  async deleteRecord(tableName: string, recordId: string): Promise<any> {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tableName}/${recordId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Erreur lors de la suppression du record');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur Airtable:', error);
      throw error;
    }
  },

  // Méthodes spécifiques pour les clients
  async createCustomer(customer: AirtableCustomer): Promise<any> {
    return await this.createRecord(TABLES.CUSTOMERS, customer.fields);
  },

  async getCustomerByEmail(email: string): Promise<any> {
    const filterByFormula = `{Email} = '${email}'`;
    const response = await this.getRecords(TABLES.CUSTOMERS, filterByFormula);
    return response.records[0] || null;
  },

  async updateCustomer(recordId: string, updates: Partial<AirtableCustomer['fields']>): Promise<any> {
    return await this.updateRecord(TABLES.CUSTOMERS, recordId, updates);
  },

  // Méthodes spécifiques pour les commandes
  async createOrder(order: AirtableOrder): Promise<any> {
    return await this.createRecord(TABLES.ORDERS, order.fields);
  },

  async getOrdersByCustomer(email: string): Promise<any> {
    const filterByFormula = `{Customer Email} = '${email}'`;
    return await this.getRecords(TABLES.ORDERS, filterByFormula);
  },

  async updateOrderStatus(recordId: string, status: AirtableOrder['fields']['Order Status']): Promise<any> {
    return await this.updateRecord(TABLES.ORDERS, recordId, { 'Order Status': status });
  },

  // Méthodes spécifiques pour les produits
  async createProduct(product: AirtableProduct): Promise<any> {
    return await this.createRecord(TABLES.PRODUCTS, product.fields);
  },

  async updateProductStock(recordId: string, stockLevel: number): Promise<any> {
    return await this.updateRecord(TABLES.PRODUCTS, recordId, { 'Stock Level': stockLevel });
  },

  // Méthodes spécifiques pour les analytics
  async createAnalyticsRecord(analytics: AirtableAnalytics): Promise<any> {
    return await this.createRecord(TABLES.ANALYTICS, analytics.fields);
  },

  async getAnalyticsByDateRange(startDate: string, endDate: string): Promise<any> {
    const filterByFormula = `AND({Date} >= '${startDate}', {Date} <= '${endDate}')`;
    return await this.getRecords(TABLES.ANALYTICS, filterByFormula);
  },

  // Méthodes spécifiques pour le support
  async createSupportTicket(support: AirtableSupport): Promise<any> {
    return await this.createRecord(TABLES.SUPPORT, support.fields);
  },

  async updateSupportTicket(recordId: string, updates: Partial<AirtableSupport['fields']>): Promise<any> {
    return await this.updateRecord(TABLES.SUPPORT, recordId, updates);
  },

  async getSupportTicketsByCustomer(email: string): Promise<any> {
    const filterByFormula = `{Customer Email} = '${email}'`;
    return await this.getRecords(TABLES.SUPPORT, filterByFormula);
  },

  async syncCustomerFromBigCommerce(bcCustomer: any): Promise<any> {
    const existingCustomer = await this.getCustomerByEmail(bcCustomer.email);

    const customerData: AirtableCustomer['fields'] = {
      Email: bcCustomer.email,
      'First Name': bcCustomer.firstName || '',
      'Last Name': bcCustomer.lastName || '',
      Phone: bcCustomer.phone || '',
      'Total Spent': parseFloat(bcCustomer.totalSpent || '0'),
      'Orders Count': bcCustomer.ordersCount || 0,
      'Last Order Date': bcCustomer.lastOrderDate || '',
      Status: 'active',
      'Created Date': new Date().toISOString(),
      'Updated Date': new Date().toISOString(),
    };

    if (existingCustomer) {
      return await this.updateCustomer(existingCustomer.id, customerData);
    } else {
      return await this.createCustomer({ fields: customerData });
    }
  },

  async syncOrderFromBigCommerce(bcOrder: any): Promise<any> {
    const orderData: AirtableOrder['fields'] = {
      'Order ID': bcOrder.id,
      'Customer Email': bcOrder.email,
      'Customer Name': `${bcOrder.customer?.firstName || ''} ${bcOrder.customer?.lastName || ''}`.trim(),
      'Order Date': bcOrder.createdAt,
      'Order Status': this.mapBigCommerceStatusToAirtable(bcOrder.fulfillmentStatus),
      'Total Amount': parseFloat(bcOrder.totalPrice || '0'),
      'Shipping Address': this.formatAddress(bcOrder.shippingAddress),
      'Billing Address': this.formatAddress(bcOrder.billingAddress),
      'Payment Method': bcOrder.paymentGatewayNames?.[0] || '',
      'Payment Status': this.mapBigCommercePaymentStatusToAirtable(bcOrder.financialStatus),
      'Tracking Number': bcOrder.fulfillments?.[0]?.trackingNumber || '',
      'Items': bcOrder.lineItems?.map((item: any) => `${item.title} (x${item.quantity})`) || [],
      'Notes': bcOrder.note || '',
      'Created Date': new Date().toISOString(),
      'Updated Date': new Date().toISOString(),
    };

    return await this.createOrder({ fields: orderData });
  },

  // Méthodes utilitaires
  mapBigCommerceStatusToAirtable(bcStatus: string): AirtableOrder['fields']['Order Status'] {
    const statusMap: Record<string, AirtableOrder['fields']['Order Status']> = {
      'fulfilled': 'shipped',
      'partial': 'shipped',
      'unfulfilled': 'confirmed',
      'cancelled': 'cancelled',
    };
    return statusMap[bcStatus] || 'pending';
  },

  mapBigCommercePaymentStatusToAirtable(bcStatus: string): AirtableOrder['fields']['Payment Status'] {
    const statusMap: Record<string, AirtableOrder['fields']['Payment Status']> = {
      'paid': 'paid',
      'pending': 'pending',
      'failed': 'failed',
      'refunded': 'refunded',
    };
    return statusMap[bcStatus] || 'pending';
  },

  formatAddress(address: any): string {
    if (!address) return '';
    return `${address.address1 || ''} ${address.address2 || ''}, ${address.city || ''} ${address.zip || ''}, ${address.country || ''}`.trim();
  },
};

export default airtableService;
