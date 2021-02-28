const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: { name: 'img/[name].[ext]' }
              },
            ],
          },
          {
            test: /\.scss$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              'css-loader',
              'sass-loader'
            ],
          },
        ]
      },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html'
    }),
    new Dotenv(),
  ],
}