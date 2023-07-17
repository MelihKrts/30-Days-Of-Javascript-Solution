//  Day 7 Solution

//  Exercise Level 2

//  Exercise 2.1


function change(mat, index, pivot){
    if ((index+1) >= mat.length){
        return;
    }
      let newMat = Object.assign([], mat); 
      for (i = (index+1); i < newMat.length; i++){
            multiplier = newMat[i][pivot] * -1; 
        for (j = 0; j < newMat[i].length; j++){
            newMat[i][j] = newMat[i][j] + (newMat[index][j] * multiplier); 
        }
    }
    return newMat; 
  }

  function normalize(mat, index, pivot){
      let newMat = Object.assign([], mat);
    let multiplier = 1/(newMat[index][pivot]); 
    for (let i = 0; i < newMat[index].length; i++){
        if (newMat[index][i] != 0){
          newMat[index][i] *= multiplier; 
      }
    }
    return newMat; 
  }

  function swap(mat, row1, row2){
      let newMat = Object.assign([], mat); 
    let tempArr = Object.assign([], newMat[row1]); 
    newMat[row1] = Object.assign([], newMat[row2]); 
    newMat[row2] = tempArr; 
    return newMat; 
  }

  function echolonForm(mat){
      let pivots = mat.length-1;
    for (let pivot = 0; pivot < pivots; pivot++){
        mat = normalize(mat, pivot, pivot);
      mat = change(mat, pivot, pivot); 
    }
    return mat; 
  }

  mat = [[-1,-1,3,3],[0,-1,4,6],[0,-4,16,24]] 
  console.log(echolonForm(mat)); 

/*

https://chirath.hashnode.dev/solve-linear-equations-using-javascript-linear-algebra

*/

// Exercise 2.2

function solveQuadratic(a, b, c) {
    let solutions = [];

    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        return solutions;
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        solutions.push(x);
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        solutions.push(x1, x2);
    }

    return solutions;
}

let solutions = solveQuadratic(2, 5, -3);
console.log(solutions);

/* 

https://javascript.plainenglish.io/javascript-program-to-solve-quadratic-equation-with-example-a7b6d68400fc

*/

// Exercise 2.3

function printArray(humanName) {
    let names = ["Melih", "Selim", "Harun"];
    names.forEach(element => {
        console.log(element);
    });
    return humanName
}

printArray()


// Exercise 2.4

function showDateTime() {

    let time = new Date();
    let date = String(time.getDate()).padStart(2, 0);
    let month = String(time.getMonth()).padStart(2, 0);
    let year= time.getFullYear();
    let hours = time.getHours();
    let minute = time.getMinutes();
    let times = `${date}/${month}/${year} ${hours}:${minute}`
    return times;
}

console.log(showDateTime());

// Exercise 2.5

function swapValues(x, y) {
    return (`x= ${y}, y= ${x}`);
}

console.log(swapValues(4, 5));

// Exercise 2.6

let value = ["Ercüment", "Behzat", "Memduh Başgan"];
function reverseArray(arr) {
    var newArray = [];
    for (let i = value.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
console.log(reverseArray(value));


// Exercise 2.7

let names = ["Aslı", "Mustafa", "Selim", "Harun"];
function capitalizeArray(word) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(word[i]);
        word[i] = names[i].toUpperCase();
    }

    return word;
}

console.log(capitalizeArray(names));


// Exercise 2.8

function addItem(arr) {
    let result = [arr];
    return result;
}
console.log(addItem("HTML","CSS","JavaScript"));


// Exercise 2.9 

let array = ["A", "B", "C", "D"];
removeItem = (index) => {
    array.splice(index, 1);
    return array
}

console.log(removeItem(array));

// Exercise 2.10

function sumOfNumbers() {
    let sumOfNumbers = 0;
    [...arguments].forEach(number => sumOfNumbers += number);

    return sumOfNumbers;
}
console.log(sumOfNumbers(25, 15, 25, 15, 25));


// Exercise 2.11

function sumOfOdds() {
    let sumOfNumber = 0;
    [...arguments].forEach(oddsNumber => {
        if (oddsNumber % 2 == 0) return;
        sumOfOdds + oddsNumber;
    })

    return sumOfNumber
}

console.log(sumOfOdds(2, 3, 4, 7));


// Exercise 2.12

function sumOfEven() {
    let evenOfNumber = 0;
    [...arguments].forEach(evenNumber => {
        if (evenNumber % 2 !== 0) return;
        evenOfNumber += evenNumber;
    })

    return evenOfNumber;
}

console.log(sumOfEven(2, 3, 6, 1));


// Exercise 2.13

function evensAndOdds(number) {
    let odd = 0;
    let even = 0;

    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            even++
        }

        else {
            odd++
        }
    }

    return `The number of odds are ${odd}. The number of evens are ${even}.`;
}

console.log(evensAndOdds(100))


// Exercise 2.14

function sumOfNumbers() {
    let sumOfNumbers = 0;
    [...arguments].forEach(number => sumOfNumbers += number);

    return sumOfNumbers;
}
console.log(sumOfNumbers(1,2,3));    


// Exercise 2.15

function randomUserIp() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    let d = Math.floor(Math.random() * 255);

    return `${a}.${b}.${c}.${d}`;
}

console.log(randomUserIp());


// Exercise 2.16

function randomMacAddress() {
    let arr = [];
let length = "0123456789ABCDEF";

    for (let i = 0; i <= 6; i++) {
        let firstBit = Math.floor(Math.random() * 16);
        let lastBit = Math.floor(Math.random() * 16);
        arr.push(length[firstBit] + length[lastBit]);
    }
    return arr.join(":");
}

console.log(randomMacAddress());


// Exercise 2.17

function randomHexaNumberGenerator() {
    let length = "0123456789ABCDEF";
    let hex = "#";

    for (let i = 0; i <= 6; i++) {
        hex += length[Math.floor(Math.random() * 16)];
    }

    return hex
}

console.log(randomHexaNumberGenerator());


// Exercise 2.18

function userIdGenerator(length) {
    let id = "";
    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        id += character.charAt(Math.floor(Math.random() * character.length));
    }

    return id
}

console.log(userIdGenerator(7));
