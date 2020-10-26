const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: isProduction ? '/production-sub-path/' : '/',
    outputDir: process.env.outputDir,
    assetsDir: process.env.assetsDir,
    lintOnSave: false,
    productionSourceMap: !isProduction,
    css: {
        sourceMap: !isProduction,
        loaderOptions: {
            less:{
                lessOptions:{
                    modifyVars: {
                        'primary-color': '#1DA57A',
                        'link-color': '#1DA57A',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true
                }
            }
        }
    },
    devServer: {
        host: 'localhost',
        port: 9000,
        hotOnly: true,
        https: false,
        index: 'index.html',
        proxy: {
            [process.env.VUE_APP_BASE_URL]: {
                target: 'http://localhost:8888',
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_URL]: ''
                }
            }
        }
    },
    
    chainWebpack: config => {
        // 为添加的文件取别名
        config.resolve.alias
            // .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))

        // 后缀扩展
        config.resolve.extensions
            .add('.js')
            .add('.vue')
            .add('.scss')
            .add('.css')
    },
    configureWebpack: config => {
        if (isProduction) {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    }
}