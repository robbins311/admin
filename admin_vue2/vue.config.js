const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  
  transpileDependencies: true,
  runtimeCompiler: true,
  pages: {
    default:{
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    admin:{
      entry: 'src/pages/admin/main.js',
      template: 'public/admin.html',
      filename: 'admin.out.html'
    },
  },

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }
        return options
      })
  },
})