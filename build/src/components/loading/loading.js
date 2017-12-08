define('src/components/loading/loading.vue', ['require', 'exports', 'module'],function(require, exports, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
//
//

exports.default = {
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    partial: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      isShow: true
    };
  },


  methods: {
    hide: function hide() {
      this.isShow = false;
    }
  }
};


var __vue__options__;
if (exports && exports.__esModule && exports.default) {
  __vue__options__ = exports.default;
} else {
  __vue__options__ = module.exports;
}
__vue__options__.render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.isShow ? _c('div', { staticClass: "loading", class: { 'loading-mask': _vm.mask, 'loading-partial': _vm.partial } }, [_c('div', { staticClass: "loading-bd" }, [_c('div', { staticClass: "loading-img" }), _vm._v(" "), _vm.title ? _c('p', { staticClass: "loading-cnt" }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])]) : _vm._e();
};
__vue__options__.staticRenderFns = [];
__vue__options__._scopeId = "_v-a1f2fb3b";
});