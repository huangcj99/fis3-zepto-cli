/*!src/pages/test/components/app.vue*/
;define('src/pages/test/components/app.vue', ['require', 'exports', 'module', 'src/pages/test/components/test.vue', 'node_modules/axios/dist/axios'],function(require, exports, module) {
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
/*!src/pages/test/test.js*/
;define('src/pages/test/test', ['require', 'exports', 'module', 'node_modules/vue/dist/vue', 'node_modules/es6-promise/dist/es6-promise', 'src/pages/test/components/app.vue'],function(require, exports, module) {
'use strict';

var _vue = require('node_modules/vue/dist/vue');

var _vue2 = _interopRequireDefault(_vue);

var _promise = require('node_modules/es6-promise/dist/es6-promise');

var _promise2 = _interopRequireDefault(_promise);

var _app = require('src/pages/test/components/app.vue');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [index description]
 * @type {Object}
 *
 *  @require src/assets/css/reset.css
 *  @require src/pages/test/test.css
 */

console.log('实例化vue');

_vue2.default.prototype.Promise = _promise2.default;

new _vue2.default({
  el: '#app',
  render: function render(h) {
    return h(_app2.default);
  }
});
});