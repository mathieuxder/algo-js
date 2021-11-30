const readlineSync = require("readline-sync");

 let question = 4;

 console.log("Question left: " + question);
 let userName = readlineSync.question("What's your name? ");
 question -= 1;
 console.log(" ");

 console.log("Question left: " + question);
 let  userAge = new Number(readlineSync.question('What\'s your age? '));
 question -= 1;
 console.log(" ");

 console.log("Question left: " + question);
 let enemyName = readlineSync.question("What's the name you hate the most? ");
 question -= 1;
 console.log(" ");

 console.log("Question left: " + question);
 let dreamCity = readlineSync.question("Where would you like to live? ");
 question -= 1;
 console.log(" ");

 console.log("A long time ago, " + enemyName + " & " + userName + " fell in love.");
 console.log("They were so in love that they had " + userAge + " children.");
 console.log("They were living in " + dreamCity + " but they didn't enjoy it much so they decided to move to Charleroi.");
