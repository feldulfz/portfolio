const { environment } = require('./src/environment/environment');

const PROXY_CONFIG = {
  "/api": {
    target: "https://openrouter.ai",
    secure: true,
    changeOrigin: true,
    pathRewrite: { "^/api": "/api" },
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${environment.modelApiKey}`
    }
  }
};

module.exports = PROXY_CONFIG;