const readlineSync = require("readline-sync");

let dayNum = Number(readlineSync.question('Enter a number between 1 and 7: '));

if(dayNum == 1){
    console.log("Monday");
} else if(dayNum == 2){
    console.log("Tuesday")
} else if(dayNum == 3){
    console.log("Wednesday")
} else if(dayNum == 4){
    console.log("Thursday")
} else if(dayNum == 5){
    console.log("Friday")
} else if(dayNum == 6){
    console.log("Saturday")
} else if(dayNum == 7){
    console.log("Sunday")
} else {
    console.log("Number isn't between 1 and 7.");
}