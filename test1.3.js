const readlineSync = require("readline-sync");
let name = readlineSync.question("what is your name ?");
console.log("Hello" + name);