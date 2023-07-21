export const countries = [
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
]

console.log(countries);
// Exercise 2.4

const control = countries.includes("Ethiopia");
let index = countries.findIndex(rank => rank === "Ethiopia");
console.log(index);

console.log(control);
countries[4] = "ETHIOPIA";
console.log(countries);
