import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Index = () => import('@/pages/index')
const Home = () => import('@/pages/home')
const NotFound = () => import('@/pages/404')
const Errorhandler = () => import('@/pages/errorhandler/errorhandler.vue') // 错误捕获
const vIf = () => import('@/pages/vue指令/v-if&v-for')
const LazyLoad = () => import('@/pages/pratice/vue-lazyload') // 图片懒加载
const CssCharacter = () => import('@/pages/pratice/css3特性') // css3特性
const ParentChild = () => import('@/pages/pratice/父组件监听子组件生命周期') // 父组件监听子组件生命周期
const PxToVw = () => import('@/pages/pratice/px转vw实现页面自适应') // px转vw实现页面自适应
const Copy = () => import('@/pages/pratice/javascript中的深拷贝和浅拷贝') // javascript中的深拷贝和浅拷贝
const Task = () => import('@/pages/ms/2021-5-22/宏任务微任务')
const Cross = () => import('@/pages/跨域/cross')
const Scroll = () => import('@/pages/pratice/vue全屏滚动')
const Swiper = () => import('@/pages/pratice/swiper')
const Knowledge = () => import('@/pages/前端知识储备/index.vue')
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
        },
        {
          path: '/cross',
          name: 'Cross',
          component: Cross
        },
        {
          path: '/scroll',
          name: 'Scroll',
          component: Scroll
        },
        {
          path: '/page1',
          name: 'Page1',
          component: Scroll
        },
        {
          path: '/page2',
          name: 'Page2',
          component: Scroll
        },
        {
          path: '/page3',
          name: 'Page3',
          component: Scroll
        },
        {
          path: '/swiper',
          name: 'Swiper',
          component: Swiper
        },
        {
          path: '/knowledge',
          name: 'Knowledge',
          component: Knowledge
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
