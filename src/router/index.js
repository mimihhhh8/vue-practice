import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/home')
const NotFound = () => import('@/pages/404')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
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
