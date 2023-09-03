const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TransformJson = require('transform-json-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'DEV Anfelisa',
            script: './bundle.js',
            template: 'index.html'
        }),
        new TransformJson({
            filename: 'settings.json',
            source: __dirname + "/settings.json",
            object: {
                clientVersion: 'development',
                mode: 'dev'
            }
        })
    ],
    devServer: {
        static: path.resolve(__dirname, './dist'),
        proxy: {
            '/api/': {
                target: 'http://localhost:8088/',
            },
        }
    },
});