
/** 1、*/
// let a = {
//     b:12,
//     c:{
//         fn:function(){
//             // console.log(this.b)
//         }
//     }
// }
// a.c.fn()//undefined

/**2、https://blog.csdn.net/qq_41501591/article/details/80976220?utm_term=%E4%B8%A4%E4%B8%AA%E7%A9%BA%E6%95%B0%E7%BB%84%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%9B%B8%E7%AD%89&utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-1-80976220&spm=3001.4430*/
// console.log([]===[])

/** */
function fn1(){
    console.log('123',value)
    var value = 123 //undefied
    let value = 123 //报错
}

fn1()