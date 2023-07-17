// Day 6 Exercise Solution

// Exercise Level 1

// Exercise 1.1

// For loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While loop

// let i = 0;
while (i < 10) {
    i++;
    console.log(i)
}

// Do-while loop

let i = 0;
do {
    i++;
    console.log(i);
}
while (i < 10)

// Exercise 1.2

// For loop

for (let i = 10; i > 0; i--) {
    console.log(i)
}

// While loop

// let i = 10;
while (i > 0) {
    i--;
    console.log(i)
}

// Do-while loop

// let i = 10;
do {
    i--;
    console.log(i);
} while (i > 0)

// Exercise 1.3

let n = 100; // Custom number

for (let i = 0; i < n; i++) {
    console.log(i);
}


// Exercise 1.4

let string = "";
for (let i = 0; i < 7; i++) {
    string += "#";
    console.log(string);
}

// Exercise 1.5

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}

// Exercise 1.6

let string = "i  i^2  i^3";
console.log(string);
for (let i = 0; i <= 10; i++) {
    console.log(` ${i}  ${i ** 2}  ${i ** 3}`);
}

// Exercise 1.7

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Exercise 1.8

for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Exercise 1.9

/*

https://onecompiler.com/javascript/3ww4c5kmq

*/

let count = 0
// let i, j
for (j = 2; j <= 100; j++) {
    for (i = 1; i <= j; i++) {
        if (j % i == 0)
            count++

    }

    if (count == 2)
        console.log(j)
    count = 0
}

// Exercise 1.10

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

// Exercise 1.11

let evens = 0;
let odd = 0;

for (let a = 0; a <= 100; a++) {
    if (a % 2 == 0) {
        evens += a;
    }
    if (a % 2 == 1) {
        odd += a;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${evens}. And the sum of all odds from 0 to 100 is ${odd}`)

// Exercise 1.12

// let evens = 0;
// let odd = 0;

for (let a = 0; a <= 100; a++) {
    if (a % 2 == 0) {
        evens += a;
    }
    if (a % 2 == 1) {
        odd += a;
    }
}


const sumArray = [];
let split = sumArray.push(evens,odd);

console.log(sumArray)

// Exercise 1.13

let randomNumber = [];
for (let i = 0; i < 5; i++) {
    randomNumber.push(Math.floor(Math.random() * 10));
}
console.log(randomNumber);

// Exercise 1.14

var random = [];
while (random.length < 5) {
    var add = Math.floor(Math.random() * 10) + 1;
    if (random.indexOf(add) === -1) random.push(add);

}
console.log(random);

// Exercise 1.15
const result = Math.random().toString(36).substring(2,7);
console.log(result);