const message = "hello world!";

function findFirstChar(str) {
    let table = {};
    for (let char of str) {
        if (table[char]) {
            return char;
        }
        table[char] = 1;
    }
}

// function findFirstChar(str) {
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] == str[j]) {
//                 return str[i];
//             }
//         }
//     }
// }
console.log(findFirstChar(message));
