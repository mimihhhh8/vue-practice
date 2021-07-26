<template>
<!-- // https://v.youku.com/v_show/id_XNTExOTA3ODg3Mg== -->
    <div>跨域</div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  mounted () {
    /**
     * 1、open(method.url,async)
     *  method:请求的类型
     *  url:接口
     *  async: true(异步)或false（同步）
     *
     * 2、send:发送请求到服务器
     */
    // let xhr = new XMLHttpRequest()
    // xhr.open('get', '/api/user', true)
    // // 请求成功之后的回调函数
    // xhr.onload = function () {
    //   console.log(xhr.response)
    // }
    // xhr.send()

    /** axios */
    this.$API.testCorss().then(res => {
      console.log(res, 'res')
    })

    // /** JSONP实现跨域 */
    // var script = document.createElement('script')
    // script.type = 'text/javascript'

    // // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
    // script.src = `http://localhost:8080/user?callback=${handleCallback}`
    // document.head.appendChild(script)

    // // 回调执行函数
    // function handleCallback (res) {
    //   console.log(res, 'res')
    // }
  }
}

</script>
