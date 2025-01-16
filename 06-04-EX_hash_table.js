class HashTable {
    constructor(size) {
        this.size = size;
        this.table = Array(this.size)
            .fill(null)
            .map(() => []);
    }

    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }
    set(key, value) {
        const hashKey = this.hash(key);
        let bucket = this.table[hashKey];
        for (const [key, value] of bucket) {
            if (key === key) {
                bucket[1] = value;
                return;
            }
        }
        bucket.push(key, value);
    }
    get(key) {
        const hashKey = this.hash(key);
        let bucket = this.table[hashKey];
        for (const [key, value] of bucket) {
            if (key === key) {
                return value;
            }
        }
        return undefined;
    }
    delete(key) {
        const hashKey = this.hash(key);
        let bucket = this.table[hashKey];
        for (const [key, value] of bucket) {
            if (key === key) {
                bucket.splice(0, 2);
                return true;
            }
        }
        return false;
    }
    display() {
        this.table.forEach((bucket, index) => {
            if (bucket.length) {
                console.log(`Index ${index}:`, bucket);
            }
        });
    }
}

let table = new HashTable(100);
table.set("name", "John");
table.set("age", 30);
table.display();
console.log(table.delete("age"));
table.display();
