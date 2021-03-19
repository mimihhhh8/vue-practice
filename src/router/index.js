import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/pages/index')
const Home = () => import('@/pages/home')
const NotFound = () => import('@/pages/404')
const Errorhandler = () => import('@/pages/errorhandler/errorhandler.vue')
const vIf = () => import('@/pages/vue指令/v-if&v-for')
const LazyLoad = () => import('@/pages/pratice/vue-lazyload')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/errorhandler',
          name: 'Errorhandler',
          component: Errorhandler
        },
        {
          path: '/vif',
          name: 'vIf',
          component: vIf
        },
        {
          path: '/lazyload',
          name: 'LazyLoad',
          component: LazyLoad
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
