// Day 8 Exercise Solution

// Day 8 Exercise Level 2 Solution

// Exercise 2.1

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// const result = Object.entries(users).sort((a, b) => a[1].skills.length - b[1].skills.length).pop();
// console.log(result)


// Exercise 2.2

const result = Object.values(users).filter(user => user.isLoggedIn).length;
const bigPoints = Object.values(users).filter(user => user.points >= 50).length

console.log(bigPoints);
console.log(result);


// Exercise 2.3

const mern = Object.entries(users).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name).join(", ")
console.log(mern)  

/*
https://stackoverflow.com/questions/72616225/1-count-logged-in-users-count-users-having-greater-than-equal-to-50-points-from 
*/


// Exercise 2.4

const copyUsers = Object.assign({}, users);
copyUsers["Melih"] = { email: "melih@melih.com", skills:["HTML","CSS","JavaScript"],age:22,isLoggedIn:false,points:30};

console.log(users);
console.log(copyUsers)


// Exercise 2.5

// const keys = Object.keys(users);
console.log(keys);


// Exercise 2.6

const value = Object.values(users);
console.log(value);


// Exercise 2.7

import {
    countries
} from './countries.js'

const keys = countries[Object.keys(countries)[72]];
console.log("Name: ", keys.name.official);
console.log("Capital: ", keys.capital);
console.log("Populations: ", keys.population);
console.log("Languages: ", keys.languages);