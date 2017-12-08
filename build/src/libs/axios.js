define('src/libs/axios', ['require', 'exports', 'module', 'node_modules/axios/dist/axios', 'node_modules/es6-promise/dist/es6-promise', 'src/components/loading/index'],function(require, exports, module) {
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