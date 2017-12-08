define('src/pages/test0/test0', ['require', 'exports', 'module', 'node_modules/vue/dist/vue', 'node_modules/es6-promise/dist/es6-promise', 'src/pages/test0/components/app.vue'],function(require, exports, module) {
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