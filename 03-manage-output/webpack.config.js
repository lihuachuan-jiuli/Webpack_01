// 导入路径模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    //入口
    entry: './src/index.js' ,

    //出口
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        // 生成新的html的同时删除旧的
        clean:true,
    },

    mode:'none',
    
    plugins:[
        // 实例化插件  自动化生成html
        new HtmlWebpackPlugin({
            // 模板为指定文件
            template: './index.html',
            //输出的文件名
            filename: 'jiu-li.html',
            //把script标签放到body里面
            inject: 'body'
        })
    ]
}