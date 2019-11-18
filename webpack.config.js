const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={ 
    mode:'development',
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'appboundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(mode_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react',
            template:'./src/index.html'
        })
    ]
}