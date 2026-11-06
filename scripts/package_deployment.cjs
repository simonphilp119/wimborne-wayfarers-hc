const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');

async function createDeploymentZip() {
  const rootDir = path.resolve(__dirname, '..');
  const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
  const version = pkg.version || '1.0.1';
  const zipFileName = `Wimborne_Wayfarers_v${version}_Deployment.zip`;
  const outputPath = path.join(rootDir, zipFileName);

  console.log(`Packaging Wimborne Wayfarers HC v${version} for Hostinger Node.js deployment...`);

  const distPath = path.join(rootDir, 'dist');
  if (!fs.existsSync(distPath)) {
    console.error('Error: dist/ directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  const zip = new JSZip();

  function addFolderToZip(folderPath, zipFolder) {
    const items = fs.readdirSync(folderPath);
    for (const item of items) {
      const fullPath = path.join(folderPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        const subZip = zipFolder.folder(item);
        addFolderToZip(fullPath, subZip);
      } else {
        const content = fs.readFileSync(fullPath);
        zipFolder.file(item, content);
      }
    }
  }

  // 1. Add directories (including scripts/ so Hostinger's "npm run build" finds scripts/build.cjs)
  const directoriesToInclude = ['src', 'public', 'dist', 'scripts'];
  for (const dir of directoriesToInclude) {
    const fullDirPath = path.join(rootDir, dir);
    if (fs.existsSync(fullDirPath)) {
      console.log(`Adding ${dir}/...`);
      const dirZip = zip.folder(dir);
      addFolderToZip(fullDirPath, dirZip);
    }
  }

  // 2. Add individual root files
  const rootFiles = [
    'index.html',
    'styles.css',
    'client.js',
    'manifest.json',
    'server.js',
    'package.json',
    'package-lock.json'
  ];

  for (const file of rootFiles) {
    const fullFilePath = path.join(rootDir, file);
    if (fs.existsSync(fullFilePath)) {
      console.log(`Adding ${file}...`);
      zip.file(file, fs.readFileSync(fullFilePath));
    }
  }

  console.log('Generating ZIP archive...');
  const buffer = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });

  fs.writeFileSync(outputPath, buffer);
  const sizeMB = (buffer.length / (1024 * 1024)).toFixed(2);
  console.log(`Successfully created ${zipFileName} (${sizeMB} MB)`);
}

createDeploymentZip().catch(err => {
  console.error('Failed to create deployment zip:', err);
  process.exit(1);
});
