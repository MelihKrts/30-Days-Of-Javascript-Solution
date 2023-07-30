# JavaScript Clean Code Write Rules 
Javascript is a programming language. A clean code style should be used to understand the code. The rules for writing clean code are; <br>

- Use camelCase for variables and functions.
- Variable name start a letter. (Javascript variables naming conventions)
- We used the constant keyword in arrays, functions, objects. (Constant value (**const**) )
- Use inverted apostrophe (**backtick**) instead of single and double quotes.
- Leaving gaps for code readability.
- Short arithmetic operator usage.
- Ternary Operator usage.

# Article Example

## Article 1
```javascript
let firstName = "Melih";
let lastName = "Karataş";
```

## Article 2
```javascript
let firstName = "Melih";
```

## Article 3
```javascript
const PI = Math.PI;
const gravity = 9.81;
```
## Article 4

```javascript
let firstName = "Melih";
let age = 22;

console.log(`Person name : ${firstName}, age: ${age}`);
```

## Article 5

```javascript
let firstname = "Melih"; // Whitespace and code readability

let age=22; // Bad Do you right?
```

## Article 6
```javascript
// Long Arithmetic Operator Usage

let a = 2;
let b = 1;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

```
<br>

```javascript
// Short Arithmetic Operator Usage

let a = 2;
let b = 1;
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);
```

<br>

## Article 7
```javascript
let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} The number is greater than ${b}`)
}
else {
    console.log(`${b} The number 4 is greater than ${a}`)
}
```
<br>

```javascript
let a = 4;
let b = 3;

let message = (a > b) ? "The number is greater than 3" : "The number 4 is greater than";
console.log(message);
```