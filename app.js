/**
 * Hostinger Node.js Entry Point Alias
 * Ensures that whether Hostinger starts `server.js` or `app.js`,
 * the Node.js HTTP server boots cleanly.
 */
module.exports = require("./server.js");
