const Dotenv = require('dotenv-webpack'); // eslint-disable-line
const devEnv = process.env.NODE_ENV !== 'production';

module.exports = {
  target: 'serverless',
  experimental: {
    exportTrailingSlash: false
  },
  distDir: devEnv ? '.next' : '.next-production',
  pageExtensions: ['js'],
  generateBuildId: async () => 'unique-build',
  webpack: config => {
    config.plugins.push(
      new Dotenv({
        path: devEnv ? './.development.env' : './.production.env'
      })
    );
    return config;
  }
};
