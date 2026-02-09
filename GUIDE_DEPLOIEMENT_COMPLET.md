# Guide Complet de Deploiement et Configuration - BFIT

## Table des Matieres
1. [Deploiement de l'Application](#1-deploiement-de-lapplication)
2. [Configuration BigCommerce](#2-configuration-bigcommerce)
3. [Systeme de Vote/Participer](#3-systeme-de-voteparticiper)
4. [Interface Admin](#4-interface-admin)
5. [Transporteurs](#5-transporteurs)
6. [Video](#6-video)
7. [Emailing (Klaviyo)](#7-emailing-klaviyo)
8. [Campagnes Publicitaires](#8-campagnes-publicitaires)
9. [Communaute](#9-communaute)
10. [Pages Legales](#10-pages-legales)
11. [Photos Produits](#11-photos-produits)

---

## 1. Deploiement de l'Application

### Option A: Vercel (Recommande - Gratuit)

1. **Creer un compte Vercel**: https://vercel.com/signup

2. **Connecter votre repo Git** (GitHub, GitLab, ou Bitbucket)
   ```bash
   # Si pas encore sur Git
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <votre-repo-url>
   git push -u origin main
   ```

3. **Importer le projet sur Vercel**:
   - Cliquer "New Project"
   - Selectionner votre repository
   - Configurer les variables d'environnement:
     ```
     VITE_BIGCOMMERCE_STORE_HASH=qdy1j8i5vg
     VITE_BIGCOMMERCE_CLIENT_ID=s7rw6slm5do6a9dyd7a1px12ln9wcyl
     VITE_BIGCOMMERCE_ACCESS_TOKEN=ehi1veygrjzpisslheidxg8slbl7vbl
     VITE_BIGCOMMERCE_API_URL=https://api.bigcommerce.com/stores/qdy1j8i5vg/v3
     VITE_PROXY_URL=https://votre-api-proxy.vercel.app
     ```

4. **Deployer le serveur proxy separement** (necessaire pour CORS):
   - Creer un nouveau projet Vercel pour le proxy
   - Ou utiliser Vercel Serverless Functions

### Option B: Netlify (Alternative)

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Variables d'environnement**: memes que Vercel

### Serveur Proxy pour Production

Creer un fichier `api/proxy.js` pour Vercel Serverless:

```javascript
// api/bigcommerce/[...path].js
export default async function handler(req, res) {
  const { path } = req.query;
  const apiPath = Array.isArray(path) ? path.join('/') : path;

  const BC_STORE_HASH = process.env.VITE_BIGCOMMERCE_STORE_HASH;
  const BC_ACCESS_TOKEN = process.env.VITE_BIGCOMMERCE_ACCESS_TOKEN;

  const response = await fetch(
    `https://api.bigcommerce.com/stores/${BC_STORE_HASH}/v3/${apiPath}`,
    {
      method: req.method,
      headers: {
        'X-Auth-Token': BC_ACCESS_TOKEN,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    }
  );

  const data = await response.json();
  res.status(response.status).json(data);
}
```

---

## 2. Configuration BigCommerce

### Deja Configure
- Store Hash: `qdy1j8i5vg`
- API Tokens configures
- 68 variantes de produits importees

### A Faire dans BigCommerce Admin
1. **Ajouter vos propres produits** via BigCommerce Admin
2. **Configurer les taxes** (TVA 20% pour la France)
3. **Configurer les methodes de paiement** (Stripe recommande)

---

## 3. Systeme de Vote/Participer

### Architecture Recommandee

Pour rendre le systeme de vote fonctionnel, vous avez besoin d'un backend. Options:

#### Option A: Airtable (Simple, gratuit jusqu'a 1200 enregistrements)

1. **Creer une base Airtable** avec les tables:
   - `Votes`: id, title, description, image, startDate, endDate, status
   - `VoteOptions`: id, voteId, optionName, optionImage, voteCount
   - `UserVotes`: id, voteId, optionId, userEmail, timestamp

2. **Configurer l'API Airtable**:
   ```
   VITE_AIRTABLE_API_KEY=votre_cle_api
   VITE_AIRTABLE_BASE_ID=votre_base_id
   ```

#### Option B: Supabase (Plus puissant, gratuit)

1. **Creer un projet Supabase**: https://supabase.com

2. **Schema de base de donnees**:
   ```sql
   CREATE TABLE votes (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     title TEXT NOT NULL,
     description TEXT,
     image_url TEXT,
     start_date TIMESTAMP,
     end_date TIMESTAMP,
     status TEXT DEFAULT 'active',
     created_at TIMESTAMP DEFAULT NOW()
   );

   CREATE TABLE vote_options (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     vote_id UUID REFERENCES votes(id),
     name TEXT NOT NULL,
     image_url TEXT,
     vote_count INTEGER DEFAULT 0
   );

   CREATE TABLE user_votes (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     vote_id UUID REFERENCES votes(id),
     option_id UUID REFERENCES vote_options(id),
     user_email TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

---

## 4. Interface Admin

### Acces Admin Actuel
L'interface admin existe deja. Pour l'activer:

1. **Activer le mode admin** dans la console du navigateur:
   ```javascript
   localStorage.setItem('adminMode', 'true');
   ```

2. **Rafraichir la page** - un bouton Settings apparaitra dans le header

### Ameliorations Suggerees
- Creer une page `/admin` dediee
- Ajouter authentification admin (email/password ou Google OAuth)
- Dashboard avec statistiques

---

## 5. Transporteurs

### Configuration BigCommerce

1. **Dans BigCommerce Admin** > Settings > Shipping

2. **Transporteurs Recommandes pour la France**:
   - **Colissimo** (La Poste) - App disponible sur BigCommerce Marketplace
   - **Mondial Relay** - Integration via app tierce
   - **Chronopost** - Pour livraison express
   - **DHL** - Pour l'international

3. **Configuration Sendcloud** (Recommande):
   - Creer compte: https://www.sendcloud.com
   - Connecter a BigCommerce via API
   - Configure automatiquement Colissimo, Mondial Relay, DHL, etc.

### Frais de Port Suggeres
- France < 50 EUR: 5.99 EUR
- France > 50 EUR: Gratuit
- Europe: 9.99 EUR
- International: 14.99 EUR

---

## 6. Video

### Integration Video Hero

Le bouton "Voir la video" existe deja. Pour le rendre fonctionnel:

1. **Heberger la video** sur:
   - YouTube (gratuit)
   - Vimeo (plus pro)
   - Cloudinary (deja utilise pour les images)

2. **Ajouter un modal video**:
   ```tsx
   // Dans HomePage.tsx, ajouter un state et modal
   const [showVideo, setShowVideo] = useState(false);

   // Modal avec iframe YouTube/Vimeo
   ```

---

## 7. Emailing (Klaviyo)

### Configuration Klaviyo

1. **Creer compte Klaviyo**: https://www.klaviyo.com

2. **Connecter a BigCommerce**:
   - BigCommerce Admin > Apps > Klaviyo
   - Autoriser la connexion

3. **Flows Automatises a Configurer**:
   - Welcome Series (inscription newsletter)
   - Abandon de panier (automatique avec BigCommerce)
   - Post-achat (review request)
   - Win-back (clients inactifs)

4. **Segments Suggeres**:
   - Nouveaux abonnes (< 30 jours)
   - Clients fideles (> 3 achats)
   - Pride Community (interesse par collection Pride)

### Alternative: Mailchimp
Deja partiellement configure dans le projet.

---

## 8. Campagnes Publicitaires

### Meta Ads (Facebook/Instagram)

1. **Pixel Meta**:
   - Creer dans Meta Business Manager
   - Ajouter au site:
   ```html
   <!-- Dans index.html -->
   <script>
     !function(f,b,e,v,n,t,s)
     {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
     n.callMethod.apply(n,arguments):n.queue.push(arguments)};
     if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
     n.queue=[];t=b.createElement(e);t.async=!0;
     t.src=v;s=b.getElementsByTagName(e)[0];
     s.parentNode.insertBefore(t,s)}(window, document,'script',
     'https://connect.facebook.net/en_US/fbevents.js');
     fbq('init', 'VOTRE_PIXEL_ID');
     fbq('track', 'PageView');
   </script>
   ```

2. **Audiences Suggerees**:
   - Interets: LGBT, Pride, Mode inclusive, Fashion
   - Lookalike de vos clients
   - Retargeting visiteurs site

### TikTok Ads

1. **Installer TikTok Pixel** similairement
2. **Creer contenu video court** (15-60 sec)
3. **Cibler**: 18-35 ans, interets mode/lifestyle

### Google Ads

1. **Performance Max** pour e-commerce
2. **Shopping Ads** via BigCommerce feed

---

## 9. Communaute

### Discord (Recommande)

1. **Creer serveur Discord** BFIT Community
2. **Canaux suggeres**:
   - #bienvenue
   - #nouveautes
   - #style-inspo
   - #votes-communaute
   - #support

### Instagram

1. **Activer Shopping Instagram** via BigCommerce
2. **Strategie contenu**:
   - Posts produits 3x/semaine
   - Stories quotidiennes
   - Reels 2x/semaine
   - Lives mensuels

### Programme Ambassadeurs

Comme decrit dans le plan de migration:
- Micro-influenceurs: produits gratuits
- Mid-tier: affiliation 10-15%
- Egeries: contrats image

---

## 10. Pages Legales

### Pages a Creer

1. **Mentions Legales** (`/mentions-legales`):
   - Raison sociale
   - Adresse siege
   - SIRET
   - Directeur de publication
   - Hebergeur

2. **Politique de Confidentialite** (`/confidentialite`):
   - Donnees collectees
   - Utilisation des donnees
   - Cookies
   - Droits RGPD

3. **CGV** (`/cgv`):
   - Prix et paiement
   - Livraison
   - Retours et remboursements
   - Garanties

### Generateurs Gratuits
- https://www.shopify.com/tools/policy-generator
- https://www.termsfeed.com/

---

## 11. Photos Produits

### Upload via BigCommerce

1. **BigCommerce Admin** > Products > [Produit] > Images
2. **Formats recommandes**: JPG/PNG, 1000x1000px minimum
3. **Optimisation**: Utiliser TinyPNG avant upload

### Conseils Photos
- Fond blanc ou uni pour e-commerce
- Photos portees sur modeles
- Details/zoom sur tissus
- Plusieurs angles (face, dos, cote)

---

## Commandes de Developpement

```bash
# Developpement local
npm run dev           # Frontend (port 3000)
npm run server        # Proxy API (port 3001)
npm run dev:all       # Les deux en parallele

# Build production
npm run build

# Test BigCommerce
http://localhost:3000/bigcommerce-test
```

---

## Prochaines Etapes Prioritaires

1. [ ] Deployer sur Vercel
2. [ ] Configurer transporteurs dans BigCommerce
3. [ ] Ajouter vraies photos produits
4. [ ] Creer pages legales
5. [ ] Configurer Klaviyo
6. [ ] Installer pixels Meta/TikTok
7. [ ] Creer serveur Discord communaute

---

*Document genere le 19 janvier 2026 - BFIT Migration BigCommerce*
