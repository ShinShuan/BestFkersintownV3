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

  // Récupérer et nettoyer les variables d'environnement
  const BC_STORE_HASH = (process.env.VITE_BIGCOMMERCE_STORE_HASH || '').trim();
  const BC_ACCESS_TOKEN = (process.env.VITE_BIGCOMMERCE_ACCESS_TOKEN || '').trim();

  // Endpoint de test pour déboguer
  if (apiPath === 'test-proxy-connection') {
    return res.status(200).json({
      status: 'Proxy is alive',
      storeHashConfigured: !!BC_STORE_HASH,
      tokenConfigured: !!BC_ACCESS_TOKEN,
      storeHashLength: BC_STORE_HASH.length,
      tokenPrefix: BC_ACCESS_TOKEN ? BC_ACCESS_TOKEN.substring(0, 4) + '...' : 'none',
      nodeVersion: process.version,
      query: req.query
    });
  }

  if (!BC_STORE_HASH || !BC_ACCESS_TOKEN) {
    console.error('[Proxy] Missing BigCommerce credentials:', { hash: !!BC_STORE_HASH, token: !!BC_ACCESS_TOKEN });
    return res.status(500).json({
      error: 'BigCommerce credentials not configured',
      message: 'Please set VITE_BIGCOMMERCE_STORE_HASH and VITE_BIGCOMMERCE_ACCESS_TOKEN in Vercel settings',
      details: { hash: !!BC_STORE_HASH, token: !!BC_ACCESS_TOKEN }
    });
  }

  // Déterminer la version de l'API et construire l'URL
  // Si le chemin contient déjà v2 ou v3, on ne le rajoute pas
  let baseUrl;
  if (apiPath.startsWith('v2/') || apiPath.startsWith('v3/')) {
    baseUrl = `https://api.bigcommerce.com/stores/${BC_STORE_HASH}/${apiPath}`;
  } else {
    // Par défaut, utiliser v3
    baseUrl = `https://api.bigcommerce.com/stores/${BC_STORE_HASH}/v3/${apiPath}`;
  }

  // Ajouter les paramètres de requête au nouvel URL
  const bigCommerceUrl = new URL(baseUrl);
  Object.keys(req.query).forEach(key => {
    if (key !== 'path') {
      bigCommerceUrl.searchParams.append(key, req.query[key]);
    }
  });

  const finalUrl = bigCommerceUrl.toString();

  try {
    console.log(`[Proxy] Forwarding ${req.method} to: ${finalUrl}`);

    const fetchOptions = {
      method: req.method,
      headers: {
        'X-Auth-Token': BC_ACCESS_TOKEN,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Vercel-Proxy-BFIT'
      }
    };

    if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const response = await fetch(finalUrl, fetchOptions);

    console.log(`[Proxy] BigCommerce responded with status: ${response.status} for ${finalUrl}`);

    const contentType = response.headers.get('content-type');
    let responseData;

    try {
      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
    } catch (e) {
      console.error('[Proxy] Error parsing BigCommerce response:', e);
      responseData = { error: 'Failed to parse BigCommerce response', details: e.message };
    }

    // Log the error body if not successful
    if (!response.ok) {
      console.error(`[Proxy] BigCommerce Error (${response.status}):`, JSON.stringify(responseData));
    }

    // Transférer le status code de BigCommerce
    res.status(response.status).json(responseData);
  } catch (error) {
    console.error('[Proxy] Critical Error encountered during fetch:', error);
    res.status(500).json({
      error: 'Failed to fetch from BigCommerce API',
      message: error.message,
      type: 'PROXY_ERROR',
      targetUrl: finalUrl
    });
  }
}
