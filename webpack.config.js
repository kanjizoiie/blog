import path from 'path';
import { webpack } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  experiments: {
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.(scss|css)$/,
        type: 'javascript/auto',
        dependency: { not: ['url'] },
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  'postcss-preset-env',
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset',
      },
    ],
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
  },

  devServer: {
    port: 5000,
    static: path.join(__dirname, 'public/'),
    historyApiFallback: true,
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Blog',
      inject: true,
      template: path.join(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
