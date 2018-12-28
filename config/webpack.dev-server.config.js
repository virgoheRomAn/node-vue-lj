'use strict'
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const utils = require('./utils');
const webpackBaseConfig = require('./webpack.base.config');

const webpackDevConfig = Object.assign(webpackBaseConfig, {
  entry: {
    app: path.join(__dirname, '../src/index.js'),
    vendor: ['vue', 'vue-router', 'jquery', 'iview', 'axios']
  },
  devtool: '#source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') },
      ],
    },
    hot: true,
    contentBase: false,
    compress: true,
    host: '127.0.0.1',
    port: "8080",
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '/api' }
      }
    },
    quiet: true,
    watchOptions: {
      poll: false,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../index.html',
      inject: true
    })
  ]
});

module.exports = webpackDevConfig;


