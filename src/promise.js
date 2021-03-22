// const promise = new Promise((resolve,reject)=>{
//     resolve('ok')
// }).then((data)=>{
//     throw new Error('错误')
// }).catch((err)=>{
//     console.log('catch error')
//     console.log(err)
// })

// const promise = new Promise((resolve,reject)=>{
//     resolve('ok')
// }).then((data)=>{
//     throw new Error('错误')
// },(err)=>{
//     console.log('catch err')
//     console.log(err)
// })

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('success1')
//     },1000)
// })
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('success2')
//     },3000)
// })
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('success3')
//     },2000)
// })

// Promise.all([promise1,promise2,promise3])
// Promise.race([promise1,promise2,promise3])

// function fn(){
//     return new Promise((resolve, reject)=>{
//         console.log('waitting...')
//         let sino = parseInt(Math.random() * 6 + 1)
//         setTimeout(()=>{
//             resolve(sino)
//         },1000)
//     })
// }
// async function test(){
//     // let n = await fn()
//     // console.log(n)
//     for(i=0;i<6;i++){
//         console.log(await fn())
//     }
// }
// test()

// const p = () => {
//     return new Promise((resolve,rejcet)=>{
//         setTimeout(()=>{
//             resolve('ok')
//         },2000)
//     })
// }

// async function test(){
//     const pro = await p()
//     console.log(pro)
// }

// test()

