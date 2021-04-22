<template>
<div>子组件</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {
    /**
     * 方法二
     * 通过@hook 监听 @hook:created="parentMethods2"(created是子组件生命周期)
     * 父组件事件parentMethods2监听到了子组件生命周期created
     */
  },
  mounted () {
    /**
     * 方法一
     * 子组件触发父组件的方法通过绑定事件(@methods1="parentMethods1")
     * 在子组件使用this.$emit('methods1')触发此事件
     */
    this.$emit('methods1')
  }
}
</script>
<style scoped lang="less">

</style>
