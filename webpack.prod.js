const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');




module.exports = merge(common, {

    mode: "production",

    devtool: 'source-map',

    module: {

        rules: [

          {

            test: /\.(s(a|c)ss)$/,

            use: [

              MiniCssExtractPlugin.loader,

              'css-loader',

              'sass-loader',

            ],

          },

        ],

      },

      plugins: [

        new MiniCssExtractPlugin({

          filename: '[name].[contenthash].css',

          chunkFilename: "[id].[contenthash].css",

        }),

      ]

});