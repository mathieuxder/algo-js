const readlineSync = require("readline-Sync")
let shoes = readlineSync.question("Size of your shoes ? ")
let birth = readlineSync.question("Your birth years ? ")
console.log(shoes * 2 + 5 * 50 /birth + 1766)