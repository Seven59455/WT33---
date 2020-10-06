import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import City from '../pages/Audio/sub/City.vue'
import Movies from '../pages/Audio/sub/Movies.vue'
import Music from '../pages/Audio/sub/Music.vue'
import Read from '../pages/Audio/sub/Read.vue'
import Tv from '../pages/Audio/sub/Tv.vue'
import Login from '../pages/Login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/home',component:()=> import('@/pages/Home/home')},
    {path:'/mine',component:()=> import('@/pages/Mine/mine')},
    {path:'/audio',component:()=> import('@/pages/Audio/audio'),
      children:[
        {path:'/',redirect:'movie'},
        {path:'city',name:'City',component:City},
        {path:'movie',name:'Movies',component:Movies},
        {path:'music',name:'Music',component:Music},
        {path:'read',name:'Read',component:Read},
        {path:'tv',name:'Tv',component:Tv}
      ]
    },
    {path:'/group',component:()=> import('@/pages/Group/group')},
    {path:'/broadcast',component:()=> import('@/pages/Broadcast/broadcast')},
    {path:'/login',name:'login',component:()=> import('@/pages/Login/login')},
  ]
})

