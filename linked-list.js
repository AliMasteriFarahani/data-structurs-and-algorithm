class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newElement = { value: value, next: null };
        if (this.tail) {
            this.tail.next = newElement;
            console.log("tail next:", this.tail);
        }
        this.tail = newElement;
        console.log("tail:", this.tail);

        if (!this.head) {
            this.head = newElement;
            console.log("head:", this.head);
        }
        console.log("end append:");
    }
    prepend(value) {
        const newElement = { value: value, next: this.head };
        this.head = newElement;
        if (!this.tail) {
            this.tail = newElement;
        }
    }
    delete(value) {
        if (!this.head) {
            return;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentElement = this.head;

        while (currentElement.next) {
            if (currentElement.next.value === value) {
                currentElement.next = currentElement.next.next;
            } else {
                currentElement = currentElement.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = currentElement;
        }
    }
    find(value) {
        if (!this.head) {
            return;
        }

        let curElement = this.head;
        // let elements = [];
        while (curElement) {
            if (curElement.value === value) {
                // elements.push(curElement);
                 return curElement
            }
            curElement = curElement.next;
        }
        return 
    }
    insertAfter(value, afterValue) {
        const existsElement = this.find(afterValue)
        if (existsElement) {
            const newElement = {value:value,next:existsElement.next}
            existsElement.next = newElement
        }
        // if (!this.head) {
        //     return;
        // }

        // let curElement = this.head;
        // let newElement = { value: value, next: null };
        // while (curElement) {
        //     if (curElement.value === afterValue) {
        //         newElement.next = curElement.next.next;
        //         curElement.next = newElement;
        //     }
        //     curElement = curElement.next;
        // }
    }
    insertBefore(value, beforeValue) {
        if (!this.head) {
            return;
        }

        let curElement = this.head;
        let newElement = { value: value, next: null };

        if (this.head === this.tail) {
            newElement.next = curElement;
            this.head = newElement;
            return;
        }

        while (curElement.next) {
            if (curElement.next.value === beforeValue) {
                newElement.next = curElement.next.next;
                curElement.next = newElement;
            }

            curElement = curElement.next;
        }
    }
    toArray() {
        const elements = [];
        let curElement = this.head;
        while (curElement) {
            elements.push(curElement);
            curElement = curElement.next;
        }
        return elements;
    }
}

const linkedList = new LinkedList();

linkedList.append(2);
linkedList.append("s");
linkedList.append("s");
linkedList.append(true);
linkedList.prepend("first");
linkedList.append('b');
// linkedList.prepend("first");
linkedList.prepend(1);
// linkedList.delete("s");
// linkedList.delete("first");
linkedList.delete(true);
// console.log("find:",linkedList.find("s"))
// console.log("find:",linkedList.find(1))
linkedList.insertAfter("second", "first");
linkedList.insertAfter("oop", "b");
// linkedList.insertBefore("s before", "s");
console.log("all list : ", linkedList.toArray());
