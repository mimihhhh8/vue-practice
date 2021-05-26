// 返回值
// const obj = { key: 1 };
// const defineReturn = Object.defineProperty(obj, "key1", {});
// console.log(defineReturn);
// // console.log(Object.is(defineReturn, obj));


/**
 * value 属性对应的值
 * 任何有效的JavaScript值
 * 默认undefined
 */
// const obj = { key: 0 };
// Object.defineProperty(obj, "key", {
//   value: 1,
// //   writable: true,
// //   configurable: true,
// //   enumerable: true,
// });
// // console.log(obj) // {key: 1}
// // obj.key = 2
// // console.log('修改：', obj) // {key: 2}
// // console.log('遍历：', Object.keys(obj)) // ["key"]
// // delete obj.key
// // console.log('删除：', obj) // {}
// // _劫持目标对象原有的属性，value相当于赋值操作并且可以对目标属性删改遍历

// const obj = {};
// Object.defineProperty(obj, "key", {
//   value: 0,
// //   writable: false,
// //   configurable: false,
// //   enumerable: false,
// });
// // console.log('Object.defineProperty: ', obj) // {key: 0}
// // delete obj.key
// // console.log('删除：', obj) // {key: 0}
// // obj.key = 1
// // console.log('修改：', obj) // {key: 0}
// // console.log('遍历：', Object.keys(obj)) // []
// // _劫持目标对象没有的属性，value相当于赋值操作并且不可以对目标属性删改遍历


/**
 * writable 是否允许修改属性值
 * boolean类型
 */
// const obj = { };
// Object.defineProperty(obj, "key", {
//   value: 0,
//   writable: false
// });
// console.log('Object.defineProperty: ', obj) // {key: 0}
// // obj.key = 1
// // console.log('修改：', obj) // {key: 1}
// // delete obj.key
// // console.log('删除：', obj) // {key: 0}
// // console.log('遍历：', Object.keys(obj)) // []


/**
 * configurable 是否允许删除属性
 * boolean类型
 */
// const obj = {};
// Object.defineProperty(obj, "key", {
//   value: 0,
//   configurable: false
// });
// console.log('Object.defineProperty: ', obj) // {key: 0}
// // console.log('遍历：', Object.keys(obj)) // []
// // obj.key = 1
// // console.log('修改：', obj) // {key: 0}
// // delete obj.key
// // console.log('删除：', obj) // {}


/**
 * enumerable是 否允许属性遍历
 * boolean类型
 */
// const obj = {};
// Object.defineProperty(obj, "key", {
//   value: 0,
//   enumerable: false
// });
// console.log('Object.defineProperty: ', obj) // {key: 0}
// // console.log('遍历：', Object.keys(obj))
// // obj.key = 1
// // console.log('修改：', obj) // {key: 0}
// // delete obj.key
// // console.log('删除：', obj) // {key: 0}


/**
 * getter setter
 * Fun
 */
// const obj = {};
// Object.defineProperty(obj, "key", {
//   get() {
//     console.log('[getter]"key"属性被读取');
//   },
//   set(newVal) {
//     console.log('[setter]"key"属性被修改为: ', newVal);
//   },
//   enumerable: true,
//   configurable: true,
// });
// obj.key;
// obj.key = 1;
// console.log(obj);


/**
 * Object.preventExtensions()
 * 在严格模式下禁止对象添加新属性并且保留已有属性
 */
// 'use strict'
// const obj = { key: 0 };
// Object.preventExtensions(obj)
// obj.value = 1 // 无法添加属性值，对象不可扩展


/**
 * Object.seal()
 * 创建一个密封的对象，在一个现有对象上调用object.preventExtensions，
 * 把所有现有属性标记为 configurable:false，不可删除。
 */
// 'use strict'
// const obj = { key: 0 };
// Object.seal(obj)
// delete obj.key // Cannot delete property 'key' of
// obj.value = 1
// console.log(obj.value) // 无法添加属性值，对象不可扩展


/**
 * Object.freeze()
 * 创建一个冻结对象，在一个现有对象上调用Object.seal(),
 * 把所有现有属性标记为 writable: false, 不可赋值（也不可删除、不可添加属性）。
 */
// 'use strict'
// const obj = { key: 0 };
// Object.freeze(obj)
// // obj.key = 1 // Cannot assign to read only property 'key' of object
// // delete obj.key // Cannot delete property 'key' of
// // obj.value = 1 // Cannot add property value
// // console.log(Object.keys(obj)) // [ "key" ]
// // Object.defineProperty(obj, "key", { //  Cannot redefine property: key 不可修改配置属性
// //   configurable: true,
// //   writable: true
// // })


/**
 * 继承问题
 */
// _用中间变量存值，该值会被所有对象会共享
// function Foo() {}
// let value
// Object.defineProperty(Foo.prototype, "name", {
//   get() {
//     return value
//   },
//   set(name) {
//     value = name
//   }
// })
// const foo1 = new Foo()
// const foo2 = new Foo()
// // console.log(Foo.prototype)
// // console.log(foo1)
// // console.log(foo2)
// // foo1.name = 'xiaoming'
// // console.log(foo1.__proto__)
// // console.log(foo2.__proto__)
// // console.log(foo1.__proto__ === Foo.prototype)
// // console.log(foo2.__proto__ === Foo.prototype)


// 解决办法一、设置 writable: false 就不会被改变
// function Foo() {}
// let value
// Object.defineProperty(Foo.prototype, "name", {
//   writable: false,
//   get() {
//     return value
//   },
//   set(name) {
//     value = name
//   }
// })
// const foo1 = new Foo()
// const foo2 = new Foo()
// foo1.name = 'xiaoming' // error


// 解决办法二、用另一个属性去代替
//   get() {
//     return this._value
//   }


// 解决办法三、Object.create
// _Object.create 创建一个新对象，使得新对象的__proto__指向目标对象
// console.log(Object.create(null))
// // const obj = { key: 0 }
// // console.log(obj)
// // const obj1 = Object.create(obj)
// // console.log(obj1)
// // obj1.key = 2
// // console.log(obj1.key) // 2
// // console.log(obj.key) // 0 不会改变原型链上的属性值

// function Foo() {}
// let value
// Object.defineProperty(Foo.prototype, "name", {
//   get() {
//     return value
//   },
//   set(name) {
//     value = name
//   }
// })
// const foo1 = Object.create(Foo)
// const foo2 = new Foo()
// const foo3 = new Foo()
// foo2.name = 'xiaoming'
// console.log(Foo.prototype.name)
// console.log(foo1.__proto__.name)
// console.log(foo2.__proto__.name)
// console.log(foo3.__proto__.name)


// 简易的双向绑定


// 缺陷
// const arr = [1, 2, 3];
// arr.forEach((item, index) => {
//   Object.defineProperty(arr, index, {
//     get() {
//       console.log("get: ", item);
//       return item;
//     },
//     set(newVal) {
//       console.log("set: ", newVal);
//       item = newVal;
//     }
//   });
// });
// // arr[3] = 1;
// // arr.push(4);
// // arr.length = 1;
// // arr.splice(3, 1, 4);
