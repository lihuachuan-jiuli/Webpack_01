// 导入路径模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    //入口
    entry: './src/index.js' ,

    //出口
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },

    mode:'none',
    
    plugins:[
        new HtmlWebpackPlugin()
    ]
}