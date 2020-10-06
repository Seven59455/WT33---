import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/index/index'
import Class from '../pages/class/class'
import Find from '../pages/find/find'
import Cart from '../pages/cart/cart'
import Mine from '../pages/mine/mine'
import Login from '../pages/login/login'
import Registered from '../pages/registered/Registered'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name:'HelloWorld',component: HelloWorld},
    {path: '/index',name:'index',component: Index},
    {path: '/class',name:'class',component: Class},
    {path: '/find',name:'find',component: Find},
    {path: '/cart',name:'cart',component: Cart},
    {path: '/mine',name:'mine',component: Mine},
    {path:'/login',name:'login',component:Login},
    {path:'/registered',name:'registered',component:Registered}
  ]
})

