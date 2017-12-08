define('src/pages/test/components/app.vue', ['require', 'exports', 'module', 'src/pages/test/components/test.vue', 'node_modules/axios/dist/axios'],function(require, exports, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _test = require('src/pages/test/components/test.vue');

var _test2 = _interopRequireDefault(_test);

var _axios = require('node_modules/axios/dist/axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      test: '11111'
    };
  },
  mounted: function mounted() {
    console.log(_axios2.default);
  },

  components: {
    Test: _test2.default
  }
};


var __vue__options__;
if (exports && exports.__esModule && exports.default) {
  __vue__options__ = exports.default;
} else {
  __vue__options__ = module.exports;
}
__vue__options__.render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "asd" }, [_vm._v("\n  " + _vm._s(_vm.test) + "\n  "), _c('Test')], 1);
};
__vue__options__.staticRenderFns = [];
__vue__options__._scopeId = "_v-bd8746f6";
});