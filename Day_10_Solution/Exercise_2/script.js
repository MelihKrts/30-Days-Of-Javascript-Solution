// Day 10 Exercise Solution 

// Day 10 Exercise Level 2 Solution

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
// const c = [...a, ...b]; union 
const countries = ['Finland', 'Sweden', 'Norway']

// Exercise 2.1

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(C);


// Exercise 2.2

let A = new Set(a);
let B = new Set(b);
let c = a.filter((num) => B.has(num));
let C = new Set(c);
console.log(C);

// Exercise 2.3

let A = new Set(a);
let B = new Set(b);
let c = a.filter((num) => !B.has(num));
let C = new Set(c);
console.log(C);


