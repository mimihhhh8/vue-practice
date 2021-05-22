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
const PxToVw = () => import('@/pages/pratice/px转vw实现页面自适应')// px转vw实现页面自适应
const Copy = () => import('@/pages/pratice/javascript中的深拷贝和浅拷贝')// javascript中的深拷贝和浅拷贝
const Task = () => import('@/pages/面试/2021-5-22/宏任务微任务')
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
        },
        {
          path: '/pxtovw',
          name: 'PxToVw',
          component: PxToVw
        },
        {
          path: '/copy',
          name: 'Copy',
          component: Copy
        },
        {
          path: '/task',
          name: 'Task',
          component: Task
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
