<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
body{
  min-width: 1200PX;
  overflow-x: hidden;
}
@import "./common.css";
</style>
