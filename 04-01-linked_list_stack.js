import { LinkedList } from "./02-linked_list.js";

class StackList {
    constructor() {
        this.list = new LinkedList();
    }
    push(value) {
        this.list.prepend(value); 
    }
    pop() {
        return this.list.deleteHead()
    }
    toArray() {
        return this.list.toArray()
    }
}

let stackList = new StackList()
stackList.push("new book 1")
stackList.push("new book 2")
stackList.push("new book 3")
console.log(stackList.toArray());
stackList.pop()
console.log(stackList.toArray());


