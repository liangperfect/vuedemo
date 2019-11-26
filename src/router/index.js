import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/demo/HelloWorld'
import Login from '@/components/Login'
import Parent from '@/components/demo/Parent'
import Child from '@/components/demo/Child.vue'
import Home from '@/components/home'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Login,
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/parent',
      name: 'parent',
      component: Parent
    },
    {
      path: '/child',
      component: Child
    }
  ]
})
