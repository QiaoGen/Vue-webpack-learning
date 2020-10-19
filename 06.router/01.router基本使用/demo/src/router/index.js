import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import About from '@/components/About'
const HomeChild = () => import('../components/child/HomeChild.vue')
const AboutChild = () => import('../components/child/AboutChild.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/first'
    },
    {
      path: '/first',
      name: 'FirstPage',
      component: FirstPage,
      children :[
        {
          path: '',
          component: HomeChild
        },
        {
          path: 'homeChild',
          component: HomeChild
        },
        {
          path: 'aboutChild',
          component: AboutChild
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    }
  ],
  mode: 'history'
})
