import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Index = () => import('@/pages/index')
const Home = () => import('@/pages/home')
const NotFound = () => import('@/pages/404')
const Errorhandler = () => import('@/pages/errorhandler/errorhandler.vue')// 错误捕获
const vIf = () => import('@/pages/vue指令/v-if&v-for')
const LazyLoad = () => import('@/pages/pratice/vue-lazyload')// 图片懒加载
const CssCharacter = () => import('@/pages/pratice/css3特性')// css3特性
const ParentChild = () => import('@/pages/pratice/父组件监听子组件生命周期')// 父组件监听子组件生命周期
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
        },
        {
          path: '/csscharacter',
          name: 'CssCharacter',
          component: CssCharacter
        },
        {
          path: '/parentchild',
          name: 'ParentChild',
          component: ParentChild
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
