// type ReturnFn = (val: unknown) => boolean

// let utils: Record<string, ReturnFn> = {} //对象一般使用内置类，key:string，值是函数

// function isType(typing: string) {
//     return function (val: unknown) {
//         return Object.prototype.toString.call(val) == `[object ${typing}]`
//     }
// }

// ['String', 'Number', 'Boolean'].forEach(type => {
//     utils['is' + type] = isType(type)
// })

// console.log(utils.isString('hello'))