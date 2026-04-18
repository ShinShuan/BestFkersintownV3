# Documentation Panel Admin — BestF.kersInTown

> **Architecture** : BigCommerce (Stencil theme) + Vercel (React admin/votes)
> Dernière mise à jour : Avril 2025

---

## Table des matières

1. [Architecture globale](#1-architecture-globale)
2. [Déploiement du thème BigCommerce](#2-déploiement-du-thème-bigcommerce)
3. [Configuration DNS](#3-configuration-dns)
4. [Configuration du domaine dans BigCommerce](#4-configuration-du-domaine-dans-bigcommerce)
5. [Panel Admin BigCommerce](#5-panel-admin-bigcommerce)
6. [Panel Admin React (Votes)](#6-panel-admin-react-votes)
7. [Variables d'environnement](#7-variables-denvironnement)
8. [Gestion des produits](#8-gestion-des-produits)
9. [Gestion des commandes](#9-gestion-des-commandes)
10. [Gestion des clients](#10-gestion-des-clients)
11. [Système de votes](#11-système-de-votes)
12. [Développement du thème Stencil](#12-développement-du-thème-stencil)
13. [Troubleshooting](#13-troubleshooting)

---

## 1. Architecture globale

```
                        ┌─────────────────────────────────────┐
                        │         bestfkersintown.com          │
                        │      (BigCommerce Stencil Theme)     │
                        │                                      │
                        │  • Page d'accueil                   │
                        │  • Catalogue produits               │
                        │  • Panier natif                     │
                        │  • Checkout natif ✅                │
                        │  • Auth (login/register) natif ✅   │
                        │  • Commandes / compte client        │
                        └─────────────────────────────────────┘

                        ┌─────────────────────────────────────┐
                        │      admin.bestfkersintown.com       │
                        │       (Vercel — React App)          │
                        │                                      │
                        │  • Panel d'administration           │
                        │  • Gestion des votes                │
                        │  • Dashboard produits / métriques   │
                        └─────────────────────────────────────┘

                        ┌─────────────────────────────────────┐
                        │    api.bigcommerce.com (backend)     │
                        │       Store Hash: qdy1j8i5vg        │
                        │                                      │
                        │  • Catalogue, stock, variantes      │
                        │  • Panier / checkout / paiement     │
                        │  • Clients / commandes              │
                        └─────────────────────────────────────┘
```

---

## 2. Déploiement du thème BigCommerce

### Fichier à déployer

Le fichier à uploader est :
```
BFIT-Stencil-Theme.zip  (à la racine du projet)
```

Ce ZIP contient :
```
config.json          — Paramètres du thème (couleurs, police)
manifest.json        — Métadonnées du thème
schema.json          — Schéma des options admin
templates/           — Templates Handlebars (toutes les pages)
assets/
  scss/theme.scss           — Source SCSS
  scss/theme-bundle.css     — CSS compilé (chargé en prod)
  js/                       — Scripts JS
lang/
  en.json            — Traductions anglaises
  fr.json            — Traductions françaises
```

### Étapes d'upload

1. Connectez-vous à **[BigCommerce Admin](https://store-qdy1j8i5vg.mybigcommerce.com/manage)**
2. Aller dans **Vitrine → Mes thèmes**
3. Cliquer **"Télécharger un thème"** (bouton en haut à droite)
4. Sélectionner `BFIT-Stencil-Theme.zip`
5. Attendre le traitement (1–2 minutes)
6. Une fois uploadé, cliquer **"Appliquer"** sur le thème BFIT Storefront
7. Confirmer l'activation

> ⚠️ **Important** : Avant d'activer, prévisualisez le thème avec le bouton "Prévisualiser" pour vérifier l'apparence sans impacter les clients.

### Recompiler le CSS après modification

Si vous modifiez `theme/assets/scss/theme.scss` :

```bash
cd theme
npx sass assets/scss/theme.scss assets/scss/theme-bundle.css --style=compressed
```

Puis recréer le ZIP et re-uploader.

---

## 3. Configuration DNS

À configurer chez le **registrar DNS** du domaine (OVH, Cloudflare, Gandi, etc.) :

### Enregistrements DNS requis

| Type  | Nom   | Valeur                          | TTL  |
|-------|-------|---------------------------------|------|
| A     | @     | *(IP fournie par BigCommerce)*  | 3600 |
| A     | @     | *(IP 2 fournie par BigCommerce)*| 3600 |
| CNAME | www   | shops.mybigcommerce.com         | 3600 |
| CNAME | admin | cname.vercel-dns.com            | 3600 |

> 📋 **Les IPs BigCommerce exactes** sont affichées dans :
> BigCommerce Admin → **Paramètres → Domaine → Ajouter un domaine**

### Cloudflare (si utilisé)

Si le DNS est géré par Cloudflare :
- Mettre les enregistrements en mode **DNS only** (nuage gris) pendant la configuration
- Une fois BigCommerce confirmé, vous pouvez réactiver le proxy (nuage orange) pour `www`
- L'enregistrement `admin` doit rester en **DNS only**

### Propagation

La propagation DNS peut prendre **24–48 heures**. Vous pouvez vérifier avec :
```
https://dnschecker.org/#A/bestfkersintown.com
```

---

## 4. Configuration du domaine dans BigCommerce

### Ajouter le domaine custom

1. BigCommerce Admin → **Paramètres → Domaine**
2. Cliquer **"Ajouter un domaine"**
3. Saisir `bestfkersintown.com`
4. Cliquer **"Confirmer"**
5. BigCommerce génère automatiquement un certificat SSL (Let's Encrypt, ~10 min)

### Configurer le domaine sur Vercel (admin React)

1. Aller sur [vercel.com](https://vercel.com) → votre projet
2. **Settings → Domains**
3. Ajouter `admin.bestfkersintown.com`
4. Vercel fournit la valeur CNAME → la saisir dans votre DNS

---

## 5. Panel Admin BigCommerce

URL : `https://store-qdy1j8i5vg.mybigcommerce.com/manage`
ou `https://login.bigcommerce.com` une fois le domaine custom configuré.

### Navigation principale

| Menu | Contenu |
|------|---------|
| **Commandes** | Toutes les commandes, statuts, expédition |
| **Produits** | Catalogue, variantes, stock, prix |
| **Clients** | Base clients, groupes, adresses |
| **Vitrine** | Thèmes, scripts, redirections, pages |
| **Marketing** | Codes promo, coupons, email marketing |
| **Statistiques** | Ventes, trafic, conversion |
| **Applications** | App marketplace |
| **Paramètres** | Boutique, taxes, paiements, livraison |

### Paramètres essentiels à configurer

#### Paiements
1. **Paramètres → Paiements**
2. Activer votre passerelle (Stripe, PayPal, etc.)
3. Configurer les clés API du prestataire

#### Livraison
1. **Paramètres → Livraison**
2. Configurer les zones et tarifs :
   - France métropolitaine
   - Europe
   - International
3. Définir le seuil de livraison gratuite

#### Taxes
1. **Paramètres → Fiscalité**
2. Configurer la TVA française : **20%**
3. Activer "Prix TTC affichés en vitrine"

#### Email boutique
1. **Paramètres → Profil de la boutique**
2. Changer l'email de `info@bestfkersintown.mybigcommerce.com`
3. Vérifier la nouvelle adresse (lien envoyé par mail)

#### Devise
1. **Paramètres → Devise**
2. Devise principale : **EUR (€)**
3. Format : `€ #,##0.00`

---

## 6. Panel Admin React (Votes)

URL de production : `https://admin.bestfkersintown.com`
URL de développement : `http://localhost:5173`

### Accès

L'accès est protégé par authentification Google OAuth. Seuls les emails autorisés peuvent se connecter (configurés dans le code).

### Fonctionnalités du panel vote

| Fonctionnalité | Description |
|----------------|-------------|
| **Dashboard votes** | Vue globale des votes par produit |
| **Classement produits** | Produits triés par score de vote |
| **Modération** | Accepter / refuser des suggestions |
| **Réinitialiser votes** | Remettre à zéro un produit |
| **Export** | Export CSV des données de vote |

### Variables d'environnement Vercel (admin React)

Dans Vercel → Settings → Environment Variables du projet admin :

```env
VITE_GOOGLE_CLIENT_ID=298637262221-19tbfkbo0uhkh9t4e94813vpo6h71610.apps.googleusercontent.com
VITE_BIGCOMMERCE_STORE_HASH=qdy1j8i5vg
VITE_BIGCOMMERCE_ACCESS_TOKEN=sxeunn1dwg3c2a8h2tmzcqujmxq5ol0
VITE_BIGCOMMERCE_API_URL=https://api.bigcommerce.com/stores/qdy1j8i5vg/v3
```

---

## 7. Variables d'environnement

### Fichier `.env` (développement local)

```env
# Google OAuth
VITE_GOOGLE_CLIENT_ID=298637262221-19tbfkbo0uhkh9t4e94813vpo6f8xzc20y5

# BigCommerce API
VITE_BIGCOMMERCE_STORE_HASH=qdy1j8i5vg
VITE_BIGCOMMERCE_CLIENT_ID=keyxz1g7nykbu7fwt7ncv6f8xzc20y5
VITE_BIGCOMMERCE_ACCESS_TOKEN=sxeunn1dwg3c2a8h2tmzcqujmxq5ol0
VITE_BIGCOMMERCE_CLIENT_SECRET=1a0da976db5ce60808b59baa348d4a55009cf4aa48bfa7e191ac091cc1e38db0

# URLs
VITE_BIGCOMMERCE_API_URL=https://api.bigcommerce.com/stores/qdy1j8i5vg/v3
VITE_BIGCOMMERCE_STOREFRONT_URL=https://bestfkersintown.mybigcommerce.com
```

> ⚠️ **Ne jamais commiter le fichier `.env`** — il est dans `.gitignore`

### Variables Vercel (production)

Dans Vercel → Project → Settings → Environment Variables :

| Clé | Valeur |
|-----|--------|
| `VITE_BIGCOMMERCE_STORE_HASH` | `qdy1j8i5vg` |
| `VITE_BIGCOMMERCE_ACCESS_TOKEN` | `sxeunn1dwg3c2a8h2tmzcqujmxq5ol0` |
| `VITE_BIGCOMMERCE_CLIENT_ID` | `keyxz1g7nykbu7fwt7ncv6f8xzc20y5` |
| `VITE_BIGCOMMERCE_CLIENT_SECRET` | `1a0da976...` |
| `VITE_GOOGLE_CLIENT_ID` | `298637262221-...` |

---

## 8. Gestion des produits

### Ajouter un produit

1. BigCommerce Admin → **Produits → Ajouter un produit**
2. Remplir :
   - **Nom** du produit
   - **Prix** (TTC si TVA incluse activée)
   - **SKU** (référence unique)
   - **Poids** (requis pour les calculs de livraison)
3. Onglet **Images** : ajouter les photos (format recommandé : 1200×1200 px, JPEG/WebP)
4. Onglet **Variantes** : configurer taille, couleur, etc.
5. Onglet **Stock** : activer le suivi de stock
6. Cliquer **"Enregistrer et fermer"**

### Configurer les variantes

1. Sur la page produit → onglet **"Options et SKU"**
2. Ajouter une option (ex: "Taille")
3. Ajouter les valeurs (S, M, L, XL, XXL)
4. Générer les variantes automatiquement
5. Pour chaque variante : ajuster le stock et optionnellement le prix

### Marquer un produit comme "En vedette"

1. Page produit → onglet **"Vitrine"**
2. Cocher **"En vedette"**
3. Le produit apparaît dans la section "Produits en vedette" de la page d'accueil

### Gérer le stock

1. Page produit → onglet **"Inventaire"**
2. Activer le suivi : **"Par variante"** ou **"Par produit"**
3. Définir la quantité disponible
4. Définir le seuil d'alerte stock faible
5. Le thème affiche automatiquement la disponibilité

### Catégories

1. **Produits → Catégories → Ajouter une catégorie**
2. Nom, description, image de catégorie
3. Organiser en arborescence (catégories / sous-catégories)
4. Les catégories sont accessibles via `/categories/[nom-categorie]/`

---

## 9. Gestion des commandes

### Vue des commandes

1. **Commandes → Afficher les commandes**
2. Filtres disponibles :
   - Statut (En attente, Payé, Expédié, Terminé, Annulé)
   - Date
   - Client
   - Montant

### Statuts de commande

| Statut | Signification | Action |
|--------|--------------|--------|
| **En attente** | Paiement non confirmé | Attendre |
| **Payé** | Paiement confirmé | Préparer l'expédition |
| **En cours de traitement** | Commande en préparation | Préparer |
| **Expédié** | Colis envoyé | Renseigner le tracking |
| **Terminé** | Livraison confirmée | — |
| **Annulé** | Commande annulée | Rembourser si nécessaire |
| **Remboursé** | Remboursement effectué | — |

### Traiter une commande

1. Cliquer sur le numéro de commande
2. Vérifier les articles et l'adresse de livraison
3. Cliquer **"Créer une expédition"**
4. Saisir le numéro de tracking (optionnel)
5. Sélectionner le transporteur
6. Cliquer **"Marquer comme expédié"**
7. BigCommerce envoie automatiquement un email de confirmation au client

### Remboursement

1. Ouvrir la commande
2. Cliquer **"Rembourser"** (en bas de page)
3. Sélectionner les articles à rembourser
4. Montant partiel ou total
5. Le remboursement est traité via la passerelle de paiement

---

## 10. Gestion des clients

### Base clients

1. **Clients → Afficher les clients**
2. Recherche par nom, email, numéro de commande

### Groupes de clients

Utile pour proposer des prix spéciaux ou accès VIP :
1. **Clients → Groupes de clients → Ajouter un groupe**
2. Définir des remises automatiques pour ce groupe
3. Assigner des clients au groupe manuellement ou via règles

### Mot de passe oublié (côté admin)

Si un client ne peut pas réinitialiser son mot de passe :
1. **Clients** → chercher le client
2. Cliquer sur son nom
3. **"Envoyer un email de réinitialisation de mot de passe"**

---

## 11. Système de votes

### Architecture technique

Le système de votes est une application React indépendante hébergée sur Vercel.

```
Frontend vitrine (BigCommerce)
  └─→ Lien vers admin.bestfkersintown.com/votes

Panel admin React (Vercel)
  └─→ API BigCommerce (via proxy Vercel /api/bigcommerce-proxy.js)
  └─→ Base de données votes (Firebase / Supabase / localStorage)
```

### Accès au panel votes

URL : `https://admin.bestfkersintown.com`

Authentification requise via Google (emails autorisés uniquement).

### Workflow de vote produit

1. Un client visite la page produit sur la vitrine
2. Il peut voter (👍 / 👎) sur le produit
3. Le vote est enregistré dans la base de données
4. Le panel admin affiche :
   - Score global par produit
   - Évolution dans le temps
   - Produits les plus / moins appréciés

### Intégrer les votes dans le thème Stencil

Pour afficher les votes directement sur la vitrine BigCommerce, on peut injecter le composant via **Script Manager** :

1. BigCommerce Admin → **Vitrine → Script Manager**
2. **"Créer un script"**
3. Nom : `BFIT Vote Widget`
4. Emplacement : **Bas de page** sur les pages **Product**
5. Type : **Script**
6. Contenu :
```html
<script src="https://admin.bestfkersintown.com/vote-widget.js"></script>
```

> Ce script doit être généré et exposé par la React app Vercel.

---

## 12. Développement du thème Stencil

### Structure des fichiers

```
theme/
├── config.json              — Config thème (couleurs, polices)
├── manifest.json            — Métadonnées
├── schema.json              — Options editables dans admin BC
├── assets/
│   ├── scss/
│   │   ├── theme.scss       — Source SCSS (ÉDITER ICI)
│   │   └── theme-bundle.css — CSS compilé (généré, ne pas éditer)
│   └── js/                  — Scripts JS additionnels
├── lang/
│   ├── en.json              — Traductions anglaises
│   └── fr.json              — Traductions françaises
└── templates/
    ├── layout/
    │   └── base.html        — Layout principal (header, footer)
    └── pages/
        ├── home.html        — Page d'accueil
        ├── product.html     — Fiche produit
        ├── category.html    — Page catégorie
        ├── cart.html        — Panier
        ├── search.html      — Résultats de recherche
        └── auth/
            ├── login.html           — Connexion
            ├── create-account.html  — Inscription
            └── forgot-password.html — Mot de passe oublié
```

### Modifier le CSS

1. Éditer `theme/assets/scss/theme.scss`
2. Recompiler :
```bash
cd theme
npx sass assets/scss/theme.scss assets/scss/theme-bundle.css --style=compressed
```
3. Recréer le ZIP et re-uploader dans BigCommerce

### Variables CSS disponibles

```css
:root {
    --primary: #d13296;        /* Rose BFIT */
    --primary-dark: #b02a7a;   /* Rose foncé */
    --bg: #0a0a0a;             /* Fond noir */
    --bg-card: #141414;        /* Fond carte */
    --bg-hover: #1c1c1c;       /* Fond hover */
    --text: #ffffff;           /* Texte principal */
    --text-muted: #888888;     /* Texte secondaire */
    --border: #2a2a2a;         /* Bordures */
    --radius: 12px;            /* Rayon des coins */
    --font: 'Outfit', sans-serif;
}
```

### Handlebars — Objets disponibles

| Objet | Description |
|-------|-------------|
| `{{customer.name}}` | Nom du client connecté |
| `{{customer.email}}` | Email du client |
| `{{cart.quantity}}` | Nombre d'articles dans le panier |
| `{{cart.checkout_link}}` | URL de checkout |
| `{{product.name}}` | Nom du produit (page produit) |
| `{{product.price.without_tax.formatted}}` | Prix formaté |
| `{{product.images}}` | Tableau des images |
| `{{product.variants}}` | Variantes du produit |
| `{{category.products}}` | Produits de la catégorie |
| `{{featured_products}}` | Produits en vedette (home) |
| `{{new_products}}` | Nouveaux produits (home) |
| `{{search.product_results}}` | Résultats de recherche |
| `{{urls.auth.login}}` | URL de login |
| `{{urls.auth.create_account}}` | URL inscription |
| `{{urls.cart}}` | URL du panier |
| `{{lang 'key'}}` | Traduction depuis lang/en.json |

### Ajouter une traduction

1. Éditer `theme/lang/en.json` et `theme/lang/fr.json`
2. Ajouter votre clé :
```json
{
  "ma_section": {
    "ma_cle": "Ma valeur"
  }
}
```
3. Dans le template : `{{lang 'ma_section.ma_cle'}}`

### Recréer le ZIP de déploiement

```powershell
# Depuis PowerShell dans le dossier racine du projet
$exclude = @('node_modules', '.stencil', 'pnpm-lock.yaml', 'run-bundle.bat', 'stencil-init-out.txt', 'package.json')
$items = Get-ChildItem -Path './theme' -Exclude $exclude
Compress-Archive -Path $items.FullName -DestinationPath './BFIT-Stencil-Theme.zip' -Force
```

---

## 13. Troubleshooting

### Le thème ne s'affiche pas correctement

**Cause** : CSS non compilé ou ancien cache
**Solution** :
1. Vider le cache navigateur (`Ctrl+Shift+R`)
2. Recompiler le SCSS
3. Ré-uploader le ZIP

### Les produits n'apparaissent pas sur la page d'accueil

**Cause** : Aucun produit marqué "En vedette"
**Solution** :
1. BigCommerce Admin → Produits → sélectionner un produit
2. Onglet **Vitrine** → cocher **"En vedette"**

### Le checkout ne fonctionne pas

**Cause** : Passerelle de paiement non configurée
**Solution** :
1. Paramètres → Paiements → activer une passerelle
2. Saisir les clés API de la passerelle

### L'email du client ne reçoit pas de confirmation

**Cause** : Email boutique non vérifié
**Solution** :
1. Paramètres → Profil de la boutique
2. Cliquer "Renvoyer l'email de vérification"
3. Ouvrir le lien depuis la boîte mail

### Erreur 404 sur /api/bigcommerce/...

**Cause** : Variables d'environnement Vercel manquantes
**Solution** : Vérifier dans Vercel → Settings → Environment Variables :
- `VITE_BIGCOMMERCE_STORE_HASH`
- `VITE_BIGCOMMERCE_ACCESS_TOKEN`

### Le panier ne se synchronise pas

**Cause** : ID panier expiré dans localStorage
**Solution** : Ouvrir la console navigateur → Application → Local Storage → supprimer `bigcommerce_cart_id`

### Certificat SSL non actif après configuration DNS

**Cause** : La propagation DNS n'est pas terminée
**Solution** : Attendre 24–48h, puis dans BigCommerce Admin → Paramètres → Domaine → cliquer "Actualiser le SSL"

---

## Informations de référence

### Credentials BigCommerce

| Champ | Valeur |
|-------|--------|
| Store Hash | `qdy1j8i5vg` |
| Store URL | `https://bestfkersintown.mybigcommerce.com` |
| Admin URL | `https://store-qdy1j8i5vg.mybigcommerce.com/manage` |
| API URL | `https://api.bigcommerce.com/stores/qdy1j8i5vg/v3` |

### Repositories & Déploiement

| Service | URL | Branche |
|---------|-----|---------|
| GitHub | `https://github.com/ShinShuan/BestFkersintownV3` | `main` |
| Vercel (auto-deploy) | `https://bestfkersintown.com` | `main` |
| BigCommerce Admin | voir ci-dessus | — |

### Support

- **BigCommerce Support** : [support.bigcommerce.com](https://support.bigcommerce.com)
- **Documentation Stencil** : [developer.bigcommerce.com/stencil-docs](https://developer.bigcommerce.com/stencil-docs)
- **Status BigCommerce** : [status.bigcommerce.com](https://status.bigcommerce.com)
