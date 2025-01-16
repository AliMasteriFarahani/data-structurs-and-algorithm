class HashTable {
    constructor(size = 100) {
        this.size = size; // Size of the hash table
        this.table = Array(this.size).fill(null).map(() => []); // Initialize with empty arrays
    }

    // Hash function to compute index from a key
    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0); // Sum ASCII values of characters
        }
        return hash % this.size; // Modulo to fit within table size
    }

    // Add or update a key-value pair
    set(key, value) {
        const index = this.hash(key); // Get index for the key
        const bucket = this.table[index]; // Retrieve the bucket (array) at the index
        // Check if the key already exists in the bucket
        for (const [i, pair] of bucket.entries()) {
            if (pair[0] === key) {
                bucket[i][1] = value; // Update value if key exists
                return;
            }
        }

        // If key doesn't exist, add a new key-value pair
        bucket.push([key, value]);
    }

    // Retrieve a value by its key
    get(key) {
        const index = this.hash(key); // Get index for the key
        const bucket = this.table[index]; // Retrieve the bucket (array) at the index

        // Search the bucket for the key
        for (const [pairKey, pairValue] of bucket) {
            if (pairKey === key) {
                return pairValue; // Return the value if key is found
            }
        }

        return undefined; // Return undefined if key is not found
    }

    // Delete a key-value pair by its key
    delete(key) {
        const index = this.hash(key); // Get index for the key
        const bucket = this.table[index]; // Retrieve the bucket (array) at the index

        // Find the key-value pair and remove it
        for (const [i, pair] of bucket.entries()) {
            if (pair[0] === key) {
                bucket.splice(i, 1); // Remove the pair from the bucket
                return true; // Return true to indicate successful deletion
            }
        }

        return false; // Return false if key was not found
    }

    // Print the entire hash table
    display() {
        this.table.forEach((bucket, index) => {
            if (bucket.length) {
                console.log(`Index ${index}:`, bucket);
            }
        });
    }
}

// Example Usage
const hashTable = new HashTable();

// Adding key-value pairs
hashTable.set("name", "Ali");
hashTable.set("age", 30);
hashTable.set("job", "Developer");
hashTable.set("location", "Iran");
hashTable.set("color", "Blue");

// Retrieving values
console.log("Name:", hashTable.get("name")); // Output: "Ali"
console.log("Age:", hashTable.get("age"));   // Output: 30

// Handling collisions (keys with the same hash index)
hashTable.set("eman", "Reza"); // "eman" hashes to the same index as "name"
console.log("Eman:", hashTable.get("eman")); // Output: "Reza"

// Deleting a key-value pair
hashTable.delete("job");
console.log("Job after deletion:", hashTable.get("job")); // Output: undefined

// Display the hash table
console.log("\nHash Table Contents:");
hashTable.display();
