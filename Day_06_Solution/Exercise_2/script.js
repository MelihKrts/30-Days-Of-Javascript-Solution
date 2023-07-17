//  Day 6 Exercise Solution

// Exercise Level 2

// Exercise 2.1

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

console.log(makeid(30));

// Exercise 2.2

const hexCode = () => {
    let hex = (Math.random() * 0xfffff * 100000).toString(16);
    return '#' + hex.slice(0, 6);
};

console.log(hexCode());

// Exercise 2.3

function randomRgb() {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var rgbColor = `rgb(${x},${y},${z})`;
    return rgbColor
}

console.log(randomRgb());

// Exercise 2.4

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

for (let i = 0; i < countries.length; i++) {
    countries[i] = countries[i].toUpperCase();
}

console.log(countries);

// Exercise 2.5

for (let i = 0; i < countries.length; i++) {
    countries[i] = countries[i].length;
}
console.log(countries);

// Exercise 2.6

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ];

let short = '';
for (let i = 0; i < countries.length; i++) {
    short += countries[i].slice(0, 3 ,'').toUpperCase();
}
console.log(short);


const emptyArray = [];
const countryCode = ['ALB', 'BOL', 'CAN', 'DEN', 'ETH', 'FIN', 'GER', 'HUN', 'IRE', 'ICE', 'JAP', 'KEN'];
for (let i = 0; i < countries.length; i++) {
    emptyArray.push([countries[i], countryCode[i], countries.length])
}
console.log(emptyArray);

// Exercise 2.7

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ];

const arr = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land'))
        arr.push(countries[i])
}
if (arr.length > 0)
    console.log(arr);
else
    console.log('All these are countries without land')

// Exercise 2.8

// const arr = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('ia'))
        arr.push(countries[i])
}
if (arr.length > 0)
    console.log(arr);
else
    console.log('All these are countries without land')

// Exercise 2.9

/* 
https://stackoverflow.com/questions/6521245/finding-longest-string-in-array
*/

let longest = countries.sort((a, b) => b.length - a.length)[0];
console.log(longest);

// Exercise 2.10

let fiveArr = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        fiveArr.push(countries[i]);
    }
}
console.log(fiveArr);

// Exercise 2.11

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// let longest = webTechs.sort((a, b) => b.length - a.length)[0];
console.log(longest);

// Exercise 2.12

let allWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    allWebTechs.push([webTechs[i], webTechs[i].length])
}
console.log(allWebTechs)

// Exercise 2.13

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let mern = '';
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 1);
}
console.log(mern);

// Exercise 2.14

const array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (let techs of array) {
    console.log(techs);
}

// Exercise 2.15

/* 

https://codingbeautydev.com/blog/javascript-reverse-array-without-modifying/

*/

const fruit = ['banana', 'orange', 'mango', 'lemon'];
const reverse = [];
for (let i = fruit.length - 1; i >= 0; i--) {
    reverse.push(fruit[i]);
}
console.log(reverse);

// Exercise 2.16

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

fullStack.forEach((fullStack) => {
    fullStack.forEach((techs) => {
        var upper = techs.toUpperCase();
        console.log(upper);
    })
})

/* 

https://www.programiz.com/javascript/multidimensional-array

*/


