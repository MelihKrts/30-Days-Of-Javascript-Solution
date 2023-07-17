// Day 10 Exercise Solution

// Day 10 Exercise Level 1 Solution

// Exercise 1.1

const empty = new Set();
console.log(empty);

// Exercise 1.2

const numberLoop = new Set();
for (let i = 0; i <= 10; i++) {
    numberLoop.add(i);
}
console.log(numberLoop);


// Exercise 1.3

const companies = new Set(['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']);
companies.delete("Oracle");
console.log(companies);

// Exercise 1.4

const number = new Set([1, 2, 3, 4, 5]);
number.clear();
console.log(number);

// Exercise 1.5

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Turkish',
    'Spanish',
    'English',
    'French',
    'Turkish',
];

const setOfLanguuage = new Set(languages);
console.log(setOfLanguuage);


// Exercise 1.6

const country = ["Turkey", "England", "Spain", "Portugal", "Italy"];
const countryMap = new Map();

country.forEach((countries) => {
    countryMap.set(countries, countries.length);
})

console.log(countryMap);
