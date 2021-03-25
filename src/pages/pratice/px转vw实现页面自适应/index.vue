<template>
<div class="box">
  <!--
    1、安装：https://github.com/evrone/postcss-px-to-viewport
    2、配置.postcssrc.js文件
    module.exports = {
      "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 1920,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['ignore-px2vw'],
            mediaQuery: true,
            landscapeUnit:'vw',
            landscapeWidth:1920,
            propList:  ["*", "!font*"],
            replace: true,
            exclude:  [ /node_modules/ ],
            landscape: false    }
      }
    }

    3、测试：div m-box改变屏幕大小，div大小跟着变
   -->
    px转vw实现页面自适应测试
   <div class="m-box"></div>
</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
.box{
    padding: 20px;
  .m-box{
    width: 400px;
    height: 400px;
    background: pink;
  }
}
</style>
