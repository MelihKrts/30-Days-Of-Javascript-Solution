// Day 5 Exercise Solution

// Exercise Level 2

//  Exercise 2.1

// See main.js 

// Exercise 2.2

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// console.log(text);
let replace = text.replace(/[^a-zA-Z0-9 ]/gi, '');
// console.log(replace);
let split = replace.split(' ');
console.log(split);
console.log(split.length);

// Exercise 2.3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

// add 'Meat' in the beginning of your shopping cart if it has not been already added

let meat = shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

let sugar = shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey  (I'm not allergic to honey so I'm making this the command line)

const removeHoney = shoppingCart.splice(4, 1);
console.log(shoppingCart);


// Alternative 

/*
 https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/#remove-an-element-at-any-position-of-an-array-with-slice-and-concat

 */

const newShoppingCart = [];
for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] !== "Honey") {
        newShoppingCart.push(shoppingCart[i]);
    }
}

console.log(newShoppingCart);

const modify = shoppingCart[4] = "Green Tea";
console.log(shoppingCart);

// Exercise 2.4

// See countries.js

// Exercise 2.5

// See web_techs.js

// Exercise 2.6

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);