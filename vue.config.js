// 后台代理
module.exports = {
    devServer: {
        port: 9090, //端口号
        open: true, //自动打开浏览器页面
        proxy: {
            '/': {
                ws: false, // 是否启用websockets
                target: "http://192.168.0.153:8083", //服务器ip或本地localhost
                changeOrigin: true, //是否跨域
                pathRewrite: { //重写路径
                    '^/': ""
                }
            }
        }
    }
}