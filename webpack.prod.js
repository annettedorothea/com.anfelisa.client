const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TransformJson = require('transform-json-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './build/' + require("./package.json").version),
        filename: `anfelisa_${require("./package.json").version}.js`,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "manifest"),
                    to: path.resolve(__dirname, './build/' + require("./package.json").version + "/manifest")
                },
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Anfelisa',
            template: 'index.html'
        }),
        new TransformJson({
            filename: 'settings.json',
            source: __dirname + "/settings.json",
            object: {
                clientVersion: require("./package.json").version,
                mode: 'live'
            }
        })
    ]

});