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
    let xhr = new XMLHttpRequest()
    xhr.open('get', '/api/user', true)
    // 请求成功之后的回调函数
    xhr.onload = function () {
      console.log(xhr.response)
    }
    xhr.send()
  }
}

</script>
