import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, XCircle, Info, Loader } from 'lucide-react';

const Container = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
`;

const Header = styled.h2`
  color: var(--gray-900);
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
`;

const StatusItem = styled.div<{ $status: 'success' | 'error' | 'warning' | 'info' }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: var(--radius-md);
  background: ${props => {
    switch (props.$status) {
      case 'success': return 'var(--green-50)';
      case 'error': return 'var(--red-50)';
      case 'warning': return 'var(--yellow-50)';
      case 'info': return 'var(--blue-50)';
    }
  }};
  border: 1px solid ${props => {
    switch (props.$status) {
      case 'success': return 'var(--green-200)';
      case 'error': return 'var(--red-200)';
      case 'warning': return 'var(--yellow-200)';
      case 'info': return 'var(--blue-200)';
    }
  }};
`;

const StatusText = styled.div`
  flex: 1;
  font-weight: var(--font-medium);
`;

const Button = styled(motion.button)`
  background: var(--primary-600);
  color: var(--white);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  margin: 0.5rem;

  &:hover {
    background: var(--primary-700);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

interface DiagnosticResult {
  name: string;
  status: 'success' | 'error' | 'warning' | 'info';
  message: string;
  details?: string;
}

const Diagnostic: React.FC = () => {
  const [results, setResults] = useState<DiagnosticResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runDiagnostic = async () => {
    setIsRunning(true);
    setResults([]);

    const newResults: DiagnosticResult[] = [];

    // Test 1: Vérifier l'environnement
    try {
      newResults.push({
        name: 'Environnement',
        status: 'info',
        message: 'Vérification de l\'environnement...'
      });

      // Vérifier les variables d'environnement
      const envCheck = {
        storeUrl: import.meta.env.VITE_SHOPIFY_STORE_URL || 'jwbq9j-z9.myshopify.com',
        storefrontToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'afff8fcca0a9f7cb503473ac4b99bcdb',
        adminToken: import.meta.env.VITE_SHOPIFY_ADMIN_ACCESS_TOKEN || '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'
      };

      if (envCheck.storeUrl && envCheck.storefrontToken) {
        newResults.push({
          name: 'Configuration Shopify',
          status: 'success',
          message: 'Configuration Shopify détectée',
          details: `Store: ${envCheck.storeUrl}`
        });
      } else {
        newResults.push({
          name: 'Configuration Shopify',
          status: 'warning',
          message: 'Configuration Shopify manquante',
          details: 'Utilisation des valeurs par défaut'
        });
      }
    } catch (error) {
      newResults.push({
        name: 'Environnement',
        status: 'error',
        message: 'Erreur lors de la vérification de l\'environnement',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }

    // Test 2: Vérifier l'API Shopify
    try {
      newResults.push({
        name: 'API Shopify',
        status: 'info',
        message: 'Test de connexion à l\'API Shopify...'
      });

      const response = await fetch('https://jwbq9j-z9.myshopify.com/api/2024-01/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': 'afff8fcca0a9f7cb503473ac4b99bcdb'
        },
        body: JSON.stringify({
          query: `
            query {
              shop {
                name
                primaryDomain {
                  url
                }
              }
            }
          `
        })
      });

      const data = await response.json();

      if (data.data?.shop) {
        newResults.push({
          name: 'Connexion API',
          status: 'success',
          message: 'Connexion à l\'API Shopify réussie',
          details: `Boutique: ${data.data.shop.name}`
        });
      } else if (data.errors) {
        newResults.push({
          name: 'Connexion API',
          status: 'error',
          message: 'Erreur de connexion à l\'API Shopify',
          details: data.errors[0]?.message || 'Erreur inconnue'
        });
      } else {
        newResults.push({
          name: 'Connexion API',
          status: 'warning',
          message: 'Réponse inattendue de l\'API Shopify',
          details: JSON.stringify(data)
        });
      }
    } catch (error) {
      newResults.push({
        name: 'Connexion API',
        status: 'error',
        message: 'Erreur lors de la connexion à l\'API Shopify',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }

    // Test 3: Vérifier les services
    try {
      newResults.push({
        name: 'Services',
        status: 'info',
        message: 'Vérification des services...'
      });

      // Vérifier si les services sont importables
      const services = [
        { name: 'checkoutService', path: '../services/shopify-checkout' },
        { name: 'favoritesService', path: '../services/favorites' },
        { name: 'authService', path: '../services/auth' }
      ];

      for (const service of services) {
        try {
          // Test d'import dynamique
          await import(service.path);
          newResults.push({
            name: `Service ${service.name}`,
            status: 'success',
            message: `Service ${service.name} disponible`
          });
        } catch (error) {
          newResults.push({
            name: `Service ${service.name}`,
            status: 'error',
            message: `Service ${service.name} non disponible`,
            details: error instanceof Error ? error.message : 'Erreur d\'import'
          });
        }
      }
    } catch (error) {
      newResults.push({
        name: 'Services',
        status: 'error',
        message: 'Erreur lors de la vérification des services',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }

    // Test 4: Vérifier le navigateur
    try {
      newResults.push({
        name: 'Navigateur',
        status: 'info',
        message: 'Vérification du navigateur...'
      });

      const browserChecks = [
        { name: 'JavaScript', check: () => typeof window !== 'undefined' },
        { name: 'Fetch API', check: () => typeof fetch !== 'undefined' },
        { name: 'LocalStorage', check: () => typeof localStorage !== 'undefined' },
        { name: 'Console', check: () => typeof console !== 'undefined' }
      ];

      for (const check of browserChecks) {
        if (check.check()) {
          newResults.push({
            name: `Navigateur - ${check.name}`,
            status: 'success',
            message: `${check.name} disponible`
          });
        } else {
          newResults.push({
            name: `Navigateur - ${check.name}`,
            status: 'error',
            message: `${check.name} non disponible`
          });
        }
      }
    } catch (error) {
      newResults.push({
        name: 'Navigateur',
        status: 'error',
        message: 'Erreur lors de la vérification du navigateur',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }

    setResults(newResults);
    setIsRunning(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle size={20} color="var(--green-600)" />;
      case 'error': return <XCircle size={20} color="var(--red-600)" />;
      case 'warning': return <AlertTriangle size={20} color="var(--yellow-600)" />;
      case 'info': return <Info size={20} color="var(--blue-600)" />;
      default: return <Info size={20} />;
    }
  };

  const getSummary = () => {
    const success = results.filter(r => r.status === 'success').length;
    const error = results.filter(r => r.status === 'error').length;
    const warning = results.filter(r => r.status === 'warning').length;
    const total = results.length;

    return { success, error, warning, total };
  };

  const summary = getSummary();

  return (
    <Container>
      <Header>
        <AlertTriangle size={24} />
        Diagnostic de l'Application
      </Header>

      <Section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>Tests de Diagnostic</h3>
          <Button
            onClick={runDiagnostic}
            disabled={isRunning}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRunning ? <Loader size={16} className="animate-spin" /> : <Info size={16} />}
            {isRunning ? 'Diagnostic en cours...' : 'Lancer le diagnostic'}
          </Button>
        </div>

        {summary.total > 0 && (
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginBottom: '1rem',
            padding: '1rem',
            backgroundColor: 'var(--gray-50)',
            borderRadius: 'var(--radius-md)'
          }}>
            <div>✅ {summary.success} succès</div>
            <div>⚠️ {summary.warning} avertissements</div>
            <div>❌ {summary.error} erreurs</div>
            <div>📊 {summary.total} total</div>
          </div>
        )}
      </Section>

      {results.length > 0 && (
        <Section>
          <h3>Résultats du Diagnostic</h3>
          {results.map((result, index) => (
            <StatusItem key={index} $status={result.status}>
              {getStatusIcon(result.status)}
              <StatusText>
                <div style={{ fontWeight: 'bold' }}>{result.name}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                  {result.message}
                </div>
                {result.details && (
                  <div style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--gray-500)', 
                    marginTop: '0.25rem',
                    fontFamily: 'monospace',
                    backgroundColor: 'var(--gray-100)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    {result.details}
                  </div>
                )}
              </StatusText>
            </StatusItem>
          ))}
        </Section>
      )}

      <Section>
        <h3>Solutions Recommandées</h3>
        <div style={{ paddingLeft: '1rem' }}>
          <ul>
            <li><strong>Si erreurs API :</strong> Vérifiez vos tokens Shopify dans <code>environment.config.js</code></li>
            <li><strong>Si erreurs services :</strong> Redémarrez l'application avec <code>npm run dev</code></li>
            <li><strong>Si erreurs navigateur :</strong> Essayez un autre navigateur ou mode privé</li>
            <li><strong>Si tout échoue :</strong> Utilisez <code>/test/simple</code> pour un test basique</li>
          </ul>
        </div>
      </Section>
    </Container>
  );
};

export default Diagnostic;
