'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    /**
     * 1、首先，在ProxyTable模块中设置了‘/api’，target中设置服务器地址，
     * 也就是接口的开头那段地址，例如http://localhost:54321/，然后
     * 我们在调用接口的时候，就可以全局使用/api，这时候/api的作用就相当
     * 于http://localhost:54321/，比如接口的地址是http://localhost:54321/api/json.data，
     * 我们就可以使用/api/json.data
     * 2、那pathRewrite是用来干嘛的呢，这里的作用，相当于是替代/api，如果接口中是没有api的，那就直接置空，如果接口中有api，那就得写成{^/api:/api}，可以理解为一个重定向或者重新赋值的功能。
     */

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://localhost:3000', // 接口地址
        changeOrigin: true, // 是否跨域
        pathRewrite: { // 转发
            '^/api': ''
        },
        secure: false // 如果是 https ,需要开启这个选项
    },
    },
    /**上面这段代码的效果就是将以/api字段起始的本地接口请求代理到了http://localhost:3000这一域名下 */

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './', // hash 打包
    // assetsPublicPath: '/', // history 打包

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
