class Queue {
    constructor(){
        this.items = []
    }
    Enqueue(value){
        this.items.unshift(value)
    }
    Dequeue(){
        this.items.pop()
    }
    toArray(){
        return this.items
    }
}

let queue = new Queue()
queue.Enqueue(1)
queue.Enqueue(2)
queue.Enqueue(3)
console.log(queue.toArray())
queue.Dequeue()
console.log(queue.toArray())

