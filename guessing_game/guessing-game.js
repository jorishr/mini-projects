//Create a secret number: a number or string variable?
var secret = 12;
// You cannot use a string because it will 1-2, not 12.
//create a prompt with input variable

// var input = prompt("Guess what the secret number is...")
//if input variable matches secret variable: write success

// Problem: var secret is data-type: number. But the input from the prompt
// is a string. Thus you can use bolean ==
// if (input == secret) {
//   document.write("Success! You have won the game!");
// }
// Maar beter nog is om de string om te zetten in een data-type:number, en dan
// kan je wel de Bolean === gebruiken want het is hetzelfde type data.
// Number(input);
//
// if (Number(input) === secret) {
//   document.write("Success! You have won the game!");
// }

// Maar het kan nog netter!
var inputString = prompt("Guess what the secret number is...");
var input = Number(inputString);

if (input === secret) {
  document.write("Success! You have won the game!");
}

else if (input > secret) {
    document.write("Sorry! You guessed too high!");
}
// else if (input < 0 || input === NaN) {
//     document.write("Error! Use positive numbers only!");
// }
else {
    document.write("Sorry! You guessed too low!");
}
