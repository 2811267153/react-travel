const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://b.zhutix.com/',
      changeOrigin: true,
    })
  );
};
