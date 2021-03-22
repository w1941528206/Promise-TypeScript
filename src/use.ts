import Pro from './promise-链式调用'

setTimeout(function () {

    console.log("setTimeout")   //宏任务

}, 0)

const promise = new Pro((resolve, reject) => {
    resolve('ok')
    console.log(123)
}).then(
    data => {
        return data + '1'
    }, err => {
        return 1
    }
).then(
    data => {
        return data + '2'
    },
    err => {
        console.log(err, '---')
    }
).then(
    data => {
        console.log(data, '***')
    },
    err => {
        console.log(err, '---')
    }
)