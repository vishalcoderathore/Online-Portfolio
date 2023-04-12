// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devServer = {
        hot: true,
        port: 3000,
      };
    }

    // Optional: add other webpack configurations as needed

    return config;
  },
};
