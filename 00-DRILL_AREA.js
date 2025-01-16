class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class StackList {
    constructor(){
        this.top = null
        this.size = 0
    }
    push(value){
        const newNode = new Node(value,null)
        if (this.top) {
           newNode.next = this.top
        }
        this.top = newNode
        this.size++
    }
    pop(){
        if (!this.top) {
            return
        }
        this.top = this.top.next
        this.size--
    }
    printStack(){
        let elements = []
        if (!this.top) {
            return
        }
        let curElement = this.top
        while (curElement) {
            elements.push(curElement.value)
            curElement = curElement.next
        }
        return elements
    }
}


let stackList = new StackList()

stackList.push(1)
stackList.push(2)
stackList.push(3)
stackList.pop()
console.log(stackList.printStack())