const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      app: path.resolve(__dirname, 'frontend/src/app'),
    };
    return config;
  },
};
