//高阶函数：函数参数是一个函数｜｜函数返回一个函数

type Callback = () => void
type ReturnFn = (...args: string[] | number[]) => void
//声明语法
declare global {
    interface Function { //接口合并
        before(fn: Callback): ReturnFn
    }
}

Function.prototype.before = function (fn) {
    return (...args) => {
        fn()
        this(...args)
    }
}

function core(...args) {
    console.log('core...', ...args)
}

let fn = core.before(() => {
    console.log('before core...')
})

fn(1, 2, 3)

export { }