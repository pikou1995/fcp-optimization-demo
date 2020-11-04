const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['zh-cn'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: pkg.name,
      meta: {
        description: pkg.description,
      },
    }),
    new BundleAnalyzerPlugin(),
  ],
}
