<template>
<div>
  <!-- 子组件 方法一-->
  <!-- <Child @methods1="parentMethods1" /> -->

  <!-- 方法二 -->
  <Child @hook:created="parentMethods2" />
</div>
</template>
<script>

/**
 * 方法一
 * 有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就
 * 做一些逻辑处理，可以通过以下写法实现
 *
 * 方法二
 * 更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可
 * @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，
 * 例如：created，updated 等都可以监听。
 */
import Child from './child'
export default {
  components: {
    Child
  },
  methods: {
    parentMethods1 () {
      console.log('父组件监听到子组件 mounted 钩子函数 ...')
    },
    parentMethods2 () {
      console.log('父组件监听到子组件 mounted 啦 ...')
    }
  }
}
</script>
<style scoped lang="less">

</style>
