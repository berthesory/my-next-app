const path = require('path');

module.exports = {
  // Personnalisation du répertoire .next (optionnel)
  distDir: '.next',

  // Ajout d'alias pour simplifier les imports
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@components': path.resolve(__dirname, 'components'), // Alias pour les composants
      '@styles': path.resolve(__dirname, 'styles'),         // Alias pour les styles
    };
    return config;
  },
};
