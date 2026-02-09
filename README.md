# BestF.kersinTown - Application E-commerce Moderne

Une application e-commerce moderne et inclusive, inspirée par l'UX de Klarna et l'UI d'Adidas, développée avec React 18, TypeScript et Vite.

## 🚀 Fonctionnalités

### Pages Principales
- **Page d'accueil** : Bannière avec le slogan "BestF.kersinTown est une marque de vêtement AllInclusive", introduction de la marque et produits mis en avant
- **Page Produits** : Catalogue complet avec filtres, tri et recherche
- **Page Détail Produit** : Vue détaillée de chaque produit
- **Page "Qui sommes-nous"** : Histoire et philosophie de la marque
- **Page "What's coming next"** : Collections à venir et nouveautés
- **Page "Vote for the next collection"** : Système de vote interactif
- **Page "News"** : Articles, événements et activités communautaires
- **Page "Engagements"** : Engagements environnementaux et éthiques
- **Page "Goodies"** : Merchandise et accessoires

### Fonctionnalités Globales
- **Compte utilisateur** : Gestion des informations personnelles, suivi des commandes
- **Panier d'achat** : Gestion complète avec résumé et calculs automatiques
- **Changement de langue** : Basculement français/anglais
- **Section contact** : Formulaire de contact dans le footer
- **Recherche** : Filtrage rapide des produits
- **Système de likes** : Ajout de produits aux favoris
- **Thème** : Basculement entre gradient bleu/turquoise et fond blanc/crème

## 🛠️ Technologies Utilisées

- **React 18** : Framework principal
- **TypeScript** : Typage statique
- **Vite** : Outil de build et serveur de développement
- **React Router** : Navigation côté client
- **Styled Components** : CSS-in-JS pour le styling
- **Framer Motion** : Animations et transitions
- **Lucide React** : Icônes modernes
- **Axios** : Requêtes HTTP
- **Shopify API** : Intégration e-commerce (Storefront API + Admin API)

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone [url-du-repo]
   cd ecommerce-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer Shopify** (optionnel)
   - Modifier `src/services/shopify.ts`
   - Remplacer `shopDomain` par votre domaine Shopify
   - Les clés API sont déjà configurées

4. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir l'application**
   - L'application s'ouvre automatiquement sur `http://localhost:3000`

## 🎨 Design System

### Couleurs
- **Gradient principal** : Bleu ciel (#87CEEB) vers Turquoise (#40E0D0)
- **Fond alternatif** : Blanc/Crème
- **Gris neutres** : Palette complète de gris
- **Accents** : Couleurs d'accent pour les actions

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Tailles** : Système d'échelle cohérent
- **Poids** : 300, 400, 500, 600, 700

### Espacement
- **Système de spacing** : Variables CSS cohérentes
- **Responsive** : Breakpoints pour mobile, tablette, desktop

## 🔧 Scripts Disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie la qualité du code

## 📱 Responsive Design

L'application est entièrement responsive avec :
- **Mobile First** : Design optimisé pour mobile
- **Breakpoints** : 768px, 1024px, 1200px
- **Navigation mobile** : Menu hamburger avec animations
- **Grilles adaptatives** : Layouts qui s'adaptent à la taille d'écran

## 🎭 Animations et Micro-interactions

- **Transitions de page** : Animations fluides entre les pages
- **Hover effects** : Interactions subtiles sur les éléments
- **Scroll animations** : Animations déclenchées au scroll
- **Loading states** : États de chargement élégants

## 🌐 Internationalisation

- **Français/Anglais** : Support complet des deux langues
- **Contenu dynamique** : Tous les textes s'adaptent à la langue
- **Direction** : Support RTL possible pour d'autres langues

## 🛒 Fonctionnalités E-commerce

### Panier
- **Ajout/Suppression** : Gestion complète des articles
- **Quantités** : Modification des quantités
- **Calculs automatiques** : Sous-total, taxes, livraison
- **Persistance** : Sauvegarde dans localStorage

### Produits
- **Filtres avancés** : Catégorie, prix, disponibilité
- **Tri** : Par prix, popularité, nouveauté
- **Recherche** : Recherche en temps réel
- **Favoris** : Système de likes

## 🔌 Intégration Shopify

### Storefront API
- **Produits** : Récupération des produits et variantes
- **Collections** : Gestion des catégories
- **Checkout** : Création de paniers d'achat

### Admin API
- **Commandes** : Gestion des commandes
- **Clients** : Gestion des comptes utilisateurs
- **Inventaire** : Suivi des stocks

## 🚀 Déploiement

### Build de Production
```bash
npm run build
```

### Déploiement sur Vercel
1. Connecter le repository à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Déploiement sur Netlify
1. Upload du dossier `dist`
2. Configuration des redirections
3. Déploiement automatique

## 📋 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Container.tsx   # Composant de mise en page
│   ├── Header.tsx      # Navigation principale
│   ├── Footer.tsx      # Pied de page
│   └── providers/      # Context providers
├── pages/              # Pages de l'application
│   ├── HomePage.tsx    # Page d'accueil
│   ├── ProductsPage.tsx # Catalogue produits
│   └── ...            # Autres pages
├── services/           # Services API
│   └── shopify.ts     # Intégration Shopify
├── types/             # Définitions TypeScript
│   └── index.ts       # Types principaux
├── App.tsx            # Composant racine
└── main.tsx           # Point d'entrée
```

## 🎯 Objectifs Atteints

✅ **UX inspirée de Klarna** : Fluidité, simplicité, clarté
✅ **UI inspirée d'Adidas** : Grandes images, navigation propre
✅ **Design moderne** : Minimaliste, lisible, intuitif
✅ **Responsive** : Optimisé pour tous les appareils
✅ **Animations** : Micro-interactions et transitions fluides
✅ **E-commerce complet** : Panier, produits, commandes
✅ **Internationalisation** : Support français/anglais
✅ **Accessibilité** : Design inclusif et accessible

## 🔮 Prochaines Étapes

- [ ] Intégration complète Shopify
- [ ] Système de paiement
- [ ] Gestion des stocks en temps réel
- [ ] Analytics et tracking
- [ ] Tests automatisés
- [ ] Optimisation des performances
- [ ] PWA (Progressive Web App)

## 📞 Support

Pour toute question ou problème :
- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement

---

**BestF.kersinTown** - Une marque de vêtement AllInclusive pour tous les styles et toutes les personnalités.
