// Day 9 Exercise Solution

// Day 9 Exercise Level 1 Solution


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Exercise 1.1

// Foreach:  Used to loop through each array element (only for arrays).

// Map:  Similar to foreach but we can change the property of the element

// Filter: Belli duruma göre filtreleme yapar.  It filters according to the specific situation.

// Reduce: Returns a single value.

 


// Exercise 1.2

numbers.forEach(num => {
    console.log(num);
});

// Exercise 1.3

countries.forEach(country => {
    console.log(country);
})


// Exercise 1.4

names.forEach(humanName => {
    console.log(humanName);
})


// Exercise 1.5

numbers.forEach(number => {
    console.log(number);
})


// Exercise 1.6

const countryUpper = countries.map((country) => country.toUpperCase());
console.log(countryUpper);


// Exercise 1.7

const countryLength = countries.map((country) => country.length);
console.log(countryLength);

// Exercise 1.8

const numberSquare = numbers.map((numSqrt) => numSqrt ** numSqrt)
console.log(numberSquare);

// Exercise 1.9

const upperName = names.map((humanName) => humanName.toUpperCase());
console.log(upperName);

// Exercise 1.10

const mappedProducts = products.map(item => {
    if (typeof item.price === "number") {
        return { ...item, price: item.price }
    }
    else
        return { ...item, price: 0 }
})

console.log(mappedProducts);

// Exercise 1.11


const filteredCountry = countries.filter(country => {
    return country.includes('land');
})
console.log(filteredCountry);  // Pay attention to case sensitivity Output ['Finland']


const findLand = countries.filter(countryLand => countryLand.toLowerCase().includes("land"));
console.log(findLand) // is true [ 'Finland', 'IceLand' ]

// Exercise 1.12

const sixCharacter = countries.filter(country => {
    if (country.length === 6) {
        return countries;
    }
})

console.log(sixCharacter);


// Exercise 1.13

const sixCharacterLength = countries.filter(country => {
    if (country.length >= 6) {
        return countries
    }
})

console.log(sixCharacterLength);

// Exercise 1.14

const countryControl = countries.filter(country => country.startsWith('E'));
console.log(countryControl);

// Exercise 1.15

const price = products.filter((productsValue => productsValue.price > 0));
console.log(price);

// Exercise 1.16

function getStirngList(stringValue) {
    const stringControl = stringValue.filter(item => typeof item === "string")
    return stringControl;
}

const array = [1, 2, "Banana", "Hello", 94, 17, "1", "#FF0000"];
console.log(getStirngList(array));


// Exercise 1.17

const total = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(total);

// Exercise 1.18

const concatenatedSentence = countries.reduce((sentence, country, index) => {
    if (index === countries.length - 1) {
      return sentence + 'and ' + country;
    } else {
      return sentence + country + ', ';
    }
  }, 'Estonia, ') + ' are north European countries';

  console.log(concatenatedSentence);


// Exercise 1.19

// Some   :   Checks whether all items are similar.
// Every  :   Checks whether some items are similar.

// Exercise 1.20

const someControl = names.some(len => len.length > 7);
console.log(someControl);

// Exercise 1.21

const allCountriesContainLand = countries.every(country => country.includes('land'));
console.log(allCountriesContainLand);


// Exercise 1.22

// Find      :   Returns the first value of the condition met // Koşulun ilk değeri
// FindIndex :   Returns the position of the first element that satisfies the condition // Koşulu sağlayan ilk öğenin konumunu


// Exercise 1.23

const firstSixLettersCountry = countries.find(country => country.length === 6);
console.log(firstSixLettersCountry);

// Exercise 1.24

const indexSixLettersCountry = countries.findIndex(country => country.length == 6);
console.log(indexSixLettersCountry);

// Exercise 1.25

const findNorway = countries.findIndex(country => country === "Norway");
console.log(findNorway);

// Exercise 1.26

const findRussia = countries.findIndex(counrty => counrty === "Russia");
console.log(findRussia); // Russia not found 