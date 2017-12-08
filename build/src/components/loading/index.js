define('src/components/loading/index', ['require', 'exports', 'module', 'node_modules/vue/dist/vue', 'src/components/loading/loading.vue'],function(require, exports, module) {
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