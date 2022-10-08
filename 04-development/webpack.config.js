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
        // 生成文件夹,和文件名字
        assetModuleFilename:'images/[contenthash].png'
    },

    mode:'development',
    // 可以在浏览器里精准的找到出错的行号
    devtool: 'inline-source-map',
    
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
    ],

    // 配置devServer
    devServer:{
        // 配置当前路径作为根目录
        static: './dist'

    },
    
    // 配置模块
    module:{
        // 规则
        rules:[{
            test:/\.png$/,
            type:'asset/resource'
        }]
    }
}