import 'zepto'

const Handlebars = require('handlebars'), //这里不能用import，应该使用fis的require语法去引入
      tpls = {
          p: __inline('./tpl/p.handlebars')
      };

const index = {
  func() {
    console.log('执行func');

    // console.log(Handlebars);

    $('#test').prepend(tpls.p({
        ppp: '插入模板1'
    }));
  }
}

module.exports = index;
