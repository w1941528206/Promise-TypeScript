const enum STATUS {
    pending = 'PENDING',
    fulfilled = 'FULFILLED',
    rejected = 'REJECTED'
}

class Promise {
    status: STATUS
    value: any
    reason: any
    onResolvedCallbacks: Function[]
    onRejectedCallbacks: Function[]
    constructor(executor) { //默认new一个Promise时需要传入一个函数，需要两个参数，成功&失败 高阶函数
        this.status = STATUS.pending //当前默认状态
        this.value = undefined //成功原因
        this.reason = undefined //失败原因
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = (value?: any) => {
            if (this.status === STATUS.pending) {
                this.status = STATUS.fulfilled
                this.value = value
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        const reject = (reason?: any) => {
            if (this.status === STATUS.pending) {
                this.status = STATUS.rejected
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        //每次调用then就产生一个全新promise
        const promise2 = new Promise((resolve, reject) => {
            if (this.status == STATUS.fulfilled) {
                const x = onFulfilled(this.value)
                resolve(x) //用then的返回值作为下一次成功回调结果
            }
            if (this.status == STATUS.rejected) {
                const x = onRejected(this.reason)
                reject(x)
            }
            if (this.status == STATUS.pending) {
                this.onResolvedCallbacks.push(() => {
                    onFulfilled(this.value)
                })
                this.onRejectedCallbacks.push(() => {
                    onRejected(this.reason)
                })
            }
        })
        return promise2
    }
}

export default Promise