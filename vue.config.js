const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: process.env.VUE_APP_PORT || 8080,
    proxy: {
      "/": {
        ws: false,  // 不代理 WebSocket，不然 HMR 会连不上
        target: "https://localhost:2999",
        changeOrigin: true,  // 允许跨域
        secure: false,  // HTTPS 而且没有签名证书
      }
    }
  }
})
