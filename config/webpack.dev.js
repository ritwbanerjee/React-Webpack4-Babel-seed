const webpackMerge = require('webpack-merge'),
      commonConfig = require('./webpack.common.js'),
      helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {

  devtool: 'inline-source-map', // Lets you debug your JS files in development mode

  output: {
    path: helpers.root('dist'),
    publicPath: '/', // Decides where to dump your dist folder
    filename: '[name].[hash].js', // Cache Buster - do not remove the [hash]
    chunkFilename: '[id].chunk.[hash].js' // Cache Buster - do not remove the [hash]
  },

  devServer: {
    clientLogLevel: 'none', // Turn off non-sense Logs when reloading the page
    historyApiFallback: true, // Tackle all 404s using your App router in index.js
    stats: 'minimal', // I hate long compilation logs to clutter my terminal!! :-) Feel free to remove this to know what is happening internally
    noInfo: true, // messages like the webpack bundle information that is shown when starting up and after each save, will be hidden
    hotOnly: false, // Enables Hot Module Replacement without page refresh as fallback in case of build failures.
    compress: true, // Compress everything using Gzip before serving
    port: 3000, // You can also configure this port number through your config file,
    after: function(app) {
      console.log('\nYour App is running @ http://localhost:3000');
      console.log('=============================================================');
    }
  }
});
