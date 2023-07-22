// Day 13 Exercise Solution

// Day 13 Exercise Level 3 Solution

// Exercise 3.1

import countries from "../countries_data.js";


console.time("While Loop Time");
let i = 0;
while (i < countries.length) {
    console.log(countries[i]);
    i++;
}
console.timeEnd("While Loop Time");

console.warn("While Loop Finish");
console.log("---------------");

console.time("For Loop Time");
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
console.timeEnd("For Loop Time");
console.warn("For loop Finish");

console.log("-------------");

console.time("For of Time");

for (const country of countries) {
    console.log(country);
}
console.timeEnd("For of Time");

console.warn("For of Finish");

console.log("----------------");

console.time('ForEach Loop')
countries.forEach(x => console.log(x));
console.timeEnd(`ForEach Loop`);
