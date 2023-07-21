// Day 3 Exercise Level 2

// Exercise Level 2

// Exercise 2.1

const basePrompt = prompt("Write the base");
const heightPrompt = prompt("Write the Height");

let area = 0.5;
let base = basePrompt;
let height = heightPrompt;

const formules = area * base * height;
alert(formules);

// Exercise 2.2

const peripeterPrompt = prompt("Enter the value of the length of the first side of the triangle");
const secondPerPrompt = prompt("Enter the value of the length of the second side of the triangle");
const thirdPerPrompt = prompt("Enter the value of the length of the third side of the triangle");

let a = peripeterPrompt;
let b = secondPerPrompt;
let c = thirdPerPrompt;

const convertOne = Number(a);
const convertTwo = Number(b);
const convertThree = Number(c);

const perimeter = convertOne + convertTwo + convertThree;
alert(perimeter);

// Exercise 2.3

const lengthPrompt = prompt("Enter the value of the length");
const widthPrompt = prompt("Enter the value of the width");

const length = lengthPrompt;
const width = widthPrompt;
const areaFormul = length * width;
const rectangeleFormul = (Number(length) + Number(width)) * 2;
alert(rectangeleFormul);
alert(areaFormul);

// Exercise 2.4

const raidusPrompt = prompt("Enter the value of the radius");
const radius = raidusPrompt;

const PI = 3.14;
const circleAreaFormul = PI * radius * radius;
alert(circleAreaFormul);

const circumference = 2 * PI * radius;
alert(circumference);

// Exercise 2.5

// y=2x-2 = x=0

//  let a = 1;  // x
//  let b = 2;  // 
//  let c = -2; // y

let chapterA = a / a;
let chapterB = b / a;
let chapterC = c / a;

let xIncertept = -chapterC / chapterB;
console.log(xIncertept);

let yIncertept = chapterC / chapterA;
console.log(yIncertept);

let slope = Math.round(((yIncertept - 0) / (0 - xIncertept)) * 100) / 100;
let slopeTwo = Math.round(((0 - yIncertept) / (xIncertept - 0)) * 100) / 100;

console.log(slope);
console.log(slopeTwo);

// https://mayoyo.hashnode.dev/003-solving-30-days-of-javascript-challenge-questions#heading-6-slope-is-m-y2-y1x2-x1-find-the-slope-between-point-2-2-and-point610

// Exercise 2.6

// Slope m = (y2 - y1) / (x2 - x1) point(2, 2) and point(6, 10)
// (2x1, 2y1), (6x2, 10y2)

let slopeCalculate = (10 - 2) / (6 - 2);
console.log(slopeCalculate);

// Exercise 2.7

// https://mayoyo.hashnode.dev/003-solving-30-days-of-javascript-challenge-questions#heading-6-slope-is-m-y2-y1x2-x1-find-the-slope-between-point-2-2-and-point610

// Exercise 2.8

// https://mayoyo.hashnode.dev/003-solving-30-days-of-javascript-challenge-questions#heading-6-slope-is-m-y2-y1x2-x1-find-the-slope-between-point-2-2-and-point610

// Exercise 2.9

const hoursPrompt = prompt("Enter hours");
const perHoursSalaryPrompt = prompt("Enter rate per hour");

const hours = hoursPrompt;
const perHoursSalary = perHoursSalaryPrompt;

const salaryFormul = hoursPrompt * perHoursSalaryPrompt;
alert(salaryFormul);

// Exercise 2.10

const humanName = "Melih";
if (humanName > 7) {
    console.log("Your name is long")
}

else {
    console.log("Your name is short.");
}

// Exercise 2.11

let firstName = "Melih";
let lastName = "Karataş";


if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
}
else {
    console.log(`Your first name, ${firstName} is short than your family name, ${lastName}`);
}

// Exercise 2.12

let myAge = 250;
let yourAge = 22;

let ageResult = myAge - yourAge;

console.log(`I am ${ageResult} years older than you.`);

// Exercise 2.13

const agePrompt = prompt("Enter birth year");
const birthYear = agePrompt;
const legalAge = 18;
const outputAge = legalAge - birthYear;
if (birthYear >= legalAge) {
    alert(`You are ${birthYear} You are old enough to drive`);
}

else if (birthYear < legalAge) {
    alert(`wait a ${outputAge} years`);
}

else {
    alert("Error");
}

// Exercise 2.14

const ageCalculatorPrompt = prompt("Enter number of years you live");
const ageCalculate = ageCalculatorPrompt;
const secondFormul = ageCalculate * 365 * 24 * 60 * 60;


if (ageCalculate > 100) {
    alert("As a rule, you cannot live more than 100 years");
}
else {
    alert(`You lived ${secondFormul} seconds.`)
}

// Exercise 2.15

const timeFunction = new Date();
let year = timeFunction.getFullYear();
let month = timeFunction.getMonth() + 1;
let day = timeFunction.getDay();
let date = timeFunction.getDate();
let clock = timeFunction.getHours();
let minute = timeFunction.getMinutes();

minute = minute > 9 ? minute : '0' + minute;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // Custom style

const days = ["Monday", "Saturday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; // Custom style 

// Custom style for https://www.youtube.com/watch?v=BVNsL2UiDXg remember subscribe

console.log(`${year}-${months[month]}-${days[day]}  ${clock}':'${minute}`); // Custom style Month name showing
console.log(`${year}-${month}-${date}  ${clock}':'${minute}`); // note Javascript index number = 0 (January) 
console.log(`${date}-${month}-${year}  ${clock}':'${minute}`);
console.log(`${year}/${month}/${date}  ${clock}':'${minute}`);


