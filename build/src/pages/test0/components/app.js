define('src/pages/test0/components/app.vue', ['require', 'exports', 'module', 'src/pages/test0/components/test.vue', 'src/libs/axios'],function(require, exports, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _test = require('src/pages/test0/components/test.vue');

var _test2 = _interopRequireDefault(_test);

var _axios = require('src/libs/axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
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
      test: '11111',
      list: []
    };
  },
  mounted: function mounted() {
    this.request();
  },

  methods: {
    request: function request() {
      var _this = this;

      (0, _axios2.default)({
        method: 'GET',
        url: 'http://dev.api.cer.dingdingyisheng.mobi/api/base/clinical-project',
        params: {
          projectExperimenterType: 'VOLUNTEER',
          page: 1,
          size: 10
        }
      }).then(function (response) {
        _this.list = response.content;
      });
    }
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
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "asd" }, [_vm._v("\n  " + _vm._s(_vm.test) + "\n  "), _c('Test'), _vm._v(" "), _c('ul', _vm._l(_vm.list, function (item) {
    return _c('li', [_vm._v(_vm._s(item.city))]);
  }))], 1);
};
__vue__options__.staticRenderFns = [];
__vue__options__._scopeId = "_v-cdf73229";
});