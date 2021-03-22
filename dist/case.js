const promise = new Promise((resolve,reject)=>{
    reject('no')
    resolve('ok')
})

promise.then((data)=>{
    console.log('success',data)
},(err)=>{
    console.log('filed',err)
})