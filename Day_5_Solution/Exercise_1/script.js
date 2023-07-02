// Day 5 Exercise Solution

// Exercise Level 1

// Exercise 1.1

const arrays = [];

// Exercise 1.2

const speakLang = ["Turkish", "English", "German", "French", "Spanish"];

// Exercise 1.3

console.log(speakLang.length);

//  Exercise 1.4

firstValue = speakLang[0];
hydrangea = speakLang[2];
let lastIndex = speakLang.length - 1;
lastIndex = speakLang[lastIndex];
console.log(firstValue, hydrangea, lastIndex);

// Exercise 1.5

const mixDataTypes = ["Melih", 22, false, undefined, null, {}];
console.log(mixDataTypes.length);

// Exercise 1.6

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Exercise 1.7

console.log(itCompanies);

// Exercise 1.8

console.log(itCompanies.length);

// Exercise 1.9

let firstIndex = itCompanies[0];
let hydrangea = itCompanies[3];
let lastIndex = itCompanies.length - 1;
lastIndex = itCompanies[lastIndex];

console.log(firstIndex, lastIndex, hydrangea);

// Exercise 1.10

console.log(itCompanies);

// Exercise 1.11

let upperCase = itCompanies.map(element => element.toUpperCase()); // array all of value uppercase
console.log(upperCase);

console.log(itCompanies[0].toUpperCase()); 
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// Exercise 1.12

const sentence = "Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.";
let split = sentence.split(' ');
console.log(split);

// Exercise 1.13

let index = itCompanies.indexOf('Amazon')

if (index === -1) {
    console.log('company is not found');
}
else {
    console.log(itCompanies[index]); // return Amazon
}

// -----------------------------------------------------

let index = itCompanies.indexOf("Twitter")
if (index === -1) {
    console.log("company is not found"); // No twitter value in the array
}
else {
    console.log(itCompanies[index]);
}

// Exercise 1.14

let filterControl = [];
for (let i = 0; i < itCompanies.length; i++) {
    filterControl.push(itCompanies[i].includes('o'));
}

console.log(filterControl);

// Exercise 1.15

console.log(itCompanies.sort());

// Exercise 1.16

console.log(itCompanies.reverse());

// Exercise 1.17

console.log(itCompanies.slice(0, 3));

// Exercise 1.18

console.log(itCompanies.slice(4, 7));

// Exercise 1.19

console.log(itCompanies.slice(3,4));

// Exercise 1.20

itCompanies.shift();
console.log(itCompanies);

// Exercise 1.21

const middleRemove = itCompanies.splice(3, 1);
console.log(itCompanies);

// Exercise 1.22

itCompanies.pop();
console.log(itCompanies);