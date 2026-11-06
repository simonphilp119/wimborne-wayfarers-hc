import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Enable Gzip compression
app.use(compression());

// Serve from 'dist' if built, otherwise serve from project root
const staticDir = fs.existsSync(path.join(__dirname, 'dist', 'index.html'))
  ? path.join(__dirname, 'dist')
  : __dirname;

app.use(express.static(staticDir, {
  setHeaders: (res, filepath) => {
    const filename = path.basename(filepath);
    if (filename === 'sw.js' || filename === 'manifest.json') {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// SPA Routing: Redirect all non-file requests to index.html
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🏑 Wimborne Wayfarers HC is running on port ${PORT}`);
  console.log(`Serving from: ${staticDir}`);
});
