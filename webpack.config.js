const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// "./assets/bootstrap-4.5.0-dist/jquery/jquery_3.5.1.js"
// const VENDOR_LIBS = [
//     "./assets/bootstrap-4.5.0-dist/js/popper.js",
//     "./assets/bootstrap-4.5.0-dist/js/bootstrap.js",
//     "./assets/angularjs/angular.min.js",
//     "./assets/angularjs/angular-route.min.js",
//     "./assets/angularjs/angular-sanitize.min.js",
//     "./assets/bootstrap-4.5.0-dist/css/bootstrap.min.css"
// ];

const webpackConfig = {
    entry: {
        bundle: './app.module.js'
        // vendor: VENDOR_LIBS
    },
    // entry: './app.module.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [{
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                // use: ['style-loader', 'css-loader'],
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                        loader: 'url-loader',
                        options: { limit: 40000 }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'src/index.html'
        })
    ],
    externals: {
        jquery: 'jQuery'
    }
}

module.exports = webpackConfig;