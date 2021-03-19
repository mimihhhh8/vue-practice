<template>
<!-- 未完待续。。。。。。 -->
  <div>
    <div style="padding:20px" v-for="(item,index) in dataList" :key="index">{{item.user}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataList: [
        {user: '用户1', isActive: true},
        {user: '用户2', isActive: true},
        {user: '用户3', isActive: true},
        {user: '用户4', isActive: true},
        {user: '用户5', isActive: false},
        {user: '用户6', isActive: false},
        {user: '用户7', isActive: false}
      ]
    }
  },
  computed: {
    dataLists () {
      console.log(111111111111)
      return this.dataList.filter(item => {
        return item.isActive
      })
    }
  }
}
</script>
<style scoped>

</style>
