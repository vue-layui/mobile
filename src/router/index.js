import Vue from 'vue'
import Router from 'vue-router'
import ShopCar from '@/pages/ShopCar'
import Product from '@/pages/Product'
import Vip from '@/pages/vip'
import Login from '@/pages/login'
//
import ShoppingSrote from '../pages/ShoppingStore'
import ShoppingContent from '../components/shopping/ShoppingContent'
import TuiJian from '../components/shopping/TuiJian'
import ColourMakeup from '../components/shopping/ColourMakeup'
import Health from '../components/shopping/HealthMedicine'
import PersonalCare from '../components/shopping/PersonalCare'
import MyBoots from '../components/shopping/MyBoots'
//
import indexPages from '@/pages/indexPages'
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
    },
    {
      path: '/Vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/ShoppingSrote',
      component: ShoppingSrote,
      children:[
        {
          path: '',
          name: 'ShoppingContent',
          component: ShoppingContent,
          redirect:"/TuiJian",
          children:[
            {
              path: '/TuiJian',
              name: 'TuiJian',
              component: TuiJian
            },
            {
              path: '/ColourMakeup',
              name: 'ColourMakeup',
              component: ColourMakeup
            },
            {
              path: '/Health',
              name: 'Health',
              component: Health
            },
            {
              path: '/PersonalCare',
              name: 'PersonalCare',
              component: PersonalCare
            },
            {
              path: '/MyBoots',
              name: 'MyBoots',
              component: MyBoots
            },
          ]
        },
      ]
    },
    {
      path: '/',
      component: indexPages,
    },
    {
      path:'/Login',
      component:Login
    }
  ],

    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }


})
