// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    images: {
      // for example
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico']
    }
  }],

  // your other plugins here

]);
