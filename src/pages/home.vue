<template>
  <div class="hello">
      <!-- <video
      id="videoPlay"
      controls
      :src="previewFileUrl"
      width="660"
      autoplay
  >
    您的浏览器暂不支持播放该视频，请升级至最新版浏览器。
  </video> -->
  <div style="padding:20px">

    <a v-for="(item,index) in urlList" :key="index"><p  @click="handlePush(item)">{{item.label}}</p></a>
  </div>
  <!-- <div>
    <comment></comment>
  </div> -->
  </div>
</template>
<script>
// https://blog.csdn.net/qq_40942490/article/details/111191563
import comment from 'bright-comment'
export default {
  name: 'Home',
  components: {
    comment
  },
  data () {
    return {
      previewFileUrl: require('../assets/test1.mp4'),
      urlList: [
        {label: '1、errorHandler', path: '/errorhandler'},
        {label: '2、vue指令', path: '/vif'},
        {label: '3、图片懒加载', path: '/lazyload'},
        {label: '4、css3特性', path: '/csscharacter'},
        {label: '5、父组件监听子组件生命周期', path: '/parentchild'},
        {label: '6、px转vw实现页面自适应', path: '/pxtovw'},
        {label: '7、javascript中的深拷贝和浅拷贝', path: '/copy'},
        {label: '8、ms', path: '/task'},
        {label: '9、组件传值', path: '/vif'}, // 兄弟组件传值
        {label: '10、跨域', path: '/cross'},
        {label: '11、vue全屏滚动', path: '/scroll'}, // vue全屏滚动
        {label: '12、swiper轮播图', path: '/swiper'}, // 轮播图
        {label: '13、前端知识储备', path: '/knowledge'}
      ]
    }
  },

  methods: {
    handlePush (item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
