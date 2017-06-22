import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello', // optional
      component: Hello
    },
    {
      path: '/test',
      name: 'test', // optional
      component: Test
    }
  ]
})
