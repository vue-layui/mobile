import Vue from 'vue'
import Router from 'vue-router'
import indexPages from '../pages/indexPages'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: indexPages,
    }
  ]
})
