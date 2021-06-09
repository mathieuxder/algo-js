const readlineSync = require("readline-Sync")
let int = readlineSync.question("Give me number ")
let float = readlineSync.question("Give me another ")
console.log("Answer is = " + Math.trunc (int * float) )