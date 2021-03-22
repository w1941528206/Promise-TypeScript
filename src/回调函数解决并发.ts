const fs = require('fs')

//promise: 1.解决异步并发问题 2.回调地狱问题

interface Msg {
    name: string
    age: number
}

function after(times, callback) {
    const obj = {} as Msg
    return function (key: string, value) {
        obj[key] = value
        --times == 0 && callback()
    }
}
const fn = after(2, (obj) => {
    console.log(obj)
})

fs.readFile('./name.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        fn('name', data)
    }
})

fs.readFile('./age.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        fn('age', data)
    }
})

export { }