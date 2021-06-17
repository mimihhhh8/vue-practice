// https://blog.csdn.net/qq_39045645/article/details/105820512


function create(company,...args){
    let obj = Object.create(null)

    Object.setPrototypeOf(obj,company.prototype)

    let result = company.apply(obj,args)


    return result instanceof Object ? result :obj
}

function company(name,address){
    this.name = name
    this.address = address
}

let company1 = create(company,'yideng','beijing')

console.log(company1)

