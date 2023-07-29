// Day 19 Exercise Solution

// Day 19 Exercise Level 2 Solution

// Exercise 2.1

function operations() {
    let number = 0;
    function sum() {
        return number += 2;
    }

    function multiple() {
        return number *= 2
    }

    function sub() {
        return number -= 2;
    }

    return {
        sum,
        multiple,
        sub
    }
}

let number = 0;
let func = operations(number);

console.log(func.sum());
console.log(func.multiple());
console.log(func.sub());
