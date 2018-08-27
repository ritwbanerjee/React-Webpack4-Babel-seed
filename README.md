# React boilerplate with Webpack v4

A simple react boilerplate with Webpack v4 as module bundler and Babel for ES6 compilation

## Instructions

1.  Clone this repo
2.  Run `npm install`
3.  Run `npm start` and open `http://localhost:3000` once the compilation is complete

## Webpack Config:

* Locate the config folder in the root of your project
* The Webpack configs are present in 3 files viz:

1. webpack.dev.js - Webpack Configurations for Development ENVIRONMENT
2. Webpack.prod.js - Webpack Configurations for Production ENVIRONMENT
3. Webpack.common.js - Webpack configurations which are to be used across the Dev and Prod mode

## Commands

1. `npm install` - This will auto install all your dependencies
2. `npm run postinstall` - This will automatically run once your dependancies are installed. In Production you only need to run npm install which in turn will auto generate your production build which will be ready to be served
3. `npm run start` - This will run the application in development mode.
4. `npm run build` - This will run Webpack in Production mode and generate the Dist folder. This can then be served by the server of your choice
5. `npm run minify` - This will run the uglifyJS plugin to minify the Output file and compress it to enhance performance.
6. `npm run bundle-report` - This will run webpack build analyzer and generate a detailed report of your node modules in use. This will help in performance optimization

## Important note:

In Real world scenarios, to define project environment configurations, you will want to have the environment related variables at the root of your project in a file called .env

You can set that variable in the global scope by doing the following:

1. Require the .env file at the top of webpack.dev.js or webpack.prod.js by:
`env = require('dotenv').config();`
2. Set the environment in the global scope by doing the following:
`plugins: [new webpack.DefinePlugin({'process.env': {'ENV': }})]`


