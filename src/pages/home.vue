<template>
  <div class="hello">
    <video
    id="videoPlay"
    controls
    :src="previewFileUrl"
    width="660"
    autoplay
>
  您的浏览器暂不支持播放该视频，请升级至最新版浏览器。
  <!-- <source :src="" /> -->
</video>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      previewFileUrl: require('../assets/test1.mp4')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
