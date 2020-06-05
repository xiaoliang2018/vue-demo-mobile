const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    devServer: {
      port: '1110', //端口
      proxy:'http://192.168.137.1:1000',   //代理
    },
    configureWebpack: {
      optimization: {
        minimizer: [
          // 删除打包后生成的console
          new TerserPlugin({
            terserOptions: {
              warnings: false,
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
            },
          }),
        ],
      },
      plugins: [  //配置新webpack插件
        // new MyAwesomeWebpackPlugin()
      ]
    },
  }