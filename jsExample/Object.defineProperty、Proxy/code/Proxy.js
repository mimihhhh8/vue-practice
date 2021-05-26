/**
 * Proxy 用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）
 * target 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
 * handler 以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理的行为
 */
const obj = {};
const fun = function() {};
const arr = []
const obj1 = {};
// const obj1 = function() {};
// const obj1 = [];


const proxy = new Proxy(obj, {
  /**
   * 读取代理对象的原型时触发该操作
   * @param {object} target 被代理的目标对象
   * @returns {object|null}
   */
  getPrototypeOf(target) {
    console.log(target, target === obj); // true
    console.log(this); // 当前函数getPrototypeOf
    return obj1;
  },

  /**
   * 设置代理对象的原型时触发该操作
   * @param {object} target 被拦截目标对象.
   * @param {object} prototype 对象新原型或为null.
   * @returns {boolean} 如果成功修改了[[Prototype]] true
   */
  setPrototypeOf(target, newPro) {
    console.log(target, newPro)
    return newPro
  },

  /**
   * 判断一个代理对象是否是可扩展时触发该操作
   * @param {object} target 被拦截目标对象
   * @returns {boolean}
   */
  isExtensible(target) {
    console.log(target)
    return true
  },

  /**
   * 让一个代理对象不可扩展时触发该操作
   * @param {object} target 被拦截目标对象
   * @returns {boolean}
   */
  preventExtensions(target) {
    console.log(target)
    Object.preventExtensions(target)
    return true
  },

  /**
   * 获取代理对象某个属性的属性描述时触发该操作
   * @param {object} target 目标对象
   * @param {string} prop 返回属性名称的描述
   * @returns {object|undefined}
   */
  getOwnPropertyDescriptor(target, prop) {
    console.log(prop)
    return { configurable: true, enumerable: true, value: 'key2' }
  },

  /**
   * 定义代理对象某个属性时的属性描述时触发该操作
   * @param {object} target 
   * @param {string} property 待检索其描述的属性名
   * @param {object} descriptor 待定义或修改的属性的描述符
   * @returns {boolean}
   */
  defineProperty(target, property, descriptor) {
    console.log(property, descriptor)
    return true
  },

  /**
   * 判断代理对象是否拥有某个属性时触发该操作
   * @param {object} target 
   * @param {string} prop 需要检查是否存在的属性.
   * @returns {boolean}
   */
  has(target, prop) {
    console.log(prop)
    if (prop[0] === 'k') {
      return true
    } else {
      return false
    }
  },

  /**
   * 读取代理对象的某个属性时触发该操作
   * @param {object} target 
   * @param {string} property 被获取的属性名
   * @param {object} receiver Proxy或者继承Proxy的对象
   * @returns {any}
   */
  get(target, property, receiver) {
    console.log(property, receiver)
    return obj1
  },

  /**
   * 给代理对象的某个属性赋值时触发该操作
   * @param {object} target 
   * @param {string} property 将被设置的属性名或 Symbol
   * @param {any} value 新属性值
   * @param {object} receiver 最初被调用的对象
   * @returns {boolean}
   */
  set(target, property, value, receiver) {
    console.log(property, value, receiver)
    return true
  },

  // 删除代理对象的某个属性时触发该操作
  deleteProperty(target, property) {
    return true
  },

  /**
   * 用于拦截 .ownKeys().
   * @param {*} target 
   * @returns {object} 必须返回一个可枚举对象.
   */
  ownKeys(target) {
    console.log(111)
    return ['a', 'b', 'c']
  },

  /**
   * 用于拦截函数的调用
   * @param {*} target 
   * @param {object} thisArg 被调用时的上下文对象
   * @param {array} argumentsList 被调用时的参数数组
   * @returns {any}
   */
  apply(target, thisArg, argumentsList) {
    console.log(thisArg, argumentsList)
  },

  /**
   * 用于拦截new 操作符
   * @param {*} target 
   * @param {array} argumentsList constructor的参数列表
   * @param {function} newTarget 最初被调用的构造函数
   * @returns {object}
   */
  construct(target, argumentsList, newTarget) {
    console.log(argumentsList, newTarget)
    return {}
  }
});


// console.log(proxy)


// 触发 getPrototypeOf
// Object.getPrototypeOf(proxy)
// proxy instanceof Object
// Object.prototype.isPrototypeOf(proxy) // 检查一个对象是否存在于另一个对象的原型链上
// Reflect.getPrototypeOf(proxy)

// 触发setPrototypeOf
// Object.setPrototypeOf(proxy, obj1)
// Reflect.setPrototypeOf(proxy, obj1)

// 触发isExtensible
// Object.isExtensible(proxy)
// Reflect.isExtensible(proxy)

// preventExtensions
// Object.preventExtensions(proxy)
// Reflect.preventExtensions(proxy)

// getOwnPropertyDescriptor
// console.log(
//   Object.getOwnPropertyDescriptor(proxy, 'key').value
// )
// Reflect.getOwnPropertyDescriptor(proxy, 'key')

// defineProperty
// Object.defineProperty(proxy, 'key', { configurable: true, enumerable: true, value: 'key2' })
// Reflect.defineProperty(proxy, 'key', { configurable: true, enumerable: true, value: 'key2' })

// has
// console.log('key' in proxy)
// console.log('x' in proxy)
// Reflect.has(proxy, 'x')

// get
// console.log(proxy.key)
// Reflect.get(proxy.key)

// set
// proxy.key = 1
// Reflect.set(proxy, 'key', 1)

// deleteProperty
// console.log(delete proxy.key)
// Reflect.deleteProperty(proxy.key)

// ownKeys
// console.log(Object.keys(proxy))
// console.log(Reflect.ownKeys(proxy))
// console.log(Object.getOwnPropertyNames(proxy))

// apply
// proxy目标对象需要是函数
// proxy(1)
// Reflect.apply(proxy, window, [1])

// construct 函数
// new proxy(1)
