define('src/pages/test/components/test.vue', ['require', 'exports', 'module', 'src/pages/test/components/test2.vue'],function(require, exports, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _test = require('src/pages/test/components/test2.vue');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Test2: _test2.default
  }
}; //
//
//
//
//
//
//

var __vue__options__;
if (exports && exports.__esModule && exports.default) {
  __vue__options__ = exports.default;
} else {
  __vue__options__ = module.exports;
}
__vue__options__.render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', {}, [_vm._v("\n  000000\n  "), _c('Test2')], 1);
};
__vue__options__.staticRenderFns = [];
});