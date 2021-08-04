<template>
    <div>跨域</div>
    <!-- 参考文章  https://juejin.cn/post/6844903448903696398#heading-7 -->
</template>
<script>
export default{
  data () {
    return {

    }
  },
  mounted () {
    /**
     * ajax最核心的依赖是浏览器提供的XMLHttpRequest对象。
     * 所以我用一句话来总结两者的关系：我们使用XMLHttpRequest对象来发送一个Ajax请求
     */

    /**
     * XMLHttpRequest对象是浏览器提供的向服务器请求和解析响应数据的接口。
     * a、open(method.url,async)
     *  method:请求的类型
     *  url:接口
     *  async: true(异步)或false（同步）
     *
     * b、send:发送请求到服务器
     */

    /** 1、跨域资源共享（cors） */
    // 配置请求头
    // let xhr = new XMLHttpRequest()
    // xhr.open('get', 'http://localhost:3000/user', true)
    // // 请求成功之后的回调函数
    // xhr.onload = function () {
    //   console.log(xhr.response)
    // }
    // xhr.send()

    /** 普通ajax实现 相对路径 */
    // let xhr = new XMLHttpRequest()
    // xhr.open('get', '/api/user', true)
    // // 请求成功之后的回调函数
    // xhr.onload = function () {
    //   console.log(xhr.response)
    // }
    // xhr.send()

    /** 2、vue中axios实现跨域 */
    this.$API.testCorss().then(res => {
      console.log(res, 'res')
    })
  }
}

</script>
