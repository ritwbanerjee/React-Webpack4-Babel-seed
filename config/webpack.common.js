const webpack = require('webpack'),
      HtmlWebPackPlugin = require('html-webpack-plugin'),
      helpers = require('./helpers'),
      path = require('path'),
      env = require('dotenv').config(); // Alternative way to provide global configs through a .env file

console.log('=============================================================');
console.log('ENVIRONMENT: ', process.env.ENV);

module.exports = {
  module: {
    rules: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
