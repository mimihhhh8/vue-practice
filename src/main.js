import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'

import $API from '@/services/service-list'
import '@/utils/compatible'
import '@/instances/antdesign'
import '@/style/base.css'

import VueLazyLoad from 'vue-lazyload'// 图片懒加载

Vue.prototype.$API = $API
window.$CONFIG = $CONFIG
Vue.config.productionTip = false

// 图片懒加载
Vue.use(VueLazyLoad, {
  error: './static/lazyLoadImg/pic12.jpg',
  loading: './static/lazyLoadImg/pic2.jpg'
})

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
