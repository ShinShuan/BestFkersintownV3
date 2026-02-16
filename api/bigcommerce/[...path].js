// Vercel Serverless Function - Proxy BigCommerce API
// Ce fichier gère les appels API BigCommerce en contournant CORS

export default async function handler(req, res) {
  // Configuration CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Auth-Token');

  // Gérer les requêtes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { path } = req.query;
  const apiPath = Array.isArray(path) ? path.join('/') : path;

  // Récupérer les variables d'environnement
  const BC_STORE_HASH = process.env.VITE_BIGCOMMERCE_STORE_HASH;
  const BC_ACCESS_TOKEN = process.env.VITE_BIGCOMMERCE_ACCESS_TOKEN;

  if (!BC_STORE_HASH || !BC_ACCESS_TOKEN) {
    return res.status(500).json({
      error: 'BigCommerce credentials not configured',
      message: 'Please set VITE_BIGCOMMERCE_STORE_HASH and VITE_BIGCOMMERCE_ACCESS_TOKEN environment variables'
    });
  }

  const bigCommerceUrl = `https://api.bigcommerce.com/stores/${BC_STORE_HASH}/v3/${apiPath}`;

  try {
    console.log(`Forwarding ${req.method} request to BigCommerce: ${bigCommerceUrl}`);

    const fetchOptions = {
      method: req.method,
      headers: {
        'X-Auth-Token': BC_ACCESS_TOKEN,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const response = await fetch(bigCommerceUrl, fetchOptions);

    // Log non-200 responses
    if (!response.ok) {
      console.error(`BigCommerce API returned status ${response.status} for ${apiPath}`);
    }

    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    // Transférer le status code de BigCommerce
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({
      error: 'Failed to fetch from BigCommerce API',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
