const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  commonConfig = require('./webpack.common.js'),
  helpers = require('./helpers'),
  CompressionPlugin = require("compression-webpack-plugin"),
  OptimizeJsPlugin = require('optimize-js-plugin');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js', // Cache Buster - do not remove the [hash]
    chunkFilename: '[id].chunk.[hash].js' // Cache Buster - do not remove the [hash]
  },
  optimization: {
    minimize: true,
    noEmitOnErrors: true,
    namedModules: true,
    namedChunks: true,
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    flagIncludedChunks: true,
    occurrenceOrder: true,
    concatenateModules: true
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'ENV': 'production'
        }
    }),
    new OptimizeJsPlugin({
      'sourceMap': false
    }),
    new CompressionPlugin({ // Generating a Gzipped file as well which can be served to enhance performance
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
});
