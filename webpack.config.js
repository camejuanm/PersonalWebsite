
const path = require('path')
const loader = require('sass-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool:'eval-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
             }
        ]
    },
    plugins : [
        //configs for plugins
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/html/index.html',
            filename: 'index.html'
        })
    ]
}