class HashTable {
    constructor(size = 1000) {
        this.size = size;
        this.products = Array(this.size).fill(null);
    }
    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }
    set(key, value) {
        let keyHash = this.hash(key);
        this.products[keyHash] = value;
    }
    get(key) {
        let keyHash = this.hash(key);
        return this.products[keyHash];
    }
}

function findFirstChar(str) {
    let table = new HashTable();
    for (const char of str) {
        if (table.get(char)) {
            return char;
        }
        table.set(char, 1);
    }
}
const message = "hello world!";
console.log(findFirstChar(message));