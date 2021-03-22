const fs = require('fs')

interface events {
    arr: Array<Function>
    on(fn: Function): void
    emit(): void
}

let events: events = {
    arr: [],
    on(fn) {
        this.arr.push(fn) //存放
    },
    emit() {
        this.arr.forEach(fn => fn())
    }
}

let person = {} as any


//订阅，person的两个key都存入之后才会log
events.on(() => {
    if (Object.keys(person).length == 2) {
        console.log(person)
    }
})
events.on(() => {
    console.log('触发一次')
})

fs.readFile('./name.txt', 'utf8', (err, data) => {
    person.name = data
    events.emit()
    //发布第一次
})

fs.readFile('./age.txt', 'utf8', (err, data) => {
    person.age = data
    events.emit()
    //发布第二次
})

//1.把需要做的事情放入数组中，事情发生了让订阅的事依次执行