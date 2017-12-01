const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const WebpackNotifier = require("webpack-notifier");


const config = {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        stats: {
            modules: false
        },
        historyApiFallback: true
    },
    plugins: [
        new WebpackNotifier({
            title: "Gousto Tech Test",
            excludeWarnings: true,
            contentImage: path.join(__dirname, "logo.png"),
            alwaysNotify: true
        })
    ]
};

module.exports = merge(baseConfig, config);