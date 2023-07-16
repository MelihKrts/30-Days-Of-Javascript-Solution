// Day 9 Exercise Solution

// Day 9 Exercise Level 2 Solution


// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Exercise 2.1

// const totalPrice = products.map(product => product.price).filter(price => price > 0).reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);
// console.log(totalPrice);

// Exercise 2.2

// const totalPrice = products.reduce((accumulator, currentProduct) => {
//     const price = parseFloat(currentProduct.price);
//     if (!isNaN(price)) {
//         return accumulator + price;
//     }
//     return accumulator
// }, 0);

// console.log(totalPrice);

// Exercise 2.3

const countries = require('./countries_data.js');

// function categorizeCountries() {
//   const patterns = ['land', 'ia', 'island', 'stan'];
//   const categorizedCountries = {};

//   patterns.forEach((pattern) => {
//     const countriesWithPattern = countries.filter((country) =>
//       country.name.toLowerCase().includes(pattern.toLowerCase())
//     );
//     categorizedCountries[pattern] = countriesWithPattern;
//   });

//   return categorizedCountries;
// }

// const categorizedCountries = categorizeCountries();
// console.log(categorizedCountries);


// Exercise 2.4

// function countStartingLetters() {
//   const letterCounts = {};
//   countries.forEach((country) => {
//     const firstLetter = country.name.charAt(0).toUpperCase();
//     if (/[A-Z]/.test(firstLetter)) {
//       letterCounts[firstLetter] = (letterCounts[firstLetter] || 0) + 1;
//     }
//   });

//   const resultArray = Object.entries(letterCounts).map(([letter, count]) => ({
//     letter,
//     count,
//   }));

//   return resultArray;

// }

// console.log(countStartingLetters());


// Exercise 2.5

// function getFirstTenCountries() {
//   const firstTenCountries = countries.slice(0, 10);
//   return firstTenCountries;
// }

// console.log(getFirstTenCountries())

// Exercise 2.6

// function getLastTenCountries() {

//   const lastTenCountries = countries.slice(-10);
//   return lastTenCountries;
// }

// console.log(getLastTenCountries());


// Exercise 2.7

function findMostUsedInitialLetter() {
  const initialLetterCounts = countries.reduce((counts, country) => {
    const firstLetter = country.name.charAt(0).toUpperCase();
    if (/[A-Z]/.test(firstLetter)) {
      counts[firstLetter] = (counts[firstLetter] || 0) + 1;
    }
    return counts;
  }, {});

  let mostUsedLetter = '';
  let maxCount = 0;

  for (const letter in initialLetterCounts) {
    if (initialLetterCounts[letter] > maxCount) {
      maxCount = initialLetterCounts[letter];
      mostUsedLetter = letter;
    }
  }

  return mostUsedLetter;
}

console.log(findMostUsedInitialLetter());