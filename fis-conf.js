var ignoreModulePaths = require('./fis/ignore.module.config.js');
var modulePaths = require('./fis/module.config.js');

var autoprefixerOption = {
      browsers: [
        "> 5%",
        "last 4 versions"
      ]
    };

////////////////////资源发布配置////////////////////

fis.config.set('wwwPath', './build');
fis.set('project.files', ['src/**', 'node_modules/**']);
fis.set('project.ignore', fis.get('project.ignore').concat([
  '**.md',
  '**.json',
  '**.sh'
]));
fis.set('project.md5Length', 8);

// 测试打包
fis.media('dev_test')
    .match('*', {
      deploy: fis.plugin('local-deliver', {
        to: fis.config.get('wwwPath')
      })
    });

// 上线打包
fis.media('prod')
    .match('*.{js,vue}', {
      optimizer: fis.plugin('uglify-js', {
          compress: {
              warnings: false,
              drop_console: true
          }
      })
    })
    .match('/src/**.css', {
      postprocessor: fis.plugin('autoprefixer', autoprefixerOption)
    })
    .match('*.{js,css,png}', {
      // md5，控制缓存
      useHash: true
    })
    .match('*', {
      deploy: fis.plugin('local-deliver', {
        to: fis.config.get('wwwPath')
      })
    });

////////////////////资源优化////////////////////

// 开启对css中的图片合并
fis.match('*.css', {
    useSprite: true
});

// 雪碧图合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 5);

// 雪碧图拼合方式为矩形
fis.config.set('settings.spriter.csssprites.layout', 'matrix');

// 开启图片压缩
fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

// 如果要兼容低版本ie显示透明png图片，请使用pngquant作为图片压缩器，
// 否则png图片透明部分在ie下会显示灰色背景
// 使用spmx release命令时，添加--optimize或-o参数即可生效
fis.config.set('settings.optimzier.png-compressor.type', 'pngquant');

//////////////////资源编译处理//////////////////

// 浏览器css添加前缀兼容
fis.match('/src/**.css', {
  postprocessor: fis.plugin('autoprefixer', autoprefixerOption)
})

// es6编译
fis.match('/src/**.js', {
  parser: fis.plugin('babel-6.x')
});

// 模板引擎配置
fis.match('*.handlebars', {
    rExt: '.js', // from .handlebars to .js 虽然源文件不需要编译，但是还是要转换为 .js 后缀
    parser: fis.plugin('handlebars-3.x', {
        //fis-parser-handlebars-3.x option
    }),
    release: false // handlebars 源文件不需要编译
});

////////////////////模块化开发////////////////////

// 用amd方式包装模块
fis.hook('module' , {
    mode: 'amd',
    // 把 factory 中的依赖，前置到 define 的第二个参数中来。
    forwardDeclaration: true,
    paths: modulePaths
});

// 模块化文件配置
fis.match('/src/**.js', {
    isMod: true
});

fis.match('/node_modules/**.js', {
    isMod: true,
    useHash: false
});

// require.js本身不需要模块化，否则报错
fis.match('/node_modules/requirejs/require.js', {
    isMod: false,
    useHash: true
});

fis.match('/src/libs/lib-flexible/1.0.0/lib-flexible.js', {
    isMod: false,
    useHash: true
});

////////////////////打包配置////////////////////

// 打包配置
fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        allInOne: {
            js: '${filepath}_aio.js',
            css: '${filepath}_aio.css',
            includeAsyncs: true, // 包含异步加载的模块
            ignore: ignoreModulePaths
        },
        scriptPlaceHolder: '<!--SCRIPT_PLACEHOLDER-->',
        useInlineMap: true // 资源映射表内嵌
    })
});
