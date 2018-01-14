import Vue from 'vue'
import Router from 'vue-router'
import address from '@/components/address'
import shoppingCart from '@/components/shoppingCart'

Vue.use(Router)

export default new Router({        //定义路由
  routes: [
    {
      path: '/address',           //路径为/address时2会路由到address这个组件即address.vue
      name: 'address',
      component: address
    },
    {
        path: '/shoppingCart',    //路径为/shoppingCart时2会路由到address这个组件即shoppingCart.vue                
        name: 'shoppingCart',
        component: shoppingCart
    }
  ]
})
