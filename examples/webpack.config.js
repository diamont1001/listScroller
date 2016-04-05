// webpack.config.js
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // Html文件处理

module.exports = {
    entry: {
        Index: './index.js'
    },
    output: {
        path: 'release', // This is where images & js will go
        publicPath: 'file:///E:/GitHub/diamont1001/listScroller/examples/release', // This is used to generate URLs to e.g. images
        filename: '[name].js',
        chunkFilename: "[id].chunk.js"
    },
    plugins: [
        new HtmlWebpackPlugin({filename: 'index.html', template: 'index.html', chunks: ['Index'], hash: true})
    ],

    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader', // ES6
                exclude: /(node_modules|libs|ppweb\\libs\\webpack)/
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    name: '[path][name].[ext]?[hash:8]',
                    limit: 8192 // inline base64 URLs for <=8k images, direct URLs for the rest
                }
            }
        ]
    },
    resolve: {
        alias: {
        },
        // 现在可以写 require('file') 代替 require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    }
};