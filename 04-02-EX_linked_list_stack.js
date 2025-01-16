// Node class for the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack implemented using a linked list
class Stack {
    constructor() {
        this.top = null; // Points to the top of the stack
        this.size = 0; // Tracks the size of the stack
    }

    // Push a new element onto the stack
    push(value) {
        const newNode = new Node(value);
        if (this.top) {
            newNode.next = this.top;
        }
        this.top = newNode;
        this.size++;
    }

    // Pop the top element off the stack
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        const removedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return removedNode.value;
    }

    // Peek at the top element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        return this.top.value;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack
    getSize() {
        return this.size;
    }

    // Print all elements in the stack
    printStack() {
        let current = this.top;
        const elements = [];
        console.log(this.top, "top");
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log("Stack:", elements.join(" -> "));
    }
}

// Example usage
const stack = new Stack();

// Pushing elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack(); // Output: Stack: 30 -> 20 -> 10

// Peeking at the top element
console.log("Peek:", stack.peek()); // Output: Peek: 30

// Popping elements from the stack
console.log("Popped:", stack.pop()); // Output: Popped: 30
stack.printStack(); // Output: Stack: 20 -> 10

// Checking the size
console.log("Size:", stack.getSize()); // Output: Size: 2

// Checking if the stack is empty
console.log("Is Empty:", stack.isEmpty()); // Output: Is Empty: false
