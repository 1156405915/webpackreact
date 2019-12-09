const path = require('path')
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 创建多个实例
const extractCSS = new ExtractTextPlugin('css/[name]-[hash:7].css');
const extractSCSS = new ExtractTextPlugin('css/[name]-[hash:7].css');

module.exports={ 
    mode:'development', 
    entry:'./src/app.jsx',
    output:{ 
        path:path.resolve(__dirname,'dist'), 
        filename:'app.js'
    }, 
    resolve:{
        alias:{
            pages:path.resolve(__dirname,'src/pages'),
            components:path.resolve(__dirname,'src/components'),
            service:path.resolve(__dirname,'src/service'),
            utils:path.resolve(__dirname,'src/utils')
        }
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        proxy:{
            '/manage' : {
                target: 'http://admintest.happymmall.com',
                changeOrigin : true
            },
            '/user/logout.do' : {
                target: 'http://admintest.happymmall.com',
                changeOrigin : true
            }
        }
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
            {
                test:/\.css$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test:/\.scss$/,
                use: extractSCSS.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf|svg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'fontsize/[name]-[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg|gif|jpe?g)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 8192,
                            name:'image/[name]-[hash:7].[ext]' ,
                            publicPath:'../'
                        }  
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react',
            template:'./public/index.html'
        }),
        new CleanWebpackPlugin(),
        //extractCSS,
        extractSCSS, 
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}