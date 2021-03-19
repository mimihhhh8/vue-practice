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
  <a v-for="(item,index) in urlList" :key="index"><p  @click="handlePush(item)">{{item.label}}</p></a>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      previewFileUrl: require('../assets/test1.mp4'),
      urlList: [
        {label: '1、errorHandler', path: '/errorhandler'},
        {label: '2、vue指令', path: '/vif'},
        {label: '3、图片懒加载', path: '/lazyload'}
        // {label: '3、组件传值', path: '/vif'}//兄弟组件传值
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
