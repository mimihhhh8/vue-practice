// vue.set
export function set(target, key, val) {
  // 1. 判断不是生产环境并且传的不是数据类型时抛出错误
  if (
    process.env.NODE_ENV !== "production" &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(
      `Cannot set reactive property on undefined, null, or primitive value: ${target}`
    );
  }
  // 2. 判断数组 && 有效索引
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key); // arr = [1,2] Vue.set(arr,5,1)
    target.splice(key, 1, val);
    return val;
  }
  // 对象
  // 3. 判断对象有否有key 直接渲染 不需要操作
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  // 判断对象是否有__ob__标识 来辨识是否是响应对象
  const ob = target.__ob__;
  // vue实例对象 && 根数据对象 --> 报错 $data
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== "production" &&
      warn(
        "Avoid adding reactive properties to a Vue instance or its root $data " +
          "at runtime - declare it upfront in the data option."
      );
    return val;
  }
  // 4. 给新加的属性添加依赖 以后再直接修改这个新的属性的时候就会触发页面渲染
  defineReactive(ob.value, key, val);
  // 4.1 立即执行 触发当前的依赖 页面进行重新渲染
  ob.dep.notify();
  return val;
}

/**
 * Define a reactive property on an Object.
 * defineReactive的作用是通过Object.defineProperty为数据定义上getter\setter方法，
 * 进行依赖收集后闭包中的Deps会存放Watcher对象。
 * 触发setter改变数据的时候会通知Deps订阅者通知所有的Watcher观察者对象进行试图的更新。
 */
export function defineReactive(
  obj,
  key,
  val,
  customSetter
) {
  /*在闭包中定义一个dep对象*/
  // 订阅多个观察者的发布者
  const dep = new Dep();

  // 筛选出不能改变配置的属性
  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  /*如果之前该对象已经预设了getter以及setter函数则将其取出来，
  新定义的getter/setter中会将其执行，保证不会覆盖之前已经定义的getter/setter。*/
  // cater for pre-defined getter/setters
  const getter = property && property.get;
  const setter = property && property.set;

  /*对象的子对象递归进行observe并返回子节点的Observer对象*/
  // 也就是对对象添加一个__ob__这样一个可响应的标志属性
  let childOb = observe(val);

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      /*如果原本对象拥有getter方法则执行*/
      const value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        /*进行依赖收集*/
        dep.depend();
        if (childOb) {
          /*子对象进行依赖收集，其实就是将同一个watcher观察者实例放进了两个depend中，
          一个是正在本身闭包中的depend，另一个是子元素的depend*/
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          /*是数组则需要对每一个成员都进行依赖收集，如果数组的成员还是数组，则递归。*/
          dependArray(value);
        }
      }
      return value;
    },

    set: function reactiveSetter(newVal) {
      /*通过getter方法获取当前值，与新值进行比较，一致则不需要执行下面的操作*/
      const value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return;
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== "production" && customSetter) {
        customSetter();
      }
      if (setter) {
        /*如果原本对象拥有setter方法则执行setter*/
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      /*新的值需要重新进行observe，保证数据响应式*/
      childOb = observe(newVal);
      /*dep对象通知所有的观察者*/
      dep.notify();
    }
  });
}

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * Dep就是一个发布者，可以订阅多个观察者，
 * 依赖收集之后Deps中会存在一个或多个Watcher对象，
 * 在数据变更的时候通知所有的Watcher。
 */
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor() {
    this.id = uid++;
    this.subs = [];
  }

  /*添加一个观察者对象*/
  addSub(sub: Watcher) {
    this.subs.push(sub);
  }
  /*移除一个观察者对象*/
  removeSub(sub: Watcher) {
    remove(this.subs, sub);
  }

  /*依赖收集，当存在Dep.target的时候添加观察者对象*/
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }
  /*通知所有订阅者*/
  notify() {
    // stabilize the subscriber list first
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}

/**
 * push/pop/shift/unshift/splice/sort/reverse重写
 * 在保证不污染不覆盖数组原生方法上添加监听
 * 1.通知所有注册的观察者进行响应式处理
 * 2.如果是添加成员的操作，需要对新成员进行observe
 */
["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
  function (method) {
    // 创建一个新的数组对象，修改该对象上的数组的七个方法，防止污染原生数组方法
    const arrayProto = Object.create(Array.prototype);
    /*将数组的原生方法缓存起来，后面要调用*/
    const original = arrayProto[method];

    def(arrayMethods, method, function mutator() {
      // avoid leaking arguments:
      // http://jsperf.com/closure-with-arguments
      let i = arguments.length;
      const args = new Array(i);
      while (i--) {
        args[i] = arguments[i];
      }
      /*调用原生的数组方法*/
      const result = original.apply(this, args);

      /*数组新插入的元素需要重新进行observe才能响应式*/
      const ob = this.__ob__;
      let inserted;
      switch (method) {
        case "push":
          inserted = args;
          break;
        case "unshift":
          inserted = args;
          break;
        case "splice":
          inserted = args.slice(2);
          break;
      }
      if (inserted) ob.observeArray(inserted);

      // notify change
      /*dep通知所有注册的观察者进行响应式处理*/
      ob.dep.notify();
      return result;
    });
  }
);
