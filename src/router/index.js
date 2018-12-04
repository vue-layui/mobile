import Vue from 'vue'
import Router from 'vue-router'
import vip from '@/pages/vip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vip',
      name: 'vip',
      component: vip
    }
  ]
})
