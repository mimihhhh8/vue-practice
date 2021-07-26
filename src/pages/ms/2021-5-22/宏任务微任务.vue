<template>
<div>宏任务微任务
  <h1>关于async/await、promise和setTimeout的执行顺序</h1>
  <!-- https://blog.csdn.net/yun_hou/article/details/88697954 -->
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },

  mounted () {
    this.async1()
  },

  methods: {
    async  async1 () {
      console.log('async1 start')
      await this.async2()
      console.log('asnyc1 end')
    },

    async2 () {
      console.log('async2')
    }
  }
}
</script>
<style scoped lang="less">

</style>
