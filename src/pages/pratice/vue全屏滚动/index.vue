<template>
    <div>
        <full-page :options="options" ref="fullpage">
           <ul id="menu">
              <li  @click="handleMove(index)" :data-menuanchor="item.value" :class="index===0 ? 'active' : ''" v-for="(item,index) in menuList" :key="index">
                <a :href="'#'+item.value">{{item.label}}</a>
              </li>
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
        menu: '#menu', // 绑
        recordHistory: true
      },
      menuList: [
        {label: '首页', value: 'page1'},
        {label: '预约注册', value: 'page2'},
        {label: '游戏特色', value: 'page3'}
      ]
    }
  },

  mounted () {
    this.$refs.fullpage.api.setLockAnchors(true)
  },

  methods: {

    handleMove (index) {
      switch (index) {
        case 0:
          this.$refs.fullpage.api.moveTo(1, 0)
          break
        case 1:
          this.$refs.fullpage.api.moveTo(2, 1)
          break
        case 2:
          this.$refs.fullpage.api.moveTo(3, 2)
          break
      }
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
