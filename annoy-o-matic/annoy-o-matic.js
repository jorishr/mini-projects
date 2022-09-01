// //ask the user for input
// var inputUser = prompt("Are we there yet?");
// //is the answer, yes?
// if (inputUser === "yes") {
//     document.write("We have arrived at the landing page!")
// }
// else {
//   var inputUser = prompt ("Are we there yet?");
// }
//the above will only run once. So construct a loop.
// var inputUser = prompt("Are we there yet?");
//
// while (inputUser !== "yes" && inputUser !== "yeah") {
//   var inputUser = prompt("Are we there yet?");
// }
// //the statement below will only run if the above is true
// document.write("We have arrived at the landing page!")

// VERSION 2.0
//make an advanced version: you don't have to enter "yes", any string with a
// yes inside or a yeah inside is fine
//

// To do this we take advantage of the .indexOf() property.
var str = "Hello World!";
document.write (str.indexOf("r"));
// this will print the index position of "r" in the string "Hello World!".
document.write (str.indexOf("Hello World!"));
//this will result in output of 0, since the entire str starts at index pos 0.
document.write (str.indexOf("a"));
//this wil result in output of -1 because there is no a present in the string.
// Now, we can use this to check if a word is present
// in a string or not.
document.write (str.indexOf("yes"));



var inputUser = prompt("Are we there yet?");

while (inputUser.indexOf("yes") === -1) { // here you use a Number input!
  var inputUser = prompt("Are we there yet?");
}
//the statement below will only run if the above is true
document.write("We have arrived at the landing page!")
