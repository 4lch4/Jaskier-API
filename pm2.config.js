const cfg = require('./src/utils/config')

module.exports = {
  apps: [
    {
      name: cfg.appName,
      script: './src/index.js',
      watch: false,
      env: { PORT: 8080, NODE_ENV: 'development' }
    }
  ]
}
