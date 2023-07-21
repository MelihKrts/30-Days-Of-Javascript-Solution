// Day 4 Exercise Solution

// Exercise Level 1

// Exercise 1.1

var agePrompt = prompt("Enter your age");
var age = agePrompt;
const localAge = 18;
const waitYear = localAge - age;

if (age > localAge) {
    alert("You are old enough to drive.");
}

else if (age < localAge) {
    alert(`You are left with ${waitYear} years to drive.`)
}

else {
    alert("Error");
}

// Exercise 1.2

var agePrompt = prompt("Enter your age");
var yourAge = agePrompt;
var myAge = 22;

if (yourAge > myAge) {
    alert(`You are  ${yourAge - myAge} years older than me.`)
}

else if (myAge > yourAge) {
    alert(`You are  ${myAge - yourAge} years younger than me.`)
}

else {
    alert("Error");
}

// Exercise 1.3

//  using  if - else 

let a = 4;
let b = 3;

if (a > b) {
    console.log("a is greater than b");
}

else{
    console.log("a is less than b");
}

// ternary operator

// let a = 4;
// let b = 3;
let result = a > b ? "4 is greater than 3" : "3 is greater than 4";
console.log(result);

// Exercise 1.4

var numberPrompt = prompt("Enter a number");
var number = numberPrompt;

if (number % 2 == 0) {
    alert(`${number} is an even number`);
}

else {
    alert(`${number} is an odd number.`)
}