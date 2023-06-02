const path = require('path');

const loader = require('sass-loader');

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {

    entry: './src/js/main.js',

    output: {

      filename: '[name].[contenthash].js',

      path: path.resolve(__dirname, 'dist'),

      clean: true,

      assetModuleFilename: "assets/images/[name].[hash][ext]",

    },

    module: {

      rules: [

        // {

        //   test: /\.(s(a|c)ss)$/,

        //   use: ['style-loader', 'css-loader', 'sass-loader']

        // },

        {

          test: /\.(png|jpe?g|gif|svg)$/i,

          type: 'asset/resource'

      },

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