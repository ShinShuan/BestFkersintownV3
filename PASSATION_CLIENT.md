# Document de Passation - BFIT (BestF.kersInTown)

## Introduction

Ce document contient toutes les informations nécessaires pour que vous puissiez gérer votre boutique BFIT de manière **100% autonome**, sans dépendre d'un développeur.

Tous les services utilisés sont **gratuits** ou ont des plans gratuits largement suffisants.

---

## 1. Vos Comptes et Accès

### Comptes à créer (VOUS devez les créer)

| Service | URL | Usage | Coût |
|---------|-----|-------|------|
| **GitHub** | https://github.com | Code source | Gratuit |
| **Vercel** | https://vercel.com | Hébergement site | Gratuit |
| **Supabase** | https://supabase.com | Base de données votes | Gratuit (500MB) |
| **Cloudinary** | https://cloudinary.com | Stockage images | Gratuit (25GB) |
| **Registrar domaine** | OVH, Gandi, etc. | Nom de domaine | ~10-15€/an |

### Pourquoi ces comptes doivent être à VOTRE nom

1. **Propriété** : Vous êtes propriétaire de tout
2. **Continuité** : Si vous changez de développeur, tout reste accessible
3. **Facturation** : Vous contrôlez les coûts (même si gratuits)
4. **Sécurité** : Vous contrôlez les accès

---

## 2. Informations de Connexion à Sauvegarder

### BigCommerce (votre boutique e-commerce)
```
Store Hash: qdy1j8i5vg
Client ID: s7rw6slm5do6a9dyd7a1px12ln9wcyl
Access Token: ehi1veygrjzpisslheidxg8slbl7vbl
URL API: https://api.bigcommerce.com/stores/qdy1j8i5vg/v3
```

### Supabase (à remplir après création)
```
URL du projet: https://____________.supabase.co
Clé anonyme (anon key): ________________________________
Mot de passe DB: ________________________________
```

### Cloudinary (à remplir après création)
```
Cloud Name: ________________________________
Upload Preset: bfit-uploads
```

### Vercel (à remplir après création)
```
URL du projet: https://____________.vercel.app
Domaine personnalisé: https://www.________________.com
```

### GitHub (à remplir après création)
```
Repository: https://github.com/____________/bfit-store
```

---

## 3. Variables d'Environnement Vercel

Ces variables doivent être configurées dans Vercel > Settings > Environment Variables :

```
# BigCommerce (OBLIGATOIRE)
VITE_BIGCOMMERCE_STORE_HASH=qdy1j8i5vg
VITE_BIGCOMMERCE_CLIENT_ID=s7rw6slm5do6a9dyd7a1px12ln9wcyl
VITE_BIGCOMMERCE_ACCESS_TOKEN=ehi1veygrjzpisslheidxg8slbl7vbl
VITE_BIGCOMMERCE_API_URL=https://api.bigcommerce.com/stores/qdy1j8i5vg/v3

# Supabase (RECOMMANDÉ - pour votes persistants)
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxxxx

# Cloudinary (OPTIONNEL - pour upload d'images)
VITE_CLOUDINARY_CLOUD_NAME=xxxxx
VITE_CLOUDINARY_UPLOAD_PRESET=bfit-uploads
```

---

## 4. Guide de Création des Comptes

### 4.1 Créer un compte GitHub

1. Aller sur https://github.com/signup
2. Utiliser votre email professionnel
3. Choisir un nom d'utilisateur (ex: `bfit-store`)
4. Valider l'email

### 4.2 Créer un compte Vercel

1. Aller sur https://vercel.com/signup
2. **Cliquer "Continue with GitHub"** (recommandé)
3. Autoriser Vercel à accéder à GitHub
4. Votre compte est prêt !

### 4.3 Créer un compte Supabase

1. Aller sur https://supabase.com
2. Cliquer "Start your project"
3. **Se connecter avec GitHub** (recommandé)
4. Créer un nouveau projet :
   - Name: `bfit-votes`
   - Password: [GÉNÉRER UN MOT DE PASSE FORT ET LE NOTER]
   - Region: Frankfurt (ou la plus proche)
5. Attendre 2 minutes
6. Noter l'URL et la clé anon (Settings > API)

### 4.4 Créer un compte Cloudinary

1. Aller sur https://cloudinary.com/users/register_free
2. Créer un compte avec votre email
3. Dans le Dashboard, noter le "Cloud Name"
4. Aller dans Settings > Upload > Upload presets
5. Cliquer "Add upload preset"
6. Configurer :
   - Name: `bfit-uploads`
   - Signing Mode: `Unsigned`
   - Folder: `bfit-votes`
7. Sauvegarder

---

## 5. Structure du Projet

```
BestFkersintownV3/
├── src/                    # Code source React
│   ├── components/         # Composants réutilisables
│   ├── pages/              # Pages du site
│   ├── services/           # Services (BigCommerce, votes, etc.)
│   └── App.tsx             # Point d'entrée
├── api/                    # API serverless (Vercel)
├── public/                 # Fichiers statiques
├── package.json            # Dépendances
├── vercel.json             # Configuration Vercel
└── *.md                    # Documentation
```

---

## 6. Opérations Courantes

### Accéder à l'administration des votes
```
https://votre-domaine.com/?admin=true
```

### Modifier le site (si vous avez des compétences techniques)

1. Cloner le repository :
   ```bash
   git clone https://github.com/VOTRE_COMPTE/bfit-store.git
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer en local :
   ```bash
   npm run dev
   ```

4. Faire vos modifications

5. Déployer :
   ```bash
   git add .
   git commit -m "Description des modifications"
   git push
   ```
   Vercel déploie automatiquement !

### Voir les données de votes (Supabase)
1. Aller sur https://supabase.com
2. Sélectionner votre projet
3. Cliquer "Table Editor"
4. Voir les tables `vote_items`, `user_votes`, `coming_items`

### Voir les images uploadées (Cloudinary)
1. Aller sur https://cloudinary.com
2. Cliquer "Media Library"
3. Ouvrir le dossier `bfit-votes`

---

## 7. Coûts Mensuels Estimés

| Service | Plan | Limites | Coût |
|---------|------|---------|------|
| **Vercel** | Hobby | 100GB bande passante | **GRATUIT** |
| **Supabase** | Free | 500MB base de données | **GRATUIT** |
| **Cloudinary** | Free | 25GB stockage | **GRATUIT** |
| **GitHub** | Free | Illimité | **GRATUIT** |
| **Domaine** | - | - | **~10-15€/an** |

**Total estimé : ~10-15€/an** (uniquement le domaine)

---

## 8. En Cas de Problème

### Le site ne fonctionne plus
1. Vérifier Vercel : https://vercel.com (voir les logs)
2. Vérifier que les variables d'environnement sont correctes

### Les votes ne s'enregistrent plus
1. Vérifier Supabase : https://supabase.com
2. Vérifier que le projet est actif (pas en pause)
3. Vérifier les variables `VITE_SUPABASE_*` dans Vercel

### Les images ne s'affichent plus
1. Vérifier Cloudinary : https://cloudinary.com
2. Vérifier que les images existent dans Media Library

### Besoin d'un développeur
Avec ce document et le code source, n'importe quel développeur React/TypeScript peut reprendre le projet.

---

## 9. Contacts Utiles

### Support des services

| Service | Support |
|---------|---------|
| Vercel | https://vercel.com/help |
| Supabase | https://supabase.com/docs |
| Cloudinary | https://support.cloudinary.com |
| BigCommerce | https://support.bigcommerce.com |

### Développeur initial
```
Nom: [VOTRE NOM]
Email: [VOTRE EMAIL]
Téléphone: [VOTRE TÉLÉPHONE]
```

---

## 10. Checklist de Passation

- [ ] Client a créé son compte GitHub
- [ ] Client a créé son compte Vercel (connecté à GitHub)
- [ ] Client a créé son compte Supabase
- [ ] Client a créé son compte Cloudinary
- [ ] Code transféré sur le GitHub du client
- [ ] Projet importé dans Vercel du client
- [ ] Variables d'environnement configurées
- [ ] Domaine configuré et fonctionnel
- [ ] Test de l'interface admin
- [ ] Test des votes
- [ ] Test de l'upload d'images
- [ ] Client a reçu ce document complété
- [ ] Client a testé l'accès à tous les services
- [ ] Mots de passe stockés de manière sécurisée par le client

---

## 11. Transfert du Projet

### Si le code est actuellement sur VOTRE GitHub

**Option A : Transférer le repository**
1. GitHub > Votre repo > Settings > Danger Zone > Transfer
2. Entrer le nom d'utilisateur GitHub du client
3. Le client accepte le transfert

**Option B : Fork vers le compte client**
1. Le client fork votre repository
2. Il importe ce fork dans son Vercel
3. Vous pouvez supprimer votre version originale

### Mettre à jour Vercel
1. Le client va dans Vercel > Settings > Git
2. Il connecte SON repository GitHub
3. Il reconfigure les variables d'environnement
4. Il redéploie

---

*Document créé le 19 janvier 2026*
*BFIT - BestF.kersInTown*
*Version 1.0*
