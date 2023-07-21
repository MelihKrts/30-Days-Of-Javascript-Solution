// Day 12 Exercise Solution 

// Day 12 Exercise Level 1 Solution

// Exercise 1.1

const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

const regex = /\d+/g;

const value = text.match(regex);

const salary = parseInt(value[0]);
const annual = parseInt(value[1]);
const onlineCourses = parseInt(value[2]);

const annualSalary = salary * 12;
const annualCourses = onlineCourses * 12;
const total = annualSalary + annualCourses + annual;

console.log("Total annual income : ", total, '€');


// Exercise 1.2

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];

const sorted = points.sort((a, b) => a - b);
const maxPoint = Math.max(...points);
const minPoint = Math.min(...points);
const distance = maxPoint - minPoint;

console.log(sorted);
console.log(distance);


// Exercise 1.3

const isValidVariable = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/

function checkValidVariable(variableName) {
    return isValidVariable.test(variableName)
}

console.log(checkValidVariable('first_name'));
console.log(checkValidVariable('first-name'));
console.log(checkValidVariable('first-name'));
console.log(checkValidVariable('firstname'));

