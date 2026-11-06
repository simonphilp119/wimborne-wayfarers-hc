const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const srcDir = path.join(rootDir, 'src');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

console.log('Building Wimborne Wayfarers HC production bundle into dist/...');

// Clean and recreate dist/, public/, src/
if (fs.existsSync(distDir)) fs.rmSync(distDir, { recursive: true, force: true });
if (fs.existsSync(publicDir)) fs.rmSync(publicDir, { recursive: true, force: true });
if (fs.existsSync(srcDir)) fs.rmSync(srcDir, { recursive: true, force: true });

fs.mkdirSync(distDir, { recursive: true });
fs.mkdirSync(publicDir, { recursive: true });
fs.mkdirSync(srcDir, { recursive: true });

// Copy core web files to dist/
const filesToCopy = ['index.html', 'styles.css', 'client.js', 'manifest.json'];
for (const file of filesToCopy) {
  const srcFile = path.join(rootDir, file);
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, path.join(distDir, file));
  }
}

// Copy assets/ into dist/assets
copyRecursive(path.join(rootDir, 'assets'), path.join(distDir, 'assets'));

// Populate public/ and src/
fs.copyFileSync(path.join(rootDir, 'manifest.json'), path.join(publicDir, 'manifest.json'));
fs.copyFileSync(path.join(rootDir, 'assets', 'logo-big.png'), path.join(publicDir, 'logo-big.png'));
fs.copyFileSync(path.join(rootDir, 'styles.css'), path.join(srcDir, 'styles.css'));
fs.copyFileSync(path.join(rootDir, 'client.js'), path.join(srcDir, 'client.js'));

console.log('Production bundle created successfully in dist/.');
