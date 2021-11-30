const readlineSync = require("readline-sync");

function calcDistance (a, b)
{
        let distance = Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
        return Math.sqrt(distance);
}

let a = [];
let b = [];
a[0] = parseInt(readlineSync.question("le point A1 svp? "));
a[1] = readlineSync.question("le point A2 svp? ");
b[0] = readlineSync.question("le point B1 svp? ");
b[1] = readlineSync.question("le point B2 svp? ");
console.log (calcDistance(a,b));