
/**
 * 发布订阅模式
 * https://juejin.cn/post/6844903616172539917#heading-9
 */

// let corp = {}

// corp.list = []


// // 订阅事件
// corp.on = function(fn){
//     this.list.push(fn)
//     console.log(this) 
// }

// // 发布事件
// corp.emit = function(){
//     this.list.forEach(cb => {
//         cb.apply(this,arguments)
//     })
// }

// // 测试用例
// corp.on(function(position,salary){
//     console.log('你的职位是：'+position)
//     console.log('期望薪水：'+salary)
// })

// corp.on(function(skill, hobby) {
//     console.log('你的技能有： ' + skill);
//     console.log('爱好： ' + hobby);
// });

// corp.emit('前端',1000)
// corp.emit('端茶和倒水', '足球')

// 运行结果不是期望结果

/**
    你的职位是：前端
    期望薪水：10000
    你的技能有： 前端
    爱好： 10000
    你的职位是：端茶和倒水
    期望薪水：足球
    你的技能有： 端茶和倒水
    爱好： 足球
*/ 

// 期望
/*
    你的职位是：前端
    期望薪水：10000
    
    你的技能有： 端茶和倒水
    爱好： 足球
*/

/**
 * 之所以出现此种情况，那是在on方法的时候一股脑的都将fn函数全部放到了列表中。
 * 然而需要的只是一个简单的key值，就可以解决了。让我们改写一下上面的代码
 * 
 * 
[].slice.call( arguments )
// 等效于
Array.prototype.slice.call( arguments )

 * 
 * arguments 是JavaScript里的一个内置对象,有的函数都有属于自己的一个arguments对象，它包括了函所要调用的参数。object对象。
 */


let corp = {}

corp.list = {}

// 订阅者
corp.on = function(key,fn){
    if(!this.list[key]){
        this.list[key] = []
    }
    this.list[key].push(fn)
    console.log(this)
}

// 发布者
corp.emit = function(){
    let key = [].shift.call(arguments)
    fns = this.list[key]

    if(!fns || fns.length === 0){
        return false
    }

    fns.forEach(fn=>{
        fn.apply(this,arguments)
    })
}


corp.on('join',(position,salary) => {
    console.log('你的职位是：'+position)
    console.log('期望薪水：'+salary)
})
corp.on('other',(position,salary) => {
    console.log('你的职位是：'+position)
    console.log('期望薪水：'+salary)
})

corp.emit('join','前端',10000)
corp.emit('other','后端',10000)
