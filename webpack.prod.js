const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './lib/' + require("./package.json").version),
        filename: `anfelisa_${require("./package.json").version}.js`,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "fontawesome"),
                    to: path.resolve(__dirname, './lib/' + require("./package.json").version + "/fontawesome")
                },
                {
                    from: path.resolve(__dirname, "manifest"),
                    to: path.resolve(__dirname, './lib/' + require("./package.json").version + "/manifest")
                },
            ]
        })
    ]

});