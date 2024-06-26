const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const path = require('path');

module.exports = {
  ...require('@vue/cli-service').defineConfig({
    transpileDependencies: true,
    configureWebpack: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src/')
        }
      }
    }
  })
}
