# 🔧 Configuration Google OAuth pour résoudre l'erreur 404

## 🚨 **PROBLÈME IDENTIFIÉ**
L'erreur 404 lors de la connexion Google est causée par une mauvaise configuration des URLs de redirection dans Google Console.

## 📋 **ÉTAPES DE CONFIGURATION**

### **1. Accéder à Google Cloud Console**
- Allez sur : https://console.cloud.google.com/
- Connectez-vous avec votre compte Google
- Sélectionnez votre projet ou créez-en un nouveau

### **2. Configurer les URLs autorisées**
- Dans le menu, allez à **"APIs & Services"** > **"Credentials"**
- Cliquez sur votre **OAuth 2.0 Client ID** : `29863726221-19tbfkbo0uhkh9t4e94813vpo6h71610.apps.googleusercontent.com`
- Dans la section **"Authorized JavaScript origins"**, ajoutez :
  ```
  http://localhost:3000
  http://localhost:3001
  http://localhost:3002
  http://localhost:3003
  http://localhost:3004
  http://localhost:3005
  http://localhost:3006
  http://localhost:3007
  http://localhost:3008
  http://localhost:3009
  ```

### **3. Configurer les URLs de redirection**
- Dans la section **"Authorized redirect URIs"**, ajoutez :
  ```
  http://localhost:3000/
  http://localhost:3000/account
  http://localhost:3001/
  http://localhost:3001/account
  http://localhost:3002/
  http://localhost:3002/account
  http://localhost:3003/
  http://localhost:3003/account
  http://localhost:3004/
  http://localhost:3004/account
  http://localhost:3005/
  http://localhost:3005/account
  http://localhost:3006/
  http://localhost:3006/account
  http://localhost:3007/
  http://localhost:3007/account
  http://localhost:3008/
  http://localhost:3008/account
  http://localhost:3009/
  http://localhost:3009/account
  ```

### **4. Pour la production**
- Ajoutez également votre domaine de production :
  ```
  https://votre-domaine.com
  https://votre-domaine.com/account
  ```

### **5. Sauvegarder**
- Cliquez sur **"Save"** pour enregistrer les modifications
- Attendez quelques minutes que les changements se propagent

## 🔄 **TEST APRÈS CONFIGURATION**

1. **Redémarrez votre serveur de développement** :
   ```bash
   npm run dev
   ```

2. **Testez la connexion Google** :
   - Allez sur `/account`
   - Cliquez sur "Continuer avec Google"
   - La popup Google devrait s'ouvrir sans erreur 404

## 🚨 **IMPORTANT**
- Les changements dans Google Console peuvent prendre 5-10 minutes à se propager
- Assurez-vous que votre Client ID est correct dans le fichier `.env`
- Vérifiez que l'API Google+ est activée dans votre projet Google Cloud

## 🔧 **SOLUTION ALTERNATIVE TEMPORAIRE**

Si vous ne pouvez pas configurer Google Console immédiatement, vous pouvez temporairement désactiver Google OAuth :

```typescript
// Dans ShopifyAuthForm.tsx, commentez le bouton Google
{/* 
<GoogleButton type="button" onClick={handleGoogleAuth} disabled={isLoading}>
  ...
</GoogleButton>
*/}
```
