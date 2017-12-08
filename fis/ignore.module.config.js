var getModulePath = require('./utils.js').getModulePath;

var ignoreModulePaths = [
  //公共css不作为合并项
  '/src/assets/css/reset.css',

  //稍微大一些且常用的模块不做合并，增大缓存利用率
  '/node_modules/zepto/dist/zepto.js',
  '/node_modules/handlebars/dist/handlebars.runtime.js'
]

module.exports = ignoreModulePaths;
