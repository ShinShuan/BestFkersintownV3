import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import { execSync } from 'child_process';

const __dirname = path.resolve();
const THEME_DIR = path.join(__dirname, 'theme');
const DIST_DIR = path.join(__dirname, 'dist');
const ZIP_NAME = 'BFIT-Stencil-Theme.zip';

async function packTheme() {
    console.log('🚀 Starting Stencil Theme Packaging...');

    // 1. Build React App
    console.log('📦 Building React Application...');
    execSync('npm run build', { stdio: 'inherit' });

    // 2. Prepare Theme Assets
    console.log('🧹 Cleaning theme assets...');
    if (!fs.existsSync(path.join(THEME_DIR, 'assets/js'))) {
        fs.mkdirSync(path.join(THEME_DIR, 'assets/js'), { recursive: true });
    }

    // 3. Copy React bundles to Theme assets
    const assetsDir = path.join(DIST_DIR, 'assets');
    const themeJsDir = path.join(THEME_DIR, 'assets/js');
    const themeCssDir = path.join(THEME_DIR, 'assets/scss');

    if (!fs.existsSync(themeJsDir)) fs.mkdirSync(themeJsDir, { recursive: true });
    if (!fs.existsSync(themeCssDir)) fs.mkdirSync(themeCssDir, { recursive: true });

    const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
    const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));

    // Copy main JS
    const mainJs = jsFiles.find(f => f.startsWith('index-')) || jsFiles[0];
    if (mainJs) {
        fs.copyFileSync(path.join(assetsDir, mainJs), path.join(themeJsDir, 'app-bundle.js'));
        console.log(`✅ Copied JS: ${mainJs} -> theme/assets/js/app-bundle.js`);
    }

    // Copy main CSS
    const mainCss = cssFiles.find(f => f.startsWith('index-')) || cssFiles[0];
    if (mainCss) {
        fs.copyFileSync(path.join(assetsDir, mainCss), path.join(themeCssDir, 'theme-bundle.css'));
        console.log(`✅ Copied CSS: ${mainCss} -> theme/assets/scss/theme-bundle.css`);
    }

    // copy other assets (images, etc) if any
    const otherAssets = fs.readdirSync(assetsDir).filter(f => !f.endsWith('.js') && !f.endsWith('.css'));
    otherAssets.forEach(file => {
        fs.copyFileSync(path.join(assetsDir, file), path.join(THEME_DIR, 'assets', file));
    });

    // 4. Create ZIP
    console.log(`🤐 Creating ${ZIP_NAME}...`);
    const output = fs.createWriteStream(path.join(__dirname, ZIP_NAME));
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
        console.log(`✨ DONE! Theme packaged successfully: ${ZIP_NAME} (${archive.pointer()} bytes)`);
    });

    archive.pipe(output);

    // Add everything from theme directory
    archive.directory(THEME_DIR, false);

    await archive.finalize();
}

packTheme().catch(err => {
    console.error('❌ Error packaging theme:', err);
    process.exit(1);
});
