// 冒泡排序

function fn1 () {
  // eslint-disable-next-line standard/array-bracket-even-spacing
  let arr = [1, 2, 3, 9, 6, 4 ]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log(arr)
  return arr
}

// fn1()
