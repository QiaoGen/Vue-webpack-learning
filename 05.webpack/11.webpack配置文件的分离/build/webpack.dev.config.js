
const wevpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.base.cong.js');

module.exports = wevpackMerge(baseConfig,{
    devServer:{
        contentBase: './dist',
        inline: true
      }
})