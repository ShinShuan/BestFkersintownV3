const fs = require('fs');
const path = require('path');

// Fonction pour copier un fichier
function copyFile(sourcePath, destPath, fileName) {
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✅ Fichier ${fileName} copié vers dist/`);
    } else {
      console.log(`⚠️  Fichier ${fileName} non trouvé dans public/`);
    }
  } catch (error) {
    console.error(`❌ Erreur lors de la copie du fichier ${fileName}:`, error);
  }
}

// Copier .htaccess vers le dossier dist
const htaccessSource = path.join(__dirname, 'public', '.htaccess');
const htaccessDest = path.join(__dirname, 'dist', '.htaccess');
copyFile(htaccessSource, htaccessDest, '.htaccess');

// Copier web.config vers le dossier dist
const webConfigSource = path.join(__dirname, 'public', 'web.config');
const webConfigDest = path.join(__dirname, 'dist', 'web.config');
copyFile(webConfigSource, webConfigDest, 'web.config');
