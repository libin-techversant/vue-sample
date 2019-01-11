import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Page1 from '@/views/Page1'
import Page2 from '@/views/Page2'
import Page3 from '@/views/Page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page1/:param',
      name: 'page1',
      component: Page1,
      props:true
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/page3/:id',
      name: 'page3',
      component: Page3
    },
  ]
})
