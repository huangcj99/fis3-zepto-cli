define('src/pages/test/test', ['require', 'exports', 'module', 'node_modules/zepto/dist/zepto', 'src/pages/test/view'],function(require, exports, module) {
'use strict';

require('node_modules/zepto/dist/zepto');

var _view = require('src/pages/test/view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *  @require src/assets/css/reset.css
 *  @require src/pages/test/test.css
 */

var index = {
  init: function init() {
    this.initListeners();

    _view2.default.func();
  },
  initListeners: function initListeners() {
    console.log('初始化页面时间');
  }
};

module.exports = index;
});