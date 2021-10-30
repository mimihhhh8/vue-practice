<template>
<div class="m-container">
  <!--
    参考文章https://blog.csdn.net/qq_20722679/article/details/83755991
   -->
   <div v-for="(item,index) in imgList" :key="index" class="m-box1">
    <img v-lazy="item.imgUrl" alt="" class="img-style">
   </div>
   <!-- <div v-for="(item,index) in imgList" :key="index" class="m-box2">
    <img v-lazy="item.imgUrl" alt="" class="img-style">
   </div>
   <div v-for="(item,index) in imgList" :key="index" class="m-box3">
    <img v-lazy="item.imgUrl" alt="" class="img-style">
   </div> -->
</div>
</template>
<script>
import '../../../../static/lazyLoadImg/pic1.jpg'
export default {
  data () {
    return {
      imgList: [
        {imgUrl: require('../../../../static/lazyLoadImg/pic1.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic2.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic3.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic4.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic5.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic6.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic7.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic8.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic9.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic10.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic11.jpg')},
        {imgUrl: require('../../../../static/lazyLoadImg/pic12.jpg')}

      ]
    }
  }
}
</script>
<style scoped lang="less">
.m-container{
// display: flex;
}
.m-box1,.m-box2,.m-box3{
  padding: 10px;
}
.img-style{
  width: 400px;
  height: 100%;
}
</style>
