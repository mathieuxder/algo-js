const readlineSync = require("readline-sync")
let int1 = readlineSync.question("Give me number")
let int2 = readlineSync.question("Give me another number")

console.log("Answer is " + Math.trunc( int1 / int2))