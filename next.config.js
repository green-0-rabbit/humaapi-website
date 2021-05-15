// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      // eslint-disable-next-line no-param-reassign
      config.node = { fs: 'empty', module: 'empty' };
    }
    return config;
  }
};

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    images: {
      // for example
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico']
    }
  }],

  // your other plugins here

], nextConfig);
