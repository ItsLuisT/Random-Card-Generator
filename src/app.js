/* eslint-disable */
import "bootstrap";
import "./style.css";

let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let suit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
let randomsuit = Math.floor(Math.random() * suit.length);
let suitVal = suit[randomsuit];
document.getElementById("top-suit").innerHTML = suitVal;
document.getElementById("bottom-suit").innerHTML = suitVal;
let randomNumber = Math.floor(Math.random() * numbers.length);
document.getElementById("card-number").innerHTML = numbers[randomNumber];

if (suitVal === "&hearts;" || suitVal === "&diams;") {
  document.getElementById("top-suit").style.color = "red";
  document.getElementById("bottom-suit").style.color = "red";
}
console.log(document.getElementById("top-suit").innerHTML);
