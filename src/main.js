// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import router from './router'
import store from  './store'


import './assets/css/car.css'
import './assets/css/vip.css';
import "./assets/css/product.css"
import './assets/css/login.css'
//require iconfont
import "./assets/font/iconfont.css"
import "./assets/fontz/iconfont.css"
import "./assets/fontn/iconfont.css"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render(h){
    return h(App)
  }
})
