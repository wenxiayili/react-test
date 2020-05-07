const merge = require('webpack-merge');
const Env = require('./build/env');
const baseConfig = require('./build/webpack.base.config');
const devConfig = require('./build/webpack.dev.config');
const proConfig = require('./build/webpack.prod.config');

let config = devConfig;

if (Env.isQA() || Env.isProduction()) {
  config = proConfig;
}

module.exports = merge(baseConfig, config);
