<template>
<div>
  <div class="box">
  概念：
    对于字符串类型，浅复制是对值的复制，对于对象来说，浅复制是对对象地址的复制，
    并没   有开辟新的栈，也就是复制的结果是两个对象指向同一个地址，修改其中一个
    对象的属性，则另一个对象的属性也会改变，而深复制则是开辟新的栈，两个对象对应
    两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。深复制实现代码
    如下：可以从两个方法进行解决。
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    let arr = [1, 2, 2, 3, 3, 4, 5, 5]
    this.fn2(arr)
    console.log('this.fn2(arr)', this.fn2(arr))
  },
  methods: {
    fn2 (array) {
      debugger
      // eslint-disable-next-line one-var
      let n = {}, r = [], len = array.length, val, type
      for (var i = 0; i < array.length; i++) {
        val = array[i]
        type = typeof val
        console.log('n[val', n[val])
        if (!n[val]) {
          n[val] = [type]
          r.push(val)
        } else if (n[val].indexOf(type) < 0) {
          n[val].push(type)
          r.push(val)
        }
      }
      return r
    }
  }
}
</script>
<style scoped lang="less">
.box{
  width: 1000px;
  padding: 25px 0 0 300px;
  font-size: 22px;
}
</style>
