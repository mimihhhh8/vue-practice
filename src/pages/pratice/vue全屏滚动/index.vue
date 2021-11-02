<template>
    <div>
        <full-page :options="options" ref="fullpage">
           <ul id="menu">
              <li data-menuanchor="page1" class="active"><a href="#page1">第1屏</a></li>
              <li data-menuanchor="page2"><a href="#page2">第2屏</a></li>
              <li data-menuanchor="page3"><a href="#page3">第3屏</a></li>
          </ul>
          <div id="content">
            <div class="section">
                第一屏的内容
            </div>
            <div class="section">
                第二屏内容
            </div>
            <div class="section">
                第三屏内容
            </div>
          </div>
        </full-page>
        <div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      options: {
        // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        // 是否显示导航，默认为false
        sectionsColor: ['#caf9a3', '#90ac32', '#ac932a'],
        anchors: ['page1', 'page2', 'page3'], // 注意不带#
        menu: '#menu' // 绑
      }
    }
  },
  methods: {
    next () {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown()
    }
  }
}
</script>
<style scoped>
ul,li{
   padding:0;
   margin:0;
   list-style:none
}
#menu{
  height: 50px;
  position: fixed;
  right: 20px;
  top: 50%;
  z-index: 20;
}
#menu li{
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #000;
  margin: 5px;
}
#menu li a{
  color: #fff;
  text-decoration: none;
}
#menu .active a{
  color: #31B0D5
}
</style>
