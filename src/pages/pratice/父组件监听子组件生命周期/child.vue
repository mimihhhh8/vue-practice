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
  },
  mounted () {
    this.$emit('methods1')
  }
}
</script>
<style scoped lang="less">

</style>
