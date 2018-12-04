import Vue from 'vue'
import Router from 'vue-router'
import ShopCar from '@/pages/ShopCar'
import Product from '@/pages/Product'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Car',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    }
  ]
})
