// https://www.cnblogs.com/shangjun6/p/11246400.html

/**
 * vue 靠的是数据劫持 和 发布者，订阅者模式
 * 数据劫持：Object.defineProperty() 这个方法
 * 
 */
let obj = {
  foo:'哈哈哈'
}

/**
 * 参数一：对象名称
 * 参数二：对象属性
 * 参数三：属性描述器，规定了熟悉的一些操作
 */
Object.defineProperty(obj,'foo',{
  get:function(){
    console.log('将要读取obj.foo属性')
  },
  set:function(newVal){
    console.log('当前值为',newVal)
  }
})

obj.foo
obj.foo = '呵呵呵'