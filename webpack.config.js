import webpack from 'webpack';
import path from 'path';

import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.load();
}

export default {
  module: {
    loaders: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=/[hash].[ext]'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true }
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`,
        AUTH_DOMAIN: `"${process.env.AUTH_DOMAIN}"`,
        AUTH_CLIENT_ID: `"${process.env.AUTH_CLIENT_ID}"`
      }
    })
  ],

  context: path.join(__dirname, 'src'),

  entry: {
    app: ['./js/app']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  externals:  [/^vendor\/.+\.js$/],

  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }

};
