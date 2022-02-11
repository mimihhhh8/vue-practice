/** 参考文章  https://www.jianshu.com/p/721f348046c9 */
/** 1、this绑定call */
// function foo () {
//   console.log(this, this.name.toUpperCase())
//   return this.name.toUpperCase()
// }
// var obj = {
//   name: 'Tom'
// }
// foo.call(obj)
/* 未改变作用域前 */
// foo()// Window

// /* 改变作用域之后 */
// foo.call(obj)// obj

/** 2、this的绑定取决于函数的调用方式 */
// function foo () {
//   this.count++
// }
// foo.count = 0
// console.log(foo)
// foo()
