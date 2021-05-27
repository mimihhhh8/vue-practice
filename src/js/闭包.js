/**
 * 用var定义i 打印出都是4
 * 和let定义i 打印出0，1，2，3
 */

// 闭包1
let arr1 = [1, 22, 33, 44]
for (var i = 0; i < arr1.length; i++) {
  setTimeout(function () {
    console.log(i)//打印出4
  }, 3000)
}


// 解决方法1
const arr2 = [10, 12, 15, 21]
for (let i = 0; i < arr2.length; i++) {
  setTimeout(function () {
    console.log('The index of this number is: ' + i)//打印出1,2,3,4
  }, 3000)
}


// 解决方法2
let arr3 = [10, 12, 15, 21]
for(var i =0;i<arr3.length;i++){
  setTimeout(function(iValue){
    return function(){
      console.log('我是'+iValue)
    }
  }(i),3000)
}