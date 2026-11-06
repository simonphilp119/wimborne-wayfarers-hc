# Hostinger Node.js Deployment Guide — Wimborne Wayfarers HC

This document captures the configuration for deploying the Wimborne Wayfarers Hockey Club web app to **Hostinger Node.js** via ZIP upload.

## 1. Generating the Deployment ZIP
Run:
```bash
npm run package
```
This builds `dist/` and creates `Wimborne_Wayfarers_v1.0.0_Deployment.zip` in the project root.

## 2. File Structure (ZIP Contents)
The deployment ZIP is a **Source + Build** package matching your `SCHT` and `KynstraScout` projects:
- **Included**:
  - `dist/` (Pre-built production assets served by Express)
  - `src/` & `public/` & `assets/` (Source code, manifest, and club images)
  - `index.html`, `styles.css`, `client.js`, `manifest.json`
  - `server.js` (Express + compression server for SPA routing)
  - `package.json` & `package-lock.json`
- **Excluded**:
  - `node_modules/`
  - `.env`
  - `.git/`
  - `*.zip` (Previous build archives)
