import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PROXY_PORT || 3001;

// BigCommerce configuration
const BC_STORE_HASH = process.env.VITE_BIGCOMMERCE_STORE_HASH || 'qdy1j8i5vg';
const BC_ACCESS_TOKEN = process.env.VITE_BIGCOMMERCE_ACCESS_TOKEN || 'ehi1veygrjzpisslheidxg8slbl7vbl';
const BC_API_URL = `https://api.bigcommerce.com/stores/${BC_STORE_HASH}`;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// BigCommerce API V3 Proxy
app.all('/api/bigcommerce/v3/*', async (req, res) => {
  const path = req.path.replace('/api/bigcommerce/v3', '');
  const url = `${BC_API_URL}/v3${path}`;

  try {
    console.log(`Proxying to: ${url}`);

    const response = await axios({
      method: req.method,
      url,
      headers: {
        'X-Auth-Token': BC_ACCESS_TOKEN,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      params: req.query,
      data: req.method !== 'GET' ? req.body : undefined
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('BigCommerce API Error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || { message: error.message }
    });
  }
});

// BigCommerce API V2 Proxy
app.all('/api/bigcommerce/v2/*', async (req, res) => {
  const path = req.path.replace('/api/bigcommerce/v2', '');
  const url = `${BC_API_URL}/v2${path}`;

  try {
    console.log(`Proxying to: ${url}`);

    const response = await axios({
      method: req.method,
      url,
      headers: {
        'X-Auth-Token': BC_ACCESS_TOKEN,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      params: req.query,
      data: req.method !== 'GET' ? req.body : undefined
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('BigCommerce API Error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || { message: error.message }
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Test BigCommerce connection
app.get('/api/test-connection', async (req, res) => {
  try {
    const response = await axios.get(`${BC_API_URL}/v3/catalog/summary`, {
      headers: {
        'X-Auth-Token': BC_ACCESS_TOKEN,
        'Accept': 'application/json'
      }
    });

    res.json({
      success: true,
      message: 'Connection to BigCommerce successful',
      data: response.data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Connection to BigCommerce failed',
      error: error.response?.data || error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`
====================================
  BigCommerce Proxy Server
====================================
  Port: ${PORT}
  Store Hash: ${BC_STORE_HASH}
  API URL: ${BC_API_URL}
====================================

Endpoints:
  - GET  /api/health          - Health check
  - GET  /api/test-connection - Test BigCommerce connection
  - ANY  /api/bigcommerce/v3/* - Proxy to BigCommerce V3 API
  - ANY  /api/bigcommerce/v2/* - Proxy to BigCommerce V2 API
  `);
});
