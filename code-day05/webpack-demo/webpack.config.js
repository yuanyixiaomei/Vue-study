
const webpack = require('webpack')
const path = require('path');


module.exports = {
    entry: './main.js',

    //指定出口必须为绝对路径
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      mode: 'development' ,
      plugins: [ // 插件配置项
        new webpack.HotModuleReplacementPlugin(), // 3. 添加热更新插件
    ],
    devServer: {
        contentBase: path.join(__dirname, 'src'), // 托管根路径
        compress: true, // 启用压缩
        port: 3000, // 端口号
        open: true, // 自动打开浏览器
        hot: true // 2. 开启热更新  如果设置hot为true 需要手动添加HMR插件, 详见第三步
    },

  };