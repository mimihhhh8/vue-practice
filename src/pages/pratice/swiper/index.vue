<template>
    <div style="overflow: hidden" class="m-box">
      <div class="swiper-container" >
        <div class="swiper-wrapper" >
          <div class="swiper-slide">
            <img src="./banner.png" />
          </div>
          <div class="swiper-slide">
            <img src="./banner.png" />
          </div>
          <div class="swiper-slide">
            <img src="./banner.png" />
          </div>
          <div class="swiper-slide">
            <img src="./banner.png" />
          </div>
          <div class="swiper-slide">
            <img src="./banner.png" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'
export default {
  components: {},
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initSwiper()
    })
  },
  methods: {
    // 初始化广告轮播
    initSwiper () {
      const _this = this
      new Swiper('.swiper-container', {
        direction: 'horizontal', // 轮播图轮播方向，horizontal为横向，
        loop: true, // 循环模式选项
        spaceBetween: 10, // 左右距离，每一张图之间的间距，不用在css中设置margin了
        slidesPerView: 'auto', // 默认一个屏幕显示几张图，必须auto！要不轮播到最后一张图时，右侧会是空白，很丑！
        centeredSlides: true, // 每屏，居中显示
        // autoplay: true, // 自动轮播
        autoplay: {
          disableOnInteraction: false // 操作swiper之后，是否禁止autoplay，默认为true，如不写此属性，在点击轮博或者活动轮播后，会停止自动轮播
        },
        // 下面两个属性一般是数据从后台请求后或者点击轮播图片跳转页面后，需要初始化swiper
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true // 修改swiper的父元素时，自动初始化swiper
        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      })
    }
  }
}
</script>

<style >
.m-box{
  width: 1200px;
}
.swiper-container {
  overflow: visible!important;
  width: 60%;
  height: 500px;
}
.swiper-container .swiper-wrapper .swiper-slide{
  border-radius: 10px;
}
.swiper-container .swiper-wrapper .swiper-slide img{
  width: 100%;
  height: 100%;
}
</style>
