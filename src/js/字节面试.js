

// 请编写一个函数 getQueryString 实现 url 的序列化
// 例如：
// const url = '
// https://www.tt.com/index?id=20&type=[1,2,3]
// '
// const params = getQueryString(url)
// console.log(params)


/**方发二 */
// // 输出
// {
//   id:20,
//   type: [1,2,3]
// }
 
//  const getQueryString = (url) => {
//     let obj = {}
//      let arr1 = url.splite('?')
//      let arr2 = arr1[1].splite('&')
//      for(let i=0;i<arr2.length;i++){
//         let newarr =  arr2[i].splite('=')
//        obj[newarr[0]] = newarr[1]
//      }
   
    
//      return obj
//  }
// const url = 'https://www.tt.com/index?id=20&type=[1,2,3]'
//  getQueryString(url)

/**方发二 */

export const get_url_params = (search = window.location.search) => {
        const param = (search.replace(/^\?/, ''));
        return qs.parse(param) || {};
    }
/********************************************************************************************** */
// 编写一个函数（toTmplString）实现模版字符串功能。如:
let infos = {
    name: 'xiaoming',
    age: 23,
    city: 'beijing',
    school: 'PKU',
  }
  
  toTmplString("my name is ${name},I am ${age} years old",infos)
  //期望输出：   “my name is xiaoming,I am 23 years old"
  
  
  function toTmplString(str, infos){
      let arr1 = Object.keys(infos)
      let arr2 = Object.values(infos)
      for(let i = 0;i<arr1.length;i++){
          let keys =  arr1[i]
          let value =  infos[arr1[i]]
           str = str.replace(`\${${keys}}`,value) 
  
          
      }
      // let name = arr1[0]
      // let age = arr2[0]
      return str
  }