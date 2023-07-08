// Day 7 Exercise Solution

// Exercise Level 3 Solution

// Exercise 3.1

function userIdGeneratedByUser() {

    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let prompts = parseInt(prompt("Enter number of characters"));
    let secondPrompt = parseInt(prompt("Enter number of length"));

    let firstID = [];

    for (let i = 0; i < prompts; i++) {
        firstID[i] = "";
        for (s = 0; s < secondPrompt; s++) {
            firstID[i] += character[Math.floor(Math.random() * character.length)];
        }
    }

    console.log(firstID);
    firstID.forEach(function (id) {
        console.log(id)
    })
}

userIdGeneratedByUser();


// Exercise 3.2

function rgbColorGenerator() {
    let rgb = "rgb";
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `${rgb}(${r},${g},${b})`;
}

console.log(rgbColorGenerator());


// Exercise 3.3

function arrayOfHexaColors() {
    let hex = "0123456789ABCDEF";
    let hexCodes = [];
    let hexArray = [];

    for (let i = 0; i <= 6; i++) {
hexArray.push(hex[Math.floor(Math.random() * 16)]);
    }
    hexCodes.push("#" + hexArray.join(''));

    return hexCodes;
}

console.log(arrayOfHexaColors());


// Exercise 3.4

function arrayOfRgbColors() {
    let text = "rgb";
    let rgbArray = [];

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    for (let i = 0; i < 1; i++) {
        rgbArray.push(text, r, g, b);
    }

    return rgbArray

}

console.log(arrayOfRgbColors());


// Exercise 3.5

const convertHexaToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // return {r, g, b} 
    return `${r}, ${g}, ${b}`;
}

console.log(convertHexaToRgb("#ED5A498"));

/*

https://learnersbucket.com/examples/interview/convert-hex-color-to-rgb-in-javascript/

*/


// Exercise 3.6

const convertRgbToHexa = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + convertRgbToHexa(r) + convertRgbToHexa(g) + convertRgbToHexa(b)
}

console.log(rgbToHex(255, 51, 255));

/*

https://learnersbucket.com/examples/interview/convert-rgb-to-hex-color-in-javascript/

*/

// Exercise 3.7

function generateColors(type, num) {
    let hexchar = "0123456789ABCDEF";
    let color = [];
    if (type == 'rgb') {
        for (let i = 0; i < num; i++) {
            let rgbArray = [];
            for (let j = 0; j < 3; j++) {
                let random = Math.floor(Math.random() * 255);
                rgbArray.push(random);
            }
            let stringTo = rgbArray.join(',');
            finalValue = `rgb(${stringTo})`;
            color[i] = finalValue;
        }
    }

    else if (type == 'hex') {
        for (let i = 0; i < num; i++) {
            color[i] = "#";
            for (let a = 0; a < 6; a++) {
                let b = Math.floor(Math.random() * hexchar.length);
                color[i] += hexchar[b];
            }
        }
    }

    return color
}

console.log(generateColors('hex', 3))
console.log(generateColors('hex', 1))
console.log(generateColors('rgb', 3))
console.log(generateColors('rgb', 1))


/* 

https://stackoverflow.com/questions/72690428/function-to-generate-specified-number-of-random-hex-and-rgb-colors

*/

// Exercise 3.8

function shuffleArray(arr) {
    let randomArr = [];
    while (arr.length > 0) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        remove = arr.splice(randomIndex, 1)[0];

        randomArr.push(remove);
    }

    return randomArr
}

console.log(shuffleArray(["1", "2", "3", "4", "5"]));


// Exercise 3.9

function factorial(facNumber) {
    if (facNumber < 1) return 1;
    return facNumber * factorial(facNumber - 1)
}

console.log(factorial(4));


// Exercise 3.10

function isEmpty(value) {
    if (value === undefined) {
        return 'Empty'
    }
    else {
        return "Not Empty";
    }

}

console.log(isEmpty("Text"));


// Exercise 3.11

function sum() {
    let sumOfNumbers = 0;
    [...arguments].forEach(number => sumOfNumbers += number);

    return sumOfNumbers;
}
console.log(sum(1, 2, 3));


// Exercise 3.12

function sumOfArrayItems(array) {
    let result = 0;

    for (item of array) {
        if (typeof item !== "number") {
            result = 'No other value can be entered except number';
            break;
        }
        result += item
    }

    return result;
}
console.log(sumOfArrayItems([25, 25, 50, 100]));


// Exercise 3.13

function sumOfArrayItems(array) {
    let result = 0;

    for (item of array) {
        if (typeof item !== "number") {
            result = 'No other value can be entered except number';
            break;
        }
        result += item
    }

    return Math.floor(result / array.length);
}
console.log(sumOfArrayItems([25, 25, 50, 100]));


// Exercise 3.14

let modifyArray = arr => {
    if (arr.length < 5) return 'Item Not Found!';
    arr[4] = arr[4].toUpperCase();
    return arr;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));


// Exercise 3.15

function isPrime(number) {
    let r;

    for (let i = 2; i <= number; i += 2) {
        if (Number.isInteger(number / i)) {
            r = false
        }
        else {
            r = true
        }
    }

    console.log(r)
}

isPrime(7)


// Exercise 3.16

function unique(arr) {
    for (let x = 1; x < arr.length; x++) {
        for (let i = 0; i < x; i++) {
            if (arr[x] == arr[i])
                return false;
        }
    } return true;
}
console.log(unique([1, 2, 3, 4]));
console.log(unique(["1", "2", "3", "4", "1"]));


// Exercise 3.17

function isSameType(array) {
    let arrayIntoString;
    isSame = true;

    array.forEach(el => arrayIntoString += typeof el)

    array.forEach(el => {
        let regExp = new RegExp(typeof el, 'gi');

        if (arrayIntoString.match(regExp).length !== array.length) {
            isSame = false
        }
    })

    return isSame === true ? 'Is Checked'
        : 'Not checked'
}
console.log(isSameType([2, "2"]))


// Exercise 3.18

function isValidVariable(name) {
    try {
        Function('var ' + name);
    } catch (e) {
        return false;
    }
    return true;
}
console.log(isValidVariable('.test'));


// Exercise 3.19

function randomNumbers() {
    var max = 7;
    var random = [];
    for (var i = 0; i < max; i++) {
        var total = Math.floor(Math.random() * max);
        if (random.indexOf(total) == -1) {
            random.push(total);
        }
        else
            i--;
    }
    console.log(random)
}

console.log(randomNumbers())


// Exercise 3.20

function reverseCountries() {
    let countries = ["Turkey", "Albania", "Bolivia", "Italy", "Macao", "Portugal"];
    let copy = [...countries];
    countries.reverse();
    return countries
}

console.log(reverseCountries());
