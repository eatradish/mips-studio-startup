const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        extraResources: {
          from: "./resources",
          to: "."
        }
      }
    }
  },
  transpileDependencies: true
})
