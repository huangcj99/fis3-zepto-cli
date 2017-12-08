/*!src/components/loading/loading.vue*/
;define('src/components/loading/loading.vue', ['require', 'exports', 'module'],function(require, exports, module) {
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
/*!src/components/loading/index.js*/
;define('src/components/loading/index', ['require', 'exports', 'module', 'node_modules/vue/dist/vue', 'src/components/loading/loading.vue'],function(require, exports, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('node_modules/vue/dist/vue');

var _vue2 = _interopRequireDefault(_vue);

var _loading = require('src/components/loading/loading.vue');

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingConstructor = _vue2.default.extend(_loading2.default);

var loading = function loading() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var defaultOptions = {
    mask: true,
    partial: false,
    title: ''
  };

  var $container = options.container || document.body;
  var instance = new LoadingConstructor().$mount(document.createElement('div'));

  Object.assign(instance, defaultOptions, options);
  $container.appendChild(instance.$el);

  return instance;
};

exports.default = loading;
});
/*!src/libs/axios.js*/
;define('src/libs/axios', ['require', 'exports', 'module', 'node_modules/axios/dist/axios', 'node_modules/es6-promise/dist/es6-promise', 'src/components/loading/index'],function(require, exports, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('node_modules/axios/dist/axios');

var _axios2 = _interopRequireDefault(_axios);

var _promise = require('node_modules/es6-promise/dist/es6-promise');

var _promise2 = _interopRequireDefault(_promise);

var _index = require('src/components/loading/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loading = null;

function showLoading() {
  if (loading) {
    return;
  }

  loading = (0, _index2.default)({
    title: '加载中...'
  });
}

function closeLoading() {
  if (loading) {
    loading.hide();
    loading = null;
  }
}

function createAxios() {
  var instance = _axios2.default.create({
    timeout: 1000 * 10
  });

  // // 从 storage 拿取 token
  // const token = sToken.get();
  // if (token) {
  //   instance.defaults.headers.common["Authorization"] = token;
  // }

  // Add a request interceptor
  instance.interceptors.request.use(function (config) {
    if (config.loading !== false) {
      showLoading();
    }
    return config;
  }, function (error) {
    // Do something with request error
    if (error.config.loading !== false) {
      closeLoading();
    }
    return _promise2.default.reject(error);
  });

  // Add a response interceptor
  instance.interceptors.response.use(function (response) {
    if (response.config.loading !== false) {
      closeLoading();
    }

    return response.data;
  }, function (error) {
    // Do something with response error
    if (error.config.loading !== false) {
      closeLoading();
    }

    //404报错则调回登录界面
    if (error && error.response && error.response.status === 404) {}

    //302报错则调回登录界面
    if (error && error.response && error.response.status === 302) {}

    // // 默认 error 处理
    // if (error.config.showDefaultError !== false) {
    //   const message = (error && error.response && error.response.data && error.response.data.msg) || error.msg;
    //   Toast(message)
    // }

    return _promise2.default.reject(error);
  });

  return instance;
}

exports.default = createAxios();
});
/*!src/pages/test0/components/app.vue*/
;define('src/pages/test0/components/app.vue', ['require', 'exports', 'module', 'src/pages/test0/components/test.vue', 'src/libs/axios'],function(require, exports, module) {
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
/*!src/pages/test0/test0.js*/
;define('src/pages/test0/test0', ['require', 'exports', 'module', 'node_modules/vue/dist/vue', 'node_modules/es6-promise/dist/es6-promise', 'src/pages/test0/components/app.vue'],function(require, exports, module) {
'use strict';

var _vue = require('node_modules/vue/dist/vue');

var _vue2 = _interopRequireDefault(_vue);

var _promise = require('node_modules/es6-promise/dist/es6-promise');

var _promise2 = _interopRequireDefault(_promise);

var _app = require('src/pages/test0/components/app.vue');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [index description]
 * @type {Object}
 *
 *  @require src/assets/css/reset.css
 *  @require src/pages/test0/test0.css
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