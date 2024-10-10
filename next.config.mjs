/** @type {import('next').NextConfig} */
// const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Allow images from localhost
  },
  // output: 'export',
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    // Example: Adding a custom loader
    config.module.rules.push({
      test: /\.html$/,
      use: 'html-loader',
    });

    // Adding jQuery globally
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',   
        'window.jQuery': 'jquery',
      })
    );

    

    return config;
  },
};

export default nextConfig;
