// 1、遍历数组法 判断值是否在数组的方法“indexOf”
function fn1 (arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

let arr = [1, 2, 2, 3, 3, 4, 4, 5]
fn1(arr)
// console.log('fn1(arr)',fn1(arr))

// 2、对象键值对法
// function fn2 (array) {
//   var n = {}, r = [], len = array.length, val, type
//   for (var i = 0; i < array.length; i++) {
//     val = array[i]
//     type = typeof val
//     if (!n[val]) {
//       n[val] = [type]
//       r.push(val)
//     } else if (n[val].indexOf(type) < 0) {
//       n[val].push(type)
//       r.push(val)
//     }
//   }
//   return r
// }

// fn2(arr)
// console.log('fn2(arr)',fn2(arr))

// 3、数组下标判断法 ndexOf一般用
// 于查看字符在字符串或者数组中首次出现的位置，
// 如果在字符串或者数组中存在就返回该字符所处的位置，如果该字符子啊数组中不存在就会返回-1；

function fn3 (arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
fn3(arr)
// console.log('fn3(arr)',fn3(arr))

// 4、排序后相邻去除法
function fn4 (arr) {
  arr.sort()
  let newArr
}
