import Vue from 'vue'
import Router from 'vue-router'
import vip from '@/pages/vip'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
