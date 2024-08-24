const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/ProDom/' : '/ProDom/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'ProDom';
      return args;
    });
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/ProDom/, to: '/' }
      ]
    },
  }
});
