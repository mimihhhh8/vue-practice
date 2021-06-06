
// js-请在数组中找出两个加起来等于目标值的数

// function fun (arr, target) {
//   let obj = {}
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i]
//     if (obj[item] === undefined) {
//       let x = target - item
//       obj[x] = i
//     } else {
//       console.log(obj[item], i)
//       return [obj[item], i]
//     }
//   }
//   return null
// }

function twoNum (nums, target) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i]
    let secondNum = nums.slice(i + 1).filter(val => val === otherNum)
    if (secondNum.length > 0) {
      arr.push(i, nums.indexOf(secondNum[0]))
    }
  }
  return arr
}

let arr = [1, 3, 4, 6, 7, 5, 2, 7]
let target = 9
twoNum(arr, target)
console.log(twoNum(arr, target))
