const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {
  const safeUrl = (req.url || "/").split("?")[0];

  if (safeUrl === "/health") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ status: "ok", club: "Wimborne Wayfarers Hockey Club" }));
    return;
  }

  const relativePath = safeUrl === "/" ? "index.html" : decodeURIComponent(safeUrl.replace(/^\/+/, ""));
  const filePath = path.resolve(ROOT, relativePath);

  // Prevent directory traversal outside ROOT
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("403 Forbidden");
    return;
  }

  fs.stat(filePath, (statErr, stats) => {
    const targetFile = !statErr && stats.isFile() ? filePath : path.join(ROOT, "index.html");
    const isFallback = targetFile !== filePath && safeUrl !== "/";

    // Return 404 for missing asset files (.jpg, .png, .css, .js) rather than HTML fallback
    if (isFallback && path.extname(filePath)) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 Asset Not Found");
      return;
    }

    fs.readFile(targetFile, (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("500 Internal Server Error");
        return;
      }

      const ext = path.extname(targetFile).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";
      const cacheControl = ext === ".html" ? "no-cache" : "public, max-age=86400";

      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": cacheControl,
        "X-Content-Type-Options": "nosniff"
      });
      res.end(content);
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log(`🏑 Wimborne Wayfarers HC server listening on http://${HOST}:${PORT}`);
});

module.exports = server;
