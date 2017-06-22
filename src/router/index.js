import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test/test'
import Home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home', // optional
      component: Home
    },
    {
      path: '/test',
      name: 'test', // optional
      component: Test
    }
  ]
})
