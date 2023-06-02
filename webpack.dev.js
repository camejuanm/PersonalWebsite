const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');




module.exports = merge(common, {

    mode: "development",

    devtool: 'eval-source-map',

    devServer: {

      static: './dist',

      compress: false,

      allowedHosts: "all",

      port: 3000,

    },

    watchOptions: {

      poll: 1000, // Check for changes every second

    },

    module: {

        rules: [

            {

                test: /\.(s(a|c)ss)$/,

                use: ['style-loader', 'css-loader', 'sass-loader']

              },

        ]

    }

  });