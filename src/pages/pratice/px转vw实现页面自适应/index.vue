<template>
<div>
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
   <div class="m-box"></div>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.function(666)
  },
  methods: {
    // 此函数实现js千分位逗号隔开
    function (num) {
      const newNum = num.toString().replace(/\d+/, (n) => {
        return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
          return $1 + ','
        })
      })
      return newNum
    }
  }
}
</script>
<style scoped lang="less">
.m-box{
  width: 400px;
  height: 400px;
  background: pink;
}
</style>
