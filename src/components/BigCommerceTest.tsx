import React, { useState, useEffect } from 'react';
import { productService, categoryService, bigcommerceAPI } from '../services/bigcommerce';

interface TestResult {
  name: string;
  status: 'pending' | 'success' | 'error';
  message: string;
  data?: any;
}

const BigCommerceTest: React.FC = () => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = async () => {
    setIsRunning(true);
    setResults([]);

    const tests: TestResult[] = [];

    // Test 1: Connexion API de base
    tests.push({ name: 'Connexion API BigCommerce', status: 'pending', message: 'En cours...' });
    setResults([...tests]);

    try {
      const response = await bigcommerceAPI.get('/catalog/summary');
      tests[0] = {
        name: 'Connexion API BigCommerce',
        status: 'success',
        message: 'Connexion reussie!',
        data: response.data.data
      };
    } catch (error: any) {
      tests[0] = {
        name: 'Connexion API BigCommerce',
        status: 'error',
        message: error.response?.data?.title || error.message
      };
    }
    setResults([...tests]);

    // Test 2: Recuperation des produits
    tests.push({ name: 'Recuperation des produits', status: 'pending', message: 'En cours...' });
    setResults([...tests]);

    try {
      const { products, totalProducts } = await productService.getAllProducts(10);
      tests[1] = {
        name: 'Recuperation des produits',
        status: 'success',
        message: `${totalProducts} produits trouves`,
        data: products.slice(0, 3)
      };
    } catch (error: any) {
      tests[1] = {
        name: 'Recuperation des produits',
        status: 'error',
        message: error.response?.data?.title || error.message
      };
    }
    setResults([...tests]);

    // Test 3: Recuperation des categories
    tests.push({ name: 'Recuperation des categories', status: 'pending', message: 'En cours...' });
    setResults([...tests]);

    try {
      const categories = await categoryService.getAllCategories();
      tests[2] = {
        name: 'Recuperation des categories',
        status: 'success',
        message: `${categories.length} categories trouvees`,
        data: categories.slice(0, 3)
      };
    } catch (error: any) {
      tests[2] = {
        name: 'Recuperation des categories',
        status: 'error',
        message: error.response?.data?.title || error.message
      };
    }
    setResults([...tests]);

    // Test 4: Information du store
    tests.push({ name: 'Information du store', status: 'pending', message: 'En cours...' });
    setResults([...tests]);

    try {
      const response = await bigcommerceAPI.get('/store');
      tests[3] = {
        name: 'Information du store',
        status: 'error',
        message: 'Endpoint non disponible (normal)',
        data: null
      };
    } catch (error: any) {
      // Note: /store endpoint might require different permissions
      tests[3] = {
        name: 'Information du store',
        status: error.response?.status === 404 ? 'success' : 'error',
        message: error.response?.status === 404 ? 'Endpoint non configure (normal pour API V3)' : error.message
      };
    }
    setResults([...tests]);

    setIsRunning(false);
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Test de connexion BigCommerce</h1>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={runTests}
          disabled={isRunning}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: isRunning ? 'not-allowed' : 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          {isRunning ? 'Tests en cours...' : 'Relancer les tests'}
        </button>
      </div>

      <div>
        {results.map((result, index) => (
          <div
            key={index}
            style={{
              padding: '15px',
              marginBottom: '10px',
              borderRadius: '5px',
              backgroundColor: result.status === 'success' ? '#e8f5e9' :
                             result.status === 'error' ? '#ffebee' : '#fff3e0',
              border: `1px solid ${result.status === 'success' ? '#4caf50' :
                                   result.status === 'error' ? '#f44336' : '#ff9800'}`
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <span style={{ marginRight: '10px', fontSize: '20px' }}>
                {result.status === 'success' ? '✓' :
                 result.status === 'error' ? '✗' : '⏳'}
              </span>
              <strong>{result.name}</strong>
            </div>
            <div style={{ color: '#666', marginLeft: '30px' }}>
              {result.message}
            </div>
            {result.data && (
              <details style={{ marginLeft: '30px', marginTop: '10px' }}>
                <summary style={{ cursor: 'pointer', color: '#2196f3' }}>
                  Voir les donnees
                </summary>
                <pre style={{
                  backgroundColor: '#f5f5f5',
                  padding: '10px',
                  borderRadius: '3px',
                  overflow: 'auto',
                  fontSize: '12px'
                }}>
                  {JSON.stringify(result.data, null, 2)}
                </pre>
              </details>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '5px' }}>
        <h3>Configuration actuelle</h3>
        <p><strong>Store Hash:</strong> {import.meta.env.VITE_BIGCOMMERCE_STORE_HASH || 'Non configure'}</p>
        <p><strong>API URL:</strong> {import.meta.env.VITE_BIGCOMMERCE_API_URL || 'Non configure'}</p>
        <p><strong>Token:</strong> {import.meta.env.VITE_BIGCOMMERCE_ACCESS_TOKEN ? '******' + import.meta.env.VITE_BIGCOMMERCE_ACCESS_TOKEN.slice(-4) : 'Non configure'}</p>
      </div>
    </div>
  );
};

export default BigCommerceTest;
