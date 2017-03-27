// This is the webpack config used for unit tests.

// TODO utils style loader
// var utils = require('./utils')
var webpack = require('webpack')
config = require('../config')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
cssUtils = require('./css-utils')
var webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    // rules: utils.styleLoaders()
    rules: cssUtils.styleRules({
      sourceMap: config.dev.cssSourceMap,
      postcss: true
    })
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ]
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
