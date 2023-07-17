// Day 2 Excersice Solution

// Exercise Level 2

// Exercise 2.1

const text = "There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
// console.log(text);

//  Exercise 2.2

 const quote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

// console.log(quote);

// Exercise 2.3

const numberOne = "10";
var numberTwo = 10;
console.log(numberOne === numberTwo);

const number = Number(numberOne);
console.log(number === numberTwo);

// Exercise 2.4

const floatNumber = 9.8;
var numberTwo = 10;
console.log(floatNumber === numberTwo);


var numbers = Math.round(floatNumber);
console.log(numbers === numberTwo);

// Exercise 2.5
const control = "Python Jargon";
console.log(text.includes("on"));

// Exercise 2.6

const jargon = "I hope this course is not full of jargon";
console.log(jargon.includes("jargon"));

// Exercise 2.7

var randomNumber = Math.floor((Math.random() * 101));
console.log(randomNumber);

// Exercise 2.8

var randomNumber = Math.floor((Math.random() * 101) + 50);
console.log(randomNumber);

// Exercise 2.9
var randomNumber = Math.floor((Math.random() * 256));
console.log(randomNumber);

// Exercise 2.10

const word = "Javascript";
console.log(word.charAt(Math.floor(Math.random() * word.length)));

/* 
https://mayoyo.hashnode.dev/002-solving-30-days-of-javascript-challenge-questions#heading-10-access-the-javascript-string-characters-using-a-random-number

*/

// Exercise 2.11
console.log(`1\t`.repeat(5), "\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

// Exercise 2.12
const sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.substr(31,23));