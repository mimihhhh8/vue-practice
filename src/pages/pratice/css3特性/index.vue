<template>
<div>
  <!-- 参考https://blog.csdn.net/weixin_43307658/article/details/86629214 -->
  <div class="m-box1">
    <p>1、css边框</p>
    <div class="m-border"></div>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
.m-box1{
  width: 400px;
  height: 400px;
}
// 1、css边框
.m-border{
  width: 150px;
  height: 150px;
  // border-image:url('./border.jpg') 10 10 round;
    -webkit-border-image:url('./border.jpg') 10  repeat; /* Safari 5 and older */
    // -o-border-image:url('./border.jpg') 10 10 round; /* Opera */
}
</style>
