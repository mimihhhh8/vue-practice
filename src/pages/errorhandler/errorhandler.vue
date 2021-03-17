<template>
<div>errorHandler</div>
</template>
<script>
import Vue from 'vue'
Vue.config.errorHandler = (err) => {
  console.log('进来啦', err)
}
export default {
  mounted () {
    let a = null
    if (a.length > 1) {
    }
  },

  methods: {
    // 收集错误上报的方法
    collectErr (err) {
      console.log(err, '报错啦')
    }
  }
}
</script>
<style scoped>

</style>
