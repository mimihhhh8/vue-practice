/**
 * (1)原型链继承
 * (2)构造函数继承
 * (3)组合继承
 * 
 * 
 * call和apply的区别 https://baijiahao.baidu.com/s?id=1623502672848488220&wfr=spider&for=pc
 */


/**1、原型链继承 
 * 这种继承存在的问题
 * （1）不能向父类构造函数传入参数
 * （2）所以子类函数继承同一父类的实例，子类修改了父类的构造属性会互相影响
*/

// function Parent(){
//     this.name = 'Parent'
// }

// function Child(){
//     this.age = 12
// }

// Child.prototype = new Parent()
// Child.prototype.constructor = Child
// console.log(Child.prototype)


/**
 * 2、构造器继承（最简单的一种）
 * 
 * 1 call的语法：函数名.call(obj,参数1,参数2,参数3……);
 * 2 apply的语法：函数名.apply(obj,[参数1,参数2,参数3……]);
 */
// function Parent(){
//     this.name = 'Parent'
// }

// function Child(){
//     Parent.call(this) //
//     this.age = 12
//     console.log(this.name,this.age)
// }

// Child()


/**
 * 3、组合继承
 * 是直接让Child的原型等于Parent的原型会导致修改了子类的原型属性也会影响父类的原型
 * 
 */
// function Parent(){
//     this.name = 'Parent'
// }
// function Child(){
//     Parent.call(this) 
//     this.age = 12
// }
// Child.prototype = Parent.prototype
// Child.prototype.constructor = Child
// console.log(Child.prototype , Parent.prototype)

/**
 * 4、优化组合继承
 * 构造器属性定义了两遍，消耗没必要的内存。
 */
// function Parent(){
//     this.name= 'Parent'
// }

// function Child(){
//     Parent.call(this)
//     this.age = 12
// }

// Child.prototype = new Parent()
// Child.prototype.constructor = Child

/**
 * 5、寄生组合继承
 * 解决了上面说的所有问题呢。这种继承还有一种简单的写法，借用ES6的语法。
 */

// function Parent(){
//     this.name = 'Parent'
// }

// function Child(){
//     Parent.call(this)
//     this.age = 12
// }

// function F(){
// }
// F.prototype = Parent.prototype
// Child.prototype = new F()

// Child.prototype.constructor = Child


/**
 * 6、寄生组合继承另种方发，ES6
 */

function Parent(){
    this.name = 'Parent'
}

function Child(){
    Parent.call(this)
    this.age = 12
}
console.log(Parent.prototype)
Child.prototype = Object.create(Parent.prototype)
console.log(Child.prototype)  
/**
 * Object.create() es6创建对象的另一种方式，可以理解为继承一个对象, 添加的属性是在原型下。
 */
Child.prototype.constructor = Child

