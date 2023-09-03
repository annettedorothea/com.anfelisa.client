const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './es6/src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },


    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: 'ServiceWorker.js'},
                {from: 'settings.json'},
                {from: path.resolve(__dirname, "manifest"), to: path.resolve(__dirname, "dist/manifest")},
            ]
        })
    ]
};