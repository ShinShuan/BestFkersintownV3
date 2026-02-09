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
    const response = await fetch(bigCommerceUrl, {
      method: req.method,
      headers: {
        'X-Auth-Token': BC_ACCESS_TOKEN,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined
    });

    const data = await response.json();

    // Transférer le status code de BigCommerce
    res.status(response.status).json(data);
  } catch (error) {
    console.error('BigCommerce API Error:', error);
    res.status(500).json({
      error: 'Failed to fetch from BigCommerce API',
      message: error.message
    });
  }
}
