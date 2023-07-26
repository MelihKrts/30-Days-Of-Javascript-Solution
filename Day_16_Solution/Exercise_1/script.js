// Day 16 Exercise Solution

// Day 16 Exercise Level 1 Solution

// Exercise 1.1

const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']

const convert = JSON.stringify(skills);
console.log(convert);

// Exercise 1.2

let age = 250;

const ageJSON = JSON.stringify(age);
console.log(ageJSON);

// Exercise 1.3

let isMarried = true;
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

// Exercise 1.4

const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

const studentConvert = JSON.stringify(student);
console.log(studentConvert);