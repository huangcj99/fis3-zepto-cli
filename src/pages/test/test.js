import 'zepto';
import view from './view.js'

/*
 *  @require ../../assets/css/reset.css
 *  @require ./test.css
 */

const index = {
  init(){
    this.initListeners();
    
    view.func()
  },

  initListeners() {
    console.log('初始化页面时间');
  }
}

module.exports = index;
