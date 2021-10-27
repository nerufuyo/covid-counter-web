const path = require('path');

module.exports = {
    entry : './assets/index.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader'
                    }
                ]
            },
            {
                test : /\.(gif|png|jpe?g|svg)$/i,
                loader : 'file-loader',
                options : {
                    name: 'image/[name].[ext]',
                }
            }
        ]
    },
};