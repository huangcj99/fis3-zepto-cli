define('src/pages/test0/components/test.vue', ['require', 'exports', 'module', 'src/pages/test0/components/test2.vue'],function(require, exports, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _test = require('src/pages/test0/components/test2.vue');

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
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('span', { staticClass: "abc" }, [_vm._v("000000")]), _vm._v(" "), _c('Test2')], 1);
};
__vue__options__.staticRenderFns = [];
__vue__options__._scopeId = "_v-7b47414a";
});