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
        assetModuleFilename:'./images/[contenthash].[ext]'
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
        rules:[
            {
            test:/\.png$/,
            type:'asset/resource',

            // generator里面的优先级高于output里面的 assetModuleFilename
            generator: {
                // 文件夹名字/文件名字
                filename: 'images/[contenthash].[ext]'
            }
        },
        {
            test:/\.svg$/,
            // 定义类型
            type:'asset/inline'

        },
        {
            test:/\.txt$/,
            type: 'asset/source'
        },
        {
            test:/\.jpg$/,
            // 通用类型  
            type:'asset',
            // 临界值
            parser:{
                dataUrlCondition:{
                    maxSize:4* 1024* 1024 //当图片大小大于 4m 才会生成一个资源文件
                }
            }
        }
    
    ]
    }


}