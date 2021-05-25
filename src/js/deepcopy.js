let obj_1 = {
  name: 'obj_1',
  proFn1: function (n) {
    return n * 2
  },
  proArr: ['a', 2, 'f', 3],
  proObj1: {
    a: 'AA',
    b: 'BB'
  },
  Id: 'Number-0',
  proFn2: function (m, n) {
    return m + n
  },
  proObj2: {
    pro1: 'single',
    pro2: {
      pro21: 'aaa',
      pro22: 'ccc'
    }
  }
}

function copyFn (obj) {
  if (obj === null) { return null }

  let result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = copyFn(obj[key]) // 如果是对象，再次调用该方法自身
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}

let obj_2 = copyFn(obj_1)
obj_1.name = 'gr'
console.log(obj_2, '222222222222')

console.log(obj_1, '11111111111')
