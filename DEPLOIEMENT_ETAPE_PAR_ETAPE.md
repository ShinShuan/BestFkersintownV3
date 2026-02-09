# Guide de Déploiement Complet - BFIT (BestF.kersInTown)

## Table des matières
1. [Prérequis](#1-prérequis)
2. [Étape 1: Préparer le code sur GitHub](#étape-1-préparer-le-code-sur-github)
3. [Étape 2: Déployer sur Vercel](#étape-2-déployer-sur-vercel)
4. [Étape 3: Configurer le nom de domaine](#étape-3-configurer-le-nom-de-domaine)
5. [Étape 4: Donner accès au client](#étape-4-donner-accès-au-client)
6. [Maintenance et mises à jour](#maintenance-et-mises-à-jour)
7. [Dépannage](#dépannage)

---

## 1. Prérequis

### Ce dont vous avez besoin :
- [ ] Un compte GitHub (gratuit) : https://github.com/signup
- [ ] Un compte Vercel (gratuit) : https://vercel.com/signup
- [ ] Git installé sur votre ordinateur
- [ ] Le code source du projet (dossier BestFkersintownV3)

### Informations BigCommerce (déjà configurées) :
```
Store Hash: qdy1j8i5vg
Client ID: s7rw6slm5do6a9dyd7a1px12ln9wcyl
Access Token: ehi1veygrjzpisslheidxg8slbl7vbl
```

---

## Étape 1: Préparer le code sur GitHub

### 1.1 Créer un compte GitHub (si pas déjà fait)
1. Aller sur https://github.com/signup
2. Créer un compte avec votre email
3. Vérifier votre email

### 1.2 Créer un nouveau repository
1. Connectez-vous à GitHub
2. Cliquer sur le bouton vert **"New"** (ou aller sur https://github.com/new)
3. Configurer le repository :
   - **Repository name** : `bfit-store` (ou le nom que vous voulez)
   - **Description** : `Boutique BFIT - BestF.kersInTown`
   - **Visibilité** : `Private` (recommandé pour un projet client)
   - Ne cochez PAS "Add a README file"
4. Cliquer **"Create repository"**

### 1.3 Pousser le code sur GitHub

Ouvrez un terminal (PowerShell ou CMD) dans le dossier du projet :

```bash
# 1. Aller dans le dossier du projet
cd "C:\Users\s_fon\Desktop\BestFkersintownV3"

# 2. Initialiser Git (si pas déjà fait)
git init

# 3. Ajouter tous les fichiers
git add .

# 4. Créer le premier commit
git commit -m "Initial commit - BFIT Store"

# 5. Connecter au repository GitHub (remplacez VOTRE_USERNAME)
git remote add origin https://github.com/VOTRE_USERNAME/bfit-store.git

# 6. Pousser le code
git branch -M main
git push -u origin main
```

**Si on vous demande de vous authentifier :**
- Utilisez votre nom d'utilisateur GitHub
- Pour le mot de passe, créez un "Personal Access Token" :
  1. GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
  2. Generate new token > Cocher "repo" > Generate
  3. Copier le token et l'utiliser comme mot de passe

---

## Étape 2: Déployer sur Vercel

### 2.1 Créer un compte Vercel
1. Aller sur https://vercel.com/signup
2. Cliquer **"Continue with GitHub"** (recommandé)
3. Autoriser Vercel à accéder à GitHub

### 2.2 Importer le projet
1. Sur le dashboard Vercel, cliquer **"Add New..."** > **"Project"**
2. Dans la liste, trouver votre repository `bfit-store`
3. Cliquer **"Import"**

### 2.3 Configurer les variables d'environnement (TRÈS IMPORTANT)

Avant de déployer, vous DEVEZ ajouter les variables d'environnement :

1. Dans la section **"Environment Variables"**, ajouter ces 4 variables :

| Name (exactement comme écrit) | Value |
|-------------------------------|-------|
| `VITE_BIGCOMMERCE_STORE_HASH` | `qdy1j8i5vg` |
| `VITE_BIGCOMMERCE_CLIENT_ID` | `s7rw6slm5do6a9dyd7a1px12ln9wcyl` |
| `VITE_BIGCOMMERCE_ACCESS_TOKEN` | `ehi1veygrjzpisslheidxg8slbl7vbl` |
| `VITE_BIGCOMMERCE_API_URL` | `https://api.bigcommerce.com/stores/qdy1j8i5vg/v3` |

**Pour chaque variable :**
- Cliquer dans le champ "Name", coller le nom
- Cliquer dans le champ "Value", coller la valeur
- Cliquer **"Add"**

### 2.4 Déployer
1. Vérifier que les 4 variables sont bien ajoutées
2. Cliquer **"Deploy"**
3. Attendre 2-3 minutes
4. 🎉 Votre site est en ligne !

### 2.5 Récupérer l'URL du site
Une fois déployé, Vercel vous donne une URL comme :
```
https://bfit-store.vercel.app
```
Notez cette URL, c'est votre site temporaire.

---

## Étape 3: Configurer le nom de domaine

### Option A: Acheter un domaine via Vercel (le plus simple)

1. Sur Vercel, aller dans votre projet
2. Cliquer sur **"Settings"** > **"Domains"**
3. Cliquer **"Buy"** à côté du champ de domaine
4. Chercher votre domaine (ex: `bestfkersintown.com`)
5. Suivre les instructions de paiement
6. Le domaine sera automatiquement configuré !

### Option B: Utiliser un domaine existant (OVH, Gandi, GoDaddy, etc.)

#### 3.1 Ajouter le domaine sur Vercel
1. Aller dans **Settings** > **Domains**
2. Entrer votre domaine : `www.bestfkersintown.com`
3. Cliquer **"Add"**
4. Vercel vous donne des instructions de configuration DNS

#### 3.2 Configurer les DNS chez votre registrar

**Pour un domaine racine (bestfkersintown.com) :**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Pour www (www.bestfkersintown.com) :**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 3.3 Exemples par registrar

**OVH :**
1. Aller sur https://www.ovh.com/manager/
2. Sélectionner votre domaine
3. Aller dans "Zone DNS"
4. Supprimer les anciens enregistrements A et CNAME pour @ et www
5. Ajouter les nouveaux enregistrements ci-dessus

**Gandi :**
1. Aller sur https://admin.gandi.net/
2. Sélectionner votre domaine
3. Aller dans "DNS Records"
4. Modifier/Ajouter les enregistrements

**GoDaddy :**
1. Aller sur https://dcc.godaddy.com/
2. Sélectionner votre domaine
3. Cliquer "DNS"
4. Modifier les enregistrements

#### 3.4 Vérifier la configuration
1. Retourner sur Vercel > Settings > Domains
2. Attendre que le statut passe en vert ✓
3. Cela peut prendre de 5 minutes à 48 heures (propagation DNS)

---

## Étape 4: Donner accès au client

### 4.1 Créer un lien admin secret

Le client peut accéder à l'admin via cette URL :
```
https://www.bestfkersintown.com/?admin=true
```

**Recommandation :** Créez un raccourci ou bookmark avec ce lien pour votre client.

### 4.2 Guide rapide pour le client

Envoyez ce message à votre client :

---

**Bonjour,**

Votre boutique BFIT est maintenant en ligne ! 🎉

**Accéder à votre site :**
https://www.bestfkersintown.com

**Accéder à l'administration des votes :**
1. Ouvrir ce lien : https://www.bestfkersintown.com/?admin=true
2. Cliquer sur le bouton ⚙️ **Settings** dans le menu
3. Vous pouvez maintenant :
   - Ajouter de nouveaux éléments de vote
   - Modifier les éléments existants
   - Activer/désactiver des votes
   - Voir les statistiques

**Important :**
- Utilisez toujours le même navigateur pour administrer
- Ne videz pas les données de votre navigateur

Un guide complet est disponible sur demande.

---

### 4.3 Document à remettre au client

Remettez le fichier `GUIDE_CLIENT.md` présent dans le projet, ou envoyez-le en PDF.

---

## Maintenance et mises à jour

### Faire une mise à jour du site

Quand vous modifiez le code :

```bash
# 1. Aller dans le dossier du projet
cd "C:\Users\s_fon\Desktop\BestFkersintownV3"

# 2. Ajouter les modifications
git add .

# 3. Créer un commit avec un message descriptif
git commit -m "Description de la modification"

# 4. Pousser sur GitHub
git push
```

**Vercel détecte automatiquement le push et redéploie le site en 2-3 minutes.**

### Voir les logs et erreurs

1. Aller sur https://vercel.com
2. Sélectionner le projet
3. Cliquer sur "Deployments" pour voir l'historique
4. Cliquer sur un déploiement pour voir les logs

### Revenir à une version précédente

Si une mise à jour cause des problèmes :
1. Vercel > Deployments
2. Trouver le déploiement qui fonctionnait
3. Cliquer sur les "..." à droite
4. Cliquer "Promote to Production"

---

## Dépannage

### Problème : "Le site affiche une erreur 500"

**Solution :**
1. Vérifier que les variables d'environnement sont bien configurées sur Vercel
2. Aller dans Settings > Environment Variables
3. Vérifier qu'il y a bien les 4 variables BigCommerce
4. Si vous les modifiez, redéployer le site

### Problème : "Le bouton Settings n'apparaît pas"

**Solution :**
1. S'assurer d'utiliser l'URL avec `?admin=true`
2. Essayer de vider le cache du navigateur (Ctrl+Shift+Del)
3. Ouvrir la console (F12) et taper :
   ```javascript
   localStorage.setItem('adminMode', 'true');
   ```
4. Rafraîchir la page

### Problème : "Les produits BigCommerce ne s'affichent pas"

**Solution :**
1. Vérifier la connexion API sur `/bigcommerce-test`
2. Vérifier que les tokens BigCommerce sont valides
3. Regarder les logs Vercel pour voir les erreurs

### Problème : "Le domaine ne fonctionne pas"

**Solution :**
1. Vérifier les enregistrements DNS chez votre registrar
2. Utiliser https://dnschecker.org/ pour vérifier la propagation
3. Attendre jusqu'à 48h pour la propagation DNS
4. Vérifier que le SSL est actif sur Vercel (Settings > Domains)

### Problème : "Les modifications admin ne sont pas sauvegardées"

**Solution :**
- Les données admin sont stockées dans le localStorage du navigateur
- Utiliser toujours le même navigateur
- Ne pas vider les données du site
- Pour une solution plus robuste, migrer vers Supabase (voir section avancée)

---

## Annexe A: Configuration Supabase (Base de données - RECOMMANDÉ)

Supabase permet de stocker les votes de manière persistante et partagée entre tous les utilisateurs.

### Étape 1: Créer un compte Supabase (GRATUIT)
1. Aller sur https://supabase.com
2. Cliquer **"Start your project"**
3. Se connecter avec GitHub (recommandé)
4. Créer un nouveau projet :
   - **Name**: `bfit-votes`
   - **Database Password**: Générer un mot de passe fort (notez-le!)
   - **Region**: Choisir la plus proche (ex: Frankfurt pour l'Europe)
5. Attendre 2 minutes que le projet soit créé

### Étape 2: Créer les tables
1. Dans Supabase, aller dans **SQL Editor** (menu de gauche)
2. Cliquer **"New query"**
3. Copier-coller ce code SQL et cliquer **"Run"** :

```sql
-- =============================================
-- BFIT - Schéma de base de données pour les votes
-- =============================================

-- Table des éléments de vote
CREATE TABLE vote_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT NOT NULL,
  description_en TEXT,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  votes INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP
);

-- Table des votes utilisateurs (pour éviter les votes multiples)
CREATE TABLE user_votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vote_item_id UUID REFERENCES vote_items(id) ON DELETE CASCADE,
  user_identifier TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(vote_item_id, user_identifier)
);

-- Table des éléments "Prochainement"
CREATE TABLE coming_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT NOT NULL,
  description_en TEXT,
  image TEXT NOT NULL,
  release_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index pour améliorer les performances
CREATE INDEX idx_vote_items_active ON vote_items(is_active);
CREATE INDEX idx_vote_items_votes ON vote_items(votes DESC);
CREATE INDEX idx_user_votes_identifier ON user_votes(user_identifier);

-- Activer Row Level Security (RLS)
ALTER TABLE vote_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE coming_items ENABLE ROW LEVEL SECURITY;

-- Politiques de sécurité : lecture publique
CREATE POLICY "Allow public read on vote_items" ON vote_items FOR SELECT USING (true);
CREATE POLICY "Allow public read on coming_items" ON coming_items FOR SELECT USING (true);
CREATE POLICY "Allow public read on user_votes" ON user_votes FOR SELECT USING (true);

-- Politiques de sécurité : écriture publique (pour les votes)
CREATE POLICY "Allow public insert on user_votes" ON user_votes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on vote_items" ON vote_items FOR UPDATE USING (true);

-- Politiques admin (pour la gestion)
CREATE POLICY "Allow public insert on vote_items" ON vote_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public delete on vote_items" ON vote_items FOR DELETE USING (true);
CREATE POLICY "Allow public insert on coming_items" ON coming_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on coming_items" ON coming_items FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on coming_items" ON coming_items FOR DELETE USING (true);
CREATE POLICY "Allow public delete on user_votes" ON user_votes FOR DELETE USING (true);

-- Insérer les données de démonstration
INSERT INTO vote_items (title, title_en, description, description_en, image, category, votes, is_active) VALUES
('Collection Pride 2026', 'Pride Collection 2026', 'Une collection audacieuse célébrant la diversité.', 'A bold collection celebrating diversity.', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', 'collection', 1247, true),
('Sneakers Rainbow', 'Rainbow Sneakers', 'Des sneakers colorées et confortables.', 'Colorful and comfortable sneakers.', 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500', 'shoes', 892, true),
('T-shirt "Be You"', '"Be You" T-shirt', 'Un message puissant sur un t-shirt confortable.', 'A powerful message on a comfortable t-shirt.', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', 'clothing', 1567, true),
('Hoodie "Love Wins"', '"Love Wins" Hoodie', 'Un hoodie confortable avec un message d''amour.', 'A comfortable hoodie with a message of love.', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500', 'clothing', 2034, true);

INSERT INTO coming_items (title, title_en, description, description_en, image, release_date) VALUES
('Collection Été 2026', 'Summer 2026 Collection', 'Une collection estivale audacieuse.', 'A bold summer collection.', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', '2026-06-01');
```

### Étape 3: Récupérer les clés API
1. Dans Supabase, aller dans **Settings** > **API**
2. Copier les valeurs suivantes :
   - **Project URL** : `https://xxxxx.supabase.co`
   - **anon public key** : `eyJhbGciOiJIUzI1NiIsInR5cCI6...`

### Étape 4: Configurer Vercel
1. Dans Vercel, aller dans votre projet > **Settings** > **Environment Variables**
2. Ajouter ces 2 nouvelles variables :

| Name | Value |
|------|-------|
| `VITE_SUPABASE_URL` | `https://xxxxx.supabase.co` (votre URL) |
| `VITE_SUPABASE_ANON_KEY` | `eyJxxxxx...` (votre clé anon) |

3. Cliquer **"Save"**
4. Aller dans **Deployments** > Cliquer sur les "..." du dernier déploiement > **Redeploy**

### Vérification
Une fois redéployé, le site utilisera automatiquement Supabase au lieu du localStorage !
- Les votes seront partagés entre tous les visiteurs
- Les données admin seront persistantes
- Vous pouvez voir les données dans Supabase > Table Editor

---

## Annexe B: Configuration Cloudinary (Upload d'images - OPTIONNEL)

Cloudinary permet aux administrateurs de téléverser des images par glisser-déposer.

### Étape 1: Créer un compte Cloudinary (GRATUIT)
1. Aller sur https://cloudinary.com/users/register_free
2. Créer un compte (email ou Google)
3. Compléter le profil

### Étape 2: Configurer l'upload
1. Dans le Dashboard Cloudinary, noter votre **Cloud Name** (ex: `dxxxxx`)
2. Aller dans **Settings** > **Upload**
3. Défiler jusqu'à **Upload presets**
4. Cliquer **"Add upload preset"**
5. Configurer :
   - **Upload preset name**: `bfit-uploads`
   - **Signing Mode**: `Unsigned` (important!)
   - **Folder**: `bfit-votes`
6. Cliquer **"Save"**

### Étape 3: Configurer Vercel
1. Dans Vercel > **Settings** > **Environment Variables**
2. Ajouter ces 2 variables :

| Name | Value |
|------|-------|
| `VITE_CLOUDINARY_CLOUD_NAME` | `dxxxxx` (votre Cloud Name) |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | `bfit-uploads` |

3. Redéployer le site

### Utilisation
Dans l'interface admin, le champ image aura maintenant 2 onglets :
- **URL** : Coller une URL d'image existante
- **Téléverser** : Glisser-déposer une image de votre ordinateur

---

## Annexe C: Récapitulatif des variables d'environnement

| Variable | Obligatoire | Description |
|----------|-------------|-------------|
| `VITE_BIGCOMMERCE_STORE_HASH` | Oui | Hash de la boutique BigCommerce |
| `VITE_BIGCOMMERCE_CLIENT_ID` | Oui | ID client API BigCommerce |
| `VITE_BIGCOMMERCE_ACCESS_TOKEN` | Oui | Token d'accès BigCommerce |
| `VITE_BIGCOMMERCE_API_URL` | Oui | URL de l'API BigCommerce |
| `VITE_SUPABASE_URL` | Recommandé | URL du projet Supabase |
| `VITE_SUPABASE_ANON_KEY` | Recommandé | Clé anonyme Supabase |
| `VITE_CLOUDINARY_CLOUD_NAME` | Optionnel | Nom du cloud Cloudinary |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | Optionnel | Preset d'upload Cloudinary |

---

## Checklist de déploiement

- [ ] Code poussé sur GitHub
- [ ] Projet créé sur Vercel
- [ ] 4 variables d'environnement configurées
- [ ] Déploiement réussi (site accessible)
- [ ] Domaine configuré (DNS)
- [ ] SSL actif (https)
- [ ] Test de l'interface admin
- [ ] Test des votes
- [ ] Test de l'affichage des produits BigCommerce
- [ ] Guide client envoyé

---

## Contact Support

Pour toute question technique :
- Email : [votre-email]
- Téléphone : [votre-numéro]

---

*Document créé le 19 janvier 2026*
*Version 1.0 - BFIT Deployment Guide*
