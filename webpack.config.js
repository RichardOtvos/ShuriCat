var path = require('path');
//var webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "game.js"
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    optional: ['runtime'],
                    stage: 0
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: "source-map"
};