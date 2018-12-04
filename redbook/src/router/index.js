import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/pages/Product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
  ]
})
