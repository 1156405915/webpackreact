const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 创建多个实例
const extractCSS = new ExtractTextPlugin('[name]-boundle.css');
const extractSCSS = new ExtractTextPlugin('[name]-boundle.css');

module.exports={ 
    mode:'development',
    entry:'./src/app.jsx',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'appboundle.js'
    },
    module:{
        rules:[
            {
                test:/\.jsx$/,
                exclude:/(mode_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            // {
            //     test:/\.css$/,
            //     use: extractCSS.extract({
            //         fallback: "style-loader",
            //         use: "css-loader"
            //     })
            // },
            {
                test:/\.scss$/,
                use: extractSCSS.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react',
            template:'./src/index.html'
        }),
        extractCSS,
        extractSCSS
    ]
}