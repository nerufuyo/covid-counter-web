const HtmlWebpackPlugin = require('html-webpack-plugin')  
const { merge } = require('webpack-merge')  
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  
const common = require('./webpack.common')  

module.exports = merge(common, {
    mode : 'production',
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : '/node_modules/',
                use : [
                    {
                        loader : 'babel-loader',
                        options : {
                            presets : ['@babel/preset-env']
                        }
                    }
                ]
            },
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './assets/index.html',
            filename : 'index.html',
        }),
        new CleanWebpackPlugin(),
    ]
})  