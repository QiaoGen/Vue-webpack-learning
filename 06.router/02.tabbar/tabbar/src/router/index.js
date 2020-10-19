import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/Home.vue')
const Category = () => import('../pages/Category.vue')
const Cart = () => import('../pages/Cart.vue')
const Profile = () => import('../pages/Profile.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home
      
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history',
})
