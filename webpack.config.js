
const path = require('path');
const loader = require('sass-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "assets/images/[name].[hash][ext]",
  },
  devtool: 'eval-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
    },

    //   {
    //     test: /\.(gif|png|jpe?g)$/,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //         options: {
    //           name: '[name].[ext]',
    //           publicPath: 'assets',
    //           outputPath: 'assets/images',
    //           esModule: false
    //         }
    //       }
    //     ]
    //   },

      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/html/index.html',
      filename: 'index.html'
    })
  ]
};