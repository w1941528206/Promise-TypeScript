const events = {
    arr: [],
    on(fn){
        this.arr.push(fn)
    },
    emit() {
        this.arr.forEach(fn => fn())
    }
} 

const person = {}

events.on(()=>{
    if(Object.keys(person).length == 2){
        console.log(person)
    }
})

// events.on(()=>{
//     console.log('触发一次')
// })

setTimeout(()=>{
    person.name = 'zs'
    events.emit()
},1000)

setTimeout(()=>{
    person.age = 18
    events.emit()
},2000)

console.log(person)