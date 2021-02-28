const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    output: {
        sourceMapFilename: "bundle.js.map"
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        })
    ],
    devtool: "source-map",
    optimization: {
        minimize: false
    },
});
