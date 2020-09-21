const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const wevpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.base.cong.js');

module.exports = wevpackMerge(baseConfig,{
    plugins:[
        new UglifyJsPlugin(),
    ]
})