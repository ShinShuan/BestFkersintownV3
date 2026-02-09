# Guide de Déploiement - Hostinger

## Problème résolu : Erreur 404 sur les routes React Router

### Le problème
Lors du déploiement sur Hostinger, les routes comme `/cart`, `/products`, etc. retournaient une erreur 404 "page does not exist".

### La cause
- L'application utilise React Router (routing côté client)
- Le serveur web d'Hostinger ne sait pas gérer les routes SPA
- Quand vous accédez directement à `https://votresite.com/cart`, le serveur cherche un fichier physique
- Comme ce fichier n'existe pas, il retourne une erreur 404

### La solution
Nous avons ajouté des fichiers de configuration serveur pour rediriger toutes les requêtes vers `index.html` :

#### 1. Fichier `.htaccess` (pour Apache)
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### 2. Fichier `web.config` (pour IIS)
```xml
<rewrite>
  <rules>
    <rule name="React Router" stopProcessing="true">
      <match url=".*" />
      <conditions logicalGrouping="MatchAll">
        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
      </conditions>
      <action type="Rewrite" url="/" />
    </rule>
  </rules>
</rewrite>
```

## Instructions de déploiement

### 1. Construire l'application
```bash
npm run build
```

### 2. Uploader les fichiers
Uploadez **tout le contenu** du dossier `dist/` vers la racine de votre site Hostinger :
- `index.html`
- `assets/` (dossier complet)
- `.htaccess`
- `web.config`

### 3. Vérifier la configuration
- Assurez-vous que les fichiers `.htaccess` et `web.config` sont bien présents à la racine
- Vérifiez que le module `mod_rewrite` est activé sur votre hébergement Hostinger

### 4. Tester les routes
Testez maintenant les routes suivantes :
- `https://votresite.com/cart`
- `https://votresite.com/products`
- `https://votresite.com/account`
- etc.

## Optimisations incluses

### Code Splitting
L'application utilise maintenant le code splitting pour améliorer les performances :
- `vendor-*.js` : React et React DOM
- `router-*.js` : React Router
- `ui-*.js` : Framer Motion et Lucide React
- `index-*.js` : Code de l'application

### Headers de sécurité
- Protection XSS
- Protection contre le clickjacking
- Headers de sécurité supplémentaires

### Compression et cache
- Compression Gzip activée
- Cache optimisé pour les assets statiques

## Dépannage

### Si les routes ne fonctionnent toujours pas :
1. Vérifiez que le fichier `.htaccess` est bien uploadé
2. Contactez le support Hostinger pour activer `mod_rewrite`
3. Essayez d'ajouter `RewriteBase /` dans le `.htaccess`

### Si vous utilisez un sous-dossier :
Modifiez le `.htaccess` :
```apache
RewriteBase /votre-sous-dossier/
```

## Support
Si vous rencontrez des problèmes, vérifiez :
1. Les logs d'erreur dans le panneau Hostinger
2. La console du navigateur pour les erreurs JavaScript
3. Que tous les fichiers sont bien uploadés
