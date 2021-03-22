//观察者：observers=[]

class Subject {
    name: string
    state: string
    observers: any
    constructor(name) {
        this.observers = []
        this.name = name
        this.state = 'happy'
    }
    attach(o) { //添加观察者
        this.observers.push(o)
    }
    setState(newState) {
        this.state = newState
        this.observers.forEach(o => o.update(this)) //通知观察者
    }
}

class Observer {
    name: string
    constructor(name) {
        this.name = name
    }
    update(baby) {
        console.log(this.name + ':' + baby.name + baby.state)
    }
}

const baby = new Subject('baby')
const father = new Observer('father')
const mother = new Observer('mother')

baby.attach(father)
baby.attach(mother)

baby.setState('cry')
baby.setState('hungry')