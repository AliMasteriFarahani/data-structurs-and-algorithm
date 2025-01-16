import { LinkedList } from "./02-linked_list.js";
class Queue {
    constructor() {
        this.items = new LinkedList()
    }

    enqueue(value){
        this.items.append(value)
    }
    dequeue(){
        this.items.deleteHead()
    }
    toArray(){
        return this.items.toArray()
    }
    
}

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.toArray())
queue.dequeue()
console.log(queue.toArray())
